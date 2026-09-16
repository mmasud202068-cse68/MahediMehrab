import React from 'react';
import { motion } from 'motion/react';
import { ThemeMode } from '../types';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SponsorsMarqueeProps {
  theme: ThemeMode;
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export interface SponsorItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  badge: string;
  logoUrl: string;
}

export const SPONSORS_LIST: SponsorItem[] = [
  {
    id: 'united-group',
    name: 'United Group',
    category: 'Principal Corporate Partner',
    tagline: 'Empowering Next-Gen Technological Ventures',
    badge: 'Enterprise Partner',
    logoUrl: '/assets/sponsors/united-group.svg'
  },
  {
    id: 'uiu',
    name: 'United International University',
    category: 'Academic Host & Research Patron',
    tagline: 'Academic Excellence & Robotics Innovation Lab',
    badge: 'Institution Host',
    logoUrl: '/assets/sponsors/uiu.svg'
  },
  {
    id: 'solidworks',
    name: 'SolidWorks (Dassault Systèmes)',
    category: 'Dassault Systèmes 3D CAD',
    tagline: 'Advanced Marine & Mechanical Engineering Suite',
    badge: 'CAD & Simulation',
    logoUrl: '/assets/sponsors/solidworks.svg'
  },
  {
    id: 'yamaha',
    name: 'Yamaha',
    category: 'Precision Motors & Mobility',
    tagline: 'Revs Your Heart • Marine & Robotic Actuation',
    badge: 'Power & Engineering',
    logoUrl: '/assets/sponsors/yamaha.svg'
  },
  {
    id: 'aci-motors',
    name: 'ACI Motors',
    category: 'Automotive & Community Partner',
    tagline: 'Bringing Motion to Life • Social Mobility',
    badge: 'Community Partner',
    logoUrl: '/assets/sponsors/aci-motors.svg'
  },
  {
    id: 'matrix-jerseys',
    name: 'Matrix Jerseys',
    category: 'Official Apparel & Identity',
    tagline: 'High-Performance Championship Team Gear',
    badge: 'Official Kit Sponsor',
    logoUrl: '/assets/sponsors/matrix-jerseys.svg'
  }
];

export const SponsorsMarquee: React.FC<SponsorsMarqueeProps> = ({
  theme,
  id = 'sponsors-section',
  title = 'Official Championship & Innovation Sponsors',
  subtitle = 'Powering MATE ROV WORLD FINALS 2025 & Autonomous Robotics Excellence',
  className = ''
}) => {
  // Triple the list for seamless continuous infinite marquee scrolling
  const marqueeList = [...SPONSORS_LIST, ...SPONSORS_LIST, ...SPONSORS_LIST];

  const handleSponsorClick = (sponsorName: string) => {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#f97316', '#fb923c', '#f59e0b', '#fdba74', '#ea580c']
    });
  };

  return (
    <section
      id={id}
      className={`py-10 sm:py-14 relative overflow-hidden border-y border-orange-500/15 bg-gradient-to-b from-orange-500/[0.03] via-amber-500/[0.04] to-transparent ${className}`}
    >
      {/* Decorative Warm Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-gradient-to-r from-orange-500/10 via-amber-500/15 to-orange-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 shadow-sm">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-orange-600 dark:text-orange-400 font-mono">
                {title}
              </h3>
              <p className="text-xs text-stone-700 dark:text-stone-300 font-mono mt-0.5 font-medium">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span>Global Strategic Supporters</span>
          </div>
        </div>
      </div>

      {/* Infinite Seamless Right-to-Left Marquee Track */}
      <div className="relative w-full overflow-hidden py-3 mask-gradient-x">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-[var(--bg-primary)] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-[var(--bg-primary)] to-transparent" />

        {/* Marquee Inner moving right to left */}
        <div className="animate-marquee-rtl flex items-center gap-4 sm:gap-6 cursor-grab active:cursor-grabbing">
          {marqueeList.map((sponsor, index) => (
            <motion.div
              key={`${sponsor.id}-${index}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleSponsorClick(sponsor.name)}
              className={`flex-shrink-0 group flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-4.5 rounded-2xl border transition-all duration-300 select-none shadow-md ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#1c140e]/95 via-[#150f0a]/95 to-[#0f0a07]/95 border-orange-500/30 hover:border-orange-400/80 shadow-orange-950/40 hover:shadow-orange-500/20'
                  : theme === 'eye-protect'
                  ? 'bg-[#fffbf2] border-amber-300 hover:border-amber-500 shadow-amber-900/10'
                  : 'bg-white border-orange-200 hover:border-orange-400 shadow-orange-100 hover:shadow-orange-200/50'
              }`}
            >
              {/* Sponsor Logo Platter with Authentic Logo */}
              <div className="w-16 h-12 rounded-xl flex items-center justify-center p-1.5 bg-white border border-orange-200 dark:border-orange-500/30 group-hover:border-orange-400 transition-colors shadow-sm flex-shrink-0">
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="w-full h-full object-contain filter"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Sponsor Information - Pure High Contrast Light & Dark Text */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-stone-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-sans">
                    {sponsor.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-500/30">
                    {sponsor.badge}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                  {sponsor.tagline}
                </span>
                <span className="text-[11px] font-mono text-orange-600 dark:text-orange-400/80 font-medium">
                  {sponsor.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
