import React from 'react';
import { Layout, Monitor, Smartphone, Tablet, Code2, Sparkles } from 'lucide-react';
import { DisplayFrameMode } from '../types';

interface MockupFrameHeaderProps {
  currentMode: DisplayFrameMode['type'];
  onModeChange: (mode: DisplayFrameMode['type']) => void;
  onOpenCodeInspector: () => void;
}

export const MockupFrameHeader: React.FC<MockupFrameHeaderProps> = ({
  currentMode,
  onModeChange,
  onOpenCodeInspector,
}) => {
  return (
    <div className="bg-[#2D3436] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs sticky top-0 z-50 border-b-2 border-black">
      {/* Brand & Mode Label */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1.5 bg-[#0984E3] px-2.5 py-1 rounded font-black tracking-wider uppercase text-[11px]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONNECTIVE FLAT MOCKUP</span>
        </div>
        <span className="hidden sm:inline text-gray-300 font-medium">
          Pure Flat Design Showcase (Zero Shadows • Solid Blocks)
        </span>
      </div>

      {/* Frame / View Controls */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        <span className="hidden md:inline text-gray-400 font-mono text-[10px] mr-1 uppercase">
          Display Mode:
        </span>

        {/* Full View */}
        <button
          onClick={() => onModeChange('full')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded font-bold transition-all cursor-pointer ${
            currentMode === 'full'
              ? 'bg-[#0984E3] text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          title="Full Viewport Width"
        >
          <Layout className="w-3.5 h-3.5" />
          <span>Full Width</span>
        </button>

        {/* Photorealistic Screen Frame */}
        <button
          onClick={() => onModeChange('mockup')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded font-bold transition-all cursor-pointer ${
            currentMode === 'mockup'
              ? 'bg-[#FF7675] text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          title="Photorealistic Display Screen Frame"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Screen Mockup</span>
        </button>

        {/* Tablet View */}
        <button
          onClick={() => onModeChange('tablet')}
          className={`hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
            currentMode === 'tablet'
              ? 'bg-[#2ECC71] text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          title="Tablet View"
        >
          <Tablet className="w-3.5 h-3.5" />
          <span>Tablet</span>
        </button>

        {/* Mobile View */}
        <button
          onClick={() => onModeChange('mobile')}
          className={`hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
            currentMode === 'mobile'
              ? 'bg-[#2ECC71] text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          title="Mobile View"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile</span>
        </button>

        {/* Code Inspector Trigger */}
        <button
          onClick={onOpenCodeInspector}
          className="flex items-center space-x-1.5 bg-[#0984E3] hover:bg-[#0773C5] text-white font-extrabold px-3 py-1 rounded cursor-pointer transition-colors border border-white/20"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span className="hidden lg:inline">Inspect HTML & CSS</span>
        </button>
      </div>
    </div>
  );
};
