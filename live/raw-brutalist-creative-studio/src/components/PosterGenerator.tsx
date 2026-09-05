import React, { useState } from 'react';
import { PosterConfig } from '../types';
import { Sliders, Download, Copy, Sparkles, Check, RefreshCw, Zap } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

export const PosterGenerator: React.FC = () => {
  const [posterConfig, setPosterConfig] = useState<PosterConfig>({
    headline: 'RAW REVOLUTION',
    subhead: 'NO PASTEL GRADIENTS // 100% HARD STROKES',
    bgTheme: 'lime',
    stamp: 'APPROVED 5PX',
    gridStyle: 'diagonal',
    rotation: -2,
    borderWidth: 5,
  });

  const [copied, setCopied] = useState<boolean>(false);

  const randomizePoster = () => {
    audioSynth.playGlitchBeep();
    const headlines = ['UNCENSORED CODE', 'RAW EFFICIENCY', 'HYPER BRUTALIST', 'HARD STROKES LAW', 'NEO-TOKYO 2026', 'ZERO PASTEL'];
    const subheads = ['BUILT WITH REACT 19 & VITE', 'STRICT 5.0PX SOLID BORDERS', 'ELECTRIC LIME ACCENTS ONLY', 'TOKYO // BERLIN // NEW YORK'];
    const themes: ('black' | 'lime' | 'white')[] = ['black', 'lime', 'white'];
    const stamps: ('CONFIDENTIAL' | 'APPROVED 5PX' | 'RAW NOISE' | 'UNRESTRICTED' | 'NO GRADIENTS')[] = [
      'CONFIDENTIAL', 'APPROVED 5PX', 'RAW NOISE', 'UNRESTRICTED', 'NO GRADIENTS'
    ];
    const grids: ('diagonal' | 'dots' | 'cross' | 'solid')[] = ['diagonal', 'dots', 'cross', 'solid'];

    setPosterConfig({
      headline: headlines[Math.floor(Math.random() * headlines.length)],
      subhead: subheads[Math.floor(Math.random() * subheads.length)],
      bgTheme: themes[Math.floor(Math.random() * themes.length)],
      stamp: stamps[Math.floor(Math.random() * stamps.length)],
      gridStyle: grids[Math.floor(Math.random() * grids.length)],
      rotation: Math.floor(Math.random() * 8) - 4,
      borderWidth: 5,
    });
  };

  const copyCode = () => {
    audioSynth.playClick();
    const posterCode = `<div class="bg-${posterConfig.bgTheme === 'lime' ? '[#CCFF00]' : posterConfig.bgTheme} border-[5px] border-black p-8 shadow-[12px_12px_0px_#000] rotate-[${posterConfig.rotation}deg]">
  <div class="font-black text-4xl uppercase">${posterConfig.headline}</div>
  <div class="font-mono text-sm">${posterConfig.subhead}</div>
  <span class="stamp">${posterConfig.stamp}</span>
</div>`;
    navigator.clipboard.writeText(posterCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Theme helper styles
  const getBgClass = () => {
    if (posterConfig.bgTheme === 'lime') return 'bg-[#CCFF00] text-black';
    if (posterConfig.bgTheme === 'black') return 'bg-black text-white';
    return 'bg-white text-black';
  };

  return (
    <section id="poster-studio" className="py-16 bg-black text-white border-b-[5px] border-black relative">
      <div className="max-w-[1800px] mx-auto px-4">
        
        {/* Header */}
        <div className="mb-10 text-center lg:text-left border-b-4 border-white pb-6">
          <div className="bg-[#CCFF00] text-black font-mono font-black text-xs px-3 py-1 border-2 border-black inline-block uppercase mb-3">
            INTERACTIVE UTILITY 03
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter">
            RAW POSTER <span className="text-[#CCFF00]">STUDIO</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 font-bold mt-1">
            CUSTOMIZE & GENERATE YOUR OWN NEO-BRUTALIST STUDIO POSTERS IN REAL TIME
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel - Col 5 */}
          <div className="lg:col-span-5 bg-zinc-950 border-4 border-white p-6 shadow-[10px_10px_0px_#000] space-y-5 font-mono text-xs">
            <div className="flex justify-between items-center border-b-2 border-zinc-800 pb-3">
              <span className="font-black text-sm uppercase text-[#CCFF00] flex items-center space-x-2">
                <Sliders className="w-4 h-4" />
                <span>POSTER PARAMETERS</span>
              </span>
              <button
                onClick={randomizePoster}
                className="btn-brutal-lime px-3 py-1 text-[11px] font-black uppercase flex items-center space-x-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>RANDOMIZE</span>
              </button>
            </div>

            {/* Headline Input */}
            <div className="space-y-1">
              <label className="text-zinc-400 font-bold block uppercase">HEADLINE TEXT:</label>
              <input
                type="text"
                value={posterConfig.headline}
                onChange={(e) => setPosterConfig({ ...posterConfig, headline: e.target.value })}
                className="w-full bg-black text-white p-3 border-4 border-black font-black uppercase text-sm focus:outline-none focus:border-[#CCFF00]"
              />
            </div>

            {/* Subhead Input */}
            <div className="space-y-1">
              <label className="text-zinc-400 font-bold block uppercase">SUBHEAD STATEMENT:</label>
              <input
                type="text"
                value={posterConfig.subhead}
                onChange={(e) => setPosterConfig({ ...posterConfig, subhead: e.target.value })}
                className="w-full bg-black text-white p-3 border-4 border-black font-bold text-xs focus:outline-none focus:border-[#CCFF00]"
              />
            </div>

            {/* Color Theme Selector */}
            <div className="space-y-1">
              <label className="text-zinc-400 font-bold block uppercase">BACKGROUND THEME:</label>
              <div className="grid grid-cols-3 gap-2">
                {(['lime', 'black', 'white'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      audioSynth.playClick();
                      setPosterConfig({ ...posterConfig, bgTheme: t });
                    }}
                    className={`py-2 font-black uppercase border-4 border-black cursor-pointer ${
                      posterConfig.bgTheme === t
                        ? 'bg-[#CCFF00] text-black shadow-[3px_3px_0px_#ffffff]'
                        : 'bg-black text-white hover:bg-zinc-800'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Stamp Badge Selector */}
            <div className="space-y-1">
              <label className="text-zinc-400 font-bold block uppercase">RAW STAMP BADGE:</label>
              <div className="flex flex-wrap gap-2">
                {(['APPROVED 5PX', 'CONFIDENTIAL', 'RAW NOISE', 'UNRESTRICTED', 'NO GRADIENTS'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      audioSynth.playClick();
                      setPosterConfig({ ...posterConfig, stamp: s });
                    }}
                    className={`px-3 py-1.5 font-bold text-[10px] uppercase border-2 border-black cursor-pointer ${
                      posterConfig.stamp === s
                        ? 'bg-white text-black font-black'
                        : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Rotation Slider */}
            <div className="space-y-1 pt-2">
              <div className="flex justify-between text-zinc-400 font-bold">
                <span>ROTATION ANGLE:</span>
                <span className="text-[#CCFF00]">{posterConfig.rotation}°</span>
              </div>
              <input
                type="range"
                min="-12"
                max="12"
                value={posterConfig.rotation}
                onChange={(e) => setPosterConfig({ ...posterConfig, rotation: Number(e.target.value) })}
                className="w-full accent-[#CCFF00] cursor-pointer"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t-2 border-zinc-800 flex gap-3">
              <button
                onClick={copyCode}
                className="w-full btn-brutal-lime py-3 font-black text-xs uppercase flex items-center justify-center space-x-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'POSTER CODE COPIED!' : 'COPY HTML/TAILWIND SPEC'}</span>
              </button>
            </div>

          </div>

          {/* Real-time Interactive Canvas Preview - Col 7 */}
          <div className="lg:col-span-7 flex justify-center items-center p-4 bg-zinc-900 border-4 border-white min-h-[500px]">
            <div 
              style={{ transform: `rotate(${posterConfig.rotation}deg)` }}
              className={`w-full max-w-lg p-8 sm:p-12 border-[5px] border-black shadow-[16px_16px_0px_#000] relative transition-transform duration-200 ${getBgClass()}`}
            >
              {/* Corner Stamp */}
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-mono text-[10px] font-black uppercase border-2 border-black shadow-[3px_3px_0px_#CCFF00]">
                {posterConfig.stamp}
              </div>

              {/* Grid Background Effect */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#000000 2px, transparent 2px), linear-gradient(90deg, #000000 2px, transparent 2px)`,
                  backgroundSize: posterConfig.gridStyle === 'dots' ? '12px 12px' : '30px 30px',
                }}
              />

              {/* Poster Content */}
              <div className="relative z-10 space-y-6">
                <div className="font-mono text-xs font-black uppercase tracking-widest opacity-80 border-b-2 border-black pb-2">
                  KRAK RAW CREATIVE STUDIO // SPEC_2026
                </div>

                <h3 className="font-display text-4xl sm:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
                  {posterConfig.headline}
                </h3>

                <p className="font-mono text-sm sm:text-base font-bold leading-snug uppercase border-l-4 border-black pl-3 py-1">
                  {posterConfig.subhead}
                </p>

                <div className="pt-6 border-t-4 border-black flex justify-between items-end font-mono text-[10px] font-black uppercase">
                  <div>
                    <div>BORDER: 5.0PX SOLID</div>
                    <div>SHADOW: 16PX HARD BLACK</div>
                  </div>
                  <div className="bg-black text-[#CCFF00] px-2 py-1">
                    UNCENSORED
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
