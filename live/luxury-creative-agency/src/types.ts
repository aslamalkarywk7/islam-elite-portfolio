export type ThemeMode = 'dark' | 'light';

export type FontStyle = 'bodoni' | 'playfair' | 'cormorant';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  image: string;
}

export interface AgencyMetrics {
  established: string;
  locations: string[];
  disciplines: string[];
  coordinates: string;
}

export interface CSSMetric {
  label: string;
  selector: string;
  property: string;
  value: string;
  purpose: string;
}
