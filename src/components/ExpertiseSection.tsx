import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  FileText,
  Radio,
  Code,
  Camera,
  Layers,
  Database,
  CheckCircle2,
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react';
import { SKILL_DOMAINS, TECH_STACK } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ExpertiseSectionProps {
  theme: ThemeMode;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core Systems', 'Robotics', 'Backend Architecture', 'Databases', 'Hardware & RF', 'Creative Production'];

  const filteredTech = selectedCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter(t => t.category === selectedCategory);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-500" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-cyan-500" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-500" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-rose-500" />;
      default:
        return <Layers className="w-5 h-5 text-teal-500" />;
    }
  };

  return (
    <section id="expertise" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-orange-400" />
            Core Expertise & Technical Stack
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Specialized Engineering Domains
          </h2>
          <p className="text-sm sm:text-base opacity-75 mt-3 leading-relaxed">
            Spanning low-level hardware communication, international competition-grade technical documentation, database-driven enterprise web applications, and multimedia production.
          </p>
        </div>

        {/* 5 Core Domain Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {SKILL_DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 sm:p-7 rounded-3xl border transition-all cursor-default btn-popup card-specular ${
                theme === 'dark'
                  ? 'bg-stone-900/70 border-stone-800 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/10'
                  : theme === 'eye-protect'
                  ? 'bg-[#fbf5eb] border-amber-200 hover:border-amber-400'
                  : 'bg-white border-orange-200 hover:border-orange-300 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-orange-500/10 flex-shrink-0">
                  {getDomainIcon(domain.icon)}
                </div>
                <h3 className="font-bold text-base sm:text-lg">{domain.domain}</h3>
              </div>

              <p className="text-xs sm:text-sm opacity-75 leading-relaxed mb-4">
                {domain.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-orange-500/10">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-stone-500/10 text-[var(--text-primary)] opacity-85"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Tech Stack Filter & Chips with Animated Progress Bars */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border ${
            theme === 'dark'
              ? 'bg-stone-900/80 border-orange-500/20'
              : theme === 'eye-protect'
              ? 'bg-[#fbf5eb] border-amber-200'
              : 'bg-white border-orange-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>Primary Tech Stack & Tools</span>
              </h3>
              <p className="text-xs sm:text-sm opacity-70 mt-0.5">
                Technologies utilized across university laboratories, competition prototypes, and production platforms.
              </p>
            </div>

            {/* Category Filter Pills (Every button pops up!) */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer btn-popup ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-stone-500/10 hover:bg-stone-500/20 opacity-80'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tech Badges Grid with Pop-up Physics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 rounded-2xl bg-stone-500/5 border border-stone-500/10 hover:border-orange-500/40 transition-colors btn-popup cursor-default"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-sm">{tech.name}</div>
                  <span className="text-xs font-mono font-bold text-orange-400">
                    {tech.level}%
                  </span>
                </div>
                
                <div className="text-[10px] opacity-60 font-mono mb-2">
                  {tech.category}
                </div>

                {/* Meter gauge */}
                <div className="w-full h-1.5 rounded-full bg-stone-500/20 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
