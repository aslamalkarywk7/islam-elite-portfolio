import { ServiceItem, PortfolioItem, BlogPost, TeamMember } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design & Dev',
    subtitle: 'Responsive, lightning-fast web applications and sites',
    category: 'web',
    description: 'We construct hyper-clean, accessible, and conversion-focused websites engineered with modern frontend frameworks and pixel-perfect flat visual hierarchy.',
    color: 'sky',
    iconName: 'Layout',
    features: [
      'Responsive Flat UI Design System',
      'Modern Frontend Architecture (React / Vite / Tailwind)',
      'High-Performance Speed Optimization (100 Lighthouse)',
      'Custom Design System & Component Library',
      'Headless CMS & API Integrations'
    ],
    deliverables: [
      'Interactive Figma Prototypes',
      'Production Frontend Codebase',
      'Responsive Mobile & Desktop Views',
      'SEO & Accessibility Standards'
    ],
    basePrice: 3500
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    subtitle: 'Compelling copy, visual assets, and brand storytelling',
    category: 'content',
    description: 'From punchy headline copywriting to bespoke vector graphics and motion snippets, we produce memorable content that engages audience minds instantly.',
    color: 'orange',
    iconName: 'PenTool',
    features: [
      'Brand Copywriting & Messaging Frameworks',
      'Flat Vector Illustrations & Graphic Assets',
      'Micro-animations & Interactive Motion Graphics',
      'Editorial & Technical Article Production',
      'Multi-channel Content Distribution Assets'
    ],
    deliverables: [
      'Brand Voice & Tone Guidelines',
      'Vector Graphics & SVG Asset Packs',
      'Copywriting Spreadsheets & Storyboards',
      'Social & Web Media Kits'
    ],
    basePrice: 2200
  },
  {
    id: 'social-media',
    title: 'Social Media Strategy',
    subtitle: 'Audience growth, campaign design, and analytics',
    category: 'social',
    description: 'Data-driven creative campaigns engineered to boost brand visibility, build vibrant online communities, and generate meaningful engagement.',
    color: 'green',
    iconName: 'Share2',
    features: [
      'Comprehensive Social Platform Strategy',
      'Visual Content Calendars & Templates',
      'Community Management & Growth Hacks',
      'Paid Campaign Ad Creatives & Targeting',
      'Real-time Performance & Conversion Analytics'
    ],
    deliverables: [
      '30-Day Content Matrix',
      'Custom Canva & Figma Post Templates',
      'Monthly Analytics Dashboard',
      'Influencer Collaboration Briefs'
    ],
    basePrice: 1800
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    subtitle: 'Logos, color palettes, and unified design language',
    category: 'branding',
    description: 'Distinctive brand architectures centered around clean geometry, bold color psychology, and timeless flat design clarity.',
    color: 'charcoal',
    iconName: 'Sparkles',
    features: [
      'Logomark & Logotype Design',
      'Flat Design Palette & Typography Pairing',
      'Brand Strategy & Positioning',
      'Design Guidelines & Usage Rules',
      'Stationery & Merchandise Mockups'
    ],
    deliverables: [
      'Comprehensive Brand Book PDF',
      'Vector Asset Library (SVG, AI, EPS)',
      'Typography Spec Sheets',
      'Color Palette Standards'
    ],
    basePrice: 2800
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'nova-ecommerce',
    title: 'Nova E-Commerce Design',
    client: 'Nova Apparel Global',
    category: 'web',
    categoryLabel: 'Web Design',
    description: 'A minimalist flat e-commerce platform built for instant product discovery and frictionless 2-step checkout.',
    impactMetric: '+142%',
    impactLabel: 'Conversion Rate Increase',
    colorTheme: 'sky',
    tags: ['Web Design', 'Flat UI', 'E-Commerce', 'React'],
    year: '2026',
    challenge: 'Nova was losing customers due to cluttered product pages and slow load times on mobile devices.',
    solution: 'We stripped away visual noise and introduced flat color-blocked product categories with bold sans-serif typography and zero lag.',
    deliverables: ['Design System', 'React Storefront', 'Checkout Funnel Design', 'Custom Vector Icons']
  },
  {
    id: 'pulse-social-campaign',
    title: 'Pulse Energy Launch',
    client: 'Pulse Beverage Co.',
    category: 'social',
    categoryLabel: 'Social Media',
    description: 'A vibrant 60-day social campaign featuring bright flat vector illustrations and interactive story polls.',
    impactMetric: '3.8M+',
    impactLabel: 'Total Impressions',
    colorTheme: 'orange',
    tags: ['Social Media', 'Vector Artwork', 'Campaign Strategy'],
    year: '2026',
    challenge: 'Introducing a new organic drink to Gen-Z audiences in a crowded beverage market.',
    solution: 'Crafted punchy flat-colored vector ads with lime green and bright orange palettes that dominated Instagram and TikTok feeds.',
    deliverables: ['45 Vector Ad Assets', 'Content Calendar', 'Influencer Kit', 'Performance Report']
  },
  {
    id: 'apex-brand-system',
    title: 'Apex Cloud Branding',
    client: 'Apex Software Inc.',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    description: 'Complete brand overhaul replacing legacy gradient design with crisp geometric shapes and bold flat palette.',
    impactMetric: '100%',
    impactLabel: 'Brand Alignment Score',
    colorTheme: 'green',
    tags: ['Branding', 'Design System', 'Typography'],
    year: '2025',
    challenge: 'Apex looked dated next to agile tech startups despite having superior cloud server performance.',
    solution: 'Created a sharp geometric logo mark and flat design guidelines that conveyed clarity, speed, and modern precision.',
    deliverables: ['Brand Book', 'Logo Suite', 'Icon System', 'UI Component Guidelines']
  },
  {
    id: 'echo-content-hub',
    title: 'Echo Magazine Content Hub',
    client: 'Echo Media Network',
    category: 'content',
    categoryLabel: 'Content Creation',
    description: 'An editorial platform combining deep-dive tech journalism with custom flat vector editorial illustrations.',
    impactMetric: '4.2x',
    impactLabel: 'Average Time on Site',
    colorTheme: 'sky',
    tags: ['Content Creation', 'Editorial Design', 'Copywriting'],
    year: '2025',
    challenge: 'Echo needed to boost reader retention and differentiate from automated generic news feeds.',
    solution: 'Designed custom editorial vector banners and structured reading blocks with high-contrast typography.',
    deliverables: ['24 Editorial Vector Banner Assets', 'Content Style Guide', 'Article Templates']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'flat-design-2026',
    title: 'Why Flat Design is Dominating Modern Digital Agency Aesthetics',
    category: 'Design Trends',
    categoryColor: 'sky',
    date: 'July 18, 2026',
    readTime: '4 min read',
    author: {
      name: 'Maya Lin',
      role: 'Lead UI/UX Designer'
    },
    summary: 'Discover how stripping away skeuomorphic shadows and unnecessary gradients leads to faster load times, cleaner cognitive UX, and iconic brand recognition.',
    content: [
      'In a digital environment saturated with heavy pseudo-3D effects and busy neon gradients, Flat Design remains the gold standard for immediate visual comprehension.',
      'By focusing on simple geometric shapes, high-contrast solid color palettes, and bold sans-serif typography, web experiences achieve unmatched clarity across desktop, tablet, and mobile displays.',
      'Moreover, flat vector graphics dramatically reduce page asset weights, leading to instant rendering speeds and higher accessibility scores.'
    ]
  },
  {
    id: 'social-media-geometry',
    title: 'Using Bold Geometric Visuals to Capture Attention on Social Feeds',
    category: 'Social Strategy',
    categoryColor: 'orange',
    date: 'July 12, 2026',
    readTime: '5 min read',
    author: {
      name: 'Marcus Vance',
      role: 'Creative Director'
    },
    summary: 'How vibrant color blocking and flat vector shapes cut through feed clutter in less than 0.5 seconds.',
    content: [
      'Social media users scroll past hundreds of posts every minute. Complex photography often blends into the background noise.',
      'High-contrast solid color backgrounds paired with punchy vector icons and oversized text instantly anchor the eye.',
      'We break down 5 solid color pairing rules—such as Sky Blue with Bright Orange—that guarantee maximum click-through rates.'
    ]
  },
  {
    id: 'web-speed-first',
    title: 'The Engineering Behind 100/100 Lighthouse Performance Scores',
    category: 'Web Dev',
    categoryColor: 'green',
    date: 'June 29, 2026',
    readTime: '6 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Principal Frontend Engineer'
    },
    summary: 'A deep dive into zero-dependency CSS, inline SVGs, and modular React architecture for ultra-responsive web apps.',
    content: [
      'Performance is a core feature of great user experience. A 100ms delay in load time can lower conversion rates by up to 7%.',
      'By relying on clean HTML semantics, optimized CSS layout blocks, and vector SVGs instead of heavy raster images, Connective builds web platforms that load in under 300 milliseconds.'
    ]
  }
];

export const AGENCY_STATS = [
  { value: '240+', label: 'Projects Delivered', color: 'sky' },
  { value: '99.4%', label: 'Client Satisfaction', color: 'orange' },
  { value: '18', label: 'Design Awards', color: 'green' },
  { value: '100', label: 'Speed Score Guaranteed', color: 'charcoal' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'marcus',
    name: 'Marcus Vance',
    role: 'Founder & Creative Director',
    color: 'sky',
    bio: 'Passionate about clean geometric design and brand clarity. Over 12 years directing creative agencies.',
    specialty: 'Brand Strategy & Visual Direction'
  },
  {
    id: 'maya',
    name: 'Maya Lin',
    role: 'Lead UI/UX Architect',
    color: 'orange',
    bio: 'Master of flat UI systems, layout rhythm, and responsive design systems.',
    specialty: 'Web Design & Design Systems'
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Head of Engineering',
    color: 'green',
    bio: 'Full-stack perfectionist focused on high-performance web applications and clean code.',
    specialty: 'React, Tailwind, & Web Speed'
  }
];
