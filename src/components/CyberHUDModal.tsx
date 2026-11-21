import React, { useEffect } from 'react';
import { X, ShieldCheck, Terminal, Cpu } from 'lucide-react';

interface CyberHUDModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const CyberHUDModal: React.FC<CyberHUDModalProps> = ({
  isOpen,
  onClose,
  title,
  badge = 'SYS//SPEC',
  subtitle,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050B18]/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#071426]/95 border border-[#00D9FF]/40 shadow-2xl p-6 sm:p-8 backdrop-blur-2xl z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Holographic Top Corner Lines */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00D9FF] rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF1744] rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00D9FF] rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FF1744] rounded-br-2xl" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase bg-[#008CFF]/20 text-[#00D9FF] border border-[#00D9FF]/30 flex items-center gap-1">
                <Terminal className="w-3 h-3" /> {badge}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> VERIFIED
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">{title}</h3>
            {subtitle && <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{subtitle}</p>}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-[#FF1744]/20 border border-white/10 hover:border-[#FF1744]/50 text-slate-300 hover:text-[#FF1744] transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4">{children}</div>

        {/* Footer HUD info */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>CSVS Architecture Protocol · Tamil Nadu, India</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans text-xs transition-colors"
          >
            Close Specification
          </button>
        </div>
      </div>
    </div>
  );
};
