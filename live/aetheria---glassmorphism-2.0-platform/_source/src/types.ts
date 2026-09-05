export interface GlassConfig {
  blur: number; // 8 to 64px
  opacity: number; // 0.01 to 0.2
  borderOpacity: number; // 0.05 to 0.4
  specularShine: number; // 0 to 1
  noiseOverlay: boolean;
  themeColor: 'electric' | 'magenta' | 'emerald' | 'cyberpunk';
  geometryCount: number; // 3 to 12
  studioFrame: boolean; // wrap in studio monitor frame
  exploder3D: boolean; // exploded 3D depth view
}

export interface MetricNode {
  time: string;
  throughput: number;
  latency: number;
  refraction: number;
}

export interface FeatureCardData {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  badge?: string;
  metrics?: { label: string; value: string }[];
}
