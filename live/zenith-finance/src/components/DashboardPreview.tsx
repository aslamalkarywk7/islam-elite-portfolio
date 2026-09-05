import React, { useState } from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ShadowConfig } from '../types';
import { HERO_METRICS, RECENT_TRANSACTIONS, ASSET_ALLOCATIONS } from '../data/mockData';
import { TrendingUp, ShieldCheck, ArrowUpRight, ArrowDownLeft, PieChart, Layers, Wallet, Sparkles } from 'lucide-react';

interface DashboardPreviewProps {
  shadowConfig: ShadowConfig;
}

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({ shadowConfig }) => {
  const [timeframe, setTimeframe] = useState<'1M' | '6M' | '1Y' | 'ALL'>('1Y');
  const [activeTab, setActiveTab] = useState<'overview' | 'allocation' | 'transactions'>('overview');

  // SVG Chart path generation for smooth Soft UI line chart
  const chartPoints = [
    { x: 0, y: 120 },
    { x: 40, y: 110 },
    { x: 80, y: 130 },
    { x: 120, y: 95 },
    { x: 160, y: 105 },
    { x: 200, y: 70 },
    { x: 240, y: 80 },
    { x: 280, y: 45 },
    { x: 320, y: 55 },
    { x: 360, y: 25 },
    { x: 400, y: 35 },
  ];

  const svgPath = chartPoints.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
  }, '');

  const svgArea = `${svgPath} L 400 160 L 0 160 Z`;

  return (
    <NeumorphicBox
      variant="raised-lg"
      className="w-full p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-white/40"
      shadowConfig={shadowConfig}
      id="hero-dashboard-card"
    >
      {/* CARD HEADER & CARVED TABS */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <NeumorphicBox variant="convex" pill className="p-2.5 text-blue-600">
            <Wallet className="w-5 h-5" />
          </NeumorphicBox>
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#636a75] uppercase">
              ZENITH WEALTH CONSOLE
            </div>
            <div className="text-lg font-extrabold text-[#2c3038] tracking-tight">
              Executive Portfolio
            </div>
          </div>
        </div>

        {/* TIME RANGE SELECTOR (INSET PILLS) */}
        <div className="flex items-center gap-1 p-1 rounded-full neu-inset text-xs font-semibold">
          {(['1M', '6M', '1Y', 'ALL'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-3 py-1 rounded-full transition-all ${
                timeframe === t
                  ? 'neu-inset-deep text-blue-600 font-bold shadow-inner'
                  : 'text-[#636a75] hover:text-[#2c3038]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* HERO NET WEALTH DISPLAY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {HERO_METRICS.map((metric, idx) => (
          <NeumorphicBox
            key={idx}
            variant="inset"
            className="p-4 rounded-2xl flex flex-col justify-between group hover:border-blue-300/40 transition-all"
            shadowConfig={shadowConfig}
          >
            <div className="text-[11px] font-semibold text-[#636a75] uppercase tracking-wider mb-1">
              {metric.title}
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#2c3038] tracking-tight my-0.5">
              {metric.value}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 neu-raised-sm text-[10px]">
                {metric.change}
              </span>
              <span className="text-[10px] text-[#78808d] font-normal">{metric.timeframe}</span>
            </div>
          </NeumorphicBox>
        ))}
      </div>

      {/* STYLIZED SOFT UI LINE CHART */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-bold text-[#4b525d] uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            Performance Horizon
          </span>
          <span className="text-xs font-medium text-blue-600 bg-blue-50/60 px-2.5 py-0.5 rounded-full border border-blue-200/50">
            +14.2% Alpha
          </span>
        </div>

        {/* SOFT EMBOSSED CHART CONTAINER */}
        <NeumorphicBox variant="concave" className="p-4 rounded-2xl relative overflow-hidden">
          <svg viewBox="0 0 400 160" className="w-full h-36 sm:h-44 overflow-visible">
            <defs>
              <linearGradient id="softGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />
            <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />
            <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />

            {/* Area Fill */}
            <path d={svgArea} fill="url(#softGlow)" />

            {/* Main Smooth Line */}
            <path
              d={svgPath}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_4px_8px_rgba(59,130,246,0.3)]"
            />

            {/* Glowing Data Point */}
            <circle
              cx="400"
              cy="35"
              r="6"
              fill="#2563eb"
              className="animate-ping opacity-75"
            />
            <circle
              cx="400"
              cy="35"
              r="5"
              fill="#ffffff"
              stroke="#2563eb"
              strokeWidth="3"
            />
          </svg>
        </NeumorphicBox>
      </div>

      {/* LOWER DASHBOARD SPLIT: ASSET ALLOCATION + RECENT TRANSACTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* ASSET ALLOCATION PROGRESS BARS */}
        <NeumorphicBox variant="inset" className="p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-[#3a3f48] uppercase tracking-wider flex items-center gap-1.5">
              <PieChart className="w-3.5 h-3.5 text-indigo-500" />
              Asset Distribution
            </span>
            <span className="text-[10px] text-[#636a75] font-semibold">4 Class Vaults</span>
          </div>

          <div className="space-y-2.5">
            {ASSET_ALLOCATIONS.map((asset, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#3b4049]">{asset.category}</span>
                  <span className="text-[#636a75]">{asset.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full neu-inset overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${asset.percentage}%`,
                      backgroundColor: asset.color,
                      boxShadow: `0 0 8px ${asset.color}80`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </NeumorphicBox>

        {/* RECENT RECESSED ACTIVITY */}
        <NeumorphicBox variant="inset" className="p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-[#3a3f48] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Live Vault Activity
            </span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100/60 px-2 py-0.5 rounded-full">
              Encrypted
            </span>
          </div>

          <div className="space-y-2">
            {RECENT_TRANSACTIONS.slice(0, 3).map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-2 rounded-xl neu-raised-sm text-xs transition-transform hover:scale-[1.01]"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-full ${tx.type === 'income' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-500 bg-rose-50'}`}>
                    {tx.type === 'income' ? <ArrowDownLeft className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <div className="font-bold text-[#2d3138] truncate max-w-[130px]">{tx.merchant}</div>
                    <div className="text-[10px] text-[#717885]">{tx.category}</div>
                  </div>
                </div>

                <div className={`font-black ${tx.type === 'income' ? 'text-emerald-600' : 'text-[#383c44]'}`}>
                  {tx.type === 'income' ? '+' : ''}${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            ))}
          </div>
        </NeumorphicBox>

      </div>

    </NeumorphicBox>
  );
};
