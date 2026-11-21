import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  Sparkles,
  Terminal,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { Marquee } from '../components/Marquee';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

type CategoryFilter = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Cloud & DevOps' | 'Development Tools' | 'AI & Automation';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Cloud & DevOps',
    'Development Tools',
    'AI & Automation'
  ];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  const getTierBadge = (tier: SkillItem['proficiencyTier']) => {
    switch (tier) {
      case 'Architect Level':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#008CFF]/20 text-[#00D9FF] border border-[#00D9FF]/40">
            ARCHITECT LEVEL
          </span>
        );
      case 'Advanced Production':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/40">
            ADVANCED PROD
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white/10 text-slate-300 border border-white/20">
            SPECIALIST
          </span>
        );
    }
  };

  // Tools marquee items list
  const marqueeItems = [
    { name: 'React 18', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Python 3', category: 'Core' },
    { name: 'Django ERP', category: 'Framework' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS Cloud', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Tailwind CSS', category: 'UI' },
    { name: 'Redis Cache', category: 'Cache' },
    { name: 'Linux Systems', category: 'OS' },
    { name: 'Nginx Proxy', category: 'Server' },
    { name: 'Vercel Edge', category: 'Deployment' },
    { name: 'REST APIs', category: 'Integration' },
    { name: 'Git & GitHub', category: 'VCS' },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="TECH ARSENAL & PROFICIENCY"
          title="Battle-Tested"
          titleHighlight="Technology Stack."
          subtitle="Enterprise technologies deployed across mission-critical healthcare ERPs, cloud backends, and high-performance digital platforms."
          align="center"
          color="blue"
        />

        {/* Continuous Horizontal Scrolling Tools Showcase */}
        <div className="mb-12">
          <Marquee items={marqueeItems} speedSeconds={25} direction="left" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono tracking-wider transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-[#008CFF] text-white font-bold shadow-lg shadow-[#008CFF]/30 border border-[#00D9FF]'
                    : 'bg-[#071426]/70 text-slate-300 hover:text-white hover:bg-[#071426] border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <GlassCard 
              key={skill.name} 
              variant="default"
              className="p-5 sm:p-6 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#071426] to-[#0D213F] border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF] group-hover:border-[#00D9FF] group-hover:shadow-[0_0_12px_rgba(0,217,255,0.4)] transition-all">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#00D9FF] transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  {getTierBadge(skill.proficiencyTier)}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mt-2">
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-[#00D9FF]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Production Verified
                </span>
                <span className="text-slate-500">CSVS Core</span>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
