import React, { useState, useEffect } from 'react';
import { GlassConfig } from '../types';
import { 
  Search, 
  Layers, 
  Sliders, 
  Monitor, 
  Palette, 
  Zap, 
  X, 
  Command, 
  ArrowRight 
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  config: GlassConfig;
  setConfig: React.Dispatch<React.SetStateAction<GlassConfig>>;
  onOpenCustomizer: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  config,
  setConfig,
  onOpenCustomizer,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'exploder',
      title: 'Toggle 3D Layer Exploder',
      category: 'Spatial Motion',
      icon: Layers,
      action: () => {
        setConfig((prev) => ({ ...prev, exploder3D: !prev.exploder3D }));
        onClose();
      },
    },
    {
      id: 'customizer',
      title: 'Open Glass Customizer Studio',
      category: 'Shader Controls',
      icon: Sliders,
      action: () => {
        onClose();
        onOpenCustomizer();
      },
    },
    {
      id: 'studio',
      title: 'Toggle Photorealistic Studio Monitor View',
      category: 'Showcase Frame',
      icon: Monitor,
      action: () => {
        setConfig((prev) => ({ ...prev, studioFrame: !prev.studioFrame }));
        onClose();
      },
    },
    {
      id: 'theme-magenta',
      title: 'Apply Warm Magenta Theme',
      category: 'Color Ambient',
      icon: Palette,
      action: () => {
        setConfig((prev) => ({ ...prev, themeColor: 'magenta' }));
        onClose();
      },
    },
    {
      id: 'theme-electric',
      title: 'Apply Electric Blue Theme',
      category: 'Color Ambient',
      icon: Palette,
      action: () => {
        setConfig((prev) => ({ ...prev, themeColor: 'electric' }));
        onClose();
      },
    },
    {
      id: 'theme-emerald',
      title: 'Apply Cyber Emerald Theme',
      category: 'Color Ambient',
      icon: Palette,
      action: () => {
        setConfig((prev) => ({ ...prev, themeColor: 'emerald' }));
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-xl glass-surface rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl overflow-hidden relative"
        style={{
          boxShadow: '0 30px 80px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.4)',
        }}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <Search className="w-5 h-5 text-cyan-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search commands or actions (e.g., '3D', 'theme', 'customizer')..."
            className="flex-1 bg-transparent text-white placeholder-slate-400 font-sans text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filtered Action Items */}
        <div className="py-3 max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400 font-mono">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full p-3 rounded-2xl bg-white/5 hover:bg-white/15 border border-transparent hover:border-white/15 text-left flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <IconComp className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-200 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <Command className="w-3 h-3 text-slate-500" /> + K to toggle
          </span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
