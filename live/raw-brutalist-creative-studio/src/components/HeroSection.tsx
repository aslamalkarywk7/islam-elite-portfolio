import React, { useState } from 'react';
import { HERO_ARTWORK, STUDIO_METRICS } from '../data/portfolioData';
import { ArrowDownRight, Zap, Sliders, Eye, Sparkles, Terminal, Code2, AlertTriangle } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onExploreProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTerminal,
  onExploreProjects,
}) => {
  const [headlineScale, setHeadlineScale] = useState<number>(100);
  const [glitchActive, setGlitchActive] = useState<boolean>(false);
  const [activeWord, setActiveWord] = useState<string>('RAW');

  const words = ['RAW', 'NOISE', 'IMPACT', 'STRIKE', 'FORCE'];

  const cycleWord = () => {
    audioSynth.playGlitchBeep();
    const idx = words.indexOf(activeWord);
    setActiveWord(words[(idx + 1) % words.length]);
  };

  return (
    <section id="top" className="relative w-full bg-black text-white pt-6 pb-12 border-b-[5px] border-black overflow-hidden">
      {/* Background Raw Grid Lines */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 2px, transparent 2px), linear-gradient(90deg, #ffffff 2px, transparent 2px)`,
          backgroundSize: `40px 40px`,
        }}
      />

      <div className="max-w-[1800px] mx-auto px-4 relative z-10">
        
        {/* Top Floating Badge Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center space-x-2">
            <span className="bg-[#CCFF00] text-black font-black text-xs px-3 py-1 border-2 border-black uppercase shadow-[3px_3px_0px_#ffffff]">
              NEO-BRUTALIST CREATIVE ENGINE
            </span>
            <span className="bg-white text-black font-mono font-bold text-xs px-3 py-1 border-2 border-black">
              EST. 2026
            </span>
          </div>

          {/* Interactive Headline Size Slider & Glitch Toggle */}
          <div className="bg-zinc-900 border-2 border-white p-2 flex items-center space-x-4 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <Sliders className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span className="text-zinc-400">TYPE_SCALE:</span>
              <input
                type="range"
                min="80"
                max="130"
                value={headlineScale}
                onChange={(e) => setHeadlineScale(Number(e.target.value))}
                className="w-20 accent-[#CCFF00] cursor-pointer"
              />
              <span className="font-bold text-[#CCFF00]">{headlineScale}%</span>
            </div>

            <button
              onClick={() => {
                audioSynth.playHeavyPop();
                setGlitchActive(!glitchActive);
              }}
              className={`px-2 py-0.5 font-bold border transition-colors ${
                glitchActive ? 'bg-[#CCFF00] text-black border-black' : 'bg-black text-white border-zinc-700'
              }`}
            >
              GLITCH_FX {glitchActive ? '[ON]' : '[OFF]'}
            </button>
          </div>
        </div>

        {/* Extreme Unconventional Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Vertical Accent Strip for Brutalist Grid Balance */}
          <div className="hidden xl:flex lg:col-span-1 flex-col items-center justify-between bg-[#CCFF00] text-black brutal-border py-6 font-mono font-black text-xs uppercase tracking-widest select-none">
            <span className="vertical-text">DESIGN // DIRECTION // DISRUPTION</span>
            <span className="bg-black text-[#CCFF00] px-1 py-3 border border-black font-extrabold text-[10px]">2026</span>
            <span className="vertical-text">NO_GRADIENTS // 100%_RAW</span>
          </div>

          {/* Left Column (Main Massive Typography & Hero Messaging) - Col 6 or 7 */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Massive Display Title Block */}
            <div className="relative">
              
              {/* Overlapping Floating Stamp */}
              <div className="absolute -top-6 right-2 sm:right-10 bg-white text-black p-3 border-4 border-black shadow-[6px_6px_0px_#CCFF00] rotate-3 z-20 hidden sm:block">
                <div className="font-mono text-xs font-black uppercase tracking-widest text-center border-b-2 border-black pb-1">
                  MANDATE #505
                </div>
                <div className="font-mono text-[10px] font-bold text-red-600 uppercase pt-1">
                  100% HARD STROKES
                </div>
              </div>

              {/* Dynamic Ultra-Bold Headline */}
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#CCFF00] font-bold flex items-center space-x-2 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span>CREATIVE DIRECTION & FRONTEND ARCHITECTURE</span>
                </div>

                <h1 
                  style={{ fontSize: `${headlineScale * 0.05}rem` }}
                  className={`font-display font-black leading-[0.88] tracking-tighter uppercase transition-all duration-150 ${
                    glitchActive ? 'line-through decoration-[#CCFF00] decoration-8' : ''
                  }`}
                >
                  <span className="block text-white hover:text-[#CCFF00] transition-colors cursor-default">
                    CREATIVE
                  </span>
                  
                  {/* Interactive Word Cycler */}
                  <span className="flex items-center flex-wrap gap-2 my-1">
                    <button
                      onClick={cycleWord}
                      className="inline-block bg-[#CCFF00] text-black px-4 py-1 border-4 border-black shadow-[8px_8px_0px_#ffffff] hover:bg-white hover:shadow-[8px_8px_0px_#CCFF00] transition-all cursor-pointer font-black"
                      title="Click to cycle statement word!"
                    >
                      {activeWord} ★
                    </button>
                    <span className="text-white">FORCE</span>
                  </span>

                  <span className="block outline-text-white hover:text-white transition-colors">
                    UNFILTERED
                  </span>
                </h1>
              </div>

              {/* High-Impact Statement Callout Box */}
              <div className="mt-6 p-5 bg-zinc-950 border-4 border-[#CCFF00] shadow-[8px_8px_0px_#000] relative">
                <div className="absolute -top-3 left-4 bg-[#CCFF00] text-black text-[10px] font-mono font-black px-2 py-0.5 border border-black">
                  MANIFESTO_SUMMARY
                </div>
                <p className="font-mono text-sm sm:text-base text-zinc-200 leading-relaxed font-bold">
                  We build high-octane Neo-Brutalist web platforms, experimental interactive showcases, and brand identities that refuse to blend into corporate pastel background noise.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => {
                    audioSynth.playHeavyPop();
                    onExploreProjects();
                  }}
                  className="btn-brutal-lime px-6 py-4 text-sm sm:text-base font-black flex items-center space-x-3 cursor-pointer"
                >
                  <span>EXPLORE WORK [06]</span>
                  <ArrowDownRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    audioSynth.playGlitchBeep();
                    onOpenTerminal();
                  }}
                  className="px-6 py-4 bg-white text-black font-black text-sm sm:text-base border-4 border-black shadow-[8px_8px_0px_#000000] hover:bg-[#CCFF00] hover:shadow-[10px_10px_0px_#ffffff] transition-all cursor-pointer flex items-center space-x-2"
                >
                  <Terminal className="w-5 h-5" />
                  <span>COMMISSION PROJECT</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t-4 border-zinc-800">
              {STUDIO_METRICS.map((metric) => (
                <div key={metric.id} className="bg-black border-2 border-white p-3">
                  <div className="font-display font-black text-xl sm:text-2xl text-[#CCFF00]">
                    {metric.value}
                  </div>
                  <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column (Raw Image Container with Overlapping Elements & Distorted Effect) - Col 5 */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative group">
              
              {/* Top Overlapping Tag */}
              <div className="bg-[#CCFF00] text-black p-2 border-4 border-black font-mono font-black text-xs uppercase flex justify-between items-center shadow-[4px_4px_0px_#ffffff] mb-2">
                <span>ARTWORK // SPEC_01</span>
                <span className="bg-black text-[#CCFF00] px-2 py-0.5 text-[10px]">RAW NOISE</span>
              </div>

              {/* Main Image Container */}
              <div className="relative border-4 border-white bg-zinc-900 p-2 shadow-[12px_12px_0px_#CCFF00] transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-black">
                  <img
                    src={HERO_ARTWORK}
                    alt="RAW Brutalist Hero Studio Artwork"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      glitchActive ? 'filter invert contrast-200 hue-rotate-90' : 'group-hover:scale-105 group-hover:contrast-125'
                    }`}
                  />
                  
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none" />

                  {/* Image Corner Badges */}
                  <div className="absolute top-3 left-3 bg-black text-[#CCFF00] border-2 border-black font-mono text-[10px] font-black px-2 py-1">
                    5PX HARD STROKE
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white text-black border-2 border-black font-mono text-xs font-black px-3 py-1 shadow-[3px_3px_0px_#000]">
                    8K STUDIO RENDER
                  </div>
                </div>

                {/* Sub-Caption Box */}
                <div className="bg-black text-white p-3 mt-2 border-2 border-white flex justify-between items-center font-mono text-xs">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#CCFF00]" />
                    <span className="font-bold">SYSTEM_MODE: NO_PASTEL</span>
                  </div>
                  <span className="text-[#CCFF00] font-black">2026 // EDITION</span>
                </div>
              </div>

              {/* Bottom Overlapping Rotated Card */}
              <div className="mt-6 bg-white text-black p-4 border-4 border-black shadow-[8px_8px_0px_#000] -rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center space-x-2 font-mono text-xs font-black uppercase text-red-600 mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  <span>STRICT WARNING</span>
                </div>
                <p className="font-mono text-xs font-bold leading-tight">
                  No rounded pill buttons. No soft gradients. No blurry shadows. Every pixel is calculated for maximum contrast and structural clarity.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
