// Web Audio API Retro Cassette Synthesizer Engine

class AnalogTapeEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseGain: GainNode | null = null;
  private analyzer: AnalyserNode | null = null;
  private pitchRatio: number = 1.0;
  private tapeNoiseActive: boolean = true;
  private currentPreset: string = 'synthwave';
  private timerId: number | null = null;
  private bufferNodes: AudioBufferSourceNode[] = [];

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (!this.masterGain && this.ctx) {
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.5;

      this.analyzer = this.ctx.createAnalyser();
      this.analyzer.fftSize = 64;

      this.masterGain.connect(this.analyzer);
      this.analyzer.connect(this.ctx.destination);

      this.setupTapeNoise();
    }
  }

  private setupTapeNoise() {
    if (!this.ctx || !this.masterGain) return;
    
    // Create Pink/Brown Tape Noise Buffer
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.015; // Soft tape hiss level
      b6 = white * 0.115926;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    this.noiseGain = this.ctx.createGain();
    this.noiseGain.gain.value = this.tapeNoiseActive ? 0.08 : 0.0;

    // Filter noise to sound like magnetic tape hiss
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2500;
    filter.Q.value = 0.8;

    noiseSource.connect(filter);
    filter.connect(this.noiseGain);
    this.noiseGain.connect(this.masterGain);

    noiseSource.start();
  }

  public playPreset(preset: 'synthwave' | 'funk' | 'lofi' | 'moog', speed: number = 1.0) {
    this.init();
    this.stop();
    this.isPlaying = true;
    this.currentPreset = preset;
    this.pitchRatio = speed;

    if (!this.ctx || !this.masterGain) return;

    this.scheduleTapeSequence();
  }

  private scheduleTapeSequence() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const baseFreqs = this.getPresetFrequencies(this.currentPreset);

    baseFreqs.forEach((freq, index) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Tape Wow & Flutter LFO
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.4 + Math.random() * 0.2; // Pitch wobble rate
      lfoGain.gain.value = freq * 0.015; // Wobble depth
      lfo.connect(osc.frequency);
      lfo.start(now);

      osc.type = index === 0 ? 'sawtooth' : index === 1 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq * this.pitchRatio, now);

      filter.type = 'lowpass';
      filter.frequency.value = 800 + Math.random() * 1200;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12 / baseFreqs.length, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 3.8 / this.pitchRatio);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 4.0 / this.pitchRatio);
    });

    // Schedule next loop step
    const interval = (3800 / this.pitchRatio);
    this.timerId = window.setTimeout(() => {
      if (this.isPlaying) {
        this.scheduleTapeSequence();
      }
    }, interval);
  }

  private getPresetFrequencies(preset: string): number[] {
    switch (preset) {
      case 'synthwave':
        return [110, 164.81, 220, 329.63]; // A minor warm pads
      case 'funk':
        return [98, 146.83, 196, 293.66]; // G7 funk vibe
      case 'lofi':
        return [130.81, 164.81, 196, 246.94]; // C major 7 chilled
      case 'moog':
        return [82.41, 123.47, 164.81, 246.94]; // E cosmic deep synth
      default:
        return [110, 164.81, 220];
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public setTapeSpeed(speed: number) {
    this.pitchRatio = speed;
  }

  public toggleTapeNoise(enabled: boolean) {
    this.tapeNoiseActive = enabled;
    if (this.noiseGain) {
      this.noiseGain.gain.value = enabled ? 0.08 : 0.0;
    }
  }

  public setVolume(val: number) {
    if (this.masterGain) {
      this.masterGain.gain.value = Math.max(0, Math.min(1, val));
    }
  }

  public getVULevel(): { left: number; right: number } {
    if (!this.analyzer || !this.isPlaying) {
      return { left: 0, right: 0 };
    }
    const dataArray = new Uint8Array(this.analyzer.frequencyBinCount);
    this.analyzer.getByteFrequencyData(dataArray);

    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i];
    }
    const avg = sum / dataArray.length;
    const normalized = Math.min(100, Math.round((avg / 255) * 120));
    
    // Slight variation for dual needle stereo feel
    const left = Math.min(100, Math.max(0, normalized + (Math.random() * 8 - 4)));
    const right = Math.min(100, Math.max(0, normalized + (Math.random() * 8 - 4)));

    return { left, right };
  }

  public playClickSound() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.04);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }
}

export const audioEngine = new AnalogTapeEngine();
