import { ProjectItem, AgencyMetrics, CSSMetric } from './types';

// Import images from assets directory
import primaryPortrait from './assets/images/agency_portrait_1785186960692.jpg';
import architecturalImage from './assets/images/editorial_arch_1785186974708.jpg';

export const AGENCY_METRICS: AgencyMetrics = {
  established: 'MMXXIV',
  locations: ['PARIS', 'TOKYO', 'NEW YORK'],
  disciplines: [
    'HAUTE CREATIVE DIRECTION',
    'DIGITAL ARCHITECTURE',
    'BRAND MANIFESTOS',
    'EDITORIAL TYPOGRAPHY'
  ],
  coordinates: '48.8566° N, 2.3522° E'
};

export const EDITORIAL_HEADLINES = [
  {
    main: "SILENT LUXURY",
    sub: "PURE FORM. ZERO NOISE. CREATIVE DIRECTION FOR DISCERNING BRANDS.",
    portrait: primaryPortrait,
    caption: "Lookbook N° 01 — Haute Couture & Spatial Identity",
    year: "2026",
    code: "M-01/FR"
  },
  {
    main: "FORM & VOID",
    sub: "REDUCING DESIGN TO ITS ABSOLUTE ONTOLOGICAL ESSENCE.",
    portrait: architecturalImage,
    caption: "Lookbook N° 02 — Brutalist Architecture & Digital Precision",
    year: "2026",
    code: "M-02/JP"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p-1',
    number: '01',
    title: 'L’Ombre Haute Digital Identity',
    client: 'MAISON L’OMBRE',
    category: 'Haute Couture / Digital',
    year: '2026',
    description: 'A radical monochromatic digital flag bearer for Paris Fashion Week, focusing on negative space and unyielding typographic hierarchy.',
    image: primaryPortrait
  },
  {
    id: 'p-2',
    number: '02',
    title: 'Monolith Architectural Monograph',
    client: 'STUDIO KUMA TOKYO',
    category: 'Spatial & Editorial',
    year: '2025',
    description: 'A 420-page stark brutalist volume exploring light reflection in poured concrete structures.',
    image: architecturalImage
  },
  {
    id: 'p-3',
    number: '03',
    title: 'Aethelgard Timepieces',
    client: 'AETHELGARD GENÈVE',
    category: 'Luxury Craftsmanship',
    year: '2025',
    description: 'Bespoke web experience and digital atelier catalog for ultra-limited Swiss tourbillon creations.',
    image: primaryPortrait
  }
];

export const CSS_SPECIFICATIONS: CSSMetric[] = [
  {
    label: "HERO HEADLINE FONT",
    selector: ".font-serif-editorial",
    property: "font-family / size",
    value: "'Bodoni Moda', serif | clamp(4rem, 11vw, 13rem)",
    purpose: "Establishes commanding editorial authority through dramatic contrast thick-and-thin strokes."
  },
  {
    label: "TYPOGRAPHIC SCALE RATIO",
    selector: "h1 -> p -> span",
    property: "line-height / tracking",
    value: "0.88 line-height | -0.05em letter-spacing",
    purpose: "Negative line height packing produces brutalist headline impact while maintaining optical balance."
  },
  {
    label: "NEGATIVE SPACE DIVISION",
    selector: ".hero-layout-grid",
    property: "padding / grid-gap",
    value: "min 8vw padding | 120px modular grid",
    purpose: "Excessive whitespace lets the eye rest and accentuates the central desaturated portrait."
  },
  {
    label: "COLOR SYSTEM",
    selector: ":root",
    property: "color palette",
    value: "#000000 (Void) / #FFFFFF (Pure)",
    purpose: "Strict monochromatic black & white removes visual distractions to showcase pure structure."
  },
  {
    label: "PORTRAIT COMPOSITION",
    selector: ".portrait-container",
    property: "border / filter",
    value: "1px solid rgba(255,255,255,0.15) | grayscale(100%)",
    purpose: "Studio lighting portrait framed with razor-thin hairline borders for fashion lookbook presentation."
  }
];

export const MANIFESTO_TEXT = `
We do not decorate. We distill.

In an age dominated by noise, visual complexity is a weakness. True luxury is silent, unyielding, and precise. 

We engineer digital experiences that feel like heavy paper stock, hand-bound leather, and quiet marble halls. Every pixel is calculated; every line of code serves structural hierarchy.
`;
