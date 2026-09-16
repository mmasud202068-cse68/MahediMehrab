import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Calendar, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { EDUCATION_HISTORY } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface EducationSectionProps {
  theme: ThemeMode;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ theme }) => {
  return (
    <section id="education" className="py-20 relative border-t border-slate-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
            Academic Pathway
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Educational Qualification
          </h2>
          <p className="text-sm sm:text-base opacity-75 mt-3 leading-relaxed">
            Rigorous scientific training, advanced computational theory, and hands-on laboratory experimentation.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-3xl mx-auto space-y-6">
          {EDUCATION_HISTORY.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden transition-all btn-popup card-specular ${
                theme === 'dark'
                  ? 'bg-stone-900/70 border-stone-800 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/10'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb] border-amber-200 hover:border-amber-400'
                  : 'bg-white border-orange-200 hover:border-orange-300 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full ${
                    edu.status === 'In Progress'
                      ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30'
                      : 'bg-stone-500/15 text-stone-700 dark:text-stone-400 border border-stone-500/20'
                  }`}>
                    {edu.status}
                  </span>
                  <span className="text-xs opacity-75 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.timeline}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
                {edu.degree}
              </h3>
              <div className="text-sm sm:text-base font-bold text-orange-600 dark:text-orange-400 mt-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{edu.institution}</span>
              </div>
              <div className="text-xs text-stone-700 dark:text-stone-300 mt-1 font-mono font-medium">
                {edu.concentration}
              </div>

              <div className="mt-5 pt-4 border-t border-orange-500/10 space-y-2">
                {edu.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
