import React, { useState, useEffect, useRef } from 'react';
import { ChannelState } from '../types';
import { RotaryKnob } from './RotaryKnob';
import { FaderSlider } from './FaderSlider';
import { ToggleSwitch } from './ToggleSwitch';
import { audioEngine } from '../lib/audioEngine';
import { Upload, Music, Disc } from 'lucide-react';

interface ChannelStripProps {
  channel: ChannelState;
  index: number;
  powerOn: boolean;
  onChange: (updated: ChannelState) => void;
  onUploadAudio: (channelId: string, file: File) => void;
}

export const ChannelStrip: React.FC<ChannelStripProps> = ({
  channel,
  index,
  powerOn,
  onChange,
  onUploadAudio,
}) => {
  const [levelL, setLevelL] = useState(0);
  const [levelR, setLevelR] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let animId: number;
    const updateMeter = () => {
      if (powerOn) {
        const levels = audioEngine.getChannelLevels(channel.id);
        setLevelL(levels.levelL);
        setLevelR(levels.levelR);
      } else {
        setLevelL(0);
        setLevelR(0);
      }
      animId = requestAnimationFrame(updateMeter);
    };
    animId = requestAnimationFrame(updateMeter);
    return () => cancelAnimationFrame(animId);
  }, [channel.id, powerOn]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUploadAudio(channel.id, e.target.files[0]);
    }
  };

  return (
    <div
      className="flex flex-col items-center bg-dark-console p-2 rounded-md border border-gray-800 shadow-2xl relative select-none w-36 shrink-0 bevel-panel"
      style={{
        borderTop: '2px solid rgba(255,255,255,0.12)',
        background: 'linear-gradient(180deg, #272a30 0%, #17191d 100%)',
      }}
    >
      {/* Screw Heads at corners */}
      <div className="absolute top-1 left-1.5 w-2.5 h-2.5 rounded-full bg-gray-600 border border-gray-400 shadow-sm flex items-center justify-center">
        <div className="w-1.5 h-[1px] bg-gray-950 transform rotate-45" />
      </div>
      <div className="absolute top-1 right-1.5 w-2.5 h-2.5 rounded-full bg-gray-600 border border-gray-400 shadow-sm flex items-center justify-center">
        <div className="w-1.5 h-[1px] bg-gray-950 transform -rotate-12" />
      </div>

      {/* Channel Header Label & OLED Track Tag */}
      <div className="flex flex-col items-center w-full mt-2 mb-2">
        <div
          className="text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-xs text-black shadow-sm mb-1 w-full text-center"
          style={{ backgroundColor: channel.color }}
        >
          CH {index + 1}
        </div>

        {/* OLED Channel Name Display */}
        <div className="w-full bg-black border border-cyan-900/60 rounded px-1 py-1 text-center shadow-inner relative group">
          <input
            type="text"
            value={channel.name}
            onChange={(e) => onChange({ ...channel, name: e.target.value })}
            className="w-full bg-transparent text-[10px] font-mono font-bold text-cyan-300 text-center outline-none truncate"
            title="Click to rename channel"
          />
          <span className="text-[7px] font-mono text-gray-500 uppercase block leading-none">
            {channel.type}
          </span>
        </div>
      </div>

      {/* GAIN & HPF FILTER SECTION */}
      <div className="flex flex-col items-center w-full py-1.5 border-b border-gray-800/80 gap-1.5">
        <RotaryKnob
          label="GAIN"
          value={channel.gain}
          min={-20}
          max={20}
          defaultValue={0}
          unit="dB"
          size="sm"
          color="aluminum"
          onChange={(val) => onChange({ ...channel, gain: val })}
        />

        <ToggleSwitch
          label="80Hz HPF"
          active={channel.hpf}
          type="metal_toggle"
          color="green"
          onToggle={(val) => onChange({ ...channel, hpf: val })}
        />
      </div>

      {/* EQUALIZER SECTION (BASS, MID, TREBLE) */}
      <div className="flex flex-col items-center w-full py-2 border-b border-gray-800/80 gap-2">
        <span className="text-[8px] font-mono text-amber-400/80 tracking-widest uppercase">
          EQUALIZER
        </span>

        <RotaryKnob
          label="HIGH"
          value={channel.eqTreble}
          min={-15}
          max={15}
          defaultValue={0}
          unit="dB"
          size="sm"
          color="black"
          onChange={(val) => onChange({ ...channel, eqTreble: val })}
        />

        <RotaryKnob
          label="MID"
          value={channel.eqMid}
          min={-15}
          max={15}
          defaultValue={0}
          unit="dB"
          size="sm"
          color="black"
          onChange={(val) => onChange({ ...channel, eqMid: val })}
        />

        <RotaryKnob
          label="BASS"
          value={channel.eqBass}
          min={-15}
          max={15}
          defaultValue={0}
          unit="dB"
          size="sm"
          color="black"
          onChange={(val) => onChange({ ...channel, eqBass: val })}
        />
      </div>

      {/* STEREO PAN */}
      <div className="flex flex-col items-center w-full py-2 border-b border-gray-800/80">
        <RotaryKnob
          label="PAN"
          value={channel.pan * 100}
          min={-100}
          max={100}
          defaultValue={0}
          unit="%"
          size="sm"
          color="blue"
          onChange={(val) => onChange({ ...channel, pan: val / 100 })}
        />
      </div>

      {/* MUTE / SOLO / PFL BUTTONS */}
      <div className="flex items-center justify-center gap-1.5 w-full py-2 border-b border-gray-800/80">
        <ToggleSwitch
          label="MUTE"
          active={channel.mute}
          color="red"
          size="sm"
          onToggle={(val) => onChange({ ...channel, mute: val })}
        />

        <ToggleSwitch
          label="SOLO"
          active={channel.solo}
          color="amber"
          size="sm"
          onToggle={(val) => onChange({ ...channel, solo: val })}
        />

        <ToggleSwitch
          label="PFL"
          active={channel.pfl}
          color="blue"
          size="sm"
          onToggle={(val) => onChange({ ...channel, pfl: val })}
        />
      </div>

      {/* FADER SECTION WITH LED SIGNAL METERS */}
      <div className="flex items-center justify-between w-full py-2 px-1 gap-1">
        {/* LED Peak Signal Meter Strip */}
        <div className="flex gap-0.5 bg-black/90 p-1 rounded border border-gray-900 h-[190px] items-end shadow-inner">
          {/* Left / Right LED Ladders */}
          {[levelL, levelR].map((lvl, colIdx) => (
            <div key={colIdx} className="flex flex-col-reverse justify-between h-full w-1.5">
              {Array.from({ length: 12 }).map((_, ledIdx) => {
                const threshold = (ledIdx + 1) / 12;
                const isActive = powerOn && lvl >= threshold;
                const isClip = ledIdx >= 10;
                const isWarn = ledIdx >= 7 && ledIdx < 10;

                let ledClass = 'bg-gray-900 border-gray-950';
                if (isActive) {
                  if (isClip) ledClass = 'led-red-on';
                  else if (isWarn) ledClass = 'led-amber-on';
                  else ledClass = 'led-green-on';
                }

                return (
                  <div
                    key={ledIdx}
                    className={`w-full h-2.5 rounded-xs transition-all duration-75 border ${ledClass}`}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Fader Handle */}
        <FaderSlider
          value={channel.fader}
          min={-60}
          max={10}
          defaultValue={0}
          height={180}
          accentColor={channel.color}
          onChange={(val) => onChange({ ...channel, fader: val })}
        />
      </div>

      {/* Custom Audio File Upload Drop Zone */}
      <div className="w-full mt-1 pt-1.5 border-t border-gray-800">
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-cyan-300 text-[8px] font-mono py-1 px-1 rounded border border-gray-800 flex items-center justify-center gap-1 cursor-pointer transition-colors"
          title="Upload custom audio track for this strip"
        >
          {channel.customAudioName ? (
            <>
              <Disc className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="truncate max-w-[80px]">{channel.customAudioName}</span>
            </>
          ) : (
            <>
              <Upload className="w-2.5 h-2.5" />
              <span>LOAD AUDIO</span>
            </>
          )}
        </button>
      </div>

      {/* Bottom Screws */}
      <div className="absolute bottom-1 left-1.5 w-2.5 h-2.5 rounded-full bg-gray-600 border border-gray-400 shadow-sm flex items-center justify-center">
        <div className="w-1.5 h-[1px] bg-gray-950 transform rotate-12" />
      </div>
      <div className="absolute bottom-1 right-1.5 w-2.5 h-2.5 rounded-full bg-gray-600 border border-gray-400 shadow-sm flex items-center justify-center">
        <div className="w-1.5 h-[1px] bg-gray-950 transform -rotate-45" />
      </div>
    </div>
  );
};
