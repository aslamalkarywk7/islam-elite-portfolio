# Contributing to BAUHAUS 1919

Thank you for your interest in contributing to **BAUHAUS 1919 — Creative Design Studio**! We encourage contributions that align with our commitment to high-precision engineering, modernist design principles, and clean code.

---

## 📜 Table of Contents
1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Features](#suggesting-features)
   - [Submitting Pull Requests](#submitting-pull-requests)
3. [Development Guidelines](#development-guidelines)
   - [Design Principles](#design-principles)
   - [TypeScript & Code Quality](#typescript--code-quality)
   - [Styling & Component Conventions](#styling--component-conventions)
4. [Commit Message Conventions](#commit-message-conventions)
5. [Verification Before Push](#verification-before-push)

---

## 🤝 Code of Conduct

We are dedicated to providing a welcoming, respectful, and collaborative community environment. Please ensure all interactions remain constructive, respectful, and focused on maintaining code excellence.

---

## 🛠 How Can I Contribute?

### Reporting Bugs
If you discover a bug or visual regression:
1. Check existing issues to ensure it hasn't been reported yet.
2. Open a new issue with a clear title and description.
3. Include relevant context:
   - Operating system and browser version.
   - Screen resolution or display mode (Fullscreen vs MacBook Mockup).
   - Steps to reproduce the issue.
   - Screenshots or console log errors.

### Suggesting Features
Ideas for new features, geometric tools, or performance enhancements are welcome:
1. Open a feature request issue.
2. Explain the use case and why it aligns with the Bauhaus aesthetic and project philosophy.
3. Outline proposed component changes or data structures.

### Submitting Pull Requests
1. Fork the repository and create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your edits following our [Development Guidelines](#development-guidelines).
3. Verify type checking and build integrity:
   ```bash
   npm run lint
   npm run build
   ```
4. Commit your changes using conventional commit formatting.
5. Push your branch to GitHub and open a Pull Request targeting `main`.

---

## 📐 Development Guidelines

### Design Principles (The Bauhaus Standard)
- **Primary Color Palette**: Stick strictly to standard primary colors (`#FF2A1F` Red, `#FFE600` Yellow, `#0055FF` Blue) alongside off-black (`#111111`) and off-white (`#F4F1EA`).
- **Mathematical Grids**: Utilize explicit 1px high-contrast borders and geometric proportions.
- **No Generic SaaS Clichés**: Avoid rounded pill cards with wide drop shadows, purple gradients, or arbitrary glassmorphism.
- **Functional Motion**: Keep animations purposeful, smooth, and layout-driven using `motion/react`.

### TypeScript & Code Quality
- **Strict Typing**: Define explicit interfaces and types in `src/types.ts`. Avoid `any`.
- **Named Exports**: Use named exports for components and utilities where possible.
- **Top-Level Imports**: Place all `import` declarations at the top of the file.

### Styling & Component Conventions
- **Tailwind CSS 4**: Use utility classes directly in `className`.
- **Iconography**: Import all icons strictly from `lucide-react`.
- **Image Referrer Policy**: Always set `referrerPolicy="no-referrer"` on `<img>` tags.

---

## 📝 Commit Message Conventions

We follow the **Conventional Commits** specification:

- `feat:` A new feature or interactive module (e.g., `feat: add SVG poster export to Bauhaus Lab`)
- `fix:` A bug fix or visual alignment repair (e.g., `fix: resolve coordinate tracking overflow in mobile view`)
- `docs:` Documentation updates (e.g., `docs: update installation steps in README`)
- `style:` Formatting or CSS tweaks without logic changes
- `refactor:` Code restructuring that improves performance or readability
- `test:` Adding or updating tests

Example:
```bash
git commit -m "feat(lab): add shape rotation slider to poster generator"
```

---

## ✅ Verification Before Push

Before submitting your pull request, ensure all linting and compilation steps pass cleanly:

```bash
# 1. Type check codebase
npm run lint

# 2. Test full production build
npm run build
```

If both commands succeed with no errors, your pull request is ready for review!
