import React, { useState } from 'react';
import { PosterConfig } from '../types';
import { Sparkles, RotateCw, Copy, Check, Download, Grid, RefreshCw } from 'lucide-react';

interface InteractivePosterStudioProps {
  showGridLines: boolean;
}

export const InteractivePosterStudio: React.FC<InteractivePosterStudioProps> = ({ showGridLines }) => {
  const [config, setConfig] = useState<PosterConfig>({
    headline: 'KUNST & TECHNIK',
    subhead: 'EINE NEUE EINHEIT // BAUHAUS DESSAU',
    year: '1919 — 2026',
    primaryShape: 'circle',
    shapeColor: '#FF2A1F',
    bgColor: '#F6F5F0',
    shapeSize: 140,
    rotation: 15,
    gridLines: true,
  });

  const [copied, setCopied] = useState(false);

  const presets = [
    {
      name: 'GROPIUS 1919',
      headline: 'FORM FOLLOWS FUNCTION',
      subhead: 'DESSAU ARCHITECTURE FESTIVAL',
      primaryShape: 'circle' as const,
      shapeColor: '#FF2A1F' as const,
      bgColor: '#F6F5F0' as const,
      shapeSize: 160,
      rotation: 0,
    },
    {
      name: 'KANDINSKY BLUE',
      headline: 'THE PRIMARY TRIAD',
      subhead: 'POINT AND LINE TO PLANE',
      primaryShape: 'triangle' as const,
      shapeColor: '#0055FF' as const,
      bgColor: '#121212' as const,
      shapeSize: 180,
      rotation: 30,
    },
    {
      name: 'WEIMAR YELLOW',
      headline: 'KUNST UND TECHNIK',
      subhead: 'WEIMAR MONOGRAPH 1923',
      primaryShape: 'square' as const,
      shapeColor: '#FFE600' as const,
      bgColor: '#F6F5F0' as const,
      shapeSize: 150,
      rotation: 45,
    },
  ];

  const handleCopySvg = () => {
    const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700" width="100%" height="100%">
  <rect width="100%" height="100%" fill="${config.bgColor}"/>
  ${config.gridLines ? `<path d="M 0,100 L 500,100 M 0,200 L 500,200 M 0,300 L 500,300 M 0,400 L 500,400 M 0,500 L 500,500 M 0,600 L 500,600 M 100,0 L 100,700 M 200,0 L 200,700 M 300,0 L 300,700 M 400,0 L 400,700" stroke="#121212" stroke-width="0.5" opacity="0.15"/>` : ''}
  <text x="30" y="70" font-family="'Archivo Black', sans-serif" font-size="28" fill="${config.bgColor === '#121212' ? '#F6F5F0' : '#121212'}" font-weight="900">${config.headline}</text>
  <text x="30" y="100" font-family="'Space Grotesk', sans-serif" font-size="12" fill="${config.shapeColor}" font-weight="700">${config.subhead}</text>
  <g transform="translate(250, 380) rotate(${config.rotation})">
    ${
      config.primaryShape === 'circle'
        ? `<circle r="${config.shapeSize}" fill="${config.shapeColor}"/>`
        : config.primaryShape === 'square'
        ? `<rect x="-${config.shapeSize}" y="-${config.shapeSize}" width="${config.shapeSize * 2}" height="${config.shapeSize * 2}" fill="${config.shapeColor}"/>`
        : config.primaryShape === 'triangle'
        ? `<polygon points="0,-${config.shapeSize} ${config.shapeSize},${config.shapeSize} -${config.shapeSize},${config.shapeSize}" fill="${config.shapeColor}"/>`
        : `<rect x="-120" y="-120" width="240" height="240" fill="${config.shapeColor}"/>`
    }
  </g>
  <text x="30" y="650" font-family="'JetBrains Mono', monospace" font-size="11" fill="${config.bgColor === '#121212' ? '#FFE600' : '#121212'}">BAUHAUS 1919 // ${config.year}</text>
</svg>
    `.trim();

    navigator.clipboard.writeText(svgContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lab" className="bg-[#121212] text-[#F6F5F0] py-16 md:py-24 border-b-2 border-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 items-end mb-12 pb-6 border-b-2 border-white/20">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-[#FFE600] uppercase mb-2">
              <Sparkles className="w-4 h-4 text-[#FF2A1F]" />
              <span>THE BAUHAUS LAB // GENERATIVE POSTER ENGINE</span>
            </div>
            <h2 className="font-heavy text-4xl sm:text-6xl text-white tracking-tighter uppercase leading-none">
              INTERACTIVE POSTER STUDIO
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right font-mono-code text-xs text-gray-400">
            <span>EXPERIMENTAL GRAPHIC CONSTRUCTION</span>
            <span className="block text-[#FF2A1F] font-bold mt-1">REAL-TIME SVG RENDERER</span>
          </div>
        </div>

        {/* Studio Workspace: Controls (Left) + Live Canvas (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-[#1E1E1E] border-2 border-white/30 p-6 space-y-6 font-mono-code text-xs">
            
            {/* Presets */}
            <div>
              <label className="text-[#FFE600] font-bold uppercase block mb-2">
                // SELECT BAUHAUS PRESET:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {presets.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setConfig({ ...config, ...p })}
                    className="py-2 px-2 border border-white/20 bg-black hover:border-[#FFE600] hover:text-[#FFE600] font-bold text-[10px] uppercase text-center transition-colors cursor-pointer"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Headline Inputs */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <div>
                <label className="text-gray-300 font-bold block mb-1">MAIN HEADLINE TEXT:</label>
                <input
                  type="text"
                  value={config.headline}
                  onChange={(e) => setConfig({ ...config, headline: e.target.value })}
                  className="w-full bg-black border border-white/30 p-2.5 text-white font-heavy text-sm uppercase focus:outline-none focus:border-[#FF2A1F]"
                />
              </div>

              <div>
                <label className="text-gray-300 font-bold block mb-1">SUB-CAPTION / SLOGAN:</label>
                <input
                  type="text"
                  value={config.subhead}
                  onChange={(e) => setConfig({ ...config, subhead: e.target.value })}
                  className="w-full bg-black border border-white/30 p-2.5 text-white text-xs uppercase focus:outline-none focus:border-[#FFE600]"
                />
              </div>
            </div>

            {/* Geometric Shape Picker */}
            <div className="pt-3 border-t border-white/10">
              <label className="text-[#FFE600] font-bold block mb-2">PRIMARY GEOMETRIC SHAPE:</label>
              <div className="grid grid-cols-4 gap-2">
                {(['circle', 'square', 'triangle', 'grid'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setConfig({ ...config, primaryShape: s })}
                    className={`py-2 border font-bold uppercase cursor-pointer text-center ${
                      config.primaryShape === s
                        ? 'bg-[#FF2A1F] text-white border-white'
                        : 'bg-black text-gray-400 border-white/20 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Accent Picker */}
            <div className="pt-3 border-t border-white/10">
              <label className="text-[#FFE600] font-bold block mb-2">PRIMARY ACCENT COLOR:</label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: 'Red', hex: '#FF2A1F' },
                  { name: 'Yellow', hex: '#FFE600' },
                  { name: 'Blue', hex: '#0055FF' },
                  { name: 'Black', hex: '#121212' },
                ].map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setConfig({ ...config, shapeColor: c.hex as any })}
                    className={`h-9 border border-white/30 font-bold text-[10px] uppercase cursor-pointer flex items-center justify-center ${
                      config.shapeColor === c.hex ? 'ring-2 ring-white scale-105' : 'opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex, color: c.hex === '#FFE600' ? '#121212' : '#FFFFFF' }}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size & Rotation Sliders */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">SHAPE SIZE:</span>
                  <span className="text-[#FFE600] font-bold">{config.shapeSize}px</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="220"
                  value={config.shapeSize}
                  onChange={(e) => setConfig({ ...config, shapeSize: Number(e.target.value) })}
                  className="w-full accent-[#FF2A1F]"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">ROTATION ANGLE:</span>
                  <span className="text-[#FFE600] font-bold">{config.rotation}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={config.rotation}
                  onChange={(e) => setConfig({ ...config, rotation: Number(e.target.value) })}
                  className="w-full accent-[#0055FF]"
                />
              </div>
            </div>

            {/* Grid Line Toggle */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <span className="text-gray-300 font-bold">CONSTRUCTION LINES:</span>
              <button
                onClick={() => setConfig({ ...config, gridLines: !config.gridLines })}
                className={`px-3 py-1 border font-bold text-xs cursor-pointer ${
                  config.gridLines ? 'bg-[#0055FF] text-white' : 'bg-black text-gray-400'
                }`}
              >
                {config.gridLines ? 'ENABLED' : 'DISABLED'}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex gap-3">
              <button
                onClick={handleCopySvg}
                className="flex-1 py-3 bg-[#FFE600] text-[#121212] font-heavy text-xs uppercase tracking-wider border-2 border-white cursor-pointer hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'SVG COPIED!' : 'COPY SVG CODE'}</span>
              </button>
            </div>

          </div>

          {/* Poster Render Frame (Right Column) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="border-8 border-white bg-[#121212] shadow-[20px_20px_0px_0px_#FF2A1F] max-w-lg w-full relative p-4">
              
              {/* SVG Canvas Render Container */}
              <div
                className="w-full aspect-[5/7] relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-colors duration-500 border-2 border-[#121212]"
                style={{ backgroundColor: config.bgColor }}
              >
                {/* Construction Grid Lines Overlay */}
                {config.gridLines && (
                  <div className="absolute inset-0 bg-bauhaus-grid opacity-30 pointer-events-none" />
                )}

                {/* Top Poster Typography */}
                <div className="relative z-10 space-y-1">
                  <span className="font-mono-code text-[10px] tracking-widest uppercase block font-bold text-gray-500">
                    BAUHAUS DESSAU POSTER ARCHIVE // NO. 1919
                  </span>
                  <h3
                    className="font-heavy text-3xl sm:text-4xl lg:text-5xl tracking-tighter uppercase leading-none"
                    style={{ color: config.bgColor === '#121212' ? '#F6F5F0' : '#121212' }}
                  >
                    {config.headline}
                  </h3>
                  <p
                    className="font-mono-code text-xs font-bold uppercase tracking-wider"
                    style={{ color: config.shapeColor }}
                  >
                    {config.subhead}
                  </p>
                </div>

                {/* Central Dynamic Geometric Primary Shape */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="transition-all duration-300"
                    style={{
                      transform: `rotate(${config.rotation}deg)`,
                    }}
                  >
                    {config.primaryShape === 'circle' && (
                      <div
                        className="rounded-full shadow-2xl transition-all duration-300"
                        style={{
                          width: `${config.shapeSize * 1.6}px`,
                          height: `${config.shapeSize * 1.6}px`,
                          backgroundColor: config.shapeColor,
                        }}
                      />
                    )}

                    {config.primaryShape === 'square' && (
                      <div
                        className="shadow-2xl transition-all duration-300"
                        style={{
                          width: `${config.shapeSize * 1.5}px`,
                          height: `${config.shapeSize * 1.5}px`,
                          backgroundColor: config.shapeColor,
                        }}
                      />
                    )}

                    {config.primaryShape === 'triangle' && (
                      <div
                        className="w-0 h-0 transition-all duration-300"
                        style={{
                          borderLeft: `${config.shapeSize * 0.9}px solid transparent`,
                          borderRight: `${config.shapeSize * 0.9}px solid transparent`,
                          borderBottom: `${config.shapeSize * 1.5}px solid ${config.shapeColor}`,
                        }}
                      />
                    )}

                    {config.primaryShape === 'grid' && (
                      <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 border border-[#121212]"
                            style={{ backgroundColor: i % 2 === 0 ? config.shapeColor : '#121212' }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Intersecting Decorative Line */}
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-[#121212] opacity-30" />

                {/* Bottom Footer Details */}
                <div className="relative z-10 flex items-end justify-between font-mono-code text-[11px] pt-4 border-t border-[#121212]/30">
                  <div style={{ color: config.bgColor === '#121212' ? '#F6F5F0' : '#121212' }}>
                    <span className="block font-bold">WEIMAR - DESSAU - BERLIN</span>
                    <span className="text-gray-500 text-[10px]">FORM & FUNCTION AGENCY</span>
                  </div>
                  <div className="text-right font-heavy text-lg text-[#FF2A1F]">
                    1919
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
