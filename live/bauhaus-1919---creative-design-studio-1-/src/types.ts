export type ViewMode = 'canvas' | 'mockup';

export type PrimaryColor = 'red' | 'yellow' | 'blue' | 'black' | 'white';

export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'Architecture' | 'Digital' | 'Spatial';
  year: string;
  client: string;
  description: string;
  image: string;
  overlayColor: '#FF2A1F' | '#FFE600' | '#0055FF' | '#121212';
  overlayShape: 'circle' | 'square' | 'triangle' | 'diagonal';
  aspect: 'portrait' | 'landscape' | 'square';
  tags: string[];
  specs: {
    gridRatio: string;
    fontFamily: string;
    primaryHex: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  germanTitle: string;
  description: string;
  deliverables: string[];
  shape: 'circle' | 'square' | 'triangle' | 'lines';
  accentColor: string;
}

export interface ManifestoPillar {
  id: string;
  number: string;
  title: string;
  german: string;
  description: string;
  quote: string;
  bgColor: string;
  textColor: string;
}

export interface StudioSetting {
  studioLight: 'natural' | 'dramatic' | 'golden' | 'night';
  laptopAngle: number;
  gridOverlay: boolean;
  colorFilter: boolean;
  screenGlow: boolean;
  ambientShadows: boolean;
}

export interface PosterConfig {
  headline: string;
  subhead: string;
  year: string;
  primaryShape: 'circle' | 'square' | 'triangle' | 'grid';
  shapeColor: '#FF2A1F' | '#FFE600' | '#0055FF' | '#121212';
  bgColor: '#F6F5F0' | '#121212' | '#FFFFFF';
  shapeSize: number;
  rotation: number;
  gridLines: boolean;
}
