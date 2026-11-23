import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SpecializationsRow } from './components/SpecializationsRow';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { GitHubSection } from './sections/GitHubSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CSVSStartupSection } from './sections/CSVSStartupSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

export const App: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const sectionIds = [
    'hero',
    'about',
    'specializations',
    'skills',
    'projects',
    'experience',
    'csvs-tech',
    'contact',
  ];

  const activeSection = useActiveSection(sectionIds, 150);

  return (
    <div className="relative min-h-screen bg-[#050B18] text-[#F1F5F9] font-sans selection:bg-[#008CFF] selection:text-white">
      {/* Global Interactive Animated Cyber Aurora Background */}
      <CyberBackground theme={theme} />

      {/* Floating Transparent Glass Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onThemeChange={setTheme}
      />

      {/* Main Content Sections with All 6 Animated Rows */}
      <main className="relative z-10 flex flex-col space-y-6 sm:space-y-12">
        {/* HERO SECTION + ROW 1 (Frontend), ROW 2 (Backend), ROW 3 (Cloud) */}
        <HeroSection />

        {/* ABOUT SECTION with Martin's Real Portrait & Sovereign Philosophy */}
        <AboutSection />

        {/* ROW 5 — SPECIALIZATIONS (6 Animated Transparent Cards) */}
        <SpecializationsRow />

        {/* SKILLS SECTION with Category Deep-Dive */}
        <SkillsSection />

        {/* PROJECTS SECTION + ROW 4 (Featured Projects Drag/Scroll Carousel) */}
        <ProjectsSection />

        {/* LIVE GITHUB INTEGRATION */}
        <GitHubSection />

        {/* EXPERIENCE SECTION + ROW 6 (Horizontal Journey Timeline) */}
        <ExperienceSection />

        {/* CSVS IT TECH STARTUP SHOWCASE */}
        <CSVSStartupSection />

        {/* ARCHITECTURAL ACHIEVEMENTS */}
        <AchievementsSection />

        {/* SECURE CONTACT FORM */}
        <ContactSection />
      </main>

      {/* Futuristic Transparent Glass Footer */}
      <Footer />
    </div>
  );
};

export default App;
