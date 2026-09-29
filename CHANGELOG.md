# Changelog

All notable changes to this gallery are documented here. Format follows
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [2026-09-29] — Asset hygiene & professional tooling

### Fixed
- Renamed 77 asset paths to ASCII lowercase kebab-case (`live/mywebsite/img website/*`,
  `images/*/Screenshot *`); meaningful slugs derived from `data-alt-en`
  (e.g. `elegant-dashboard-interface.png`). History preserved via `git mv`.
- Repaired 40+ broken references: dead personal photo → `assets/my.png`;
  clinics/audio/industrial/dashboard/mywebsite export gaps remapped to verified
  in-repo twins; stale covers/screenshots in `projects.json` pointed at real files.
- Industrial demo: `/favicon.svg` made relative; hero/city/vision photos fall back
  to `covers/industrial.webp` until a clean re-export lands.
- `docs/platform_horror/README.md`: structure block referenced `New folder/`
  instead of the real `platform_horror/` folder.

### Changed
- Showcase images (152 files, 38.8MB) converted to WebP q82 ≤1600px (~7MB);
  originals removed. Tracked repo size **51.6MB → ~21MB**.
- Root icons added: `favicon.svg`, `logo.svg`, `apple-icon.png`,
  `icon-light/dark-32x32.png` (cover all demo favicon requests).

### Added
- `scripts/optimize-images.mjs` (`npm run optimize:images`) — reproducible pipeline.
- `scripts/validate-assets.mjs` (`npm test` / `npm run validate`) — fails CI on
  missing refs, bad file names, tracked junk; warns on oversized images.
- `scripts/validate-assets.allow.json` — documented exceptions with reasons.
- `.github/workflows/ci.yml` — `npm ci` + `npm test` on push/PR.
- Docs: `docs/ARCHITECTURE.md`, `docs/ASSETS.md`, `docs/PERFORMANCE.md`;
  README rewritten with screenshots gallery, scripts, structure, conventions.
- `CHANGELOG.md` (this file).
