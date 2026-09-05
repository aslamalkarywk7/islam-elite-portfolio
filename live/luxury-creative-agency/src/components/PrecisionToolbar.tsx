import React from 'react';
import { ThemeMode, FontStyle } from '../types';
import {
  Grid,
  Sun,
  Moon,
  Type,
  Sliders,
  MousePointer,
  RefreshCw,
  Layers
} from 'lucide-react';

interface PrecisionToolbarProps {
  theme: ThemeMode;
  fontStyle: FontStyle;
  showGrid: boolean;
  cursorEnabled: boolean;
  lookbookIndex: number;
  onToggleTheme: () => void;
  onToggleGrid: () => void;
  onToggleFont: () => void;
  onToggleCursor: () => void;
  onToggleLookbook: () => void;
  onOpenSpecs: () => void;
}

export const PrecisionToolbar: React.FC<PrecisionToolbarProps> = ({
  theme,
  fontStyle,
  showGrid,
  cursorEnabled,
  lookbookIndex,
  onToggleTheme,
  onToggleGrid,
  onToggleFont,
  onToggleCursor,
  onToggleLookbook,
  onOpenSpecs
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]">
      <div
        className={`flex items-center gap-1.5 p-1.5 rounded-full border backdrop-blur-xl shadow-2xl transition-all duration-300 font-mono-editorial text-[10px] tracking-widest uppercase ${
          isDark
            ? 'bg-black/90 border-white/20 text-white shadow-white/5'
            : 'bg-white/90 border-black/20 text-black shadow-black/5'
        }`}
      >
        {/* Precision Title Tag */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 opacity-60 border-r border-current/20">
          <Layers className="w-3 h-3" />
          <span>HTML/CSS TOOLBAR</span>
        </div>

        {/* Theme Inversion Button */}
        <button
          onClick={onToggleTheme}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 ${
            isDark
              ? 'border-white/20 hover:bg-white hover:text-black'
              : 'border-black/20 hover:bg-black hover:text-white'
          }`}
          title="Toggle Monochrome Theme (Dark / Light)"
        >
          {isDark ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
          <span className="hidden md:inline">{isDark ? 'LIGHT' : 'DARK'}</span>
        </button>

        {/* Alignment Grid Overlay Toggle */}
        <button
          onClick={onToggleGrid}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 ${
            showGrid
              ? isDark
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-black'
              : isDark
              ? 'border-white/20 hover:border-white'
              : 'border-black/20 hover:border-black'
          }`}
          title="Toggle Alignment Grid Overlay"
        >
          <Grid className="w-3 h-3" />
          <span className="hidden md:inline">GRID</span>
          <span className="text-[9px] opacity-60">[{showGrid ? 'ON' : 'OFF'}]</span>
        </button>

        {/* Font Style Switcher */}
        <button
          onClick={onToggleFont}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 ${
            isDark
              ? 'border-white/20 hover:bg-white hover:text-black'
              : 'border-black/20 hover:bg-black hover:text-white'
          }`}
          title="Cycle Bold Serif Font Family"
        >
          <Type className="w-3 h-3" />
          <span className="hidden md:inline">{fontStyle.toUpperCase()}</span>
        </button>

        {/* Lookbook Edition Switcher */}
        <button
          onClick={onToggleLookbook}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 ${
            isDark
              ? 'border-white/20 hover:bg-white hover:text-black'
              : 'border-black/20 hover:bg-black hover:text-white'
          }`}
          title="Switch Lookbook Composition"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="hidden md:inline">EDITION 0{lookbookIndex + 1}</span>
        </button>

        {/* Custom Crosshair Cursor Toggle */}
        <button
          onClick={onToggleCursor}
          className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 ${
            cursorEnabled
              ? isDark
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-black'
              : isDark
              ? 'border-white/20 hover:border-white'
              : 'border-black/20 hover:border-black'
          }`}
          title="Toggle Crosshair Precision Cursor"
        >
          <MousePointer className="w-3 h-3" />
          <span>CROSSHAIR</span>
        </button>

        {/* CSS Specifications Inspector */}
        <button
          onClick={onOpenSpecs}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold border transition-all duration-200 ${
            isDark
              ? 'bg-white text-black border-white hover:bg-neutral-200'
              : 'bg-black text-white border-black hover:bg-neutral-800'
          }`}
          title="Open CSS Precision Specifications"
        >
          <Sliders className="w-3 h-3" />
          <span>SPECS</span>
        </button>
      </div>
    </div>
  );
};
