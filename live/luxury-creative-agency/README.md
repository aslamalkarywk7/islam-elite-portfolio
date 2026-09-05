# MAISON NOIR — Luxury Creative Agency Landing Page

A highly professional, ultra-minimalist, editorial landing page UI/UX design mockup for a luxury creative agency. Built with high-contrast brutalist typography, massive serif display headlines, desaturated studio lighting portrait photography, and strict monochromatic black and white aesthetic.

---

## 1. Tech Stack & Programming Languages

### Programming Languages
- **TypeScript (v5.8+)**: Type-safe development across components, data structures, and state management.
- **HTML5**: Semantic web architecture with responsive viewport configuration and Google Fonts integrations.
- **CSS3 (Tailwind CSS v4)**: Utility-first styling utilizing high-contrast monochromatic palettes, custom grid overlays, and typographic scale variables.

### Frameworks & Libraries
- **React (v19.0)**: Modern component architecture utilizing functional components, hooks, and modular UI patterns.
- **Vite (v6.2)**: Next-generation frontend tooling providing lightning-fast dev server and optimized production builds.
- **Tailwind CSS (v4.1)**: Modern CSS framework with native `@import "tailwindcss";` and custom utility layers.
- **Lucide React (v0.546)**: Minimalist vector icon library for technical, editorial UI icons.
- **Motion (v12.23)**: Animation engine for smooth component transitions and modal drawers.
- **Google Fonts API**: High-fashion typography pairing including *Bodoni Moda*, *Playfair Display*, *Syne*, and *Space Mono*.

---

## 2. Installation & Running the Project

### Prerequisites
- **Node.js**: `v18.0.0` or higher (recommended `v20.x`)
- **npm**: `v9.x` or higher (or `pnpm` / `yarn`)

### Step-by-Step Installation

1. **Clone or Download the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000` (or `http://0.0.0.0:3000`).

4. **Type Checking & Linting**:
   ```bash
   npm run lint
   ```

5. **Production Build**:
   ```bash
   npm run build
   ```
   The production-ready output files will be compiled into the `dist/` directory.

6. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 3. Project Architecture & Code Structure

```
├── index.html                    # Root HTML document with Google Fonts imports
├── metadata.json                 # Applet metadata configuration
├── package.json                  # Scripts and dependencies declaration
├── tsconfig.json                 # TypeScript compiler configuration
├── vite.config.ts                # Vite dev server and plugin settings
└── src/
    ├── main.tsx                  # Application entry point
    ├── App.tsx                   # Master App container & state management
    ├── index.css                 # Global styles & Tailwind CSS v4 setup
    ├── vite-env.d.ts             # Static asset module type declarations
    ├── types.ts                  # Shared TypeScript interfaces & types
    ├── data.ts                   # Lookbook headlines, project items, & CSS specs
    ├── assets/
    │   └── images/               # High-resolution desaturated studio portraits
    └── components/
        ├── Header.tsx            # Minimalist brand header & edition switcher
        ├── EditorialHero.tsx     # Hero section with serif typography & portrait
        ├── PrecisionToolbar.tsx  # Floating HTML/CSS precision control bar
        ├── SpecsDrawer.tsx       # Interactive CSS specifications inspector
        ├── ManifestoDrawer.tsx   # Agency manifesto, roster, & atelier inquiries
        └── CustomCursor.tsx      # Precision crosshair mouse cursor
```

---

## 4. Troubleshooting Common Build & Runtime Issues

### Issue 1: Missing TypeScript Type Declarations for Images
* **Symptom**: Error `Cannot find module './assets/images/...' or its corresponding type declarations`.
* **Solution**: Ensure `src/vite-env.d.ts` contains static image module declarations:
  ```typescript
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  ```

### Issue 2: Dev Server Port Binding Conflict
* **Symptom**: Error binding to port `3000`.
* **Solution**: Ensure port `3000` is free or run `npm run dev` with alternative flags, e.g., `npx vite --port 3000 --host 0.0.0.0`.

### Issue 3: Google Fonts Not Rendering
* **Symptom**: Typography falls back to generic serif or sans-serif fonts.
* **Solution**: Verify `index.html` includes the Google Fonts `<link>` tags for `Bodoni Moda`, `Playfair Display`, `Syne`, and `Space Mono`.

---

## 5. Customization & Editing Guide

### How to Modify Content & Headlines
Edit `/src/data.ts` to update:
- **Headlines & Subtitles**: Modify `EDITORIAL_HEADLINES` array.
- **Project Roster**: Update `PROJECTS` array with new clients, categories, and descriptions.
- **CSS Specifications**: Adjust `CSS_SPECIFICATIONS` metrics shown in the Inspector drawer.

### How to Modify Colors & Theme
- Edit `/src/index.css` to update CSS variables and custom utility classes.
- Toggle between **Dark Mode** (`#000000` void) and **Light Mode** (`#FFFFFF` pure) using the floating bottom toolbar or state in `App.tsx`.

---

## 6. Suggested Future Feature Enhancements

1. **WebGL / Three.js Distortion Effects**:
   Add subtle monochromatic liquid shader wave distortion on hover over the central portrait.
2. **Audio Soundscape**:
   Incorporate ambient brutalist tone generator (whisper-quiet ambient frequency on toggle).
3. **Interactive Project Case Studies**:
   Expand the project roster into full-screen editorial case study modal views.
4. **Multilingual Editorial Toggle**:
   Support English, French (*Français*), and Japanese (*日本語*) typography layouts.
5. **PDF Manifesto Download**:
   Generate a downloadable high-resolution PDF lookbook directly from the client browser.
