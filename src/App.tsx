import React, { useState, useEffect } from 'react';
import { ThemeMode, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SponsorsMarquee } from './components/SponsorsMarquee';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AwardsSection } from './components/AwardsSection';
import { EducationSection } from './components/EducationSection';
import { ExtracurricularSection } from './components/ExtracurricularSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('mhk_theme') as ThemeMode;
    return saved || 'dark';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Apply theme class to document element for global CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-light', 'theme-eye-protect');
    root.classList.add(`theme-${theme}`);
    localStorage.setItem('mhk_theme', theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-orange-500 selection:text-white theme-${theme}`}
    >
      {/* Top Fixed Navigation Bar with 3-mode Switcher & Live Watch */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section: Elevated Top Profile Photo, Badges, CTAs, Animated Socials, Stats */}
        <Hero theme={theme} />

        {/* 2. Official Sponsors Marquee (Right-to-Left Continuous Animation) */}
        <SponsorsMarquee theme={theme} />

        {/* 3. About Section: Placed directly below the profile hero as requested */}
        <AboutSection theme={theme} />

        {/* 4. Expertise Section: Domains, Tech Stack, Proficiency & Tools */}
        <ExpertiseSection theme={theme} />

        {/* 5. Work Experience Section: UIU Mariner CFO, UIU Mars Rover, URO Bangladesh CFO, UIU PRO & Comms */}
        <ExperienceSection theme={theme} />

        {/* 6. Projects Section: Professional Photography, Lab Badges, Architecture Modals */}
        <ProjectsSection
          theme={theme}
          onSelectProject={(p) => setSelectedProject(p)}
        />

        {/* 7. Awards & Special Mentions: MATE ROV 2025 World Champion, URC, ARC, WRO Judge */}
        <AwardsSection theme={theme} />

        {/* 8. Education Section: SSC, HSC, B.Sc in CSE at UIU */}
        <EducationSection theme={theme} />

        {/* 9. Extracurricular & Social: Mentorship, Yamaha/ACI Blankets, Moto Tours */}
        <ExtracurricularSection theme={theme} />

        {/* 10. Contact Section: Direct Messages, Copyable Emails, Animated Social Networks */}
        <ContactSection theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Project Architecture & Details Modal */}
      <ProjectModal
        project={selectedProject}
        theme={theme}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
