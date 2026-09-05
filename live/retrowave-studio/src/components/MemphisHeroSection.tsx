import React, { useState } from 'react';
import { Sparkles, ArrowDownRight, Layers, Play, Zap, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MemphisHeroSectionProps {
  onViewPortfolio: () => void;
  onOpenContact: () => void;
  onOpenPosterStudio: () => void;
}

export const MemphisHeroSection: React.FC<MemphisHeroSectionProps> = ({
  onViewPortfolio,
  onOpenContact,
  onOpenPosterStudio,
}) => {
  const [clickedShapeCount, setClickedShapeCount] = useState(0);

  const handlePortfolioClick = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FF007A', '#FFE600', '#0047FF', '#39FF14', '#FF5C00']
    });
    onViewPortfolio();
  };

  const handleInteractiveShapeClick = (color: string) => {
    setClickedShapeCount(prev => prev + 1);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { x: Math.random() * 0.8 + 0.1, y: Math.random() * 0.6 + 0.2 },
      colors: [color, '#FFE600', '#000000']
    });
  };

  return (
    <section className="relative w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 border-b-4 border-black overflow-hidden select-none">
      
      {/* Background Memphis Patterns & Dot Grid Canvas */}
      <div className="absolute inset-0 bg-pattern-grid opacity-60 pointer-events-none" />
      <div className="absolute top-12 left-6 w-32 h-32 bg-pattern-dots-pink opacity-40 pointer-events-none rounded-full" />
      <div className="absolute bottom-12 right-8 w-48 h-48 bg-pattern-dots opacity-30 pointer-events-none" />

      {/* --- Clashing Energetic Geometric Floating Shapes --- */}

      {/* 1. Large Electric Pink Circle */}
      <div 
        onClick={() => handleInteractiveShapeClick('#FF007A')}
        className="absolute top-10 left-[6%] w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-[#FF007A] border-4 border-black shadow-[6px_6px_0px_0px_#FFE600] animate-float cursor-pointer hover:scale-110 transition-transform z-10 flex items-center justify-center"
        title="Click me!"
      >
        <div className="w-8 h-8 rounded-full bg-white border-2 border-black" />
      </div>

      {/* 2. Vivid Yellow Triangle */}
      <div 
        onClick={() => handleInteractiveShapeClick('#FFE600')}
        className="absolute top-16 right-[8%] w-0 h-0 border-l-[35px] sm:border-l-[50px] border-l-transparent border-r-[35px] sm:border-r-[50px] border-r-transparent border-b-[60px] sm:border-b-[90px] border-b-[#FFE600] filter drop-shadow-[5px_5px_0px_#000] animate-float-reverse cursor-pointer hover:scale-110 transition-transform z-10"
        title="Click me!"
      />

      {/* 3. Bright Orange Zig-Zag Line SVG */}
      <div 
        onClick={() => handleInteractiveShapeClick('#FF5C00')}
        className="absolute bottom-16 left-[4%] w-32 sm:w-48 h-12 z-10 cursor-pointer hover:scale-110 transition-transform hidden sm:block"
        title="Click me!"
      >
        <svg viewBox="0 0 120 30" className="w-full h-full filter drop-shadow-[4px_4px_0px_#000]">
          <path 
            d="M 0 15 L 20 0 L 40 30 L 60 0 L 80 30 L 100 0 L 120 15" 
            fill="none" 
            stroke="#FF5C00" 
            strokeWidth="10" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* 4. Lime Green Wavy Squiggle SVG */}
      <div 
        onClick={() => handleInteractiveShapeClick('#39FF14')}
        className="absolute bottom-20 right-[6%] w-36 sm:w-52 h-14 z-10 cursor-pointer hover:scale-110 transition-transform"
        title="Click me!"
      >
        <svg viewBox="0 0 160 40" className="w-full h-full filter drop-shadow-[5px_5px_0px_#000]">
          <path 
            d="M 10 20 Q 40 0, 70 20 T 130 20 T 150 20" 
            fill="none" 
            stroke="#39FF14" 
            strokeWidth="12" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      {/* 5. Cobalt Blue Rotated Square */}
      <div 
        onClick={() => handleInteractiveShapeClick('#0047FF')}
        className="absolute top-[48%] left-[2%] w-14 h-14 bg-[#0047FF] border-4 border-black rotate-45 shadow-[4px_4px_0px_0px_#FF007A] hidden lg:block cursor-pointer hover:scale-125 transition-transform z-10"
      />

      {/* 6. Electric Cyan Angled Pill */}
      <div 
        onClick={() => handleInteractiveShapeClick('#00E5FF')}
        className="absolute top-[40%] right-[3%] w-24 h-10 bg-[#00E5FF] border-4 border-black rounded-full -rotate-12 shadow-[4px_4px_0px_0px_#000] hidden lg:flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10"
      >
        <div className="w-3 h-3 rounded-full bg-black" />
      </div>

      {/* --- Main Hero Content Container --- */}
      <div className="max-w-5xl mx-auto relative z-20 flex flex-col items-center text-center">
        
        {/* Top Memphis Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFE600] text-black border-3 border-black px-4 py-1.5 mb-8 shadow-[4px_4px_0px_0px_#000] -rotate-1 hover:rotate-0 transition-transform">
          <Sparkles className="w-4 h-4 fill-black" />
          <span className="font-space font-black text-xs sm:text-sm uppercase tracking-wider">
            Eclectic • Maximalist • Unfiltered
          </span>
          <span className="bg-[#FF007A] text-white text-[10px] font-black px-2 py-0.5 ml-1 border border-black">
            1980s Vibe
          </span>
        </div>

        {/* Massive Headline: "Make It Bold." */}
        <h1 className="font-lexend font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-black uppercase leading-[0.88] mb-6 relative">
          <span className="relative inline-block text-stroke-black">
            Make It
          </span>{' '}
          <span className="relative inline-block text-[#FF007A] bg-[#FFE600] px-3 py-1 border-4 sm:border-6 border-black shadow-[8px_8px_0px_0px_#000] rotate-1 hover:-rotate-1 transition-transform">
            Bold.
            {/* Corner Decorative Dots */}
            <span className="absolute -top-3 -left-3 w-5 h-5 bg-[#0047FF] border-2 border-black rounded-full" />
            <span className="absolute -bottom-3 -right-3 w-5 h-5 bg-[#39FF14] border-2 border-black" />
          </span>
        </h1>

        {/* Subtitle: "Embrace the chaos with Memphis Design." */}
        <p className="font-space font-extrabold text-xl sm:text-3xl text-black max-w-2xl mb-10 leading-snug bg-white/90 p-3 border-2 border-black shadow-[4px_4px_0px_0px_#39FF14]">
          Embrace the chaos with{' '}
          <span className="bg-[#00E5FF] px-2 py-0.5 border border-black text-black underline decoration-4 decoration-pink-500">
            Memphis Design
          </span>
          .
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 w-full max-w-xl">
          
          {/* Main Contained Material Button: "View Portfolio" */}
          <button
            onClick={handlePortfolioClick}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-3 bg-[#FF007A] hover:bg-[#0047FF] text-white font-lexend font-black text-lg sm:text-xl uppercase px-8 py-5 border-4 border-black shadow-[8px_8px_0px_0px_#FFE600] hover:shadow-[10px_10px_0px_0px_#39FF14] hover:-translate-y-1 active:translate-y-1 transition-all group"
          >
            <span>View Portfolio</span>
            <ArrowDownRight className="w-6 h-6 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Secondary Button: "Book Studio" */}
          <button
            onClick={onOpenContact}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#FFE600] hover:bg-[#39FF14] text-black font-space font-black text-base sm:text-lg uppercase px-6 py-5 border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#FF007A] hover:-translate-y-1 active:translate-y-1 transition-all"
          >
            <Zap className="w-5 h-5" />
            <span>Start Project</span>
          </button>
        </div>

        {/* Interactive Chaos Counter / Helper */}
        <div className="mt-12 flex items-center gap-3 bg-black text-white px-4 py-2 border-2 border-yellow-400 rounded-full shadow-[3px_3px_0px_0px_#FF007A]">
          <RefreshCw className={`w-4 h-4 text-yellow-300 ${clickedShapeCount > 0 ? 'animate-spin' : ''}`} />
          <span className="font-mono text-xs font-bold">
            Interactive Shapes Clicked: <span className="text-yellow-300 font-extrabold text-sm">{clickedShapeCount}</span>
          </span>
          <span className="text-[10px] text-slate-400 border-l border-slate-700 pl-2">
            Click any floating shape for confetti!
          </span>
        </div>

      </div>

      {/* Decorative Bottom Marquee Ribbon */}
      <div className="mt-16 -mx-4 sm:-mx-8 bg-[#FFE600] border-y-4 border-black py-2.5 overflow-hidden rotate-1 shadow-[0_4px_0_#000]">
        <div className="flex whitespace-nowrap animate-pulse font-lexend font-black text-sm uppercase tracking-widest text-black gap-8">
          <span>★ RETROWAVE STUDIO ★</span>
          <span>NO BORING GRIDS</span>
          <span>★ CLASHING NEON COLOURS ★</span>
          <span>RADICAL TYPOGRAPHY</span>
          <span>★ 1980s ETTORE SOTTSASS VIBES ★</span>
          <span>MAKE IT BOLD</span>
          <span>★ RETROWAVE STUDIO ★</span>
          <span>NO BORING GRIDS</span>
          <span>★ CLASHING NEON COLOURS ★</span>
        </div>
      </div>

    </section>
  );
};
