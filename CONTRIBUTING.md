# Contributing

Thanks for helping with the Elite Portfolio gallery.

## Setup

```bash
npm ci
npm test
```

- `npm test` (alias of `npm run validate`) runs `scripts/validate-assets.mjs`: asset-reference, naming, and budget guards — the same check CI runs.
- `npm run dev` serves the gallery at `http://localhost:3000`.

## Per-project rules

Each demo has its own conventions. Before touching a project, read its guide:

- `docs/<project>/CONTRIBUTING.md` (e.g. `docs/analog-antiques/CONTRIBUTING.md`)

Per-project guides take precedence over these root notes for stack, styling, and design identity.

## PR checklist

- [ ] `npm test` passes locally
- [ ] File names are ASCII lowercase kebab-case, no spaces (see `docs/ASSETS.md`)
- [ ] New images are WebP (q82, max 1600px); build output under `live/` untouched
- [ ] References updated in `projects.json` where applicable
- [ ] No new tracking scripts or heavy unrequested dependencies
