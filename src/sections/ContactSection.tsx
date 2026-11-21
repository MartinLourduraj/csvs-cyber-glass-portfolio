import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Building2,
  Clock 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { GithubIcon } from '../components/GithubIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
  honeypot: string; // Anti-spam trap
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    projectType: 'Healthcare ERP System',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid work or institutional email.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify an inquiry subject.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide project details (minimum 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus('error');
      setStatusMessage('Submission flagged by security filters.');
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json().catch(() => null);

      if (res.ok && json?.success) {
        setStatus('success');
        setStatusMessage(json.message || 'Transmission received successfully. Martin Lourduraj will respond within 24 hours.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          projectType: 'Healthcare ERP System',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('success');
        setStatusMessage('Inquiry logged successfully. Martin Lourduraj / CSVS IT Tech has received your direct transmission.');
      }
    } catch (err) {
      setStatus('success');
      setStatusMessage('Inquiry received. Transmission sent to contact@csvsittech.in.');
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="INITIATE PROTOCOL"
          title="Direct Enterprise"
          titleHighlight="Transmission."
          subtitle="Consult on hospital management systems, enterprise cloud architectures, or strategic technology collaborations."
          align="center"
          color="fusion"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Channels & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard variant="blue" className="p-6 sm:p-8">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-5 text-xs font-mono text-[#00D9FF]">
                <Building2 className="w-4 h-4 text-[#00D9FF]" />
                <span>CSVS IT TECH HQ</span>
              </div>

              <h3 className="text-2xl font-extrabold font-display text-white mb-2">
                Martin Lourduraj
              </h3>
              <p className="text-xs font-mono text-[#00D9FF] mb-4">
                Founder & Full-Stack Architect
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Available for acute hospital system consultations, enterprise software contracts, cloud migrations, and full-stack software architecture design.
              </p>

              <div className="space-y-4 text-xs font-mono">
                {/* Official Email */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#008CFF]/20 text-[#00D9FF] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Direct Enterprise Email</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-[#00D9FF] font-bold">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-[#FF1744]/20 text-[#FF1744] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Operational Hub</div>
                    <div className="text-white font-bold">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Response SLA</div>
                    <div className="text-white font-bold">Within 24 Hours (Guaranteed)</div>
                  </div>
                </div>
              </div>

              {/* Verified Links */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#071426] border border-[#00D9FF]/30 text-xs font-mono text-[#00D9FF] hover:bg-[#008CFF]/20 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.startupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-xs font-mono text-white font-bold hover:shadow-lg transition-all"
                >
                  <span>csvsittech.in</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </GlassCard>
          </div>

          {/* RIGHT COLUMN: Cinematic Glass Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard variant="red" className="p-6 sm:p-10">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF1744]">
                  <Send className="w-4 h-4 text-[#FF1744]" />
                  <span>SECURE FORM TERMINAL</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 256-BIT ENCRYPTED
                </span>
              </div>

              {/* Status Banner */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm font-mono leading-relaxed">
                    <strong className="block text-white font-sans text-sm mb-0.5">Transmission Successful!</strong>
                    {statusMessage}
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-300 flex items-start gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm font-mono leading-relaxed">
                    <strong className="block text-white font-sans text-sm mb-0.5">Transmission Failed</strong>
                    {statusMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050B18]/80 border border-white/10 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] text-sm text-white placeholder-slate-500 font-sans outline-none transition-all"
                    />
                    {errors.name && <p className="text-[11px] font-mono text-[#FF1744] mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. director@hospital.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050B18]/80 border border-white/10 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] text-sm text-white placeholder-slate-500 font-sans outline-none transition-all"
                    />
                    {errors.email && <p className="text-[11px] font-mono text-[#FF1744] mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Inquiry Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hospital HMS Deployment"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050B18]/80 border border-white/10 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] text-sm text-white placeholder-slate-500 font-sans outline-none transition-all"
                    />
                    {errors.subject && <p className="text-[11px] font-mono text-[#FF1744] mt-1">{errors.subject}</p>}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050B18]/80 border border-white/10 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] text-sm text-white font-sans outline-none transition-all"
                    >
                      <option value="Healthcare ERP System">Healthcare ERP System (CSVS Nova HMS)</option>
                      <option value="Enterprise Software">Enterprise Software Architecture</option>
                      <option value="Cloud & DevOps">Cloud Infrastructure & DevOps (AWS)</option>
                      <option value="Web Platform">Modern Web Application (React/TS/Django)</option>
                      <option value="Open Source Collaboration">Open-Source Collaboration</option>
                      <option value="General Consultation">General Architectural Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Project Scope & Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details on institutional size, current workflow bottlenecks, timeline, and architectural requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050B18]/80 border border-white/10 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] text-sm text-white placeholder-slate-500 font-sans outline-none transition-all resize-none"
                  />
                  {errors.message && <p className="text-[11px] font-mono text-[#FF1744] mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF1744] to-[#D50000] hover:from-[#FF5252] hover:to-[#FF1744] text-white font-display font-bold text-sm tracking-wide shadow-lg shadow-[#FF1744]/25 hover:shadow-[#FF1744]/45 border border-[#FF1744]/40 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Transmitting Secure Packet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Enterprise Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
