import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  Trophy,
  Medal,
  Globe,
  Sparkles,
  CheckCircle2,
  Calendar,
  ExternalLink,
  PartyPopper
} from 'lucide-react';
import { AWARDS } from '../data/portfolioData';
import { Award as AwardType, ThemeMode } from '../types';
import confetti from 'canvas-confetti';

interface AwardsSectionProps {
  theme: ThemeMode;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ theme }) => {
  const triggerAwardCelebration = (e: React.MouseEvent, award: AwardType) => {
    e.stopPropagation();
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'gold':
        return 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-400/20';
      case 'silver':
        return 'bg-slate-200 text-slate-950 border-slate-300 shadow-md';
      case 'bronze':
        return 'bg-amber-700 text-white border-amber-600 shadow-md';
      default:
        return 'bg-emerald-500 text-white border-emerald-400 shadow-md';
    }
  };

  return (
    <section id="awards" className="py-20 relative border-t border-slate-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            Global Accolades & World Rankings
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Awards & Special Mentions
          </h2>
          <p className="text-sm sm:text-base opacity-75 mt-3 leading-relaxed">
            Representing Bangladesh and United International University on the world stage—bringing home World Championships, continental podiums, and national honors.
          </p>
        </div>

        {/* Grand Highlight Feature: MATE ROV 2025 World Champion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.015, y: -3 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => triggerAwardCelebration(e, AWARDS[0])}
          className="mb-12 p-6 sm:p-9 rounded-3xl border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/15 via-emerald-500/5 to-transparent relative overflow-hidden shadow-2xl cursor-pointer group btn-popup"
        >
          {/* Subtle background badge */}
          <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Trophy className="w-72 h-72 text-amber-400" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 uppercase tracking-wide shadow-md">
                <Trophy className="w-4 h-4" />
                Featured World Championship Triumph
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
                Technical Documentation Champion — MATE ROV WORLD FINALS 2025
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-orange-600 dark:text-orange-400">
                <span>UIU Mariner (Pioneer Category)</span>
                <span>•</span>
                <span className="text-amber-700 dark:text-amber-400 font-extrabold">Ranked #1 in the Whole World for Engineering Documentation</span>
              </div>
              <p className="text-xs sm:text-sm opacity-85 leading-relaxed max-w-2xl pt-1">
                Achieved the highest scoring engineering dossier among international top-tier universities, demonstrating peerless technical clarity, component analysis, cost governance, and safety protocols for underwater robotic vehicles.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={(e) => triggerAwardCelebration(e, AWARDS[0])}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 text-stone-950 shadow-lg shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer btn-popup"
                >
                  <PartyPopper className="w-3.5 h-3.5" />
                  <span>Celebrate Victory!</span>
                </motion.button>
                <span className="text-xs font-mono text-orange-600 dark:text-orange-400 opacity-80 font-medium">Click card for confetti</span>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-orange-400/30 aspect-[16/10] shadow-xl">
              <img
                src="/assets/images/underwater_rov_1789498408884.jpg"
                alt="UIU Mariner Underwater ROV Champion"
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Awards Cards Grid with Pop-Up Physics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS.slice(1).map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => triggerAwardCelebration(e, award)}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group btn-popup card-specular ${
                theme === 'dark'
                  ? 'bg-stone-900/70 border-stone-800 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/10'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb] border-amber-200 hover:border-amber-400'
                  : 'bg-white border-orange-200 hover:border-orange-300 shadow-sm'
              }`}
            >
              <div>
                {/* Top Row: Year & Rank Pill */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border ${getBadgeStyle(award.badgeType)}`}>
                    {award.rank}
                  </span>
                  <div className="flex items-center gap-1 text-xs opacity-60 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{award.year}</span>
                  </div>
                </div>

                {/* Award Title */}
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {award.title}
                </h4>

                <div className="text-xs font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {award.team} • {award.event}
                </div>

                {award.featuredImage && (
                  <div className="my-3 rounded-2xl overflow-hidden aspect-[16/9] border border-orange-500/25 bg-black shadow-sm">
                    <img
                      src={award.featuredImage}
                      alt={award.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <p className="text-xs opacity-80 leading-relaxed">
                  {award.description}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="mt-5 pt-3 border-t border-slate-500/10 flex items-center justify-between">
                <span className="text-[11px] font-mono opacity-60">Verified Result</span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-xs font-bold text-amber-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Celebrate</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
