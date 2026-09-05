# BAUHAUS 1919 — Creative Design Studio

A high-precision, modernist web application and creative agency showcase inspired by the **Bauhaus Movement (1919–1933)**. Built with React 19, TypeScript, Tailwind CSS, and Motion, this platform merges historical design philosophy (*"Form Follows Function"* and *"Art and Technology: A New Unity"*) with modern frontend engineering.

---

## 📐 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack & Technologies](#-tech-stack--technologies)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation Guide](#-installation-guide)
- [Building & Running](#-building--running)
- [Troubleshooting & Common Issues](#-troubleshooting--common-issues)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎨 Project Overview

**BAUHAUS 1919** is designed to demonstrate how strict mathematical layout grids, primary color theory (Red `#FF2A1F`, Yellow `#FFE600`, Blue `#0055FF`), desaturated high-contrast photography, and dynamic vector geometric overlays create engaging user experiences without relying on generic SaaS UI clichés.

The app features dual presentation modes:
1. **Interactive Fullscreen Canvas**: A clean, responsive design system.
2. **Architect Studio Mockup**: A 3D-esque workstation framing the web app inside a MacBook Pro display with real-time studio lighting adjustments (Daylight, Golden Hour, Night Studio) and ambient shadow filters.

---

## ⚡ Key Features

- **Dual Display System**: Switch seamlessly between a raw full-screen web canvas and an Architect Studio MacBook Pro mockup presentation.
- **Interactive Poster Studio (The Bauhaus Lab)**:
  - Generative SVG poster generator with real-time typography, primary shape selection (Circle, Square, Triangle, Grid), custom sizes, rotations, and color accents.
  - One-click **Copy SVG Code** button for exporting custom posters.
- **Desaturated Photography & Geometric Overlay Sandbox**:
  - Test real-time primary geometric masks (Multiply, Hard Light, Overlay, Difference, Screen blend modes) on high-contrast architectural and studio portrait photography.
- **Archival Selected Works Showcase**:
  - Filter projects by category (*Branding*, *Architecture*, *Digital*, *Spatial*).
  - Modal inspector displaying grid ratios, typography pairings, and hex specifications.
- **Interactive Discipline Matrix**: Expandable service cards detailing deliverables, sprint timelines, and brand system scope.
- **Real-time Studio Coordinates & Time**: Live mouse coordinate tracking (`X: Y:`) and real-time Berlin (CET) clock.
- **Interactive Commission Brief Form**: Project brief submission form with budget tiering and discipline selection.

---

## 🛠 Tech Stack & Technologies

### **Core Languages & Frameworks**
- **TypeScript 5.8**: Strongly typed code ensuring type safety across components and state.
- **React 19**: Modern functional React with declarative state management.
- **Vite 6**: Fast build tool and development server.

### **Styling & Motion**
- **Tailwind CSS 4**: Utility-first CSS engine configured via `@tailwindcss/vite`.
- **Motion (`motion/react`)**: High-performance layout animations, transitions, and hover effects.
- **Lucide React**: Clean vector iconography.

### **Typography**
- **Syne**: Display headlines.
- **Archivo Black**: Heavy geometric titles.
- **Space Grotesk**: Precision body copy.
- **JetBrains Mono**: Technical spec labels and coordinate readouts.

---

## 📂 Project Structure

```text
├── index.html                    # Entry HTML file with Google Fonts imports
├── metadata.json                 # App metadata & major capabilities
├── package.json                  # NPM dependencies & scripts
├── tsconfig.json                 # TypeScript compiler configuration
├── vite.config.ts                # Vite build configuration
├── src/
│   ├── App.tsx                   # Main root component & mode switcher
│   ├── main.tsx                  # Application mount point
│   ├── index.css                 # Tailwind CSS 4 directives & custom utilities
│   ├── types.ts                  # Shared TypeScript interfaces & types
│   ├── assets/
│   │   └── images/               # High-contrast desaturated photographic assets
│   ├── data/
│   │   └── bauhausData.ts        # Projects, services, manifesto & team data
│   └── components/
│       ├── Navigation.tsx        # Top status bar & mode controller
│       ├── HeroSection.tsx        # Main banner with primary overlay controls
│       ├── ManifestoSection.tsx  # 4 Core Bauhaus pillars & quotes
│       ├── ProjectsShowcase.tsx  # Portfolio grid & detail modal inspector
│       ├── InteractivePosterStudio.tsx # Generative SVG poster lab
│       ├── ServicesSection.tsx   # Expandable agency disciplines
│       ├── ColorOverlaySandbox.tsx    # Live photo blend mode laboratory
│       ├── TeamAndStudio.tsx     # Master faculty & institutional clients
│       ├── ContactInquiry.tsx    # Commission brief inquiry form
│       ├── MacBookStudioMockup.tsx    # Architect studio workstation wrapper
│       └── Footer.tsx            # Bottom typography banner & credits
```

---

## 📋 Prerequisites

Before setting up the project locally, ensure you have the following installed:

- **Node.js**: `v18.0.0` or higher (Node.js 20+ recommended)
- **NPM**: `v9.0.0` or higher (included with Node.js)
- **Git**: Installed for version control

---

## 📥 Installation Guide

1. **Clone the Repository**:
   ```bash
   git clone [https://github.com/your-username/bauhaus-1919-studio.git](https://aslamalkarywk7.github.io/bauhaus-1919---creative-design-studio-1-/)
   cd bauhaus-1919-studio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Copy `.env.example` to `.env` (if applicable):
   ```bash
   cp .env.example .env
   ```

---

## 🚀 Building & Running

### **Development Mode**
To start the local development server on port `3000`:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### **Type Check & Linting**
To verify type safety and check for syntax errors:
```bash
npm run lint
```

### **Production Build**
To compile the production build into the `dist/` folder:
```bash
npm run build
```

### **Preview Production Build**
To locally preview the built production files:
```bash
npm run preview
```

---

## ❓ Troubleshooting & Common Issues

### 1. `Port 3000 is already in use`
- **Cause**: Another process or background instance is occupying port `3000`.
- **Solution**:
  - Kill the process running on port 3000:
    ```bash
    # On Linux / macOS:
    lsof -i :3000
    kill -9 <PID>
    ```
  - Or modify the port flag in `package.json` scripts if operating outside the sandboxed environment.

### 2. `TypeScript type errors or missing module declarations`
- **Cause**: Outdated `node_modules` or missing type definitions.
- **Solution**:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  npm run lint
  ```

### 3. `Tailwind CSS styles not loading`
- **Cause**: Tailwind CSS 4 requires `@import "tailwindcss";` in `src/index.css` and the `@tailwindcss/vite` plugin in `vite.config.ts`.
- **Solution**: Ensure `src/index.css` contains `@import "tailwindcss";` at line 1.

### 4. `Images failing to display or CORS issues`
- **Cause**: External image URLs or browser referrer policies.
- **Solution**: All `<img>` tags in the app include `referrerPolicy="no-referrer"` to ensure reliable cross-origin loading.

---

## 🤝 Contributing

We welcome contributions! Please review [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines regarding code standards, branching conventions, and pull request procedures.

---

## 📄 License

This project is open-source and licensed under the [Apache License 2.0](./LICENSE).
