# Contributing to Grid Studio

Thank you for your interest in contributing to **Grid Studio**! We welcome contributions that preserve and celebrate the principles of the **International Typographic Style** (Swiss Design) — clarity, mathematical organization, objective typography, and asymmetric balance.

---

## 📐 Core Design & Code Principles

Before submitting code or visual modifications, please ensure your contributions align with the following standards:

1. **Strict Grid Precision**:
   - Every UI element must align to the 12-column modular grid or standard mathematical step ratios.
   - Do not add arbitrary padding or random offsets. Use proportional Tailwind spacing utilities (`p-4`, `p-6`, `p-8`, `p-12`).

2. **Objective Typography**:
   - Primary typeface is neutral sans-serif (`Inter`, `Helvetica Neue`, `Neue Haas Grotesk`, `Space Grotesk`).
   - Maintain clear scale contrast and flush-left, rag-right text alignment.
   - All caps labels must sit on a single line with `white-space: nowrap`.

3. **Restrained Color Palette**:
   - Core canvas must remain pure white (`#FFFFFF`), stark black (`#000000`), or neutral gray tones.
   - Color accent is strictly reserved for Swiss Red (`#E30613` or approved variants).
   - Avoid unsolicited gradients, glowing shadows, or decorative borders.

4. **Type Safety & Clean React Code**:
   - Written in strict **TypeScript**. All props, state models, and configuration interfaces must be declared in `/src/types.ts`.
   - Use functional React components with proper hooks.
   - Keep components modular and single-purpose.

---

## 🛠️ Development Setup & Workflow

### 1. Fork & Clone
Fork the repository on GitHub and clone your fork locally:
```bash
git clone https://github.com/your-username/grid-studio.git
cd grid-studio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create a Feature Branch
Use a descriptive branch name:
```bash
git checkout -b feature/grid-rhythm-enhancement
# or
git checkout -b fix/poster-export-padding
```

### 4. Local Testing & Verification
Before opening a Pull Request, run TypeScript type checks and test the build:
```bash
# Verify TypeScript syntax and type safety
npm run lint

# Verify production build compilation
npm run build
```

---

## 📝 Commit Guidelines

Write clear, concise commit messages following the Conventional Commits format:

- `feat: add baseline rhythm overlay control to inspector toolbar`
- `fix: resolve responsive grid overflow on mobile viewports`
- `docs: update troubleshooting guide for container port binding`
- `refactor: extract poster canvas rendering logic into modular helper`

---

## 🔀 Pull Request Process

1. Ensure your code passes `npm run lint` and `npm run build` without warnings or errors.
2. Update relevant documentation (`README.md`, `ARCHITECTURE.md`) if introducing new features or settings.
3. Open a Pull Request against the `main` branch.
4. Provide a clear explanation of what changed, screenshots/GIFs of the visual outcome (both in Desktop Mockup mode and Fullscreen mode).

Thank you for helping keep Swiss design precise, mathematical, and accessible!
