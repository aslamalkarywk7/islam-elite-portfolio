import React from 'react';
import { ArrowDownRight, ArrowRight, ShieldCheck, Award, Zap } from 'lucide-react';
import { M3Button } from './M3Button';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onOpenContact,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-[#FDFBFF]">
      {/* Soft M3 Background Tonal Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8E2FF]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#E8DEF8]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Availability Badge Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EADDFF] text-[#6750A4] text-xs font-semibold tracking-wide border border-[#6750A4]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#6750A4] animate-ping" />
              <span>Studio Chroma — Accepting Q3/Q4 Creative Commissions</span>
            </div>

            {/* Main Bold Title requested by prompt */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1C1E] tracking-tight leading-[1.08] max-w-4xl">
              Elevating Digital Experiences.
            </h1>

            {/* Subtitle requested by prompt */}
            <p className="text-lg sm:text-2xl font-normal text-[#44474E] max-w-2xl leading-relaxed">
              A creative partner for ambitious brands. Crafting precision design systems, mobile interfaces, and digital identities.
            </p>

            {/* Main Buttons requested by prompt */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <M3Button
                variant="filled"
                size="lg"
                onClick={onExploreProjects}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Explore Projects
              </M3Button>

              <M3Button
                variant="outlined"
                size="lg"
                onClick={onOpenContact}
                icon={<ArrowDownRight className="w-5 h-5" />}
              >
                Book Consultation
              </M3Button>
            </div>

            {/* Key Studio Trust Metrics */}
            <div className="pt-8 border-t border-[#E1E2EC] grid grid-cols-3 gap-6 max-w-2xl">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#005CBB] tracking-tight">28+</p>
                <p className="text-xs sm:text-sm font-medium text-[#757780]">Design Awards</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#001D33] tracking-tight">100%</p>
                <p className="text-xs sm:text-sm font-medium text-[#757780]">M3 Compliance</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#6750A4] tracking-tight">4.9/5</p>
                <p className="text-xs sm:text-sm font-medium text-[#757780]">Client Satisfaction</p>
              </div>
            </div>

          </div>

          {/* Right Visual Card Component - M3 Surface Preview */}
          <div className="lg:col-span-4">
            <div className="bento-card p-6 space-y-5">
              
              <div className="flex items-center justify-between border-b border-[#E1E2EC] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#D8E2FF] flex items-center justify-center text-[#001D33]">
                    <Zap className="w-5 h-5 text-[#005CBB]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1A1C1E]">Material 3 Tokens</h3>
                    <p className="text-xs text-[#757780]">Studio Design System</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E1E2EC] text-[#44474E]">
                  v3.4.0
                </span>
              </div>

              {/* Dynamic Color Palette Swatches */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#757780]">
                  Core Studio Palette
                </p>
                <div className="grid grid-cols-4 gap-2">
                  <div className="p-3 rounded-2xl bg-[#005CBB] text-white text-[11px] font-bold text-center">
                    Primary
                  </div>
                  <div className="p-3 rounded-2xl bg-[#6750A4] text-white text-[11px] font-bold text-center">
                    Accent
                  </div>
                  <div className="p-3 rounded-2xl bg-[#D8E2FF] text-[#001D33] text-[11px] font-bold text-center">
                    Surface
                  </div>
                  <div className="p-3 rounded-2xl bg-[#1A1C1E] text-white text-[11px] font-bold text-center">
                    Dark
                  </div>
                </div>
              </div>

              {/* M3 Feature Bullet Points */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#44474E]">
                  <ShieldCheck className="w-4 h-4 text-[#005CBB] shrink-0" />
                  <span>Pixel-perfect responsive desktop & mobile grids</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#44474E]">
                  <Award className="w-4 h-4 text-[#6750A4] shrink-0" />
                  <span>WCAG AAA accessibility color contrast standards</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
