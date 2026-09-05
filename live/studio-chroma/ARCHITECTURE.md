# Technical Architecture & Design System — Studio Chroma

This document outlines the technical architecture, design patterns, component topology, Material Design 3 token engine, and performance strategy powering **Studio Chroma**.

---

## 🏛️ System Overview

**Studio Chroma** is built as a modular Single Page Application (SPA) with optional server-side routing capabilities. It emphasizes strict component separation, explicit TypeScript type contracts, responsive Bento grid organization, and Google Material Design 3 visual principles.

```
                  ┌─────────────────────────────────────────┐
                  │               index.html                │
                  └────────────────────┬────────────────────┘
                                       │
                  ┌────────────────────▼────────────────────┐
                  │               main.tsx                  │
                  └────────────────────┬────────────────────┘
                                       │
                  ┌────────────────────▼────────────────────┐
                  │                App.tsx                  │
                  │   (State & Drawer Overlays Manager)     │
                  └───────┬─────────────────────────┬───────┘
                          │                         │
      ┌───────────────────▼───────┐         ┌───────▼──────────────────┐
      │     WorkspaceMockup.tsx   │         │    M3ThemeInspector.tsx  │
      │  (3D Workspace Simulator) │         │   (Live Token Auditor)   │
      └───────────┬───────────────┘         └──────────────────────────┘
                  │
 ┌────────────────┴──────────────────────────────────────────────────────┐
 │                            LANDING PAGE                               │
 ├──────────────┬───────────────┬────────────────┬───────────────┬───────┤
 │ Header.tsx   │ Hero.tsx      │ Portfolio.tsx  │ Services.tsx  │ ...   │
 └──────────────┴───────────────┴────────────────┴───────────────┴───────┘
```

---

## 🎨 Material Design 3 (M3) Token Engine

Studio Chroma defines its design tokens in standard CSS custom properties and utility classes inside `/src/index.css`:

### 1. Color System Palette Roles

| Token Role | Hex Color | Purpose & Usage |
| :--- | :--- | :--- |
| `md.sys.color.primary` | `#005CBB` | Brand anchor, filled buttons, active states |
| `md.sys.color.on-primary` | `#FFFFFF` | Text and vector icons rendered on top of primary |
| `md.sys.color.primary-container` | `#D8E2FF` | Active chips, navigation pill highlights |
| `md.sys.color.on-primary-container` | `#001D33` | Text rendered inside active container pills |
| `md.sys.color.secondary` | `#6750A4` | Floating Action Buttons (FABs), secondary highlights |
| `md.sys.color.secondary-container` | `#EADDFF` | Status badges, commission pills |
| `md.sys.color.surface` | `#FDFBFF` | Clean background canvas |
| `md.sys.color.surface-variant` | `#E1E2EC` | Card borders, subtle background containers |
| `md.sys.color.outline` | `#757780` | Subtle hairline dividers, search input borders |
| `md.sys.color.on-surface` | `#1A1C1E` | High-contrast display headlines and body text |

### 2. Tonal Surface Elevation Shadows
Defined in CSS for multi-layered spatial depth:
- `.m3-elevation-1`: `0px 1px 3px 1px rgba(0, 29, 51, 0.08)`
- `.m3-elevation-2`: `0px 2px 6px 2px rgba(0, 29, 51, 0.08)`
- `.m3-elevation-3`: `0px 4px 12px 3px rgba(0, 29, 51, 0.12)`
- `.m3-elevation-4`: `0px 6px 16px 4px rgba(0, 29, 51, 0.14)`

---

## 🧩 Component Architecture & Responsibilities

### Core Interactive Components
- **`M3Ripple.tsx`**: Renders a dynamic keyframe-animated radial touch ripple when clicked or tapped. Calculates cursor coordinates relative to button bounding boxes.
- **`M3Button.tsx`**: Implements standard M3 button spec variants:
  - `filled`: High emphasis primary action.
  - `outlined`: Medium emphasis border button.
  - `tonal`: Soft background container button.
  - `text`: Low emphasis inline link button.
  - `fab`: Tonal elevation floating button.
- **`WorkspaceMockup.tsx`**: Houses the interactive 3D desk environment with realistic mouse parallax tilt, desk wood texture framing (`--desk-wood: #eaddd3`), screen glare overlays, and direct fullscreen mode toggling.

### Feature Overlay Drawers
- **`M3ThemeInspector.tsx`**: Live side-sheet allowing users to inspect M3 tokens, copy hex codes, and view color roles in real-time.
- **`ProjectDetailModal.tsx`**: Slide-out case study viewer presenting problem briefs, M3 solutions, metrics, and deliverable tags.
- **`ContactDrawer.tsx`**: Commission inquiry modal with project type selector chips, budget buttons, and reactive form submission handling.

---

## 📊 Data & State Management

Application state is held cleanly in `App.tsx` and distributed via explicit props:

- **`activeSection`**: Tracks scroll position for header navigation pill highlighting (`hero` | `work` | `services` | `about` | `process`).
- **`selectedProject`**: Holds active project model when clicked for full case study viewing in `ProjectDetailModal`.
- **`contactOpen`**: Boolean flag controlling the `ContactDrawer` open/close state.
- **`themeInspectorOpen`**: Boolean flag controlling the `M3ThemeInspector` open/close state.
- **`viewMode`**: Toggles between `mockup` (3D Desk Simulation) and `direct` (Full Width Landing View).

---

## ⚡ Performance & Optimization Strategies

1. **Pure CSS Animation Keyframes**: Radial ripples and elevation transitions run directly on GPU-accelerated CSS properties (`transform`, `opacity`).
2. **Dynamic Lazy Overlays**: Drawers and modals render conditionally, preventing unneeded DOM nodes when hidden.
3. **Optimized Asset Delivery**: Google Fonts (`Roboto`) are preconnected via `<link rel="preconnect">` in `index.html`.
4. **Tailwind v4 Utility Extraction**: Unused CSS utilities are purged at build-time by `@tailwindcss/vite`.
