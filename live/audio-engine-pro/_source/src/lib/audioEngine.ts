import { ChannelState, MasterState } from '../types';

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isInitialized = false;
  private isAudioPlaying = false;
  
  // Master Nodes
  private masterGain: GainNode | null = null;
  private masterCompressor: DynamicsCompressorNode | null = null;
  private masterSaturator: WaveShaperNode | null = null;
  private masterAnalyserL: AnalyserNode | null = null;
  private masterAnalyserR: AnalyserNode | null = null;
  private splitterNode: ChannelSplitterNode | null = null;

  // Channel Nodes Map
  private channelNodes: Map<string, {
    gainNode: GainNode;
    hpfNode: BiquadFilterNode;
    bassNode: BiquadFilterNode;
    midNode: BiquadFilterNode;
    trebleNode: BiquadFilterNode;
    pannerNode: StereoPannerNode;
    faderGainNode: GainNode;
    channelMuteGain: GainNode;
    analyserL: AnalyserNode;
    analyserR: AnalyserNode;
    splitter: ChannelSplitterNode;
    sourceNode?: AudioBufferSourceNode | OscillatorNode;
    customBuffer?: AudioBuffer;
  }> = new Map();

  // Clock for loop synthesizer
  private timerId: number | null = null;
  private currentStep = 0;
  private bpm = 124;

  public init() {
    if (this.isInitialized && this.ctx) return;

    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioContextClass();

    // Setup Master Bus
    this.masterGain = this.ctx.createGain();
    this.masterCompressor = this.ctx.createDynamicsCompressor();
    this.masterSaturator = this.ctx.createWaveShaper();

    // Saturation curve
    this.masterSaturator.curve = this.makeDistortionCurve(10);
    this.masterSaturator.oversample = '4x';

    // Splitter for dual VU meters (Left & Right)
    this.splitterNode = this.ctx.createChannelSplitter(2);
    this.masterAnalyserL = this.ctx.createAnalyser();
    this.masterAnalyserR = this.ctx.createAnalyser();
    
    this.masterAnalyserL.fftSize = 256;
    this.masterAnalyserR.fftSize = 256;
    this.masterAnalyserL.smoothingTimeConstant = 0.3;
    this.masterAnalyserR.smoothingTimeConstant = 0.3;

    // Connect Master Chain: masterGain -> Saturator -> Compressor -> Splitter -> Destination
    this.masterGain.connect(this.masterSaturator);
    this.masterSaturator.connect(this.masterCompressor);
    this.masterCompressor.connect(this.ctx.destination);

    // Tap master output for VU meters
    this.masterCompressor.connect(this.splitterNode);
    this.splitterNode.connect(this.masterAnalyserL, 0);
    this.splitterNode.connect(this.masterAnalyserR, 1);

    this.isInitialized = true;
  }

  public async ensureContextRunning() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
  }

  private makeDistortionCurve(amount: number) {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  // Register or update a channel strip's Web Audio nodes
  public setupChannel(channel: ChannelState) {
    if (!this.ctx) return;

    let nodes = this.channelNodes.get(channel.id);
    if (!nodes) {
      const gainNode = this.ctx.createGain();
      const hpfNode = this.ctx.createBiquadFilter();
      hpfNode.type = 'highpass';
      hpfNode.frequency.value = 80;

      const bassNode = this.ctx.createBiquadFilter();
      bassNode.type = 'lowshelf';
      bassNode.frequency.value = 100;

      const midNode = this.ctx.createBiquadFilter();
      midNode.type = 'peaking';
      midNode.frequency.value = 1000;
      midNode.Q.value = 1.0;

      const trebleNode = this.ctx.createBiquadFilter();
      trebleNode.type = 'highshelf';
      trebleNode.frequency.value = 8000;

      const pannerNode = this.ctx.createStereoPanner();
      const faderGainNode = this.ctx.createGain();
      const channelMuteGain = this.ctx.createGain();

      const splitter = this.ctx.createChannelSplitter(2);
      const analyserL = this.ctx.createAnalyser();
      const analyserR = this.ctx.createAnalyser();
      analyserL.fftSize = 128;
      analyserR.fftSize = 128;

      // Connect Chain: Input -> Gain -> HPF -> Bass -> Mid -> Treble -> Panner -> FaderGain -> ChannelMute -> MasterGain
      gainNode.connect(hpfNode);
      hpfNode.connect(bassNode);
      bassNode.connect(midNode);
      midNode.connect(trebleNode);
      trebleNode.connect(pannerNode);
      pannerNode.connect(faderGainNode);
      faderGainNode.connect(channelMuteGain);
      if (this.masterGain) {
        channelMuteGain.connect(this.masterGain);
      }

      // Tap level meters
      channelMuteGain.connect(splitter);
      splitter.connect(analyserL, 0);
      splitter.connect(analyserR, 1);

      nodes = {
        gainNode,
        hpfNode,
        bassNode,
        midNode,
        trebleNode,
        pannerNode,
        faderGainNode,
        channelMuteGain,
        analyserL,
        analyserR,
        splitter,
      };

      this.channelNodes.set(channel.id, nodes);
    }

    // Apply channel parameters
    const dBToGain = (db: number) => Math.pow(10, db / 20);

    // Gain Knob (-20dB to +20dB)
    nodes.gainNode.gain.setValueAtTime(dBToGain(channel.gain), this.ctx.currentTime);

    // HPF Filter
    nodes.hpfNode.frequency.setValueAtTime(channel.hpf ? 80 : 10, this.ctx.currentTime);

    // 3-Band EQ
    nodes.bassNode.gain.setValueAtTime(channel.eqBass, this.ctx.currentTime);
    nodes.midNode.gain.setValueAtTime(channel.eqMid, this.ctx.currentTime);
    nodes.trebleNode.gain.setValueAtTime(channel.eqTreble, this.ctx.currentTime);

    // Pan (-1 to +1)
    nodes.pannerNode.pan.setValueAtTime(channel.pan, this.ctx.currentTime);

    // Fader Volume (-60 to +10 dB)
    const faderGain = channel.fader <= -59 ? 0 : dBToGain(channel.fader);
    nodes.faderGainNode.gain.setValueAtTime(faderGain, this.ctx.currentTime);
  }

  // Handle Mute & Solo Matrix across all channels
  public updateMuteSolo(channels: ChannelState[], powerOn: boolean) {
    if (!this.ctx) return;
    const anySolo = channels.some((c) => c.solo);

    channels.forEach((channel) => {
      const nodes = this.channelNodes.get(channel.id);
      if (!nodes) return;

      let active = true;
      if (!powerOn) {
        active = false;
      } else if (channel.mute) {
        active = false;
      } else if (anySolo && !channel.solo) {
        active = false;
      }

      nodes.channelMuteGain.gain.setValueAtTime(active ? 1.0 : 0.0, this.ctx!.currentTime);
    });
  }

  // Update Master Controls
  public updateMaster(master: MasterState) {
    if (!this.ctx || !this.masterGain || !this.masterCompressor) return;

    const dBToGain = (db: number) => (db <= -59 ? 0 : Math.pow(10, db / 20));

    // Power switch
    const powerMult = master.powerOn ? 1.0 : 0.0;
    this.masterGain.gain.setValueAtTime(dBToGain(master.volume) * powerMult, this.ctx.currentTime);

    // Compressor threshold & ratio
    if (master.compressorEnabled) {
      this.masterCompressor.threshold.setValueAtTime(-24, this.ctx.currentTime);
      this.masterCompressor.ratio.setValueAtTime(4, this.ctx.currentTime);
    } else {
      this.masterCompressor.threshold.setValueAtTime(0, this.ctx.currentTime);
      this.masterCompressor.ratio.setValueAtTime(1, this.ctx.currentTime);
    }

    this.bpm = master.bpm;
  }

  // Load custom audio file for a channel strip
  public async loadCustomAudio(channelId: string, file: File): Promise<string> {
    await this.ensureContextRunning();
    if (!this.ctx) return file.name;

    const arrayBuffer = await file.arrayBuffer();
    const audioBuffer = await this.ctx.decodeAudioData(arrayBuffer);

    const nodes = this.channelNodes.get(channelId);
    if (nodes) {
      nodes.customBuffer = audioBuffer;
    }
    return file.name;
  }

  // Start Multi-track Synthesis Loop
  public async startTransport(channels: ChannelState[]) {
    await this.ensureContextRunning();
    if (this.isAudioPlaying) return;

    this.isAudioPlaying = true;
    this.currentStep = 0;

    const stepInterval = (60 / this.bpm / 4) * 1000; // 16th notes
    this.timerId = window.setInterval(() => {
      this.triggerStep(channels);
      this.currentStep = (this.currentStep + 1) % 16;
    }, stepInterval);
  }

  public stopTransport() {
    this.isAudioPlaying = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  // Step Synthesizer triggering audio for each channel stem
  private triggerStep(channels: ChannelState[]) {
    if (!this.ctx || !this.isAudioPlaying) return;

    const step = this.currentStep;
    const now = this.ctx.currentTime;

    channels.forEach((ch) => {
      const nodes = this.channelNodes.get(ch.id);
      if (!nodes) return;

      // Custom audio buffer playback loop
      if (nodes.customBuffer) {
        if (step === 0) {
          const src = this.ctx.createBufferSource();
          src.buffer = nodes.customBuffer;
          src.connect(nodes.gainNode);
          src.start(now);
        }
        return;
      }

      // Procedural Audio Stems
      switch (ch.type) {
        case 'drums':
          // Kick on 0, 4, 8, 12
          if (step % 4 === 0) {
            this.playKick(nodes.gainNode, now);
          }
          // Snare on 4, 12
          if (step === 4 || step === 12) {
            this.playSnare(nodes.gainNode, now);
          }
          break;

        case 'percussion':
          // Hi-hats on every 2 steps
          if (step % 2 === 0) {
            this.playHiHat(nodes.gainNode, now, step % 4 === 2 ? 0.7 : 0.4);
          }
          break;

        case 'bass':
          // Bass pattern
          if ([0, 3, 6, 8, 10, 12, 14].includes(step)) {
            const freq = step < 8 ? 55 : step < 12 ? 65.41 : 49.0; // A1, C2, G1
            this.playSynthBass(nodes.gainNode, now, freq);
          }
          break;

        case 'keys':
          // Chord pad / Keys chords on step 0 and 8
          if (step === 0 || step === 8) {
            const chord = step === 0 ? [220, 261.63, 329.63] : [174.61, 220, 261.63]; // Am / F
            chord.forEach((f) => this.playKeyTone(nodes.gainNode, now, f));
          }
          break;

        case 'guitar':
          // Arpeggiated guitar riff
          if (step % 2 === 1) {
            const notes = [440, 523.25, 659.25, 783.99, 659.25, 523.25, 440, 392];
            const note = notes[(step / 2 | 0) % notes.length];
            this.playPluck(nodes.gainNode, now, note);
          }
          break;

        case 'pad':
          // Smooth ambient swell
          if (step === 0) {
            this.playPad(nodes.gainNode, now, 220);
          }
          break;

        case 'vocals':
          // Vocal chop synth sound on step 2, 6, 10, 14
          if ([2, 6, 10, 14].includes(step)) {
            this.playVocalChop(nodes.gainNode, now, 880 + (step * 20));
          }
          break;
      }
    });
  }

  // --- Synthesizer Instruments ---
  private playKick(destination: AudioNode, time: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(35, time + 0.12);

    gain.gain.setValueAtTime(1.0, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

    osc.connect(gain);
    gain.connect(destination);

    osc.start(time);
    osc.stop(time + 0.15);
  }

  private playSnare(destination: AudioNode, time: number) {
    if (!this.ctx) return;
    // Noise + Osc
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1000;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.8, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(destination);

    noise.start(time);
    noise.stop(time + 0.15);
  }

  private playHiHat(destination: AudioNode, time: number, volume: number) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 0.05;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7000;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume * 0.6, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.05);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(destination);

    noise.start(time);
    noise.stop(time + 0.05);
  }

  private playSynthBass(destination: AudioNode, time: number, freq: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, time);
    filter.frequency.exponentialRampToValueAtTime(150, time + 0.15);

    gain.gain.setValueAtTime(0.7, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(destination);

    osc.start(time);
    osc.stop(time + 0.2);
  }

  private playKeyTone(destination: AudioNode, time: number, freq: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.6);

    osc.connect(gain);
    gain.connect(destination);

    osc.start(time);
    osc.stop(time + 0.6);
  }

  private playPluck(destination: AudioNode, time: number, freq: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

    osc.connect(gain);
    gain.connect(destination);

    osc.start(time);
    osc.stop(time + 0.15);
  }

  private playPad(destination: AudioNode, time: number, freq: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.01, time);
    gain.gain.linearRampToValueAtTime(0.2, time + 0.2);
    gain.gain.linearRampToValueAtTime(0.01, time + 0.8);

    osc.connect(gain);
    gain.connect(destination);

    osc.start(time);
    osc.stop(time + 0.8);
  }

  private playVocalChop(destination: AudioNode, time: number, freq: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, time);
    filter.Q.value = 5.0;

    gain.gain.setValueAtTime(0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.12);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(destination);

    osc.start(time);
    osc.stop(time + 0.12);
  }

  // Tactile Mechanical Audio Clicks & Sound FX
  public playClickSound(pitch = 1200) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch {
      // ignore
    }
  }

  public playPowerRelaySound(turnOn: boolean) {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Heavy mechanical click
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(turnOn ? 120 : 80, now);
      osc.frequency.exponentialRampToValueAtTime(turnOn ? 300 : 40, now + 0.08);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // ignore
    }
  }

  // --- Level Meter Data API ---
  public getChannelLevels(channelId: string): { levelL: number; levelR: number } {
    const nodes = this.channelNodes.get(channelId);
    if (!nodes) return { levelL: 0, levelR: 0 };

    const dataL = new Uint8Array(nodes.analyserL.frequencyBinCount);
    const dataR = new Uint8Array(nodes.analyserR.frequencyBinCount);
    nodes.analyserL.getByteFrequencyData(dataL);
    nodes.analyserR.getByteFrequencyData(dataR);

    let sumL = 0;
    let sumR = 0;
    for (let i = 0; i < dataL.length; i++) sumL += dataL[i];
    for (let i = 0; i < dataR.length; i++) sumR += dataR[i];

    const avgL = sumL / (dataL.length * 255);
    const avgR = sumR / (dataR.length * 255);

    return { levelL: avgL, levelR: avgR };
  }

  public getMasterLevels(): { vuL: number; vuR: number; freqData: Uint8Array; waveData: Uint8Array } {
    if (!this.masterAnalyserL || !this.masterAnalyserR) {
      return { vuL: -20, vuR: -20, freqData: new Uint8Array(0), waveData: new Uint8Array(0) };
    }

    const freqDataL = new Uint8Array(this.masterAnalyserL.frequencyBinCount);
    const freqDataR = new Uint8Array(this.masterAnalyserR.frequencyBinCount);
    const waveData = new Uint8Array(this.masterAnalyserL.fftSize);

    this.masterAnalyserL.getByteFrequencyData(freqDataL);
    this.masterAnalyserR.getByteFrequencyData(freqDataR);
    this.masterAnalyserL.getByteTimeDomainData(waveData);

    let sumL = 0;
    let sumR = 0;
    for (let i = 0; i < freqDataL.length; i++) sumL += freqDataL[i];
    for (let i = 0; i < freqDataR.length; i++) sumR += freqDataR[i];

    const avgL = sumL / (freqDataL.length * 255);
    const avgR = sumR / (freqDataR.length * 255);

    // Convert 0..1 linear average to dB scale (-20 to +3 dB)
    const toDb = (val: number) => {
      if (val < 0.01) return -20;
      return Math.max(-20, Math.min(3, 20 * Math.log10(val * 2) + 0));
    };

    return {
      vuL: toDb(avgL),
      vuR: toDb(avgR),
      freqData: freqDataL,
      waveData,
    };
  }
}

export const audioEngine = new AudioEngine();
