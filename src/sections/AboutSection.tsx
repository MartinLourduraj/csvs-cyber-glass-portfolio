import React from 'react';
import { 
  Building2, 
  MapPin, 
  Lock, 
  ShieldAlert, 
  Cpu, 
  Cloud, 
  Activity, 
  Database, 
  Sparkles,
  Award,
  ArrowUpRight
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { PersonalPhoto } from '../components/PersonalPhoto';
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* CARD 1: Executive Founder Profile & Personal Portrait (8 cols lg) */}
          <GlassCard variant="blue" className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Top Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF]">
                  <Building2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>FOUNDER & ARCHITECT PROFILE</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#008CFF]/20 text-[#00D9FF] border border-[#00D9FF]/40 font-semibold">
                  CSVS IT TECH
                </span>
              </div>

              {/* Flex Container with Portrait & Biography */}
              <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-center md:items-start mb-6">
                {/* Personal Portrait in Compact Glass Frame */}
                <div className="shrink-0 flex justify-center">
                  <PersonalPhoto 
                    size="md" 
                    showBadges={false} 
                    showRings={true} 
                    showScanline={true} 
                  />
                </div>

                {/* Biography Text */}
                <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  <h3 className="text-2xl font-extrabold font-display text-white">
                    Martin Lourduraj
                  </h3>
                  <div className="text-xs font-mono text-[#00D9FF] font-semibold">
                    Founder & Full-Stack Architect · CSVS IT Tech
                  </div>
                  <p>
                    I am an engineer and technology entrepreneur based in Tamil Nadu, India. Over years of hands-on software development, I have focused on solving high-stakes enterprise problems—specifically building hospital management systems (HMS), clinical laboratory pipelines, and high-concurrency cloud infrastructure that medical professionals rely on around the clock.
                  </p>
                  <p>
                    My engineering philosophy is built on <span className="text-[#00D9FF] font-semibold">uncompromising resilience and absolute data sovereignty</span>. In healthcare technology, downtime is unacceptable and patient privacy is non-negotiable. I architect software with isolated enterprise boundaries so medical institutions maintain 100% control over their clinical records, diagnostic tests, and financial ledgers.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Meta Row */}
            <div className="pt-6 mt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#008CFF]/20 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">Zero-Data Leakage Doctrine</div>
                  <div className="text-[11px] text-slate-400">Zero external AI model training on patient records</div>
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

              <div className="space-y-2 py-3 border-y border-white/10 text-xs font-mono text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Out-Patient (OP) & In-Patient (IP)</span>
                  <span className="text-[#00D9FF]">Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Diagnostic Lab LIMS Protocols</span>
                  <span className="text-[#00D9FF]">Integrated</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>PACS / DICOM Imaging Handlers</span>
                  <span className="text-[#FF1744]">Standards</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Flagship: CSVS Nova HMS</span>
              <a href="https://csvsittech.in" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:underline flex items-center gap-1">
                csvsittech.in <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </GlassCard>

          {/* CARD 3: High-Availability Cloud & Infrastructure (6 cols lg) */}
          <GlassCard variant="blue" className="lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF] mb-3">
                <Cloud className="w-4 h-4 text-[#00D9FF]" />
                <span>INFRASTRUCTURE ARCHITECTURE</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
                Hardened AWS, Linux & Zero-Downtime Replication
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                Deployment topologies engineered with multi-AZ standby nodes, encrypted EBS volumes, hardened Ubuntu server runtimes, and reverse-proxy caching with Nginx.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">AWS EC2 / S3 / RDS</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">PostgreSQL ACID</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Redis In-Memory</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Docker Isolated</span>
            </div>
          </GlassCard>

          {/* CARD 4: Reactive Frontend & Modern UI Engineering (6 cols lg) */}
          <GlassCard variant="red" className="lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF1744] mb-3">
                <Cpu className="w-4 h-4 text-[#FF1744]" />
                <span>FRONTEND CRAFTSMANSHIP</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
                Cybernetic Glass Interfaces & Fluid Type Safety
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                Crafting interfaces that feel alive without compromising performance. Strict TypeScript types, accessible design systems, GPU-accelerated micro-interactions, and instant sub-100ms response times.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">React 18 Concurrent</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">TypeScript Strict</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Tailwind Design Tokens</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Liquid Glassmorphism</span>
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};
