export type ChannelType = 'drums' | 'bass' | 'keys' | 'guitar' | 'vocals' | 'percussion' | 'pad' | 'custom';

export interface ChannelState {
  id: string;
  name: string;
  type: ChannelType;
  color: string;
  gain: number; // -20 to +20 dB
  hpf: boolean; // 80Hz High Pass Filter
  eqBass: number; // -15 to +15 dB
  eqMid: number; // -15 to +15 dB
  eqTreble: number; // -15 to +15 dB
  pan: number; // -1.0 (L) to +1.0 (R)
  fader: number; // -60 to +10 dB (0 dB is nominal)
  mute: boolean;
  solo: boolean;
  pfl: boolean; // Pre-fader listen
  levelL: number; // 0 to 1 for LED meter
  levelR: number; // 0 to 1 for LED meter
  customAudioName?: string;
}

export interface MasterState {
  volume: number; // -60 to +10 dB
  faderL: number; // -60 to +10 dB
  faderR: number; // -60 to +10 dB
  compressorEnabled: boolean;
  warmthSaturator: boolean;
  powerOn: boolean;
  studioLighting: boolean; // toggle studio background view
  viewMode: 'studio' | 'console'; // framing mode
  vuMeterL: number; // VU needle dB (-20 to +3)
  vuMeterR: number; // VU needle dB (-20 to +3)
  bpm: number;
  isPlaying: boolean;
  activePreset: string;
  displayMode: 'waveform' | 'spectrum' | 'eq_curve' | 'info';
}

export interface Preset {
  id: string;
  name: string;
  description: string;
  bpm: number;
  channels: Partial<ChannelState>[];
  masterVolume: number;
  compressor: boolean;
  warmth: boolean;
}
