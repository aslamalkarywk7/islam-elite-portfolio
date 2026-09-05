# GRID STUDIO — Swiss Typographic Style & Design System

A photorealistic, highly structured Swiss Style website landing page UI design mockup embedded inside a natural creative studio environment on a silver MacBook Pro. Grounded in the historical International Typographic Style (Josef Müller-Brockmann, Emil Ruder, Max Bill), this application demonstrates precision grid architecture, objective typography, asymmetric equilibrium, and interactive design tools.

---

## 🌟 Key Features

- **Photorealistic Studio Mockup Environment**:
  - Displays the full Swiss landing page on an open silver MacBook Pro 16" placed on a modern light-wood design desk in a naturally illuminated creative studio.
  - Interactive lighting controls (Daylight, Warm, Dramatic) and glass reflection glare toggles.
  - Smooth display zooming (75% to 140%) and tilt/pan focus.

- **Interactive Swiss Grid Engine**:
  - Real-time 12-column, 6-column, or 3-column modular grid alignment overlays.
  - Baseline rhythm horizontal guides and exact margin boundary inspect tools.
  - Configurable Swiss Red color variants (`#E30613` Classic Swiss, `#FF0000` Pure RGB, `#C8102E` Flag Crimson, `#D00000` International Red).

- **Authentic Swiss Landing Page UI**:
  - **Dominant Typography**: Large, bold geometric headings in black caps (`THE ART OF STRUCTURE AND GRID`).
  - **Sub-headline Block**: `SWISS TYPOGRAPHIC STYLE. CLARITY. ORGANISATION. SIMPLICITY. PRECISION.`
  - **Asymmetric Swiss Red Accent**: Solid red block containing a white geometric square and bold `SWISS DESIGN` badge.
  - **Systemic Foundations**: Numbered grid cards (`01. STRUCTURE`, `02. TYPOGRAPHY`, `03. FUNCTION`).
  - **Portfolio Archive**: Interactive specification cards for legendary and modern Swiss design artifacts.
  - **Historical Manifesto**: Insights and quotations from Swiss typography masters.

- **Interactive Poster Studio**:
  - Real-time generator allowing users to customize headlines, numeric codes, font scaling, background colors, grid guides, and accent block placement.
  - Export and shuffle controls.

- **Dual View Modes**:
  - Seamlessly toggle between the 3D Studio Desk Mockup and Fullscreen Landing Page View.

---

## 🛠️ Programming Languages & Tech Stack

| Domain | Technology / Library | Description |
| :--- | :--- | :--- |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (v5.8) | Strong static typing, type safety, and interface definitions |
| **Framework** | [React 19](https://react.dev/) | Functional UI components and state management |
| **Build Tool** | [Vite](https://vitejs.dev/) (v6.2) | Lightning-fast development server & production bundler |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS engine with `@import "tailwindcss";` |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, vector icon system |
| **Server** | [Express](https://expressjs.com/) (v4.21) | Node.js application server layer |
| **Compiler** | [esbuild](https://esbuild.github.io/) | Production CJS server bundling |

---

## 🚀 Getting Started & Installation

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/grid-studio.git
   cd grid-studio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` (or let the platform inject runtime keys automatically):
   ```bash
   cp .env.example .env
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

---

## 🏗️ Building for Production

To build the application for production deployment:

1. **Run the Production Build Command**:
   ```bash
   npm run build
   ```
   This command executes:
   - Client-side static asset bundle compilation via `vite build`
   - Server entry point compilation via `esbuild` into `dist/server.cjs`

2. **Start the Production Server**:
   ```bash
   npm start
   ```
   The application will boot the CommonJS compiled server from `dist/server.cjs` bound to `0.0.0.0:3000`.

---

## 📁 Repository Structure

```
├── .env.example              # Environment variables template
├── ARCHITECTURE.md           # Technical architecture & design decisions
├── CONTRIBUTING.md           # Contribution guidelines & code style
├── LICENSE                   # Open-source MIT License
├── README.md                 # Project documentation (this file)
├── TROUBLESHOOTING.md        # Problem-solving & diagnostic guide
├── index.html                # Entry HTML template with Inter/Space Grotesk fonts
├── metadata.json             # AI Studio applet metadata & permissions
├── package.json              # Dependency manifest & scripts
├── tsconfig.json             # TypeScript compiler settings
├── vite.config.ts            # Vite build configuration
└── src/
    ├── App.tsx               # Main application container & view manager
    ├── index.css             # Global Tailwind v4 styles & grid patterns
    ├── main.tsx              # React DOM root mounting entry
    ├── types.ts              # Global TypeScript interfaces & types
    ├── assets/
    │   └── images/           # Generated studio photography & background assets
    ├── components/
    │   ├── MacBookMockup.tsx           # Photorealistic MacBook 3D studio desk view
    │   ├── SwissLandingPage.tsx        # High-precision Swiss Style landing page UI
    │   ├── GridInspectorToolbar.tsx    # Floating alignment & grid controls
    │   └── PosterPlaygroundModal.tsx   # Interactive Swiss Poster generator modal
    └── data/
        └── swissData.ts      # Structured data for principles, projects & quotes
```

---

## ❓ Troubleshooting

If you encounter issues during installation, development, or deployment, consult our comprehensive **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** guide.

**Quick Diagnostic Checklist**:
- **Port Conflicts**: Ensure port `3000` is free, as external proxies route to port `3000`.
- **Type Checking Errors**: Run `npm run lint` (`tsc --noEmit`) to verify TypeScript type conformity.
- **Missing Module Errors**: Run `npm install` to populate `node_modules`.

---

## 🤝 Contributing

We welcome contributions that honor Swiss design principles! Please read **[CONTRIBUTING.md](./CONTRIBUTING.md)** for information on code standards, commit formatting, and pull request procedures.

---

## 📜 Open Source License

Distributed under the **MIT License**. See **[LICENSE](./LICENSE)** for more information.

*Grid Studio — Swiss International Typographic Style • Zürich & Global*
