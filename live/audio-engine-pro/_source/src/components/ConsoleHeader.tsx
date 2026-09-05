import React from 'react';
import { MasterState } from '../types';
import { Power, Sparkles, Monitor, RotateCcw, Volume2 } from 'lucide-react';
import { audioEngine } from '../lib/audioEngine';

interface ConsoleHeaderProps {
  master: MasterState;
  presets: { id: string; name: string }[];
  onMasterChange: (updated: MasterState) => void;
  onSelectPreset: (presetId: string) => void;
  onResetConsole: () => void;
}

export const ConsoleHeader: React.FC<ConsoleHeaderProps> = ({
  master,
  presets,
  onMasterChange,
  onSelectPreset,
  onResetConsole,
}) => {
  const handlePowerToggle = () => {
    const nextPower = !master.powerOn;
    audioEngine.playPowerRelaySound(nextPower);
    onMasterChange({ ...master, powerOn: nextPower, isPlaying: nextPower ? master.isPlaying : false });
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-800 via-gray-900 to-black p-3 border-b-2 border-gray-950 shadow-2xl flex flex-wrap items-center justify-between gap-4 relative select-none z-20">
      {/* LEFT: Engraved Branding Plate */}
      <div className="flex items-center gap-3">
        {/* Metal Plate Badge */}
        <div className="px-4 py-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded border border-gray-600/80 shadow-2xl relative overflow-hidden flex flex-col items-start">
          <div className="text-sm md:text-base font-black tracking-widest text-engraved-gold uppercase font-serif">
            AUDIO ENGINE PRO
          </div>
          <div className="text-[8px] font-mono tracking-wider text-gray-400 uppercase">
            SYSTEM 8800 • ANALOG / DIGITAL HYBRID MIXING CONSOLE
          </div>
          {/* Subtle metallic diagonal sheen */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* LED System Status Indicator */}
        <div className="flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded border border-gray-800">
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              master.powerOn ? 'led-red-on' : 'led-off'
            }`}
          />
          <span className="text-[9px] font-mono text-gray-300 font-bold uppercase tracking-wider">
            {master.powerOn ? 'ONLINE' : 'OFFLINE'}
          </span>
        </div>
      </div>

      {/* CENTER: Preset Selector & View Framing Switch */}
      <div className="flex items-center gap-3">
        {/* Presets Menu */}
        <div className="flex items-center gap-2 bg-gray-950 p-1.5 rounded border border-gray-800 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[10px] font-mono text-gray-300 uppercase font-semibold">
            PRESET:
          </span>
          <select
            value={master.activePreset}
            onChange={(e) => onSelectPreset(e.target.value)}
            disabled={!master.powerOn}
            className="bg-gray-900 text-amber-300 text-[10px] font-mono px-2 py-1 rounded border border-gray-700 outline-none cursor-pointer hover:border-amber-500 disabled:opacity-40"
          >
            {presets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Framing View Mode Toggle (Studio Room Frame vs Full Console Focus) */}
        <button
          type="button"
          onClick={() =>
            onMasterChange({
              ...master,
              viewMode: master.viewMode === 'studio' ? 'console' : 'studio',
            })
          }
          className="px-2.5 py-1.5 bg-gray-900 hover:bg-gray-800 text-gray-300 text-[10px] font-mono font-bold uppercase rounded border border-gray-700 flex items-center gap-1.5 cursor-pointer shadow transition-colors"
          title="Toggle studio room frame background"
        >
          <Monitor className="w-3.5 h-3.5 text-cyan-400" />
          <span>{master.viewMode === 'studio' ? 'STUDIO VIEW' : 'CONSOLE FOCUS'}</span>
        </button>

        {/* Reset Console Button */}
        <button
          type="button"
          onClick={onResetConsole}
          disabled={!master.powerOn}
          className="p-1.5 bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white rounded border border-gray-800 cursor-pointer disabled:opacity-40 transition-colors"
          title="Reset all channel knobs to nominal"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* RIGHT: RED METAL HEAVY POWER SWITCH */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
            MAIN POWER
          </span>
          <button
            type="button"
            onClick={handlePowerToggle}
            className={`relative px-4 py-2 rounded-md font-mono text-xs font-black tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-2xl transition-all duration-200 ${
              master.powerOn
                ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white shadow-[0_0_20px_rgba(239,68,68,0.7)] border border-red-400'
                : 'bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 text-gray-500 border border-gray-700'
            }`}
          >
            <Power className={`w-4 h-4 ${master.powerOn ? 'text-white animate-pulse' : 'text-gray-600'}`} />
            <span>{master.powerOn ? 'POWER ON' : 'POWER OFF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
