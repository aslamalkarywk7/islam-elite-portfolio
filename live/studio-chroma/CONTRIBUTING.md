# Contributing to Studio Chroma

Thank you for your interest in contributing to **Studio Chroma**! We welcome contributions from developers, designers, and open-source enthusiasts.

This guide outlines our code style, Material Design 3 guidelines, git workflow, and submission process to ensure seamless collaboration.

---

## 📜 Code of Conduct

We are committed to providing a welcoming, inclusive, and professional environment for everyone. Please treat all contributors with respect, dignity, and courtesy.

---

## 🎯 How Can You Contribute?

You can contribute in several ways:
1. **Reporting Bugs**: Found a layout flaw or unexpected behavior? Open an issue!
2. **Suggesting Features**: Have ideas for new M3 tokens or interactive components? Submit a feature request.
3. **Submitting Pull Requests**: Implement bug fixes, performance improvements, or new features.
4. **Documentation**: Improve code comments, component prop types, or markdown guides.

---

## 🌿 Git Workflow & Branching Strategy

We follow a standard **Feature Branch** workflow:

1. **Fork the Repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/studio-chroma.git
   cd studio-chroma
   ```
3. **Create a topic branch**:
   ```bash
   git checkout -b feature/m3-chip-component
   # or for bug fixes:
   git checkout -b fix/header-mobile-padding
   ```
4. **Commit your changes** using Conventional Commits guidelines (see below).
5. **Push to your fork** and **Submit a Pull Request (PR)** against the `main` branch.

---

## 💬 Commit Message Convention

We enforce [Conventional Commits](https://www.conventionalcommits.org/) format to keep git history clear and structured:

```text
<type>(<scope>): <short summary>

[optional body]
```

### Allowed Types:
- `feat`: A new feature (e.g., `feat(m3): add M3 Slider component`)
- `fix`: A bug fix (e.g., `fix(ripple): prevent ripple clipping on mobile touch`)
- `docs`: Documentation changes (e.g., `docs: update TROUBLESHOOTING.md`)
- `style`: Formatting, missing semi-colons, no code logic change
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding missing tests or refactoring existing tests

---

## 🎨 Design & Code Standards

### 1. Material Design 3 (M3) Standards
- **Color Roles**: Use established M3 system tokens (`#005CBB` primary, `#D8E2FF` primary-container, `#6750A4` secondary, `#1A1C1E` dark surface).
- **Elevation**: Use custom M3 elevation classes (`m3-elevation-1`, `m3-elevation-2`, `m3-elevation-3`) or subtle borders (`border-[#E1E2EC]`).
- **Corner Radii**: Apply standard M3 corner roundedness (`rounded-2xl` for chips/cards, `rounded-full` for buttons/pills).
- **Ripple Physics**: Wrap interactive custom controls with the `<M3Ripple />` component for touch feedback.

### 2. TypeScript & React Guidelines
- **Strict Typing**: All component props, functions, and state objects must be explicitly typed using TypeScript interfaces in `src/types.ts`.
- **Functional Components**: Use React functional components with named exports or standard arrow function signatures.
- **Icon Library**: Exclusively use icons imported from `lucide-react`.
- **No Inline Styles**: Avoid style tags or arbitrary inline style objects unless calculating dynamic 3D tilt transforms.

---

## 🧪 Testing Before Pull Request Submission

Before opening a Pull Request, run the following commands to verify code quality:

1. **Type Check**:
   ```bash
   npm run lint
   ```
   *Must complete without TypeScript compiler warnings or errors.*

2. **Production Build Test**:
   ```bash
   npm run build
   ```
   *Must complete successfully and output static assets in `/dist`.*

---

## 📋 Pull Request Submission Checklist

When opening your Pull Request, please ensure:

- [ ] The PR title follows Conventional Commits format.
- [ ] You have linked any related GitHub issue numbers.
- [ ] Code compiles cleanly with zero TypeScript errors (`npm run lint`).
- [ ] Visual changes match Material Design 3 design system guidelines.
- [ ] You have tested responsive behavior across desktop and mobile screens.

Thank you for contributing to Studio Chroma! 🚀
