# Architecture

How the 18 projects are served as one gallery without a framework.

## The shell

`index.html` + `style.css` + `script.js` render the gallery. The shell holds
**no project data** — everything comes from [`../projects.json`](../projects.json):

```json
{
  "id": "analog",
  "cover": "covers/analog.webp",
  "folder": "analog-antiques",
  "screenshots": ["images/analog-antiques/..."],
  "live": "live/analog-antiques/",
  "docs": ["docs/analog-antiques/README.md"]
}
```

Change a cover, screenshot, or live path in `projects.json` and the card updates
instantly — no shell edits needed.

## The demos

Each project lives self-contained under `live/<project>/`:

- **Vite builds** (`assets/index-*.js|css`) — e.g. `analog-antiques`, `audio-engine-pro`
- **Next.js static exports** (`_next/...`, `__next.*.txt`) — e.g. `arabic-chat-ui-ux-design-website`, `industrial-marketplace-platform`, `clinics-portfolio-design`
- **Plain HTML/CSS/JS** — e.g. `mywebsite`, `platform_horror`

Build output is committed intentionally: the gallery works on any static host
with zero build step (see [`../vercel.json`](../vercel.json), `outputDirectory: "."`).
**Rule:** never hand-edit generated bundles except documented export-gap patches
(see [`../CHANGELOG.md`](../CHANGELOG.md)); fix upstream and re-export instead.

## Serving

- **Local:** [`../server.js`](../server.js) (Express) serves `/`, static `/live/*`,
  a branded fallback page for unknown `/live/:folder/*` paths, and a styled 404.
- **Vercel:** static root + `X-Frame-Options: ALLOWALL` on `/live/*` so demos can
  be iframed by the gallery cards.

## Per-project docs

`docs/<project>/` holds each project's write-up and links back from the gallery
via `projects.json → docs`. Shared conventions: [`ASSETS.md`](ASSETS.md),
[`PERFORMANCE.md`](PERFORMANCE.md).
