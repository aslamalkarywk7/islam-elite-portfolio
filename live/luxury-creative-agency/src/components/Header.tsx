import React from 'react';
import { ThemeMode } from '../types';
import { Sliders, FileText, Globe, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  theme: ThemeMode;
  lookbookIndex: number;
  onOpenManifesto: () => void;
  onOpenSpecs: () => void;
  onToggleLookbook: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  lookbookIndex,
  onOpenManifesto,
  onOpenSpecs,
  onToggleLookbook
}) => {
  const isDark = theme === 'dark';

  return (
    <header
      className={`w-full px-6 md:px-12 py-6 md:py-8 flex items-center justify-between transition-colors duration-500 relative z-30 border-b ${
        isDark ? 'border-white/10 text-white' : 'border-black/10 text-black'
      }`}
    >
      {/* Brand & Edition */}
      <div className="flex items-center gap-8">
        <a
          href="#top"
          className="group flex flex-col cursor-pointer focus:outline-none"
        >
          <span className="font-serif-massive text-2xl md:text-3xl font-extrabold tracking-tight uppercase leading-none">
            MAISON NOIR
          </span>
          <span className="micro-label opacity-60 mt-1">
            CREATIVE AGENCY / EST. MMXXIV
          </span>
        </a>

        {/* Location indicators */}
        <div className="hidden lg:flex items-center gap-3 micro-label opacity-60 border-l border-current/20 pl-6 py-0.5">
          <Globe className="w-3 h-3 opacity-70" />
          <span>PARIS</span>
          <span>•</span>
          <span>TOKYO</span>
          <span>•</span>
          <span>NEW YORK</span>
        </div>
      </div>

      {/* Center Lookbook Switcher Pill */}
      <button
        onClick={onToggleLookbook}
        className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 border font-mono-editorial text-[10px] tracking-widest uppercase transition-all duration-300 hover:scale-105 ${
          isDark
            ? 'border-white/20 hover:border-white hover:bg-white hover:text-black'
            : 'border-black/20 hover:border-black hover:bg-black hover:text-white'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        <span>EDITION N°0{lookbookIndex + 1}</span>
        <span className="opacity-40">/ 02</span>
      </button>

      {/* Right Navigation Controls */}
      <div className="flex items-center gap-4 md:gap-6">
        <button
          onClick={onOpenSpecs}
          className={`flex items-center gap-2 text-xs font-mono-editorial tracking-widest uppercase py-1 px-2.5 transition-opacity duration-300 hover:opacity-100 ${
            isDark ? 'opacity-70 hover:text-white' : 'opacity-70 hover:text-black'
          }`}
          title="HTML/CSS Precision Inspector"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span className="hidden md:inline">CSS SPECS</span>
        </button>

        <button
          onClick={onOpenManifesto}
          className={`group flex items-center gap-2 font-mono-editorial text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
            isDark
              ? 'border-white/30 text-white hover:bg-white hover:text-black'
              : 'border-black/30 text-black hover:bg-black hover:text-white'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>MANIFESTO</span>
          <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </header>
  );
};
