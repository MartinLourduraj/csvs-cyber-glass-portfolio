import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  Maximize2, 
  CheckCircle2, 
  Sparkles, 
  Terminal 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { CyberHUDModal } from '../components/CyberHUDModal';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { AchievementItem } from '../types';

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  // If no achievements data is present, hides gracefully as requested
  if (!ACHIEVEMENTS_DATA || ACHIEVEMENTS_DATA.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="VERIFIED CREDENTIALS"
          title="Architectural"
          titleHighlight="Achievements & Milestones."
          subtitle="Enterprise governance, open-source milestones, and high-concurrency cloud architecture accomplishments."
          align="center"
          color="blue"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((item) => (
            <GlassCard
              key={item.id}
              variant="default"
              className="p-6 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedAchievement(item)}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#00D9FF]">
                    <Award className="w-4 h-4 text-[#00D9FF]" />
                    <span>{item.badgeCode}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED
                  </span>
                </div>

                <h4 className="text-lg font-bold font-display text-white group-hover:text-[#00D9FF] transition-colors mb-2">
                  {item.title}
                </h4>

                <div className="text-xs font-mono text-slate-400 mb-3">
                  Issuer: <span className="text-slate-200">{item.issuer}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#00D9FF] font-semibold">
                  {item.impactMetric}
                </span>
                <span className="text-slate-400 flex items-center gap-1 group-hover:text-white transition-colors">
                  <span>Inspect Spec</span>
                  <Maximize2 className="w-3 h-3" />
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Achievement Modal Preview */}
        {selectedAchievement && (
          <CyberHUDModal
            isOpen={!!selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
            title={selectedAchievement.title}
            badge={selectedAchievement.badgeCode}
            subtitle={`Issued by ${selectedAchievement.issuer} · ${selectedAchievement.date}`}
          >
            <div className="space-y-4 text-sm text-slate-300 font-sans">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider mb-1">
                  Scope & Architectural Impact
                </div>
                <p className="leading-relaxed">
                  {selectedAchievement.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#071426] border border-[#00D9FF]/20 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Verified Metric:</span>
                <span className="text-emerald-400 font-bold">{selectedAchievement.impactMetric}</span>
              </div>

              {selectedAchievement.verificationUrl && (
                <div className="pt-2">
                  <a
                    href={selectedAchievement.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-white text-xs font-mono font-semibold"
                  >
                    <span>View Public Source / Repo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </CyberHUDModal>
        )}

      </div>
    </section>
  );
};
