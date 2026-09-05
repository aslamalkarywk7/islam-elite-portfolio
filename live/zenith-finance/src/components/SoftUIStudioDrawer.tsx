import React from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ShadowConfig } from '../types';
import { Sliders, Sun, Eye, RotateCcw, X, Palette, Sparkles } from 'lucide-react';

interface SoftUIStudioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  shadowConfig: ShadowConfig;
  setShadowConfig: React.Dispatch<React.SetStateAction<ShadowConfig>>;
  resetToDefault: () => void;
}

export const SoftUIStudioDrawer: React.FC<SoftUIStudioDrawerProps> = ({
  isOpen,
  onClose,
  shadowConfig,
  setShadowConfig,
  resetToDefault,
}) => {
  if (!isOpen) return null;

  const bgToneOptions = [
    { id: 'velvet-beige', name: 'Velvet Gray-Beige', hex: '#e5e2dd' },
    { id: 'cool-slate', name: 'Cool Slate', hex: '#e2e6ed' },
    { id: 'soft-cream', name: 'Warm Cream', hex: '#ebe7e0' },
    { id: 'warm-sand', name: 'Warm Sand', hex: '#e8e2d8' },
    { id: 'charcoal-dark', name: 'Charcoal Soft Dark', hex: '#23272e' },
  ] as const;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md h-full bg-[#e5e2dd] p-6 shadow-2xl overflow-y-auto flex flex-col justify-between border-l border-white/50">
        
        {/* HEADER */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#d4cfc7]">
            <div className="flex items-center gap-2">
              <NeumorphicBox variant="convex" pill className="p-2 text-blue-600">
                <Sliders className="w-4 h-4" />
              </NeumorphicBox>
              <div>
                <h3 className="text-lg font-bold text-[#2c3038]">Neumorphism 2.0 Studio</h3>
                <p className="text-xs text-[#636a75]">Real-time lighting & shadow depth laboratory</p>
              </div>
            </div>

            <NeumorphicBox variant="raised-sm" clickable onClick={onClose} className="p-2 text-[#636a75]">
              <X className="w-4 h-4" />
            </NeumorphicBox>
          </div>

          {/* CONTROLS LIST */}
          <div className="space-y-6 pt-6">
            
            {/* LIGHT SOURCE ANGLE */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#2c3038]">
                <span className="flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-500" /> Light Source Angle
                </span>
                <span className="text-blue-600 bg-white/60 px-2 py-0.5 rounded neu-inset font-bold">
                  {shadowConfig.lightAngle}°
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={360}
                value={shadowConfig.lightAngle}
                onChange={(e) => setShadowConfig({ ...shadowConfig, lightAngle: Number(e.target.value) })}
                className="w-full h-2 rounded-full appearance-none accent-blue-600 neu-inset"
              />
            </div>

            {/* SHADOW DISTANCE */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#2c3038]">
                <span>Shadow Offset Distance</span>
                <span className="text-blue-600 bg-white/60 px-2 py-0.5 rounded neu-inset font-bold">
                  {shadowConfig.distance}px
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={24}
                value={shadowConfig.distance}
                onChange={(e) => setShadowConfig({ ...shadowConfig, distance: Number(e.target.value) })}
                className="w-full h-2 rounded-full appearance-none accent-blue-600 neu-inset"
              />
            </div>

            {/* SHADOW BLUR */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#2c3038]">
                <span>Diffused Blur Softness</span>
                <span className="text-blue-600 bg-white/60 px-2 py-0.5 rounded neu-inset font-bold">
                  {shadowConfig.blur}px
                </span>
              </div>
              <input
                type="range"
                min={4}
                max={40}
                value={shadowConfig.blur}
                onChange={(e) => setShadowConfig({ ...shadowConfig, blur: Number(e.target.value) })}
                className="w-full h-2 rounded-full appearance-none accent-blue-600 neu-inset"
              />
            </div>

            {/* SHADOW INTENSITY */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#2c3038]">
                <span>Contrast Depth Intensity</span>
                <span className="text-blue-600 bg-white/60 px-2 py-0.5 rounded neu-inset font-bold">
                  {(shadowConfig.intensity * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min={0.3}
                max={1.8}
                step={0.1}
                value={shadowConfig.intensity}
                onChange={(e) => setShadowConfig({ ...shadowConfig, intensity: Number(e.target.value) })}
                className="w-full h-2 rounded-full appearance-none accent-blue-600 neu-inset"
              />
            </div>

            {/* BACKGROUND TONE SELECTOR */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-[#2c3038] uppercase flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-600" /> Background Tone Canvas
              </div>

              <div className="grid grid-cols-1 gap-2">
                {bgToneOptions.map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => {
                      setShadowConfig({ ...shadowConfig, bgTone: tone.id });
                      document.documentElement.style.setProperty('--neu-bg', tone.hex);
                    }}
                    className={`p-3 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-all ${
                      shadowConfig.bgTone === tone.id
                        ? 'neu-inset-deep text-blue-600 border border-blue-400/50'
                        : 'neu-raised-sm text-[#383d46]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full border border-black/20 shadow-sm" style={{ backgroundColor: tone.hex }}></span>
                      <span>{tone.name}</span>
                    </div>
                    <span className="text-[10px] text-[#717885] font-mono">{tone.hex}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="pt-6 border-t border-[#d4cfc7] space-y-3">
          <NeumorphicBox
            variant="raised-sm"
            clickable
            onClick={resetToDefault}
            className="w-full py-3 text-center text-xs font-bold text-[#383d46] flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Lighting Defaults
          </NeumorphicBox>

          <NeumorphicBox
            variant="glowing"
            clickable
            onClick={onClose}
            className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-blue-600"
          >
            Apply to Interface
          </NeumorphicBox>
        </div>

      </div>
    </div>
  );
};
