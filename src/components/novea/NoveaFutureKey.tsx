import React, { useState } from 'react';
import { Zap, Sparkles } from 'lucide-react';
import { NoveaAIModal } from './NoveaAIModal';

interface NoveaFutureKeyProps {
  onReplayIntro: () => void;
}

export const NoveaFutureKey: React.FC<NoveaFutureKeyProps> = ({ onReplayIntro }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <aside aria-label="NOVEA AI Assistant Access" className="fixed bottom-6 right-6 z-40 select-none">
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 px-3 py-1.5 rounded-xl bg-[#071426]/90 border border-[#00D9FF]/40 text-xs font-mono text-[#00D9FF] shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-1.5 ${
            tooltipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00D9FF] animate-spin" />
          <span>NOVEA AI · Assistant Key</span>
        </div>

        {/* Floating Metallic Glass Orb */}
        <button
          onClick={() => setModalOpen(true)}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          onFocus={() => setTooltipVisible(true)}
          onBlur={() => setTooltipVisible(false)}
          aria-label="Open NOVEA AI Assistant Panel"
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#071426] via-[#0D213F] to-[#1F080F] border-2 border-[#00D9FF]/50 p-1 flex items-center justify-center shadow-[0_0_25px_rgba(0,217,255,0.4)] hover:shadow-[0_0_35px_rgba(0,217,255,0.7)] transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-4 focus:ring-[#00D9FF]/40"
        >
          {/* Cyan Rotating Orbital Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#00D9FF]/60 animate-orbit-slow pointer-events-none" />

          {/* Crimson Counter-Rotating Ring */}
          <div className="absolute inset-1 rounded-full border border-dotted border-[#FF1744]/50 animate-orbit-reverse-slow pointer-events-none" />

          {/* Glowing Ambient Core */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#008CFF]/40 to-[#FF1744]/40 blur-sm group-hover:scale-125 transition-transform" />

          {/* NOVEA Armored Insignia Icon */}
          <div className="relative z-10 w-7 h-7 flex items-center justify-center text-[#00D9FF] group-hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
              <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#00D9FF" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="3" fill="#00D9FF" />
            </svg>
          </div>

          {/* Active Ping Dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#00D9FF] border-2 border-[#050B18]" />
          </span>
        </button>
      </aside>

      {/* Futuristic Glass Assistant Panel Modal */}
      <NoveaAIModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onReplayIntro={() => {
          setModalOpen(false);
          onReplayIntro();
        }}
      />
    </>
  );
};
