import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Code, PenTool, Share2 } from 'lucide-react';
import { HeroVectorIllustration } from './HeroVectorIllustration';

interface HeroSectionProps {
  onOpenContactModal: () => void;
  onNavigateSection: (section: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContactModal,
  onNavigateSection,
}) => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b-2 border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Pill Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-[#F8F9FA] border-2 border-[#2D3436] px-4 py-2 rounded-full">
            <span className="w-3 h-3 rounded-full bg-[#0984E3]"></span>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2D3436]">
              FULL-SERVICE DIGITAL AGENCY
            </span>
            <span className="bg-[#2ECC71] text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
              2026 EDITION
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#2D3436] uppercase leading-[1.08] font-sans">
            WE CONNECT IDEAS WITH <br />
            <span className="text-[#0984E3]">CREATIVE</span> DIGITAL{' '}
            <span className="bg-[#FF7675] text-white px-3 py-1 rounded-lg inline-block transform -rotate-1">
              EXPERIENCES
            </span>
          </h1>

          {/* Subtitle highlighting the 3 pillars */}
          <p className="mt-6 text-lg sm:text-xl font-bold text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Specializing in <span className="text-[#0984E3] underline decoration-[#0984E3] underline-offset-4 font-black">Web Design</span>,{' '}
            <span className="text-[#E17055] underline decoration-[#FF7675] underline-offset-4 font-black">Content Creation</span>, and{' '}
            <span className="text-[#10AC84] underline decoration-[#2ECC71] underline-offset-4 font-black">Social Media Strategy</span> through pure flat geometry and vibrant design systems.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* SOLID BLUE CTA BUTTON WITH ROUNDED CORNERS READS 'LET'S WORK TOGETHER' */}
            <button
              onClick={onOpenContactModal}
              className="bg-[#0984E3] hover:bg-[#0773C5] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl uppercase tracking-wider flex items-center space-x-3 transition-transform active:scale-95 cursor-pointer"
            >
              <span>LET'S WORK TOGETHER</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </button>

            {/* SECONDARY ACTION BUTTON */}
            <button
              onClick={() => onNavigateSection('portfolio')}
              className="bg-white hover:bg-[#F8F9FA] text-[#2D3436] font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl uppercase tracking-wider border-3 border-[#2D3436] transition-colors cursor-pointer"
            >
              EXPLORE OUR WORK
            </button>
          </div>
        </div>

        {/* Key Pillars Quick Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-[#EBF5FB] border-2 border-[#0984E3] p-3.5 rounded-xl flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#0984E3] text-white rounded-lg flex items-center justify-center font-black">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-[#0984E3] uppercase">PILLAR 01</div>
              <div className="text-sm font-extrabold text-[#2D3436]">Web Design & Dev</div>
            </div>
          </div>

          <div className="bg-[#FDEDEC] border-2 border-[#FF7675] p-3.5 rounded-xl flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#FF7675] text-white rounded-lg flex items-center justify-center font-black">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-[#E17055] uppercase">PILLAR 02</div>
              <div className="text-sm font-extrabold text-[#2D3436]">Content Creation</div>
            </div>
          </div>

          <div className="bg-[#E8F8F5] border-2 border-[#2ECC71] p-3.5 rounded-xl flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#2ECC71] text-white rounded-lg flex items-center justify-center font-black">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-[#10AC84] uppercase">PILLAR 03</div>
              <div className="text-sm font-extrabold text-[#2D3436]">Social Media Strategy</div>
            </div>
          </div>
        </div>

        {/* ILLUSTRATED BANNER: CUSTOM FLAT VECTOR ARTWORK SCENE */}
        <div className="mt-6">
          <HeroVectorIllustration />
        </div>

        {/* Agency Value Highlights */}
        <div className="mt-12 pt-8 border-t-2 border-[#E9ECEF] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-[#0984E3] font-sans">01.</span>
            <span className="text-sm font-extrabold text-[#2D3436] uppercase mt-1">NO GRADIENTS</span>
            <span className="text-xs text-gray-500 font-semibold">100% Solid Color Blocks</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-[#FF7675] font-sans">02.</span>
            <span className="text-sm font-extrabold text-[#2D3436] uppercase mt-1">NO SHADOWS</span>
            <span className="text-xs text-gray-500 font-semibold">Clean Crisp Edges</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-[#2ECC71] font-sans">03.</span>
            <span className="text-sm font-extrabold text-[#2D3436] uppercase mt-1">FAST RENDERING</span>
            <span className="text-xs text-gray-500 font-semibold">Instant Loading Speed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-[#2D3436] font-sans">04.</span>
            <span className="text-sm font-extrabold text-[#2D3436] uppercase mt-1">BOLD TYPO</span>
            <span className="text-xs text-gray-500 font-semibold">Heavy Montserrat Font</span>
          </div>
        </div>

      </div>
    </section>
  );
};
