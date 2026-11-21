import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Send, 
  ShieldCheck, 
  Terminal, 
  ExternalLink,
  Code2,
  Server,
  Cloud,
  Database,
  Cpu,
  Award
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { CyberHUDModal } from '../components/CyberHUDModal';
import { GithubIcon } from '../components/GithubIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Rotating professional titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.rotatingTitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Narrative & Call to Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071426]/80 border border-[#00D9FF]/30 backdrop-blur-md text-xs font-mono mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D9FF]" />
            </span>
            <span className="text-slate-300">STATUS:</span>
            <span className="text-[#00D9FF] font-semibold">{PERSONAL_INFO.availability}</span>
          </div>

          {/* Small Intro */}
          <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-[#00D9FF] uppercase tracking-widest mb-2">
            <Terminal className="w-4 h-4 text-[#FF1744]" />
            <span>Hello, I am</span>
          </div>

          {/* Large Animated Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white mb-4 leading-none">
            MARTIN <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#008CFF] to-[#FF1744] drop-shadow-[0_0_25px_rgba(0,140,255,0.4)]">
              LOURDURAJ
            </span>
          </h1>

          {/* Subtitle & Startup Association */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-xl font-display font-bold text-slate-200 mb-4">
            <span>{PERSONAL_INFO.title}</span>
            <span className="text-[#00D9FF]">·</span>
            <a 
              href={PERSONAL_INFO.startupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#008CFF] hover:underline"
            >
              <span>{PERSONAL_INFO.startup}</span>
              <ExternalLink className="w-4 h-4 text-[#00D9FF]" />
            </a>
          </div>

          {/* Animated Rotating Professional Titles */}
          <div className="h-9 mb-6 flex items-center">
            <span className="text-xs sm:text-sm font-mono text-slate-400 mr-2 uppercase tracking-wider">
              SPECIALIZATION:
            </span>
            <div className="px-3 py-1 rounded-lg bg-[#071426]/90 border border-[#FF1744]/30 text-xs sm:text-sm font-mono font-bold text-[#FF1744] shadow-[0_0_15px_rgba(255,23,68,0.2)] animate-pulse">
              &gt; {PERSONAL_INFO.rotatingTitles[titleIndex]}
            </div>
          </div>

          {/* Professional Introduction & Tagline */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mb-8">
            <strong className="text-white">"{PERSONAL_INFO.tagline}"</strong> Specialize in architecting mission-critical healthcare ERP systems, clinical hospital automation (OP/IP, LIMS, PACS/DICOM), enterprise cloud infrastructure on AWS, and high-concurrency digital platforms with 100% sovereign data guarantees.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <MagneticButton 
              variant="blue" 
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              onClick={() => scrollTo('projects')}
            >
              Explore My Work
            </MagneticButton>

            <MagneticButton 
              variant="outline" 
              size="lg"
              icon={<FileText className="w-4 h-4 text-[#00D9FF]" />}
              onClick={() => setCvModalOpen(true)}
            >
              Resume & Architecture Spec
            </MagneticButton>

            <MagneticButton 
              variant="red" 
              size="lg"
              icon={<Send className="w-4 h-4" />}
              iconPosition="right"
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </MagneticButton>

            <MagneticButton 
              variant="ghost" 
              size="lg"
              icon={<GithubIcon className="w-4 h-4 text-[#00D9FF]" />}
              href={PERSONAL_INFO.github}
              target="_blank"
            >
              View GitHub
            </MagneticButton>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/10">
            {PERSONAL_INFO.verifiedStats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-xl sm:text-2xl font-extrabold font-display text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#008CFF]">
                    {stat.value}
                  </span>
                  {stat.suffix}
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-tight mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Holographic Glass Frame & Cybernetic Rings (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          <TiltCard maxTilt={15} perspective={1200} className="w-full max-w-md">
            
            {/* Outer Holographic Container */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071426]/90 via-[#071426]/75 to-[#050B18]/90 border border-[#00D9FF]/35 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,140,255,0.2)] overflow-hidden">
              
              {/* Corner HUD Laser Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00D9FF]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#FF1744]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00D9FF]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FF1744]" />

              {/* Header Badge in Card */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#00D9FF]">
                  <Cpu className="w-4 h-4 animate-spin text-[#00D9FF]" />
                  <span>CSVS//ARCHITECT.SYS</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/30">
                  NODE: ACTIVE
                </span>
              </div>

              {/* Central Holographic Portrait & Orbital Rings */}
              <div className="relative flex items-center justify-center my-6">
                
                {/* Blue Rotating Ring */}
                <div className="absolute w-64 h-64 rounded-full border border-dashed border-[#00D9FF]/40 animate-orbit-slow" />
                {/* Crimson Rotating Ring */}
                <div className="absolute w-72 h-72 rounded-full border border-dotted border-[#FF1744]/40 animate-orbit-reverse-slow" />
                
                {/* Ambient Radial Gradient Core */}
                <div className="absolute w-52 h-52 rounded-full bg-gradient-to-tr from-[#008CFF]/20 via-[#7C3AED]/15 to-[#FF1744]/25 blur-xl pointer-events-none" />

                {/* Main Avatar HUD Box */}
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-2xl bg-[#050B18]/90 border-2 border-[#00D9FF]/60 flex flex-col items-center justify-center overflow-hidden shadow-2xl group">
                  
                  {/* Hologram scanline */}
                  <div className="absolute inset-0 hologram-scan pointer-events-none" />

                  {/* High-tech Stylized Architect Avatar Graphic */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#071426] via-[#0D213F] to-[#170911] border border-[#00D9FF]/50 flex items-center justify-center shadow-lg relative mb-2">
                    <span className="font-display font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-white to-[#FF1744]">
                      ML
                    </span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00D9FF] animate-ping" />
                  </div>

                  <span className="font-display font-bold text-sm text-white tracking-wider">
                    MARTIN LOURDURAJ
                  </span>
                  <span className="text-[10px] font-mono text-[#00D9FF]">
                    FOUNDER & ARCHITECT
                  </span>

                  {/* Verified Architecture Seal */}
                  <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED PROFILE
                  </div>
                </div>

                {/* Floating Tech Orbit Badges */}
                <div className="absolute -top-4 -left-2 p-2 rounded-xl bg-[#071426]/90 border border-[#00D9FF]/40 text-[#00D9FF] shadow-lg animate-float-slow" title="TypeScript & React">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="absolute -bottom-3 -right-2 p-2 rounded-xl bg-[#071426]/90 border border-[#FF1744]/40 text-[#FF1744] shadow-lg animate-float-slow" style={{ animationDelay: '1.5s' }} title="Python & Django ERP">
                  <Server className="w-5 h-5" />
                </div>
                <div className="absolute top-1/2 -right-5 p-2 rounded-xl bg-[#071426]/90 border border-[#00D9FF]/40 text-[#00D9FF] shadow-lg animate-float-slow" style={{ animationDelay: '3s' }} title="AWS Cloud Infrastructure">
                  <Cloud className="w-5 h-5" />
                </div>
                <div className="absolute top-1/2 -left-5 p-2 rounded-xl bg-[#071426]/90 border border-purple-400/40 text-purple-400 shadow-lg animate-float-slow" style={{ animationDelay: '2.2s' }} title="PostgreSQL">
                  <Database className="w-5 h-5" />
                </div>
              </div>

              {/* Lower Card Spec Matrix */}
              <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400">
                  <span>ENTERPRISE PLATFORM:</span>
                  <span className="text-white font-semibold">CSVS Nova HMS</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>OPERATIONAL HUB:</span>
                  <span className="text-[#00D9FF]">Tamil Nadu, India</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>DEPLOYMENT CLOUD:</span>
                  <span className="text-slate-200">AWS / Linux / Docker</span>
                </div>
              </div>

            </div>
          </TiltCard>
        </div>

      </div>

      {/* Resume & Architecture Spec Modal */}
      <CyberHUDModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        title="Professional Architecture & Resume Dossier"
        badge="DOSSIER//ML-2026"
        subtitle="Martin Lourduraj — Founder & Full-Stack Architect at CSVS IT Tech"
      >
        <div className="space-y-4 text-sm text-slate-300 font-sans">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="font-display font-bold text-white text-base mb-1 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#00D9FF]" /> Executive Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Full-Stack Architect and Founder of <strong>CSVS IT Tech</strong> based in Tamil Nadu, India. Deep specialization in clinical hospital information systems (CSVS Nova HMS), laboratory automation (LIMS), PACS/DICOM interfacing, enterprise ERP pipelines, and resilient AWS cloud architectures with strict data sovereignty standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#071426] border border-[#00D9FF]/20">
              <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider block mb-1">
                Core Competencies
              </span>
              <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                <li>Clinical Hospital ERPs (OP/IP, Pharmacy, Billing)</li>
                <li>LIMS Laboratory Machine Serial Interfacing</li>
                <li>PACS/DICOM Radiology Report Pipelines</li>
                <li>Django & PostgreSQL High-Volume Schema Design</li>
                <li>React, TypeScript & Modern SSR Web Systems</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-[#071426] border border-[#FF1744]/20">
              <span className="text-xs font-mono text-[#FF1744] uppercase tracking-wider block mb-1">
                Institutional Doctrines
              </span>
              <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                <li>100% Hospital Data Sovereignty Guarantee</li>
                <li>Zero External AI Model Training on Patient Data</li>
                <li>Role-Based Access Control (RBAC) & Audit Trails</li>
                <li>Zero-Downtime AWS Cloud Deployments</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono text-slate-400">
              Direct Contact: <a href="mailto:contact@csvsittech.in" className="text-[#00D9FF] underline">contact@csvsittech.in</a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#071426] border border-[#00D9FF]/40 text-xs font-mono text-[#00D9FF] hover:bg-[#008CFF]/20 transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" /> View Public Code
              </a>
              <a
                href="https://csvsittech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-white text-xs font-semibold hover:shadow-lg transition-all flex items-center gap-1.5"
              >
                <span>Enterprise Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </CyberHUDModal>
    </section>
  );
};
