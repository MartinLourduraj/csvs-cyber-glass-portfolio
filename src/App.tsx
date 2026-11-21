import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
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

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col space-y-8 sm:space-y-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubSection />
        <ExperienceSection />
        <CSVSStartupSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Futuristic Transparent Glass Footer */}
      <Footer />
    </div>
  );
};

export default App;
