import React, { useState } from 'react';
import { PosterConfig } from '../types';
import { X, Sparkles, Download, RefreshCw, Grid, Layers, Sliders, Type } from 'lucide-react';

interface PosterPlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PosterPlaygroundModal: React.FC<PosterPlaygroundModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [config, setConfig] = useState<PosterConfig>({
    title: 'THE ART OF STRUCTURE AND GRID',
    subtitle: 'SWISS TYPOGRAPHIC STYLE. CLARITY. ORGANISATION. SIMPLICITY. PRECISION.',
    number: '01',
    accentBlockPosition: 'top-right',
    showGridLines: true,
    fontSize: 48,
    backgroundColor: '#FFFFFF',
  });

  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleRandomize = () => {
    const titles = [
      'THE ART OF STRUCTURE AND GRID',
      'NEUE HAAS GROTESK & OBJECTIVITY',
      'ASYMMETRICAL BALANCE IN SPACE',
      'INTERNATIONAL TYPOGRAPHIC STYLE',
      'MATHEMATICAL PROPORTIONS & FORM'
    ];
    const positions: PosterConfig['accentBlockPosition'][] = ['top-right', 'bottom-left', 'center', 'left-bar'];
    const numbers = ['01', '02', '03', '58', '60', '71'];

    setConfig((prev) => ({
      ...prev,
      title: titles[Math.floor(Math.random() * titles.length)],
      number: numbers[Math.floor(Math.random() * numbers.length)],
      accentBlockPosition: positions[Math.floor(Math.random() * positions.length)],
      fontSize: Math.floor(Math.random() * 24) + 36,
    }));
  };

  const handleExportPoster = () => {
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans selection:bg-[#E30613] selection:text-white">
      <div className="bg-neutral-900 border-2 border-white/20 max-w-5xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row my-auto">
        
        {/* POSTER PREVIEW CANVAS */}
        <div className="lg:w-3/5 p-6 sm:p-10 bg-neutral-950 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative">
          
          <div className="text-xs font-mono text-neutral-400 mb-4 flex items-center justify-between w-full max-w-sm">
            <span>SWISS POSTER CANVAS</span>
            <span className="text-[#E30613] font-bold">DIN A1 • 1:1.414</span>
          </div>

          {/* THE GENERATED SWISS POSTER CARD */}
          <div 
            id="swiss-poster-canvas"
            style={{ backgroundColor: config.backgroundColor }}
            className={`w-full max-w-sm aspect-[1/1.414] border-4 border-black p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all duration-300 ${
              config.backgroundColor === '#000000' ? 'text-white' : 'text-black'
            }`}
          >
            {/* Grid Line Guides Overlay */}
            {config.showGridLines && (
              <div className="pointer-events-none absolute inset-0 grid grid-cols-6 gap-2 p-4 h-full opacity-20">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="border-x border-red-500 h-full" />
                ))}
              </div>
            )}

            {/* Top Bar */}
            <div className="flex items-start justify-between font-mono text-xs font-bold border-b border-current pb-3 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#E30613]" />
                <span className="uppercase tracking-widest">GRID STUDIO</span>
              </div>
              <span className="uppercase">CH-{config.number}</span>
            </div>

            {/* Poster Main Content Grid */}
            <div className="my-auto space-y-4 z-10 py-4">
              
              {/* Swiss Red Accent Block based on selected position */}
              {config.accentBlockPosition === 'top-right' && (
                <div className="w-24 h-24 bg-[#E30613] text-white p-3 font-mono text-[10px] font-black uppercase flex flex-col justify-between border-2 border-black ml-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span>{config.number}.</span>
                  <span>SWISS DESIGN</span>
                </div>
              )}

              {config.accentBlockPosition === 'left-bar' && (
                <div className="w-full h-8 bg-[#E30613] text-white font-mono text-xs font-bold uppercase flex items-center px-3 border-2 border-black">
                  ★ SWISS INTERNATIONAL TYPOGRAPHIC STYLE ★
                </div>
              )}

              {/* Main Dynamic Title */}
              <h1 
                style={{ fontSize: `${config.fontSize / 2}px`, lineHeight: 0.95 }}
                className="font-black tracking-tighter uppercase font-swiss"
              >
                {config.title}
              </h1>

              {/* Subtitle text */}
              <div className="border-l-2 border-current pl-3 py-1">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider opacity-90 leading-tight">
                  {config.subtitle}
                </p>
              </div>

              {config.accentBlockPosition === 'bottom-left' && (
                <div className="w-24 h-24 bg-[#E30613] text-white p-3 font-mono text-[10px] font-black uppercase flex flex-col justify-between border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span>{config.number}.</span>
                  <span>SWISS DESIGN</span>
                </div>
              )}

              {config.accentBlockPosition === 'center' && (
                <div className="w-full p-4 bg-[#E30613] text-white font-mono text-xs font-bold uppercase border-2 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  SWISS TYPOGRAPHIC MATRIX • {config.number}
                </div>
              )}

            </div>

            {/* Poster Footer */}
            <div className="border-t border-current pt-3 flex items-center justify-between font-mono text-[9px] font-bold uppercase z-10">
              <span>HELVETICA NEUE / INTER</span>
              <span>ZÜRICH • 2026</span>
            </div>

          </div>

        </div>

        {/* CONTROLS SIDEBAR */}
        <div className="lg:w-2/5 p-6 sm:p-8 text-white space-y-6 font-mono text-xs flex flex-col justify-between">
          
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E30613]" />
                <span className="font-bold text-sm tracking-wider uppercase font-swiss text-white">
                  SWISS POSTER STUDIO
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 border border-white/20 rounded hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Controls inputs */}
            <div className="space-y-4">
              
              <div>
                <label className="text-[10px] text-neutral-400 uppercase font-bold block mb-1">
                  POSTER HEADLINE
                </label>
                <input
                  type="text"
                  value={config.title}
                  onChange={(e) => setConfig({ ...config, title: e.target.value.toUpperCase() })}
                  className="w-full bg-black border border-white/20 p-2.5 rounded text-white font-mono text-xs focus:border-[#E30613] focus:outline-none uppercase"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-neutral-400 uppercase font-bold block mb-1">
                    NUMERIC CODE
                  </label>
                  <input
                    type="text"
                    value={config.number}
                    onChange={(e) => setConfig({ ...config, number: e.target.value })}
                    className="w-full bg-black border border-white/20 p-2.5 rounded text-white font-mono text-xs focus:border-[#E30613] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 uppercase font-bold block mb-1">
                    FONT SIZE ({config.fontSize}px)
                  </label>
                  <input
                    type="range"
                    min="32"
                    max="72"
                    value={config.fontSize}
                    onChange={(e) => setConfig({ ...config, fontSize: Number(e.target.value) })}
                    className="w-full accent-[#E30613] mt-2"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-neutral-400 uppercase font-bold block mb-1.5">
                  RED ACCENT BLOCK POSITION
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['top-right', 'bottom-left', 'center', 'left-bar'] as const).map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setConfig({ ...config, accentBlockPosition: pos })}
                      className={`p-2 border rounded text-[11px] font-bold uppercase transition-all ${
                        config.accentBlockPosition === pos
                          ? 'bg-[#E30613] border-[#E30613] text-white'
                          : 'border-white/20 bg-black text-neutral-400 hover:text-white'
                      }`}
                    >
                      {pos.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] text-neutral-400 uppercase font-bold block mb-1.5">
                  BACKGROUND COLOR
                </label>
                <div className="flex gap-2">
                  {[
                    { color: '#FFFFFF', label: 'PURE WHITE' },
                    { color: '#000000', label: 'DARK MODE' },
                    { color: '#E30613', label: 'SWISS RED' },
                  ].map((bg) => (
                    <button
                      key={bg.color}
                      onClick={() => setConfig({ ...config, backgroundColor: bg.color as any })}
                      className={`flex-1 py-1.5 border rounded text-[10px] font-bold uppercase transition-all ${
                        config.backgroundColor === bg.color
                          ? 'border-white bg-white/20 text-white'
                          : 'border-white/20 bg-black text-neutral-400 hover:text-white'
                      }`}
                    >
                      {bg.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[11px] font-bold text-neutral-300">SHOW GRID GUIDES</span>
                <input
                  type="checkbox"
                  checked={config.showGridLines}
                  onChange={(e) => setConfig({ ...config, showGridLines: e.target.checked })}
                  className="accent-[#E30613] w-4 h-4"
                />
              </div>

            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-white/15 space-y-3">
            <div className="flex gap-3">
              <button
                onClick={handleRandomize}
                className="flex-1 py-3 border border-white/30 rounded-xl bg-black hover:bg-white/10 font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>SHUFFLE LAYOUT</span>
              </button>

              <button
                onClick={handleExportPoster}
                className="flex-1 py-3 bg-[#E30613] text-white font-bold rounded-xl hover:bg-white hover:text-black flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{copiedSuccess ? 'EXPORTED!' : 'EXPORT POSTER'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
