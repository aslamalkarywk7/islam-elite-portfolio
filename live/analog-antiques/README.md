# Analog Antiques — Vintage Cassette Tape Archive & Hi-Fi Shop

> **Listen to the Archive. Embrace the Groove.**  
> A full-featured desktop landing page and interactive web application for **Analog Antiques**, a retro 1960s–1970s cassette tape archive, interactive cassette tape deck player, and restored analog equipment shop in San Francisco, California.

---

## 🎨 Visual Identity & Aesthetic Philosophy

- **Warm Muted Color Palette:**
  - **Burled Paper Beige (`#F5EBE0` / `#EEDCC6`):** Authentic aged parchment texture background.
  - **Olive Green (`#4B5838` / `#556B2F`):** Calibrated equipment and technical badge accents.
  - **Burnt Orange (`#C85A32` / `#CC5500`):** Vibrant 1970s primary CTA buttons and reel highlights.
  - **Mustard Yellow (`#D4A328` / `#E1AD01`):** Glowing VU meter meters, badges, and gold foil tape labels.
  - **Dusty Blue (`#4A6B82` / `#5B7B94`):** Muted cool tape shell casing tones.
  - **Faded Wood Black (`#1F1914` / `#2B2118`):** Walnut cabinet trims and high-contrast retro borders.
- **Old-School Typography:**
  - **Ultra / Slab Serif:** Bold 1960s–1970s display headers (`Ultra`).
  - **Special Elite / Typewriter:** Vintage typewriter text (`Special Elite`).
  - **Courier Prime / Monospace:** Technical specs, tracklists, and dot-matrix receipt layout (`Courier Prime`).
  - **Space Grotesk / Sans-Serif:** Clean retro navigation and subheadings (`Space Grotesk`).
- **Tactile Retro Details:** Heavy 2px–4px solid borders, hard offset drop shadows (`shadow-[4px_4px_0px_0px_#2B2118]`), film grain overlay noise, stamp badges, and spinning cassette tape reels.

---

## 🎧 Features & Interactive Capabilities

1. **Interactive Web Audio Cassette Player Deck (Model TC-1974):**
   - Synthesizes 4 retro analog tape audio loops (*Midnight Synthwaves 1978*, *70s Funk & Groove*, *Lo-Fi Coffee Rain*, *Cosmic Moog*).
   - Real-time **bouncing dual-needle VU meters** reacting to audio signal frequency levels.
   - Mechanical click sound effects, tape reel spinning animations, pitch/speed knob control (0.8x to 1.2x), and a tape hiss noise toggle.
   - Side A / Side B tracklist switcher and tape ejection/loading.

2. **Curated Vault Catalog (6+ Restored Items):**
   - Restored 1978 Sony TC-138SD Cassette Deck, JVC RC-M70 Twin-Speaker Boombox, Marantz 6300 Turntable, Canon Canonet QL17 Rangefinder Camera, Rare Chrome Tape Box Set, Zenith Vacuum Tube Radio, and custom master mixtapes.
   - Filter by Decade (1960s, 1970s, 1980s) or Category (Equipment, Cassette Tapes, Vinyl, Cameras, Radios).
   - Instant search with live results filtering.

3. **Detailed Product Quick View Drawer:**
   - Provenance and restoration history stories.
   - Technical specifications grid (head composition, frequency response, wow & flutter, SNR).
   - Tracklist breakdown and audio sample loading directly into the tape player.

4. **Shopping Cart & Dot-Matrix Paper Receipt Simulation:**
   - Add/remove vault items, adjust quantities, calculate California sales tax (8.25%), and flat-rate worldwide shipping ($12.00).
   - Checkout prints an authentic dot-matrix paper receipt with order confirmation number.

5. **Physical Workshop Details & Vault Club Dispatch:**
   - Visit details for the San Francisco workshop (1974 Haight Street).
   - Newsletter subscription form for rare tape drops.

6. **In-App Project Documentation Viewer:**
   - View `README.md`, `CONTRIBUTING.md`, `TROUBLESHOOTING.md`, and `LICENSE` directly inside the app UI via the top navigation bar or footer link.

---

## 🛠️ Programming Languages & Frameworks

- **Language:** TypeScript 5.8
- **UI Framework:** React 19 & Vite 6
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";` setup with custom CSS variables & noise utilities)
- **Audio Engine:** HTML5 Web Audio API (custom `AnalogTapeEngine` synthesizer)
- **Animations & Icons:** Motion (`motion/react`) & Lucide React (`lucide-react`)

---

## 🚀 Installation & Building Steps

### 1. System Requirements
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### 2. Installation
Clone the repository and install dependencies:
```bash
# Clone the repository
git clone https://github.com/analog-antiques/analog-antiques-applet.git

# Navigate into project folder
cd analog-antiques-applet

# Install dependencies
npm install
```

### 3. Running Development Server
Start the local Vite development server:
```bash
npm run dev
```
The app will be accessible at `http://localhost:3000`.

### 4. Compiling for Production
Build the optimized static assets into the `dist/` folder:
```bash
npm run build
```

---

## 📂 Project Structure

```
├── .env.example              # Environment variables template
├── index.html                # Main entry point with Google Fonts preloads
├── metadata.json             # AI Studio metadata configuration
├── package.json              # Project scripts & dependencies
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── README.md                 # Project explanation & setup guide
├── CONTRIBUTING.md           # Guidelines for open source contributors
├── TROUBLESHOOTING.md       # Common problems & step-by-step solutions
├── LICENSE                   # MIT Open Source License
└── src/
    ├── main.tsx              # React DOM root entry
    ├── App.tsx               # Main application layout & state orchestrator
    ├── index.css             # Global Tailwind v4 CSS, retro fonts, noise overlays
    ├── types.ts              # Global TypeScript interfaces & types
    ├── assets/
    │   └── images/           # High quality AI-generated retro photography assets
    ├── data/
    │   ├── products.ts       # Vault catalog dataset & detailed specs
    │   └── tapes.ts          # Archive tape audio presets & tracklists
    ├── utils/
    │   └── audioSynthesizer.ts # Web Audio API synthesizer for cassette player
    └── components/
        ├── Navbar.tsx        # Top navigation header & search bar
        ├── HeroSection.tsx   # Hero banner featuring restored tape deck
        ├── CassettePlayerDeck.tsx # Interactive cassette player deck
        ├── ProductGrid.tsx   # Vault items grid with filters & pricing
        ├── ProductDetailModal.tsx # Item modal with provenance & specs
        ├── CartDrawer.tsx    # Shopping cart & dot-matrix receipt simulation
        ├── VaultClubSection.tsx # Shop address & newsletter subscription
        ├── DocsViewerModal.tsx # In-app manual and docs viewer
        └── Footer.tsx        # Footer with links & copyright
```

---

## 📜 License

This project is open source and released under the [MIT License](LICENSE).
