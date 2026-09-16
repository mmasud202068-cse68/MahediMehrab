import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  MapPin,
  Compass,
  Cpu,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ChevronDown,
  Trophy,
  Globe2,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  Activity
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { ThemeMode } from '../types';
import confetti from 'canvas-confetti';
import { BrandLogo } from './BrandLogo';
import { PortraitModal } from './PortraitModal';
import { InteractiveSystemVisualizer } from './InteractiveSystemVisualizer';

interface HeroProps {
  theme: ThemeMode;
  onOpenTalkSmartDemo?: () => void;
}

// Fixed, Permanent Official Profile Portrait of Md Mehrab Hossain Khan
const OFFICIAL_PROFILE_IMAGE = '/assets/images/Profile.jpeg';

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [isPortraitModalOpen, setIsPortraitModalOpen] = useState(false);
  const [isVisualizerOpen, setIsVisualizerOpen] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2500);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
    <section
      id="hero"
      className="relative min-h-[95vh] pt-28 sm:pt-32 pb-16 flex flex-col items-center justify-center tech-grid-pattern overflow-hidden"
    >
      {/* Dynamic Background Atmospheric Glows with Deep Oceanic Aurora Tint */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-teal-500/15 via-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-4 sm:left-12 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-12 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* ================================================================= */}
        {/* 1. TOP CREDENTIAL EYEBROW                                         */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-4 bg-teal-500/10 border border-teal-500/25 text-teal-400 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
          <span>Computer Science & Engineering • United International University</span>
        </motion.div>

        {/* ================================================================= */}
        {/* 2. GRAND NAME DISPLAY & PRIMARY ROLES                             */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="space-y-3 mb-6"
        >
          <div className="flex items-center justify-center gap-3">
            <BrandLogo size="md" withGlow={true} className="hidden sm:inline-flex flex-shrink-0" />
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-stone-900 dark:text-white">
              Md Mehrab Hossain Khan
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-mono">
            <span className="px-3 py-0.5 rounded-lg bg-orange-500/15 text-orange-600 dark:text-orange-400 font-bold border border-orange-500/30">
              CFO & Logistics Lead
            </span>
            <span className="opacity-50 text-orange-500">•</span>
            <span className="px-3 py-0.5 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 font-bold border border-amber-500/30">
              Robotics & Autonomous Systems
            </span>
            <span className="opacity-50 text-orange-500">•</span>
            <span className="px-3 py-0.5 rounded-lg bg-orange-400/15 text-orange-700 dark:text-orange-300 font-bold border border-orange-400/30">
              Cinematographer
            </span>
          </div>
        </motion.div>

        {/* ================================================================= */}
        {/* 3. MAJESTIC CENTERPIECE PORTRAIT & PROMINENT BRAND LOGO           */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative my-4 sm:my-6 flex flex-col items-center group"
        >
          {/* Pulsing Ethereal Atmospheric Aura (Light Orange Warmth) */}
          <div className="absolute -inset-4 bg-gradient-to-b from-orange-500/30 via-amber-500/25 to-orange-400/30 rounded-[40px] blur-2xl opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-pulse pointer-events-none" />

          {/* Outer Orbital Rotating Hairline Ring */}
          <div className="absolute -inset-2 rounded-[38px] border border-orange-400/40 dark:border-orange-400/50 pointer-events-none" />

          {/* Executive Portrait Frame - Beautifully Centered with Tucked-in Shirt Clearly Visible */}
          {/* INTERACTIVE MOUSE HOVER ENLARGE EFFECT: Scales up noticeably on mouse hover */}
          <motion.div
            whileHover={{ scale: 1.22, y: -12 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            onClick={() => setIsPortraitModalOpen(true)}
            className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-[32px] sm:rounded-[36px] p-1.5 sm:p-2 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-500 shadow-2xl hover:shadow-[0_25px_60px_rgba(249,115,22,0.5)] glow-orange cursor-pointer z-30 transition-shadow duration-500 group/pic"
            title="Hover to Enlarge • Click for Fullscreen HD View"
          >
            <div className="w-full h-full rounded-[26px] sm:rounded-[30px] overflow-hidden border-2 sm:border-3 border-stone-950 bg-stone-950 relative shadow-inner">
              <img
                src={OFFICIAL_PROFILE_IMAGE}
                alt="Md Mehrab Hossain Khan - Executive Portrait with Tucked-in Shirt"
                className="w-full h-full object-cover object-[center_35%] select-none pointer-events-none transform scale-100 group-hover/pic:scale-108 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                loading="eager"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 pointer-events-none" />
              
              {/* Floating Magnified Indicator on Mouse Hover */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-orange-300 text-[10px] font-mono font-bold flex items-center gap-1 border border-orange-400/40 opacity-0 group-hover/pic:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
                <Maximize2 className="w-3 h-3 text-orange-400 animate-pulse" />
                <span>Enlarged • Click for HD</span>
              </div>

              {/* Elegant Tucked-in Profile Caption Tag */}
              <div className="absolute bottom-2.5 sm:bottom-3 inset-x-2.5 sm:inset-x-3 py-1.5 px-3 rounded-2xl bg-black/65 backdrop-blur-md border border-white/20 flex items-center justify-between text-white shadow-lg pointer-events-none">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-tight truncate">Md Mehrab Hossain Khan</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-orange-300 font-bold uppercase tracking-wider flex-shrink-0 pl-1">
                  UIU Mariner CFO
                </span>
              </div>
            </div>
          </motion.div>

          {/* ============================================================= */}
          {/* LARGE MK BRAND LOGO (Positioned Prominently Under Main Profile) */}
          {/* ============================================================= */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              confetti({
                particleCount: 50,
                spread: 70,
                origin: { y: 0.55 },
                colors: ['#f97316', '#fb923c', '#f59e0b', '#fdba74', '#ffffff']
              });
            }}
            className="mt-6 flex flex-col items-center cursor-pointer group/logo select-none"
            title="Official MK Engineering Insignia • Click to Celebrate"
          >
            {/* The Large MK Vector Insignia Display */}
            <div className="relative p-2.5 rounded-3xl border-2 border-orange-500/40 bg-stone-950/85 shadow-2xl backdrop-blur-xl group-hover/logo:border-orange-400/80 transition-all shadow-orange-950/40">
              {/* Radial ambient glow behind emblem */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/35 via-amber-500/30 to-orange-400/35 rounded-3xl blur-xl opacity-70 group-hover/logo:opacity-100 transition-opacity" />
              
              <BrandLogo size={96} withGlow={false} animated={true} />
            </div>

            {/* HIGH-IMPACT HIGHLIGHTED BRAND TAG & SUBTITLE (Explicitly Requested) */}
            <div className="mt-3.5 flex flex-col items-center text-center max-w-lg px-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/25 via-amber-500/30 to-orange-500/25 border-2 border-orange-400 text-orange-200 text-xs sm:text-sm font-mono font-black tracking-widest uppercase shadow-[0_0_28px_rgba(249,115,22,0.45)] backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
                <span className="font-black tracking-widest text-orange-100 drop-shadow-[0_1px_8px_rgba(249,115,22,0.6)]">
                  MK • OFFICIAL BRAND
                </span>
                <ShieldCheck className="w-4 h-4 text-orange-400" />
              </motion.div>
              
              <div className="mt-2.5 px-4 py-1.5 rounded-xl bg-orange-100/90 dark:bg-orange-950/80 border border-orange-400/40 text-orange-950 dark:text-orange-200 text-xs sm:text-sm font-mono font-bold tracking-wide shadow-md shadow-orange-950/20">
                Autonomous Robotics • Underwater Systems • Computer Science
              </div>
            </div>
          </motion.div>

          {/* Availability Status Pill directly attached below */}
          <div className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide bg-stone-100 dark:bg-stone-950/95 border border-orange-400/40 text-stone-900 dark:text-orange-300 shadow-xl backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>MATE ROV WORLD FINALS 2025 Champion • Available for Leadership</span>
          </div>
        </motion.div>

        {/* ================================================================= */}
        {/* 4. BIO STATEMENT & CORE HIGHLIGHT CHIPS                           */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="space-y-4 max-w-2xl mt-2"
        >
          <p className="text-sm sm:text-base md:text-lg opacity-85 leading-relaxed">
            Turning bold ideas into engineered reality. Specializing in autonomous underwater robotics (ROV), Mars exploration rovers, full-stack software development, and documentary cinematography.
          </p>

          {/* Quick Location & Identity Chips */}
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Jatrabari, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
              <Compass className="w-3.5 h-3.5 text-amber-500" />
              <span>Motorcycle Road Explorer</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300">
              <Cpu className="w-3.5 h-3.5 text-orange-400" />
              <span>CFO @ UIU Mariner & URO</span>
            </div>
          </div>
        </motion.div>

        {/* ================================================================= */}
        {/* 5. POP-UP ACTION BUTTONS (Tactile Micro-Physics)                  */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Pop-Up Button: Explore Projects */}
          <motion.button
            id="hero-explore-btn"
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:to-amber-400 text-white shadow-xl shadow-orange-500/30 flex items-center gap-2 cursor-pointer btn-popup"
          >
            <span>Explore Engineered Projects</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Interactive System & Robotics Visualizer Button (As Explicitly Requested) */}
          <motion.button
            id="hero-visualizer-btn"
            onClick={() => setIsVisualizerOpen(true)}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-white shadow-xl shadow-amber-500/25 flex items-center gap-2 cursor-pointer btn-popup border border-amber-300/40"
            title="Open Interactive System Telemetry Visualizer"
          >
            <Activity className="w-4 h-4 text-white animate-pulse" />
            <span>Interactive System Visualizer</span>
          </motion.button>

          {/* Pop-Up Button: Copy Email with Confetti */}
          <motion.button
            id="hero-copy-email-btn"
            onClick={() => handleCopyEmail(PERSONAL_INFO.emails[0])}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.94 }}
            className={`px-5 py-3.5 rounded-2xl font-mono text-xs font-semibold border flex items-center gap-2 cursor-pointer btn-popup ${
              theme === 'dark'
                ? 'bg-stone-900/90 border-orange-500/30 text-stone-200 hover:border-orange-400/80 shadow-lg shadow-orange-950/20'
                : theme === 'eye-protect'
                ? 'bg-[#fcf7ee] border-amber-300 text-stone-900 hover:border-amber-500'
                : 'bg-white border-orange-200 text-stone-800 hover:border-orange-400 shadow-sm'
            }`}
            title="Click to copy primary email"
          >
            {copiedEmail === PERSONAL_INFO.emails[0] ? (
              <>
                <Check className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-bold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 opacity-70 text-orange-400" />
                <span>{PERSONAL_INFO.emails[0]}</span>
              </>
            )}
          </motion.button>

          {/* Pop-Up Button: Jump to About */}
          <motion.button
            id="hero-jump-about-btn"
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="px-4 py-3.5 rounded-2xl font-bold text-xs border border-orange-500/30 hover:border-orange-400/70 bg-orange-500/5 hover:bg-orange-500/10 flex items-center gap-1.5 cursor-pointer btn-popup text-orange-300"
          >
            <span>Read About Mehrab</span>
            <ChevronDown className="w-4 h-4 text-orange-400" />
          </motion.button>
        </motion.div>

        {/* Animated Social Icon Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-5 flex items-center gap-2.5"
        >
          <span className="text-xs font-mono opacity-60 mr-1">Connect:</span>
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.22, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 hover:border-orange-400/80 hover:bg-orange-400/20 transition-all text-sm btn-popup text-orange-400"
              title={link.platform}
            >
              {getSocialIcon(link.iconName)}
            </motion.a>
          ))}
        </motion.div>

        {/* ================================================================= */}
        {/* 6. WORLD CHAMPIONSHIP HONORS & RANKINGS                           */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 w-full max-w-4xl"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold mb-3.5 flex items-center justify-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>International Championship Honors & Rankings</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {/* Honor 1: MATE ROV World Champion */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer btn-popup card-specular ${
                theme === 'dark'
                  ? 'bg-stone-900/90 border-amber-500/30 hover:border-orange-400 shadow-lg shadow-orange-950/20'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb] border-amber-300 hover:border-amber-500 text-stone-900'
                  : 'bg-white border-orange-200 hover:border-orange-400 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400">
                  <Trophy className="w-4 h-4" />
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-stone-950">
                  World Champion
                </span>
              </div>
              <div className="font-bold text-xs">MATE ROV WORLD FINALS 2025</div>
              <div className="text-[11px] text-amber-400 font-mono font-semibold">1st Worldwide (Tech Doc)</div>
              <p className="text-[11px] opacity-75 mt-1 leading-snug">5th in World • Pioneer Division (Kingsport, TN, USA)</p>
            </motion.div>

            {/* Honor 2: URC 2024 Asia #1 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer btn-popup card-specular ${
                theme === 'dark'
                  ? 'bg-stone-900/90 border-orange-500/30 hover:border-orange-400 shadow-lg shadow-orange-950/20'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb] border-amber-300 hover:border-amber-500 text-stone-900'
                  : 'bg-white border-orange-200 hover:border-orange-400 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="p-1.5 rounded-lg bg-orange-500/15 text-orange-400">
                  <Award className="w-4 h-4" />
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-500 text-stone-950">
                  1st in Asia
                </span>
              </div>
              <div className="font-bold text-xs">University Rover Challenge</div>
              <div className="text-[11px] text-orange-400 font-mono font-semibold">5th Worldwide (Utah, USA)</div>
              <p className="text-[11px] opacity-75 mt-1 leading-snug">Top-ranked Asian Rover team at Mars Desert Research Station</p>
            </motion.div>

            {/* Honor 3: ARC 2023 Bronze */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer btn-popup card-specular ${
                theme === 'dark'
                  ? 'bg-stone-900/90 border-orange-500/30 hover:border-orange-400 shadow-lg shadow-orange-950/20'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb] border-amber-300 hover:border-amber-500 text-stone-900'
                  : 'bg-white border-orange-200 hover:border-orange-400 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400">
                  <Globe2 className="w-4 h-4" />
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-stone-950">
                  3rd in World
                </span>
              </div>
              <div className="font-bold text-xs">Anatolian Rover Challenge</div>
              <div className="text-[11px] text-amber-400 font-mono font-semibold">Bronze Medal (Turkey)</div>
              <p className="text-[11px] opacity-75 mt-1 leading-snug">International podium finish in extreme terrain traversal</p>
            </motion.div>

            {/* Honor 4: UIU Project Show Champion */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer btn-popup card-specular ${
                theme === 'dark'
                  ? 'bg-stone-900/90 border-orange-500/30 hover:border-orange-400 shadow-lg shadow-orange-950/20'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb] border-amber-300 hover:border-amber-500 text-stone-900'
                  : 'bg-white border-orange-200 hover:border-orange-400 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="p-1.5 rounded-lg bg-orange-400/15 text-orange-300">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-400 text-stone-950">
                  Champion
                </span>
              </div>
              <div className="font-bold text-xs">UIU Project Showcase</div>
              <div className="text-[11px] text-orange-300 font-mono font-semibold">1st Place • CSE Dept</div>
              <p className="text-[11px] opacity-75 mt-1 leading-snug">Awarded Best Undergraduate Engineering Capstone</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Highlight Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          {PERSONAL_INFO.stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -2 }}
              className="p-4 rounded-2xl bg-slate-500/5 border border-slate-500/10 backdrop-blur-sm text-center btn-popup cursor-default card-specular"
            >
              <div className="text-2xl sm:text-3xl font-black font-mono bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-[11px] font-medium opacity-75 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Fullscreen HD Portrait Modal with Zoom Controls */}
      <PortraitModal
        isOpen={isPortraitModalOpen}
        onClose={() => setIsPortraitModalOpen(false)}
        theme={theme}
      />

      {/* Interactive System & Robotics Telemetry Visualizer HUD */}
      <InteractiveSystemVisualizer
        isOpen={isVisualizerOpen}
        onClose={() => setIsVisualizerOpen(false)}
        theme={theme}
      />
    </section>
  );
};
