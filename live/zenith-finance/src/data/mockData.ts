import { FeatureCardData, PricingPlan, Transaction, AssetAllocation, FinancialMetric } from '../types';

export const HERO_METRICS: FinancialMetric[] = [
  {
    title: 'Total Net Wealth',
    value: '$1,482,950.00',
    change: '+14.2%',
    trend: 'up',
    timeframe: 'vs last quarter',
  },
  {
    title: 'Monthly Cash Flow',
    value: '$28,450.00',
    change: '+8.6%',
    trend: 'up',
    timeframe: 'this month',
  },
  {
    title: 'Investment Yield',
    value: '9.84% p.a.',
    change: '+1.4%',
    trend: 'up',
    timeframe: 'YTD return',
  },
];

export const FEATURE_CARDS: FeatureCardData[] = [
  {
    id: 'budgeting',
    title: 'Budgeting',
    subtitle: 'Intelligent Cash Flow Management',
    iconName: 'PieChart',
    description: 'Autonomous budget allocation driven by behavioral spending trends. Carve out effortless savings targets without changing your daily lifestyle.',
    accentColor: '#3b82f6',
    metrics: [
      { label: 'Monthly Saved', value: '$4,280', change: '+18%', isPositive: true },
      { label: 'Budget Efficiency', value: '94.2%', change: '+3.1%', isPositive: true },
    ],
  },
  {
    id: 'investing',
    title: 'Investing',
    subtitle: 'Automated Multi-Asset Wealth Growth',
    iconName: 'TrendingUp',
    description: 'Algorithmic rebalancing across global equities, private credit, and digital assets. Tailored tax-loss harvesting for high net worth portfolios.',
    accentColor: '#10b981',
    metrics: [
      { label: 'Portfolio Growth', value: '$342,800', change: '+22.4%', isPositive: true },
      { label: 'Sharpe Ratio', value: '2.14', change: 'Top 5%', isPositive: true },
    ],
  },
  {
    id: 'tracking',
    title: 'Tracking',
    subtitle: 'Unified Real-Time Liquidity Radar',
    iconName: 'Activity',
    description: 'Aggregate thousands of global bank accounts, brokerages, real estate holdings, and private equity in one seamless, high-security dashboard.',
    accentColor: '#8b5cf6',
    metrics: [
      { label: 'Connected Assets', value: '14 Vaults', change: 'Live Sync', isPositive: true },
      { label: 'Uncategorized', value: '0.0%', change: '100% Tagged', isPositive: true },
    ],
  },
];

export const ASSET_ALLOCATIONS: AssetAllocation[] = [
  { category: 'Global Equities', percentage: 42, amount: 622839, color: '#3b82f6' },
  { category: 'Private Real Estate', percentage: 28, amount: 415226, color: '#10b981' },
  { category: 'Fixed Income & Bonds', percentage: 18, amount: 266931, color: '#8b5cf6' },
  { category: 'Liquid Cash & Reserves', percentage: 12, amount: 177954, color: '#f59e0b' },
];

export const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-1',
    merchant: 'Vanguard Total Stock Dividend',
    category: 'Dividend Income',
    amount: 1420.50,
    date: 'Today, 10:42 AM',
    type: 'income',
    icon: 'ArrowDownLeft',
  },
  {
    id: 'tx-2',
    merchant: 'Equinox Luxury Wellness Club',
    category: 'Lifestyle & Health',
    amount: -310.00,
    date: 'Yesterday, 4:15 PM',
    type: 'expense',
    icon: 'ArrowUpRight',
  },
  {
    id: 'tx-3',
    merchant: 'First Horizon Treasury Yield',
    category: 'Interest Yield',
    amount: 680.20,
    date: 'Jul 25, 2026',
    type: 'income',
    icon: 'ArrowDownLeft',
  },
  {
    id: 'tx-4',
    merchant: 'Stripe Merchant Settlement',
    category: 'Business Revenue',
    amount: 12500.00,
    date: 'Jul 24, 2026',
    type: 'income',
    icon: 'ArrowDownLeft',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Private Essential',
    description: 'Designed for affluent individuals seeking consolidated account visibility and basic automation.',
    monthlyPrice: 29,
    annualPrice: 24,
    features: [
      'Up to 10 Linked Global Financial Accounts',
      'Real-Time Balance Aggregation & Alerts',
      'Smart Auto-Categorization Engine',
      'Standard Tax & Expense Exports (CSV/PDF)',
      '256-Bit Hardware Encrypted Vault Storage',
    ],
    ctaText: 'Start 14-Day Trial',
  },
  {
    id: 'pro',
    name: 'Wealth Premier',
    description: 'Our signature suite for active wealth building, algorithmic rebalancing, and tax optimization.',
    monthlyPrice: 89,
    annualPrice: 75,
    popular: true,
    features: [
      'Unlimited Global Financial & Asset Links',
      'Automated Tax-Loss Harvesting Algorithms',
      'Multi-Currency & Real Estate Valuation Radar',
      'Custom Wealth Scenario Calculator & Projections',
      'Dedicated Certified Financial Planner Concierge',
      'Family Office Multi-Member Access Control',
    ],
    ctaText: 'Get Started with Premier',
  },
  {
    id: 'family-office',
    name: 'Institutional Trust',
    description: 'Besponsive asset governance for multi-generational trusts, private offices, and HNWI portfolios.',
    monthlyPrice: 249,
    annualPrice: 199,
    features: [
      'Bespoke API & Custom Custodian Integrations',
      'Direct Private Equity & Trust Governance',
      'Institutional Audit Logs & SOC2 Type II Reports',
      '24/7 Dedicated Private Banker Support',
      'Custom Risk Stress Testing & Black Swan Sims',
    ],
    ctaText: 'Contact Private Client Desk',
  },
];

export const TRUST_METRICS = [
  { label: 'Total Capital Tracked', value: '$2.8B+' },
  { label: 'High Net-Worth Members', value: '48,000+' },
  { label: 'Uptime & Security Score', value: '99.99%' },
  { label: 'Average Annual Alpha', value: '+3.4%' },
];
