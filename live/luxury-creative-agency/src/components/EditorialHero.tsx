import React, { useState } from 'react';
import { ThemeMode, FontStyle } from '../types';
import { EDITORIAL_HEADLINES } from '../data';
import { Maximize2, Sparkles, Code2, ArrowRight } from 'lucide-react';

interface EditorialHeroProps {
  theme: ThemeMode;
  fontStyle: FontStyle;
  lookbookIndex: number;
  showGrid: boolean;
  onOpenSpecs: () => void;
  onOpenManifesto: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  theme,
  fontStyle,
  lookbookIndex,
  showGrid,
  onOpenSpecs,
  onOpenManifesto
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [hoverImage, setHoverImage] = useState(false);
  const currentHero = EDITORIAL_HEADLINES[lookbookIndex] || EDITORIAL_HEADLINES[0];

  const isDark = theme === 'dark';

  // Font class selection
  const fontClass =
    fontStyle === 'bodoni'
      ? 'font-serif-editorial'
      : fontStyle === 'playfair'
      ? 'font-serif-display'
      : 'font-serif';

  return (
    <main
      className={`relative min-h-[calc(100vh-88px)] w-full flex flex-col justify-between px-6 md:px-12 lg:px-16 py-8 md:py-16 transition-colors duration-500 overflow-hidden ${
        showGrid ? (isDark ? 'grid-overlay-dark' : 'grid-overlay-light') : ''
      }`}
    >
      {/* Top Editorial Index & Coordinates Bar */}
      <div className="w-full flex flex-wrap items-start justify-between gap-4 z-10 font-mono-editorial text-[10px] md:text-xs tracking-[0.25em] uppercase opacity-70">
        <div className="flex items-center gap-4">
          <span className="inline-block w-2 h-2 bg-current" />
          <span className="micro-label">INDEX NO. {currentHero.code}</span>
          <span className="hidden sm:inline opacity-40">/</span>
          <span className="hidden sm:inline micro-label opacity-80">SELECTION VOL. 01</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden md:inline micro-label opacity-60">LAT 48.8566° N, LON 2.3522° E</span>
          <span className="border border-current/40 px-2.5 py-1 micro-label font-bold tracking-[0.3em]">
            EDITORIAL PRECISION 1.000
          </span>
        </div>
      </div>

      {/* Side Vertical Text Decorator Accent */}
      <div className="hidden xl:flex absolute left-6 bottom-32 z-10 items-end gap-4 pointer-events-none opacity-40">
        <div className="vertical-text flex items-center justify-between border-l border-current/20 pl-2 pt-4">
          <span className="micro-label whitespace-nowrap">SELECTION VOL. 01 — NOIR & CO.</span>
        </div>
      </div>

      {/* Main Structural Layout Grid: Massive Typography + Negative Space + Portrait */}
      <div className="my-auto py-12 md:py-20 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left / Center Column: Massive Bold Serif Typography & Subtitle (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 md:space-y-12">
          
          {/* Large Headline */}
          <div className="relative group">
            {/* Structural corner crosshair for brutalist lookbook effect */}
            <div className="absolute -top-6 -left-4 micro-label opacity-40 select-none">
              + 01.01 ART DIRECTION
            </div>

            <h1
              className={`${fontClass} font-black uppercase leading-[0.88] tracking-[-0.04em] text-balance transition-all duration-700 ${
                isDark ? 'text-white' : 'text-black'
              }`}
              style={{
                fontSize: 'clamp(3.5rem, 10.5vw, 12.5rem)',
                textShadow: isDark
                  ? '0 0 80px rgba(255,255,255,0.05)'
                  : '0 0 80px rgba(0,0,0,0.05)'
              }}
            >
              {currentHero.main}
            </h1>
          </div>

          {/* Excessive Negative Space Divider */}
          <div className="flex items-center gap-4">
            <div className="w-16 md:w-24 h-[1px] bg-current opacity-40" />
            <span className="micro-label opacity-50">PURE FORM & STRUCTURAL BRUTALISM</span>
          </div>

          {/* Small Line of Text / Subtitle */}
          <div className="max-w-xl space-y-4">
            <p className="font-mono-editorial text-xs md:text-sm tracking-[0.2em] leading-relaxed uppercase opacity-85">
              {currentHero.sub}
            </p>
            <div className="flex flex-wrap items-center gap-4 micro-label opacity-60 uppercase pt-1">
              <span>DESIGN DISCIPLINE // BRUTALIST MINIMALISM</span>
              <span>•</span>
              <span>HAUTE CREATIVE ARCHITECTURE</span>
            </div>
          </div>

          {/* CTA Action Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenManifesto}
              className={`group px-6 py-3.5 border font-mono-editorial text-xs tracking-[0.25em] uppercase flex items-center gap-3 transition-all duration-300 ${
                isDark
                  ? 'border-white text-white bg-black hover:bg-white hover:text-black'
                  : 'border-black text-black bg-white hover:bg-black hover:text-white'
              }`}
            >
              <span>EXPLORE AGENCY MANIFESTO</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenSpecs}
              className="flex items-center gap-2 font-mono-editorial text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity underline underline-offset-4"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>VIEW CSS ARCHITECTURE</span>
            </button>
          </div>
        </div>

        {/* Right Column: Desaturated Portrait with High-Fashion Lookbook Framing (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
          <div
            className="relative group w-full max-w-sm md:max-w-md"
            onMouseEnter={() => setHoverImage(true)}
            onMouseLeave={() => setHoverImage(false)}
          >
            {/* Architectural Frame Corner Crosshairs */}
            <div className="absolute -top-3 -left-3 font-mono text-[10px] opacity-40 select-none z-20">
              + TL
            </div>
            <div className="absolute -top-3 -right-3 font-mono text-[10px] opacity-40 select-none z-20">
              TR +
            </div>
            <div className="absolute -bottom-3 -left-3 font-mono text-[10px] opacity-40 select-none z-20">
              + BL
            </div>
            <div className="absolute -bottom-3 -right-3 font-mono text-[10px] opacity-40 select-none z-20">
              BR +
            </div>

            {/* Main Portrait Container */}
            <div
              className={`relative overflow-hidden border transition-all duration-700 aspect-[3/4] cursor-pointer ${
                isDark
                  ? 'border-white/20 hover:border-white shadow-2xl shadow-white/5'
                  : 'border-black/20 hover:border-black shadow-2xl shadow-black/5'
              }`}
              onClick={() => setIsZoomed(true)}
            >
              {/* Studio Light Highlight Sweep Overlay */}
              <div
                className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-700 bg-gradient-to-tr ${
                  isDark
                    ? 'from-white/0 via-white/10 to-white/0'
                    : 'from-black/0 via-black/10 to-black/0'
                } ${hoverImage ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* The Desaturated High-Quality Portrait */}
              <img
                src={currentHero.portrait}
                alt={currentHero.caption}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover grayscale transition-transform duration-1000 ease-out ${
                  hoverImage ? 'scale-105 filter contrast-125' : 'scale-100 filter contrast-110'
                }`}
              />

              {/* Lookbook Badge Overlay */}
              <div
                className={`absolute top-4 left-4 z-20 px-2.5 py-1 text-[9px] font-mono-editorial tracking-widest uppercase border backdrop-blur-md transition-all duration-300 ${
                  isDark
                    ? 'border-white/30 bg-black/70 text-white'
                    : 'border-black/30 bg-white/70 text-black'
                }`}
              >
                STUDIO LIGHTING / 8K
              </div>

              {/* Zoom Action Icon */}
              <button
                className={`absolute bottom-4 right-4 z-20 p-2.5 border transition-all duration-300 ${
                  isDark
                    ? 'border-white/30 bg-black/80 text-white hover:bg-white hover:text-black'
                    : 'border-black/30 bg-white/80 text-black hover:bg-black hover:text-white'
                }`}
                title="Expand Portrait Lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Editorial Caption under image */}
            <div className="mt-3 flex items-center justify-between font-mono-editorial text-[10px] tracking-widest opacity-60 uppercase">
              <span>{currentHero.caption}</span>
              <span>{currentHero.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footer / Layout Coordinates Bar */}
      <div className="w-full pt-8 z-10 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-editorial text-[10px] tracking-widest opacity-60 uppercase">
        <div className="flex items-center gap-6">
          <span>STRUCTURAL HIERARCHY: STRICT</span>
          <span>•</span>
          <span>MONOCHROME PALETTE</span>
        </div>
        <div className="flex items-center gap-6">
          <span>NEGATIVE SPACE: MAXIMUM</span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            <span>EDITORIAL LOOKBOOK</span>
          </span>
        </div>
      </div>

      {/* Portrait Fullscreen Lightbox Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-[85vh] border border-white/30 p-2 bg-black">
            <img
              src={currentHero.portrait}
              alt="High Resolution Studio Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain grayscale filter contrast-125"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs tracking-widest bg-black/80 px-4 py-2 border border-white/20">
              <span>{currentHero.caption} — HIGH RESOLUTION STUDIO PORTRAIT</span>
              <span>CLICK ANYWHERE TO CLOSE</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
