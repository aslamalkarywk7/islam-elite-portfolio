import React from 'react';
import { Box, Sparkles, Heart, Globe, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div 
        className="glass-surface rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
            <Box className="w-5 h-5 text-cyan-300" />
          </div>
          <div>
            <div className="font-display font-bold text-white text-base tracking-tight">
              AETHERIA GLASS 2.0
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Photonic Refraction & Spatial Depth Architecture
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-sans">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#refraction-engine" className="hover:text-white transition-colors">Refraction Engine</a>
          <a href="#depth-inspector" className="hover:text-white transition-colors">3D Depth Inspector</a>
          <a href="#interactive-demo" className="hover:text-white transition-colors">Interactive Demos</a>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          <span>8K Ultra Precision • 120 FPS</span>
        </div>
      </div>

      <div className="mt-6 text-center text-[11px] font-mono text-slate-500">
        © 2026 AETHERIA PLATFORMS INC. ALL RIGHTS RESERVED. CRAFTED WITH GLASSMORPHISM 2.0 SPECIFICATION.
      </div>
    </footer>
  );
};
