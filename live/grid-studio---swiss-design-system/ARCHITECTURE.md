# Technical Architecture & Design System

This document outlines the software architecture, design principles, component layout, and state management model powering **Grid Studio**.

---

## 📐 Design Philosophy: International Typographic Style

Grid Studio is built as a living tribute to the **International Typographic Style** (Swiss Style), pioneered in the 1950s in Basel and Zürich by visual visionaries including **Josef Müller-Brockmann**, **Emil Ruder**, **Armin Hofmann**, and **Max Bill**.

### Core Tenets Incorporated in Code:

1. **Mathematical Grid Architecture**:
   - Every headline, subtext block, card, button, and image container strictly respects a 12-column modular grid or standard mathematical step ratios.
   - Proportions align with DIN standards and golden ratio increments ($1 : 1.618$).

2. **Objective Typography**:
   - Information hierarchy is established purely through font weight contrast (Black, Bold, Medium, Regular) and scale ratios, using clean neutral sans-serif typefaces (`Inter`, `Space Grotesk`, `Helvetica Neue`).
   - Flush-left, rag-right body copy settings avoid awkward hyphenation and preserve natural optical reading flow.

3. **Restrained High-Contrast Color Palette**:
   - **Canvas**: Pure White (`#FFFFFF`) and High-Density Neutral Backgrounds (`#0F0F11`, `#111215`).
   - **Text**: Pure Black (`#000000`) and Stark White (`#FFFFFF`).
   - **Accent**: Precision Swiss Red (`#E30613` / `#FF0000`), applied purposefully to guide user focal priority.

4. **Asymmetric Equilibrium**:
   - Elements are intentionally arranged asymmetrically to create visual dynamism while maintaining structural balance through calculated negative space and solid color blocks.

---

## 🏗️ Software Architecture & Component Layout

The application is structured into modular, decoupled React components with typed state flow:

```
                  ┌─────────────────────────────────────────┐
                  │                 App.tsx                 │
                  │  (View Manager & Global Grid State)     │
                  └────────────────────┬────────────────────┘
                                       │
            ┌──────────────────────────┴──────────────────────────┐
            ▼                                                     ▼
┌───────────────────────┐                             ┌───────────────────────┐
│   MacBookMockup.tsx   │                             │  SwissLandingPage.tsx │
│  (3D Studio Desk Env) │                             │ (Fullscreen UI View)  │
└───────────┬───────────┘                             └───────────────────────┘
            │
            ▼ (Embeds inside Retina Screen)
┌───────────────────────┐
│  SwissLandingPage.tsx │
└───────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      Grid Inspector & Modal Overlays                         │
│  • GridInspectorToolbar.tsx (Alignment rules, column count, color variants) │
│  • PosterPlaygroundModal.tsx (Interactive Swiss Poster layout generator)    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🧩 Component Breakdown

1. **`App.tsx`**:
   - Top-level application container.
   - Manages global state: `viewMode` (`'mockup'` | `'fullscreen'`), `gridConfig` (column count, baseline toggles, margin boundaries, red variant accent), and `isPosterOpen` modal visibility.

2. **`MacBookMockup.tsx`**:
   - Renders a 3D-styled silver MacBook Pro 16" sitting on a light-wood creative design desk surrounded by natural studio daylight, green plants, and design tools.
   - Features ambient studio lighting controls (`Daylight`, `Warm`, `Dramatic`), screen glass reflection glare toggle, interactive screen zoom controls ($75\%$ to $140\%$), and seamless screen scrolling.
   - Renders the `SwissLandingPage` component directly inside the laptop's Retina display.

3. **`SwissLandingPage.tsx`**:
   - The primary Swiss Style website landing page UI.
   - Renders interactive grid overlays (`12-col`, `6-col`, `3-col` modular columns, baseline horizontal rules, margin borders).
   - Contains header navigation (`WORK`, `ABOUT`, `PRINCIPLES`, `CONTACT`), massive bold geometric hero typography, subtitle text block, solid red accent block, numbered grid cards (`01. STRUCTURE`, `02. TYPOGRAPHY`, `03. FUNCTION`), project portfolio archive, historical manifesto quotes, and inquire contact section.

4. **`GridInspectorToolbar.tsx`**:
   - Floating control bar positioned at the bottom of the viewport.
   - Allows users to switch view modes, toggle alignment grid lines, select Swiss Red color variations, and launch the Poster Studio modal.

5. **`PosterPlaygroundModal.tsx`**:
   - Interactive Swiss Poster generator allowing users to experiment with Swiss layout rules in real time (DIN A1 proportions).
   - Live controls for headline text, numeric codes, font size slider, red block position, background color, and grid guide lines.

---

## 📊 Data Models (`/src/types.ts`)

```typescript
export type ViewMode = 'mockup' | 'fullscreen';

export type RedVariant = '#E30613' | '#FF0000' | '#C8102E' | '#D00000';

export interface GridConfig {
  showColumns: boolean;
  showBaseline: boolean;
  showMargins: boolean;
  columnCount: 3 | 6 | 12;
  redAccent: RedVariant;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyTakeaway: string;
}

export interface PosterConfig {
  title: string;
  subtitle: string;
  number: string;
  accentBlockPosition: 'top-right' | 'bottom-left' | 'center' | 'left-bar';
  showGridLines: boolean;
  fontSize: number;
  backgroundColor: '#FFFFFF' | '#000000' | '#E30613';
}
```

---

## ⚡ Performance Optimization

- **CSS Grid & Hardware Acceleration**: Grid overlay lines utilize pure CSS gradients (`linear-gradient`) and Tailwind grid containers, avoiding canvas rerenders or heavy JavaScript calculations.
- **Lazy Image Handling**: All studio background images and project photography use `referrerPolicy="no-referrer"` and standard image optimization.
- **Pure Functional React State**: State updates are isolated and memoized across component boundaries to guarantee sub-16ms 60fps interaction frame rates.
