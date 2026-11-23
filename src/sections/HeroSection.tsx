import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Send, 
  ExternalLink,
  Terminal,
  Download,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { CyberHUDModal } from '../components/CyberHUDModal';
import { GithubIcon } from '../components/GithubIcon';
import { PersonalPhoto } from '../components/PersonalPhoto';
import { TechnologyRibbon } from '../components/TechnologyRibbon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Rotating professional titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-8 overflow-hidden"
    >
      {/* Top Main Hero Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-12 sm:mb-16">
        
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
            <span>Hello, I'm</span>
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
            <div className="px-3 py-1 rounded-lg bg-[#071426]/90 border border-[#FF1744]/30 text-xs sm:text-sm font-mono font-bold text-[#FF1744] shadow-[0_0_15px_rgba(255,23,68,0.2)]">
              &gt; {PERSONAL_INFO.rotatingTitles[titleIndex]}
            </div>
          </div>

          {/* Professional Introduction & Tagline */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mb-8">
            <strong className="text-white">"{PERSONAL_INFO.tagline}"</strong> Architecting mission-critical healthcare ERP systems, hospital management software (OP/IP, LIMS, PACS/DICOM), enterprise cloud infrastructure on AWS, and high-concurrency digital platforms with 100% sovereign data guarantees.
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
              Explore My Projects
            </MagneticButton>

            <MagneticButton 
              variant="outline" 
              size="lg"
              icon={<Download className="w-4 h-4 text-[#00D9FF]" />}
              onClick={() => setCvModalOpen(true)}
            >
              Download Resume
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
              GitHub
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

        {/* RIGHT COLUMN: Martin's Real Professional Photograph in Floating Holographic Glass Frame (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10 py-6 sm:py-0">
          <PersonalPhoto 
            size="hero" 
            showBadges={true} 
            showRings={true} 
            showScanline={true} 
          />
        </div>

      </div>

      {/* FLOWING TECHNOLOGY RIBBON BELOW HERO (ROW 1, ROW 2, ROW 3) */}
      <TechnologyRibbon />

      {/* Resume & Architectural Dossier Modal */}
      <CyberHUDModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        title="MARTIN LOURDURAJ — ARCHITECTURAL DOSSIER"
        subtitle="Full-Stack System Architect · Founder at CSVS IT Tech"
      >
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Founder & Full-Stack Architect with deep expertise in mission-critical healthcare systems, enterprise software, and scalable AWS cloud architectures. Creator of verified public and proprietary hospital ERP solutions.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#071426]/70 border border-[#00D9FF]/30">
              <h4 className="text-xs font-mono font-bold text-[#00D9FF] uppercase tracking-wider mb-2">
                Core Domains
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                <li>• Healthcare ERP (CSVS Nova HMS)</li>
                <li>• Clinical Laboratory LIMS Pipelines</li>
                <li>• PACS/DICOM Diagnostic Interfacing</li>
                <li>• Zero-Trust Sovereign Architecture</li>
                <li>• High-Concurrency Cloud Systems</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#071426]/70 border border-[#FF1744]/30">
              <h4 className="text-xs font-mono font-bold text-[#FF1744] uppercase tracking-wider mb-2">
                Tech Stack
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                <li>• React 18, TypeScript, Tailwind CSS</li>
                <li>• Python, Django, REST APIs, Celery</li>
                <li>• PostgreSQL, MySQL, Redis</li>
                <li>• AWS (EC2, S3, RDS, VPC), Linux, Nginx</li>
                <li>• Docker, Git, CI/CD, Vercel Edge</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-400">
              Direct Contact: <a href="mailto:contact@csvsittech.in" className="text-[#00D9FF] hover:underline">contact@csvsittech.in</a>
            </span>

            <a
              href="mailto:contact@csvsittech.in?subject=Resume%20and%20Architecture%20Inquiry%20-%20Martin%20Lourduraj"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-xs font-mono font-bold text-white hover:opacity-90 flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Full Dossier PDF</span>
            </a>
          </div>
        </div>
      </CyberHUDModal>

    </section>
  );
};
