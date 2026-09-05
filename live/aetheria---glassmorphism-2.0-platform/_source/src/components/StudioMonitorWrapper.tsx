import React from 'react';
import { GlassConfig } from '../types';
import { Monitor, Maximize2, Minimize2, Sparkles, Sliders } from 'lucide-react';

interface StudioMonitorWrapperProps {
  children: React.ReactNode;
  config: GlassConfig;
  setConfig: React.Dispatch<React.SetStateAction<GlassConfig>>;
  onOpenCustomizer: () => void;
}

export const StudioMonitorWrapper: React.FC<StudioMonitorWrapperProps> = ({
  children,
  config,
  setConfig,
  onOpenCustomizer,
}) => {
  if (!config.studioFrame) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start p-2 sm:p-6 lg:p-10 relative overflow-x-hidden bg-noise">
      {/* Studio Lighting Ambient Glow Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Studio Softbox Light */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-gradient-to-b from-purple-500/20 via-indigo-500/10 to-transparent blur-3xl opacity-80" />
        {/* Side Key Light */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        {/* Side Fill Light */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl" />
        {/* Desk Surface Lighting Horizon */}
        <div className="absolute bottom-0 inset-x-0 h-[25vh] bg-gradient-to-t from-slate-900/90 via-slate-950/60 to-transparent border-t border-white/5" />
      </div>

      {/* Studio Header Bar */}
      <div className="z-20 w-full max-w-7xl flex items-center justify-between mb-4 px-2 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-300 font-bold tracking-wider uppercase">
            Studio Showcase View • 8K Photorealistic Render Mode
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCustomizer}
            className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white font-mono flex items-center gap-1.5 transition-all shadow-lg"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Customize Shader</span>
          </button>
          
          <button
            onClick={() => setConfig((prev) => ({ ...prev, studioFrame: false }))}
            className="px-3.5 py-1.5 rounded-xl bg-purple-600/80 hover:bg-purple-500 text-white text-xs font-mono font-medium flex items-center gap-1.5 border border-white/20 transition-all shadow-lg shadow-purple-900/40"
            title="Switch to Fullscreen Native Web App View"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fullscreen View</span>
          </button>
        </div>
      </div>

      {/* Monitor Outer Chassis */}
      <div className="z-10 w-full max-w-7xl relative group transition-all duration-500">
        {/* Photorealistic Aluminum Bezel */}
        <div 
          className="rounded-[32px] p-2 sm:p-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-slate-700/60 relative"
          style={{
            boxShadow: `
              0 50px 100px -20px rgba(0, 0, 0, 0.9),
              0 30px 60px -30px rgba(124, 58, 237, 0.3),
              inset 0 1px 1px rgba(255, 255, 255, 0.25),
              inset 0 -1px 2px rgba(0, 0, 0, 0.8)
            `,
          }}
        >
          {/* Top Camera / Light Sensor Dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-950 border border-slate-700 shadow-inner" />
          </div>

          {/* Screen Display Container */}
          <div className="rounded-[24px] overflow-hidden border border-slate-900 relative bg-slate-950 shadow-inner">
            {/* Screen Glass Surface Light Glare Sheen Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none z-50 opacity-20 mix-blend-overlay"
              style={{
                background: 'linear-gradient(115deg, rgba(255,255,255,0.4) 0%, transparent 40%, transparent 70%, rgba(255,255,255,0.1) 100%)',
              }}
            />

            {/* Applet Landing Page Content */}
            <div className="relative z-10 max-h-[82vh] overflow-y-auto">
              {children}
            </div>
          </div>

          {/* Bottom Bezel Brand Logo & Power LED */}
          <div className="mt-2 flex items-center justify-between px-4 text-[10px] font-mono text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-400 tracking-widest">AETHERIA</span>
              <span className="text-slate-600">OLED PRO 8K</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">3840×2160 • 120Hz</span>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            </div>
          </div>
        </div>

        {/* Photorealistic Monitor Stand Base */}
        <div className="flex flex-col items-center">
          {/* Stand Neck */}
          <div 
            className="w-24 h-12 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-x border-slate-700/50 shadow-2xl relative z-0"
            style={{
              clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
            }}
          />
          {/* Stand Foot Base */}
          <div 
            className="w-72 h-4 rounded-xl bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/60 shadow-2xl relative z-0"
            style={{
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
