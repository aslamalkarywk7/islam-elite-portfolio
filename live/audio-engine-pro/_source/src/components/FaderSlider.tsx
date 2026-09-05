import React, { useState, useRef } from 'react';
import { audioEngine } from '../lib/audioEngine';

interface FaderSliderProps {
  label?: string;
  value: number; // dB value from -60 to +10
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
  onChange: (newValue: number) => void;
  accentColor?: string;
  height?: number; // track height in px
}

export const FaderSlider: React.FC<FaderSliderProps> = ({
  label,
  value,
  min = -60,
  max = 10,
  defaultValue = 0,
  step = 0.5,
  onChange,
  accentColor = '#3b82f6',
  height = 200,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Normalize position 0 (bottom, -60dB) to 1 (top, +10dB)
  // 0 dB sits around 75% height position for realistic audio fader feel
  const norm = (value - min) / (max - min);
  const handleTopPercent = (1 - norm) * 100;

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setShowTooltip(true);
    audioEngine.playClickSound(1400);

    const updateFromMouse = (moveEvent: MouseEvent) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const clickY = moveEvent.clientY - rect.top;
      const clampedY = Math.max(0, Math.min(rect.height, clickY));
      const newNorm = 1 - clampedY / rect.height;

      let newVal = min + newNorm * (max - min);
      if (step > 0) {
        newVal = Math.round(newVal / step) * step;
      }
      onChange(Math.min(max, Math.max(min, newVal)));
    };

    updateFromMouse(e.nativeEvent);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      updateFromMouse(moveEvent);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setShowTooltip(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleDoubleClick = () => {
    onChange(defaultValue);
    audioEngine.playClickSound(2000);
  };

  const dbScalePoints = [
    { db: 10, label: '+10' },
    { db: 5, label: '+5' },
    { db: 0, label: '0' },
    { db: -5, label: '-5' },
    { db: -10, label: '-10' },
    { db: -20, label: '-20' },
    { db: -30, label: '-30' },
    { db: -40, label: '-40' },
    { db: -60, label: '-U' },
  ];

  return (
    <div className="flex flex-col items-center select-none relative py-1">
      {label && (
        <span className="text-[10px] font-bold text-gray-300 uppercase mb-2 tracking-wider">
          {label}
        </span>
      )}

      <div className="flex items-center gap-1.5">
        {/* dB Scale Markings (Left) */}
        <div className="flex flex-col justify-between text-[8px] font-mono text-gray-400 h-full py-1 text-right w-5">
          {dbScalePoints.map((pt) => (
            <div
              key={pt.db}
              className={`leading-none ${pt.db === 0 ? 'text-amber-400 font-bold' : ''}`}
              style={{
                top: `${(1 - (pt.db - min) / (max - min)) * 100}%`,
              }}
            >
              {pt.label}
            </div>
          ))}
        </div>

        {/* Fader Track & Handle Container */}
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => !isDragging && setShowTooltip(false)}
          className="relative w-8 cursor-ns-resize flex justify-center py-2"
          style={{ height: `${height}px` }}
        >
          {/* Metal Slot Track Groove */}
          <div className="w-2.5 h-full rounded-full bg-fader-track relative border border-gray-900/80 shadow-inner">
            {/* Center Slot Line */}
            <div className="absolute left-1/2 top-1 bottom-1 -translate-x-1/2 w-[1px] bg-black/80" />

            {/* 0dB Nominal Marker Line across track */}
            <div
              className="absolute left-0 right-0 h-[2px] bg-amber-500/80 z-0 pointer-events-none"
              style={{ top: `${(1 - (0 - min) / (max - min)) * 100}%` }}
            />
          </div>

          {/* Tactile Fader Handle Slider */}
          <div
            onDoubleClick={handleDoubleClick}
            className="absolute left-1/2 -translate-x-1/2 w-10 h-7 rounded-sm cursor-grab active:cursor-grabbing transition-shadow z-10 flex flex-col justify-center items-center shadow-2xl border border-gray-600/60"
            style={{
              top: `calc(${handleTopPercent}% - 14px)`,
              background: 'linear-gradient(180deg, #525866 0%, #292d36 40%, #15171c 100%)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.85), inset 0 1px 1px rgba(255,255,255,0.4)',
            }}
          >
            {/* Side Ridge Grip Textures */}
            <div className="w-full flex justify-between px-1 pointer-events-none opacity-40">
              <div className="w-1 h-3 border-r border-gray-300" />
              <div className="w-1 h-3 border-l border-gray-300" />
            </div>

            {/* Center Alignment Line */}
            <div
              className="w-full h-[2.5px] shadow-[0_0_4px_currentColor]"
              style={{ backgroundColor: accentColor, color: accentColor }}
            />

            {/* Bottom Grip Ridge */}
            <div className="w-6 h-[1px] bg-gray-900 mt-1" />
          </div>
        </div>

        {/* dB Scale Markings (Right Ticks) */}
        <div className="flex flex-col justify-between h-full py-1.5 w-2">
          {dbScalePoints.map((pt) => (
            <div
              key={pt.db}
              className={`w-1.5 h-[1px] ${pt.db === 0 ? 'w-2.5 bg-amber-400' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>

      {/* Realtime dB Value Display */}
      {showTooltip && (
        <div className="absolute -bottom-6 bg-black/95 border border-amber-500/50 text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded shadow-xl pointer-events-none z-30">
          {value <= -59 ? '-INF' : `${value > 0 ? '+' : ''}${value.toFixed(1)} dB`}
        </div>
      )}

      {/* Static Readout */}
      <span className="text-[10px] font-mono text-gray-300 mt-1 font-semibold">
        {value <= -59 ? '-INF' : `${value > 0 ? '+' : ''}${value.toFixed(1)}`}
      </span>
    </div>
  );
};
