import React, { useState } from 'react';
import { Layers, Sliders, Image as ImageIcon, Sparkles, Check, RefreshCcw } from 'lucide-react';

interface ColorOverlaySandboxProps {
  showGridLines: boolean;
}

export const ColorOverlaySandbox: React.FC<ColorOverlaySandboxProps> = ({ showGridLines }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>('/src/assets/images/bauhaus_architect_portrait_1785197705462.jpg');
  const [overlayShape, setOverlayShape] = useState<'circle' | 'square' | 'triangle' | 'diagonal'>('circle');
  const [overlayColor, setOverlayColor] = useState<string>('#FF2A1F');
  const [blendMode, setBlendMode] = useState<string>('multiply');
  const [opacity, setOpacity] = useState<number>(85);
  const [scale, setScale] = useState<number>(100);

  const photos = [
    {
      name: '01 // ARCHITECT PORTRAIT',
      url: '/src/assets/images/bauhaus_architect_portrait_1785197705462.jpg',
    },
    {
      name: '02 // PAVILION STRUCTURE',
      url: '/src/assets/images/bauhaus_structure_1785197717338.jpg',
    },
    {
      name: '03 // STUDIO INTERIOR',
      url: '/src/assets/images/bauhaus_interior_1785197728511.jpg',
    },
  ];

  const blendModes = [
    { label: 'Multiply', value: 'multiply' },
    { label: 'Hard Light', value: 'hard-light' },
    { label: 'Overlay', value: 'overlay' },
    { label: 'Difference', value: 'difference' },
    { label: 'Screen', value: 'screen' },
  ];

  return (
    <section id="sandbox" className="bg-[#FFFFFF] py-16 md:py-24 border-b-2 border-[#121212] relative">
      {/* Grid background */}
      <div className={`absolute inset-0 ${showGridLines ? 'bg-bauhaus-grid-dense' : ''} pointer-events-none opacity-20`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 items-end mb-12 pb-6 border-b-2 border-[#121212]">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-2">
              <Layers className="w-4 h-4 text-[#FF2A1F]" />
              <span>DESATURATED PHOTOGRAPHY & GEOMETRIC OVERLAY SANDBOX</span>
            </div>
            <h2 className="font-heavy text-4xl sm:text-6xl text-[#121212] tracking-tighter uppercase leading-none">
              COLOR OVERLAY LAB
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right font-mono-code text-xs text-gray-700">
            <span>CHROMATIC INTERACTION SYSTEM</span>
            <span className="block text-[#FF2A1F] font-bold mt-1">BLACK & WHITE + PRIMARY MASK</span>
          </div>
        </div>

        {/* Sandbox Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Settings Panel */}
          <div className="lg:col-span-5 bg-[#F6F5F0] border-2 border-[#121212] p-6 space-y-6 font-mono-code text-xs shadow-[8px_8px_0px_0px_#121212]">
            
            {/* Photo Selector */}
            <div>
              <label className="text-[#FF2A1F] font-bold uppercase block mb-2">
                1. SELECT DESATURATED B&W PHOTO:
              </label>
              <div className="space-y-2">
                {photos.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPhoto(p.url)}
                    className={`w-full text-left p-3 border-2 border-[#121212] font-bold text-xs flex items-center justify-between transition-colors cursor-pointer ${
                      selectedPhoto === p.url ? 'bg-[#121212] text-[#FFE600]' : 'bg-white text-[#121212] hover:bg-[#FFE600]'
                    }`}
                  >
                    <span>{p.name}</span>
                    {selectedPhoto === p.url && <Check className="w-4 h-4 text-[#FFE600]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Shape Overlay Selector */}
            <div className="pt-3 border-t border-[#121212]/20">
              <label className="text-[#0055FF] font-bold uppercase block mb-2">
                2. GEOMETRIC OVERLAY SHAPE:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['circle', 'square', 'triangle', 'diagonal'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setOverlayShape(s)}
                    className={`py-2 border-2 border-[#121212] font-bold uppercase text-center cursor-pointer ${
                      overlayShape === s ? 'bg-[#0055FF] text-white' : 'bg-white text-[#121212] hover:bg-gray-200'
                    }`}
                  >
                    {s[0].toUpperCase() + s.slice(1, 4)}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Accent Color */}
            <div className="pt-3 border-t border-[#121212]/20">
              <label className="text-[#121212] font-bold uppercase block mb-2">
                3. PRIMARY ACCENT COLOR:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: 'Red', hex: '#FF2A1F' },
                  { name: 'Yellow', hex: '#FFE600' },
                  { name: 'Blue', hex: '#0055FF' },
                  { name: 'Charcoal', hex: '#121212' },
                ].map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setOverlayColor(c.hex)}
                    className={`h-9 border-2 border-[#121212] font-bold text-[10px] uppercase cursor-pointer flex items-center justify-center ${
                      overlayColor === c.hex ? 'ring-2 ring-black scale-105' : 'opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex, color: c.hex === '#FFE600' ? '#121212' : '#FFFFFF' }}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CSS Blend Mode Selector */}
            <div className="pt-3 border-t border-[#121212]/20">
              <label className="text-[#FF2A1F] font-bold uppercase block mb-2">
                4. CSS BLEND MODE:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {blendModes.map((bm) => (
                  <button
                    key={bm.value}
                    onClick={() => setBlendMode(bm.value)}
                    className={`py-2 px-2 border-2 border-[#121212] font-bold text-[10px] uppercase cursor-pointer text-center ${
                      blendMode === bm.value ? 'bg-[#FF2A1F] text-white' : 'bg-white text-[#121212] hover:bg-gray-200'
                    }`}
                  >
                    {bm.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Opacity & Scale Sliders */}
            <div className="space-y-3 pt-3 border-t border-[#121212]/20">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-700 font-bold">OVERLAY OPACITY:</span>
                  <span className="text-[#0055FF] font-bold">{opacity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full accent-[#0055FF]"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-700 font-bold">SHAPE SCALE:</span>
                  <span className="text-[#FF2A1F] font-bold">{scale}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="180"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="w-full accent-[#FF2A1F]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Live Render Box */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="border-4 border-[#121212] bg-[#121212] p-4 shadow-[12px_12px_0px_0px_#FFE600] max-w-xl w-full">
              
              {/* Photo Display Frame */}
              <div className="relative aspect-[4/3] bg-black overflow-hidden border-2 border-white">
                
                {/* Desaturated B&W Photo */}
                <img
                  src={selectedPhoto}
                  alt="Desaturated Bauhaus Photography"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125"
                />

                {/* Live Geometric Color Overlay Shape */}
                {overlayShape === 'circle' && (
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-300"
                    style={{
                      width: `${180 * (scale / 100)}px`,
                      height: `${180 * (scale / 100)}px`,
                      backgroundColor: overlayColor,
                      mixBlendMode: blendMode as any,
                      opacity: opacity / 100,
                    }}
                  />
                )}

                {overlayShape === 'square' && (
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300"
                    style={{
                      width: `${180 * (scale / 100)}px`,
                      height: `${180 * (scale / 100)}px`,
                      backgroundColor: overlayColor,
                      mixBlendMode: blendMode as any,
                      opacity: opacity / 100,
                    }}
                  />
                )}

                {overlayShape === 'triangle' && (
                  <div
                    className="absolute bottom-0 right-0 w-0 h-0 pointer-events-none transition-all duration-300"
                    style={{
                      borderLeft: `${160 * (scale / 100)}px solid transparent`,
                      borderBottom: `${160 * (scale / 100)}px solid ${overlayColor}`,
                      mixBlendMode: blendMode as any,
                      opacity: opacity / 100,
                    }}
                  />
                )}

                {overlayShape === 'diagonal' && (
                  <div
                    className="absolute inset-x-0 top-1/3 pointer-events-none transition-all duration-300"
                    style={{
                      height: `${50 * (scale / 100)}px`,
                      backgroundColor: overlayColor,
                      mixBlendMode: blendMode as any,
                      opacity: opacity / 100,
                    }}
                  />
                )}

                {/* Spec Readout Overlay Tag */}
                <div className="absolute top-3 right-3 bg-[#121212]/90 text-white font-mono-code text-[10px] p-2 border border-white space-y-0.5">
                  <div>COLOR: <span className="font-bold text-[#FFE600]">{overlayColor}</span></div>
                  <div>BLEND: <span className="font-bold text-[#FF2A1F]">{blendMode.toUpperCase()}</span></div>
                  <div>OPACITY: <span className="font-bold text-[#0055FF]">{opacity}%</span></div>
                </div>

              </div>

              {/* Bottom Caption Box */}
              <div className="pt-3 flex justify-between items-center font-mono-code text-xs text-white">
                <span>BAUHAUS COMPOSITION EXPERIMENT</span>
                <span className="text-[#FFE600] font-bold">FIG. 2026 / CHROMATIC</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
