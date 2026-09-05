# Zenith Finance - Technical Architecture & Developer Documentation

## 1. Executive Summary

Zenith Finance is constructed on a high-performance, single-page React framework with custom Tailwind CSS Neumorphic utilities. The application eliminates generic flat cards and high-saturation glowing gradients in favor of **Neumorphism 2.0 (Geometric Balance)** — a refined physical tactile interface where visual depth is created by casting dual-shadow vectors onto a unified `#e6e9ef` canvas tone.

---

## 2. Technical Stack Specifications

### Core Engine
- **React 19.0.0**: Uses functional components with standard hooks (`useState`, `useEffect`, `useMemo`, `useRef`).
- **TypeScript 5.8**: Ensures strict type-safety across props, data structures, and state management.
- **Vite 6.2**: Next-generation frontend toolchain providing ultra-fast HMR and optimized production bundling.

### Styling & Animation Infrastructure
- **Tailwind CSS v4**: `@import "tailwindcss"` engine extended with custom CSS variable tokens.
- **Motion (`motion/react`)**: Hardware-accelerated spring animations, layout morphing, and gesture interactions.
- **Lucide Icons**: Scalable vector icons with customized stroke widths matching Neumorphic surface softness.

---

## 3. Neumorphism 2.0 (Geometric Balance) Mathematics

Neumorphic UI depth depends on strict mathematical alignment between ambient light source angles and dual box-shadow vectors.

### Shadow Vector Equations
Given an ambient light angle $\theta$ (in degrees), light distance $d$, blur radius $b$, and background hex color $C_{bg}$:

1. **Horizontal Shadow Offset ($X$):**
   $$X_{dark} = d \cdot \cos\left(\frac{\pi}{180} \cdot \theta\right)$$
   $$X_{light} = -X_{dark}$$

2. **Vertical Shadow Offset ($Y$):**
   $$Y_{dark} = d \cdot \sin\left(\frac{\pi}{180} \cdot \theta\right)$$
   $$Y_{light} = -Y_{dark}$$

3. **Box Shadow CSS Construction:**
   - **Raised Surface (`neu-raised`):**
     ```css
     box-shadow: X_dark Y_dark blur #c4c7cc, X_light Y_light blur #ffffff;
     ```
   - **Recessed / Inset Well (`neu-inset`):**
     ```css
     box-shadow: inset X_dark Y_dark blur #c4c7cc, inset X_light Y_light blur #ffffff;
     ```
   - **Convex Dome (`neu-convex`):**
     ```css
     background: linear-gradient(145deg, #ffffff, #d5d8df);
     box-shadow: X_dark Y_dark blur #c4c7cc, X_light Y_light blur #ffffff;
     ```
   - **Concave Basin (`neu-concave`):**
     ```css
     background: linear-gradient(145deg, #d5d8df, #ffffff);
     box-shadow: inset X_dark Y_dark blur #c4c7cc, inset X_light Y_light blur #ffffff;
     ```

---

## 4. Component Hierarchy & State Flow

```
App.tsx (Root Controller)
├── state: viewMode ('macbook' | 'fullscreen')
├── state: studioOpen (boolean)
├── state: getStartedModalOpen (boolean)
└── state: shadowConfig (ShadowConfig)
    │
    ├── Navbar
    │   ├── Brand Identity
    │   ├── Active Nav Items
    │   ├── View Mode Toggle
    │   └── Lighting Studio Trigger
    │
    ├── HeroSection
    │   ├── Value Proposition Headline
    │   ├── CTA Trigger Buttons
    │   └── Live Metric Counter Pills
    │
    ├── DashboardPreview
    │   ├── Aggregated Net Worth Card
    │   ├── SVG Horizon Curve Chart (Re-render on Horizon Tab)
    │   ├── Asset Class Distribution Bars
    │   └── Encrypted Vault Transactions
    │
    ├── FeatureGrid
    │   ├── 3-Pillar Neumorphic Feature Cards
    │   └── Interactive Soft UI Laboratory (Toggle / Slider / Button)
    │
    ├── WealthCalculator
    │   ├── Principal Capital Slider
    │   ├── Monthly Contribution Slider
    │   ├── Horizon Years & Rate Sliders
    │   └── Real-time Compound Output Calculation
    │
    ├── PricingSection
    │   ├── Billing Frequency Toggle (Annual / Monthly)
    │   └── 3 Tier Cards (Essential, Premier, Institutional)
    │
    ├── AboutTrustSection
    │   ├── Security Architecture Metrics
    │   └── Executive Testimony
    │
    ├── SoftUIStudioDrawer (Slide-over)
    │   ├── Ambient Light Angle Radial Dial
    │   ├── Blur & Distance Range Controls
    │   └── Preset Palette Selector
    │
    ├── GetStartedModal (Overlay)
    │   └── Executive Passkey & Tier Selection Form
    │
    └── Footer
        ├── Brand Links
        └── Newsletter Subscription Input
```

---

## 5. Performance & Accessibility Optimizations

1. **Hardware Acceleration:** All floating panels use `transform: translate3d(0,0,0)` and CSS `will-change` hints for 60fps rendering.
2. **Accessible Contrast Ratios:** Text colors (`#2d3748` primary, `#718096` secondary) exceed WCAG AA 4.5:1 contrast requirements against the `#e6e9ef` canvas.
3. **No Layout Shift:** Static box-shadow bounds prevent layout jumping during hover and tap states.
4. **Debounced Resize Handling:** Fluid responsive layouts scale smoothly across screens from 320px mobile up to 2560px ultra-wide monitors.
