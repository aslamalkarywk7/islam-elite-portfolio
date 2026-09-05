import React, { useState } from 'react';
import { GlassConfig } from '../types';
import { Layers, RotateCcw, Code, Check, Sparkles, Box, Sliders } from 'lucide-react';

interface DepthExploderProps {
  config: GlassConfig;
  setConfig: React.Dispatch<React.SetStateAction<GlassConfig>>;
}

export const DepthExploder: React.FC<DepthExploderProps> = ({ config, setConfig }) => {
  const [rotateX, setRotateX] = useState(25);
  const [rotateY, setRotateY] = useState(-20);
  const [separation, setSeparation] = useState(60);
  const [copied, setCopied] = useState(false);

  const resetView = () => {
    setRotateX(25);
    setRotateY(-20);
    setSeparation(60);
  };

  const cssSnippet = `.glassmorphism-2-layer {
  background: rgba(255, 255, 255, ${config.opacity});
  backdrop-filter: blur(${config.blur}px) saturate(180%);
  -webkit-backdrop-filter: blur(${config.blur}px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, ${config.borderOpacity});
  box-shadow: 0 25px 50px rgba(0,0,0,0.45),
              inset 0 1px 0 rgba(255,255,255,${(config.specularShine * 0.4).toFixed(2)});
  transform: translateZ(${separation}px);
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(cssSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="depth-inspector" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="glass-surface rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Interactive Depth Engine</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
              3D Glass Layer Exploder
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Deconstruct the UI into spatial z-index planes. See how frosted glass, background shapes, specular lighting, and text hover on separate optical planes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetView}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Camera</span>
            </button>
            <button
              onClick={() => setConfig((prev) => ({ ...prev, exploder3D: !prev.exploder3D }))}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all ${
                config.exploder3D
                  ? 'bg-purple-500/30 text-purple-200 border-purple-400/50'
                  : 'bg-white/10 text-white border-white/20'
              }`}
            >
              {config.exploder3D ? 'Active 3D View' : 'Enable 3D View'}
            </button>
          </div>
        </div>

        {/* 3D Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-slate-900/50 p-4 rounded-2xl border border-white/10">
          <div>
            <label className="text-xs text-slate-300 font-mono block mb-1">
              Tilt X ({rotateX}°)
            </label>
            <input
              type="range"
              min="-45"
              max="60"
              value={rotateX}
              onChange={(e) => setRotateX(parseInt(e.target.value))}
              className="w-full accent-purple-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <label className="text-xs text-slate-300 font-mono block mb-1">
              Rotate Y ({rotateY}°)
            </label>
            <input
              type="range"
              min="-60"
              max="60"
              value={rotateY}
              onChange={(e) => setRotateY(parseInt(e.target.value))}
              className="w-full accent-cyan-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <label className="text-xs text-slate-300 font-mono block mb-1">
              Layer Separation ({separation}px)
            </label>
            <input
              type="range"
              min="10"
              max="150"
              value={separation}
              onChange={(e) => setSeparation(parseInt(e.target.value))}
              className="w-full accent-pink-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* 3D Perspective Stage */}
        <div className="relative min-h-[420px] flex items-center justify-center py-8 perspective-container overflow-hidden rounded-2xl bg-slate-950/60 border border-white/10">
          <div
            className="w-full max-w-2xl p-6 transition-transform duration-300 ease-out transform-gpu"
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Layer 0: Background Floating 3D Geometries */}
            <div
              className="relative p-8 rounded-3xl border border-dashed border-indigo-500/40 bg-indigo-950/30 transition-transform duration-300"
              style={{
                transform: `translateZ(0px)`,
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.15)',
              }}
            >
              <div className="absolute top-2 left-3 text-[10px] font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                Layer 0: Gradient & Floating Geometry Base
              </div>
              <div className="flex justify-around items-center py-6 opacity-80">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 blur-sm animate-pulse" />
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500 blur-sm" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-400 to-purple-600 blur-sm" />
              </div>

              {/* Layer 1: Frosted Glass Panel */}
              <div
                className="relative mt-2 p-6 rounded-2xl border border-white/20 transition-transform duration-300"
                style={{
                  transform: `translateZ(${separation}px)`,
                  background: `rgba(255, 255, 255, ${config.opacity})`,
                  backdropFilter: `blur(${config.blur}px)`,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                }}
              >
                <div className="absolute top-2 left-3 text-[10px] font-mono text-cyan-300 bg-slate-900/80 px-2 py-0.5 rounded border border-cyan-500/30">
                  Layer 1: Backdrop Blur ({config.blur}px)
                </div>

                {/* Layer 2: Text & Cards */}
                <div
                  className="relative mt-4 p-4 rounded-xl border border-white/20 bg-slate-900/60 transition-transform duration-300"
                  style={{
                    transform: `translateZ(${separation * 0.8}px)`,
                  }}
                >
                  <div className="absolute -top-3 left-3 text-[10px] font-mono text-purple-300 bg-purple-950/90 px-2 py-0.5 rounded border border-purple-500/30">
                    Layer 2: Typography & Structured Content
                  </div>
                  <h4 className="font-display text-base font-bold text-white mt-1">
                    Spatial Optics
                  </h4>
                  <p className="text-xs text-slate-300">
                    Sub-surface refraction elevates UI components.
                  </p>
                </div>

                {/* Layer 3: Specular Highlights & Floating Pills */}
                <div
                  className="relative mt-3 flex justify-between items-center p-3 rounded-lg bg-cyan-500/20 border border-cyan-300/40 transition-transform duration-300"
                  style={{
                    transform: `translateZ(${separation * 1.5}px)`,
                    boxShadow: '0 0 25px rgba(56, 189, 248, 0.4)',
                  }}
                >
                  <div className="text-[10px] font-mono text-cyan-200">
                    Layer 3: Specular Light Highlights
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-bold font-mono bg-white text-slate-950 rounded-full">
                    Top Z-Plane
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Code Snippet Inspector */}
        <div className="mt-8 bg-slate-950/80 rounded-2xl p-4 sm:p-6 border border-white/10 font-mono text-xs">
          <div className="flex items-center justify-between mb-3 text-slate-400">
            <span className="flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" />
              Generated Glassmorphism 2.0 CSS Specification
            </span>
            <button
              onClick={handleCopyCode}
              className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
              <span>{copied ? 'Copied!' : 'Copy CSS'}</span>
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-slate-900/90 text-cyan-200 overflow-x-auto border border-white/5 leading-relaxed">
            {cssSnippet}
          </pre>
        </div>
      </div>
    </section>
  );
};
