# Elite Portfolio — Islam Al-Nashar — 18 Projects Live Preview

**Full Stack • 7 Years • Egypt / Compound • aslamalkarywka+dev@gmail.com • https://github.com/aslamalkarywk7**

One gallery showcasing 18 real web projects — each opens **inside the site** with one click, no download, with outer cover and linked docs.

## 📁 Linked Docs — All 18 Projects README

This main folder links all original `README.md` files:

| # | Project | Folder | README | Cover |
|---|---------|--------|--------|-------|
| 1 | Aetheria — Glassmorphism 2.0 | `aetheria---glassmorphism-2.0-platform` | [README](live/aetheria---glassmorphism-2.0-platform/README.md) | `covers/aetheria.svg` |
| 2 | Analog Antiques | `analog-antiques` | [README](live/analog-antiques/README.md) | `covers/analog.jpg` |
| 3 | Arab Chat Platform | `arabic-chat-ui-ux-design-website` | [README](live/arabic-chat-ui-ux-design-website/README.md) | `covers/arabic-chat.jpg` |
| 4 | Audio Engine Pro | `audio-engine-pro` | [README](live/audio-engine-pro/README.md) | `covers/audio.jpg` |
| 5 | BAUHAUS 1919 | `bauhaus-1919---creative-design-studio-1-` | [README](live/bauhaus-1919---creative-design-studio-1-/README.md) | `covers/bauhaus.jpg` |
| 6 | Elite Medical Clinics | `clinics-portfolio-design` | [readme](live/clinics-portfolio-design/readme.md) | `covers/clinics.jpg` |
| 7 | Oman Luxury Dash | `dashboard-website` | [README](live/dashboard-website/README.md) | `covers/oman.svg` |
| 8 | Atrium — Industrial OS | `design-dashboard-pro` | [README](live/design-dashboard-pro/README.md) | `covers/atrium.jpg` |
| 9 | Connective Agency | `flat-design-website` | [README](live/flat-design-website/README.md) | `covers/flat.svg` |
| 10 | GRID STUDIO | `grid-studio---swiss-design-system` | [README](live/grid-studio---swiss-design-system/README.md) | `covers/grid.jpg` |
| 11 | Ajmas — Industrial | `industrial-marketplace-platform` | [README](live/industrial-marketplace-platform/README.md) | `covers/industrial.jpg` |
| 12 | MAISON NOIR | `luxury-creative-agency` | [README](live/luxury-creative-agency/README.md) | `covers/luxury.jpg` |
| 13 | Previous Portfolio | `mywebsite` | [index](live/mywebsite/index.html) | `covers/mywebsite.jpg` |
| 14 | Horror Gallery | `platform_horror` | [README](live/platform_horror/README.md) | `covers/horror.svg` |
| 15 | RAW Brutalist | `raw-brutalist-creative-studio` | [README](live/raw-brutalist-creative-studio/README.md) | `covers/raw.jpg` |
| 16 | RetroWave Studio | `retrowave-studio` | [README](live/retrowave-studio/README.md) | `covers/retrowave.svg` |
| 17 | Studio Chroma | `studio-chroma` | [README](live/studio-chroma/README.md) | `covers/chroma.jpg` |
| 18 | Zenith Finance | `zenith-finance` | [README](live/zenith-finance/README.md) | `covers/zenith.jpg` |

> Every `live/<folder>/README.md` is linked from the original `../<folder>/README.md` via `projects.json → docs`

## 🖼️ Outer Covers — Linked

Each project has a cover in `covers/` linked via `projects.json → cover`:
```
covers/aetheria.svg, analog.jpg, arabic-chat.jpg, atrium.jpg, audio.jpg, bauhaus.jpg, chroma.jpg, clinics.jpg, flat.svg, grid.jpg, horror.svg, industrial.jpg, luxury.jpg, mywebsite.jpg, oman.svg, raw.jpg, retrowave.svg, zenith.jpg
```
Change any cover in `projects.json` and the card updates instantly.

## ⚙️ Small Control File

Edit `projects.json` only:
```json
{
  "id": "aetheria",
  "cover": "covers/aetheria.svg",
  "docs": ["live/aetheria---glassmorphism-2.0-platform/README.md"]
}
```

## 🔗 Contributions

Linked to https://aslamalkarywk7.github.io/aslamalkarywk7 — `#contributions` section shows live GitHub Stats + iframe.

## ▶️ Run

```bash
cd islam-portfolio-elite
npm install
npm run dev
# http://localhost:3000
```
or `START.bat`

## 📂 Structure

```
islam-portfolio-elite/
├── index.html          ← Main gallery
├── projects.json       ← Small control file (covers + docs)
├── covers/             ← 18 outer covers
├── live/               ← 18 built projects (real code)
│   └── <folder>/README.md  ← linked to main
├── assets/             ← Personal images
├── script.js / style.css
└── server.js / vercel.json
```
