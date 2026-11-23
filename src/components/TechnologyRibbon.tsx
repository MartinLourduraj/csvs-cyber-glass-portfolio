import React from 'react';
import { Marquee } from './Marquee';
import { ROW1_FRONTEND_TECH, ROW2_BACKEND_TECH, ROW3_CLOUD_TECH } from '../data/portfolioData';

export const TechnologyRibbon: React.FC = () => {
  return (
    <div className="relative w-full py-8 sm:py-12 border-y border-white/10 bg-[#050B18]/60 backdrop-blur-xl overflow-hidden z-10">
      {/* Decorative Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-25 pointer-events-none" />

      {/* Laser Divider Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF1744]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
            ENTERPRISE TECHNOLOGY STACK · MULTI-LAYER FLOW
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Independent continuous streaming across Frontend, Backend & Cloud infrastructure
        </span>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {/* ROW 1: Frontend Technologies (Right to Left) */}
        <Marquee
          items={ROW1_FRONTEND_TECH}
          speedSeconds={28}
          direction="left"
          rowLabel="ROW 1 // CLIENT ARCHITECTURE & REACT ECOSYSTEM"
          accent="blue"
        />

        {/* ROW 2: Backend & Database (Left to Right) */}
        <Marquee
          items={ROW2_BACKEND_TECH}
          speedSeconds={32}
          direction="right"
          rowLabel="ROW 2 // ENTERPRISE BACKEND, PYTHON & RELATIONAL STORAGE"
          accent="red"
        />

        {/* ROW 3: Cloud & DevOps (Slow Right to Left) */}
        <Marquee
          items={ROW3_CLOUD_TECH}
          speedSeconds={38}
          direction="left"
          rowLabel="ROW 3 // CLOUD INFRASTRUCTURE, DEVOPS & EDGE DEPLOYMENT"
          accent="cyan"
        />
      </div>
    </div>
  );
};
