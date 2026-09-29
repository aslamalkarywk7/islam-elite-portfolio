#!/usr/bin/env node
/**
 * optimize-images.mjs — reproducible showcase-asset pipeline.
 *
 * Converts JPG/PNG showcase images to WebP, caps dimensions, rewrites every
 * textual reference (HTML/CSS/JS/JSON/MD) to the new file, then `git rm`s the
 * originals so history stays clean.
 *
 * Usage:
 *   npm run optimize:images
 *   node scripts/optimize-images.mjs --dry-run
 *   node scripts/optimize-images.mjs --quality 80 --max-width 1400 --min-kb 30
 *
 * Scope is intentionally limited to *showcase* assets (root gallery + covers).
 * Prebuilt demo bundles under live/<demo>/_next|assets are build output and
 * are left untouched.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TARGET_DIRS = ["images", "covers", "assets", "icon", path.join("live", "mywebsite", "img-website")];
const TEXT_EXTS = new Set([".html", ".htm", ".js", ".mjs", ".cjs", ".css", ".json", ".md",
  ".txt", ".tsx", ".ts", ".xml", ".svg", ".webmanifest", ".yml", ".yaml"]);
const IMG_EXTS = new Set([".jpg", ".jpeg", ".png"]);

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = /^--([^=]+)(?:=(.*))?$/.exec(a);
    return m ? [m[1], m[2] ?? true] : ["_", a];
  }),
);
const DRY = args["dry-run"] === true || args["dry-run"] === "true";
const QUALITY = Number(args.quality ?? 82);
const MAX_W = Number(args["max-width"] ?? 1600);
const MIN_KB = Number(args["min-kb"] ?? 30);

const git = (cmd) =>
  execFileSync("git", cmd, { cwd: ROOT, encoding: "utf-8", stdio: ["ignore", "pipe", "pipe"] });

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === ".git" || e.name === "node_modules") continue;
      walk(p, out);
    } else out.push(p);
  }
  return out;
}

const files = TARGET_DIRS.flatMap((d) => {
  const abs = path.join(ROOT, d);
  return existsSync(abs) ? walk(abs) : [];
});
const candidates = files.filter((f) => {
  const ext = path.extname(f).toLowerCase();
  if (!IMG_EXTS.has(ext)) return false;
  return statSync(f).size >= MIN_KB * 1024;
});

console.log(`candidates: ${candidates.length} (quality=${QUALITY}, maxW=${MAX_W}, minKb=${MIN_KB})`);

let inBytes = 0;
let outBytes = 0;
const pairs = [];
for (const src of candidates) {
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
  if (existsSync(webp)) {
    console.log(`skip (exists): ${path.relative(ROOT, webp)}`);
    continue;
  }
  inBytes += statSync(src).size;
  if (DRY) {
    pairs.push([src, webp]);
    continue;
  }
  const img = sharp(src, { failOn: "none" }).rotate();
  const meta = await img.metadata();
  const pipe = (meta.width ?? 0) > MAX_W ? img.resize({ width: MAX_W, withoutEnlargement: true }) : img;
  await pipe.webp({ quality: QUALITY, effort: 5 }).toFile(webp);
  outBytes += statSync(webp).size;
  pairs.push([src, webp]);
}

const rel = (p) => path.relative(ROOT, p).replace(/\\/g, "/");
const repl = pairs.map(([a, b]) => [rel(a), rel(b)]).sort((x, y) => y[0].length - x[0].length);

if (!DRY) {
  // 1. rewrite references
  const texts = walk(ROOT).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
  let touched = 0;
  const { readFileSync, writeFileSync } = await import("node:fs");
  for (const t of texts) {
    if (statSync(t).size > 5_000_000) continue;
    let s = readFileSync(t, "utf-8");
    const before = s;
    for (const [o, n] of repl) s = s.split(o).join(n);
    if (s !== before) {
      writeFileSync(t, s);
      touched++;
    }
  }
  console.log(`references rewritten in ${touched} files`);
  // 2. git rm originals (only where webp exists and is non-empty)
  let removed = 0;
  for (const [a, b] of pairs) {
    if (existsSync(b) && statSync(b).size > 0) {
      git(["rm", "-q", rel(a)]);
      removed++;
    } else {
      console.log(`KEEP (no output): ${rel(a)}`);
    }
  }
  console.log(`removed originals: ${removed}`);
}

const fmt = (n) => `${(n / 1048576).toFixed(1)}MB`;
console.log(`input: ${fmt(inBytes)} -> webp: ${DRY ? "?" : fmt(outBytes)}` +
  (DRY || inBytes === 0 ? "" : ` (saved ${(((inBytes - outBytes) / inBytes) * 100).toFixed(1)}%)`));
if (DRY) {
  mkdirSync(path.join(ROOT, "node_modules"), { recursive: true });
  console.log("dry run — no files written. Drop --dry-run to apply.");
}
