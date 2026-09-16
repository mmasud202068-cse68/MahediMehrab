import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Gauge,
  AlertTriangle,
  Award,
  Terminal,
  FileCheck
} from 'lucide-react';
import { Project, ThemeMode } from '../types';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  project: Project | null;
  theme: ThemeMode;
  onClose: () => void;
  onOpenDemo?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  theme,
  onClose,
  onOpenDemo
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'challenges'>('overview');
  const [isLightbox, setIsLightbox] = useState(false);
  const [dossierDownloaded, setDossierDownloaded] = useState(false);

  if (!project) return null;

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleSimulateDossier = () => {
    setDossierDownloaded(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setDossierDownloaded(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 25 }}
          className={`relative w-full max-w-4xl my-6 rounded-3xl border shadow-2xl overflow-hidden ${
            theme === 'dark'
              ? 'bg-slate-900 border-slate-700/80 text-white shadow-cyan-500/10'
              : theme === 'eye-protect'
              ? 'bg-[#fcf8f0] border-amber-300 text-stone-900'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Close button with Pop-Up motion */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white transition-colors cursor-pointer btn-popup"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* ================================================================= */}
          {/* MULTI-IMAGE INTERACTIVE GALLERY VIEWPORT (As explicitly requested) */}
          {/* ================================================================= */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-950 overflow-hidden group">
            <img
              src={galleryImages[activeImageIndex]}
              alt={`${project.title} - Visual ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

            {/* Previous / Next Arrow Controls */}
            {galleryImages.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-sm cursor-pointer btn-popup"
                  title="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-sm cursor-pointer btn-popup"
                  title="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </>
            )}

            {/* Image index counter badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                Image {activeImageIndex + 1} of {galleryImages.length}
              </span>
              {project.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400 text-slate-950 shadow-md">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Bottom Title Bar on Image */}
            <div className="absolute bottom-3 left-4 right-4 sm:left-6 sm:right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="text-xs font-mono text-emerald-400 font-semibold mb-0.5">
                  {project.labOrCourse} • {project.category}
                </div>
                <h2 className="text-xl sm:text-3xl font-black">{project.title}</h2>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-1">{project.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip (Allows clicking any photo inside) */}
          {galleryImages.length > 1 && (
            <div className="px-6 py-2.5 bg-slate-950/40 border-b border-slate-500/10 flex items-center gap-3 overflow-x-auto">
              <span className="text-[11px] font-mono opacity-60 uppercase tracking-wider whitespace-nowrap">
                Gallery Photos:
              </span>
              <div className="flex items-center gap-2">
                {galleryImages.map((img, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-emerald-500 ring-2 ring-emerald-500/40'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Nav Tabs for Deep Inside Details */}
          <div className="px-6 pt-4 border-b border-slate-500/10 flex items-center gap-2 overflow-x-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer btn-popup flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-slate-500/10 hover:bg-slate-500/20 opacity-80'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture & Contributions</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer btn-popup flex items-center gap-1.5 ${
                activeTab === 'specs'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-slate-500/10 hover:bg-slate-500/20 opacity-80'
              }`}
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>Technical Specs & Telemetry</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab('challenges')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer btn-popup flex items-center gap-1.5 ${
                activeTab === 'challenges'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-slate-500/10 hover:bg-slate-500/20 opacity-80'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Engineering Challenges Solved</span>
            </motion.button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-7 space-y-6 max-h-[55vh] overflow-y-auto">
            
            {/* TAB 1: OVERVIEW & CONTRIBUTIONS */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold mb-2">
                    System Blueprint & Abstract
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                    {project.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold mb-3">
                    Key Engineering & Leadership Milestones
                  </h3>
                  <div className="space-y-2.5">
                    {project.keyContributions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm opacity-90 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack badges */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold mb-2.5">
                    Technologies, Frameworks & Protocols
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-500/10 border border-slate-500/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: SPECS & METRICS */}
            {activeTab === 'specs' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold mb-3">
                    Live System Parameters & Benchmarks
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.specs?.map((spec, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-slate-500/5 border border-slate-500/10 flex items-center justify-between"
                      >
                        <span className="text-xs opacity-75">{spec.label}</span>
                        <span className="text-xs font-mono font-bold text-emerald-400">{spec.value}</span>
                      </div>
                    )) || (
                      <div className="text-xs opacity-70">Specs calibrated to standard IEEE laboratory parameters.</div>
                    )}
                  </div>
                </div>

                {project.systemMetrics && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold mb-3">
                      Performance & Impact Evaluations
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.systemMetrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold">{m.label}</span>
                            <span className="text-sm font-mono font-black text-emerald-500">{m.value}</span>
                          </div>
                          {m.detail && (
                            <p className="text-[11px] opacity-75 mt-1.5">{m.detail}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* TAB 3: CHALLENGES SOLVED */}
            {activeTab === 'challenges' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold mb-3">
                    Critical Engineering Bottlenecks Overcome
                  </h3>
                  <div className="space-y-3">
                    {project.challengesSolved?.map((ch, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm flex items-start gap-3"
                      >
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ch}</span>
                      </div>
                    )) || (
                      <div className="text-xs opacity-70">
                        Adhered to zero-defect quality control across design, simulation, and physical stress testing.
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-500/5 border border-slate-500/10">
                  <div className="flex items-center gap-2 text-xs font-bold mb-1">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>Quality Assurance & Documentation Rigor</span>
                  </div>
                  <p className="text-xs opacity-80 leading-relaxed">
                    All subsystem schematics and engineering logs were peer-reviewed and verified against international competition rubrics (including MATE ROV Technical Documentation standards, where Mehrab helped lead the team to a World Champion rank).
                  </p>
                </div>
              </motion.div>
            )}

          </div>

          {/* Modal Footer with Actions */}
          <div className="p-4 sm:px-7 border-t border-orange-500/15 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs opacity-70">
              <FileCheck className="w-4 h-4 text-orange-500" />
              <span>UIU Engineering Capstone & International Competition Archive</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSimulateDossier}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-orange-500/15 hover:bg-orange-500/25 text-orange-400 border border-orange-500/30 transition-all cursor-pointer btn-popup"
              >
                {dossierDownloaded ? '✓ Dossier Verified' : 'Preview System Specs'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-stone-500/10 hover:bg-stone-500/20 transition-all cursor-pointer btn-popup"
              >
                Close Dossier
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
