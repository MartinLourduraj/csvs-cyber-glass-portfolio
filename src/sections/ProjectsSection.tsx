import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Check, 
  Info,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { CyberHUDModal } from '../components/CyberHUDModal';
import { GithubIcon } from '../components/GithubIcon';
import { FeaturedProjectsRow } from '../components/FeaturedProjectsRow';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

type ProjectCategoryFilter = 'All Projects' | 'Healthcare' | 'Web Applications' | 'Automation';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryFilter>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [carouselIndices, setCarouselIndices] = useState<Record<string, number>>({});

  const categories: ProjectCategoryFilter[] = [
    'All Projects',
    'Healthcare',
    'Web Applications',
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
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-xs font-mono px-2 py-1 bg-white/5 rounded border border-white/10">
                <span className="text-[#00D9FF]">HEMOGLOBIN (Hb)</span>
                <span className="text-emerald-400 font-bold">14.2 g/dL [NORMAL]</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono px-2 py-1 bg-white/5 rounded border border-white/10">
                <span className="text-[#00D9FF]">GLUCOSE (FASTING)</span>
                <span className="text-emerald-400 font-bold">96 mg/dL [NORMAL]</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">LIMS Analyzer Interface: ASTM / HL7 Compliant</div>
            </div>
          )}

          {mockType === 'doctor-portal' && (
            <div className="w-full space-y-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                <div className="text-xs font-mono font-bold text-white flex items-center justify-between">
                  <span>Dr. Consultation Hub</span>
                  <span className="text-[10px] text-emerald-400">Online</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  12 Appointments Confirmed · 3 Tele-Consultations Pending
                </div>
              </div>
            </div>
          )}

          {mockType === 'billing-suite' && (
            <div className="w-full space-y-1.5 font-mono text-left text-xs">
              <div className="flex justify-between p-2 rounded bg-white/5 border border-white/10">
                <span className="text-slate-400">INVOICE: #INV-2024-892</span>
                <span className="text-[#00D9FF] font-bold">PAID</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-white/5 border border-white/10">
                <span className="text-slate-400">INSURANCE SPLIT</span>
                <span className="text-emerald-400 font-bold">85% TPA APPROVED</span>
              </div>
            </div>
          )}

          {mockType === 'architecture' && (
            <div className="w-full space-y-2">
              <div className="flex items-center justify-around text-xs font-mono">
                <div className="px-2 py-1 rounded bg-[#008CFF]/20 border border-[#00D9FF]/40 text-[#00D9FF]">EC2 VPC</div>
                <span className="text-slate-500">&rarr;</span>
                <div className="px-2 py-1 rounded bg-purple-500/20 border border-purple-400/40 text-purple-300">Redis</div>
                <span className="text-slate-500">&rarr;</span>
                <div className="px-2 py-1 rounded bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">Postgres RDS</div>
              </div>
              <div className="text-[10px] font-mono text-slate-400">Zero-Trust Internal Network Boundary</div>
            </div>
          )}
        </div>

        {/* Bottom Caption */}
        <div className="pt-2 border-t border-white/10 z-10 flex items-center justify-between text-[11px] font-mono">
          <span className="text-white font-medium truncate">{title}</span>
          <span className="text-slate-400 text-[10px] truncate max-w-[50%]">{caption}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="PORTFOLIO HIGHLIGHTS"
          title="Architectural Showcases &"
          titleHighlight="Verified Projects."
          subtitle="Explore enterprise healthcare ERP platforms, clinical management systems, and public open-source tools created by Martin Lourduraj."
          align="center"
          color="fusion"
        />

        {/* ROW 4: FEATURED PROJECTS HORIZONTAL CAROUSEL */}
        <div className="mb-14">
          <FeaturedProjectsRow />
        </div>

        {/* Section Divider */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
              Detailed Exploration & System Demos
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-400 mt-0.5">
              Filter by industry category to view detailed clinical workflows and architecture specs
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-white font-bold shadow-md shadow-[#008CFF]/20'
                    : 'bg-[#071426]/70 border border-white/10 text-slate-400 hover:text-white hover:border-[#00D9FF]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const currentSlide = carouselIndices[project.id] || 0;
            const currentScreenshot = project.screenshots[currentSlide];

            return (
              <GlassCard
                key={project.id}
                variant={project.accentColor === 'red' ? 'red' : 'blue'}
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold">
                      {project.category}
                    </span>

                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-extrabold font-display text-white mb-1.5 flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <div className="text-xs font-mono font-medium text-[#00D9FF] mb-4">
                    {project.tagline}
                  </div>

                  {/* Interactive Screenshot Carousel Graphic */}
                  <div className="relative mb-6">
                    {renderMockGraphic(
                      currentScreenshot.mockType,
                      currentScreenshot.title,
                      currentScreenshot.caption
                    )}

                    {/* Carousel Controls */}
                    {project.screenshots.length > 1 && (
                      <div className="absolute bottom-2 right-2 flex items-center gap-1.5 z-20">
                        <button
                          onClick={(e) => handlePrevSlide(project.id, project.screenshots.length, e)}
                          aria-label="Previous screenshot"
                          className="w-7 h-7 rounded-lg bg-[#071426]/80 border border-white/20 text-slate-200 hover:text-[#00D9FF] flex items-center justify-center transition-colors"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#071426]/80 border border-white/10 text-slate-300">
                          {currentSlide + 1} / {project.screenshots.length}
                        </span>

                        <button
                          onClick={(e) => handleNextSlide(project.id, project.screenshots.length, e)}
                          aria-label="Next screenshot"
                          className="w-7 h-7 rounded-lg bg-[#071426]/80 border border-white/20 text-slate-200 hover:text-[#00D9FF] flex items-center justify-center transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Project Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-[#00D9FF] font-mono mt-0.5">&gt;</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Pills & Actions */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-[#00D9FF] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>System Specs & Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white hover:border-[#00D9FF] flex items-center gap-1.5 transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-xs font-mono font-bold text-white hover:opacity-90 flex items-center gap-1.5 transition-opacity"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Cyber HUD Detail Modal */}
      {selectedProject && (
        <CyberHUDModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          subtitle={selectedProject.tagline}
        >
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {selectedProject.longDescription}
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-[#00D9FF] uppercase tracking-wider mb-2">
                Clinical Workflow & Feature Matrix
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-[#FF1744] uppercase tracking-wider mb-2">
                Architectural Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#071426] border border-[#00D9FF]/30 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Data Boundary: 100% On-Premises / Private VPC
              </span>

              <div className="flex items-center gap-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-mono text-white hover:border-[#00D9FF]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-xs font-mono font-bold text-white hover:opacity-90"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </CyberHUDModal>
      )}
    </section>
  );
};
