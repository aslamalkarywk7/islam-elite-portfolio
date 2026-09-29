# Elite Portfolio — Islam El-Nashar

[![ci](https://github.com/aslamalkarywk7/islam-elite-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/aslamalkarywk7/islam-elite-portfolio/actions/workflows/ci.yml)
![projects](https://img.shields.io/badge/projects-18-blue)
![license](https://img.shields.io/badge/license-MIT-green)

One gallery showcasing **18 real web projects** — each opens **inside the site** with one click. No downloads, no 404s: every `/live/*` route is served, with a branded fallback preview for any missing path.

**Full Stack • Egypt • aslamalkarywka@gmail.com • https://github.com/aslamalkarywk7**

## 🖼️ Gallery

| # | Project | Stack | Cover | Live |
|---|---------|-------|-------|------|
| 1 | Aetheria — Glassmorphism 2.0 | Vite • React 19 • Tailwind 4 | <img src="covers/aetheria.svg" width="120" alt="Aetheria cover"> | [live/aetheria---glassmorphism-2.0-platform/](live/aetheria---glassmorphism-2.0-platform/) |
| 2 | Analog Antiques | Vite • React 19 | <img src="covers/analog.webp" width="120" alt="Analog Antiques cover"> | [live/analog-antiques/](live/analog-antiques/) |
| 3 | Arab Chat Platform (شات العرب) | Next.js • Tailwind 4 | <img src="covers/arabic-chat.webp" width="120" alt="Arab Chat cover"> | [live/arabic-chat-ui-ux-design-website/](live/arabic-chat-ui-ux-design-website/) |
| 4 | Audio Engine Pro | Vite • React 19 | <img src="covers/audio.webp" width="120" alt="Audio Engine Pro cover"> | [live/audio-engine-pro/](live/audio-engine-pro/) |
| 5 | BAUHAUS 1919 | Vite • React 19 | <img src="covers/bauhaus.webp" width="120" alt="Bauhaus cover"> | [live/bauhaus-1919---creative-design-studio-1-/](live/bauhaus-1919---creative-design-studio-1-/) |
| 6 | Elite Medical Clinics (عيادات النخبة) | Next.js | <img src="covers/clinics.webp" width="120" alt="Clinics cover"> | [live/clinics-portfolio-design/](live/clinics-portfolio-design/) |
| 7 | Oman Luxury Dash | Next.js • Recharts | <img src="covers/oman.svg" width="120" alt="Oman Luxury Dash cover"> | [live/dashboard-website/](live/dashboard-website/) |
| 8 | Atrium — Industrial OS | Next.js | <img src="covers/atrium.webp" width="120" alt="Atrium cover"> | [live/design-dashboard-pro/](live/design-dashboard-pro/) |
| 9 | Connective Agency | Vite • React 19 | <img src="covers/flat.svg" width="120" alt="Connective cover"> | [live/flat-design-website/](live/flat-design-website/) |
| 10 | GRID STUDIO — Swiss System | Vite • React 19 | <img src="covers/grid.webp" width="120" alt="Grid Studio cover"> | [live/grid-studio---swiss-design-system/](live/grid-studio---swiss-design-system/) |
| 11 | Ajmas — Industrial Marketplace (أجماس) | Next.js • Radix UI | <img src="covers/industrial.webp" width="120" alt="Industrial cover"> | [live/industrial-marketplace-platform/](live/industrial-marketplace-platform/) |
| 12 | MAISON NOIR | Vite • React 19 | <img src="covers/luxury.webp" width="120" alt="Maison Noir cover"> | [live/luxury-creative-agency/](live/luxury-creative-agency/) |
| 13 | Previous Portfolio (معرض أعمالي) | HTML • CSS • JS | <img src="images/mywebsite/4.webp" width="120" alt="Previous portfolio screenshot"> | [live/mywebsite/](live/mywebsite/) |
| 14 | Horror Gallery (معرض الرعب) | HTML • GSAP | <img src="covers/horror.svg" width="120" alt="Horror cover"> | [live/platform_horror/](live/platform_horror/) |
| 15 | RAW Brutalist Studio | Vite • React 19 | <img src="covers/raw.webp" width="120" alt="Raw Brutalist cover"> | [live/raw-brutalist-creative-studio/](live/raw-brutalist-creative-studio/) |
| 16 | RetroWave Studio | Vite • React 19 | <img src="covers/retrowave.svg" width="120" alt="RetroWave cover"> | [live/retrowave-studio/](live/retrowave-studio/) |
| 17 | Studio Chroma | Vite • React 19 | <img src="covers/chroma.webp" width="120" alt="Studio Chroma cover"> | [live/studio-chroma/](live/studio-chroma/) |
| 18 | Zenith Finance | Vite • React 19 | <img src="covers/zenith.webp" width="120" alt="Zenith Finance cover"> | [live/zenith-finance/](live/zenith-finance/) |

> Per-project write-ups live in [`docs/`](docs/) (one folder per project).

## ▶️ Run

```bash
npm install
npm run dev     # http://localhost:3000
```

Static hosting works too (see [`vercel.json`](vercel.json) — output directory is `.`):
any static server serving the repo root exposes the gallery at `/` and demos at `/live/<project>/`.

## 🧰 Scripts

| Command | What it does |
|---|---|
| `npm run dev` / `start` / `serve` | Serve the gallery + all live demos (Express, [`server.js`](server.js)) |
| `npm run optimize:images` | Reproducible WebP pipeline for showcase assets ([`scripts/optimize-images.mjs`](scripts/optimize-images.mjs)) |
| `npm run validate` / `npm test` | Asset-reference + naming + budget guard ([`scripts/validate-assets.mjs`](scripts/validate-assets.mjs)) — also runs in CI |

## 📂 Structure

```
islam-elite-portfolio/
├── index.html / style.css / script.js   ← gallery shell (reads projects.json)
├── projects.json                        ← control file: covers, screenshots, docs, live paths
├── covers/                              ← 18 project covers (WebP/SVG)
├── images/<project>/                    ← per-project screenshots (WebP)
├── assets/ / icon/                      ← personal + brand assets
├── live/<project>/                      ← 18 self-contained runnable demos
├── docs/<project>/                      ← per-project write-ups + ARCHITECTURE/ASSETS/PERFORMANCE
├── scripts/                             ← optimize-images, validate-assets (+ allowlist)
├── .github/workflows/ci.yml             ← install + validate on push/PR
├── server.js / vercel.json / START.bat
└── LICENSE (MIT)
```

## 📐 Conventions

- **File names:** ASCII lowercase kebab-case, no spaces — enforced by `npm test` (see [`docs/ASSETS.md`](docs/ASSETS.md)).
- **Images:** WebP (q82, max 1600px) for showcase assets; build output under `live/` is untouched.
- **Docs:** every project links its write-up via `projects.json → docs`.

## ⚡ Performance

Tracked size **51.6MB → ~21MB** after the WebP migration (showcase images 38.8MB → ~7MB).
Details + known upstream export gaps: [`docs/PERFORMANCE.md`](docs/PERFORMANCE.md).

## 🤝 Contributions & License

Linked profile: https://aslamalkarywk7.github.io/aslamalkarywk7 — MIT, see [LICENSE](LICENSE).
