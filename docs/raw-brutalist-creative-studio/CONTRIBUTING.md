# CONTRIBUTING TO RAW CREATIVE STUDIO

Thank you for your interest in contributing to **RAW Creative Studio**! We welcome bug fixes, documentation improvements, new interactive components, and performance enhancements that align with our strict **RAW Neo-Brutalist** design system.

---

## 📜 Core Design Principles (Mandatory)

All code and UI contributions **MUST** adhere to the following laws:

1. **Strict 5px Hard Strokes**:
   - Every card, button, and container must use `border: 5px solid #000000` (or `border: 5px solid #ffffff`). No 1px hairline gray borders.

2. **Zero Gradients**:
   - Do NOT introduce soft radial overlays, color gradients, or blurred drop shadows. Use flat `#000000`, `#FFFFFF`, or `#CCFF00`.

3. **Hard Drop Shadows**:
   - Shadows must be hard-edged with zero blur radius (e.g., `8px 8px 0px #000000` or `12px 12px 0px #CCFF00`).

4. **Typography & Contrast**:
   - Maintain bold display typography (Syne / Montserrat / Space Mono). Use uppercase tracking for buttons and badges.

---

## 🛠️ How to Contribute

### 1. Fork & Clone
Fork the repository on GitHub and clone your fork locally:
```bash
git clone https://github.com/your-username/raw-creative-studio.git
cd raw-creative-studio
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Install & Develop
```bash
npm install
npm run dev
```

### 4. Code Quality & Linting
Ensure your code passes TypeScript validation and linting without errors:
```bash
npm run lint
npm run build
```

### 5. Commit Guidelines
Use clear, concise commit messages following the Conventional Commits format:
- `feat: add new poster generator stencil`
- `fix: correct mobile overflow on project inspector`
- `docs: update setup instructions in README`

### 6. Submit a Pull Request
Push your branch to GitHub and open a Pull Request against the `main` branch with a clear description of your changes.

---

## 💬 Need Help?

Feel free to open an Issue on GitHub if you encounter bugs, have questions, or want to suggest new features.
