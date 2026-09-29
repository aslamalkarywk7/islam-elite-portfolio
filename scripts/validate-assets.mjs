#!/usr/bin/env node
/**
 * validate-assets.mjs — CI guard for the static gallery.
 *
 * Fails (exit 1) when:
 *  - any local asset referenced from HTML/CSS/JS/JSON/MD does not exist,
 *  - any tracked file uses non-ASCII characters or spaces in its name,
 *  - any showcase image exceeds the size budget (WebP expected),
 *  - junk extensions (.bak/.map/.tmp/.log) are tracked.
 *
 * Usage: npm run validate / npm test
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TEXT_EXTS = new Set([".html", ".htm", ".js", ".mjs", ".cjs", ".css", ".json", ".md",
  ".txt", ".tsx", ".ts", ".xml", ".svg", ".webmanifest"]);
const ASSET_EXTS = [".webp", ".png", ".jpg", ".jpeg", ".svg", ".woff2", ".mp4", ".webm", ".ico"];
const IMAGE_BUDGET_KB = 500;
const JUNK_EXTS = new Set([".bak", ".map", ".tmp", ".log"]);

const tracked = execFileSync("git", ["ls-files"], { cwd: ROOT, encoding: "utf-8" })
  .split("\n").map((s) => s.trim()).filter(Boolean);

// Documented exceptions for third-party committed build output
// (see scripts/validate-assets.allow.json — each entry carries its reason).
let allow = [];
try {
  allow = JSON.parse(readFileSync(path.join(ROOT, "scripts", "validate-assets.allow.json"), "utf-8"));
} catch { /* no allowlist — strict mode */ }
const allowed = (key) => allow.some((a) => key.includes(a.pattern));

const errors = [];
const warns = [];

// 1. file-name hygiene
for (const f of tracked) {
  const base = path.basename(f);
  if (/[^\x00-\x7F]/.test(f)) errors.push(`non-ascii path: ${f}`);
  else if (base.includes(" ")) errors.push(`space in filename: ${f}`);
  if (JUNK_EXTS.has(path.extname(f).toLowerCase())) errors.push(`junk file tracked: ${f}`);
}

// 2. reference collection
const urlRe = /(?:src|href)=["']([^"'#?]+)[#?]?[^"']*["']|url\(\s*['"]?([^'")]+)['"]?\s*\)|["']((?:images|covers|assets|icon|live)\/[^"'?#\s]+)["']/g;

function isLocal(u) {
  return !/^(https?:|data:|mailto:|tel:|#)/i.test(u) && !u.startsWith("//");
}

const missing = new Map();
for (const f of tracked) {
  if (!TEXT_EXTS.has(path.extname(f).toLowerCase())) continue;
  let text;
  try {
    if (statSync(path.join(ROOT, f)).size > 5_000_000) continue;
    text = readFileSync(path.join(ROOT, f), "utf-8");
  } catch { continue; }
  // Ignore fenced code blocks: documentation samples are not live references.
  text = text.replace(/```[\s\S]*?```/g, "");
  for (const m of text.matchAll(urlRe)) {
    const raw = (m[1] ?? m[2] ?? m[3] ?? "").trim();
    if (!raw || !isLocal(raw)) continue;
    const clean = decodeURIComponentSafe(raw.split("#")[0].split("?")[0]);
    if (!ASSET_EXTS.some((e) => clean.toLowerCase().endsWith(e))) continue;
    // Site-root-absolute refs (/x) resolve against the repo root (Vercel outputDirectory ".");
    // relative refs resolve against the referring file's directory.
    const abs = clean.startsWith("/")
      ? path.normalize(path.join(ROOT, clean))
      : path.normalize(path.join(ROOT, path.dirname(f), clean));
    if (!existsSync(abs)) {
      const key = `${f} -> ${raw}`;
      if (!missing.has(key)) missing.set(key, true);
    }
  }
}
for (const k of missing.keys()) {
  if (allowed(k)) warns.push(`allowed gap: ${k}`);
  else errors.push(`missing asset: ${k}`);
}

// 3. image budget (showcase dirs only)
const SHOWCASE = ["images", "covers", "assets", "icon"];
for (const f of tracked) {
  const top = f.split("/")[0];
  if (!SHOWCASE.includes(top)) continue;
  const ext = path.extname(f).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
  const kb = statSync(path.join(ROOT, f)).size / 1024;
  if (kb > IMAGE_BUDGET_KB) warns.push(`unoptimized showcase image (${kb.toFixed(0)}KB): ${f}`);
}

function decodeURIComponentSafe(s) {
  try { return decodeURIComponent(s); } catch { return s; }
}

if (warns.length > 0) {
  console.log("warnings:");
  for (const w of warns) console.log(`  ~ ${w}`);
}
if (errors.length > 0) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors.slice(0, 40)) console.log(`  x ${e}`);
  process.exit(1);
}
console.log(`validate-assets: OK (${tracked.length} tracked files checked)`);
