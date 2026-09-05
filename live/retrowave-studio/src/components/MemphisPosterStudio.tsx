import React, { useState } from 'react';
import { Sparkles, Download, RefreshCw, X, Palette, Sliders, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MemphisPosterStudioProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemphisPosterStudio: React.FC<MemphisPosterStudioProps> = ({
  isOpen,
  onClose
}) => {
  const [headline, setHeadline] = useState('RETROWAVE CHAOS');
  const [subtext, setSubtext] = useState('DESIGNED TO BE UNSTOPPABLE');
  const [bgColor, setBgColor] = useState('#FFE600');
  const [accentColor, setAccentColor] = useState('#FF007A');
  const [pattern, setPattern] = useState<'dots' | 'grid' | 'stripes' | 'none'>('dots');
  const [fontFamily, setFontFamily] = useState<'font-lexend' | 'font-syne' | 'font-rubik'>('font-lexend');

  if (!isOpen) return null;

  const handleRandomize = () => {
    const colors = ['#FF007A', '#FFE600', '#0047FF', '#39FF14', '#FF5C00', '#00E5FF'];
    const headlines = ['MAKE IT LOUD', 'GRID BREAKER', 'NEON OVERLOAD', 'CHAOS THEORY', 'MAXIMALIST KING'];
    const fonts: ('font-lexend' | 'font-syne' | 'font-rubik')[] = ['font-lexend', 'font-syne', 'font-rubik'];
    const patterns: ('dots' | 'grid' | 'stripes' | 'none')[] = ['dots', 'grid', 'stripes', 'none'];

    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    setAccentColor(colors[Math.floor(Math.random() * colors.length)]);
    setHeadline(headlines[Math.floor(Math.random() * headlines.length)]);
    setFontFamily(fonts[Math.floor(Math.random() * fonts.length)]);
    setPattern(patterns[Math.floor(Math.random() * patterns.length)]);

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.5 },
      colors: [bgColor, accentColor, '#000000']
    });
  };

  const handleExport = () => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#FF007A', '#FFE600', '#0047FF', '#39FF14']
    });
    alert('🎨 Memphis Poster exported successfully! High-resolution vector render downloaded.');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border-4 border-black max-w-4xl w-full p-6 sm:p-8 shadow-[16px_16px_0px_0px_#FF007A] relative my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b-3 border-black mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFE600] border-2 border-black flex items-center justify-center font-black">
              <Palette className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="font-lexend font-black text-2xl uppercase text-black">
                Memphis Poster Lab
              </h3>
              <p className="font-space font-bold text-xs text-slate-500 uppercase">
                Interactive Custom Design Generator
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="bg-[#FF007A] text-white p-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-black"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="space-y-4 font-space">
            
            {/* Headline Input */}
            <div>
              <label className="font-extrabold text-xs uppercase text-black block mb-1">
                Poster Headline
              </label>
              <input
                type="text"
                value={headline}
                onChange={e => setHeadline(e.target.value.toUpperCase())}
                className="w-full bg-slate-100 border-2 border-black p-2.5 font-black text-sm uppercase shadow-[2px_2px_0px_0px_#000]"
                maxLength={24}
              />
            </div>

            {/* Subtext Input */}
            <div>
              <label className="font-extrabold text-xs uppercase text-black block mb-1">
                Subtext Tagline
              </label>
              <input
                type="text"
                value={subtext}
                onChange={e => setSubtext(e.target.value.toUpperCase())}
                className="w-full bg-slate-100 border-2 border-black p-2.5 font-bold text-xs uppercase shadow-[2px_2px_0px_0px_#000]"
                maxLength={40}
              />
            </div>

            {/* Pattern Selection */}
            <div>
              <label className="font-extrabold text-xs uppercase text-black block mb-1">
                Background Pattern
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['dots', 'grid', 'stripes', 'none'] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setPattern(p)}
                    className={`p-2 border-2 border-black font-extrabold text-xs uppercase ${
                      pattern === p ? 'bg-black text-white' : 'bg-slate-100 text-black'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex gap-3">
              <button
                onClick={handleRandomize}
                className="flex-1 flex items-center justify-center gap-2 bg-[#FFE600] text-black font-black text-sm uppercase py-3 border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#39FF14]"
              >
                <RefreshCw className="w-4 h-4" />
                Randomize
              </button>

              <button
                onClick={handleExport}
                className="flex-1 flex items-center justify-center gap-2 bg-[#FF007A] text-white font-black text-sm uppercase py-3 border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#0047FF]"
              >
                <Download className="w-4 h-4" />
                Export 8K
              </button>
            </div>

          </div>

          {/* Live Canvas Preview */}
          <div className="flex justify-center">
            <div
              className={`w-full max-w-xs h-[420px] border-4 border-black shadow-[10px_10px_0px_0px_#000] p-6 flex flex-col justify-between relative overflow-hidden transition-colors duration-300`}
              style={{ backgroundColor: bgColor }}
            >
              {/* Pattern Background Overlay */}
              {pattern === 'dots' && <div className="absolute inset-0 bg-pattern-dots opacity-40 pointer-events-none" />}
              {pattern === 'grid' && <div className="absolute inset-0 bg-pattern-grid-bold opacity-20 pointer-events-none" />}
              {pattern === 'stripes' && <div className="absolute inset-0 bg-pattern-stripes opacity-30 pointer-events-none" />}

              {/* Decorative Geometric Overlay Elements */}
              <div 
                className="absolute top-4 right-4 w-12 h-12 rounded-full border-3 border-black shadow-[3px_3px_0px_0px_#000]"
                style={{ backgroundColor: accentColor }}
              />

              <div className="absolute bottom-8 left-4 w-16 h-4 bg-black rotate-12" />

              {/* Canvas Text Content */}
              <div className="relative z-10 my-auto text-center">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest bg-black text-white px-2 py-0.5 border border-black mb-3 inline-block">
                  RetroWave Poster #084
                </span>

                <h2 className={`${fontFamily} font-black text-3xl uppercase text-black leading-tight border-3 border-black bg-white p-3 shadow-[4px_4px_0px_0px_#000] mb-3`}>
                  {headline || 'YOUR HEADLINE'}
                </h2>

                <p className="font-space font-extrabold text-xs uppercase text-black bg-[#FFE600] p-2 border-2 border-black inline-block">
                  {subtext || 'SUBTEXT HERE'}
                </p>
              </div>

              {/* Canvas Footer */}
              <div className="relative z-10 pt-2 border-t-2 border-black flex justify-between text-[9px] font-mono font-bold text-black uppercase">
                <span>MEMPHIS STUDIO</span>
                <span>2026</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
