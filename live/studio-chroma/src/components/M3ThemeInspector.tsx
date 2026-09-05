import React, { useState } from 'react';
import { X, Layers, Copy, Check, Sliders, Moon, Sun, Sparkles } from 'lucide-react';
import { M3Ripple } from './M3Ripple';

interface M3ThemeInspectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const M3ThemeInspector: React.FC<M3ThemeInspectorProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const tokens = [
    { token: 'md.sys.color.primary', name: 'Primary Blue', hex: '#005CBB', role: 'Main buttons, brand anchors' },
    { token: 'md.sys.color.on-primary', name: 'On Primary', hex: '#FFFFFF', role: 'Text/icons on primary' },
    { token: 'md.sys.color.primary-container', name: 'Primary Container', hex: '#D8E2FF', role: 'Active chips, highlights' },
    { token: 'md.sys.color.on-primary-container', name: 'On Primary Container', hex: '#001D33', role: 'Text inside active pills' },
    { token: 'md.sys.color.secondary', name: 'Secondary Purple Accent', hex: '#6750A4', role: 'FABs, subtle highlights' },
    { token: 'md.sys.color.secondary-container', name: 'Secondary Container', hex: '#EADDFF', role: 'Status pills, badges' },
    { token: 'md.sys.color.surface', name: 'Surface White', hex: '#FDFBFF', role: 'Page canvas background' },
    { token: 'md.sys.color.surface-variant', name: 'Surface Variant Gray', hex: '#E1E2EC', role: 'Cards & elevated blocks' },
    { token: 'md.sys.color.outline', name: 'Divider Gray', hex: '#757780', role: 'Card borders & dividers' },
    { token: 'md.sys.color.on-surface', name: 'Dark Surface Text', hex: '#1A1C1E', role: 'Display hero headings' },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-start animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white min-h-full p-6 shadow-2xl flex flex-col justify-between border-r border-[#E2E8F0] overflow-y-auto animate-in slide-in-from-left duration-300">
        
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E1E2EC] pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#005CBB] text-white flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-[#1A1C1E]">M3 Token Inspector</h2>
                <p className="text-xs text-[#757780]">Material Design 3 Palette</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#44474E] hover:text-[#1A1C1E] hover:bg-[#E1E2EC]/50 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Color Tokens list */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
              Design System Palette Tokens
            </p>

            <div className="space-y-2">
              {tokens.map((t) => (
                <div
                  key={t.token}
                  onClick={() => handleCopy(t.hex)}
                  className="group relative p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#1A56DB] flex items-center justify-between cursor-pointer transition-all"
                >
                  <M3Ripple color="rgba(26,86,219,0.1)" />
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-xl border border-black/10 shrink-0 shadow-2xs"
                      style={{ backgroundColor: t.hex }}
                    />
                    <div>
                      <p className="text-xs font-bold text-[#0F172A]">{t.name}</p>
                      <p className="text-[10px] text-[#64748B] font-mono">{t.token}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#1A56DB]">{t.hex}</span>
                    {copiedHex === t.hex ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography Token Specs */}
          <div className="p-4 rounded-2xl bg-[#FEF7FF] border border-[#E1E6EE] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#1A56DB]" />
              M3 Typography Scales Applied
            </h3>
            <div className="space-y-1.5 text-xs text-[#334155]">
              <div className="flex justify-between border-b border-[#E1E6EE] pb-1">
                <span className="font-semibold">Display Large</span>
                <span className="font-mono text-[#64748B]">57px / Line Height 64px</span>
              </div>
              <div className="flex justify-between border-b border-[#E1E6EE] pb-1">
                <span className="font-semibold">Headline Medium</span>
                <span className="font-mono text-[#64748B]">28px / Line Height 36px</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Body Large</span>
                <span className="font-mono text-[#64748B]">16px / Line Height 24px</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-4 border-t border-[#E1E6EE] mt-6 text-center text-xs text-[#94A3B8]">
          Click any color block to copy Hex code
        </div>

      </div>
    </div>
  );
};
