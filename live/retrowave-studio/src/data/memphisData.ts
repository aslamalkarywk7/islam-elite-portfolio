import { ServiceItem, PortfolioProject, MemphisShape } from '../types';

export const WORKSPACE_DESK_IMG = '/src/assets/images/workspace_desk_1785274109113.jpg';
export const BRAND_IDENTITY_THUMB = '/src/assets/images/brand_identity_thumb_1785274120582.jpg';
export const WEB_DESIGN_THUMB = '/src/assets/images/web_design_thumb_1785274131925.jpg';
export const DIGITAL_ART_THUMB = '/src/assets/images/digital_art_thumb_1785274143926.jpg';

export const MEMPHIS_SERVICES: ServiceItem[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    subtitle: 'UNFORGETTABLE VISUAL SYSTEM',
    description: 'Custom logos, clashing color palettes, and iconic brand guidelines that shatter convention and command attention.',
    thumbnail: BRAND_IDENTITY_THUMB,
    badge: '01 / CORE',
    accentColor: '#FF007A', // Electric Pink
    secondaryColor: '#FFE600', // Vivid Yellow
    patternType: 'dots',
    features: [
      'Logo Systems & Mark Design',
      'Memphis Pattern Toolkits',
      'Typography & Type Pairing',
      'Brand Guidelines Manual'
    ],
    deliverables: ['Vector Logo Assets', 'Brand Book PDF', 'Custom Pattern SVGs', 'Social Media Templates']
  },
  {
    id: 'web-design',
    title: 'Web Design',
    subtitle: 'HIGH-INTENSITY DIGITAL EXPERIENCES',
    description: 'Maximalist responsive websites with playful micro-interactions, bold grids, and fluid animation loops built to convert.',
    thumbnail: WEB_DESIGN_THUMB,
    badge: '02 / DIGITAL',
    accentColor: '#0047FF', // Cobalt Blue
    secondaryColor: '#39FF14', // Lime Green
    patternType: 'grid',
    features: [
      'Custom UI/UX Architecture',
      'Responsive Web Development',
      'Interactive Micro-Animations',
      'E-Commerce & Landing Pages'
    ],
    deliverables: ['Figma Design Files', 'Production React Code', 'Performance Optimization', 'SEO Infrastructure']
  },
  {
    id: 'digital-art',
    title: 'Digital Art',
    subtitle: 'ECLECTIC VISUAL EXPLOSIONS',
    description: '3D geometric sculptures, retro vector illustrations, and kinetic motion graphics designed for campaigns and album art.',
    thumbnail: DIGITAL_ART_THUMB,
    badge: '03 / ARTWORK',
    accentColor: '#FF5C00', // Bright Orange
    secondaryColor: '#00E5FF', // Electric Cyan
    patternType: 'stripes',
    features: [
      '3D Geometric Renderings',
      'Poster & Editorial Artwork',
      'Kinetic Motion Graphics',
      'Merchandise & Apparel Graphics'
    ],
    deliverables: ['High-Res 8K Renders', 'Vector Print Files', 'Lottie / MP4 Motion Assets', 'Vinyl & Merch Proofs']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'HyperBeats Audio Machine',
    client: 'SynthWave Records',
    category: 'Brand Identity',
    year: '2026',
    thumbnail: BRAND_IDENTITY_THUMB,
    description: 'A radical rebrand for a synth-pop record label featuring squiggly vinyl sleeves, neon geometric stickers, and modular print typography.',
    colors: ['#FF007A', '#FFE600', '#000000'],
    tags: ['Branding', 'Vinyl Packaging', 'Typography'],
    featured: true
  },
  {
    id: 'proj-2',
    title: 'NeoGrid Interactive Magazine',
    client: 'Future Architecture Press',
    category: 'Web Design',
    year: '2026',
    thumbnail: WEB_DESIGN_THUMB,
    description: 'An interactive digital magazine breaking standard layout rules with draggable article cards, zigzag dividers, and sound effects.',
    colors: ['#0047FF', '#39FF14', '#FFFFFF'],
    tags: ['Web Design', 'React', 'Editorial'],
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Chaos Theory 3D Series',
    client: 'Tokyo Art Biennale',
    category: 'Digital Art',
    year: '2025',
    thumbnail: DIGITAL_ART_THUMB,
    description: 'A collection of 12 monumental 3D geometric art pieces exploring 1980s Ettore Sottsass design principles in virtual spaces.',
    colors: ['#FF5C00', '#00E5FF', '#FF007A'],
    tags: ['3D Artwork', 'Gallery', 'Sculpture'],
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Radical Soda Co.',
    client: 'Fizz Beverage Labs',
    category: 'Packaging',
    year: '2025',
    thumbnail: BRAND_IDENTITY_THUMB,
    description: 'Electric aluminum can packaging with clashing polka dots, neon warning badges, and tactile raised varnish textures.',
    colors: ['#FFE600', '#39FF14', '#FF007A'],
    tags: ['Packaging', 'Beverage', 'Print'],
    featured: false
  },
  {
    id: 'proj-5',
    title: 'PixelShock Festival 2026',
    client: 'Milan Creative Conference',
    category: 'Brand Identity',
    year: '2026',
    thumbnail: DIGITAL_ART_THUMB,
    description: 'Full environmental branding, wayfinding signage, and animated event schedules for Europe’s largest digital design summit.',
    colors: ['#0047FF', '#FF5C00', '#FFE600'],
    tags: ['Branding', 'Event', 'Wayfinding'],
    featured: false
  }
];

export const INITIAL_FLOATING_SHAPES: MemphisShape[] = [
  { id: 's1', type: 'circle', x: 8, y: 15, size: 48, color: '#FF007A', rotation: 12, speed: 2 },
  { id: 's2', type: 'triangle', x: 88, y: 12, size: 52, color: '#FFE600', rotation: -24, speed: 3 },
  { id: 's3', type: 'squiggle', x: 82, y: 65, size: 70, color: '#39FF14', rotation: 45, speed: 1.5 },
  { id: 's4', type: 'zigzag', x: 5, y: 72, size: 80, color: '#FF5C00', rotation: -15, speed: 2.5 },
  { id: 's5', type: 'square', x: 92, y: 40, size: 36, color: '#0047FF', rotation: 30, speed: 2 },
  { id: 's6', type: 'pill', x: 12, y: 42, size: 60, color: '#00E5FF', rotation: -60, speed: 1.8 },
  { id: 's7', type: 'cross', x: 50, y: 88, size: 40, color: '#FF007A', rotation: 15, speed: 2.2 }
];

export const MEMPHIS_COLORS = [
  { name: 'Electric Pink', hex: '#FF007A', bgClass: 'bg-[#FF007A]' },
  { name: 'Vivid Yellow', hex: '#FFE600', bgClass: 'bg-[#FFE600]' },
  { name: 'Bright Orange', hex: '#FF5C00', bgClass: 'bg-[#FF5C00]' },
  { name: 'Lime Green', hex: '#39FF14', bgClass: 'bg-[#39FF14]' },
  { name: 'Cobalt Blue', hex: '#0047FF', bgClass: 'bg-[#0047FF]' },
  { name: 'Electric Cyan', hex: '#00E5FF', bgClass: 'bg-[#00E5FF]' },
  { name: 'Stark Black', hex: '#000000', bgClass: 'bg-[#000000]' },
  { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-[#FFFFFF]' }
];
