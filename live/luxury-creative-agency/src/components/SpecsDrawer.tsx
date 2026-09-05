import React, { useState } from 'react';
import { ThemeMode, FontStyle } from '../types';
import { CSS_SPECIFICATIONS } from '../data';
import { X, Check, Copy, Code, Terminal, Ruler, ShieldCheck } from 'lucide-react';

interface SpecsDrawerProps {
  isOpen: boolean;
  theme: ThemeMode;
  fontStyle: FontStyle;
  onClose: () => void;
}

export const SpecsDrawer: React.FC<SpecsDrawerProps> = ({
  isOpen,
  theme,
  fontStyle,
  onClose
}) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'specs' | 'css'>('specs');
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const handleCopyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(index);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const rawCSSCode = `/* MAISON NOIR — EDITORIAL MONOCHROME ARCHITECTURE */

:root {
  --bg-void: #000000;
  --text-pure: #ffffff;
  --font-hero: '${fontStyle === 'bodoni' ? 'Bodoni Moda' : 'Playfair Display'}', serif;
  --font-mono: 'Space Mono', monospace;
  --grid-gap: 120px;
  --padding-outer: clamp(1.5rem, 5vw, 4rem);
}

.hero-headline {
  font-family: var(--font-hero);
  font-size: clamp(3.5rem, 10.5vw, 12.5rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  font-weight: 900;
  text-transform: uppercase;
}

.editorial-portrait {
  aspect-ratio: 3 / 4;
  filter: grayscale(100%) contrast(110%);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.negative-space-container {
  padding: var(--padding-outer);
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 2rem;
}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex justify-end animate-in fade-in duration-300">
      <div
        className={`w-full max-w-2xl h-full flex flex-col justify-between border-l p-6 md:p-10 transition-colors duration-300 overflow-y-auto ${
          isDark
            ? 'bg-black text-white border-white/20'
            : 'bg-white text-black border-black/20'
        }`}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-current/20">
            <div className="flex items-center gap-3">
              <Ruler className="w-5 h-5 opacity-80" />
              <div>
                <h2 className="font-serif-editorial text-2xl uppercase tracking-tight font-bold">
                  HTML / CSS PRECISION SPECS
                </h2>
                <p className="font-mono-editorial text-[10px] tracking-widest opacity-60 uppercase mt-0.5">
                  STRUCTURAL ARCHITECTURE & TYPOGRAPHY METRICS
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-current/30 hover:border-current transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-4 mt-6 border-b border-current/10 pb-4 font-mono-editorial text-xs tracking-widest uppercase">
            <button
              onClick={() => setActiveTab('specs')}
              className={`flex items-center gap-2 pb-1 transition-all ${
                activeTab === 'specs'
                  ? 'border-b-2 border-current font-bold opacity-100'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>DESIGN METRICS</span>
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`flex items-center gap-2 pb-1 transition-all ${
                activeTab === 'css'
                  ? 'border-b-2 border-current font-bold opacity-100'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>RAW CSS SOURCE</span>
            </button>
          </div>

          {/* Specs Content */}
          {activeTab === 'specs' ? (
            <div className="mt-8 space-y-6">
              {CSS_SPECIFICATIONS.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 border border-current/15 relative group transition-colors hover:border-current/40"
                >
                  <div className="flex items-center justify-between font-mono-editorial text-[10px] tracking-widest opacity-60 uppercase mb-2">
                    <span>{spec.label}</span>
                    <span className="font-bold">{spec.selector}</span>
                  </div>

                  <div className="font-mono-editorial text-sm font-bold tracking-tight mb-2 flex items-center justify-between">
                    <code>{spec.value}</code>
                    <button
                      onClick={() => handleCopyCode(spec.value, i)}
                      className="opacity-0 group-hover:opacity-100 p-1 border border-current/30 hover:bg-current hover:text-black transition-all"
                      title="Copy Value"
                    >
                      {copiedIdx === i ? (
                        <Check className="w-3.5 h-3.5 text-green-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <p className="font-mono-editorial text-xs opacity-75 leading-relaxed">
                    {spec.purpose}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 relative">
              <div className="flex items-center justify-between font-mono text-xs opacity-60 mb-2 uppercase">
                <span>/src/styles/editorial-architecture.css</span>
                <button
                  onClick={() => handleCopyCode(rawCSSCode, 99)}
                  className="flex items-center gap-1.5 px-2 py-1 border border-current/30 hover:bg-current hover:text-black transition-all"
                >
                  {copiedIdx === 99 ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY CSS</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 border border-current/20 font-mono text-xs leading-relaxed overflow-x-auto bg-current/5 selection:bg-current selection:text-black">
                {rawCSSCode}
              </pre>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="pt-8 mt-8 border-t border-current/20 flex items-center justify-between font-mono-editorial text-[10px] tracking-widest opacity-60 uppercase">
          <span>HTML/CSS PRECISION VERIFIED</span>
          <span>PIXEL ACCURACY 100%</span>
        </div>
      </div>
    </div>
  );
};
