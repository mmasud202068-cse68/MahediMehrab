import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Award,
  Layers,
  CheckCircle,
  Eye,
  Cpu,
  Code2,
  Images,
  Gauge
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ThemeMode } from '../types';

interface ProjectsSectionProps {
  theme: ThemeMode;
  onSelectProject: (project: Project) => void;
  onOpenTalkSmartDemo?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  theme,
  onSelectProject
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Robotics & Hardware', 'Web & Software', 'IoT & Systems'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative border-t border-orange-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-orange-500/10 text-orange-400 border border-orange-500/25 shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-orange-400" />
            Engineering Portfolio & Case Studies
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Academic, Competition & Hardware Projects
          </h2>
          <p className="text-sm sm:text-base opacity-75 mt-3 leading-relaxed">
            Click on any project to inspect the full engineering blueprint, schematic photos, live telemetry specs, and challenges overcome.
          </p>

          {/* Category Filter Tabs with Pop-Up Physics */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer btn-popup ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-stone-500/10 hover:bg-orange-500/15 opacity-80 text-inherit'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -6, scale: 1.015 }}
              onClick={() => onSelectProject(project)}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col group btn-popup cursor-pointer card-specular ${
                theme === 'dark'
                  ? 'bg-stone-900/85 border-orange-500/20 hover:border-orange-400/60 hover:shadow-2xl hover:shadow-orange-950/30'
                  : theme === 'eye-protect'
                  ? 'bg-[#fcf8f0] border-amber-200 hover:border-amber-400 shadow-sm'
                  : 'bg-white border-orange-200 hover:border-orange-400 shadow-sm'
              }`}
            >
              {/* Card Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Badges on Thumbnail */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-stone-950/85 backdrop-blur-md text-orange-400 border border-orange-500/30">
                    {project.labOrCourse}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {project.gallery && project.gallery.length > 1 && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/70 backdrop-blur-md text-stone-200 flex items-center gap-1 border border-white/15">
                        <Images className="w-3 h-3 text-orange-400" />
                        <span>{project.gallery.length} Photos</span>
                      </span>
                    )}
                    {project.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-500 text-stone-950 shadow-md">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h3 className="font-extrabold text-base sm:text-lg leading-snug group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-[11px] text-slate-300 line-clamp-1 mt-0.5 opacity-90">
                    {project.subtitle}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm opacity-80 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Chips with Pop-Up Hover */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-500/10 text-[var(--text-primary)] opacity-80"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-slate-500/10 opacity-60">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons POP UP */}
                <div className="pt-3 border-t border-orange-500/15 flex items-center justify-between gap-2.5">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="w-full py-2.5 px-4 rounded-2xl text-xs font-bold bg-orange-500/10 hover:bg-orange-500/20 text-orange-700 dark:text-orange-400 border border-orange-500/25 hover:border-orange-400/60 transition-all flex items-center justify-center gap-2 cursor-pointer btn-popup shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                    <span>View Engineering Blueprint & Details</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
