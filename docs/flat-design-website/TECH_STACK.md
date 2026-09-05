# Technical Stack & Architecture Guide 🏗️

This guide outlines the programming languages, software libraries, styling systems, design tokens, and structural architecture utilized throughout **Connective Digital Agency**.

---

## 💻 Programming Languages & Standards

### 1. TypeScript (`~5.8.2`)
- **Strict Typing**: The entire codebase is written in strict-mode TypeScript to prevent runtime errors and ensure developer ergonomics.
- **Centralized Data Models**: Global application types, navigation sections, display modes, and component props are defined in `src/types.ts`.
- **Type Safety**: Full interfaces for Agency Services (`AgencyService`), Portfolio Items (`PortfolioProject`), Blog Posts (`BlogPost`), and Team Members (`TeamMember`).

### 2. HTML5 & Web Standards
- **Semantic Structure**: Modern HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`) for optimal search engine indexing and accessibility.
- **Viewport Frame Controls**: Support for device container simulations (Desktop Mockup, Tablet, Mobile) with CSS bounds.

### 3. CSS3 & Tailwind CSS v4 (`^4.1.14`)
- **Utility-First Architecture**: Zero external `.css` files except the global directive entry point (`src/index.css`).
- **Tailwind v4 Integration**: Direct integration via `@tailwindcss/vite` plugin for fast CSS compilation.

---

## 🛠️ Frameworks & Build Tools

### 1. React 19 (`^19.0.1`)
- Functional components powered by modern React hooks (`useState`, `useEffect`, `useMemo`, `useCallback`).
- Client-side smooth section navigation with `scrollIntoView`.

### 2. Vite (`^6.2.3`)
- Next-generation frontend build tool providing lightning-fast server cold starts and sub-millisecond Hot Module Reloading (HMR).
- Optimized ESModule bundling.

### 3. Express.js (`^4.21.2`) & Node.js
- Server proxy capability for server-side API calls (e.g. Gemini AI proxy or contact form delivery) keeping secrets safe from client bundle exposure.

---

## 🎨 Design System & Flat Design Aesthetics

**Connective Digital Agency** embraces a distinct **Flat Design** aesthetic. Unlike standard generic UI templates, Flat Design prioritizes content clarity, bold vector artwork, high contrast, and crisp geometric shapes.

### Color Palette Tokens

| Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Slate Dark** | `#2D3436` | Headings, primary text, dark cards, mockup frame borders |
| **Bright Coral** | `#FF6B6B` | Primary call-to-action buttons, badges, highlights |
| **Electric Turquoise**| `#4ECDC4` | Secondary buttons, service accents, interactive toggles |
| **Warm Sunshine** | `#FFE66D` | Accent badges, vector highlights, callout cards |
| **Soft Ice** | `#F7F9FC` | Clean section background canvas |
| **Pure White** | `#FFFFFF` | Card backgrounds, modals, input containers |

### Typography Hierarchy

- **Font Family**: Clean sans-serif system fonts (`Inter`, `system-ui`, `-apple-system`, `BlinkMacSystemFont`).
- **Font Pairing**: High-contrast display headings (`font-extrabold`, `tracking-tight`) paired with spacious body text (`leading-relaxed`).

---

## 🎭 Component Architecture

The component hierarchy is organized modularly in `src/components/`:

```text
src/
├── App.tsx                     # Frame controller, active view state, global modals
├── components/
│   ├── MockupFrameHeader.tsx   # Top control toolbar for device preview frame switching
│   ├── Navbar.tsx              # Agency brand logo, section navigation links, CTA trigger
│   ├── HeroSection.tsx         # Headline banner, CTA buttons, key metrics, vector art
│   ├── HeroVectorIllustration.tsx # Custom Flat Design geometric vector illustration
│   ├── ServicesSection.tsx     # Grid of agency services + interactive budget calculator
│   ├── PortfolioSection.tsx    # Filterable project showcase by category with stats
│   ├── AboutSection.tsx        # Agency principles, timeline milestones, team grid
│   ├── BlogSection.tsx         # Agency news, articles, design guides, tags
│   ├── ContactSection.tsx      # Comprehensive client project contact form with validation
│   ├── CodeInspectorModal.tsx  # Interactive source code & design token inspection modal
│   └── Footer.tsx              # Quick links, newsletter subscription, copyright info
└── data/
    └── agencyData.ts           # Single source of truth for all structured agency content
```

---

## 📦 Key Libraries

- **`motion` (`^12.23.24`)**: Fluid UI layout animations, modal fade/slide-ins, and button hover states.
- **`lucide-react` (`^0.546.0`)**: Lightweight, customizable vector icons.
- **`@google/genai` (`^2.4.0`)**: Google GenAI TypeScript SDK for AI features.
