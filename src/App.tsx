import React, { useState, useEffect } from 'react';
import { ThemeMode, DeviceMode, Project } from './types';
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
  // Always default to 'light' mode as explicitly requested
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('mhk_theme') as ThemeMode;
    return (saved === 'light' || saved === 'dark' || saved === 'eye-protect') ? saved : 'light';
  });

  // 1-Button Viewport Switcher (PC, Tablet, Mobile)
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('pc');

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
      {/* Top Fixed Navigation Bar with Consolidated 1-Button Theme & 1-Button Device Switcher */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        deviceMode={deviceMode}
        setDeviceMode={setDeviceMode}
      />

      {/* Responsive Device Frame Container (PC = 100% fluid, Tablet = 768px, Mobile = 390px) */}
      <div
        className={`transition-all duration-500 ${
          deviceMode === 'tablet'
            ? 'max-w-[768px] mx-auto my-16 rounded-[36px] border-4 border-stone-800 shadow-[0_25px_70px_rgba(0,0,0,0.35)] overflow-hidden relative bg-[var(--bg-primary)]'
            : deviceMode === 'mobile'
            ? 'max-w-[390px] mx-auto my-16 rounded-[44px] border-4 border-stone-800 shadow-[0_25px_70px_rgba(0,0,0,0.35)] overflow-hidden relative bg-[var(--bg-primary)]'
            : 'w-full'
        }`}
      >
        {/* Visual Device Frame Status Bar when Tablet or Mobile is selected */}
        {deviceMode !== 'pc' && (
          <div className="bg-stone-900 text-stone-300 text-[11px] font-mono px-4 py-1.5 flex items-center justify-between border-b border-stone-800 sticky top-0 z-40">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{deviceMode === 'tablet' ? 'Tablet Frame (768px)' : 'Mobile Frame (390px)'}</span>
            </span>
            <button
              onClick={() => setDeviceMode('pc')}
              className="text-orange-400 hover:text-orange-300 text-[10px] font-bold underline cursor-pointer"
            >
              Reset to Full PC View
            </button>
          </div>
        )}

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section: Elevated Centered Portrait (Tucked-in shirt clearly visible), Badges, Large MK Brand Logo */}
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

          {/* 7. Awards & Special Mentions: MATE ROV 2025 World Champion, URC 2024 (Utah), ARC, WRO Judge */}
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
      </div>

      {/* Project Architecture & Details Modal */}
      <ProjectModal
        project={selectedProject}
        theme={theme}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
