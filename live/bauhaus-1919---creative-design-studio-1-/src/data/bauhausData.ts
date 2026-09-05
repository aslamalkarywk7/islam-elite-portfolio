import { Project, Service, ManifestoPillar } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-01',
    title: 'PAVILION 1919',
    category: 'Architecture',
    year: '2026',
    client: 'Dessau Municipal Arts Center',
    description: 'Asymmetrical concrete and glass pavilion exploring light refraction and modular structural grids inspired by Walter Gropius.',
    image: '/src/assets/images/bauhaus_structure_1785197717338.jpg',
    overlayColor: '#FF2A1F',
    overlayShape: 'circle',
    aspect: 'landscape',
    tags: ['Spatial Geometry', 'Monolithic Concrete', 'Light Analysis'],
    specs: {
      gridRatio: '1 : 1.618 (Golden Cut)',
      fontFamily: 'Space Grotesk Bold',
      primaryHex: '#FF2A1F'
    }
  },
  {
    id: 'proj-02',
    title: 'KANDINSKY MONOGRAPH',
    category: 'Branding',
    year: '2025',
    client: 'Weimar Modernist Publishing',
    description: 'Experimental typography system using primary yellow circle accents and high-contrast black and white editorial photography.',
    image: '/src/assets/images/bauhaus_architect_portrait_1785197705462.jpg',
    overlayColor: '#FFE600',
    overlayShape: 'square',
    aspect: 'portrait',
    tags: ['Editorial Grid', 'Color Theory', 'Primary Accent'],
    specs: {
      gridRatio: '12-Column Asymmetric',
      fontFamily: 'Archivo Black',
      primaryHex: '#FFE600'
    }
  },
  {
    id: 'proj-03',
    title: 'STUDIO DESSAU INTERIORS',
    category: 'Spatial',
    year: '2025',
    client: 'Gropius Master House Foundation',
    description: 'Interior spatial system integrating modular tubular steel furniture, raw light oak tables, and harsh angular window shadows.',
    image: '/src/assets/images/bauhaus_interior_1785197728511.jpg',
    overlayColor: '#0055FF',
    overlayShape: 'triangle',
    aspect: 'landscape',
    tags: ['Modular Furniture', 'Architectural Shadows', 'Steel & Glass'],
    specs: {
      gridRatio: '3x3 Structural Matrix',
      fontFamily: 'Syne ExtraBold',
      primaryHex: '#0055FF'
    }
  },
  {
    id: 'proj-04',
    title: 'ALGORITHMIC FORM SYSTEM',
    category: 'Digital',
    year: '2026',
    client: 'Berlin Digital Triennale',
    description: 'Generative frontend UI system mapping vector mathematical coordinates into interactive primary geometric compositions.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    overlayColor: '#121212',
    overlayShape: 'diagonal',
    aspect: 'landscape',
    tags: ['Interactive Canvas', 'SVG Geometry', 'Mathematical Typography'],
    specs: {
      gridRatio: 'Dynamic Pixel Grid',
      fontFamily: 'JetBrains Mono',
      primaryHex: '#121212'
    }
  },
  {
    id: 'proj-05',
    title: 'TYPOGRAPHIC MONUMENT',
    category: 'Branding',
    year: '2025',
    client: 'Stuttgart Art Collective',
    description: 'Super-graphic lettering installations occupying multi-story facades with pure sans-serif letterforms used as core architectural structures.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    overlayColor: '#FF2A1F',
    overlayShape: 'triangle',
    aspect: 'portrait',
    tags: ['Supergraphics', 'Urban Typography', 'Facade Installation'],
    specs: {
      gridRatio: '1 : 2 Vertical Ratio',
      fontFamily: 'Archivo Black',
      primaryHex: '#FF2A1F'
    }
  },
  {
    id: 'proj-06',
    title: 'OBJECT 100 CHAIR',
    category: 'Spatial',
    year: '2024',
    client: 'Breuer Industrial Design',
    description: 'Deconstructed seat geometry balancing tubular steel curves with stark geometric canvas tension.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
    overlayColor: '#0055FF',
    overlayShape: 'circle',
    aspect: 'square',
    tags: ['Industrial Craft', 'Tubular Steel', 'Minimalism'],
    specs: {
      gridRatio: 'Isometric 3D',
      fontFamily: 'Space Grotesk',
      primaryHex: '#0055FF'
    }
  }
];

export const MANIFESTO_PILLARS: ManifestoPillar[] = [
  {
    id: 'pillar-01',
    number: '01',
    title: 'FORM FOLLOWS FUNCTION',
    german: 'FORM FOLGT FUNKTION',
    description: 'Ornament is eliminated. Beauty emerges organically from structural necessity, material honesty, and spatial mathematical discipline.',
    quote: 'An object is defined by its nature. In order to design it so that it functions correctly, its nature must first be investigated.',
    bgColor: '#FF2A1F',
    textColor: '#FFFFFF'
  },
  {
    id: 'pillar-02',
    number: '02',
    title: 'ART AND TECHNOLOGY: A NEW UNITY',
    german: 'KUNST UND TECHNIK: EINE NEUE EINHEIT',
    description: 'We dissolve the artificial divide between artistic craftsmanship and technological code execution. Frontend design is contemporary graphic construction.',
    quote: 'The ultimate aim of all artistic activity is building!',
    bgColor: '#FFE600',
    textColor: '#121212'
  },
  {
    id: 'pillar-03',
    number: '03',
    title: 'THE PRIMARY TRIAD',
    german: 'DIE PRIMÄREN ELEMENTE',
    description: 'Circle, Square, Triangle. Red, Yellow, Blue. The fundamental atomic building blocks of all visual perception and spatial balance.',
    quote: 'Red is heavy and dense. Yellow is radiant and pointed. Blue is deep and concentric.',
    bgColor: '#0055FF',
    textColor: '#FFFFFF'
  },
  {
    id: 'pillar-04',
    number: '04',
    title: 'ASYMMETRICAL BALANCE',
    german: 'ASYMMETRISCHES GLEICHGEWICHT',
    description: 'Dynamic equilibrium over static symmetry. Unconventional negative space creates tension, rhythm, and active viewer engagement.',
    quote: 'Balance is not frozen equality, but living tension between opposing forces.',
    bgColor: '#121212',
    textColor: '#F6F5F0'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'srv-01',
    number: '01',
    title: 'Visual Identity & Systemic Branding',
    germanTitle: 'Visuelle Identität & Systeme',
    description: 'Comprehensive brand architecture rooted in strict mathematical grid systems, bold typography, and primary color theory.',
    deliverables: ['Geometric Design Systems', 'Typeface Guidelines', 'Supergraphic Applications', 'Brand Manifestos'],
    shape: 'square',
    accentColor: '#FF2A1F'
  },
  {
    id: 'srv-02',
    number: '02',
    title: 'Algorithmic UI/UX Engineering',
    germanTitle: 'Algorithmisches Interface Design',
    description: 'Responsive, high-precision digital interfaces crafted with raw CSS mathematical grid alignment and fluid state transitions.',
    deliverables: ['Custom Web Applications', 'Design Tokens & Component Libraries', 'Interactive Canvas Tools', 'Micro-Interactions'],
    shape: 'circle',
    accentColor: '#0055FF'
  },
  {
    id: 'srv-03',
    number: '03',
    title: 'Spatial Architecture & Exhibition Design',
    germanTitle: 'Raumarchitektur & Ausstellungen',
    description: 'Physical and hybrid digital environments created with monolithic spatial geometry, high-contrast lighting, and material purity.',
    deliverables: ['Exhibition Scenography', 'Architectural Wayfinding', 'Modular Pavilions', 'Spatial Typography'],
    shape: 'triangle',
    accentColor: '#FFE600'
  },
  {
    id: 'srv-04',
    number: '04',
    title: 'Editorial & Graphic Art Direction',
    germanTitle: 'Art Direction & Grafische Kunst',
    description: 'High-impact print and digital publication design using desaturated photography, bold layout grids, and oversized typography.',
    deliverables: ['Monographs & Art Books', 'Poster Series', 'Editorial Grid Frameworks', 'Custom Vector Artworks'],
    shape: 'lines',
    accentColor: '#121212'
  }
];

export const TEAM_MASTERS = [
  {
    name: 'Helena Gropius-Voss',
    role: 'Master of Form & Creative Director',
    discipline: 'Spatial Geometry & Architecture',
    location: 'Dessau / Berlin',
    image: '/src/assets/images/bauhaus_architect_portrait_1785197705462.jpg',
    color: '#FF2A1F'
  },
  {
    name: 'Viktor Kandinsky',
    role: 'Master of Color & Digital Systems',
    discipline: 'Primary Color Theory & Algorithmic Design',
    location: 'Weimar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    color: '#FFE600'
  },
  {
    name: 'Astrid Tschichold',
    role: 'Master of Typography & Grid Systems',
    discipline: 'Asymmetric Type Architecture & Editorial',
    location: 'Berlin',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    color: '#0055FF'
  }
];

export const CLIENT_LOGOS = [
  'DESSAU TRIENNALE',
  'BERLIN ARCHITECTURE FORM',
  'WEIMAR MODERNIST PRESS',
  'GROPIUS MASTER HOUSE',
  'BREUER INDUSTRIAL',
  'KANDINSKY ART LAB'
];
