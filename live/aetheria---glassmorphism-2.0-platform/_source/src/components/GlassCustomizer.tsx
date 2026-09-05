import React from 'react';
import { GlassConfig } from '../types';
import { 
  X, 
  Sliders, 
  Sparkles, 
  Check, 
  Palette, 
  Eye, 
  Layers, 
  Monitor, 
  RotateCcw,
  Sun,
  ShieldAlert
} from 'lucide-react';

interface GlassCustomizerProps {
  config: GlassConfig;
  setConfig: React.Dispatch<React.SetStateAction<GlassConfig>>;
  isOpen: boolean;
  onClose: () => void;
}

export const GlassCustomizer: React.FC<GlassCustomizerProps> = ({
  config,
  setConfig,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const applyPreset = (presetName: string) => {
    switch (presetName) {
      case 'frost':
        setConfig((prev) => ({
          ...prev,
          blur: 32,
          opacity: 0.08,
          borderOpacity: 0.18,
          specularShine: 0.8,
          noiseOverlay: true,
          themeColor: 'electric',
        }));
        break;
      case 'clear':
        setConfig((prev) => ({
          ...prev,
          blur: 16,
          opacity: 0.03,
          borderOpacity: 0.25,
          specularShine: 1.0,
          noiseOverlay: false,
          themeColor: 'electric',
        }));
        break;
      case 'magenta':
        setConfig((prev) => ({
          ...prev,
          blur: 28,
          opacity: 0.09,
          borderOpacity: 0.2,
          specularShine: 0.9,
          noiseOverlay: true,
          themeColor: 'magenta',
        }));
        break;
      case 'cyber':
        setConfig((prev) => ({
          ...prev,
          blur: 24,
          opacity: 0.12,
          borderOpacity: 0.3,
          specularShine: 1.0,
          noiseOverlay: true,
          themeColor: 'cyberpunk',
        }));
        break;
      case 'emerald':
        setConfig((prev) => ({
          ...prev,
          blur: 20,
          opacity: 0.06,
          borderOpacity: 0.15,
          specularShine: 0.7,
          noiseOverlay: true,
          themeColor: 'emerald',
        }));
        break;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md h-[90vh] glass-surface rounded-3xl p-6 border border-white/20 flex flex-col justify-between shadow-2xl overflow-y-auto relative z-50"
        style={{
          boxShadow: '0 30px 80px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.3)',
        }}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                <Sliders className="w-4 h-4 text-purple-300" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Glassmorphism Studio
                </h3>
                <p className="text-[11px] text-slate-400 font-mono">Real-time Shader Controls</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Presets */}
          <div className="mb-6">
            <label className="text-xs font-mono text-purple-300 uppercase tracking-wider block mb-2">
              Style Presets
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'frost', label: 'Pure Frost' },
                { name: 'clear', label: 'Ultra Clear' },
                { name: 'magenta', label: 'Warm Magenta' },
                { name: 'cyber', label: 'Cyber Specular' },
                { name: 'emerald', label: 'Deep Emerald' },
              ].map((p) => (
                <button
                  key={p.name}
                  onClick={() => applyPreset(p.name)}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-slate-200 transition-all text-left flex items-center justify-between"
                >
                  <span>{p.label}</span>
                  <Sparkles className="w-3 h-3 text-cyan-300 opacity-60" />
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-5 mb-6 bg-slate-900/50 p-4 rounded-2xl border border-white/10">
            {/* Backdrop Blur */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                <span className="text-slate-300">Backdrop Blur</span>
                <span className="text-cyan-300 font-bold">{config.blur}px</span>
              </div>
              <input
                type="range"
                min="8"
                max="64"
                value={config.blur}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, blur: parseInt(e.target.value) }))
                }
                className="w-full accent-cyan-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
            </div>

            {/* Glass Opacity */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                <span className="text-slate-300">Glass Panel Fill</span>
                <span className="text-purple-300 font-bold">
                  {(config.opacity * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.25"
                step="0.01"
                value={config.opacity}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, opacity: parseFloat(e.target.value) }))
                }
                className="w-full accent-purple-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
            </div>

            {/* Border Specular Opacity */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                <span className="text-slate-300">Edge Specular Stroke</span>
                <span className="text-pink-300 font-bold">
                  {(config.borderOpacity * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.4"
                step="0.01"
                value={config.borderOpacity}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, borderOpacity: parseFloat(e.target.value) }))
                }
                className="w-full accent-pink-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
            </div>

            {/* Geometry Count */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                <span className="text-slate-300">Floating 3D Geometries</span>
                <span className="text-emerald-400 font-bold">{config.geometryCount} Shapes</span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                value={config.geometryCount}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, geometryCount: parseInt(e.target.value) }))
                }
                className="w-full accent-emerald-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Theme Palette */}
          <div className="mb-6">
            <label className="text-xs font-mono text-purple-300 uppercase tracking-wider block mb-2">
              Background Color Ambient
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'electric', label: 'Electric Blue', color: 'from-blue-600 to-purple-600' },
                { id: 'magenta', label: 'Warm Magenta', color: 'from-fuchsia-600 to-pink-600' },
                { id: 'emerald', label: 'Cyber Emerald', color: 'from-emerald-600 to-cyan-600' },
                { id: 'cyberpunk', label: 'Cyber Amber', color: 'from-amber-500 to-rose-600' },
              ].map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setConfig((prev) => ({ ...prev, themeColor: theme.id as any }))}
                  className={`px-3 py-2 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all ${
                    config.themeColor === theme.id
                      ? 'bg-white/15 border-white/40 text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${theme.color}`} />
                  <span>{theme.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-3 mb-6 bg-slate-900/40 p-4 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-200 font-sans">Sub-Pixel Matte Texture</span>
              <button
                onClick={() => setConfig((prev) => ({ ...prev, noiseOverlay: !prev.noiseOverlay }))}
                className={`w-10 h-6 rounded-full transition-colors relative p-0.5 ${
                  config.noiseOverlay ? 'bg-purple-600' : 'bg-slate-800'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    config.noiseOverlay ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-200 font-sans">Studio Monitor Frame</span>
              <button
                onClick={() => setConfig((prev) => ({ ...prev, studioFrame: !prev.studioFrame }))}
                className={`w-10 h-6 rounded-full transition-colors relative p-0.5 ${
                  config.studioFrame ? 'bg-cyan-600' : 'bg-slate-800'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    config.studioFrame ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-xs shadow-lg border border-white/20 hover:from-purple-500 hover:to-indigo-500 transition-all"
        >
          Apply Customizer Settings
        </button>
      </div>
    </div>
  );
};
