# Studio Chroma — Material Design 3 Bento Portfolio

![Studio Chroma Banner](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop)

**Studio Chroma** is a modern, high-performance web application showcasing a creative digital agency portfolio built according to **Google Material Design 3 (M3)** specifications and expressive Bento grid layout principles.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Vite 6**, and **Motion**, Studio Chroma combines human-centered ergonomics, dynamic token systems, spatial workspace mockup simulations, and tactile touch ripple mechanics into an interactive web experience.

---

## 🌟 Key Features

- **🎨 Material Design 3 Token Engine**: Custom color palettes, surface tonal elevations, state layers, and typography scales based on standard M3 system roles (`md.sys.color.primary`, `surface-variant`, `outline`, etc.).
- **⚡ M3 Ripple Physics Engine**: Custom touch feedback micro-animations simulating standard Material ripple physics across interactive elements.
- **🍱 Bento Grid Layouts**: Visually organized portfolio showcase with category tagging, search filtering, and responsive desktop/mobile density.
- **🎛️ Live M3 Token Inspector**: Interactive side-sheet allowing designers and developers to audit, inspect, and copy live hex tokens and color roles used in the application.
- **🖥️ Desktop Workspace Simulator**: Immersive 3D desk environment featuring realistic lighting, ambient screen glare toggles, tilt angles, and full-screen preview modes.
- **📱 Slide-out Project Details & Contact Drawer**: Smooth drawer overlays for reading project case studies and submitting design commission briefs.
- **⚡ Responsive & Accessible**: WCAG AAA compliant color contrast, responsive desktop-first and mobile-first layouts, and touch target sizing.

---

## 🛠️ Tech Stack & Programming Languages

### Programming Languages
- **TypeScript** (`~5.8.2`) — Strongly typed application logic and component interface declarations.
- **HTML5** — Semantic document structure and accessibility ARIA roles.
- **CSS3 / Tailwind CSS v4** (`^4.1.14`) — Utility-first styling with modern CSS custom properties and M3 elevation shadows.

### Frameworks & Core Libraries
- **React 19** (`^19.0.1`) — Declarative UI component hierarchy.
- **Vite 6** (`^6.2.3`) — Next-generation frontend tooling and fast ES module dev server.
- **Express.js** (`^4.21.2`) — Optional Node backend entry point for server API routing and static production hosting.
- **Motion** (`^12.23.24`) — Spring physics and smooth route/drawer entry transitions.
- **Lucide React** (`^0.546.0`) — Clean vector iconography.
- **Google GenAI SDK** (`^2.4.0`) — Server-side AI API integration capability.

---

## 📁 Project Structure

```
studio-chroma/
├── src/
│   ├── components/            # UI components and M3 system controls
│   │   ├── AboutSection.tsx        # Studio background and key trust metrics
│   │   ├── ContactDrawer.tsx       # Commission inquiry form side sheet
│   │   ├── FAB.tsx                 # Floating Action Button with M3 styling
│   │   ├── Header.tsx              # Navigation bar & token inspector toggle
│   │   ├── HeroSection.tsx          # Main display title & M3 preview card
│   │   ├── M3Button.tsx            # Button variants (filled, outlined, tonal, text, fab)
│   │   ├── M3Ripple.tsx            # Material touch feedback ripple component
│   │   ├── M3ThemeInspector.tsx    # Live token auditing overlay sheet
│   │   ├── PortfolioGrid.tsx       # Bento grid showcase with search & filters
│   │   ├── ProcessSection.tsx      # 4-step studio methodology grid
│   │   ├── ProjectDetailModal.tsx  # Project case study side sheet
│   │   ├── ServicesSection.tsx     # Studio deliverables & capabilities
│   │   └── WorkspaceMockup.tsx     # 3D desk setup simulator & viewport toggle
│   ├── data/                   # Mock portfolio project models & deliverables
│   ├── App.tsx                 # Main application layout manager
│   ├── index.css               # Global Tailwind CSS @import and M3 elevation utilities
│   ├── main.tsx                # Application entry point
│   └── types.ts                # TypeScript interfaces and data types
├── .env.example                # Template for environment configuration
├── index.html                  # HTML template with Google Roboto font preconnects
├── metadata.json               # Platform applet configuration
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler options
└── vite.config.ts              # Vite server & bundler configuration
```

---

## 🚀 Quick Start & Build Instructions

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm** (`v9+`), **yarn**, **pnpm**, or **bun**

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/studio-chroma.git
cd studio-chroma
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy `.env.example` to create your local `.env` file:
```bash
cp .env.example .env
```

### 4. Run Development Server
Start the local development server at `http://localhost:3000`:
```bash
npm run dev
```

### 5. Build for Production
Compile optimized static production assets into the `dist/` directory:
```bash
npm run build
```

### 6. Preview Production Build
Locally preview the production build:
```bash
npm run preview
```

---

## 📖 Additional Documentation

For detailed information, please refer to the dedicated guide files:

- 📑 **[BUILD & INSTALLATION GUIDE](INSTALLATION.md)** — Detailed environment setup, scripts, and deployment instructions.
- ⚙️ **[TECHNICAL ARCHITECTURE](ARCHITECTURE.md)** — In-depth breakdown of state management, M3 tokens, and component design.
- 🛠️ **[TROUBLESHOOTING GUIDE](TROUBLESHOOTING.md)** — Common errors, port binding, and dependency resolutions.
- 🤝 **[CONTRIBUTING GUIDELINES](CONTRIBUTING.md)** — Code style, pull request guidelines, and issue reporting.
- 📄 **[LICENSE](LICENSE)** — Open Source MIT License terms.

---

## 📜 Open Source License

This project is open-source software licensed under the **[MIT License](LICENSE)**.
