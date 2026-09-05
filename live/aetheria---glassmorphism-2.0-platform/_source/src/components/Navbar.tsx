import React from 'react';
import { GlassConfig } from '../types';
import { 
  Box, 
  Layers, 
  Sliders, 
  Monitor, 
  Search, 
  Sparkles, 
  Zap,
  Globe,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface NavbarProps {
  config: GlassConfig;
  setConfig: React.Dispatch<React.SetStateAction<GlassConfig>>;
  onOpenCustomizer: () => void;
  onOpenCmdPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  setConfig,
  onOpenCustomizer,
  onOpenCmdPalette,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <div 
        className="max-w-7xl mx-auto rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-2xl shadow-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300"
        style={{
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-10 h-10 rounded-xl bg-slate-900/80 border border-white/20 flex items-center justify-center backdrop-blur-md">
              <Box className="w-5 h-5 text-cyan-300 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-purple-200">
                AETHERIA
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Glass 2.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
              Photonic Refraction Platform
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-lg">
          {['Overview', 'Refraction Engine', 'Node Cluster', 'Documentation', 'Benchmarks'].map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                idx === 0
                  ? 'bg-white/15 text-white shadow-inner border border-white/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Controls & Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live Node Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>0.4ms • Node-09</span>
          </div>

          {/* Quick Search Trigger */}
          <button
            onClick={onOpenCmdPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs transition-all duration-200"
            title="Search Platform (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline font-mono text-[11px] text-slate-400">⌘K</span>
          </button>

          {/* 3D Exploder Mode Toggle */}
          <button
            onClick={() => setConfig((prev) => ({ ...prev, exploder3D: !prev.exploder3D }))}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-300 ${
              config.exploder3D
                ? 'bg-purple-500/30 text-purple-200 border-purple-400/50 shadow-lg shadow-purple-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border-white/10'
            }`}
            title="Toggle 3D Depth Layer Exploder"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">3D Depth</span>
          </button>

          {/* Studio Monitor Frame Toggle */}
          <button
            onClick={() => setConfig((prev) => ({ ...prev, studioFrame: !prev.studioFrame }))}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-300 ${
              config.studioFrame
                ? 'bg-cyan-500/30 text-cyan-200 border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border-white/10'
            }`}
            title="Toggle Photorealistic Studio Monitor View"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Studio View</span>
          </button>

          {/* Customizer Panel Button */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600/80 to-indigo-600/80 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-medium shadow-lg shadow-purple-900/30 border border-white/20 transition-all duration-300"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Customizer</span>
          </button>
        </div>
      </div>
    </header>
  );
};
