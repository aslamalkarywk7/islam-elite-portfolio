export type ViewMode = 'mockup' | 'fullscreen';

export type RedVariant = '#E30613' | '#FF0000' | '#C8102E' | '#D00000';

export interface GridConfig {
  showColumns: boolean;
  showBaseline: boolean;
  showMargins: boolean;
  columnCount: 3 | 6 | 12;
  redAccent: RedVariant;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyTakeaway: string;
}

export interface PosterConfig {
  title: string;
  subtitle: string;
  number: string;
  accentBlockPosition: 'top-right' | 'bottom-left' | 'center' | 'left-bar';
  showGridLines: boolean;
  fontSize: number;
  backgroundColor: '#FFFFFF' | '#000000' | '#E30613';
}
