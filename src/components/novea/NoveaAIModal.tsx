import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  FolderGit2, 
  User, 
  Building2, 
  Send, 
  ShieldCheck, 
  Cpu, 
  Terminal 
} from 'lucide-react';
import { noveaAudio } from '../cinematic/IntroAudioController';

interface NoveaAIModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReplayIntro: () => void;
}

export const NoveaAIModal: React.FC<NoveaAIModalProps> = ({
  isOpen,
  onClose,
  onReplayIntro,
}) => {
  const [isMuted, setIsMuted] = useState(() => noveaAudio.getMuted());

  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    noveaAudio.setMuted(nextMuted);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-[#071426]/95 border-2 border-[#00D9FF]/40 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,140,255,0.3)] text-left flex flex-col justify-between overflow-hidden"
      >
        {/* Holographic Laser Corner Brackets */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00D9FF] pointer-events-none" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#FF1744] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#00D9FF] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#FF1744] pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#071426] to-[#0D213F] border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] shadow-md">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-white tracking-wide">
                NOVEA AI
              </h2>
              <div className="text-[11px] font-mono text-[#00D9FF] tracking-wider">
                YOUR PERSONAL INTELLIGENCE SYSTEM
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-[#00D9FF] flex items-center justify-center transition-colors"
            aria-label="Close NOVEA AI Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Narrative & Status */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-2xl bg-[#050B18]/80 border border-[#00D9FF]/30 font-sans text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
            <p>
              "Hello, explorer. I am <strong className="text-white">NOVEA</strong>, Martin's future AI assistant."
            </p>
            <p className="text-slate-400">
              "Advanced intelligence features are currently under development. In future releases, I will assist you with voice navigation, contextual project breakdowns, and clinical architecture inquiries."
            </p>
          </div>

          {/* COMING SOON BADGE */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#008CFF]/15 border border-[#00D9FF]/30 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#00D9FF]">
              <Sparkles className="w-4 h-4 text-[#00D9FF] animate-spin" />
              <span className="font-bold tracking-wider">NOVEA AI — COMING SOON</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300">
              V3.0 ARCHITECTURE
            </span>
          </div>
        </div>

        {/* Operational Quick Actions */}
        <div className="space-y-3">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            AVAILABLE PORTFOLIO CONTROLS:
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <button
              onClick={() => scrollToSection('projects')}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-[#008CFF]/20 border border-white/10 hover:border-[#00D9FF]/50 text-slate-200 hover:text-white transition-all flex items-center gap-2"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>Projects</span>
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-[#008CFF]/20 border border-white/10 hover:border-[#00D9FF]/50 text-slate-200 hover:text-white transition-all flex items-center gap-2"
            >
              <User className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>About Me</span>
            </button>

            <button
              onClick={() => scrollToSection('csvs-tech')}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FF1744]/20 border border-white/10 hover:border-[#FF1744]/50 text-slate-200 hover:text-white transition-all flex items-center gap-2"
            >
              <Building2 className="w-3.5 h-3.5 text-[#FF1744]" />
              <span>CSVS IT Tech</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-[#008CFF]/20 border border-white/10 hover:border-[#00D9FF]/50 text-slate-200 hover:text-white transition-all flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>Contact</span>
            </button>
          </div>

          {/* Secondary Controls: Replay Intro & Sound */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-xs font-mono">
            <button
              onClick={onReplayIntro}
              className="px-3.5 py-2 rounded-xl bg-[#008CFF]/20 border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#008CFF]/30 transition-all flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reactivate NOVEA</span>
            </button>

            <button
              onClick={handleToggleSound}
              className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#FF1744]" /> : <Volume2 className="w-3.5 h-3.5 text-[#00D9FF]" />}
              <span>{isMuted ? 'Unmute Voice' : 'Mute Voice'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
