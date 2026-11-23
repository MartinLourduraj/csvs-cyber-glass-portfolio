// Future NOVEA Voice Provider Interface
// Contract for multilingual speech synthesis & speech-to-text integration

export interface INoveaVoiceProvider {
  synthesizeSpeech(text: string, language?: 'en' | 'ta'): Promise<void>;
  startVoiceListening(onResult: (transcript: string) => void): void;
  stopVoiceListening(): void;
  isListening(): boolean;
}

export class NoveaVoiceProvider implements INoveaVoiceProvider {
  private listening: boolean = false;

  async synthesizeSpeech(text: string, _language: 'en' | 'ta' = 'en'): Promise<void> {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      window.speechSynthesis.speak(utterance);
    }
  }

  startVoiceListening(_onResult: (transcript: string) => void): void {
    this.listening = true;
    console.info('NOVEA Voice Listening interface initialized.');
  }

  stopVoiceListening(): void {
    this.listening = false;
  }

  isListening(): boolean {
    return this.listening;
  }
}
