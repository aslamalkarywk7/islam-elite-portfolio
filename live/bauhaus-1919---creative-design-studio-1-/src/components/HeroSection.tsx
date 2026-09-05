import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Layers, Sparkles, RefreshCw, Eye } from 'lucide-react';

interface HeroSectionProps {
  showGridLines: boolean;
  onExploreClick: () => void;
  onOpenLab: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  showGridLines,
  onExploreClick,
  onOpenLab,
}) => {
  const [activeShapeColor, setActiveShapeColor] = useState<'red' | 'yellow' | 'blue' | 'black'>('red');
  const [rotationAngle, setRotationAngle] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(85);

  const primaryColors = {
    red: '#FF2A1F',
    yellow: '#FFE600',
    blue: '#0055FF',
    black: '#121212',
  };

  const handleRotate = () => {
    setRotationAngle((prev) => (prev + 45) % 360);
  };

  return (
    <section id="hero" className="relative bg-[#F6F5F0] overflow-hidden border-b-2 border-[#121212]">
      {/* Structural Grid Background */}
      <div className={`absolute inset-0 ${showGridLines ? 'bg-bauhaus-grid' : ''} pointer-events-none opacity-40`} />

      {/* Hero Layout Container */}
      <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between p-4 sm:p-8 lg:p-12">
        
        {/* TOP ROW: Asymmetrical Header Callout & Coordinate Metadata */}
        <div className="grid grid-cols-12 gap-4 items-start mb-8 lg:mb-12">
          {/* Column 1: Primary Shape Badge */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-3 border-2 border-[#121212] p-4 bg-white shadow-[4px_4px_0px_0px_#121212]">
            <div className="flex items-center justify-between font-mono-code text-xs font-bold text-[#121212] mb-2">
              <span>MANIFESTO NO. 01</span>
              <span className="w-2.5 h-2.5 bg-[#FF2A1F] rounded-full"></span>
            </div>
            <p className="font-body text-xs font-medium leading-relaxed text-gray-800">
              Dissolving the artificial divide between fine graphic art and technical digital code construction.
            </p>
          </div>

          {/* Column 2: Large Graphic Year Marker */}
          <div className="col-span-12 sm:col-span-8 lg:col-span-6 flex flex-col justify-center items-start lg:items-center px-2">
            <span className="font-mono-code text-xs tracking-widest text-gray-500 uppercase block mb-1">
              FOUNDED AT DESSAU // REIMAGINED FOR 2026
            </span>
            <div className="flex items-baseline gap-3">
              <span className="font-heavy text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-[#121212]">
                1919
              </span>
              <span className="font-heavy text-2xl sm:text-3xl lg:text-4xl text-[#FF2A1F]">
                — 2026
              </span>
            </div>
          </div>

          {/* Column 3: Interactive Color Overlay Controller */}
          <div className="col-span-12 lg:col-span-3 border-2 border-[#121212] p-3 bg-[#121212] text-[#F6F5F0]">
            <div className="flex items-center justify-between text-xs font-mono-code mb-2.5">
              <span className="text-[#FFE600] font-bold">COLOR ACCENT SYSTEM</span>
              <button 
                onClick={handleRotate} 
                className="p-1 hover:text-[#0055FF] transition-colors cursor-pointer"
                title="Rotate Geometric Accent"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {(['red', 'yellow', 'blue', 'black'] as const).map((color) => (
                <button
                  key={color}
                  onClick={() => setActiveShapeColor(color)}
                  className={`h-7 border border-white/20 transition-all cursor-pointer font-mono-code text-[10px] font-bold flex items-center justify-center ${
                    activeShapeColor === color ? 'ring-2 ring-white scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: primaryColors[color], color: color === 'yellow' ? '#121212' : '#FFFFFF' }}
                >
                  {color[0].toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE MAIN HERO SECTION: Massive Asymmetrical Typography & Geometric Overlay Art */}
        <div className="grid grid-cols-12 gap-6 items-center my-4 lg:my-8">
          
          {/* Left Column: Huge Headline Graphic Art */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-4">
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-[#0055FF]">
              <span className="w-3 h-3 bg-[#FFE600] border border-[#121212]"></span>
              <span className="tracking-widest">PURE BAUHAUS AESTHETIC // DIGITAL AGENCY</span>
            </div>

            {/* Giant Stacked Graphic Headline */}
            <h1 className="font-heavy text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.88] text-[#121212] uppercase select-none">
              <span className="block hover:text-[#FF2A1F] transition-colors">FORM</span>
              <span className="flex items-center gap-2 sm:gap-4 my-1">
                <span className="text-[#0055FF]">FOLLOWS</span>
                <span 
                  className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#FFE600] border-2 border-[#121212] inline-block transition-transform duration-500"
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                />
              </span>
              <span className="block text-outline-heavy hover:text-[#0055FF] transition-colors">
                FUNCTION
              </span>
            </h1>

            {/* Sub-paragraph description */}
            <p className="font-body text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed pt-2">
              We engineer functional visual systems with mathematical precision. High-contrast desaturated photography meets bold geometric vector overlays and stark primary typography.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="group px-8 py-4 bg-[#FF2A1F] text-white font-heavy text-sm sm:text-base tracking-wider uppercase border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer flex items-center gap-3"
              >
                <span>EXPLORE PORTFOLIO</span>
                <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>

              <button
                onClick={onOpenLab}
                className="px-6 py-4 bg-[#FFE600] text-[#121212] font-heavy text-sm sm:text-base tracking-wider uppercase border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-[#FF2A1F]" />
                <span>OPEN BAUHAUS LAB</span>
              </button>
            </div>
          </div>

          {/* Right Column: Desaturated B&W Photography with Geometric Color Overlay */}
          <div className="col-span-12 lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Outer Frame Box */}
            <div className="relative border-4 border-[#121212] bg-[#FFFFFF] p-3 sm:p-4 shadow-[12px_12px_0px_0px_#121212]">
              
              {/* Image Container with Desaturated B&W Filter and Geometric Primary Overlay */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-black">
                {/* Desaturated B&W Photo */}
                <img
                  src="/src/assets/images/bauhaus_structure_1785197717338.jpg"
                  alt="Bauhaus Architecture desaturated black and white photography"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                />

                {/* Dynamic Primary Color Overlay Shape 1 (Circle Mask) */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-6 w-32 h-32 sm:w-44 sm:h-44 rounded-full mix-blend-multiply opacity-85 pointer-events-none transition-colors duration-500"
                  style={{ backgroundColor: primaryColors[activeShapeColor] }}
                />

                {/* Dynamic Primary Color Overlay Shape 2 (Intersecting Yellow Triangle) */}
                <div 
                  className="absolute bottom-0 right-0 w-0 h-0 border-l-[120px] sm:border-l-[160px] border-l-transparent border-b-[120px] sm:border-b-[160px] border-b-[#FFE600] mix-blend-hard-light opacity-90 pointer-events-none"
                />

                {/* Dynamic Primary Color Overlay Shape 3 (Electric Blue Bar) */}
                <div className="absolute top-1/2 left-0 right-0 h-8 bg-[#0055FF] mix-blend-overlay opacity-80 pointer-events-none" />

                {/* Corner Geometric Marker */}
                <div className="absolute top-3 right-3 bg-[#121212] text-[#FFE600] font-mono-code text-[11px] px-2 py-1 font-bold">
                  FIG. 1919 / ARCH
                </div>
              </div>

              {/* Bottom Card Caption Details */}
              <div className="grid grid-cols-12 gap-2 pt-3 border-t-2 border-[#121212] mt-3 font-mono-code text-xs">
                <div className="col-span-8 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#0055FF]"></span>
                  <span className="font-bold text-[#121212]">MONOLITHIC CONCRETE & GLASS</span>
                </div>
                <div className="col-span-4 text-right text-gray-600 font-bold">
                  PRIMARY GRID 01
                </div>
              </div>
            </div>

            {/* Overlapping Floating Asymmetrical Shape Behind */}
            <div 
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFE600] border-2 border-[#121212] -z-10 hidden sm:block transition-transform duration-300"
              style={{ transform: `rotate(${rotationAngle * 0.5}deg)` }}
            />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#0055FF] rounded-full border-2 border-[#121212] -z-10 hidden sm:block" />
          </div>

        </div>

        {/* BOTTOM FOOTER TICKER: Three Primary Shapes & Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-2 border-[#121212] bg-white mt-8 shadow-[4px_4px_0px_0px_#121212]">
          
          <div className="p-4 border-b sm:border-b-0 sm:border-r-2 border-[#121212] flex items-center gap-4 bg-[#FF2A1F]/10">
            <div className="w-10 h-10 bg-[#FF2A1F] rounded-full border-2 border-[#121212] flex-shrink-0 flex items-center justify-center font-heavy text-white text-sm">
              01
            </div>
            <div>
              <span className="font-heavy text-sm text-[#121212] block">THE CIRCLE // ROTATION</span>
              <span className="font-mono-code text-xs text-gray-700">Continuous fluid motion</span>
            </div>
          </div>

          <div className="p-4 border-b sm:border-b-0 sm:border-r-2 border-[#121212] flex items-center gap-4 bg-[#FFE600]/20">
            <div className="w-10 h-10 bg-[#FFE600] border-2 border-[#121212] flex-shrink-0 flex items-center justify-center font-heavy text-[#121212] text-sm">
              02
            </div>
            <div>
              <span className="font-heavy text-sm text-[#121212] block">THE SQUARE // STRUCTURE</span>
              <span className="font-mono-code text-xs text-gray-700">Static structural foundation</span>
            </div>
          </div>

          <div className="p-4 flex items-center gap-4 bg-[#0055FF]/10">
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[34px] border-b-[#0055FF] flex-shrink-0" />
            <div>
              <span className="font-heavy text-sm text-[#121212] block">THE TRIANGLE // TENSION</span>
              <span className="font-mono-code text-xs text-gray-700">Directional dynamic force</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
