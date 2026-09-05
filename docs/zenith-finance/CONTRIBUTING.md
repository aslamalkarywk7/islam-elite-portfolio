# Contributing to Zenith Finance

Thank you for your interest in contributing to **Zenith Finance**! We welcome contributions from developers, UX/UI designers, financial analysts, and open-source enthusiasts.

By participating in this project, you agree to abide by our code of conduct and technical standards.

---

## 📜 Table of Contents
1. [Code of Conduct](#-code-of-conduct)
2. [How Can I Contribute?](#-how-can-i-contribute)
3. [Development Environment Setup](#-development-environment-setup)
4. [Branching & Git Workflow](#-branching--git-workflow)
5. [Coding & Design Guidelines](#-coding--design-guidelines)
6. [Submitting a Pull Request](#-submitting-a-pull-request)

---

## 🤝 Code of Conduct

We are committed to providing a welcoming, inclusive, and harassment-free environment for everyone. Please maintain professional demeanor, provide constructive code review feedback, and respect differing viewpoints.

---

## 💡 How Can I Contribute?

### 1. Reporting Bugs
Before filing an issue, search the issue tracker to check if it has already been reported. When reporting a bug, please include:
- A clear, descriptive title.
- Steps to reproduce the behavior.
- Expected vs. actual behavior.
- Screenshots or recordings if applicable (especially for visual Neumorphism rendering issues).
- Browser name, version, and operating system.

### 2. Suggesting Enhancements
Feature requests are always welcome! Please specify:
- The problem your feature solves or the value it adds.
- Proposed implementation details or UI mockup.
- Any potential impact on performance or existing Neumorphic styles.

### 3. Submitting Code Changes
You can fix open bugs or build new features by creating a pull request from a fork or topic branch.

---

## 🛠️ Development Environment Setup

1. **Fork and Clone the Repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/zenith-finance.git
   cd zenith-finance
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **Verify TypeScript & Formatting:**
   ```bash
   npm run lint
   ```

---

## 🌿 Branching & Git Workflow

We follow a simplified Git Flow convention:
- `main`: Production-ready code.
- `feature/feature-name`: For new functionality or UI components.
- `fix/bug-description`: For bug fixes and patch updates.

### Commit Message Guidelines
Use clear, imperative commit messages:
- `feat: add interactive portfolio rebalancing modal`
- `fix: resolve box-shadow blur calculation in dark light angle`
- `docs: update setup commands in README.md`
- `style: refine neumorphic soft contrast parameters`

---

## 🎨 Coding & Design Guidelines

### Neumorphic Design Rules (Geometric Balance)
1. **Color Integrity:** All Neumorphic surfaces must share the base canvas tone (`#e6e9ef` or configurable variable `--neu-bg`). Never place a flat gray card with a different background color on top of the canvas.
2. **Dual-Shadow System:** Every raised element must feature paired highlight and shadow box-shadow values (e.g., `#ffffff` light shadow top-left, `#c4c7cc` dark shadow bottom-right).
3. **No Unneeded Outlines:** Avoid harsh 2px black borders. Use subtle `rgba(255, 255, 255, 0.5)` highlights or soft inset shadows instead.
4. **Interactive Touch Feedback:** Use `whileTap={{ scale: 0.98 }}` from `motion/react` or class shifts to `neu-inset` on active states to give tactile button feel.

### TypeScript Standards
- Enable strict mode (`"strict": true` in `tsconfig.json`).
- Always define clear interfaces for component props in `src/types.ts`.
- Do not use `any`; use specific types or generics.

---

## 📩 Submitting a Pull Request

1. Rebase your feature branch onto the latest `main`:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. Ensure `npm run lint` and `npm run build` pass without errors.
3. Push your branch to GitHub and open a Pull Request.
4. Fill out the PR template with a clear description of your changes and test cases performed.
5. Wait for review from project maintainers. Once approved, your code will be merged!

Thank you for helping build the future of Soft UI wealth management! 🚀
