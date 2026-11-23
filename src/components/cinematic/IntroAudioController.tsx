// Web Audio API procedural sound engine & SpeechSynthesis voice controller for NOVEA
// 100% royalty-free, browser-safe, synthesized procedural audio effects

export class NoveaAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private reactorHumNode: OscillatorNode | null = null;
  private reactorHumGain: GainNode | null = null;

  constructor() {
    const saved = localStorage.getItem('novea_audio_muted');
    this.isMuted = saved === 'true';
  }

  public init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
      }
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    localStorage.setItem('novea_audio_muted', muted ? 'true' : 'false');
    if (muted && this.reactorHumGain) {
      this.reactorHumGain.gain.setValueAtTime(0, this.ctx ? this.ctx.currentTime : 0);
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Deep resonant reactor ambient hum
  public startReactorHum(intensity: number = 0.15) {
    if (this.isMuted || !this.ctx) return;
    try {
      if (this.reactorHumNode) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(intensity, this.ctx.currentTime + 1.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      this.reactorHumNode = osc;
      this.reactorHumGain = gain;
    } catch (e) {
      // audio error safely caught
    }
  }

  public stopReactorHum() {
    if (!this.ctx || !this.reactorHumGain || !this.reactorHumNode) return;
    try {
      this.reactorHumGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        if (this.reactorHumNode) {
          try {
            this.reactorHumNode.stop();
            this.reactorHumNode.disconnect();
          } catch {}
          this.reactorHumNode = null;
          this.reactorHumGain = null;
        }
      }, 600);
    } catch {}
  }

  // Futuristic power surge / activation blast
  public playActivationSurge() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(80, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 1.2);
      osc.frequency.exponentialRampToValueAtTime(110, now + 2.5);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(300, now);
      filter.frequency.exponentialRampToValueAtTime(2400, now + 1.2);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 2.5);
    } catch {}
  }

  // Nanotech particle metallic dispersion chimes
  public playNanotechDispersion() {
    if (this.isMuted || !this.ctx) return;
    try {
      const freqs = [587.33, 880, 1174.66, 1760, 2349.32]; // D harmonic series
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime + idx * 0.12;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.8);
      });
    } catch {}
  }

  // Mechanical armor assembly locking click
  public playSuitAssemblyLock() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.25);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch {}
  }

  // Spoken voice dialogue for NOVEA
  public speakDialogue(
    lines: string[],
    onLineStart?: (index: number, line: string) => void,
    onComplete?: () => void
  ) {
    if (this.isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onLineStart && lines.length > 0) {
        // Fast-forward captions even without voice
        let idx = 0;
        const timer = setInterval(() => {
          if (idx < lines.length) {
            onLineStart(idx, lines[idx]);
            idx++;
          } else {
            clearInterval(timer);
            if (onComplete) onComplete();
          }
        }, 1800);
      } else if (onComplete) {
        onComplete();
      }
      return;
    }

    try {
      window.speechSynthesis.cancel();

      // Find an elegant, crisp English voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice =
        voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Victoria'))) ||
        voices.find(v => v.lang.startsWith('en')) ||
        null;

      let currentIdx = 0;

      const speakNext = () => {
        if (currentIdx >= lines.length) {
          if (onComplete) onComplete();
          return;
        }

        const line = lines[currentIdx];
        if (onLineStart) onLineStart(currentIdx, line);

        const utterance = new SpeechSynthesisUtterance(line);
        if (preferredVoice) utterance.voice = preferredVoice;
        utterance.rate = 0.95; // deliberate, articulate AI cadence
        utterance.pitch = 1.05; // clear, intelligent resonance
        utterance.volume = this.isMuted ? 0 : 0.9;

        utterance.onend = () => {
          currentIdx++;
          setTimeout(speakNext, 450); // natural pause between sentences
        };

        utterance.onerror = () => {
          currentIdx++;
          speakNext();
        };

        window.speechSynthesis.speak(utterance);
      };

      speakNext();
    } catch (e) {
      if (onComplete) onComplete();
    }
  }

  public cancelSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    this.stopReactorHum();
  }
}

export const noveaAudio = new NoveaAudioEngine();
