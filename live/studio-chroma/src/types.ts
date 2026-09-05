export type ViewMode = 'mockup' | 'direct';

export type Category = 'All' | 'Mobile Apps' | 'Branding' | 'Web Systems' | 'Spatial UI';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: Category;
  description: string;
  fullDescription: string;
  thumbnail: string;
  year: string;
  featured: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
  colorPalette: string[];
  deliverables: string[];
  challenge: string;
  solution: string;
}

export interface M3ThemeConfig {
  primary: string;
  primaryContainer: string;
  onPrimary: string;
  secondary: string;
  secondaryContainer: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  outline: string;
  mode: 'light' | 'dark';
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}
