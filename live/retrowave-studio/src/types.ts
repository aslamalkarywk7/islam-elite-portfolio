export type DeviceType = 'macbook' | 'studio-display' | 'ipad' | 'iphone' | 'fullscreen';

export type WorkspaceLighting = 'daylight' | 'studio' | 'neon-dusk';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  badge: string;
  accentColor: string; // hex or tailwind class
  secondaryColor: string;
  patternType: 'dots' | 'grid' | 'stripes' | 'zigzag';
  features: string[];
  deliverables: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'Brand Identity' | 'Web Design' | 'Digital Art' | 'Packaging';
  year: string;
  thumbnail: string;
  description: string;
  colors: string[];
  tags: string[];
  featured?: boolean;
}

export interface MemphisShape {
  id: string;
  type: 'square' | 'circle' | 'triangle' | 'squiggle' | 'zigzag' | 'star' | 'cross' | 'pill';
  x: number; // percentage or px
  y: number;
  size: number;
  color: string;
  rotation: number;
  speed: number;
}

export interface PosterConfig {
  headline: string;
  subtext: string;
  bgColor: string;
  accentColor: string;
  pattern: 'dots' | 'grid' | 'stripes' | 'none';
  shapeCount: number;
  fontStyle: 'syne' | 'outfit' | 'rubik' | 'space';
}
