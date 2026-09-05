'use client';

import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, CartesianGrid
} from 'recharts';
import { ProjectData, CalculatedMetrics } from '@/lib/mathEngine';

interface Props {
  data: ProjectData;
  metrics: CalculatedMetrics;
}

function fmt(n: number) {
  return n.toLocaleString('en-US');
}

// ── Champagne Gold palette ────────────────────────────────────────────
const CHAMPAGNE = '#C9A96E';
const CHAMPAGNE_DIM = 'rgba(201,169,110,0.18)';

// Custom Tooltip for Charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0e0e0e] border border-[rgba(201,169,110,0.2)] p-4 rounded-lg shadow-2xl backdrop-blur-md font-mono">
        <p className="text-white/50 text-[10px] tracking-widest uppercase mb-3">{label}</p>
        <div className="flex flex-col gap-2">
          {payload.map((entry: any, index: number) => {
            return (
              <div key={index} className="flex items-center justify-between gap-6 pb-2 border-b border-white/5 last:border-0 last:pb-0" style={{ color: entry.color }}>
                <span className="text-[11px] font-bold tracking-wider">{entry.name}</span>
                <span className="text-[13px]">{Number(entry.value).toLocaleString('en-US')}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

// ── Chart Card Wrapper ────────────────────────────────────────────────
function ChartCard({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#1A1A1A] border border-[rgba(201,169,110,0.1)] p-8 sm:p-10 flex flex-col fade-up aspect-auto lg:aspect-square justify-between relative overflow-hidden rounded-xl ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        boxShadow: '0 0 40px rgba(0,0,0,0.6), 0 0 1px rgba(201,169,110,0.15)',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {children}
    </div>
  );
}

export default function PortfolioVisuals({ data, metrics }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hasData = data.expectedMarketValue > 0 || data.totalBudget > 0 || data.actualCost > 0;

  if (!hasData) {
    return (
      <section aria-label="Portfolio Visuals" className="card p-16 text-center fade-up border-[#1a1a1a]">
        <p className="text-dim text-sm font-mono uppercase tracking-widest">Awaiting Datastream</p>
      </section>
    );
  }

  // Purely mathematical realities of the input data (no faked timelines)
  const FINANCIAL_DATA = [
    { name: 'BAC',    Value: data.totalBudget,               gradId: 'gGold'  },
    { name: 'PV',     Value: data.plannedValue,               gradId: 'gGreen' },
    { name: 'EV',     Value: data.earnedValue,                gradId: 'gBlue'  },
    { name: 'AC',     Value: data.actualCost,                 gradId: 'gRed'   },
    { name: 'EAC',    Value: metrics.estimateAtCompletion,    gradId: 'gGold2' },
    { name: 'Market', Value: data.expectedMarketValue,        gradId: 'gGreen2'},
  ];

  const FINANCIAL_COLORS: Record<string, [string, string]> = {
    gGold:   ['#C9A96E', 'rgba(201,169,110,0.0)'],
    gGreen:  ['#00ff88', 'rgba(0,255,136,0.0)'],
    gBlue:   ['#4dabf7', 'rgba(77,171,247,0.0)'],
    gRed:    ['#ff2a55', 'rgba(255,42,85,0.0)'],
    gGold2:  ['#e8c87a', 'rgba(232,200,122,0.0)'],
    gGreen2: ['#51cf66', 'rgba(81,207,102,0.0)'],
  };

  const MATERIAL_DATA = [
    { name: 'Bought (sqm)', Quantity: data.marbleBoughtSqm, gradId: 'mGold' },
    { name: 'Wasted (sqm)', Quantity: data.marbleWastedSqm, gradId: 'mRed'  },
  ];

  const MATERIAL_COLORS: Record<string, [string, string]> = {
    mGold: ['#C9A96E', 'rgba(201,169,110,0.0)'],
    mRed:  ['#ff2a55', 'rgba(255,42,85,0.0)'],
  };

  const ACTIVITIES = [
    { title: 'Total Budget (BAC)', subtitle: 'Approved project budget',  amount: `${fmt(data.totalBudget)} OMR`,                                               type: 'neutral'  },
    { title: 'Planned Value (PV)', subtitle: 'Work scheduled',           amount: `${fmt(data.plannedValue)} OMR`,                                              type: 'neutral'  },
    { title: 'Actual Cost (AC)',   subtitle: 'Total expenditure',         amount: `${fmt(data.actualCost)} OMR`,                                               type: 'neutral'  },
    { title: 'Earned Value (EV)',  subtitle: 'Work performed',            amount: `${fmt(data.earnedValue)} OMR`,                                              type: 'neutral'  },
    { title: 'Market Value',       subtitle: 'Expected sale value',       amount: `${fmt(data.expectedMarketValue)} OMR`,                                      type: 'positive' },
    { title: 'Marble Area',        subtitle: 'Bought vs Wasted',          amount: `${fmt(data.marbleBoughtSqm)} / ${fmt(data.marbleWastedSqm)} sqm`,          type: metrics.realWastagePercentage > 10 ? 'negative' : 'neutral' },
    { title: 'Wasted Cost',        subtitle: 'Financial loss',            amount: `-${fmt(data.marbleWastedCost)} OMR`,                                        type: 'negative' },
    { title: 'Contingency',        subtitle: 'Unexpected changes',        amount: `${fmt(data.contingencyReserve)} OMR`,                                       type: 'neutral'  },
    { title: 'Duration',           subtitle: 'Project timeline',          amount: `${data.durationMonths} Months`,                                            type: 'neutral'  },
  ];

  const roi = metrics.expectedRoiPercentage;
  const isRoiPositive = roi >= 0;
  const terminalRed   = '#ff2a55';
  const terminalGreen = '#00ff88';

  return (
    <section aria-label="Portfolio Visuals" className="flex flex-col gap-6" style={{ fontFamily: '"Fragment Mono", monospace' }}>

      {/* ── 2×2 Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ── Quadrant 1: True Financials ── */}
        <ChartCard delay={0}>
          <div className="flex justify-between items-start mb-8 w-full relative z-10">
            <div>
              <h3 className="text-white/80 font-mono text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: CHAMPAGNE, boxShadow: `0 0 8px ${CHAMPAGNE}` }} />
                PRT_MARKET.IDX
              </h3>
              <p className="text-white/40 font-mono text-[10px] uppercase tracking-wider">True Financial Realities</p>
            </div>
          </div>

          <div className="w-full flex-1 min-h-[220px] relative z-10">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={FINANCIAL_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    {Object.entries(FINANCIAL_COLORS).map(([id, [top, bot]]) => (
                      <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%"   stopColor={top} stopOpacity={1}   />
                        <stop offset="100%" stopColor={bot} stopOpacity={0.2} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" axisLine={{ stroke: 'rgba(255,255,255,0.08)' }} tickLine={false} tick={{ fill: '#666', fontSize: 10, fontFamily: 'monospace' }} dy={10} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(201,169,110,0.04)' }} />
                  <Bar dataKey="Value" radius={[4, 4, 0, 0]} isAnimationActive={true} animationDuration={1500}>
                    {FINANCIAL_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`url(#${entry.gradId})`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </ChartCard>

        {/* ── Quadrant 2: Material Performance ── */}
        <ChartCard delay={100}>
          <div className="flex justify-between items-start mb-8 w-full relative z-10">
            <div>
              <h3 className="text-white/80 font-mono text-sm tracking-widest uppercase mb-1">Vol_EAC.AC.COMP</h3>
              <p className="text-white/40 font-mono text-[10px] uppercase tracking-wider">Marble Material Usage vs Waste</p>
            </div>
          </div>

          <div className="w-full flex-1 min-h-[220px] relative z-10">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MATERIAL_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barGap={2}>
                  <defs>
                    {Object.entries(MATERIAL_COLORS).map(([id, [top, bot]]) => (
                      <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%"   stopColor={top} stopOpacity={1}   />
                        <stop offset="100%" stopColor={bot} stopOpacity={0.2} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" axisLine={{ stroke: 'rgba(255,255,255,0.08)' }} tickLine={false} tick={{ fill: '#666', fontSize: 10, fontFamily: 'monospace' }} dy={10} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(201,169,110,0.04)' }} />
                  <Bar dataKey="Quantity" radius={[4, 4, 0, 0]} barSize={50} isAnimationActive={true} animationDuration={1700}>
                    {MATERIAL_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`url(#${entry.gradId})`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </ChartCard>

        {/* ── Quadrant 3: ROI Donut ── */}
        <ChartCard delay={200}>
          <div className="mb-4 relative z-10 flex justify-between">
            <div>
              <h3 className="text-white/80 font-mono text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full animate-pulse ${isRoiPositive ? 'bg-[#00ff88]' : 'bg-[#ff2a55]'}`}
                  style={{ boxShadow: isRoiPositive ? '0 0 8px #00ff88' : '0 0 8px #ff2a55' }}
                />
                ROI_EXC.INDEX
              </h3>
              <p className="text-white/40 font-mono text-[10px] uppercase tracking-wider">Estimated Return Profile</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center relative min-h-[220px] z-10">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <defs>
                    <filter id="pieGlow">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <linearGradient id="roiGold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%"   stopColor={CHAMPAGNE}    stopOpacity={1} />
                      <stop offset="100%" stopColor={terminalGreen} stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <Pie
                    data={[
                      { value: Math.abs(roi) },
                      { value: Math.max(0, 100 - Math.abs(roi)) }
                    ]}
                    cx="50%" cy="50%" innerRadius="73%" outerRadius="80%"
                    startAngle={90} endAngle={-270} dataKey="value" stroke="none"
                    isAnimationActive={true} animationDuration={2000}
                  >
                    <Cell
                      fill={isRoiPositive ? (roi > 20 ? `url(#roiGold)` : terminalGreen) : terminalRed}
                      style={{ filter: 'url(#pieGlow)' }}
                    />
                    <Cell fill="rgba(255,255,255,0.04)" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span
                className={`text-4xl font-mono tracking-tight font-bold ${isRoiPositive ? 'text-[#00ff88]' : 'text-[#ff2a55]'}`}
                style={{ textShadow: isRoiPositive ? '0 0 20px rgba(0,255,136,0.4)' : '0 0 20px rgba(255,42,85,0.4)' }}
              >
                {roi > 0 ? '+' : ''}{roi.toFixed(1)}%
              </span>
              <span className="text-white/40 uppercase tracking-[0.2em] text-[8px] mt-2 border border-white/10 px-2 py-0.5 rounded-sm">YIELD</span>
            </div>
          </div>
        </ChartCard>

        {/* ── Quadrant 4: Terminal Feed ── */}
        <div
          className="bg-[#1A1A1A] border border-[rgba(201,169,110,0.1)] p-8 sm:p-10 flex flex-col fade-up aspect-auto lg:aspect-square relative overflow-hidden rounded-xl"
          style={{
            animationDelay: '300ms',
            boxShadow: '0 0 40px rgba(0,0,0,0.6), 0 0 1px rgba(201,169,110,0.15)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <h3 className="text-white/80 font-mono text-sm tracking-widest uppercase mb-5 relative z-10 flex items-center gap-2">
            SYS.DATA_FEED
            <span className="h-[1px] flex-1 ml-2" style={{ background: `linear-gradient(to right, ${CHAMPAGNE_DIM}, transparent)` }} />
          </h3>

          <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-3 relative z-10 font-mono custom-scrollbar">
            {ACTIVITIES.map((act, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3 px-4 rounded-lg border border-[rgba(255,255,255,0.05)] hover:border-[rgba(201,169,110,0.2)] transition-colors shrink-0"
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                <div className="flex flex-col gap-1 w-1/2">
                  <span className="text-white/80 text-[10px] uppercase tracking-wider truncate">{act.title}</span>
                  <span className="text-white/30 text-[8px] uppercase tracking-widest truncate">{act.subtitle}</span>
                </div>
                <div
                  className={`text-[11px] w-1/2 text-right font-bold tracking-wider truncate ${act.type === 'positive' ? 'text-[#00ff88]' : act.type === 'negative' ? 'text-[#ff2a55]' : 'text-[#C9A96E]'}`}
                  style={{
                    textShadow: `0 0 10px ${act.type === 'positive' ? 'rgba(0,255,136,0.25)' : act.type === 'negative' ? 'rgba(255,42,85,0.25)' : 'rgba(201,169,110,0.25)'}`,
                  }}
                >
                  {act.amount}
                </div>
              </div>
            ))}
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 4px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(201,169,110,0.3); border-radius: 4px; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(201,169,110,0.6); }
          `}} />
        </div>

      </div>
    </section>
  );
}
