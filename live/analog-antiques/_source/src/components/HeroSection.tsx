import React from 'react';
import { Play, Sparkles, ShieldCheck, Radio, ArrowRight, Disc } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onQuickPlay: () => void;
  heroImageUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onQuickPlay,
  heroImageUrl,
}) => {
  return (
    <section className="relative overflow-hidden py-6 lg:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Outer Aged Paper Frame Container */}
      <div className="bg-[#D8C7B0] border-4 border-[#1A1A1A] p-4 sm:p-6 lg:p-8 shadow-retro-lg relative film-grain">
        
        {/* Top Decorative Stamp Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-dashed border-[#1A1A1A]">
          <div className="flex items-center space-x-2">
            <span className="bg-[#BF5B30] text-[#E8D9C5] px-2.5 py-1 text-xs font-sans-retro font-bold uppercase border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
              Archive Preservation #68
            </span>
            <span className="bg-[#5F6F52] text-[#E8D9C5] px-2.5 py-1 text-xs font-sans-retro font-bold uppercase border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] hidden sm:inline-block">
              Tested & Calibrated
            </span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono-retro font-bold text-[#1A1A1A]">
            <Radio className="w-4 h-4 text-[#BF5B30]" />
            <span>HAIGHT-ASHBURY VAULT</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-12 h-[2px] bg-[#BF5B30]"></div>
              <span className="uppercase text-xs font-bold tracking-[0.3em] text-[#BF5B30] font-sans-retro">
                EST. 1968
              </span>
            </div>

            <h1 className="slab text-3xl sm:text-5xl xl:text-6xl text-[#1A1A1A] leading-[0.95] tracking-tight italic">
              Listen to the Archive.<br />
              <span className="text-[#D4A017] not-italic">Embrace the Groove.</span>
            </h1>

            <p className="font-mono-retro text-sm sm:text-base text-[#1A1A1A] leading-relaxed max-w-2xl bg-[#E8D9C5] p-4 border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A]">
              Step inside our warm catalog of hand-restored 1960s-1970s magnetic cassette decks, rare master tapes, audiophile boomboxes, and vintage photography gear. Calibrated for true analog resonance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="retro-btn bg-[#BF5B30] hover:bg-[#1A1A1A] text-[#E8D9C5] slab text-base sm:text-xl px-8 py-4 uppercase tracking-widest flex items-center gap-3 cursor-pointer"
              >
                EXPLORE COLLECTION
                <ArrowRight className="w-6 h-6" />
              </button>

              <button
                onClick={onQuickPlay}
                className="retro-btn bg-[#5F6F52] hover:bg-[#D4A017] hover:text-[#1A1A1A] text-[#E8D9C5] font-sans-retro text-xs sm:text-sm font-bold px-5 py-4 uppercase flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                Listen to Tape #01
              </button>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t-2 border-[#1A1A1A] font-mono-retro text-xs">
              <div className="bg-[#E8D9C5] p-2 border-2 border-[#1A1A1A]">
                <p className="font-bold text-[#BF5B30]">4,820+</p>
                <p className="text-[10px] text-[#1A1A1A] uppercase">Tapes Cataloged</p>
              </div>
              <div className="bg-[#E8D9C5] p-2 border-2 border-[#1A1A1A]">
                <p className="font-bold text-[#5F6F52]">100%</p>
                <p className="text-[10px] text-[#1A1A1A] uppercase">Bench Tested</p>
              </div>
              <div className="bg-[#E8D9C5] p-2 border-2 border-[#1A1A1A]">
                <p className="font-bold text-[#6D8299]">Zero</p>
                <p className="text-[10px] text-[#1A1A1A] uppercase">Digital Drift</p>
              </div>
            </div>
          </div>

          {/* Right Image Feature Column */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#1A1A1A] p-3 border-4 border-[#1A1A1A] shadow-retro-lg film-grain">
              
              {/* Tape Deck Window Container */}
              <div className="relative overflow-hidden border-2 border-[#1A1A1A] bg-[#2A2A2A]">
                <img
                  src={heroImageUrl}
                  alt="Restored 1970s Vintage Cassette Recorder Deck"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover filter contrast-105 saturate-90 hover:scale-105 transition-transform duration-500"
                />

                {/* Film Overlay Badges */}
                <div className="absolute top-3 left-3 bg-[#D4A017] text-[#1A1A1A] px-3 py-1 font-sans-retro text-xs font-bold border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center gap-1.5 uppercase">
                  <Disc className="w-4 h-4 animate-spin-reel" />
                  RESTORED SONY DECK
                </div>

                <div className="absolute bottom-3 right-3 bg-[#1A1A1A]/90 text-[#E8D9C5] px-3 py-1 font-mono-retro text-[10px] border border-[#E8D9C5]">
                  VU METERS: ACTIVE • 1978 MODEL
                </div>
              </div>

              {/* Deck Details Strip */}
              <div className="mt-3 bg-[#1A1A1A] p-3 text-[#E8D9C5] font-mono-retro text-xs flex justify-between items-center border border-[#D8C7B0]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
                  <span>Includes 1-Yr Analog Warranty</span>
                </div>
                <span className="text-[#BF5B30] font-bold">$340.00 USD</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
