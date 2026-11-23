import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, FastForward, Sparkles, Terminal, Shield, Zap } from 'lucide-react';
import { ArcReactor3D } from './ArcReactor3D';
import { NoveaGuardian } from './NoveaGuardian';
import { NanoParticles } from './NanoParticles';
import { SuitAssembly } from './SuitAssembly';
import { noveaAudio } from './IntroAudioController';

interface CinematicIntroProps {
  onEnterPortfolio: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onEnterPortfolio }) => {
  const [phase, setPhase] = useState<'AWAITING_INTERACTION' | 'NOVEA_SPEAKING' | 'SUIT_UP_TRANSITION'>('AWAITING_INTERACTION');
  const [isAudioStarted, setIsAudioStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(() => noveaAudio.getMuted());
  const [currentCaption, setCurrentCaption] = useState<string>('');
  const [isNoveaSpeaking, setIsNoveaSpeaking] = useState(false);

  const dialogueLines = [
    "Welcome to Martin's World.",
    "I am NOVEA, your personal AI guide.",
    "Kindly explore the world of Martin Lourduraj.",
  ];

  const handleStartExperience = (withSound: boolean) => {
    setIsAudioStarted(true);
    noveaAudio.init();
    if (!withSound) {
      noveaAudio.setMuted(true);
      setIsMuted(true);
    } else {
      noveaAudio.setMuted(false);
      setIsMuted(false);
      noveaAudio.startReactorHum(0.12);
    }

    setPhase('NOVEA_SPEAKING');
    setIsNoveaSpeaking(true);

    noveaAudio.speakDialogue(
      dialogueLines,
      (_idx, line) => {
        setCurrentCaption(line);
      },
      () => {
        setIsNoveaSpeaking(false);
        setCurrentCaption('TOUCH THE REACTOR TO ENGAGE NANO SUIT PROTOCOL');
      }
    );
  };

  const handleReactorActivation = () => {
    noveaAudio.cancelSpeech();
    setPhase('SUIT_UP_TRANSITION');
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    noveaAudio.setMuted(nextMuted);
  };

  const handleSkipIntro = () => {
    noveaAudio.cancelSpeech();
    onEnterPortfolio();
  };

  // Suit-Up Assembly Completed
  if (phase === 'SUIT_UP_TRANSITION') {
    return (
      <SuitAssembly
        onComplete={onEnterPortfolio}
        onSkip={handleSkipIntro}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#050B18] text-[#F1F5F9] flex flex-col justify-between p-4 sm:p-8 overflow-hidden select-none">
      {/* Background Nanotech Particles */}
      <NanoParticles stage="idle" particleCount={1600} />

      {/* Volumetric Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF1744]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* TOP BAR: Controls & Status */}
      <header className="relative z-30 max-w-7xl w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#071426] to-[#0D213F] border border-[#00D9FF]/40 flex items-center justify-center shadow-lg">
            <Zap className="w-4 h-4 text-[#00D9FF]" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white tracking-widest">
              MARTIN'S WORLD
            </div>
            <div className="text-[10px] font-mono text-[#00D9FF]">
              SYSTEMS ARMED // NOVEA OS V3.0
            </div>
          </div>
        </div>

        {/* Audio & Skip Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleToggleMute}
            className="p-2.5 rounded-xl bg-[#071426]/80 border border-white/10 hover:border-[#00D9FF]/50 text-slate-300 hover:text-white transition-all shadow-sm"
            aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#FF1744]" /> : <Volume2 className="w-4 h-4 text-[#00D9FF]" />}
          </button>

          <button
            onClick={handleSkipIntro}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#071426]/80 border border-white/10 hover:border-[#00D9FF]/50 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm"
          >
            <FastForward className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>Skip Intro</span>
          </button>
        </div>
      </header>

      {/* CENTER: Main Interactive Stage */}
      <main className="relative z-30 my-auto flex flex-col items-center justify-center text-center max-w-3xl mx-auto w-full">
        {/* Title & Status */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426]/80 border border-[#00D9FF]/30 text-[11px] font-mono mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
            <span className="text-slate-300">CORE STATUS:</span>
            <span className="text-[#00D9FF] font-bold">POWER CORE ONLINE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight">
            MARTIN'S WORLD
          </h1>
        </div>

        {/* Dynamic Display: NOVEA Guardian or Arc Reactor */}
        {phase === 'AWAITING_INTERACTION' ? (
          <div className="space-y-6 flex flex-col items-center">
            {/* 3D Arc Reactor (Initial locked state) */}
            <ArcReactor3D
              onActivate={() => handleStartExperience(true)}
              isActivated={false}
              intensity={0.9}
            />

            {/* Call to action & browser audio permission unlock buttons */}
            <div className="space-y-3">
              <div className="text-sm font-mono text-[#00D9FF] tracking-widest uppercase font-semibold">
                TOUCH THE REACTOR TO ENTER
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => handleStartExperience(true)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-white font-mono text-xs font-bold hover:shadow-[0_0_25px_rgba(0,217,255,0.5)] transition-all flex items-center gap-2"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Enable Voice & Enter</span>
                </button>

                <button
                  onClick={() => handleStartExperience(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#071426]/90 border border-white/20 text-slate-300 font-mono text-xs hover:text-white hover:border-[#00D9FF] transition-all"
                >
                  Enter Silently
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 flex flex-col items-center">
            {/* NOVEA Guardian 3D Character Presentation */}
            <NoveaGuardian
              isSpeaking={isNoveaSpeaking}
              eyeIntensity={isNoveaSpeaking ? 1.4 : 1}
            />

            {/* Central Interactive Reactor below character */}
            <div className="-mt-8">
              <ArcReactor3D
                onActivate={handleReactorActivation}
                isActivated={false}
                intensity={1.2}
              />
            </div>

            {/* Captions HUD Display Bar */}
            <div className="max-w-xl mx-auto px-6 py-3 rounded-2xl bg-[#071426]/90 border border-[#00D9FF]/40 backdrop-blur-xl shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-[10px] font-mono text-[#FF1744] font-bold">NOVEA AI:</span>
                <span className="text-xs sm:text-sm font-mono text-white font-medium">
                  "{currentCaption || "Welcome to Martin's World."}"
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                Click or touch the Arc Reactor to initiate Nano Suit Protocol &rarr;
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER: Security & Sovereignty Notes */}
      <footer className="relative z-30 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#00D9FF]" />
          <span>ORIGINAL NOVEA ARCHITECTURE · SOVEREIGN TECH GUARDIAN</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Keyboard: Press Space/Enter to Activate · Esc to Skip</span>
        </div>
      </footer>
    </div>
  );
};
