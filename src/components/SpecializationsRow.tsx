import React from 'react';
import { 
  Code2, 
  Activity, 
  Server, 
  Cloud, 
  Cpu, 
  Terminal, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';
import { SPECIALIZATIONS_DATA } from '../data/portfolioData';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Activity,
  Server,
  Cloud,
  Cpu,
  Terminal,
};

export const SpecializationsRow: React.FC = () => {
  return (
    <section id="specializations" className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Row Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF1744]">
                ROW 5 // ARCHITECTURAL SPECIALIZATIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white">
              Six Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#008CFF] to-[#FF1744]">Engineering Mastery</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Continuous specialization across clinical healthcare, cloud infrastructure, and resilient enterprise core.
          </p>
        </div>

        {/* 6 Animated Transparent Cards Grid / Flowing Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALIZATIONS_DATA.map((spec, index) => {
            const IconComp = ICON_MAP[spec.iconName] || Terminal;
            const isAlternate = index % 2 === 1;

            const accentClasses = {
              blue: {
                border: 'border-[#008CFF]/30 hover:border-[#00D9FF]/70',
                iconBg: 'bg-[#008CFF]/15 text-[#00D9FF] border-[#00D9FF]/40',
                badge: 'bg-[#008CFF]/15 text-[#00D9FF] border-[#00D9FF]/30',
                glow: 'hover:shadow-[0_15px_35px_-10px_rgba(0,140,255,0.35)]',
              },
              red: {
                border: 'border-[#FF1744]/30 hover:border-[#FF1744]/70',
                iconBg: 'bg-[#FF1744]/15 text-[#FF1744] border-[#FF1744]/40',
                badge: 'bg-[#FF1744]/15 text-[#FF1744] border-[#FF1744]/30',
                glow: 'hover:shadow-[0_15px_35px_-10px_rgba(255,23,68,0.35)]',
              },
              cyan: {
                border: 'border-[#00D9FF]/30 hover:border-[#00D9FF]/70',
                iconBg: 'bg-[#00D9FF]/15 text-[#00D9FF] border-[#00D9FF]/40',
                badge: 'bg-[#00D9FF]/15 text-[#00D9FF] border-[#00D9FF]/30',
                glow: 'hover:shadow-[0_15px_35px_-10px_rgba(0,217,255,0.35)]',
              },
            };

            const style = accentClasses[spec.accent];

            return (
              <div
                key={spec.id}
                className={`relative rounded-3xl p-6 sm:p-7 bg-[#071426]/75 border ${style.border} ${style.glow} backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group overflow-hidden ${
                  isAlternate ? 'animate-float-slow' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.8}s`,
                }}
              >
                {/* Subtle Laser Gradient Edge */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
                    <div className={`w-11 h-11 rounded-2xl ${style.iconBg} border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${style.badge}`}>
                      {spec.metric}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-extrabold font-display text-white mb-1 group-hover:text-[#00D9FF] transition-colors">
                    {spec.title}
                  </h3>
                  <div className="text-xs font-mono text-[#00D9FF] mb-3">
                    {spec.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    {spec.description}
                  </p>
                </div>

                {/* Bottom Tech Pills */}
                <div>
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {spec.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-[#050B18]/80 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
