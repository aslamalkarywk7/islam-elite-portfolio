import React from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { DashboardPreview } from './DashboardPreview';
import { ShadowConfig } from '../types';
import { ArrowRight, ShieldCheck, Play, Lock, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  shadowConfig: ShadowConfig;
  onGetStartedClick: () => void;
  onWatchDemoClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  shadowConfig,
  onGetStartedClick,
  onWatchDemoClick,
}) => {
  return (
    <section id="home" className="pt-8 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: HEADLINE, SUBTITLE, CTA BUTTONS */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6 text-left">
          
          {/* TOP TAG / EMBOSSED BADGE */}
          <NeumorphicBox
            variant="convex"
            pill
            className="px-4 py-1.5 flex items-center gap-2 border border-white/50"
            shadowConfig={shadowConfig}
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
            <span className="text-xs font-bold tracking-wider text-[#383d46] uppercase">
              NEUMORPHISM 2.0 WEALTH ARCHITECTURE
            </span>
          </NeumorphicBox>

          {/* MAIN HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2d3748] tracking-tight leading-[1.1] font-sans">
            Manage Your Wealth With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d7cfe] via-indigo-600 to-blue-700 drop-shadow-sm">
              Pure Simplicity.
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-lg sm:text-xl font-medium text-[#718096] leading-relaxed max-w-xl">
            Your Finances. Your Future.{' '}
            <span className="text-[#2d3748] font-bold underline decoration-[#4d7cfe]/40 underline-offset-4">
              Perfectly Balanced.
            </span>
          </p>

          <p className="text-sm text-[#718096] leading-relaxed">
            Experience next-generation asset aggregation, algorithmic portfolio rebalancing, and tactile financial controls designed with extreme softness and seamless depth.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            {/* LARGE DEEPLY RECESSED / GLOWING CTA BUTTON */}
            <NeumorphicBox
              variant="glowing"
              clickable
              hoverable
              onClick={onGetStartedClick}
              className="px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-[#4d7cfe] bg-[#e6e9ef] border border-blue-200/60 flex items-center justify-center gap-3 group w-full sm:w-auto cursor-pointer hover:bg-[#4d7cfe] hover:text-white transition-colors"
              shadowConfig={shadowConfig}
              id="btn-hero-get-started"
            >
              <span>Get Started</span>
              <div className="p-1 rounded-full bg-[#4d7cfe] text-white group-hover:translate-x-1 transition-transform group-hover:bg-white group-hover:text-[#4d7cfe]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </NeumorphicBox>

            {/* SECONDARY WATCH DEMO BUTTON */}
            <NeumorphicBox
              variant="raised"
              clickable
              hoverable
              onClick={onWatchDemoClick}
              className="px-6 py-4 text-sm font-bold text-[#2d3748] flex items-center justify-center gap-2.5 w-full sm:w-auto cursor-pointer hover:text-[#4d7cfe]"
              shadowConfig={shadowConfig}
              id="btn-hero-watch-demo"
            >
              <div className="p-1 rounded-full neu-inset text-[#4d7cfe]">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>Explore Interactive Mockup</span>
            </NeumorphicBox>
          </div>

          {/* TRUST SECURITY BADGES */}
          <div className="pt-6 border-t border-[#d4cfc7]/60 w-full flex flex-wrap items-center gap-6 text-xs text-[#636a75] font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>SOC2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>256-Bit Hardware Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Institutional Custodians</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: COMPLEX DASHBOARD ELEMENT CARVED SOFTLY FROM BACKGROUND */}
        <div className="lg:col-span-7 w-full">
          <DashboardPreview shadowConfig={shadowConfig} />
        </div>

      </div>
    </section>
  );
};
