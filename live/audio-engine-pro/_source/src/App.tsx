import React, { useState, useEffect, useCallback } from 'react';
import { ChannelState, MasterState } from './types';
import { INITIAL_CHANNELS, PRESETS } from './data/presets';
import { audioEngine } from './lib/audioEngine';
import { ConsoleHeader } from './components/ConsoleHeader';
import { ChannelStrip } from './components/ChannelStrip';
import { MasterSection } from './components/MasterSection';
import { WoodPanel } from './components/WoodPanel';
import { Info, Volume2, Sparkles, Sliders, Music2 } from 'lucide-react';

export default function App() {
  const [channels, setChannels] = useState<ChannelState[]>(INITIAL_CHANNELS);
  const [master, setMaster] = useState<MasterState>({
    volume: 0,
    faderL: 0,
    faderR: 0,
    compressorEnabled: true,
    warmthSaturator: true,
    powerOn: true,
    studioLighting: true,
    viewMode: 'studio',
    vuMeterL: -20,
    vuMeterR: -20,
    bpm: 124,
    isPlaying: false,
    activePreset: 'synthwave',
    displayMode: 'waveform',
  });

  const [showHelp, setShowHelp] = useState(false);

  // Sync Audio Engine with React state changes
  useEffect(() => {
    audioEngine.init();
    channels.forEach((ch) => audioEngine.setupChannel(ch));
    audioEngine.updateMuteSolo(channels, master.powerOn);
  }, [channels, master.powerOn]);

  useEffect(() => {
    audioEngine.updateMaster(master);
  }, [master]);

  // Meter levels RAF loop
  useEffect(() => {
    let animId: number;
    const updateVu = () => {
      if (master.powerOn) {
        const { vuL, vuR } = audioEngine.getMasterLevels();
        setMaster((prev) => ({
          ...prev,
          vuMeterL: vuL,
          vuMeterR: vuR,
        }));
      } else {
        setMaster((prev) => ({
          ...prev,
          vuMeterL: -20,
          vuMeterR: -20,
        }));
      }
      animId = requestAnimationFrame(updateVu);
    };
    animId = requestAnimationFrame(updateVu);
    return () => cancelAnimationFrame(animId);
  }, [master.powerOn]);

  // Handle Play/Pause Transport
  const handleToggleTransport = useCallback(async () => {
    if (!master.powerOn) return;
    if (master.isPlaying) {
      audioEngine.stopTransport();
      setMaster((prev) => ({ ...prev, isPlaying: false }));
    } else {
      await audioEngine.ensureContextRunning();
      audioEngine.startTransport(channels);
      setMaster((prev) => ({ ...prev, isPlaying: true }));
    }
  }, [master.powerOn, master.isPlaying, channels]);

  // Keyboard Shortcuts (Space for Play/Pause)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        handleToggleTransport();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleToggleTransport]);

  // Channel update handler
  const handleChannelChange = (updated: ChannelState) => {
    setChannels((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  // Preset Selector
  const handleSelectPreset = (presetId: string) => {
    const preset = PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    setMaster((prev) => ({
      ...prev,
      bpm: preset.bpm,
      volume: preset.masterVolume,
      compressorEnabled: preset.compressor,
      warmthSaturator: preset.warmth,
      activePreset: preset.id,
    }));

    setChannels((prev) =>
      prev.map((ch) => {
        const override = preset.channels.find((p) => p.id === ch.id);
        if (override) {
          return { ...ch, ...override };
        }
        return ch;
      })
    );
  };

  // Reset Console Knobs to default
  const handleResetConsole = () => {
    setChannels(INITIAL_CHANNELS);
    setMaster((prev) => ({
      ...prev,
      volume: 0,
      faderL: 0,
      faderR: 0,
      bpm: 124,
    }));
  };

  // Upload Custom Audio File to Channel
  const handleUploadAudio = async (channelId: string, file: File) => {
    const fileName = await audioEngine.loadCustomAudio(channelId, file);
    setChannels((prev) =>
      prev.map((c) => (c.id === channelId ? { ...c, customAudioName: fileName } : c))
    );
  };

  const activePresetObj = PRESETS.find((p) => p.id === master.activePreset);

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 flex flex-col font-sans relative overflow-x-hidden select-none">
      {/* BACKGROUND MODE 1: Warm Home Studio Room Backdrop */}
      {master.viewMode === 'studio' && (
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center transition-opacity duration-700 opacity-90"
          style={{
            backgroundImage: `url('/src/assets/images/studio_background_1785195448853.jpg')`,
            filter: 'brightness(0.65) contrast(1.1) blur(1px)',
          }}
        />
      )}

      {/* Main Container Viewport */}
      <div className={`relative z-10 flex flex-col flex-1 ${master.viewMode === 'studio' ? 'p-2 md:p-6 max-w-7xl mx-auto w-full' : 'w-full'}`}>
        
        {/* CONSOLE OUTER FRAME WITH SHADOWS AND STUDIO MOUNT */}
        <div
          className={`flex flex-col bg-brushed-metal rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-gray-800/90 relative overflow-hidden transition-all duration-300 ${
            master.viewMode === 'studio' ? 'my-auto ring-1 ring-amber-500/20' : 'min-h-screen'
          }`}
        >
          {/* Top Branding & Master Control Bar */}
          <ConsoleHeader
            master={master}
            presets={PRESETS}
            onMasterChange={setMaster}
            onSelectPreset={handleSelectPreset}
            onResetConsole={handleResetConsole}
          />

          {/* MAIN MIXING CONSOLE DESK BED WITH WOOD CHEEK PANELS */}
          <div className="flex flex-1 relative bg-dark-console overflow-x-auto overflow-y-hidden">
            {/* Left Mahogany Wood Cheek Panel */}
            <WoodPanel side="left" />

            {/* CHANNEL STRIPS & MASTER SECTION CONTAINER */}
            <div className="flex flex-1 items-stretch p-3 md:p-4 gap-2 md:gap-3 overflow-x-auto scrollbar-thin">
              {/* Rows of 8 Channel Strips */}
              {channels.map((channel, idx) => (
                <ChannelStrip
                  key={channel.id}
                  channel={channel}
                  index={idx}
                  powerOn={master.powerOn}
                  onChange={handleChannelChange}
                  onUploadAudio={handleUploadAudio}
                />
              ))}

              {/* Heavy Metal Separator Rack Bar */}
              <div className="w-3 bg-gradient-to-r from-black via-gray-800 to-black rounded border-x border-gray-900 shadow-2xl flex flex-col justify-between py-6 items-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600 border border-gray-400" />
                <div className="text-[7px] font-mono text-gray-500 uppercase rotate-90 whitespace-nowrap tracking-widest">
                  MASTER BUS SEPARATOR
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600 border border-gray-400" />
              </div>

              {/* Master Section Console Module */}
              <MasterSection
                master={master}
                activePresetName={activePresetObj ? activePresetObj.name : 'CUSTOM'}
                onChange={setMaster}
                onToggleTransport={handleToggleTransport}
              />
            </div>

            {/* Right Mahogany Wood Cheek Panel */}
            <WoodPanel side="right" />
          </div>

          {/* CONSOLE BOTTOM ENGRAVED FOOTER BAR */}
          <div className="bg-gradient-to-b from-black to-gray-900 px-4 py-2 border-t border-gray-800 flex flex-wrap items-center justify-between text-[10px] font-mono text-gray-400 z-20">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold tracking-widest">
                AUDIO ENGINE PRO v3.8
              </span>
              <span className="hidden sm:inline text-gray-500">|</span>
              <span className="hidden sm:inline text-gray-400">
                8-CHANNEL ANALOG CONSOLE DSP ENGINE
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowHelp(!showHelp)}
                className="hover:text-cyan-300 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Info className="w-3.5 h-3.5" />
                <span>TACTILE HELP & SHORTCUTS</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HELP DRAWER OVERLAY */}
      {showHelp && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-cyan-500/40 rounded-lg p-6 max-w-lg w-full shadow-2xl font-mono text-xs text-gray-200 relative">
            <h3 className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-wider border-b border-gray-800 pb-2">
              AUDIO ENGINE PRO - OPERATIONAL GUIDE
            </h3>

            <div className="space-y-3">
              <div>
                <span className="text-amber-400 font-bold">Rotary Knobs:</span> Click & drag up or down to adjust gain, EQ, pan, or master volume. Hold <kbd className="bg-gray-800 px-1 border rounded">Shift</kbd> for fine-tuning. Double-click to reset to zero.
              </div>
              <div>
                <span className="text-amber-400 font-bold">Channel Faders:</span> Drag vertically to control audio levels. Markings indicate nominal 0dB headroom and scale.
              </div>
              <div>
                <span className="text-amber-400 font-bold">Spacebar:</span> Toggle Play / Pause transport for the multi-track audio engine.
              </div>
              <div>
                <span className="text-amber-400 font-bold">Custom Audio Tracks:</span> Click "LOAD AUDIO" at the bottom of any channel strip to upload your own MP3/WAV file.
              </div>
              <div>
                <span className="text-amber-400 font-bold">Analog VU Meters:</span> Real-time ballistic physical needles monitoring Master Bus output levels.
              </div>
            </div>

            <button
              onClick={() => setShowHelp(false)}
              className="mt-5 w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-2 rounded text-xs uppercase cursor-pointer transition-colors"
            >
              CLOSE GUIDE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
