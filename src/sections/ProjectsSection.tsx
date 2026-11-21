import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Check, 
  Info,
  Sparkles
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { CyberHUDModal } from '../components/CyberHUDModal';
import { GithubIcon } from '../components/GithubIcon';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

type ProjectCategoryFilter = 'All Projects' | 'Healthcare' | 'Web Applications' | 'Enterprise Software' | 'Automation';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryFilter>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [carouselIndices, setCarouselIndices] = useState<Record<string, number>>({});

  const categories: ProjectCategoryFilter[] = [
    'All Projects',
    'Healthcare',
    'Web Applications',
    'Enterprise Software',
    'Automation'
  ];

  const filteredProjects = activeCategory === 'All Projects'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  const handlePrevSlide = (projectId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + max) % max
    }));
  };

  const handleNextSlide = (projectId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % max
    }));
  };

  const renderMockGraphic = (mockType: string, title: string, caption: string) => {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-[#071426] via-[#050B18] to-[#0A182F] rounded-2xl border border-[#00D9FF]/30 p-4 flex flex-col justify-between overflow-hidden shadow-inner group">
        {/* Futuristic HUD overlay grid */}
        <div className="absolute inset-0 cyber-grid-overlay opacity-30 pointer-events-none" />
        <div className="absolute inset-0 hologram-scan pointer-events-none" />

        {/* Top Header Mockup Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1744]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D9FF]" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-mono text-slate-400 ml-2 uppercase tracking-wider">
              {mockType.toUpperCase()} // SYS.FEED
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> SANITIZED DEMO
          </span>
        </div>

        {/* Center Dynamic HUD Graphic */}
        <div className="flex flex-col items-center justify-center text-center my-auto z-10 py-2">
          {mockType === 'hms-dashboard' && (
            <div className="w-full space-y-2">
              <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-slate-400">OP QUEUE</div>
                  <div className="text-sm font-bold text-[#00D9FF]">28 Active</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-slate-400">IP BEDS</div>
                  <div className="text-sm font-bold text-emerald-400">92% Occ</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-slate-400">LAB TESTS</div>
                  <div className="text-sm font-bold text-[#FF1744]">14 Ready</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#00D9FF] to-[#FF1744] w-3/4 animate-pulse" />
              </div>
            </div>
          )}

          {mockType === 'clinical-lab' && (
            <div className="w-full text-left space-y-1.5 text-[11px] font-mono p-2 rounded-lg bg-black/40 border border-[#00D9FF]/20">
              <div className="text-[#00D9FF] font-bold">&gt; LIMS ANALYZER SYNC: CONNECTED</div>
              <div className="text-slate-300">Specimen ID: #CL-8842 [CBC / Hematology]</div>
              <div className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Automated Validation · Ready for Doctor Sign-Off
              </div>
            </div>
          )}

          {mockType === 'doctor-portal' && (
            <div className="w-full space-y-2 text-left">
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#008CFF]/10 border border-[#00D9FF]/30 text-xs font-mono">
                <span className="text-white font-bold">Dr. Consultation Portal</span>
                <span className="text-[#00D9FF]">Token #14</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                EHR Record Encrypted with Institutional Private Key
              </div>
            </div>
          )}

          {mockType === 'billing-suite' && (
            <div className="w-full text-left p-2 rounded-lg bg-[#071426] border border-white/10 text-[11px] font-mono space-y-1">
              <div className="flex justify-between text-slate-300">
                <span>Multi-Counter Ledger:</span>
                <span className="text-emerald-400 font-bold">BALANCED</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[10px]">
                <span>TPA Insurance / Corporate Split:</span>
                <span className="text-[#00D9FF]">Processed</span>
              </div>
            </div>
          )}

          {mockType === 'architecture' && (
            <div className="w-full p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-300">
              <div className="font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> NOVA AI ENTERPRISE BOUNDARY
              </div>
              <div className="text-[10px] text-slate-300 mt-1">
                Zero external data egress · 100% on-premise execution
              </div>
            </div>
          )}
        </div>

        {/* Bottom Slide Caption */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300 z-10">
          <span className="font-semibold text-white truncate mr-2">{title}</span>
          <span className="text-[10px] text-slate-400 shrink-0">{caption}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="PRODUCTION & OPEN-SOURCE PORTFOLIO"
          title="Verified"
          titleHighlight="Architectural Systems."
          subtitle="Hospital management solutions, clinical laboratory workflows, and open-source platforms verified from Martin Lourduraj's public GitHub and CSVS IT Tech."
          align="center"
          color="blue"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const currentSlide = carouselIndices[project.id] || 0;
            const currentScreenshot = project.screenshots[currentSlide] || project.screenshots[0];

            return (
              <GlassCard
                key={project.id}
                variant={project.accentColor === 'red' ? 'red' : (project.accentColor === 'purple' ? 'fusion' : 'blue')}
                className="p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF]">
                      <FolderGit2 className="w-4 h-4 text-[#00D9FF]" />
                      <span>{project.category}</span>
                    </div>

                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase border ${
                      project.status === 'Enterprise Production'
                        ? 'bg-blue-950/60 text-[#00D9FF] border-[#00D9FF]/40'
                        : (project.status === 'Public Open Source'
                          ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40'
                          : 'bg-purple-950/60 text-purple-300 border-purple-500/40')
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Screenshot Carousel */}
                  <div className="relative mb-6">
                    {renderMockGraphic(
                      currentScreenshot.mockType,
                      currentScreenshot.title,
                      currentScreenshot.caption
                    )}

                    {/* Carousel Navigation Arrows if multiple screenshots */}
                    {project.screenshots.length > 1 && (
                      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                        <button
                          onClick={(e) => handlePrevSlide(project.id, project.screenshots.length, e)}
                          className="p-1.5 rounded-full bg-black/60 hover:bg-[#00D9FF] text-white hover:text-black transition-all pointer-events-auto border border-white/20"
                          aria-label="Previous screenshot"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => handleNextSlide(project.id, project.screenshots.length, e)}
                          className="p-1.5 rounded-full bg-black/60 hover:bg-[#00D9FF] text-white hover:text-black transition-all pointer-events-auto border border-white/20"
                          aria-label="Next screenshot"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-extrabold font-display text-white group-hover:text-[#00D9FF] transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#00D9FF]/90 mb-3">
                    {project.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Architectural Highlights:
                    </span>
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <Check className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#071426] border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons & Details Modal Trigger */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#008CFF]/20 border border-white/10 hover:border-[#00D9FF]/40 text-xs font-mono text-slate-200 hover:text-white transition-all flex items-center gap-1.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[#00D9FF]" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-xs font-mono text-white font-semibold hover:shadow-lg transition-all flex items-center gap-1.5"
                      >
                        <span>Live Platform</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#071426] hover:bg-white/10 border border-[#00D9FF]/30 text-xs font-mono text-[#00D9FF] flex items-center gap-1.5 transition-all"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Full Specs</span>
                  </button>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <CyberHUDModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            badge={`SPEC//${selectedProject.category.toUpperCase()}`}
            subtitle={selectedProject.tagline}
          >
            <div className="space-y-5 text-slate-300 font-sans">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-display font-bold text-white text-base mb-2">
                  System Architecture & Overview
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Metrics Grid */}
              {selectedProject.metrics && (
                <div className="grid grid-cols-3 gap-3 font-mono">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#071426] border border-[#00D9FF]/20 text-center">
                      <div className="text-lg font-bold text-[#00D9FF]">{m.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Complete Features */}
              <div>
                <h5 className="font-display font-bold text-white text-sm mb-2.5">
                  Complete Functional Capabilities
                </h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedProject.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-black/20 border border-white/5">
                      <Check className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Verified Technology Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-xl bg-[#071426] border border-[#00D9FF]/30 text-xs font-mono text-[#00D9FF]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#071426] border border-[#00D9FF]/40 text-xs font-mono text-[#00D9FF] hover:bg-[#008CFF]/20 transition-colors flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-white text-xs font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </CyberHUDModal>
        )}

      </div>
    </section>
  );
};
