import React, { useEffect, useRef } from 'react';
import { audioEngine } from '../lib/audioEngine';

interface OledScreenProps {
  powerOn: boolean;
  displayMode: 'waveform' | 'spectrum' | 'eq_curve' | 'info';
  bpm: number;
  activePresetName: string;
  onModeChange: (mode: 'waveform' | 'spectrum' | 'eq_curve' | 'info') => void;
}

export const OledScreen: React.FC<OledScreenProps> = ({
  powerOn,
  displayMode,
  bpm,
  activePresetName,
  onModeChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          drawScreen(ctx, canvas.width, canvas.height, powerOn, displayMode);
        }
      }
      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);
    return () => {
      if (animRef.current !== null) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [powerOn, displayMode]);

  const drawScreen = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    isPower: boolean,
    mode: string
  ) => {
    ctx.clearRect(0, 0, w, h);

    // Deep OLED Background
    ctx.fillStyle = isPower ? '#070f14' : '#030507';
    ctx.fillRect(0, 0, w, h);

    if (!isPower) {
      // Screen off state
      ctx.fillStyle = '#0a0d10';
      ctx.fillRect(0, 0, w, h);
      return;
    }

    // Grid lines
    ctx.strokeStyle = 'rgba(0, 255, 200, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 15) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const { freqData, waveData } = audioEngine.getMasterLevels();

    if (mode === 'waveform') {
      // Realtime Waveform Oscilloscope
      ctx.strokeStyle = '#00f2ff';
      ctx.shadowColor = '#00f2ff';
      ctx.shadowBlur = 8;
      ctx.lineWidth = 2;

      ctx.beginPath();
      const sliceWidth = w / (waveData.length || 1);
      let x = 0;

      for (let i = 0; i < waveData.length; i++) {
        const v = waveData[i] / 128.0;
        const y = (v * h) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    } else if (mode === 'spectrum') {
      // RTA Frequency Bars
      const barWidth = (w / (freqData.length || 32)) * 1.8;
      let barX = 0;

      for (let i = 0; i < freqData.length; i += 2) {
        const barHeight = (freqData[i] / 255) * (h - 20);

        const gradient = ctx.createLinearGradient(0, h, 0, 0);
        gradient.addColorStop(0, '#00ff88');
        gradient.addColorStop(0.7, '#00d9ff');
        gradient.addColorStop(1, '#ff0055');

        ctx.fillStyle = gradient;
        ctx.fillRect(barX, h - barHeight - 10, barWidth - 2, barHeight);

        barX += barWidth;
      }
    } else if (mode === 'eq_curve') {
      // Parametric EQ Response Curve
      ctx.strokeStyle = '#ffb700';
      ctx.shadowColor = '#ffb700';
      ctx.shadowBlur = 6;
      ctx.lineWidth = 2.5;

      ctx.beginPath();
      const midY = h / 2;
      ctx.moveTo(0, midY);

      for (let i = 0; i < w; i += 5) {
        const freqRatio = i / w;
        // Simulated curve based on active audio frequencies
        const amp = Math.sin(freqRatio * Math.PI * 3) * 15 * (freqData[i % freqData.length] / 255);
        ctx.lineTo(i, midY - amp);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    } else if (mode === 'info') {
      // System Stats & Timecode
      ctx.font = '10px monospace';
      ctx.fillStyle = '#00f2ff';
      ctx.fillText(`DSP REVERB: ULTRA WARM`, 10, 20);
      ctx.fillText(`SYSTEM BUS: 32-BIT FLOAT`, 10, 35);
      ctx.fillText(`SAMPLING: 96.0 kHz`, 10, 50);
      ctx.fillText(`CLK SOURCE: INTERNAL OCXO`, 10, 65);
      ctx.fillText(`HEADROOM: +24 dBu`, 10, 80);
    }

    // CRT Scanlines Effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    for (let y = 0; y < h; y += 3) {
      ctx.fillRect(0, y, w, 1);
    }

    // Glass glare line
    const glare = ctx.createLinearGradient(0, 0, w, h);
    glare.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
    glare.addColorStop(0.4, 'rgba(255, 255, 255, 0.02)');
    glare.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
    ctx.fillStyle = glare;
    ctx.fillRect(0, 0, w, h);
  };

  return (
    <div className="flex flex-col bg-black p-2 rounded-lg border border-cyan-950/80 shadow-2xl relative overflow-hidden">
      {/* Screen Header Bar */}
      <div className="flex items-center justify-between border-b border-cyan-900/40 pb-1 mb-1 text-[9px] font-mono">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold tracking-widest uppercase">
            OLED DSP MON
          </span>
          <span className="text-amber-400 bg-amber-950/60 px-1 py-0.5 rounded">
            {bpm} BPM
          </span>
        </div>

        {/* Display Mode Switcher */}
        <div className="flex gap-1">
          {(['waveform', 'spectrum', 'eq_curve', 'info'] as const).map((m) => (
            <button
              key={m}
              onClick={() => onModeChange(m)}
              className={`px-1.5 py-0.5 text-[8px] uppercase font-mono rounded cursor-pointer transition-colors ${
                displayMode === m
                  ? 'bg-cyan-500 text-black font-bold'
                  : 'text-gray-400 hover:text-cyan-300 bg-gray-900'
              }`}
            >
              {m === 'waveform' ? 'WAVE' : m === 'spectrum' ? 'RTA' : m === 'eq_curve' ? 'EQ' : 'INFO'}
            </button>
          ))}
        </div>
      </div>

      {/* OLED Canvas */}
      <div className="relative w-full h-24 bg-black rounded overflow-hidden border border-cyan-900/50">
        <canvas
          ref={canvasRef}
          width={320}
          height={96}
          className="w-full h-full block"
        />

        {/* Top Info Overlay */}
        <div className="absolute bottom-1 right-2 text-[9px] font-mono text-cyan-400/80 pointer-events-none">
          PRESET: {activePresetName}
        </div>
      </div>
    </div>
  );
};
