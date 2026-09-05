import React, { useState } from 'react';
import { ViewMode, GridConfig, RedVariant } from '../types';
import { Grid, Monitor, Maximize2, Sliders, Sparkles, ChevronUp, ChevronDown, Check, Layers, Palette } from 'lucide-react';

interface GridInspectorToolbarProps {
  viewMode: ViewMode;
  onSelectViewMode: (mode: ViewMode) => void;
  gridConfig: GridConfig;
  onUpdateGridConfig: (config: Partial<GridConfig>) => void;
  onOpenPosterPlayground: () => void;
}

const RED_VARIANTS: { hex: RedVariant; label: string }[] = [
  { hex: '#E30613', label: 'Classic Swiss Red' },
  { hex: '#FF0000', label: 'Pure RGB Red' },
  { hex: '#C8102E', label: 'Flag Crimson' },
  { hex: '#D00000', label: 'International Red' },
];

export const GridInspectorToolbar: React.FC<GridInspectorToolbarProps> = ({
  viewMode,
  onSelectViewMode,
  gridConfig,
  onUpdateGridConfig,
  onOpenPosterPlayground,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[92%] sm:w-auto">
      
      {/* EXPANDED CONTROLS PANEL */}
      {isExpanded && (
        <div className="mb-3 bg-black/95 text-white border-2 border-white/20 p-5 rounded-2xl shadow-2xl backdrop-blur-xl font-mono text-xs space-y-4 transition-all animate-in fade-in slide-in-from-bottom-2">
          
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#E30613]" />
              <span className="font-bold text-sm tracking-wider uppercase font-swiss">
                SWISS GRID & ACCENT SPECIFICATIONS
              </span>
            </div>
            <span className="text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded">
              CH-GRID SYSTEM
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Grid Line Toggles */}
            <div className="space-y-2">
              <span className="text-[10px] text-white/50 uppercase font-bold block">
                ALIGNMENT OVERLAYS
              </span>
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center justify-between p-2 rounded bg-white/5 hover:bg-white/10 cursor-pointer">
                  <span className="flex items-center gap-2">
                    <Grid className="w-3.5 h-3.5 text-[#E30613]" />
                    <span>Vertical Column Grid</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={gridConfig.showColumns}
                    onChange={(e) => onUpdateGridConfig({ showColumns: e.target.checked })}
                    className="accent-[#E30613]"
                  />
                </label>

                <label className="flex items-center justify-between p-2 rounded bg-white/5 hover:bg-white/10 cursor-pointer">
                  <span className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#E30613]" />
                    <span>Baseline Horizontal Rules</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={gridConfig.showBaseline}
                    onChange={(e) => onUpdateGridConfig({ showBaseline: e.target.checked })}
                    className="accent-[#E30613]"
                  />
                </label>

                <label className="flex items-center justify-between p-2 rounded bg-white/5 hover:bg-white/10 cursor-pointer">
                  <span className="flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5 text-[#E30613]" />
                    <span>Margin Boundaries</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={gridConfig.showMargins}
                    onChange={(e) => onUpdateGridConfig({ showMargins: e.target.checked })}
                    className="accent-[#E30613]"
                  />
                </label>
              </div>
            </div>

            {/* Red Color Accent & Columns Count */}
            <div className="space-y-3">
              <div>
                <span className="text-[10px] text-white/50 uppercase font-bold block mb-1.5">
                  MODULAR COLUMNS
                </span>
                <div className="flex gap-2">
                  {([3, 6, 12] as const).map((cols) => (
                    <button
                      key={cols}
                      onClick={() => onUpdateGridConfig({ columnCount: cols })}
                      className={`flex-1 py-1.5 border rounded text-center transition-all ${
                        gridConfig.columnCount === cols
                          ? 'bg-[#E30613] border-[#E30613] text-white font-bold'
                          : 'border-white/20 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      {cols} COLS
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] text-white/50 uppercase font-bold block mb-1.5">
                  SWISS RED ACCENT VARIANT
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {RED_VARIANTS.map((variant) => (
                    <button
                      key={variant.hex}
                      onClick={() => onUpdateGridConfig({ redAccent: variant.hex })}
                      className={`flex items-center gap-2 p-1.5 border rounded text-[10px] text-left transition-all ${
                        gridConfig.redAccent === variant.hex
                          ? 'border-white bg-white/20 text-white font-bold'
                          : 'border-white/10 bg-white/5 hover:bg-white/10 text-white/70'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/50"
                        style={{ backgroundColor: variant.hex }}
                      />
                      <span className="truncate">{variant.label.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FLOATING PRIMARY BAR */}
      <div className="bg-black text-white border-2 border-white/20 px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-2xl flex items-center justify-between gap-3 font-mono text-xs">
        
        {/* View Mode Segmented Switch */}
        <div className="flex items-center bg-white/10 p-1 rounded-xl gap-1">
          <button
            onClick={() => onSelectViewMode('mockup')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-bold cursor-pointer ${
              viewMode === 'mockup'
                ? 'bg-[#E30613] text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">DESK MOCKUP</span>
          </button>

          <button
            onClick={() => onSelectViewMode('fullscreen')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-bold cursor-pointer ${
              viewMode === 'fullscreen'
                ? 'bg-[#E30613] text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">FULL PAGE</span>
          </button>
        </div>

        {/* Quick Grid Overlay Toggle */}
        <button
          onClick={() => onUpdateGridConfig({ showColumns: !gridConfig.showColumns })}
          className={`px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 font-bold ${
            gridConfig.showColumns
              ? 'border-[#E30613] bg-[#E30613]/20 text-[#E30613]'
              : 'border-white/20 bg-white/5 hover:bg-white/10 text-white'
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          <span>GRID</span>
        </button>

        {/* Poster Studio Modal Button */}
        <button
          onClick={onOpenPosterPlayground}
          className="px-3 py-1.5 bg-white text-black hover:bg-[#E30613] hover:text-white font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E30613] group-hover:text-white" />
          <span className="hidden md:inline">POSTER STUDIO</span>
        </button>

        {/* Expand Options Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1.5 rounded-xl border border-white/20 hover:bg-white/10 text-white transition-colors"
          title="Swiss Grid Settings"
        >
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>

      </div>
    </aside>
  );
};
