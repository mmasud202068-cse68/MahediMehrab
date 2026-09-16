import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Moon,
  Sun,
  Eye,
  Monitor,
  Tablet,
  Smartphone,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Award,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Cpu,
  HeartHandshake,
  Mail,
  User,
  Clock,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { ThemeMode, DeviceMode } from '../types';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { LiveWatch } from './LiveWatch';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  deviceMode: DeviceMode;
  setDeviceMode: (mode: DeviceMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  setTheme,
  deviceMode,
  setDeviceMode
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navProfilePic = '/assets/images/Profile.jpeg';

  // Reliable smooth scroll function that handles iframe offsets
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'expertise',
        'experience',
        'projects',
        'awards',
        'education',
        'extracurricular',
        'contact'
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // ALL navigation items are consolidated into the Menu button
  // Note: "Sponsors" is deliberately excluded from the menu button as requested
  const navItems = [
    { label: 'About Me', id: 'about', icon: User, desc: 'Biography, mission & background' },
    { label: 'Expertise', id: 'expertise', icon: Cpu, desc: 'Robotics, software & tech stack' },
    { label: 'Experience', id: 'experience', icon: Briefcase, desc: 'UIU Mariner CFO & Mars Rover' },
    { label: 'Projects', id: 'projects', icon: FolderGit2, desc: 'Yggdrasil Rover, TalkSmart & Systems' },
    { label: 'Awards', id: 'awards', icon: Award, desc: 'MATE ROV 2025 & URC World Top 5' },
    { label: 'Education', id: 'education', icon: GraduationCap, desc: 'B.Sc in CSE at UIU, HSC & SSC' },
    { label: 'Activities', id: 'extracurricular', icon: HeartHandshake, desc: 'WRO Judge, mentoring & touring' },
    { label: 'Contact', id: 'contact', icon: Mail, desc: 'Direct collaboration & verified links' }
  ];

  // 1-Button Theme Switcher (cycles Light -> Dark -> Eye-Protect -> Light)
  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('eye-protect');
    else setTheme('light');
  };

  // 1-Button Device Switcher (cycles PC -> Tablet -> Mobile -> PC)
  const cycleDeviceMode = () => {
    if (deviceMode === 'pc') setDeviceMode('tablet');
    else if (deviceMode === 'tablet') setDeviceMode('mobile');
    else setDeviceMode('pc');
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Pill with MK Logo & Profile Thumbnail */}
        <motion.button
          onClick={(e) => scrollToSection(e, 'hero')}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          className={`flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:py-2 rounded-2xl border backdrop-blur-xl shadow-lg cursor-pointer btn-popup transition-all ${
            theme === 'dark'
              ? 'bg-slate-900/90 border-slate-700/80 text-white shadow-black/40 hover:border-orange-500/60'
              : theme === 'eye-protect'
              ? 'bg-[#fcf7ee]/95 border-amber-300 text-stone-900 shadow-amber-900/10 hover:border-amber-500'
              : 'bg-white/95 border-orange-200 text-stone-900 shadow-orange-100/50 hover:border-orange-400'
          }`}
        >
          {/* Official MK Emblem */}
          <BrandLogo size="sm" withGlow={true} className="flex-shrink-0" />

          {/* Profile Avatar with Tucked-in Formal Preview */}
          <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-orange-500/50 shadow-sm flex-shrink-0">
            <img
              src={navProfilePic}
              alt="Md Mehrab Hossain Khan"
              className="w-full h-full object-cover object-[center_35%]"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-1.5 ring-stone-950" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-extrabold text-xs sm:text-sm tracking-tight leading-none text-stone-950 dark:text-white">
              Mehrab Khan
            </span>
            <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 tracking-wider uppercase mt-0.5 font-bold">
              Robotics • CFO
            </span>
          </div>
        </motion.button>

        {/* Right Controls: Unified Theme Button, Unified Device Button, Let's Talk CTA, Unified Menu Button */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Live Watch Pill (Compact) */}
          <div className="hidden md:block">
            <LiveWatch theme={theme} compact={true} />
          </div>

          {/* ================================================================= */}
          {/* 1. THREE THEMES IN ONE COMPACT BUTTON (As explicitly requested)    */}
          {/* ================================================================= */}
          <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.94 }}
            onClick={cycleTheme}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl border backdrop-blur-xl shadow-md cursor-pointer transition-all btn-popup ${
              theme === 'dark'
                ? 'bg-stone-900/90 border-orange-500/30 text-orange-400 hover:border-orange-400'
                : theme === 'eye-protect'
                ? 'bg-[#fcf7ee]/95 border-amber-300 text-amber-800 shadow-amber-900/10 hover:border-amber-500'
                : 'bg-white/95 border-orange-200 text-orange-600 shadow-orange-100/40 hover:border-orange-400'
            }`}
            title={`Active Theme: ${theme.toUpperCase()} • Click to switch (Light → Dark → Eye-Protect)`}
            aria-label="Toggle Theme Mode"
          >
            {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
            {theme === 'dark' && <Moon className="w-4 h-4 text-orange-400" />}
            {theme === 'eye-protect' && <Eye className="w-4 h-4 text-amber-700" />}
            
            <span className="hidden sm:inline text-[11px] font-mono font-bold capitalize">
              {theme === 'eye-protect' ? 'Reading' : theme}
            </span>
          </motion.button>

          {/* ================================================================= */}
          {/* 2. PC, MOBILE, TABLET IN ONE COMPACT BUTTON (Explicitly requested) */}
          {/* ================================================================= */}
          <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.94 }}
            onClick={cycleDeviceMode}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl border backdrop-blur-xl shadow-md cursor-pointer transition-all btn-popup ${
              theme === 'dark'
                ? 'bg-stone-900/90 border-slate-700 text-stone-200 hover:border-orange-500/60'
                : theme === 'eye-protect'
                ? 'bg-[#fcf7ee]/95 border-amber-300 text-stone-900 hover:border-amber-500'
                : 'bg-white/95 border-orange-200 text-stone-900 hover:border-orange-400 shadow-orange-100/40'
            }`}
            title={`Active Viewport: ${deviceMode.toUpperCase()} • Click to switch (PC → Tablet → Mobile)`}
            aria-label="Toggle Responsive Viewport Mode"
          >
            {deviceMode === 'pc' && <Monitor className="w-4 h-4 text-orange-500" />}
            {deviceMode === 'tablet' && <Tablet className="w-4 h-4 text-orange-500" />}
            {deviceMode === 'mobile' && <Smartphone className="w-4 h-4 text-orange-500" />}
            
            <span className="hidden sm:inline text-[11px] font-mono font-bold uppercase">
              {deviceMode}
            </span>
          </motion.button>

          {/* Direct Contact Button */}
          <motion.button
            onClick={(e) => scrollToSection(e, 'contact')}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-1 px-3.5 py-1.5 sm:py-2 rounded-2xl font-bold text-xs bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:to-amber-400 text-white shadow-md shadow-orange-500/25 border border-orange-400/40 cursor-pointer btn-popup"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>

          {/* ================================================================= */}
          {/* 3. UNIFIED MENU BUTTON (ALL nav items moved here, Sponsors removed)*/}
          {/* ================================================================= */}
          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-2 px-3.5 py-1.5 sm:py-2 rounded-2xl border backdrop-blur-xl shadow-lg cursor-pointer transition-all btn-popup ${
              menuOpen
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-400 shadow-orange-500/30'
                : theme === 'dark'
                ? 'bg-stone-900/95 border-orange-500/30 text-white hover:border-orange-400'
                : theme === 'eye-protect'
                ? 'bg-[#fcf7ee]/95 border-amber-300 text-stone-900 hover:border-amber-500'
                : 'bg-white/95 border-orange-200 text-stone-900 hover:border-orange-400 shadow-orange-100/50'
            }`}
            aria-label="Open Navigation Menu"
            title="Open Complete Navigation Menu"
          >
            {menuOpen ? (
              <>
                <X className="w-4 h-4 text-white" />
                <span className="font-extrabold text-xs tracking-wide">Close</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 text-orange-500" />
                <span className="font-extrabold text-xs tracking-wide">Menu</span>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 4. EXPANSIVE FULL MENU DRAWER / MODAL OVERLAY                       */}
      {/* =================================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Modal Menu Surface */}
            <motion.div
              initial={{ opacity: 0, y: -25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.97 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className={`fixed top-16 sm:top-20 inset-x-3 sm:inset-x-auto sm:right-6 sm:w-full sm:max-w-2xl z-50 pointer-events-auto rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-2xl ${
                theme === 'dark'
                  ? 'bg-stone-950/98 border-stone-800 text-white shadow-black/80'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb]/98 border-amber-300 text-stone-900 shadow-amber-900/20'
                  : 'bg-white/98 border-orange-200 text-stone-900 shadow-orange-200/40'
              }`}
            >
              <div className="p-5 sm:p-6 space-y-4 max-h-[82vh] overflow-y-auto">
                
                {/* Header with Avatar & Live Clock */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-orange-500/15 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-orange-500/60 shadow-md flex-shrink-0">
                      <img
                        src={navProfilePic}
                        alt="Md Mehrab Hossain Khan"
                        className="w-full h-full object-cover object-[center_35%]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                          Md Mehrab Hossain Khan
                        </h3>
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      <p className="text-xs font-mono text-orange-600 dark:text-orange-400 font-bold mt-0.5">
                        CFO at UIU Mariner • MATE ROV 2025 Champion
                      </p>
                    </div>
                  </div>

                  {/* Real-time Clock display inside menu */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs font-mono font-bold text-orange-700 dark:text-orange-300 self-start sm:self-auto">
                    <Clock className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                    <span>Dhaka Time:</span>
                    <LiveWatch theme={theme} compact={true} />
                  </div>
                </div>

                {/* Section Navigation Header */}
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span>Navigation Hub</span>
                  <span className="text-[10px] text-orange-600 dark:text-orange-400 font-semibold">
                    {navItems.length} Sections
                  </span>
                </div>

                {/* Navigation Items Grid (Sponsors omitted as requested) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={(e) => scrollToSection(e, item.id)}
                        whileHover={{ scale: 1.02, x: 2 }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex items-start gap-3 p-3 rounded-2xl transition-all text-left cursor-pointer border btn-popup ${
                          isActive
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-400 shadow-md shadow-orange-500/20 font-bold'
                            : theme === 'dark'
                            ? 'bg-stone-900/60 hover:bg-stone-900 border-stone-800/80 text-stone-200 hover:border-orange-500/40'
                            : theme === 'eye-protect'
                            ? 'bg-[#f5ede0]/70 hover:bg-[#f5ede0] border-amber-200 text-stone-900 hover:border-amber-400'
                            : 'bg-orange-50/50 hover:bg-orange-50 border-orange-100 text-stone-900 hover:border-orange-300'
                        }`}
                      >
                        <div
                          className={`p-2 rounded-xl flex-shrink-0 mt-0.5 ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-extrabold text-xs sm:text-sm tracking-tight leading-snug">
                            {item.label}
                          </div>
                          <div
                            className={`text-[11px] truncate mt-0.5 ${
                              isActive ? 'text-white/80' : 'opacity-65'
                            }`}
                          >
                            {item.desc}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Direct Social Media Links */}
                <div className="pt-3 border-t border-orange-500/15">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                      Direct Social Presence
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      Verified
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SOCIAL_LINKS.map((link) => (
                      <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center gap-1.5 p-2 rounded-xl text-xs font-bold border transition-colors btn-popup ${
                          theme === 'dark'
                            ? 'bg-stone-900 border-stone-800 text-stone-200 hover:border-orange-500/50'
                            : 'bg-white border-orange-200/80 text-stone-800 hover:border-orange-400 shadow-sm'
                        }`}
                      >
                        {getSocialIcon(link.iconName)}
                        <span>{link.platform}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
