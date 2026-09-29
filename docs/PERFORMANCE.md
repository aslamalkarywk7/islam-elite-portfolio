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

## Backend restoration (2026-09-29)

The Oman Luxury Dash export shipped its `_source/` (including API routes) but
no runnable backend — its UI called site-root `/api/metrics` and died on 404.
`api/_engine.js` faithfully ports `mathEngine.ts` + `aiAnalysis.ts`
(EVM: CPI/SPI/CV/SV/EAC/ROI + 8 analysis-message rules); `api/metrics.js` and
`api/v1/metrics.js` expose it as Vercel serverless functions, and `server.js`
mounts the same contract locally (`GET` empty state, `POST` validate→compute→
analyze with correct 400s). Verified: CPI 0.9355, EAC 1282758.62 on sample input.

## Removed dead chunk (arabic-chat demo)

`_next/static/chunks/ff1a16fafef87110.js` is absent from the upstream export yet
referenced by ~100 flight-data/HTML files, producing `SyntaxError: Unexpected
token '<'` (fallback HTML served as JS). Every page renders without it
(verified visually), so all references were dropped precisely
(`scripts` note: keep the following quote when editing `["U1","U2"]` pairs —
naive removal corrupts the arrays). Sub-pages re-verified after the change.

## Final browser audit (2026-09-29)

Headless Chromium over all 19 routes (home + 18 demos): HTTP status,
failed requests, console/page errors, screenshots.

- **16/19 fully clean** (zero failed requests, zero console errors)
- Remaining 3 pages show exactly one benign item each:
  `/_vercel/insights/script.js` 404s on local dev, served by Vercel in production
- The arabic-chat `SyntaxError` is eliminated; Vite-bundle image 404s (bauhaus,
  grid, retrowave, zenith, audio) eliminated; dashboard `/api/metrics`
  restored with verified EVM responses

## Benign local-only 404

`/_vercel/insights/script.js` (Speed Insights beacon) 404s on `npm run dev`
but is served automatically by Vercel in production. Left as-is.
