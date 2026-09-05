import React from 'react';
import { audioEngine } from '../lib/audioEngine';

interface ToggleSwitchProps {
  label: string;
  active: boolean;
  type?: 'metal_toggle' | 'push_button';
  color?: 'red' | 'amber' | 'green' | 'blue';
  size?: 'sm' | 'md';
  onToggle: (newActive: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  active,
  type = 'push_button',
  color = 'red',
  size = 'md',
  onToggle,
}) => {
  const handleClick = () => {
    const nextState = !active;
    audioEngine.playClickSound(nextState ? 2400 : 1200);
    onToggle(nextState);
  };

  const ledColors = {
    red: active ? 'led-red-on' : 'led-off',
    amber: active ? 'led-amber-on' : 'led-off',
    green: active ? 'led-green-on' : 'led-off',
    blue: active ? 'led-blue-on' : 'led-off',
  };

  if (type === 'metal_toggle') {
    return (
      <div className="flex flex-col items-center select-none group cursor-pointer" onClick={handleClick}>
        <span className="text-[9px] font-bold text-gray-300 uppercase mb-1 tracking-wider drop-shadow-sm">
          {label}
        </span>

        {/* Metal Toggle Housing */}
        <div className="w-7 h-11 rounded-md bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 p-1 border border-gray-700/60 shadow-xl flex flex-col items-center justify-between relative">
          {/* LED Status Light */}
          <div className={`w-2 h-2 rounded-full transition-all duration-200 ${ledColors[color]}`} />

          {/* Metal Stem Flip Lever */}
          <div className="relative w-4 h-6 flex items-center justify-center my-0.5">
            {/* Metal Track Slot */}
            <div className="w-1.5 h-full bg-black rounded-full inset-shadow" />

            {/* Silver Metal Switch Arm */}
            <div
              className="absolute w-3.5 h-4 rounded-full bg-gradient-to-b from-gray-200 via-gray-400 to-gray-700 border border-gray-100 shadow-md transition-transform duration-150"
              style={{
                transform: active ? 'translateY(-5px) scaleY(1.1)' : 'translateY(5px) scaleY(0.9)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.8)',
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Tactile Push Button Style
  const buttonSizes = {
    sm: 'w-7 h-7 text-[9px]',
    md: 'w-9 h-8 text-[10px]',
  };

  return (
    <div className="flex flex-col items-center select-none">
      <button
        type="button"
        onClick={handleClick}
        className={`${buttonSizes[size]} rounded flex flex-col items-center justify-between p-1 font-bold uppercase tracking-wider transition-all duration-100 cursor-pointer shadow-lg active:translate-y-0.5`}
        style={{
          background: active
            ? 'linear-gradient(180deg, #373b42 0%, #1c1e22 100%)'
            : 'linear-gradient(180deg, #2b2e34 0%, #17181c 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
          borderRight: '1px solid rgba(0, 0, 0, 0.8)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.9)',
          boxShadow: active
            ? 'inset 0 2px 5px rgba(0,0,0,0.9), 0 0 10px rgba(255,255,255,0.1)'
            : '0 4px 8px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.2)',
        }}
      >
        {/* LED Indicator Strip at top of button */}
        <div className={`w-full h-1 rounded-xs transition-all duration-200 ${ledColors[color]}`} />

        {/* Text Label */}
        <span className={`leading-none ${active ? 'text-white font-extrabold shadow-sm' : 'text-gray-400'}`}>
          {label}
        </span>
      </button>
    </div>
  );
};
