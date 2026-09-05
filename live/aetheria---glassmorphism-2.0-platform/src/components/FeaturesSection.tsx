import React, { useState } from 'react';
import { GlassConfig } from '../types';
import { 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Maximize2, 
  Eye, 
  Zap, 
  Compass, 
  BarChart2, 
  CheckCircle2, 
  Sliders,
  ChevronRight
} from 'lucide-react';

interface FeaturesSectionProps {
  config: GlassConfig;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ config }) => {
  const [activeCard, setActiveCard] = useState<string>('f1');
  const [toggleState, setToggleState] = useState<Record<string, boolean>>({
    f1: true,
    f2: true,
    f3: false,
    f4: true,
  });

  const handleToggle = (id: string) => {
    setToggleState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const features = [
    {
      id: 'f1',
      title: 'Sub-Pixel Matte Diffusion',
      category: 'Optical Engineering',
      description: 'Custom matte texture algorithms eliminate visual banding across deep blue and purple gradient spectra.',
      icon: Eye,
      stat: '0.035 Noise',
      badge: 'Patented Shader',
      details: ['Multi-sample blur kernel', 'Fractal turbulence noise', 'RGB gamma preservation'],
    },
    {
      id: 'f2',
      title: '1px Specular Refraction Border',
      category: 'Edge Dynamics',
      description: 'Linear gradient border masking with inset highlight lines simulates real physical bevelled glass edges.',
      icon: Sparkles,
      stat: '0.5px Specular',
      badge: 'Specular V2',
      details: ['Dual inset box-shadow', 'Mask-composite SVG stroke', 'Sub-pixel alignment'],
    },
    {
      id: 'f3',
      title: 'Volumetric Saturate Saturate',
      category: 'Color Vibrancy',
      description: 'Backdrop saturate boosters (+180%) maintain high visual contrast behind dark frosted glass panels.',
      icon: Zap,
      stat: '180% Vibrancy',
      badge: 'Backdrop-Filter',
      details: ['Contrast protection layer', 'Chrominance boosting', 'WCAG AA compliant'],
    },
    {
      id: 'f4',
      title: 'Adaptive Dynamic Parallax',
      category: 'Spatial Motion',
      description: 'Mouse vector calculations drift background geometries and foreground glass layers on independent axes.',
      icon: Compass,
      stat: '120 FPS Motion',
      badge: 'Spatial JS',
      details: ['Mouse vector dampening', 'Hardware acceleration', 'Zero frame drop'],
    },
  ];

  return (
    <section id="refraction-engine" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Sliders className="w-3.5 h-3.5" />
          <span>Glassmorphism 2.0 Innovations</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Engineered for Extreme Spatial Clarity
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Unlike standard 2020 glassmorphism, Glassmorphism 2.0 introduces multi-layer specular physics, matte grain diffusion, and dynamic backdrop saturation.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item) => {
          const IconComp = item.icon;
          const isSelected = activeCard === item.id;
          const isToggled = toggleState[item.id];

          return (
            <div
              key={item.id}
              onClick={() => setActiveCard(item.id)}
              className={`glass-card rounded-3xl p-6 cursor-pointer relative overflow-hidden transition-all duration-300 ${
                isSelected ? 'border-purple-400/50 shadow-2xl shadow-purple-950/40' : ''
              }`}
              style={{
                backdropFilter: `blur(${config.blur}px) saturate(170%)`,
                backgroundColor: isSelected
                  ? `rgba(255, 255, 255, ${config.opacity + 0.03})`
                  : `rgba(255, 255, 255, ${config.opacity})`,
                borderColor: isSelected
                  ? 'rgba(168, 85, 247, 0.4)'
                  : `rgba(255, 255, 255, ${config.borderOpacity})`,
              }}
            >
              {/* Background Glow */}
              <div
                className={`absolute -bottom-10 -right-10 w-28 h-28 rounded-full blur-2xl transition-all duration-500 ${
                  isSelected ? 'bg-purple-500/30' : 'bg-cyan-500/15'
                }`}
              />

              {/* Icon & Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-inner">
                  <IconComp className="w-6 h-6 text-cyan-300" />
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200">
                  {item.badge}
                </span>
              </div>

              <div className="text-[11px] font-mono text-purple-300 uppercase tracking-wider mb-1">
                {item.category}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Interactive Features List / Toggle */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Status:</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggle(item.id);
                    }}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                      isToggled
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {isToggled ? 'Active' : 'Bypassed'}
                  </button>
                </div>

                <div className="space-y-1 mt-3">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
