import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  ShieldCheck,
  Phone,
  Calendar,
  Sparkles,
  Award,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { SponsorsMarquee } from './SponsorsMarquee';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const discussionAreas = [
    { label: "MATE ROV WORLD FINALS 2025", desc: "Subsea Robotics & Engineering Technical Dossier" },
    { label: "Corporate Sponsorship & CFO", desc: "Fiscal Governance, Budgeting & Patron Partnerships" },
    { label: "Mars Rover & Robotics R&D", desc: "Planetary Rovers, Autonomous Systems & Hardware" },
    { label: "Cinematography & Media", desc: "Documentary Video Production, Drone & Event Visuals" }
  ];

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#f97316', '#fb923c', '#f59e0b', '#fdba74', '#ea580c']
    });
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2500);
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-blue-500" />;
      case 'github':
        return <Github className="w-5 h-5 text-stone-900 dark:text-stone-200" />;
      case 'facebook':
        return <Facebook className="w-5 h-5 text-blue-600" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-pink-500" />;
      default:
        return <Mail className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative tech-grid-pattern border-t border-orange-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 bg-orange-500/15 text-orange-700 dark:text-orange-400 border border-orange-500/30 shadow-sm font-mono">
            <Mail className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>Connect & Strategic Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-white">
            Let's Collaborate & Innovate
          </h2>
          <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 mt-3 leading-relaxed font-medium">
            Ready to collaborate on subsea robotics, Mars exploration systems, corporate sponsorship, or professional cinematography? Reach out directly.
          </p>
        </div>

        {/* Connect Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* 1. Verified Direct Inquiries & Email Card */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border card-specular flex flex-col justify-between ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#1c140e]/95 to-[#120c08]/95 border-orange-500/30 shadow-xl shadow-orange-950/30'
                : theme === 'eye-protect'
                ? 'bg-[#fffaf2] border-amber-300 shadow-md shadow-amber-900/5'
                : 'bg-white border-orange-200 shadow-lg shadow-orange-100/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-2xl bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border border-orange-300 dark:border-orange-500/30">
                  Direct Inquiries
                </span>
              </div>

              <h3 className="font-extrabold text-lg sm:text-xl text-stone-900 dark:text-white mb-2">
                Official Email Channels
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 font-medium">
                Click any address to copy instantly or launch your mail client.
              </p>

              <div className="space-y-3">
                {PERSONAL_INFO.emails.map((email, idx) => (
                  <div
                    key={email}
                    className="p-3.5 rounded-2xl bg-orange-500/5 dark:bg-stone-900/60 border border-orange-200 dark:border-stone-700/80 flex items-center justify-between gap-2 transition-all hover:border-orange-400"
                  >
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-orange-700 dark:text-orange-400 font-bold">
                        {idx === 0 ? 'Primary Academic / Research' : 'Personal & Leadership'}
                      </div>
                      <a
                        href={`mailto:${email}`}
                        className="text-xs sm:text-sm font-mono truncate font-bold text-stone-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors block mt-0.5"
                      >
                        {email}
                      </a>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleCopyEmail(email)}
                      className="p-2.5 rounded-xl bg-white dark:bg-stone-800 border border-orange-200 dark:border-stone-700 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white transition-all flex-shrink-0 cursor-pointer shadow-sm btn-popup"
                      title="Copy to clipboard"
                    >
                      {copiedEmail === email ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-orange-500/15 flex items-center justify-between text-xs text-stone-700 dark:text-stone-300">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>Jatrabari, Dhaka, Bangladesh</span>
              </div>
              <span className="font-mono text-orange-600 dark:text-orange-400 font-bold">UTC+6 (BST)</span>
            </div>
          </div>

          {/* 2. Key Discussion Areas & Direct Collaboration */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border card-specular flex flex-col justify-between ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#1c140e]/95 to-[#120c08]/95 border-orange-500/30 shadow-xl shadow-orange-950/30'
                : theme === 'eye-protect'
                ? 'bg-[#fffaf2] border-amber-300 shadow-md shadow-amber-900/5'
                : 'bg-white border-orange-200 shadow-lg shadow-orange-100/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-500/30">
                  Active Collaboration
                </span>
              </div>

              <h3 className="font-extrabold text-lg sm:text-xl text-stone-900 dark:text-white mb-2">
                Priority Collaboration Topics
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 font-medium">
                Core areas available for consultation, team recruitment, or sponsorship.
              </p>

              <div className="space-y-2.5">
                {discussionAreas.map((area) => (
                  <div
                    key={area.label}
                    className="p-3 rounded-2xl bg-orange-500/5 dark:bg-stone-900/60 border border-orange-200 dark:border-stone-700/80 transition-all hover:border-orange-400"
                  >
                    <div className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white flex items-center justify-between">
                      <span>{area.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-orange-500 opacity-75" />
                    </div>
                    <div className="text-[11px] text-stone-600 dark:text-stone-400 font-mono mt-0.5">
                      {area.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-orange-500/15">
              <a
                href={`mailto:${PERSONAL_INFO.emails[0]}?subject=Inquiry: Collaboration & Innovation with Mehrab Khan`}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all btn-popup"
              >
                <Mail className="w-4 h-4" />
                <span>Compose Email Inquiry</span>
              </a>
            </div>
          </div>

          {/* 3. Connect Across Social & Professional Networks */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border card-specular flex flex-col justify-between ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#1c140e]/95 to-[#120c08]/95 border-orange-500/30 shadow-xl shadow-orange-950/30'
                : theme === 'eye-protect'
                ? 'bg-[#fffaf2] border-amber-300 shadow-md shadow-amber-900/5'
                : 'bg-white border-orange-200 shadow-lg shadow-orange-100/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-2xl bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border border-orange-300 dark:border-orange-500/30">
                  Verified Profiles
                </span>
              </div>

              <h3 className="font-extrabold text-lg sm:text-xl text-stone-900 dark:text-white mb-2">
                Professional Networks
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 font-medium">
                Connect directly on professional and creative platforms.
              </p>

              <div className="space-y-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, x: 4 }}
                    whileTap={{ scale: 0.96 }}
                    className={`p-3 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer btn-popup ${
                      theme === 'dark'
                        ? 'bg-stone-900/60 border-stone-800 hover:border-orange-500/60 hover:bg-stone-800'
                        : theme === 'eye-protect'
                        ? 'bg-amber-100/50 border-amber-200 hover:border-amber-400 hover:bg-amber-100'
                        : 'bg-stone-50 border-orange-200 hover:border-orange-400 hover:bg-orange-50/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white dark:bg-stone-800 shadow-sm flex-shrink-0">
                        {getSocialIcon(link.iconName)}
                      </div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {link.platform}
                        </div>
                        <div className="text-[10px] text-stone-500 dark:text-stone-400 font-mono">
                          {link.handle}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-orange-500 transition-colors mr-1" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-orange-500/15 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
              <span className="font-mono">Response Time:</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">Within 24 Hours</span>
            </div>
          </div>

        </div>

        {/* ================================================================= */}
        {/* SPONSOR LOGOS ANIMATION SECTION (DIRECTLY UNDER CONNECT)          */}
        {/* ================================================================= */}
        <div className="mt-6 pt-6">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-orange-500/15 text-orange-700 dark:text-orange-400 border border-orange-500/30 shadow-sm mb-2">
              <Award className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
              <span>Official Partners & Supporters</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white">
              Sponsoring Engineering Excellence
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 font-mono mt-1">
              Supported by leading corporate and institutional partners powering MATE ROV WORLD FINALS 2025
            </p>
          </div>

          {/* Animated Logos Ticker directly under Connect */}
          <SponsorsMarquee
            theme={theme}
            id="connect-sponsors-marquee"
            title="Official Championship & Institutional Sponsors"
            subtitle="Powering MATE ROV WORLD FINALS 2025 & Autonomous Robotics Excellence"
            className="rounded-3xl border border-orange-500/20 shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};
