export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: 'EXPERIMENTAL WEB' | '3D & GLITCH' | 'BRAND IDENTITY' | 'PHYSICAL INSTALLATION';
  year: string;
  description: string;
  fullCaseStudy: {
    challenge: string;
    solution: string;
    impact: string;
    deliverables: string[];
  };
  tags: string[];
  image: string;
  accentColor: string;
  metrics: {
    label: string;
    value: string;
  }[];
  wireframeUrl?: string;
  externalUrl?: string;
}

export interface StudioMetric {
  id: string;
  label: string;
  value: string;
  subtitle: string;
  highlightColor?: string;
}

export interface ClientReview {
  id: string;
  clientName: string;
  company: string;
  role: string;
  year: string;
  quote: string;
  rating: string;
  tag: string;
}

export interface PosterConfig {
  headline: string;
  subhead: string;
  bgTheme: 'black' | 'lime' | 'white';
  stamp: 'CONFIDENTIAL' | 'APPROVED 5PX' | 'RAW NOISE' | 'UNRESTRICTED' | 'NO GRADIENTS';
  gridStyle: 'diagonal' | 'dots' | 'cross' | 'solid';
  rotation: number;
  borderWidth: number;
}

export interface DisplaySettings {
  mode: 'canvas' | 'studio_mockup';
  ambientLighting: 'dim' | 'studio' | 'neon_lime';
  glareEffect: boolean;
  scanlines: boolean;
  crtCurvature: boolean;
  rgbSplit: boolean;
  noiseLevel: number;
  audioMuted: boolean;
}

export interface ProposalItem {
  id: string;
  name: string;
  basePrice: number;
  turnaround: string;
  included: string[];
  selected: boolean;
}
