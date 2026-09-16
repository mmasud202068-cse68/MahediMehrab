import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Users, Heart, Compass, Camera, Sparkles } from 'lucide-react';
import { EXTRACURRICULAR } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ExtracurricularSectionProps {
  theme: ThemeMode;
}

export const ExtracurricularSection: React.FC<ExtracurricularSectionProps> = ({ theme }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-500" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-rose-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-500" />;
      default:
        return <Camera className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="extracurricular" className="py-20 relative border-t border-slate-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            <HeartHandshake className="w-3.5 h-3.5" />
            Extracurricular & Community Impact
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Giving Back, Mentoring & Adventure
          </h2>
          <p className="text-sm sm:text-base opacity-75 mt-3 leading-relaxed">
            Nurturing young roboticists, organizing humanitarian winter relief drives, and capturing the vibrant spirit of Bangladesh through bike expeditions.
          </p>
        </div>

        {/* 4 Cards Grid with Pop-Up Physics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {EXTRACURRICULAR.map((act, index) => (
            <motion.div
              key={act.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-default btn-popup ${
                theme === 'dark'
                  ? 'bg-stone-900/70 border-stone-800 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb] border-amber-200 hover:border-amber-400'
                  : 'bg-white border-orange-200 hover:border-orange-400 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3.5 rounded-2xl bg-stone-500/10 flex-shrink-0">
                  {getIcon(act.icon)}
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    {act.role}
                  </span>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[var(--text-primary)]">
                    {act.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm opacity-85 leading-relaxed">
                {act.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
