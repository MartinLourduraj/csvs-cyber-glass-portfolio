import React from 'react';
import { 
  User, 
  ShieldAlert, 
  Cpu, 
  Cloud, 
  Activity, 
  Lightbulb, 
  MapPin, 
  Building2, 
  ArrowUpRight,
  Database,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="ARCHITECTURAL DOSSIER"
          title="Engineered for Reliability."
          titleHighlight="Built for Impact."
          subtitle="A look into my engineering philosophy, enterprise foundation at CSVS IT Tech, and passion for sovereign healthcare digital systems."
          align="center"
          color="fusion"
        />

        {/* Bento Grid Layout (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          
          {/* CARD 1: Executive Founder & Philosophy (8 cols lg) */}
          <GlassCard variant="blue" className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF]">
                  <Building2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>FOUNDER & ARCHITECT PROFILE</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#008CFF]/20 text-[#00D9FF] border border-[#00D9FF]/30">
                  CSVS IT TECH
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">
                Pioneering Sovereign Healthcare ERP & Cloud Systems
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  I am <strong>Martin Lourduraj</strong>, Founder and Full-Stack Architect at <strong>CSVS IT Tech</strong> based in Tamil Nadu, India. Over years of hands-on software development, I have focused on solving high-stakes enterprise problems—specifically building hospital management systems (HMS), clinical lab pipelines, and high-concurrency cloud infrastructure that medical professionals rely on around the clock.
                </p>
                <p>
                  My engineering philosophy is built on <span className="text-[#00D9FF] font-semibold">uncompromising resilience and absolute data sovereignty</span>. In healthcare technology, downtime is unacceptable and patient privacy is non-negotiable. I architect software with isolated enterprise boundaries so medical institutions maintain 100% control over their clinical records, diagnostic tests, and financial ledgers.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#008CFF]/20 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">Zero-Data Leakage Doctrine</div>
                  <div className="text-[11px] text-slate-400">No public AI training on patient records</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF]">
                <MapPin className="w-4 h-4 text-[#FF1744]" />
                <span>Tamil Nadu, India · Global Operations</span>
              </div>
            </div>
          </GlassCard>

          {/* CARD 2: Clinical Hospital Systems & HMS Focus (4 cols lg) */}
          <GlassCard variant="red" className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF1744]">
                  <ShieldAlert className="w-4 h-4 text-[#FF1744]" />
                  <span>HEALTHCARE SPECIALTY</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/30">
                  CLINICAL HMS
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                Mission-Critical Hospital Operations
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                From emergency room triage and in-patient bed management to laboratory analyzer automation and multi-counter billing, I engineer architectures capable of processing intense hospital load without bottlenecks.
              </p>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-slate-400">Clinical LIMS:</span>
                  <span className="text-[#FF1744] font-semibold">Analyzer Serial Protocol</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-slate-400">Imaging Standard:</span>
                  <span className="text-white font-semibold">PACS / DICOM Feeds</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-slate-400">Dispensary:</span>
                  <span className="text-[#00D9FF] font-semibold">Real-Time Stock Sync</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Standard: HIPAA-Grade Security</span>
              <span className="text-emerald-400 font-bold">100% SOVEREIGN</span>
            </div>
          </GlassCard>

          {/* CARD 3: Full-Stack Engineering Architecture (4 cols lg) */}
          <GlassCard variant="default" className="lg:col-span-4 p-6 sm:p-7">
            <div className="w-10 h-10 rounded-xl bg-[#008CFF]/20 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
              Full-Stack Engineering
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
              Mastery across modern frontend ecosystems (React, TypeScript, Tailwind CSS, Remix) paired with high-performance backends in Python (Django) and relational databases (PostgreSQL).
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              {['TypeScript', 'React', 'Python', 'Django', 'PostgreSQL', 'REST'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* CARD 4: Cloud Infrastructure & DevOps (4 cols lg) */}
          <GlassCard variant="default" className="lg:col-span-4 p-6 sm:p-7">
            <div className="w-10 h-10 rounded-xl bg-[#FF1744]/20 border border-[#FF1744]/40 flex items-center justify-center text-[#FF1744] mb-4">
              <Cloud className="w-5 h-5" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
              Resilient Cloud & DevOps
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
              Multi-tier architectures deployed on AWS, Linux, and Docker containers with reverse proxying via Nginx, automated SSL/TLS maintenance, and automated database backups.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              {['AWS EC2/S3', 'Docker', 'Linux', 'Nginx', 'Vercel', 'CI/CD'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* CARD 5: Enterprise Automation & Innovation (4 cols lg) */}
          <GlassCard variant="fusion" className="lg:col-span-4 p-6 sm:p-7">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
              Automation & Nova AI
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
              Custom asynchronous task pipelines (Celery/Redis) that eliminate manual operational bottlenecks: automated prescription alerts, discharge summaries, and stock alerts.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              {['Nova AI', 'Celery', 'Redis', 'NLP Summaries', 'Event Queues'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};
