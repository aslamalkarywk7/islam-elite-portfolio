import React, { useState } from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ShadowConfig, FeatureCardData } from '../types';
import { FEATURE_CARDS } from '../data/mockData';
import { PieChart, TrendingUp, Activity, ArrowRight, CheckCircle, Sparkles, Sliders, Shield, Zap } from 'lucide-react';

interface FeatureGridProps {
  shadowConfig: ShadowConfig;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ shadowConfig }) => {
  const [selectedFeature, setSelectedFeature] = useState<string>('budgeting');

  // Map icon names to Lucide icon components
  const getIcon = (name: string) => {
    switch (name) {
      case 'PieChart':
        return <PieChart className="w-6 h-6 text-blue-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-purple-600" />;
      default:
        return <Zap className="w-6 h-6 text-blue-600" />;
    }
  };

  const activeCard = FEATURE_CARDS.find((c) => c.id === selectedFeature) || FEATURE_CARDS[0];

  return (
    <section id="features" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <NeumorphicBox variant="convex" pill className="px-4 py-1.5 inline-flex items-center gap-2 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-xs font-bold tracking-wider text-[#383d46] uppercase">
            ORGANICALLY INTEGRATED CAPABILITIES
          </span>
        </NeumorphicBox>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2c3038] tracking-tight mb-4">
          Sculpted Intelligence for Your Wealth
        </h2>
        <p className="text-[#636a75] font-medium text-base sm:text-lg">
          Three core pillars carved softly from the surface, working in complete harmony to protect and compound your financial future.
        </p>
      </div>

      {/* GRID OF THREE FEATURE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {FEATURE_CARDS.map((card) => {
          const isSelected = selectedFeature === card.id;

          return (
            <NeumorphicBox
              key={card.id}
              variant={isSelected ? 'inset-deep' : 'raised-lg'}
              hoverable
              clickable
              onClick={() => setSelectedFeature(card.id)}
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between relative group ${
                isSelected ? 'border-2 border-blue-500/40' : 'border border-white/50'
              }`}
              shadowConfig={shadowConfig}
              id={`feature-card-${card.id}`}
            >
              <div>
                {/* ICON CONTAINER */}
                <div className="flex items-center justify-between mb-6">
                  <NeumorphicBox
                    variant={isSelected ? 'concave' : 'convex'}
                    className="p-4 rounded-2xl flex items-center justify-center"
                  >
                    {getIcon(card.iconName)}
                  </NeumorphicBox>

                  {isSelected && (
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold uppercase tracking-wider neu-raised-sm">
                      Active View
                    </span>
                  )}
                </div>

                {/* TITLE & SUBTITLE */}
                <h3 className="text-2xl font-extrabold text-[#2c3038] tracking-tight mb-1">
                  {card.title}
                </h3>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
                  {card.subtitle}
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-[#5d6470] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* INTEGRATED METRICS */}
              <div className="pt-4 border-t border-[#d4cfc7]/60 space-y-2">
                {card.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#636a75]">{m.label}</span>
                    <span className="text-[#2c3038] font-bold bg-white/40 px-2 py-0.5 rounded-md neu-inset-deep">
                      {m.value} ({m.change})
                    </span>
                  </div>
                ))}
              </div>
            </NeumorphicBox>
          );
        })}
      </div>

      {/* INTERACTIVE FEATURE DEEP DIVE SIMULATOR */}
      <NeumorphicBox variant="raised-lg" className="p-6 sm:p-8 rounded-3xl border border-white/60">
        <div className="flex items-center gap-3 mb-6">
          <NeumorphicBox variant="convex" pill className="p-2.5 text-blue-600">
            <Sliders className="w-5 h-5" />
          </NeumorphicBox>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
              INTERACTIVE DEMO LAB
            </div>
            <h4 className="text-xl font-bold text-[#2c3038]">
              {activeCard.title}: {activeCard.subtitle}
            </h4>
          </div>
        </div>

        {/* CONTENT SPECIFIC TO SELECTED FEATURE */}
        {selectedFeature === 'budgeting' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <p className="text-sm text-[#525964] leading-relaxed">
                Zenith's autonomous budgeting system uses real-time liquidity analysis to dynamically adjust spending thresholds. Watch your projected annual savings compound effortlessly.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-[#2c3038]">
                  <span>Autonomous Allocation Ratio</span>
                  <span className="text-blue-600">65% Savings / 35% Flexible</span>
                </div>
                <NeumorphicBox variant="inset" className="w-full h-3 rounded-full p-0.5">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-[65%] shadow-glow"></div>
                </NeumorphicBox>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl neu-inset text-xs">
                  <div className="text-[#636a75]">Target Savings</div>
                  <div className="text-lg font-bold text-[#2c3038]">$51,360 / yr</div>
                </div>
                <div className="p-3 rounded-xl neu-inset text-xs">
                  <div className="text-[#636a75]">Automated Rules</div>
                  <div className="text-lg font-bold text-emerald-600">12 Active</div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE BUDGET CATEGORIES */}
            <NeumorphicBox variant="concave" className="p-6 rounded-2xl space-y-3">
              <div className="text-xs font-bold text-[#383d46] uppercase mb-2">Category Auto-Pockets</div>
              {[
                { name: 'Investment Reserves', target: '$2,500/mo', current: 88, color: '#3b82f6' },
                { name: 'Private Real Estate Amortization', target: '$1,200/mo', current: 100, color: '#10b981' },
                { name: 'Tax Liability Vault', target: '$800/mo', current: 72, color: '#8b5cf6' },
              ].map((pocket, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-[#2c3038]">{pocket.name}</span>
                    <span className="text-[#636a75]">{pocket.target}</span>
                  </div>
                  <div className="w-full h-2 rounded-full neu-inset p-0.5">
                    <div className="h-full rounded-full" style={{ width: `${pocket.current}%`, backgroundColor: pocket.color }}></div>
                  </div>
                </div>
              ))}
            </NeumorphicBox>
          </div>
        )}

        {selectedFeature === 'investing' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <p className="text-sm text-[#525964] leading-relaxed">
                Algorithmic tax-loss harvesting automatically scans global markets to lock in alpha while protecting capital gains.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl neu-inset">
                  <div className="text-xs text-[#636a75]">Historical Alpha</div>
                  <div className="text-xl font-extrabold text-emerald-600">+3.82%</div>
                </div>
                <div className="p-4 rounded-xl neu-inset">
                  <div className="text-xs text-[#636a75]">Tax Losses Harvested</div>
                  <div className="text-xl font-extrabold text-blue-600">$14,250</div>
                </div>
              </div>
            </div>

            <NeumorphicBox variant="concave" className="p-6 rounded-2xl flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-full neu-convex flex items-center justify-center mb-3 text-emerald-600 font-extrabold text-lg">
                2.14 SR
              </div>
              <div className="text-sm font-bold text-[#2c3038]">Top Tier Risk-Adjusted Sharpe Ratio</div>
              <div className="text-xs text-[#636a75] max-w-xs mt-1">
                Outperforming standard S&P 500 benchmarks with 34% lower volatility.
              </div>
            </NeumorphicBox>
          </div>
        )}

        {selectedFeature === 'tracking' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <p className="text-sm text-[#525964] leading-relaxed">
                Connect thousands of institutional custodians, brokerage accounts, real estate holdings, and private vault ledgers with zero latency.
              </p>

              <div className="space-y-2">
                {['JPMorgan Private Client', 'Goldman Sachs Asset Mgmt', 'Vanguard Institutional', 'First Republic Vault'].map((bank, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl neu-inset text-xs font-semibold">
                    <span className="text-[#2c3038]">{bank}</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Synchronized
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <NeumorphicBox variant="concave" className="p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <Shield className="w-12 h-12 text-purple-600 mb-2" />
              <div className="text-sm font-bold text-[#2c3038]">Hardware-Grade Encryption</div>
              <p className="text-xs text-[#636a75] mt-1">
                Zero plain-text storage. Read-only tokenized sync via OAuth 2.0 with biometric passkey authentication.
              </p>
            </NeumorphicBox>
          </div>
        )}
      </NeumorphicBox>
    </section>
  );
};
