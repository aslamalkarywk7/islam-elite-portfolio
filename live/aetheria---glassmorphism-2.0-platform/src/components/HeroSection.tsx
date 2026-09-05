import React, { useState } from 'react';
import { GlassConfig } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Eye, 
  Activity, 
  Layers, 
  ChevronRight,
  Maximize2,
  RefreshCw
} from 'lucide-react';

interface HeroSectionProps {
  config: GlassConfig;
  onExplodeToggle: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onExplodeToggle }) => {
  const [refractionIndex, setRefractionIndex] = useState(1.52);
  const [activeTab, setActiveTab] = useState<'latency' | 'throughput' | 'nodes'>('latency');
  const [pulseCount, setPulseCount] = useState(128);

  const triggerPulse = () => {
    setPulseCount((prev) => prev + Math.floor(Math.random() * 12 + 1));
  };

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Hero Badge */}
      <div className="flex justify-center mb-8">
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-purple-400/50 transition-all duration-300 group"
          onClick={triggerPulse}
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-xs font-mono tracking-wider uppercase text-purple-200">
            Glassmorphism 2.0 Architectural Specification
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white font-mono font-bold group-hover:bg-purple-500/30 transition-colors">
            v2.4
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* Main Display Typography */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Layered Clarity for{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-200 drop-shadow-sm">
            Future-Tech Platforms
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 font-sans font-normal max-w-2xl mx-auto leading-relaxed">
          Engineered with sub-pixel matte diffusion, volumetric backdrop blurs, and real-time optical refraction. Experience true CSS/JS spatial depth control.
        </p>
      </div>

      {/* Hero Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a
          href="#interactive-demo"
          className="relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 text-white font-medium text-sm shadow-2xl shadow-purple-900/50 border border-white/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
        >
          <Zap className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
          <span>Launch Refraction Engine</span>
          <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
        </a>

        <button
          onClick={onExplodeToggle}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-xl text-white font-medium text-sm transition-all duration-300 hover:border-white/30 hover:scale-[1.02]"
        >
          <Layers className="w-4 h-4 text-purple-300" />
          <span>{config.exploder3D ? 'Collapse 3D Stack' : 'Explode 3D Layers'}</span>
        </button>
      </div>

      {/* Floating Multi-Card Glass Hero Feature Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Card 1: Quantum Node Health */}
        <div 
          className="glass-card rounded-3xl p-6 relative overflow-hidden group"
          style={{
            backdropFilter: `blur(${config.blur}px) saturate(180%)`,
            backgroundColor: `rgba(255, 255, 255, ${config.opacity})`,
            borderColor: `rgba(255, 255, 255, ${config.borderOpacity})`,
          }}
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan-500/20 blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500" />
          
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-300" />
            </div>
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
              Active Node
            </span>
          </div>

          <h3 className="font-display font-semibold text-lg text-white mb-1">
            Volumetric Refraction
          </h3>
          <p className="text-xs text-slate-300 mb-6 leading-relaxed">
            Dynamic light reflection with continuous backdrop-saturate color mapping.
          </p>

          <div className="space-y-3 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Refraction Index:</span>
              <span className="text-cyan-300 font-bold">{refractionIndex.toFixed(2)} n</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="2.2"
              step="0.01"
              value={refractionIndex}
              onChange={(e) => setRefractionIndex(parseFloat(e.target.value))}
              className="w-full accent-cyan-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>Vacuum (1.0)</span>
              <span>Diamond (2.4)</span>
            </div>
          </div>
        </div>

        {/* Card 2: Neural Core Engine (Center Feature Card) */}
        <div 
          className="glass-card rounded-3xl p-6 relative overflow-hidden group md:-translate-y-4 border-purple-500/30"
          style={{
            backdropFilter: `blur(${config.blur * 1.2}px) saturate(200%)`,
            backgroundColor: `rgba(255, 255, 255, ${config.opacity * 1.3})`,
            borderColor: `rgba(168, 85, 247, ${config.borderOpacity * 1.5})`,
            boxShadow: '0 30px 60px rgba(124, 58, 237, 0.25), inset 0 1px 1px rgba(255,255,255,0.4)',
          }}
        >
          <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-fuchsia-500/20 blur-3xl group-hover:bg-fuchsia-500/30 transition-all duration-500" />
          
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
              <Activity className="w-5 h-5 text-purple-300 animate-pulse" />
            </div>
            <button
              onClick={triggerPulse}
              className="text-[11px] font-mono text-purple-200 bg-purple-500/20 hover:bg-purple-500/30 px-3 py-1 rounded-full border border-purple-400/30 flex items-center gap-1 transition-all"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Pulse Test</span>
            </button>
          </div>

          <h3 className="font-display font-semibold text-lg text-white mb-1">
            Sub-Pixel Matte Texture
          </h3>
          <p className="text-xs text-slate-300 mb-6 leading-relaxed">
            Integrated SVG micro-grain prevents color banding while preserving translucent clarity.
          </p>

          <div className="bg-slate-900/60 rounded-2xl p-4 border border-white/10 mb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-300 font-mono">Quantum Throughput</span>
              <span className="text-xs font-mono text-purple-300 font-bold">{pulseCount} TFLOPS</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (pulseCount / 200) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 3: Specular Edge Lighting */}
        <div 
          className="glass-card rounded-3xl p-6 relative overflow-hidden group"
          style={{
            backdropFilter: `blur(${config.blur}px) saturate(180%)`,
            backgroundColor: `rgba(255, 255, 255, ${config.opacity})`,
            borderColor: `rgba(255, 255, 255, ${config.borderOpacity})`,
          }}
        >
          <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-pink-500/20 blur-2xl group-hover:bg-pink-500/30 transition-all duration-500" />
          
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
              <Eye className="w-5 h-5 text-pink-300" />
            </div>
            <span className="text-[11px] font-mono text-pink-300 bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/20">
              1px Specular
            </span>
          </div>

          <h3 className="font-display font-semibold text-lg text-white mb-1">
            Precision Edge Optics
          </h3>
          <p className="text-xs text-slate-300 mb-6 leading-relaxed">
            Dual inset shadows mimic physical glass thickness and light angle reflection.
          </p>

          <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-white/10 font-mono">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-slate-400">Shadow Blur</div>
              <div className="text-sm font-bold text-white">50px Diffused</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-slate-400">Border Inset</div>
              <div className="text-sm font-bold text-pink-300">0.5px Specular</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
