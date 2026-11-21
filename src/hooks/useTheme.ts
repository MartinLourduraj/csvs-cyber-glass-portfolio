import { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('csvs_portfolio_theme');
    if (saved && ['cyber-blue', 'crimson-red', 'fusion', 'midnight-black'].includes(saved)) {
      return saved as ThemeMode;
    }
    return 'cyber-blue';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('csvs_portfolio_theme', theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return { theme, setTheme };
}
