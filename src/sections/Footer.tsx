import React from 'react';
import { 
  ArrowUp, 
  ExternalLink, 
  MapPin, 
  Mail 
} from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';
import { PERSONAL_INFO, CSVS_STARTUP_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050B18]/90 backdrop-blur-2xl py-12 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      {/* Top Laser Shimmer */}
      <div 
        className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Branding & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#071426] to-[#0D213F] border border-[#00D9FF]/40 p-1 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-6 h-6 drop-shadow-[0_0_6px_rgba(0,217,255,0.7)]">
                  <polygon points="20,2 37,11 37,29 20,38 3,29 3,11" fill="none" stroke="#00D9FF" strokeWidth="2" />
                  <path d="M 12 28 L 12 14 L 20 22 L 28 14 L 28 28" fill="none" stroke="#FF1744" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-base text-white tracking-wider">
                  MARTIN LOURDURAJ
                </span>
                <div className="text-[10px] font-mono text-[#00D9FF]">
                  FOUNDER & FULL-STACK ARCHITECT · CSVS IT TECH
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-sm">
              "{PERSONAL_INFO.tagline}" Mission-critical healthcare software, clinical hospital management systems, and cloud infrastructure engineered for 100% data sovereignty.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#FF1744]" />
              <span>Tamil Nadu, India</span>
              <span>·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#00D9FF] hover:underline">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider block mb-3">
              NAVIGATION PROTOCOLS
            </span>
            <ul className="space-y-1.5 text-xs font-mono text-slate-300">
              {['about', 'skills', 'projects', 'experience', 'csvs-tech', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="hover:text-[#00D9FF] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-500">&gt;</span>
                    <span className="capitalize">{id.replace('-', ' ')}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: CSVS IT Tech & Verified Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono text-[#FF1744] uppercase tracking-wider block mb-3">
              ENTERPRISE PLATFORM
            </span>

            <div className="p-3.5 rounded-xl bg-[#071426] border border-[#00D9FF]/20 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-slate-300">
                <span className="font-bold text-white">CSVS Nova HMS</span>
                <span className="text-[10px] text-emerald-400">Production</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-normal">
                Enterprise Hospital Operations & Laboratory Automation Infrastructure.
              </p>
              <a
                href={CSVS_STARTUP_INFO.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00D9FF] hover:underline flex items-center gap-1 text-[11px] font-bold"
              >
                <span>Visit csvsittech.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-[#008CFF]/20 border border-white/10 hover:border-[#00D9FF]/40 text-slate-300 hover:text-white transition-all"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#00D9FF]" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-xl bg-white/5 hover:bg-[#FF1744]/20 border border-white/10 hover:border-[#FF1744]/40 text-slate-300 hover:text-white transition-all"
                title="Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 text-[#FF1744]" />
              </a>
              <a
                href={CSVS_STARTUP_INFO.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all"
                title="Official Portal"
                aria-label="Official Website"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower Copyright & Back to Top */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Designed & Engineered by <strong className="text-white">Martin Lourduraj</strong> — CSVS IT Tech. © {currentYear}.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Tamil Nadu, India · UTC+05:30
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#071426] border border-[#00D9FF]/30 hover:border-[#00D9FF] text-[#00D9FF] hover:bg-[#008CFF]/20 transition-all"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
