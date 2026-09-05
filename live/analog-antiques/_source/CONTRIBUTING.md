# Contributing to Analog Antiques

Thank you for your interest in contributing to the **Analog Antiques** open-source project! We welcome contributions that add rare vintage audio items, enhance Web Audio synthesizer presets, or refine retro visual aesthetics.

---

## 🛠️ Code of Conduct

We aim to foster a welcoming and creative open-source environment. Please be respectful, inclusive, and professional in all issue discussions, pull requests, and code reviews.

---

## 🚀 How to Contribute

### 1. Reporting Issues
Before opening a new issue, check the existing issue tracker to avoid duplicates. When submitting a bug report, please include:
- A clear description of the bug.
- Steps to reproduce the issue.
- Your browser and operating system version.
- Any relevant console log outputs or screenshots.

### 2. Suggesting Features
Have an idea for a vintage audio item (e.g., Reel-to-Reel decks, 8-track tape players, vacuum tube amps) or audio effect (e.g., tape flutter, tube warmth)?
- Open a feature request issue describing the rationale and design concept.

### 3. Pull Request Process
1. **Fork the Repository:** Create a personal fork on GitHub.
2. **Clone & Branch:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/analog-antiques-applet.git
   cd analog-antiques-applet
   git checkout -b feature/your-feature-name
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Development Guidelines:**
   - Write clean, modular TypeScript code following standard React function component patterns.
   - Maintain strict type definitions in `/src/types.ts`.
   - Style components using Tailwind CSS utility classes and the custom retro utility classes (`shadow-retro`, `film-grain`, `font-serif-ultra`).
   - Do NOT introduce unrequested heavy dependencies or external tracking scripts.
5. **Verify Build & Linting:**
   Before committing, run linting and build checks:
   ```bash
   npm run lint
   npm run build
   ```
6. **Commit & Push:** Write descriptive commit messages:
   ```bash
   git commit -m "feat: add Nakamichi Dragon tape deck catalog item"
   git push origin feature/your-feature-name
   ```
7. **Submit Pull Request:** Open a Pull Request targeting the `main` branch with a clear description of your changes.

---

## 🎨 Design & Aesthetic Guidelines

When contributing UI elements, adhere strictly to the project's **1960s-1970s Analog Identity**:
- **Color Palette:** Stick to the specified warm muted palette (Burled Beige, Olive Green, Burnt Orange, Mustard Yellow, Dusty Blue, Faded Wood Black).
- **Borders & Shadows:** Use thick 2px–4px dark borders (`border-2 border-[#2B2118]`) and offset solid drop shadows (`shadow-retro`).
- **Typography:** Use the assigned retro font classes (`font-serif-ultra`, `font-typewriter`, `font-mono-retro`).

Thank you for helping preserve analog audio history!
