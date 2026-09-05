# Contributing to Connective Digital Agency 🤝

Thank you for your interest in contributing to **Connective Digital Agency**! We welcome contributions from developers, designers, and technical writers of all skill levels.

This document provides guidelines and best practices to help you get started with contributing code, bug fixes, features, or documentation updates.

---

## 📋 Table of Contents

1. [Code of Conduct](#-code-of-conduct)
2. [How to Contribute](#-how-to-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Enhancements](#suggesting-enhancements)
   - [Submitting Pull Requests](#submitting-pull-requests)
3. [Development Environment Setup](#-development-environment-setup)
4. [Coding & Style Standards](#-coding--style-standards)
   - [TypeScript Guidelines](#typescript-guidelines)
   - [React & Component Patterns](#react--component-patterns)
   - [Tailwind CSS & Styling Rules](#tailwind-css--styling-rules)
5. [Git Workflow & Commit Conventions](#-git-workflow--commit-conventions)

---

## 📜 Code of Conduct

We are committed to providing a welcoming, inclusive, and friendly environment for everyone. Please be respectful, constructive, and considerate in all communications, issue discussions, and pull requests.

---

## 🛠️ How to Contribute

### Reporting Bugs

If you discover a bug or unexpected behavior:
1. Search the existing GitHub Issues to check if it has already been reported.
2. If not reported, open a new **Bug Report** issue.
3. Include clear information:
   - Operating System & Browser version.
   - Steps to reproduce the issue.
   - Expected vs. actual behavior.
   - Relevant console logs or screenshots.

### Suggesting Enhancements

Have an idea for a new feature, animation, or flat design component?
1. Open a **Feature Request** issue explaining your proposal.
2. Describe the problem or opportunity and how the feature addresses it.
3. Discuss design considerations (e.g., color palette compatibility, accessibility).

### Submitting Pull Requests

1. **Fork** the repository and create your feature branch:
   ```bash
   git checkout -b feature/amazing-flat-component
   ```
2. **Make your changes**, ensuring clean code and proper formatting.
3. **Verify type safety**:
   ```bash
   npm run lint
   ```
4. **Test the build locally**:
   ```bash
   npm run build
   ```
5. **Commit your changes** following our commit message guidelines.
6. **Push to your fork** and open a **Pull Request** against the `main` branch.

---

## 💻 Development Environment Setup

1. Ensure Node.js (`>=18.0.0`) is installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the app at `http://localhost:3000`.

---

## 🎨 Coding & Style Standards

### TypeScript Guidelines

- **Strict Types**: Always define explicit interfaces and types in `src/types.ts`. Avoid using `any`.
- **Top-Level Named Imports**: Place all imports at the top of the file using named syntax:
  ```typescript
  import React, { useState } from 'react';
  import { ArrowRight, Check } from 'lucide-react';
  ```
- **Standard Enums**: Use standard `enum` or union types instead of `const enum`.

### React & Component Patterns

- Use **Functional Components** with explicit React hooks (`useState`, `useMemo`, `useCallback`).
- Maintain **Modularity**: Place new components in `src/components/` with dedicated responsibility.
- **Icon Usage**: All UI icons MUST be imported from `lucide-react`.
- **Animations**: Use `motion` from `motion/react` for entry transitions and interactive layout shifts.

### Tailwind CSS & Styling Rules

- Use Tailwind CSS v4 utility classes directly in `className`.
- **Flat Design Design System**:
  - Primary Brand Colors: Bright Coral (`#FF6B6B`), Electric Turquoise (`#4ECDC4`), Warm Sunshine (`#FFE66D`), Slate Dark (`#2D3436`), Soft Ice (`#F7F9FC`).
  - Maintain high contrast ratio (WCAG AA compliant).
  - Avoid excessive glossy gradients or artificial drop shadows to keep the design strictly Flat.

---

## 🔀 Git Workflow & Commit Conventions

Please use imperative, clear commit messages. We recommend using Conventional Commits format:

- `feat: add interactive service cost estimator component`
- `fix: resolve mobile navigation backdrop blur issue`
- `docs: update installation instructions in docs/INSTALLATION.md`
- `style: adjust typography scale for hero section`
- `refactor: extract agency data into src/data/agencyData.ts`

Thank you for helping build a better Connective Digital Agency! 🎉
