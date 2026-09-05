import React, { useState, useRef, useEffect } from 'react';
import { audioEngine } from '../lib/audioEngine';

interface RotaryKnobProps {
  label: string;
  value: number; // Current numeric value
  min: number;
  max: number;
  defaultValue?: number;
  step?: number;
  unit?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'aluminum' | 'black' | 'red' | 'blue' | 'gold';
  onChange: (newValue: number) => void;
  ticks?: boolean;
}

export const RotaryKnob: React.FC<RotaryKnobProps> = ({
  label,
  value,
  min,
  max,
  defaultValue = 0,
  step = 0.5,
  unit = 'dB',
  size = 'md',
  color = 'aluminum',
  onChange,
  ticks = true,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const startYRef = useRef<number>(0);
  const startValueRef = useRef<number>(value);

  // Angle range: -135 deg to +135 deg (270 deg total)
  const norm = (value - min) / (max - min);
  const angle = -135 + norm * 270;

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setShowTooltip(true);
    startYRef.current = e.clientY;
    startValueRef.current = value;
    audioEngine.playClickSound(1800);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = startYRef.current - moveEvent.clientY;
      const range = max - min;
      const sensitivity = moveEvent.shiftKey ? 0.001 : 0.005; // Shift for fine-tuning
      const deltaVal = deltaY * range * sensitivity;

      let newVal = Math.min(max, Math.max(min, startValueRef.current + deltaVal));
      if (step > 0) {
        newVal = Math.round(newVal / step) * step;
      }
      onChange(newVal);
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
    audioEngine.playClickSound(2200);
  };

  const knobSizes = {
    sm: { container: 'w-10 h-10', inner: 'w-8 h-8', indicator: 'h-3.5' },
    md: { container: 'w-13 h-13', inner: 'w-10 h-10', indicator: 'h-4.5' },
    lg: { container: 'w-18 h-18', inner: 'w-14 h-14', indicator: 'h-6' },
  };

  const currentSize = knobSizes[size];

  // Color theme gradients
  const capGradients = {
    aluminum: 'bg-gradient-to-br from-gray-200 via-gray-400 to-gray-700',
    black: 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-950',
    red: 'bg-gradient-to-br from-red-500 via-red-700 to-red-950',
    blue: 'bg-gradient-to-br from-cyan-400 via-blue-600 to-blue-950',
    gold: 'bg-gradient-to-br from-amber-200 via-amber-500 to-amber-800',
  };

  return (
    <div className="flex flex-col items-center select-none group relative">
      {/* Label above knob */}
      <span className="text-[10px] font-bold tracking-wider text-gray-300 uppercase mb-1 drop-shadow-sm">
        {label}
      </span>

      {/* Knob Container */}
      <div className="relative flex items-center justify-center p-1">
        {/* Precision Calibration Ticks */}
        {ticks && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none scale-125" viewBox="0 0 100 100">
            {Array.from({ length: 11 }).map((_, i) => {
              const tickAngle = (-135 + (i / 10) * 270) * (Math.PI / 180);
              const x1 = 50 + 40 * Math.sin(tickAngle);
              const y1 = 50 - 40 * Math.cos(tickAngle);
              const x2 = 50 + 45 * Math.sin(tickAngle);
              const y2 = 50 - 45 * Math.cos(tickAngle);
              const isCenter = i === 5;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isCenter ? '#f59e0b' : '#6b7280'}
                  strokeWidth={isCenter ? '2.5' : '1.5'}
                  strokeLinecap="round"
                  opacity={0.8}
                />
              );
            })}
          </svg>
        )}

        {/* Outer Ribbed Knurled Grip Ring */}
        <div
          onMouseDown={handleMouseDown}
          onDoubleClick={handleDoubleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => !isDragging && setShowTooltip(false)}
          className={`${currentSize.container} rounded-full cursor-ns-resize relative flex items-center justify-center bg-knurled-grip shadow-2xl transition-transform active:scale-98`}
          style={{
            boxShadow: '0 6px 12px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.3)',
          }}
        >
          {/* Beveled Metal Outer Rim */}
          <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-gray-300 via-gray-600 to-gray-900 p-[1px] shadow-inner">
            {/* Rotating Aluminum Cap */}
            <div
              className={`w-full h-full rounded-full ${capGradients[color]} relative flex items-center justify-center shadow-inner overflow-hidden`}
              style={{
                transform: `rotate(${angle}deg)`,
                transition: isDragging ? 'none' : 'transform 0.08s ease-out',
              }}
            >
              {/* Conic Metallic Reflection Highlight */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none opacity-40"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(255,255,255,0.8) 0deg, rgba(0,0,0,0.2) 60deg, rgba(255,255,255,0.7) 180deg, rgba(0,0,0,0.3) 270deg, rgba(255,255,255,0.8) 360deg)',
                }}
              />

              {/* Inset Center Ridge */}
              <div className={`${currentSize.inner} rounded-full bg-gradient-to-b from-gray-800 to-gray-950 flex items-center justify-center border border-gray-700/50 shadow-inner`}>
                {/* Pointer Indicator Line/Notch */}
                <div className="absolute top-1 w-[2.5px] bg-amber-400 rounded-full shadow-[0_0_6px_#f59e0b]" style={{ height: '40%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Numeric Value Display Tooltip */}
      {showTooltip && (
        <div className="absolute -top-7 bg-black/90 border border-amber-500/50 text-amber-300 text-[10px] font-mono px-1.5 py-0.5 rounded shadow-lg pointer-events-none whitespace-nowrap z-30">
          {value > 0 ? `+${value}` : value} {unit}
        </div>
      )}

      {/* Compact Readout below */}
      <span className="text-[9px] font-mono text-gray-400 mt-0.5">
        {value > 0 ? `+${value}` : value}
      </span>
    </div>
  );
};
