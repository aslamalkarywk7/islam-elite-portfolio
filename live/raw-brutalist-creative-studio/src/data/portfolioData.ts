import { Project, StudioMetric, ClientReview, ProposalItem } from '../types';
import heroArt from '../assets/images/brutalist_hero_art_1785187841139.jpg';
import projectArt1 from '../assets/images/brutalist_project_1_1785187853079.jpg';
import projectArt2 from '../assets/images/brutalist_project_2_1785187866169.jpg';

export const HERO_ARTWORK = heroArt;

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-01',
    number: '01',
    title: 'HYPER_CHAOS',
    client: 'NEO-TOKYO CYBERNETICS',
    category: 'EXPERIMENTAL WEB',
    year: '2026',
    description: 'An aggressive web platform built for high-frequency algorithmic trade visualizations with zero smooth animation, raw webgl geometry, and hard-edged stroke telemetry.',
    fullCaseStudy: {
      challenge: 'The client needed an interface that reflected raw data velocity without corporate corporate-safe rounded corners or sanitized glassmorphism.',
      solution: 'Engineered a custom 5px stroke WebGL render pipe coupled with mono-spaced ASCII data streams, direct keyboard shortcuts, and instant feedback loops.',
      impact: '+340% increase in daily active power users, winner of 2026 Brutalist Digital Web Award.',
      deliverables: ['Custom WebGL Canvas', 'ASCII Data Ticker Engine', 'Hard-Stroke Design System', 'Physical Keymap Integration']
    },
    tags: ['React 19', 'WebGL', 'Audio Synth', 'Raw Grid', 'Zero-Filter'],
    image: projectArt1,
    accentColor: '#CCFF00',
    metrics: [
      { label: 'RENDER FPS', value: '120 FPS' },
      { label: 'ROUNDED CORNERS', value: '0 PX' },
      { label: 'STROKE THICKNESS', value: '5.0 PX' }
    ],
    wireframeUrl: 'https://picsum.photos/seed/wireframe1/800/600',
    externalUrl: 'https://github.com'
  },
  {
    id: 'proj-02',
    number: '02',
    title: 'MONOLITH // ARCH',
    client: 'KRAK BRUTALIST ARCHITECTURE',
    category: 'BRAND IDENTITY',
    year: '2026',
    description: 'Complete brand language overhaul for a modern European brutalist architecture collective. High-density grid typography, physical debossed metal signage, and heavy monochromatic print specs.',
    fullCaseStudy: {
      challenge: 'Traditional architectural branding was becoming sanitized and homogeneous. The brand demanded extreme physical presence.',
      solution: 'Developed a bold, zero-gradient typography system based on 1970s Swiss & Brutalist print posters, combined with ultra-dense digital landing pages.',
      impact: 'Featured in Wallpaper*, Frame Magazine, and ArchDaily as the premier Neo-Brutalist brand identity of 2026.',
      deliverables: ['Brand Guidelines Book', 'Custom Variable Font Spec', 'Steel & Concrete Signage Specs', 'Raw Interactive Showcase']
    },
    tags: ['Print & Web', 'Custom Typography', 'Hard Grid', 'High-Contrast Monochromatic'],
    image: projectArt2,
    accentColor: '#FFFFFF',
    metrics: [
      { label: 'CONTRAST RATIO', value: '21:1' },
      { label: 'FONT WEIGHT', value: '900 ULTRA' },
      { label: 'PAPER DENSITY', value: '450 GSM' }
    ]
  },
  {
    id: 'proj-03',
    number: '03',
    title: 'TOXIC_INDEX',
    client: 'SYNTH_LABS BERLIN',
    category: '3D & GLITCH',
    year: '2025',
    description: 'An interactive audio-visual noise generator and real-time audio waveform deformer for electronic music producers and visual artists.',
    fullCaseStudy: {
      challenge: 'Creating a web synthesizer that looks like raw industrial equipment rather than a polished flat app.',
      solution: 'Built heavy physical button components with hard drop shadows, tactile audio feedback, and real-time Web Audio WebGL raymarching.',
      impact: 'Over 1.2 million user tracks produced using the Toxic Index Web Engine.',
      deliverables: ['Web Audio Engine', 'Glitch Shader Effects', 'Custom MIDI Controller Support', 'SVG Export Engine']
    },
    tags: ['Web Audio API', 'Glitch Shaders', 'Tactile UI', 'Electric Lime'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#CCFF00',
    metrics: [
      { label: 'AUDIO LATENCY', value: '1.2 MS' },
      { label: 'SHADERS', value: 'GLSL RAW' },
      { label: 'STATION USERS', value: '1.2M+' }
    ]
  },
  {
    id: 'proj-04',
    number: '04',
    title: 'KINETIC_VOID',
    client: 'OFF-GRID SOUND SYSTEM',
    category: 'PHYSICAL INSTALLATION',
    year: '2025',
    description: 'A 12-meter LED matrix tower installation in London displaying real-time audience motion graphics rendered in high-impact electric lime pixels.',
    fullCaseStudy: {
      challenge: 'Interfacing physical LED hardware with high-frequency live sensor feeds in outdoor industrial weather.',
      solution: 'Constructed custom Rust-backed web visualizer running directly on embedded industrial Linux boards connected to high-brightness LED arrays.',
      impact: 'Over 80,000 festival attendees interacted with the live kinetic visualizer across 3 days.',
      deliverables: ['Hardware Matrix Driver', 'Real-time Camera Motion Tracking', 'Physical Cage Enclosure', 'Live Web Mirror']
    },
    tags: ['LED Matrix', 'Motion Tracking', 'Rust / WASM', 'Physical Hardware'],
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#00FF66',
    metrics: [
      { label: 'LED MATRIX', value: '4096 PX' },
      { label: 'BRIGHTNESS', value: '8000 NITS' },
      { label: 'LUMENS', value: 'ULTRA HIGH' }
    ]
  },
  {
    id: 'proj-05',
    number: '05',
    title: 'RAW_MANIFESTO_V4',
    client: 'UNCENSORED CREATIVE ENGINE',
    category: 'EXPERIMENTAL WEB',
    year: '2025',
    description: 'An open-source interactive web manifesto challenging corporate UI homogenization and advocating for unapologetic, aggressive web design.',
    fullCaseStudy: {
      challenge: 'Breaking every conventional rule of "soft pastel SaaS design" while maintaining 100% WCAG accessibility and technical excellence.',
      solution: 'Designed an extreme 7-column vertical layout with asymmetrical text blocks, hard 5px outlines, and instant theme inversion toggles.',
      impact: 'Shared by over 45,000 designers on GitHub, X, and Are.na within 48 hours.',
      deliverables: ['Manifesto Website', 'Open Source Design Tokens', 'CLI Poster Generator', 'Interactive Rulebook']
    },
    tags: ['Manifesto', 'High Contrast', 'Typography', 'Open Source'],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#CCFF00',
    metrics: [
      { label: 'GITHUB STARS', value: '14.2K' },
      { label: 'RULES DEFINED', value: '10 LAWS' },
      { label: 'PASTEL COLORS', value: '0%' }
    ]
  },
  {
    id: 'proj-06',
    number: '06',
    title: 'CYBER_KRAFT',
    client: 'KRAFT MOTORSPORT NYC',
    category: 'BRAND IDENTITY',
    year: '2024',
    description: 'A brutalist high-octane e-commerce and race telemetry portal for an underground electric vehicle racing crew in Brooklyn.',
    fullCaseStudy: {
      challenge: 'Merging motorsport telemetry aesthetics with e-commerce mechanics without losing underground street credibility.',
      solution: 'Engineered a hard-edged mono layout featuring live lap times, raw rubber tire texture graphics, and high-impact lime green buy triggers.',
      impact: 'Sold out 100% of launch merchandise in under 4 minutes.',
      deliverables: ['E-Commerce Engine', 'Live Race Telemetry Feed', 'High-Impact Merchandise Packaging', 'Apparel Graphics']
    },
    tags: ['Motorsport', 'E-Commerce', 'Telemetry', 'Hard Strokes'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#FFFFFF',
    metrics: [
      { label: 'SELL-OUT TIME', value: '3.8 MIN' },
      { label: 'LIVE FEEDS', value: '6 CHANNELS' },
      { label: 'CHECKOUT TIME', value: '< 10 SEC' }
    ]
  }
];

export const STUDIO_METRICS: StudioMetric[] = [
  {
    id: 'm-01',
    label: 'HARD BORDER THICKNESS',
    value: '5.0 PX',
    subtitle: 'STRICT SOLID STROKES ON EVERY COMPONENT',
    highlightColor: '#CCFF00'
  },
  {
    id: 'm-02',
    label: 'SOFT GRADIENTS ALLOWED',
    value: '0.00 %',
    subtitle: 'PURE MONOCHROME & HIGH IMPACT ELECTRIC LIME',
    highlightColor: '#FFFFFF'
  },
  {
    id: 'm-03',
    label: 'GLOBAL AWARDS WON',
    value: '42 AWARDS',
    subtitle: 'BRUTALIST DIGITAL & GRAPHIC FELLOWSHIPS',
    highlightColor: '#CCFF00'
  },
  {
    id: 'm-04',
    label: 'AVERAGE PAGE LOAD',
    value: '0.14 SEC',
    subtitle: 'HYPER-OPTIMIZED REACT 19 & ESM ENGINE',
    highlightColor: '#00FF66'
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-01',
    clientName: 'KENJI TAKAHASHI',
    company: 'NEO-TOKYO CYBERNETICS',
    role: 'HEAD OF CREATIVE DIRECTORY',
    year: '2026',
    quote: 'RAW Studio delivered a website so aggressive and memorable that our competitors literally tried to copy our 5px hard stroke design system within a week.',
    rating: '5/5 HARD STROKES',
    tag: 'VERIFIED CLIENT'
  },
  {
    id: 'rev-02',
    clientName: 'ELENA VOGEL',
    company: 'KRAK BRUTALIST ARCHITECTURE',
    role: 'MANAGING PARTNER',
    year: '2026',
    quote: 'Zero fluff, zero marketing babble. They built us an uncompromising digital monolith that perfectly matches our physical concrete buildings.',
    rating: '5/5 HARD STROKES',
    tag: 'VERIFIED CLIENT'
  },
  {
    id: 'rev-03',
    clientName: 'MARCUS VANCE',
    company: 'SYNTH_LABS BERLIN',
    role: 'FOUNDER & AUDIO ENGINEER',
    year: '2025',
    quote: 'The audio synth integration and electric lime aesthetic transformed our product from just another web app into a cult item in Berlin’s underground scene.',
    rating: '5/5 HARD STROKES',
    tag: 'VERIFIED CLIENT'
  }
];

export const PROPOSAL_ITEMS: ProposalItem[] = [
  {
    id: 'prop-01',
    name: 'BRUTALIST WEB LANDING PAGE (RAW SINGLE-SCREEN)',
    basePrice: 4500,
    turnaround: '10 DAYS',
    included: [
      '5px Solid Hard Stroke System',
      'Hyper-bold Display Typography Hierarchy',
      'Custom Electric Lime Accent Palette',
      'Web Audio Synth Tactile Feedback',
      'Responsive Unconventional Vertical Grid',
      'Interactive Case Study Modal'
    ],
    selected: true
  },
  {
    id: 'prop-02',
    name: 'FULL NEO-BRUTALIST BRAND IDENTITY & SYSTEM',
    basePrice: 8500,
    turnaround: '18 DAYS',
    included: [
      'Custom Variable Display Typography Guidelines',
      'Physical Signage & Print Specs (350+ GSM)',
      'Vector Asset Library & Stamp Kit',
      'Social Media Noise & Glitch Templates',
      'Brand Manifesto Book & Digital Spec'
    ],
    selected: true
  },
  {
    id: 'prop-03',
    name: 'INTERACTIVE POSTER & SHADER GENERATOR ENGINE',
    basePrice: 3200,
    turnaround: '7 DAYS',
    included: [
      'Custom In-Browser Canvas Export',
      'SVG / High-Res PNG Renderer',
      'Tactile Glitch Shader Controls',
      'Brutalist Stamp & Badge System'
    ],
    selected: false
  },
  {
    id: 'prop-04',
    name: '3D GLITCH & HARDWARE INSTALLATION DRIVER',
    basePrice: 12000,
    turnaround: '28 DAYS',
    included: [
      'Rust/WASM WebGL Render Pipe',
      'Physical LED Matrix Synchronization',
      'Sensor Camera Integration',
      '24/7 On-Site Monitoring Hardware'
    ],
    selected: false
  }
];
