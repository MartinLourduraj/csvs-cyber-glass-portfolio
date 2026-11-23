import React from 'react';
import { 
  Milestone, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Check, 
  Sparkles, 
  Terminal 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { HorizontalJourneyTimeline } from '../components/HorizontalJourneyTimeline';
import { TIMELINE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="CHRONOLOGICAL TRAJECTORY"
          title="Milestones &"
          titleHighlight="Professional Journey."
          subtitle="Verified timeline of enterprise founding, healthcare system architecture, and open-source contributions."
          align="center"
          color="fusion"
        />

        {/* ROW 6: HORIZONTAL JOURNEY TIMELINE */}
        <div className="mb-8">
          <HorizontalJourneyTimeline />
        </div>
      </div>
    </section>
  );
};
