import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Moon,
  Sun,
  Eye,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Cpu,
  HeartHandshake,
  Mail,
  User,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { LiveWatch } from './LiveWatch';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navProfilePic = '/assets/images/Profile.jpeg';

  // Reliable smooth scroll function that handles iframe offsets
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'hero',
        'about',
        'expertise',
        'experience',
        'projects',
        'awards',
        'education',
        'extracurricular',
        'sponsors',
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

  const navItems = [
    { label: 'About', id: 'about', icon: User },
    { label: 'Expertise', id: 'expertise', icon: Cpu },
    { label: 'Experience', id: 'experience', icon: Briefcase },
    { label: 'Projects', id: 'projects', icon: FolderGit2 },
    { label: 'Awards', id: 'awards', icon: Award },
    { label: 'Education', id: 'education', icon: GraduationCap },
    { label: 'Activities', id: 'extracurricular', icon: HeartHandshake },
    { label: 'Sponsors', id: 'sponsors', icon: Sparkles },
    { label: 'Contact', id: 'contact', icon: Mail }
  ];

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
        
        {/* Brand Pill with MK Logo & Avatar */}
        <motion.button
          onClick={(e) => scrollToSection(e, 'hero')}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:py-2 rounded-2xl border backdrop-blur-xl shadow-lg cursor-pointer btn-popup ${
            theme === 'dark'
              ? 'bg-slate-900/90 border-slate-700/80 text-white shadow-black/40 hover:border-teal-500/60'
              : theme === 'eye-protect'
              ? 'bg-[#fcf7ee]/95 border-amber-300 text-stone-900 shadow-amber-900/10 hover:border-amber-500'
              : 'bg-white/95 border-orange-200 text-stone-900 shadow-orange-100/50 hover:border-orange-400'
          }`}
        >
          {/* Official MK Emblem to the left */}
          <BrandLogo size="sm" withGlow={true} className="flex-shrink-0" />

          {/* Fixed Portrait Avatar */}
          <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-orange-500/50 shadow-sm flex-shrink-0">
            <img
              src={navProfilePic}
              alt="Md. Mehrab Hossain Khan"
              className="w-full h-full object-cover object-[center_20%]"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-orange-400 ring-2 ring-stone-950" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-extrabold text-xs sm:text-sm tracking-tight leading-none">
              Mehrab Khan
            </span>
            <span className="text-[10px] font-mono opacity-65 tracking-wider uppercase mt-0.5">
              Robotics • CFO
            </span>
          </div>
        </motion.button>

        {/* Floating Desktop Navigation Dock */}
        <nav
          className={`hidden xl:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-2xl shadow-xl transition-all ${
            theme === 'dark'
              ? 'bg-stone-950/85 border-orange-500/20 text-stone-300 shadow-black/50'
              : theme === 'eye-protect'
              ? 'bg-[#f5ede0]/90 border-amber-300/70 text-stone-800 shadow-amber-900/10'
              : 'bg-white/90 border-orange-200/90 text-stone-700 shadow-orange-100/60'
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={(e) => scrollToSection(e, item.id)}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.94 }}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer btn-popup ${
                  isActive
                    ? 'text-white font-bold'
                    : 'opacity-70 hover:opacity-100 hover:bg-stone-500/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-md shadow-orange-500/30"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </span>
              </motion.button>
            );
          })}
        </nav>

        {/* Right Controls: Live Watch, 3-Theme Segmented Bar, Mobile Drawer Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live Watch Pill */}
          <div className="hidden lg:block">
            <LiveWatch theme={theme} compact={true} />
          </div>

          {/* 3-Theme Segmented Switcher Capsule */}
          <div
            className={`flex items-center p-1 rounded-2xl border backdrop-blur-xl shadow-lg ${
              theme === 'dark'
                ? 'bg-stone-900/90 border-orange-500/25 shadow-black/40'
                : theme === 'eye-protect'
                ? 'bg-[#fcf7ee]/95 border-amber-300 shadow-amber-900/10'
                : 'bg-white/90 border-orange-200 shadow-orange-100/40'
            }`}
          >
            <motion.button
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme('dark')}
              className={`p-2 rounded-xl text-xs transition-all cursor-pointer btn-popup ${
                theme === 'dark'
                  ? 'bg-stone-800 text-orange-400 shadow-md ring-1 ring-orange-500/40'
                  : 'opacity-50 hover:opacity-100 text-stone-400'
              }`}
              title="Dark Mode"
              aria-label="Dark Mode"
            >
              <Moon className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme('light')}
              className={`p-2 rounded-xl text-xs transition-all cursor-pointer btn-popup ${
                theme === 'light'
                  ? 'bg-stone-100 text-orange-500 shadow-md ring-1 ring-orange-400/50'
                  : 'opacity-50 hover:opacity-100 text-stone-500'
              }`}
              title="Light Mode"
              aria-label="Light Mode"
            >
              <Sun className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme('eye-protect')}
              className={`p-2 rounded-xl text-xs transition-all cursor-pointer btn-popup ${
                theme === 'eye-protect'
                  ? 'bg-amber-200 text-amber-900 shadow-md ring-1 ring-amber-500/50'
                  : 'opacity-50 hover:opacity-100 text-amber-700'
              }`}
              title="Eye Protect Mode (Warm Sepia/Reading)"
              aria-label="Eye Protect Mode"
            >
              <Eye className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Direct Contact Button (Desktop) */}
          <motion.button
            onClick={(e) => scrollToSection(e, 'contact')}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-2xl font-bold text-xs bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:to-amber-400 text-white shadow-lg shadow-orange-500/25 border border-orange-400/40 cursor-pointer btn-popup"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>

          {/* Mobile Hamburger Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-2.5 rounded-2xl border backdrop-blur-xl shadow-lg cursor-pointer btn-popup ${
              theme === 'dark'
                ? 'bg-slate-900/90 border-slate-700 text-white'
                : theme === 'eye-protect'
                ? 'bg-[#fcf7ee]/95 border-amber-300 text-stone-900'
                : 'bg-white/90 border-slate-200 text-slate-900'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Full Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={`xl:hidden pointer-events-auto mt-3 rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-2xl ${
              theme === 'dark'
                ? 'bg-slate-950/95 border-slate-800 text-white shadow-black/80'
                : theme === 'eye-protect'
                ? 'bg-[#fbf5eb]/98 border-amber-300 text-stone-900 shadow-amber-900/20'
                : 'bg-white/98 border-slate-200 text-slate-900 shadow-slate-300/60'
            }`}
          >
            <div className="p-5 space-y-4 max-h-[85vh] overflow-y-auto">
              {/* Mobile Live Watch view */}
              <div className="pb-3 border-b border-orange-500/15">
                <div className="text-[11px] font-mono font-bold uppercase opacity-60 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-400" />
                  <span>Real-Time Dhaka Clock</span>
                </div>
                <LiveWatch theme={theme} compact={false} />
              </div>

              {/* Navigation Grid Buttons with Pop-Up Physics */}
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={(e) => scrollToSection(e, item.id)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2.5 p-3 rounded-2xl text-xs font-bold transition-all text-left cursor-pointer btn-popup ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                          : 'bg-stone-500/10 hover:bg-stone-500/15'
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Social Media Links in Mobile Menu */}
              <div className="pt-3 border-t border-orange-500/15">
                <div className="text-[11px] font-mono font-bold uppercase opacity-60 mb-2">
                  Connect Directly
                </div>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((link) => (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs bg-stone-500/10 hover:bg-orange-500/20 font-semibold transition-colors btn-popup"
                    >
                      {getSocialIcon(link.iconName)}
                      <span>{link.platform}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
