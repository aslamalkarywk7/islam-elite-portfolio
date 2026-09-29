# Assets

## Naming (enforced by `npm test`)

- ASCII only, lowercase **kebab-case**, no spaces:
  `hero-doctor.jpg` ✅ / `صورة دكتور.jpg` ❌ / `Screenshot 2026-05-19 170840.png` ❌
- Descriptive slugs over hashes/numbers: `elegant-dashboard-interface.png` ✅ / `1.png` ⚠️ (tolerated when referenced)
- Folders follow the same rule: `img-website/dashboard/` ✅

## Formats & budgets

| Asset | Format | Budget |
|---|---|---|
| Showcase images (`images/`, `covers/`, `assets/`, `icon/`) | **WebP** q82, max width 1600px (covers 1200px) | ≤ 500KB each (`npm test` warns above) |
| Covers | WebP preferred, SVG for vector marks | same |
| Files under `live/<demo>/_next`, `live/<demo>/assets` | untouched build output | n/a |

## Pipeline

```bash
npm run optimize:images            # convert + rewrite refs + git rm originals
npm run optimize:images -- --dry-run --quality 80 --max-width 1400 --min-kb 30
```

[`../scripts/optimize-images.mjs`](../scripts/optimize-images.mjs) converts,
rewrites references (full **and** relative path forms), and removes originals
via `git rm` so history stays reviewable. Small files (< 30KB) are skipped —
converting them rarely pays off.

## Validation & exceptions

```bash
npm run validate   # also `npm test`, and CI on every push/PR
```

[`../scripts/validate-assets.mjs`](../scripts/validate-assets.mjs) fails on:
missing local references, non-ASCII/space file names, tracked junk
(`.bak/.map/.tmp/.log`), and warns on oversized showcase images.

Genuine upstream gaps in committed build output are **documented exceptions**,
never silent: [`../scripts/validate-assets.allow.json`](../scripts/validate-assets.allow.json)
— one entry per pattern, each with its reason. Prefer fixing over allowing.
