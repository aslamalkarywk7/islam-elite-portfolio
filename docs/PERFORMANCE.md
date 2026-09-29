# Performance

## Migration result (2026-09-29)

| Metric | Before | After |
|---|---|---|
| Tracked repo size | **51.6 MB** | **~21 MB** |
| Showcase images (152 files) | 38.8 MB JPG/PNG | ~7 MB WebP (q82, ≤1600px) |
| Non-ASCII / spaced file names | 59 + 18 | **0** |
| Broken internal references found & fixed | — | **40+** (pre-existing export gaps, dead photo, stale covers) |
| `npm test` (asset guard) | n/a | **green, 617 files** |

Biggest wins: `covers/` 6.4MB → ~1MB, `images/` 16.8MB → ~3MB,
`live/mywebsite` screenshots 12MB → ~2MB.

## Known upstream export gaps (documented, not hidden)

Some committed static exports are missing files from their original builds:

- `industrial-marketplace-platform`: 11 hashed Cairo/Tajawal font weights +
  8 `public/` photos (`/cities/*`, `/vision/*`, `/sectors/*`, hero).
  Photos fall back to the project's own cover (`covers/industrial.webp`);
  fonts fall back to shipped weights. Full patterns + reasons:
  [`../scripts/validate-assets.allow.json`](../scripts/validate-assets.allow.json).
- `dashboard-website`, `clinics-portfolio-design`, `audio-engine-pro`,
  `mywebsite`: missing `public/` assets were remapped to verified in-repo
  twins (see CHANGELOG). Root `favicon.svg` / `logo.svg` / `apple-icon.png`
  now cover all demo favicon requests.

**Proper fix:** re-export the affected demos from source so `public/` and font
subsets are complete, then drop the fallbacks. Until then the gallery renders
with zero broken images.
