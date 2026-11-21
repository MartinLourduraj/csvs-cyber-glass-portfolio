import React from 'react';
import { 
  Building2, 
  ExternalLink, 
  ShieldCheck, 
  Target, 
  Compass, 
  Server, 
  ShieldAlert, 
  Globe, 
  Cloud, 
  Cpu, 
  Lock, 
  Mail,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { MagneticButton } from '../components/MagneticButton';
import { CSVS_STARTUP_INFO, PERSONAL_INFO } from '../data/portfolioData';

export const CSVSStartupSection: React.FC = () => {
  const offerings = CSVS_STARTUP_INFO.coreOfferings;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Lock': return <Lock className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="csvs-tech" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="STARTUP SPOTLIGHT"
          title="Building Tomorrow with"
          titleHighlight="CSVS IT Tech."
          subtitle="Engineering resilient digital infrastructure, sovereign healthcare management software, and high-concurrency enterprise ecosystems."
          align="center"
          color="fusion"
        />

        {/* Futuristic Blue & Red Glass Business Card Header */}
        <div className="mb-12">
          <GlassCard variant="fusion" className="p-8 sm:p-12 relative overflow-hidden">
            {/* Background Cyber Glow Rings */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF1744]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#008CFF]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Brand Identity (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/30 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" /> ENTERPRISE HEALTHCARE PLATFORM
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> OFFICIAL VENTURE
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                  CSVS IT TECH
                </h3>

                <p className="text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-purple-300 to-[#FF1744]">
                  "{CSVS_STARTUP_INFO.tagline}"
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
                  {CSVS_STARTUP_INFO.mission}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={CSVS_STARTUP_INFO.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-white text-xs sm:text-sm font-mono font-bold shadow-lg shadow-[#008CFF]/30 hover:shadow-[#00D9FF]/40 transition-all"
                  >
                    <span>Visit csvsittech.in</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => scrollTo('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-mono font-semibold transition-all"
                  >
                    <span>Initiate Enterprise Inquiry</span>
                    <ArrowRight className="w-4 h-4 text-[#FF1744]" />
                  </button>
                </div>
              </div>

              {/* Right Vision & Sovereignty Dossier (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#050B18]/90 border border-[#00D9FF]/30 backdrop-blur-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF] pb-2 border-b border-white/10">
                  <Target className="w-4 h-4 text-[#FF1744]" />
                  <span>FOUNDER'S VISION & DOCTRINE</span>
                </div>

                <div>
                  <h4 className="text-sm font-display font-bold text-white mb-1">Our Core Vision</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {CSVS_STARTUP_INFO.vision}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-[#00D9FF]/20 text-xs font-mono space-y-1.5">
                  <div className="flex justify-between text-slate-300">
                    <span>Corporate Registry:</span>
                    <span className="text-white font-bold">Tamil Nadu, India</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Flagship Suite:</span>
                    <span className="text-[#00D9FF] font-bold">CSVS Nova HMS</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Direct Inquiries:</span>
                    <a href="mailto:contact@csvsittech.in" className="text-[#FF1744] underline font-semibold">
                      contact@csvsittech.in
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </GlassCard>
        </div>

        {/* Enterprise Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, idx) => (
            <GlassCard
              key={idx}
              variant={idx % 2 === 0 ? 'blue' : 'red'}
              className="p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#071426] to-[#0D213F] border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF] group-hover:border-[#00D9FF] group-hover:shadow-[0_0_15px_rgba(0,217,255,0.4)] transition-all mb-4">
                  {getIcon(offering.icon)}
                </div>

                <h4 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
                  {offering.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {offering.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>CSVS IT Tech Standard</span>
                <span className="text-[#00D9FF] group-hover:translate-x-1 transition-transform">
                  &gt;&gt;
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
