# Zenith Finance - Neumorphism 2.0 Wealth Management Platform

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6.svg)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8.svg)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff.svg)](https://vitejs.dev)

> **Zenith Finance** is a state-of-the-art, executive-grade web application featuring **Neumorphism 2.0 (Soft UI) / Geometric Balance** design architecture. It delivers tactile, sculptural wealth management capabilities with diffused lighting dynamics, live interactive financial projection engines, and responsive showcase modes.

---

## 📋 Table of Contents
1. [Project Overview](#-project-overview)
2. [Tech Stack & Programming Languages](#-tech-stack--programming-languages)
3. [Key Features](#-key-features)
4. [Architecture & Design System](#-architecture--design-system)
5. [Installation & Setup Guide](#-installation--setup-guide)
6. [Known Issues & Troubleshooting](#-known-issues--troubleshooting)
7. [Contributing](#-contributing)
8. [License & Open Source](#-license--open-source)

---

## 🌟 Project Overview

Zenith Finance reimagines modern wealth management interfaces by combining ultra-soft 3D tactile UI depth with real-time portfolio analytics. Designed for high-net-worth individuals, family offices, and financial advisors, Zenith Finance replaces overwhelming flat dashboards with an organic, calming surface where controls are carved directly out of a velvety canvas tone (`#e6e9ef`).

### Primary Objectives
- **Geometric Balance & Soft Depth:** Seamless interplay of highlight and shadow vectors calculated dynamically relative to configurable ambient light angles.
- **Uncompromised Usability:** Touch-friendly, accessible controls with minimum 44px hit targets and high-contrast WCAG AA typography.
- **Interactive Financial Simulation:** Compound interest projection engine with real-time slider controls and asset distribution visualizations.
- **Showcase Environments:** Dual-view modes supporting photorealistic 16" MacBook Pro desk frame display or edge-to-edge web presentation.

---

## 💻 Tech Stack & Programming Languages

### Languages
- **TypeScript 5.8**: Strictly typed interface declarations, custom theme configurations, and data models.
- **HTML5 & Modern CSS3**: CSS custom properties (`var(--neu-bg)`), Tailwind CSS v4 `@import "tailwindcss"`, and hardware-accelerated 3D transforms.

### Frameworks & Core Libraries
- **React 19.0**: Functional UI components with hooks (`useState`, `useEffect`, `useRef`).
- **Tailwind CSS v4**: Utility-first styling engine with customized `@theme` rules and custom Neumorphic utilities.
- **Motion / React (`motion/react`)**: Micro-interactions, spring physics tap responses, and page transitions.
- **Lucide React**: Clean vector iconography for financial metrics, security indicators, and navigational controls.
- **Express 4.21 & Node.js**: Full-stack capability support and static distribution serving.
- **Vite 6.2 & esbuild**: Ultra-fast build pipeline and dev server.

---

## 🚀 Key Features

### 1. Neumorphism 2.0 (Geometric Balance) Engine
- Custom shadow generator calculating inner shadows (`neu-inset`), raised surfaces (`neu-raised`), convex domes (`neu-convex`), and concave wells (`neu-concave`).
- Dynamic Soft UI Lighting Studio allowing real-time adjustment of light angles ($0^\circ - 360^\circ$), blur intensity, offset distance, and background canvas tones.

### 2. Interactive Executive Console
- **Live Net Wealth Radar:** Aggregated cash flow tracking with custom performance horizon curves (SVG paths with soft radial gradients).
- **Asset Class Breakdown:** Visual progress indicators for equities, private real estate, fixed income, and liquid reserves.
- **Encrypted Vault Activity:** Real-time transaction feed with automatic categorizations and status tags.

### 3. Compound Wealth Projection Simulator
- Dynamic sliders for Initial Capital, Monthly Contribution, Duration (1–30 Years), and Expected Annual Yield (% p.a.).
- Automatic compound interest math distinguishing principal contributions from exponential alpha growth.

### 4. Photorealistic Showcase Frame Mode
- Embedded 16" MacBook Pro display enclosure resting on a light oak desk environment for high-impact product presentation.
- Instant toggle between Desk Showcase Mode and Fullscreen Application View.

### 5. Private Onboarding & Membership Modal
- Executive tier selection (Private Essential, Wealth Premier, Institutional Trust) with hardware token passkey simulation.

---

## 🏗️ Architecture & Design System

```
zenith-finance/
├── .env.example              # Environment variables template
├── index.html                # Application HTML entry point
├── metadata.json             # Applet metadata & frame permissions
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript strict compiler config
├── vite.config.ts            # Vite build configuration & alias paths
├── src/
│   ├── main.tsx              # React DOM mounting entry point
│   ├── App.tsx               # Primary application container & view manager
│   ├── index.css             # Tailwind CSS & Neumorphic CSS utility rules
│   ├── types.ts              # Global TypeScript interfaces
│   ├── data/
│   │   └── mockData.ts       # Portfolio metrics, transactions, and pricing tiers
│   └── components/
│       ├── NeumorphicBox.tsx # Core reusable Soft UI container
│       ├── Navbar.tsx        # Top navigation bar with logo & view controls
│       ├── HeroSection.tsx   # Hero messaging & primary CTA
│       ├── DashboardPreview.tsx # Interactive portfolio console & line chart
│       ├── FeatureGrid.tsx   # 3-pillar feature grid & interactive lab
│       ├── WealthCalculator.tsx # Compound interest simulator
│       ├── PricingSection.tsx # Membership plans & billing cycle toggle
│       ├── AboutTrustSection.tsx # Institutional security metrics & quotes
│       ├── SoftUIStudioDrawer.tsx # Real-time lighting & shadow tuning drawer
│       ├── MacBookFrame.tsx  # Photorealistic MacBook desk frame
│       ├── GetStartedModal.tsx # Onboarding & passkey registration modal
│       └── Footer.tsx        # Navigation footer & newsletter signup
```

---

## 🛠️ Installation & Setup Guide

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Step-by-Step Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/zenith-finance.git
   cd zenith-finance
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

4. **Start the Local Development Server:**
   ```bash
   npm run dev
   ```
   The application will boot at `http://localhost:3000`.

5. **Build for Production:**
   ```bash
   npm run build
   ```

6. **Run Production Server:**
   ```bash
   npm run start
   ```

---

## ⚠️ Known Issues & Troubleshooting

| Issue / Symptom | Root Cause | Resolution |
| :--- | :--- | :--- |
| **Shadows appear flat or invisible** | System dark mode override or invalid CSS variable `--neu-bg`. | Open the **Lighting Studio** drawer (slider icon in top right) and click **"Reset Lighting Defaults"**. Ensure background tone matches `#e6e9ef`. |
| **Port 3000 conflict on startup** | Another process is consuming port 3000. | Terminate the process on port 3000 (`lsof -i :3000` -> `kill -9 <PID>`) or set `PORT=3001` in your local environment. |
| **WebSocket connection warning in browser console** | HMR disabled by platform design to prevent re-renders during incremental agent edits. | Safe to ignore. The dev server handles preview refreshes cleanly. |
| **Chart line misaligned on ultra-small screens** | SVG viewBox scaling constraint. | The `DashboardPreview` chart uses fluid SVG `viewBox="0 0 400 160"` with responsive container wrapping. Ensure parent container maintains `w-full`. |

---

## 🤝 Contributing

We welcome contributions from developers, designers, and financial engineers worldwide! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide for details on our code of conduct, development workflow, and pull request submission process.

---

## 📄 License & Open Source

This project is open-source software licensed under the **[Apache License 2.0](LICENSE)**.

You are free to use, modify, distribute, and sublicense this software under the conditions stated in the license file.
