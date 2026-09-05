export type ViewMode = 'fullscreen' | 'macbook';

export type NeumorphicVariant = 'raised' | 'inset' | 'flat' | 'convex' | 'concave' | 'glowing';

export interface ShadowConfig {
  distance: number;
  blur: number;
  intensity: number;
  lightAngle: number; // in degrees
  bgTone: 'velvet-beige' | 'cool-slate' | 'soft-cream' | 'warm-sand' | 'charcoal-dark';
  glowColor: string;
}

export interface FeatureCardData {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  metrics: { label: string; value: string; change: string; isPositive: boolean }[];
  accentColor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Transaction {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  date: string;
  type: 'income' | 'expense' | 'investment';
  icon: string;
}

export interface AssetAllocation {
  category: string;
  percentage: number;
  amount: number;
  color: string;
}

export interface FinancialMetric {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  timeframe: string;
}
