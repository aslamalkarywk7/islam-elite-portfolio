export type NavSection = 'home' | 'services' | 'portfolio' | 'blog' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'content' | 'social' | 'branding';
  description: string;
  color: 'sky' | 'orange' | 'green' | 'charcoal';
  iconName: string;
  features: string[];
  deliverables: string[];
  basePrice: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'content' | 'social' | 'branding';
  categoryLabel: string;
  description: string;
  impactMetric: string;
  impactLabel: string;
  colorTheme: 'sky' | 'orange' | 'green' | 'charcoal';
  tags: string[];
  year: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  categoryColor: 'sky' | 'orange' | 'green';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  content: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  color: 'sky' | 'orange' | 'green';
  bio: string;
  specialty: string;
}

export interface DisplayFrameMode {
  type: 'full' | 'mockup' | 'tablet' | 'mobile';
}
