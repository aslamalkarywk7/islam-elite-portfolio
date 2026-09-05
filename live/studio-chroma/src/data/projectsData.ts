import { Project } from '../types';

import auraImg from '../assets/images/aura_app_thumbnail_1785193036192.jpg';
import vertexImg from '../assets/images/vertex_branding_thumbnail_1785193047679.jpg';
import luminaImg from '../assets/images/lumina_spatial_thumbnail_1785193060089.jpg';
import novaImg from '../assets/images/nova_ecommerce_thumbnail_1785193071363.jpg';

export const projectsData: Project[] = [
  {
    id: 'aura-app-design',
    title: 'Aura App Design',
    client: 'Aura Health Inc.',
    category: 'Mobile Apps',
    description: 'A minimalist mindfulness and biometric track application designed with dynamic calm dark-blue themes.',
    fullDescription: 'Aura combines continuous HRV tracking with guided circadian breathing exercises. Designed using Material 3 Expressive motions, fluid state transitions, and accessible dark-blue surface elevations for night-time legibility.',
    thumbnail: auraImg,
    year: '2026',
    featured: true,
    metrics: [
      { label: 'Daily Active Users', value: '+140%' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'User Retention Rate', value: '78%' }
    ],
    colorPalette: ['#1A56DB', '#6750A4', '#0F172A', '#E8DEF8', '#FEF7FF'],
    deliverables: ['iOS App Architecture', 'Android M3 Theme', 'Design System Spec', 'Interactive Prototype'],
    challenge: 'Redesigning an overly dense biometric interface into an effortless, low-cognitive-load wellness companion that works in low-light environments.',
    solution: 'Crafted a bespoke Material Design 3 surface system with subtle elevation layers, soft haptic feedback cues, and dynamic typography scaled to user biometric state.'
  },
  {
    id: 'vertex-branding',
    title: 'Vertex Branding',
    client: 'Vertex Architecture Studio',
    category: 'Branding',
    description: 'A geometric architectural identity system featuring custom typography, stationery, and digital guidelines.',
    fullDescription: 'Vertex needed an identity that echoed structural minimalism and precision engineering. Studio Chroma crafted an adaptive typographic hierarchy paired with tactile stationery specifications and an interactive digital brand manual.',
    thumbnail: vertexImg,
    year: '2025',
    featured: true,
    metrics: [
      { label: 'Brand Recognition', value: '3.2x' },
      { label: 'Design Award', value: 'Red Dot 2025' },
      { label: 'Inquiries Growth', value: '+85%' }
    ],
    colorPalette: ['#002D80', '#1A56DB', '#94A3B8', '#F1F5F9', '#FFFFFF'],
    deliverables: ['Visual Identity System', 'Grid Guidelines', '3D Brand Assets', 'Stationery Suite'],
    challenge: 'Unifying a multi-national architectural firm across digital touchpoints while maintaining a raw, tactile aesthetic.',
    solution: 'Engineered a modular grid system based on Golden Ratio proportions, executed with deep blue primary accents and crisp slate dividers.'
  },
  {
    id: 'lumina-spatial-ui',
    title: 'Lumina Spatial UI',
    client: 'Lumina Vision Labs',
    category: 'Spatial UI',
    description: 'Next-generation spatial operating system interfaces crafted with translucent glass surfaces and soft indigo accents.',
    fullDescription: 'Designed for mixed-reality hardware, Lumina Spatial UI defines spatial depth tokens, light refraction behavior, and gaze-and-pinch gesture indicators for high-density professional spatial workspaces.',
    thumbnail: luminaImg,
    year: '2026',
    featured: true,
    metrics: [
      { label: 'Gesture Precision', value: '99.4%' },
      { label: 'Task Completion', value: '2.1x Faster' },
      { label: 'Eye Strain Reduction', value: '-42%' }
    ],
    colorPalette: ['#6750A4', '#1A56DB', '#381E72', '#E8DEF8', '#121318'],
    deliverables: ['3D Spatial Canvas', 'Glass Material System', 'Volumetric Widgets', 'Hand Gesture Language'],
    challenge: 'Designing high-information spatial UI that remains legible under varying real-world room lighting conditions.',
    solution: 'Invented dynamic M3 spatial scrims and light-adaptive elevation layers that automatically tune contrast ratios based on environment ambient luminance.'
  },
  {
    id: 'nova-e-commerce',
    title: 'Nova E-Commerce',
    client: 'Nova Fashion House',
    category: 'Web Systems',
    description: 'A refined luxury digital retail experience with instant search, interactive 3D product visualizer, and checkout.',
    fullDescription: 'Nova combines ultra-fast headless web performance with editorial fashion layout design. Built with Material 3 responsive grid systems and fluid layout transitions.',
    thumbnail: novaImg,
    year: '2025',
    featured: true,
    metrics: [
      { label: 'Conversion Increase', value: '+34%' },
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Average Order Value', value: '+$85' }
    ],
    colorPalette: ['#0F172A', '#1A56DB', '#64748B', '#F8FAFC', '#FFFFFF'],
    deliverables: ['E-Commerce Platform UI', 'Checkout Flow', '3D Product Viewer', 'Mobile Responsive Spec'],
    challenge: 'Eliminating checkout friction while preserving the unhurried, elevated feel of a high-end luxury fashion atelier.',
    solution: 'Designed a single-surface checkout experience with micro-interactions, subtle M3 shadows, and instant payment validation.'
  },
  {
    id: 'kinetix-motion-system',
    title: 'Kinetix Motion System',
    client: 'Kinetix Financial Tech',
    category: 'Web Systems',
    description: 'An interactive design token and motion animation system for enterprise financial data visualization.',
    fullDescription: 'A comprehensive design system powering 14 fintech products. Features real-time charting components, accessible contrast enforcement, and standardized motion spring physics.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    year: '2026',
    featured: false,
    metrics: [
      { label: 'Design System Adoption', value: '100%' },
      { label: 'Dev Handoff Speed', value: '4x Faster' },
      { label: 'WCAG AAA Rating', value: 'Passed' }
    ],
    colorPalette: ['#1A56DB', '#0D9488', '#1E293B', '#E2E8F0', '#F8FAFC'],
    deliverables: ['Design System Tokens', 'Figma Variant Library', 'React Component SDK', 'Motion Specification'],
    challenge: 'Standardizing complex financial charts and data grids across web, iOS, and Android without sacrificing platform feel.',
    solution: 'Mapped Material Design 3 token hierarchies directly to CSS custom properties and native platform variables with automated linting.'
  },
  {
    id: 'prism-studio-os',
    title: 'Prism Studio OS',
    client: 'Prism Software',
    category: 'Branding',
    description: 'Visual identity and dashboard analytics system for a collaborative creative team project management suite.',
    fullDescription: 'Prism OS connects creative directors, designers, and developers in a unified workspace. Features smart timeline views, asset versioning, and real-time canvas comments.',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    year: '2025',
    featured: false,
    metrics: [
      { label: 'Teams Onboarded', value: '450+' },
      { label: 'User Satisfaction', value: '96%' },
      { label: 'CSAT Score', value: '4.8/5' }
    ],
    colorPalette: ['#6750A4', '#1A56DB', '#475569', '#F1F5F9', '#FFFFFF'],
    deliverables: ['SaaS Dashboard UI', 'Brand Strategy', 'Iconography System', 'Marketing Landing Page'],
    challenge: 'Designing a workflow engine that reduces contextual switching for multidisciplinary agency teams.',
    solution: 'Implemented M3 segmented control surfaces, collapsible side rails, and custom contextual action chips.'
  }
];
