import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface ThemeToggleProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

const THEMES: { id: ThemeMode; name: string; tag: string; color: string; border: string }[] = [
  {
    id: 'cyber-blue',
    name: 'Cyber Blue',
    tag: 'Default HUD',
    color: 'from-[#008CFF] to-[#00D9FF]',
    border: 'border-[#00D9FF]',
  },
  {
    id: 'crimson-red',
    name: 'Crimson Red',
    tag: 'Cyber Ruby',
    color: 'from-[#FF1744] to-[#D50000]',
    border: 'border-[#FF1744]',
  },
  {
    id: 'fusion',
    name: 'Blue × Red Fusion',
    tag: 'Dual Core',
    color: 'from-[#008CFF] via-[#7C3AED] to-[#FF1744]',
    border: 'border-purple-400',
  },
  {
    id: 'midnight-black',
    name: 'Midnight Black',
    tag: 'Stealth Void',
    color: 'from-[#1E293B] to-[#02040A]',
    border: 'border-slate-500',
  },
];

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeThemeMeta = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#071426]/80 hover:bg-[#071426] border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 backdrop-blur-md text-xs text-[#F1F5F9] transition-all group"
        title="Switch Cyber Theme"
        aria-label="Switch Theme Engine"
        aria-expanded={isOpen}
      >
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeThemeMeta.color} shadow-sm`} />
        <Palette className="w-3.5 h-3.5 text-[#00D9FF] group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-mono">{activeThemeMeta.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#071426]/95 border border-[#00D9FF]/30 backdrop-blur-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-2.5 py-1.5 border-b border-white/10 mb-1 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#00D9FF] uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Cyber Theme Engine
            </span>
            <span className="text-[10px] text-slate-400">v1.0</span>
          </div>

          <div className="space-y-1">
            {THEMES.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onThemeChange(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs transition-all ${
                    isSelected
                      ? 'bg-white/10 text-white font-medium border border-[#00D9FF]/40'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${theme.color} ring-1 ring-white/20`} />
                    <div className="text-left">
                      <div className="font-sans text-xs">{theme.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{theme.tag}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#00D9FF]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
