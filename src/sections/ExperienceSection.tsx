import React from 'react';
import { 
  Milestone, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Check, 
  Sparkles, 
  Terminal 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { TIMELINE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="CHRONOLOGICAL TRAJECTORY"
          title="Milestones &"
          titleHighlight="Professional Journey."
          subtitle="Verified timeline of enterprise founding, healthcare system architecture, and open-source contributions."
          align="center"
          color="fusion"
        />

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#00D9FF]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {TIMELINE_DATA.map((milestone, idx) => {
            const isBlue = idx % 2 === 0;

            return (
              <div key={idx} className="relative group">
                
                {/* Glowing Node Dot on Timeline */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                    isBlue 
                      ? 'bg-[#008CFF] border-[#00D9FF] shadow-[0_0_12px_#00D9FF]' 
                      : 'bg-[#FF1744] border-white shadow-[0_0_12px_#FF1744]'
                  }`}
                />

                {/* Timeline Glass Card */}
                <GlassCard 
                  variant={isBlue ? 'blue' : 'red'}
                  className="p-6 sm:p-8"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-[#008CFF]/20 border border-[#00D9FF]/40 text-xs font-mono font-bold text-[#00D9FF] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {milestone.year}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {milestone.period}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {milestone.badge}
                    </span>
                  </div>

                  {/* Role & Entity */}
                  <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-1">
                    {milestone.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-[#00D9FF] mb-4">
                    <span className="font-semibold text-white">{milestone.entity}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-[#FF1744]" />
                      {milestone.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
                    {milestone.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Core Milestones Delivered:
                    </span>
                    {milestone.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </GlassCard>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
