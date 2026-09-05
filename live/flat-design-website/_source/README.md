# Connective Digital Agency 🎨🚀

> A modern, vibrant Flat Design landing page and digital agency web application crafted with React 19, TypeScript, Vite, Tailwind CSS, and Motion.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![React](https://img.shields.io/badge/React-19.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-6.2-646cff)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38bdf8)

---

## 🌟 Overview

**Connective Digital Agency** is an interactive, high-performance web platform for a creative digital agency. It showcases clean, cheerful Flat Design aesthetics characterized by crisp geometric shapes, vibrant color palettes, bold typography, and interactive vector graphics. 

The application includes interactive mockup viewports, a live component code inspector, service estimators, client contact modals, project portfolios, and responsive layout controls.

---

## ✨ Key Features

- 🎨 **Flat Design Aesthetic**: Clean, borderless visual hierarchy, vibrant cheerful color palette, high-contrast typography, and custom SVG vector illustrations.
- 📱 **Interactive Viewport Frame Switcher**: Toggle between Fullscreen, Photorealistic Desktop Mockup, Tablet, and Mobile viewport modes in real-time.
- 🔍 **Live Code Inspector Modal**: Inspect component source code, theme design tokens, and CSS utility setups directly from the UI.
- 🛠️ **Comprehensive Agency Showcase**:
  - **Hero Section**: Engaging vector illustrations with clear action prompts and social proof.
  - **Services & Interactive Estimator**: Interactive agency service cards with budget sliders and instant project scope estimators.
  - **Portfolio Showcase**: Categorized agency projects with filterable gallery items and client success metrics.
  - **About & Team**: Brand story, agency principles, timeline milestones, and team spotlight.
  - **Blog & Insights**: Highlighting industry trends, design tips, and digital strategy articles.
  - **Interactive Contact Modal**: Quick quote requester pre-filled by selected services.
- ⚡ **Ultra-Fast Performance**: Powered by Vite 6 and React 19 for instant HMR and lightweight production builds.
- 🎭 **Fluid Motion Animations**: Smooth layout transitions, hover states, and micro-interactions powered by `motion`.

---

## 🛠️ Technology Stack & Languages

| Category | Technologies |
| :--- | :--- |
| **Languages** | TypeScript, JavaScript (ESNext), HTML5, CSS3 |
| **Frontend Framework** | React 19, React DOM 19 |
| **Build & Tooling** | Vite 6, tsx, esbuild, TypeScript Compiler (`tsc`) |
| **Styling & UI** | Tailwind CSS v4, `@tailwindcss/vite`, PostCSS |
| **Animations & Icons** | Motion (framer-motion engine), Lucide React Icons |
| **Server Capabilities** | Express.js (Node.js backend proxy integration), Google GenAI SDK (`@google/genai`) |

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher (v20+ recommended)
- **Package Manager**: `npm` (v9+) or `bun`

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/connective-digital-agency.git
   cd connective-digital-agency
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   *(Optional: Provide your `GEMINI_API_KEY` or `APP_URL` if testing server-side AI integrations).*

4. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Launches the development server on port `3000`.
- `npm run build`: Compiles and bundles static assets for production deployment using Vite.
- `npm run preview`: Serves the built production bundle locally for inspection.
- `npm run lint`: Runs TypeScript type checks (`tsc --noEmit`) across the codebase.
- `npm run clean`: Cleans up previous build artifacts and bundled outputs.

---

## 📁 Directory Structure

```text
├── .env.example            # Environment variables template
├── metadata.json           # Application metadata & capabilities
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration with Tailwind CSS plugin
├── public/                 # Static public assets
├── src/
│   ├── App.tsx             # Main application orchestrator & layout frame manager
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global CSS and Tailwind directives
│   ├── types.ts            # TypeScript interfaces, types, and enums
│   ├── data/
│   │   └── agencyData.ts   # Structured agency services, portfolio, blog, and team data
│   └── components/
│       ├── Navbar.tsx                # Responsive navigation header
│       ├── HeroSection.tsx           # Hero header section with action triggers
│       ├── HeroVectorIllustration.tsx# Custom SVG flat design vector graphic
│       ├── ServicesSection.tsx       # Agency services & project cost calculator
│       ├── PortfolioSection.tsx      # Portfolio filterable gallery
│       ├── AboutSection.tsx          # Agency story & team highlights
│       ├── BlogSection.tsx           # Articles & news section
│       ├── ContactSection.tsx        # Comprehensive contact form
│       ├── CodeInspectorModal.tsx    # Live source code viewer modal
│       ├── MockupFrameHeader.tsx     # Frame preview toolbar controls
│       └── Footer.tsx                # Page footer & newsletter signup
└── docs/                     # Additional documentation files
    ├── INSTALLATION.md       # Detailed installation guide
    ├── TECH_STACK.md         # In-depth technology stack breakdown
    ├── BUILD_AND_DEPLOYMENT.md # Production build & deployment guide
    └── TROUBLESHOOTING.md    # Common issues & troubleshooting solutions
```

---

## 📚 Complete Documentation

For detailed information, please refer to our documentation files in the `docs/` folder:

- 📖 **[Installation Guide](docs/INSTALLATION.md)** - Detailed steps to install and set up your local development workspace.
- ⚙️ **[Tech Stack Deep Dive](docs/TECH_STACK.md)** - In-depth guide to architecture, languages, design tokens, and components.
- 🚢 **[Build & Deployment](docs/BUILD_AND_DEPLOYMENT.md)** - Building, containerizing, and deploying to Cloud Run or static servers.
- 🛠️ **[Troubleshooting & FAQ](docs/TROUBLESHOOTING.md)** - Solutions for common build, runtime, and environment issues.
- 🤝 **[Contributing Guidelines](CONTRIBUTING.md)** - Guidelines for opening issues, writing code, and submitting pull requests.

---

## ⚖️ License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
