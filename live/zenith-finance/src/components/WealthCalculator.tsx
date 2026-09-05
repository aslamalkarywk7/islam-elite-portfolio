import React, { useState } from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ShadowConfig } from '../types';
import { Calculator, TrendingUp, DollarSign, Calendar, Percent, Sparkles, ArrowRight } from 'lucide-react';

interface WealthCalculatorProps {
  shadowConfig: ShadowConfig;
  onGetStartedClick: () => void;
}

export const WealthCalculator: React.FC<WealthCalculatorProps> = ({
  shadowConfig,
  onGetStartedClick,
}) => {
  const [initialDeposit, setInitialDeposit] = useState<number>(50000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(2500);
  const [years, setYears] = useState<number>(10);
  const [returnRate, setReturnRate] = useState<number>(8.5);

  // Calculate compound wealth growth
  const months = years * 12;
  const monthlyRate = returnRate / 100 / 12;
  
  // Compound interest formula: A = P(1+r/n)^(nt) + PMT * [((1+r/n)^(nt) - 1) / (r/n)]
  const compoundInitial = initialDeposit * Math.pow(1 + monthlyRate, months);
  const compoundMonthly = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  const totalWealth = Math.round(compoundInitial + compoundMonthly);
  const totalContributions = initialDeposit + (monthlyContribution * months);
  const interestEarned = totalWealth - totalContributions;

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <NeumorphicBox
        variant="raised-lg"
        className="p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-white/60"
        shadowConfig={shadowConfig}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: SLIDERS & CONTROLS */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <NeumorphicBox variant="convex" pill className="px-4 py-1.5 inline-flex items-center gap-2 mb-3">
                <Calculator className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-bold tracking-wider text-[#383d46] uppercase">
                  PROJECTION ENGINE
                </span>
              </NeumorphicBox>

              <h3 className="text-3xl font-extrabold text-[#2c3038] tracking-tight mb-2">
                Simulate Your Wealth Horizon
              </h3>
              <p className="text-sm text-[#636a75] font-medium">
                Adjust tactile Neumorphic sliders to visualize the exponential power of compounding with Zenith.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              {/* INITIAL DEPOSIT SLIDER */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-[#3b4049] flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-blue-600" /> Initial Capital
                  </span>
                  <span className="text-blue-600 bg-blue-50/80 px-3 py-1 rounded-lg neu-inset text-sm font-extrabold">
                    ${initialDeposit.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={initialDeposit}
                  onChange={(e) => setInitialDeposit(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer accent-blue-600 neu-inset p-0.5"
                />
              </div>

              {/* MONTHLY CONTRIBUTION SLIDER */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-[#3b4049] flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-600" /> Monthly Contribution
                  </span>
                  <span className="text-emerald-600 bg-emerald-50/80 px-3 py-1 rounded-lg neu-inset text-sm font-extrabold">
                    ${monthlyContribution.toLocaleString()}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={20000}
                  step={100}
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer accent-emerald-600 neu-inset p-0.5"
                />
              </div>

              {/* DURATION SLIDER */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-[#3b4049] flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-indigo-600" /> Investment Horizon
                  </span>
                  <span className="text-indigo-600 bg-indigo-50/80 px-3 py-1 rounded-lg neu-inset text-sm font-extrabold">
                    {years} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer accent-indigo-600 neu-inset p-0.5"
                />
              </div>

              {/* RETURN RATE SLIDER */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-[#3b4049] flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-purple-600" /> Expected Annual Return
                  </span>
                  <span className="text-purple-600 bg-purple-50/80 px-3 py-1 rounded-lg neu-inset text-sm font-extrabold">
                    {returnRate}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={18}
                  step={0.5}
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer accent-purple-600 neu-inset p-0.5"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: PROJECTION DISPLAY & RESULT METRICS */}
          <div className="lg:col-span-6">
            <NeumorphicBox variant="inset-deep" className="p-8 rounded-3xl space-y-6">
              <div className="text-xs font-bold text-[#636a75] uppercase tracking-wider">
                PROJECTED FUTURE PORTFOLIO VALUE
              </div>

              {/* TOTAL FUTURE VALUE */}
              <div className="text-4xl sm:text-5xl font-black text-[#2c3038] tracking-tight">
                ${totalWealth.toLocaleString()}
              </div>

              {/* SPLIT BREAKDOWN */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl neu-raised-sm">
                  <div className="text-xs text-[#636a75] font-semibold mb-1">Total Principal</div>
                  <div className="text-xl font-bold text-[#2c3038]">
                    ${totalContributions.toLocaleString()}
                  </div>
                </div>

                <div className="p-4 rounded-2xl neu-raised-sm">
                  <div className="text-xs text-emerald-600 font-semibold mb-1">Compound Alpha</div>
                  <div className="text-xl font-bold text-emerald-600">
                    +${interestEarned.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* PROGRESS BAR REPRESENTATION */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between text-xs font-bold text-[#525964]">
                  <span>Principal ({(totalContributions / totalWealth * 100).toFixed(0)}%)</span>
                  <span className="text-emerald-600">Growth ({(interestEarned / totalWealth * 100).toFixed(0)}%)</span>
                </div>
                <div className="w-full h-4 rounded-full neu-inset p-1 flex gap-1 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-l-full"
                    style={{ width: `${(totalContributions / totalWealth * 100)}%` }}
                  />
                  <div
                    className="h-full bg-emerald-500 rounded-r-full shadow-glow"
                    style={{ width: `${(interestEarned / totalWealth * 100)}%` }}
                  />
                </div>
              </div>

              <NeumorphicBox
                variant="glowing"
                clickable
                hoverable
                onClick={onGetStartedClick}
                className="w-full py-4 text-center text-xs font-extrabold uppercase tracking-widest text-blue-600 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In This Wealth Plan</span>
                <ArrowRight className="w-4 h-4" />
              </NeumorphicBox>
            </NeumorphicBox>
          </div>

        </div>
      </NeumorphicBox>
    </section>
  );
};
