import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ExperienceSectionProps {
  theme: ThemeMode;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ theme }) => {
  return (
    <section id="experience" className="py-20 relative border-t border-slate-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-orange-400" />
            Leadership & Professional Experience
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Proven Operations & Executive Roles
          </h2>
          <p className="text-sm sm:text-base opacity-75 mt-3 leading-relaxed">
            Delivering fiscal stewardship, international competition logistics, and technical storytelling across premier university research teams.
          </p>
        </div>

        {/* Timeline / Card Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`p-6 sm:p-8 rounded-3xl border transition-all btn-popup card-specular ${
                theme === 'dark'
                  ? 'bg-stone-900/70 border-stone-800 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/10'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb] border-amber-200 hover:border-amber-400'
                  : 'bg-white border-orange-200 hover:border-orange-300 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                    <div className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                      {exp.type}
                    </span>
                    <span className="text-xs opacity-75 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-500" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mt-2 text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-orange-600 dark:text-orange-400 mt-0.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{exp.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/15 text-xs font-mono self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 opacity-70" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights Bullet List */}
              <div className="space-y-2.5 my-5">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags with Pop-Up Physics */}
              <div className="pt-4 border-t border-orange-500/10 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-[11px] font-mono px-3 py-1 rounded-xl bg-orange-500/10 dark:bg-stone-500/10 text-stone-800 dark:text-stone-200 border border-orange-500/15 dark:border-stone-500/10 cursor-default btn-popup font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
