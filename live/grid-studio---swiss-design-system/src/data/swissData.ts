import { ProjectItem, PrincipleItem } from '../types';

export const SWISS_PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    title: 'STRUCTURE',
    subtitle: 'MATHEMATICAL ALIGNMENT & MODULAR GRID',
    description: 'The grid is an invisible framework that creates visual order, rhythm, and structural consistency across space. Every element aligns to strict coordinate axes.',
    keyTakeaway: 'Objective mathematical organization over subjective composition.'
  },
  {
    number: '02',
    title: 'TYPOGRAPHY',
    subtitle: 'OBJECTIVE COMMUNICATION VIA SANS-SERIF',
    description: 'Type is not decoration; it is functional signal. Neutral sans-serif typefaces like Neue Haas Grotesk communicate clarity without stylized bias.',
    keyTakeaway: 'Legibility, flush-left rag-right setting, and high contrast hierarchy.'
  },
  {
    number: '03',
    title: 'FUNCTION',
    subtitle: 'SIMPLICITY & PURPOSEFUL REDUCTION',
    description: 'Every shape, line, and color serves a communicative objective. Unnecessary visual ornament is systematically stripped away.',
    keyTakeaway: 'Form follows information architecture.'
  }
];

export const EXTENDED_PRINCIPLES: PrincipleItem[] = [
  ...SWISS_PRINCIPLES,
  {
    number: '04',
    title: 'ASYMMETRY',
    subtitle: 'DYNAMIC BALANCE IN EQUILIBRIUM',
    description: 'Asymmetrical layouts generate visual energy while maintaining structural equilibrium through calculated weight distribution.',
    keyTakeaway: 'Balance achieved through scale contrast and negative space.'
  },
  {
    number: '05',
    title: 'COLOUR ACCENT',
    subtitle: 'LIMITED, HIGH-CONTRAST PALETTE',
    description: 'Purity of pure white and stark black, punctuated with precision Swiss Red (#E30613) to draw focus and establish focal priority.',
    keyTakeaway: 'Restraint amplifies signal strength.'
  },
  {
    number: '06',
    title: 'PHOTOGRAPHY',
    subtitle: 'UNADORNED DOCUMENTARY REALISM',
    description: 'Photography replaces illustration as the primary image format, providing objective visual documentation free from decorative distortion.',
    keyTakeaway: 'Factual visual clarity.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-01',
    number: '01',
    title: 'NEUE GRAFIK MONOGRAPH',
    category: 'EDITORIAL / TYPOGRAPHY',
    year: '1958 / 2026',
    description: 'A comprehensive structural layout system adhering to a 12-column modular grid with flush-left asymmetrical body typography.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Grid System', 'Editorial', 'Helvetica', 'Swiss Red']
  },
  {
    id: 'proj-02',
    number: '02',
    title: 'KUNSTGEWERBEMUSEUM POSTER',
    category: 'POSTER / EXHIBITION',
    year: '1960 / 2026',
    description: 'Iconic exhibition visual identity utilizing mathematical typography scaling, concentric arc grids, and stark red-black contrast.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    tags: ['Exhibition', 'Geometric Grid', 'International Style']
  },
  {
    id: 'proj-03',
    number: '03',
    title: 'ZÜRICH CONCERT HALL IDENTITY',
    category: 'BRAND IDENTITY / ARCHITECTURE',
    year: '1971 / 2026',
    description: 'A minimalist signage system engineered with strict DIN standards, high-legibility sans-serif, and architectural directional grids.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Wayfinding', 'Architecture', 'Systemic Design']
  },
  {
    id: 'proj-04',
    number: '04',
    title: 'AUTOMATED GRID ENGINE',
    category: 'DIGITAL / INTERACTIVE',
    year: '2026',
    description: 'A generative browser algorithm that builds modular Swiss layouts dynamically based on Golden Ratio and DIN A-series proportions.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    tags: ['Generative Code', 'Web Design', 'UI Matrix']
  }
];

export const SWISS_QUOTES = [
  {
    quote: "The grid system is an aid, not a guarantee. It permits a number of possible uses and each designer can look for a solution appropriate to his personal style. But one must learn how to use the grid; it is an art that requires practice.",
    author: "Josef Müller-Brockmann",
    role: "Pioneer of International Typographic Style"
  },
  {
    quote: "Order was always the objective of Swiss typography. Functional typography is not decoration. It is structured communication.",
    author: "Emil Ruder",
    role: "Typographer & Author of 'Typographie'"
  },
  {
    quote: "Art should be non-representational, non-objective, and built strictly upon mathematical proportions.",
    author: "Max Bill",
    role: "Architect, Artist & Graphic Designer"
  }
];
