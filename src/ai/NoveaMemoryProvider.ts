// Future NOVEA Memory Provider Interface
// Privacy-first, user-consented context memory retention

export interface UserPreferences {
  soundEnabled: boolean;
  introSeen: boolean;
  themePreference: string;
  preferredLanguage: 'en' | 'ta';
}

export interface INoveaMemoryProvider {
  getPreferences(): UserPreferences;
  savePreferences(prefs: Partial<UserPreferences>): void;
  clearMemory(): void;
}

export class NoveaMemoryProvider implements INoveaMemoryProvider {
  private storageKey = 'novea_user_memory';

  getPreferences(): UserPreferences {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) return JSON.parse(raw);
    } catch {}
    return {
      soundEnabled: true,
      introSeen: false,
      themePreference: 'fusion',
      preferredLanguage: 'en',
    };
  }

  savePreferences(prefs: Partial<UserPreferences>): void {
    try {
      const current = this.getPreferences();
      const updated = { ...current, ...prefs };
      localStorage.setItem(this.storageKey, JSON.stringify(updated));
    } catch {}
  }

  clearMemory(): void {
    try {
      localStorage.removeItem(this.storageKey);
    } catch {}
  }
}
