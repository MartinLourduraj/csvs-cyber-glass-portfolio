import React, { useEffect, useState } from 'react';
import { ShieldCheck, Cpu, Zap, Activity } from 'lucide-react';
import { NanoParticles } from './NanoParticles';
import { noveaAudio } from './IntroAudioController';

interface SuitAssemblyProps {
  onComplete: () => void;
  onSkip: () => void;
}

type NanoStage = 'A_ENERGY_RELEASE' | 'B_PARTICLE_DISPERSION' | 'C_MECHANICAL_ASSEMBLY' | 'D_HOLOGRAPHIC_CONSTRUCTION' | 'E_GLASS_MATERIALIZATION' | 'F_FINAL_REVEAL' | 'G_SYSTEM_ONLINE';

export const SuitAssembly: React.FC<SuitAssemblyProps> = ({ onComplete, onSkip }) => {
  const [stage, setStage] = useState<NanoStage>('A_ENERGY_RELEASE');
  const [subText, setSubText] = useState('INITIATING NANO SUIT PROTOCOL...');

  useEffect(() => {
    // Stage A: Energy Release
    setStage('A_ENERGY_RELEASE');
    setSubText('STAGE A // THERMAL ARC ENERGY RELEASE');
    noveaAudio.playActivationSurge();

    // Stage B: Particle Dispersion
    const t1 = setTimeout(() => {
      setStage('B_PARTICLE_DISPERSION');
      setSubText('STAGE B // NANOTECH PARTICULATE DISPERSION');
      noveaAudio.playNanotechDispersion();
    }, 1200);

    // Stage C: Mechanical Assembly
    const t2 = setTimeout(() => {
      setStage('C_MECHANICAL_ASSEMBLY');
      setSubText('STAGE C // GEOMETRIC LATTICE ARMOR CONVERGENCE');
      noveaAudio.playSuitAssemblyLock();
    }, 2500);

    // Stage D: Holographic Construction
    const t3 = setTimeout(() => {
      setStage('D_HOLOGRAPHIC_CONSTRUCTION');
      setSubText('STAGE D // HOLOGRAPHIC UI RECONSTRUCTION');
      noveaAudio.playNanotechDispersion();
    }, 3800);

    // Stage E: Glass Materialization
    const t4 = setTimeout(() => {
      setStage('E_GLASS_MATERIALIZATION');
      setSubText('STAGE E // LIQUID CYBER GLASS CRYSTALLIZATION');
      noveaAudio.playSuitAssemblyLock();
    }, 4900);

    // Stage G: System Online Welcome
    const t5 = setTimeout(() => {
      setStage('G_SYSTEM_ONLINE');
      setSubText('STAGE G // ALL SYSTEMS VERIFIED & ONLINE');
    }, 6000);

    // Stage F & Final Reveal
    const t6 = setTimeout(() => {
      setStage('F_FINAL_REVEAL');
      onComplete();
    }, 7200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#050B18] flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Nanotech Particle Background */}
      <NanoParticles
        stage={
          stage === 'A_ENERGY_RELEASE'
            ? 'burst'
            : stage === 'B_PARTICLE_DISPERSION'
            ? 'dispersion'
            : 'assembly'
        }
      />

      {/* STAGE A: High-Energy Expanding Circular Shockwave */}
      {stage === 'A_ENERGY_RELEASE' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full border-4 border-[#00D9FF] animate-ping opacity-90 shadow-[0_0_80px_#00D9FF]" />
          <div className="w-32 h-32 rounded-full border-2 border-[#FF1744] animate-ping opacity-75 shadow-[0_0_60px_#FF1744]" />
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#00D9FF]/40 to-[#FF1744]/40 blur-2xl animate-pulse" />
        </div>
      )}

      {/* STAGE C & D: Holographic Grid & Wireframe Outlines */}
      {(stage === 'C_MECHANICAL_ASSEMBLY' || stage === 'D_HOLOGRAPHIC_CONSTRUCTION') && (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8 sm:p-12">
          {/* Top Navbar Wireframe */}
          <div className="h-16 w-full max-w-7xl mx-auto rounded-2xl border-2 border-dashed border-[#00D9FF]/60 bg-[#071426]/30 backdrop-blur-sm animate-pulse flex items-center justify-between px-6">
            <span className="text-xs font-mono text-[#00D9FF]">SYS://NAVBAR_CHASSIS_ACTIVE</span>
            <div className="flex gap-4">
              <span className="w-12 h-2 rounded bg-[#00D9FF]/40" />
              <span className="w-12 h-2 rounded bg-[#FF1744]/40" />
              <span className="w-12 h-2 rounded bg-[#00D9FF]/40" />
            </div>
          </div>

          {/* Central Grid Wireframes */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
            <div className="h-64 rounded-3xl border border-[#00D9FF]/50 bg-gradient-to-br from-[#008CFF]/10 to-transparent p-6 flex flex-col justify-between">
              <span className="text-xs font-mono text-[#00D9FF]">NANO_NODE_LEFT // HERO_MATRIX</span>
              <div className="space-y-3">
                <div className="h-6 w-3/4 bg-[#00D9FF]/30 rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-white/20 rounded" />
                <div className="h-4 w-2/3 bg-white/10 rounded" />
              </div>
              <span className="text-[10px] font-mono text-slate-400">STATUS: CONSTRUCTING 100%</span>
            </div>

            <div className="h-64 rounded-3xl border border-[#FF1744]/50 bg-gradient-to-bl from-[#FF1744]/10 to-transparent p-6 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-2 border-dashed border-[#FF1744] animate-spin flex items-center justify-center text-xs font-mono text-[#FF1744]">
                <span>NANO_CORE</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STAGE E & G: Glass Shimmer and System Online Banner */}
      {(stage === 'E_GLASS_MATERIALIZATION' || stage === 'G_SYSTEM_ONLINE') && (
        <div className="relative z-30 max-w-lg mx-auto text-center px-6 py-8 rounded-3xl bg-[#071426]/85 border-2 border-[#00D9FF]/60 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,140,255,0.4)] animate-ambient-glow">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008CFF]/20 border border-[#00D9FF]/40 text-xs font-mono text-[#00D9FF] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#00D9FF]" />
            <span>NANO SUIT PROTOCOL COMPLETED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-2 tracking-tight">
            MARTIN'S WORLD
          </h2>
          <div className="text-xl sm:text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-white to-[#FF1744] mb-4">
            SYSTEM ONLINE
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-300 tracking-wider">
            WELCOME, EXPLORER. ARCHITECTURAL INTERFACE DEPLOYED.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="h-1.5 w-48 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00D9FF] via-[#008CFF] to-[#FF1744] w-full animate-shimmer" />
            </div>
          </div>
        </div>
      )}

      {/* Bottom Telemetry Bar */}
      <div className="absolute bottom-6 inset-x-0 z-30 px-6 max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-[#00D9FF]">
          <Activity className="w-4 h-4 animate-pulse" />
          <span>{subText}</span>
        </div>

        <button
          onClick={onSkip}
          className="px-4 py-2 rounded-xl bg-[#071426]/80 border border-white/20 text-slate-300 hover:text-white hover:border-[#00D9FF] transition-all"
        >
          Skip Transition &rarr;
        </button>
      </div>
    </div>
  );
};
