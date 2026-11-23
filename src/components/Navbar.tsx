import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { ISTClock } from './ISTClock';
import { ThemeToggle } from './ThemeToggle';
import { GithubIcon } from './GithubIcon';
import { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onReplayIntro?: () => void;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'specializations', label: 'Specializations' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Journey' },
  { id: 'csvs-tech', label: 'CSVS IT Tech' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  theme,
  onThemeChange,
  onReplayIntro,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-3 sm:px-6 py-3 ${
          isScrolled
            ? 'bg-[#050B18]/80 backdrop-blur-xl border-b border-[#00D9FF]/20 shadow-lg shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LEFT: Branding & Animated Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group select-none"
          >
            {/* Custom Animated ML / CSVS Cyber Logo */}
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#071426] to-[#0D213F] border border-[#00D9FF]/40 p-1 flex items-center justify-center shadow-lg group-hover:border-[#00D9FF] transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#008CFF]/20 via-transparent to-[#FF1744]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* SVG Hex Core */}
              <svg viewBox="0 0 40 40" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(0,217,255,0.7)]">
                <polygon points="20,2 37,11 37,29 20,38 3,29 3,11" fill="none" stroke="#00D9FF" strokeWidth="2" />
                <path d="M 12 28 L 12 14 L 20 22 L 28 14 L 28 28" fill="none" stroke="#FF1744" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-[#00D9FF] transition-colors">
                  MARTIN LOURDURAJ
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-[#00D9FF]/90 tracking-widest uppercase">
                CSVS IT TECH · ARCHITECT
              </span>
            </div>
          </a>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#071426]/70 border border-[#00D9FF]/20 backdrop-blur-xl shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold bg-[#008CFF]/25 border border-[#00D9FF]/50 shadow-[0_0_12px_rgba(0,217,255,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span 
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-[#00D9FF] shadow-[0_0_6px_#00D9FF]" 
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: IST Clock, GitHub, Theme Engine & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live IST Clock */}
            <div className="hidden md:block">
              <ISTClock />
            </div>

            {/* Reactivate NOVEA Cinematic Intro Button */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#008CFF]/20 to-[#FF1744]/20 border border-[#00D9FF]/40 hover:border-[#00D9FF] text-xs font-mono text-[#00D9FF] hover:text-white transition-all shadow-sm"
                title="Replay NOVEA Cinematic Introduction"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Reactivate NOVEA</span>
              </button>
            )}

            {/* GitHub Profile Link */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#071426]/70 border border-[#00D9FF]/20 hover:border-[#00D9FF]/60 hover:bg-[#008CFF]/15 text-slate-300 hover:text-white transition-all backdrop-blur-md"
              title="View GitHub Profile: MartinLourduraj"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-[#00D9FF]" />
            </a>

            {/* Theme Switcher Engine */}
            <ThemeToggle currentTheme={theme} onThemeChange={onThemeChange} />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#071426]/80 border border-[#00D9FF]/30 text-white backdrop-blur-md"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF1744]" /> : <Menu className="w-5 h-5 text-[#00D9FF]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between bg-[#050B18]/95 backdrop-blur-2xl p-6 pt-24 animate-in slide-in-from-top-4 duration-200">
          {/* Top Clock in Mobile */}
          <div className="mb-4">
            <ISTClock />
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-mono tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#008CFF]/20 text-[#00D9FF] font-bold border border-[#00D9FF]/40 shadow-lg'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 font-mono">0{NAV_LINKS.indexOf(link) + 1}.</span>
                    {link.label}
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </div>

          {/* Bottom Mobile Drawer Meta */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            {/* Replay Intro in Mobile */}
            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#008CFF]/20 to-[#FF1744]/20 border border-[#00D9FF]/40 text-sm font-mono font-bold text-[#00D9FF] hover:text-white"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reactivate NOVEA Cinematic Intro</span>
              </button>
            )}

            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D9FF]" />
                CSVS IT Tech Platform
              </span>
              <span>Tamil Nadu, India</span>
            </div>
            <a
              href="https://csvsittech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#008CFF]/20 border border-[#00D9FF]/30 text-xs font-mono text-[#00D9FF]"
            >
              <span>Visit Official Website (csvsittech.in)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
