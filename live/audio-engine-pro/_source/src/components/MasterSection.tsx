import React from 'react';
import { MasterState } from '../types';
import { VuMeter } from './VuMeter';
import { OledScreen } from './OledScreen';
import { RotaryKnob } from './RotaryKnob';
import { FaderSlider } from './FaderSlider';
import { ToggleSwitch } from './ToggleSwitch';
import { Play, Square, Volume2, Sparkles, Sliders } from 'lucide-react';

interface MasterSectionProps {
  master: MasterState;
  activePresetName: string;
  onChange: (updated: MasterState) => void;
  onToggleTransport: () => void;
}

export const MasterSection: React.FC<MasterSectionProps> = ({
  master,
  activePresetName,
  onChange,
  onToggleTransport,
}) => {
  return (
    <div
      className="flex flex-col items-center bg-dark-console p-3 rounded-md border border-gray-800 shadow-2xl relative select-none w-80 shrink-0 bevel-panel"
      style={{
        borderTop: '2px solid rgba(255,255,255,0.15)',
        background: 'linear-gradient(180deg, #2b2e35 0%, #16181c 100%)',
      }}
    >
      {/* Corner Heavy Screws */}
      <div className="absolute top-1.5 left-2 w-3 h-3 rounded-full bg-gray-500 border border-gray-300 shadow-md flex items-center justify-center">
        <div className="w-2 h-[1px] bg-gray-950 transform rotate-45" />
      </div>
      <div className="absolute top-1.5 right-2 w-3 h-3 rounded-full bg-gray-500 border border-gray-300 shadow-md flex items-center justify-center">
        <div className="w-2 h-[1px] bg-gray-950 transform -rotate-12" />
      </div>

      {/* Engraved Master Section Header */}
      <div className="text-center mb-2 mt-1 w-full">
        <div className="text-[11px] font-black tracking-widest text-engraved uppercase">
          MASTER SECTION
        </div>
        <div className="text-[8px] font-mono text-gray-400">
          BUS OUTPUT / MONITOR MATRIX
        </div>
      </div>

      {/* DUAL VINTAGE ANALOG VU METERS */}
      <div className="flex gap-2 w-full justify-center mb-3 p-1.5 bg-black/40 rounded-lg border border-gray-800">
        <VuMeter
          label="LEFT"
          levelDb={master.vuMeterL}
          powerOn={master.powerOn}
          width={130}
          height={85}
        />
        <VuMeter
          label="RIGHT"
          levelDb={master.vuMeterR}
          powerOn={master.powerOn}
          width={130}
          height={85}
        />
      </div>

      {/* GLOWING OLED SCREEN DISPLAY */}
      <div className="w-full mb-3">
        <OledScreen
          powerOn={master.powerOn}
          displayMode={master.displayMode}
          bpm={master.bpm}
          activePresetName={activePresetName}
          onModeChange={(m) => onChange({ ...master, displayMode: m })}
        />
      </div>

      {/* TRANSPORT PLAY / STOP DECK CONTROLS & BPM */}
      <div className="flex items-center justify-between w-full p-2 bg-gray-950/80 rounded border border-gray-800 mb-3 shadow-inner">
        {/* Play/Stop Tape Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onToggleTransport}
            className={`px-3 py-1.5 rounded flex items-center gap-1.5 text-[10px] font-bold font-mono uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-md ${
              master.isPlaying
                ? 'bg-emerald-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)] border border-emerald-400'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600'
            }`}
          >
            {master.isPlaying ? <Square className="w-3 h-3 fill-white" /> : <Play className="w-3 h-3 fill-white" />}
            {master.isPlaying ? 'PAUSE' : 'PLAY'}
          </button>
        </div>

        {/* BPM Knob */}
        <RotaryKnob
          label="TEMPO"
          value={master.bpm}
          min={60}
          max={180}
          step={1}
          unit="BPM"
          size="sm"
          color="gold"
          onChange={(val) => onChange({ ...master, bpm: val })}
        />
      </div>

      {/* PROMINENT LARGE MASTER VOLUME KNOB */}
      <div className="flex flex-col items-center justify-center py-2 w-full border-y border-gray-800 my-1 bg-black/20 rounded">
        <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase mb-1">
          MASTER VOLUME
        </span>
        <RotaryKnob
          label=""
          value={master.volume}
          min={-60}
          max={10}
          defaultValue={0}
          unit="dB"
          size="lg"
          color="aluminum"
          onChange={(val) => onChange({ ...master, volume: val })}
        />
      </div>

      {/* MASTER BUS COMPRESSOR & SATURATOR CONTROLS */}
      <div className="flex items-center justify-around w-full py-2 border-b border-gray-800">
        <ToggleSwitch
          label="COMPRESSOR"
          active={master.compressorEnabled}
          color="green"
          size="sm"
          onToggle={(val) => onChange({ ...master, compressorEnabled: val })}
        />

        <ToggleSwitch
          label="ANALOG WARMTH"
          active={master.warmthSaturator}
          color="amber"
          size="sm"
          onToggle={(val) => onChange({ ...master, warmthSaturator: val })}
        />
      </div>

      {/* DUAL MASTER FADERS (LEFT & RIGHT) */}
      <div className="flex items-center justify-center gap-4 w-full py-3">
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-gray-400 uppercase mb-1">
            BUS L
          </span>
          <FaderSlider
            value={master.faderL}
            min={-60}
            max={10}
            defaultValue={0}
            height={160}
            accentColor="#f59e0b"
            onChange={(val) => onChange({ ...master, faderL: val, faderR: val })}
          />
        </div>

        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-gray-400 uppercase mb-1">
            BUS R
          </span>
          <FaderSlider
            value={master.faderR}
            min={-60}
            max={10}
            defaultValue={0}
            height={160}
            accentColor="#f59e0b"
            onChange={(val) => onChange({ ...master, faderL: val, faderR: val })}
          />
        </div>
      </div>

      {/* Bottom Screws */}
      <div className="absolute bottom-1.5 left-2 w-3 h-3 rounded-full bg-gray-500 border border-gray-300 shadow-md flex items-center justify-center">
        <div className="w-2 h-[1px] bg-gray-950 transform rotate-12" />
      </div>
      <div className="absolute bottom-1.5 right-2 w-3 h-3 rounded-full bg-gray-500 border border-gray-300 shadow-md flex items-center justify-center">
        <div className="w-2 h-[1px] bg-gray-950 transform -rotate-45" />
      </div>
    </div>
  );
};
