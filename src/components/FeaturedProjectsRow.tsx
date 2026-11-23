import React, { useRef, useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  FolderGit2, 
  ShieldCheck, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { CyberHUDModal } from './CyberHUDModal';
import { GithubIcon } from './GithubIcon';

export const FeaturedProjectsRow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const offset = 420;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  // Drag-to-scroll implementation
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getAccentBorder = (accent: ProjectItem['accentColor']) => {
    switch (accent) {
      case 'red':
        return 'border-[#FF1744]/35 hover:border-[#FF1744]/70 shadow-[0_10px_30px_-10px_rgba(255,23,68,0.25)]';
      case 'cyan':
        return 'border-[#00D9FF]/35 hover:border-[#00D9FF]/70 shadow-[0_10px_30px_-10px_rgba(0,217,255,0.25)]';
      case 'purple':
        return 'border-[#7C3AED]/35 hover:border-[#7C3AED]/70 shadow-[0_10px_30px_-10px_rgba(124,58,237,0.25)]';
      default:
        return 'border-[#008CFF]/35 hover:border-[#00D9FF]/70 shadow-[0_10px_30px_-10px_rgba(0,140,255,0.25)]';
    }
  };

  return (
    <div className="relative w-full py-6 select-none">
      {/* Top Controls Header */}
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#00D9FF] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
            ROW 4 // FEATURED ENTERPRISE SYSTEMS & CLINICAL PLATFORMS
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous Projects"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'bg-[#071426]/90 border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#008CFF]/20'
                : 'bg-white/5 border border-white/5 text-slate-600 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Next Projects"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              canScrollRight
                ? 'bg-[#071426]/90 border border-[#FF1744]/40 text-[#FF1744] hover:bg-[#FF1744]/20'
                : 'bg-white/5 border border-white/5 text-slate-600 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={containerRef}
        onScroll={checkScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') handleScroll('left');
          if (e.key === 'ArrowRight') handleScroll('right');
        }}
        className={`flex gap-6 overflow-x-auto py-4 px-4 sm:px-6 max-w-7xl mx-auto no-scrollbar scroll-smooth snap-x snap-mandatory ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              if (!isDragging) setSelectedProject(project);
            }}
            className={`snap-center shrink-0 w-[300px] sm:w-[380px] lg:w-[440px] rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#071426]/90 via-[#071426]/80 to-[#050B18]/95 border ${getAccentBorder(
              project.accentColor
            )} backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
          >
            {/* Top Corner HUD Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />

            <div>
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {project.category}
                </span>

                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                    project.status === 'Enterprise Production'
                      ? 'bg-[#008CFF]/20 text-[#00D9FF] border-[#00D9FF]/40'
                      : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-2 group-hover:text-[#00D9FF] transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#00D9FF] transition-colors shrink-0" />
              </h3>

              <p className="text-xs sm:text-sm font-sans font-medium text-[#00D9FF] mb-3 line-clamp-1">
                {project.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Metrics Badge Row */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-[#050B18]/80 border border-white/5 mb-4">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-[11px] font-mono font-bold text-white leading-tight">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-slate-400 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Tech Pills & Action Links */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-500">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 group-hover:text-white transition-colors">
                  Click to inspect details &rarr;
                </span>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <span className="text-slate-400 hover:text-white">
                      <GithubIcon className="w-4 h-4" />
                    </span>
                  )}
                  {project.liveUrl && (
                    <span className="text-slate-400 hover:text-[#00D9FF]">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
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
                Architectural Highlights & Capabilities
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-[#FF1744] uppercase tracking-wider mb-2">
                Technology Stack
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

            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071426] border border-white/20 text-xs font-mono text-white hover:border-[#00D9FF]"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-xs font-mono font-bold text-white hover:opacity-90"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Official Platform</span>
                </a>
              )}
            </div>
          </div>
        </CyberHUDModal>
      )}
    </div>
  );
};
