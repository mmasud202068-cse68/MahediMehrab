import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  User,
  Heart,
  Compass,
  Camera,
  Cpu,
  GraduationCap,
  MapPin,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  BookOpen,
  Film
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface AboutSectionProps {
  theme: ThemeMode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'philosophy' | 'hobbies'>('story');

  const pillars = [
    {
      icon: Cpu,
      title: "Robotics & Emerging Tech",
      tag: "Hardware & Autonomy",
      description: "Building autonomous underwater ROVs (MATE ROV WORLD FINALS 2025 Champions) and Mars exploration rovers competing at international arenas like URC and ARC."
    },
    {
      icon: TrendingUp,
      title: "CFO & Fiscal Stewardship",
      tag: "Leadership & Governance",
      description: "Serving as Chief Financial Officer at UIU Mariner and URO Bangladesh—managing multi-million BDT budgets, sponsorship negotiations, and international travel logistics."
    },
    {
      icon: Camera,
      title: "Cinematography & Visual Storytelling",
      tag: "UIU PRO & Comms",
      description: "Communication Apprentice at UIU PRO and Comms. Capturing documentary footage, DSLR event photography, and video post-production for institutional media."
    },
    {
      icon: Compass,
      title: "Motorcycle Touring Across Bangladesh",
      tag: "Hobby & Exploration",
      description: "Passionate road-tourer taking long bike expeditions across Bangladesh highways, immersing in local communities, discovering hidden landscapes, and learning continuously."
    }
  ];

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

  return (
    <section id="about" className="py-20 relative border-t border-slate-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-sm"
          >
            <User className="w-3.5 h-3.5 text-orange-400" />
            About Mehrab Hossain Khan
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold tracking-tight"
          >
            Technically Curious. Creative. Ambitious.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base opacity-75 mt-3 leading-relaxed"
          >
            From the heart of Jatrabari, Dhaka to the international world championship robotics stages—my journey is built on hands-on creation, learning by doing, and relentless self-improvement.
          </motion.p>
        </div>

        {/* Bento Grid: Story, Media Showcase, Credo, and Interactive Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* Left Main Card: Deep Story Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all card-specular ${
              theme === 'dark'
                ? 'bg-stone-900/80 border-orange-500/20 text-stone-200'
                : theme === 'eye-protect'
                ? 'bg-[#fbf5eb] border-amber-200 text-stone-800'
                : 'bg-white border-orange-200 text-stone-700 shadow-sm'
            }`}
          >
            <div>
              {/* Interactive Story Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: 'story', label: 'Personal Journey', icon: User },
                  { id: 'philosophy', label: 'Engineering Philosophy', icon: Sparkles },
                  { id: 'hobbies', label: 'Bike Touring & Media', icon: Compass }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer btn-popup ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                          : 'bg-stone-500/10 hover:bg-stone-500/15 opacity-80'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Tab 1: Personal Journey */}
              {activeTab === 'story' && (
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed opacity-90">
                  <p>
                    I am <strong className="text-[var(--text-primary)]">Md. Mehrab Hossain Khan</strong>, born and raised in Dhaka. I live at Jatrabari with my family, where my passion for science, tinkering, and building first ignited.
                  </p>
                  <p>
                    Currently, I am pursuing my Bachelor of Science in <strong className="text-[var(--text-primary)]">Computer Science and Engineering (CSE)</strong> at United International University (UIU). I am a genuine tech enthusiast who loves turning ideas into tangible, high-impact projects.
                  </p>
                  <p>
                    My work spans cutting-edge fields: <strong className="text-orange-400">Robotics, Automation, Drone Technology, and Underwater Robotics (ROV)</strong>. As an active lead in professional research projects such as the <strong className="text-[var(--text-primary)]">UIU Mars Rover Team</strong> and <strong className="text-[var(--text-primary)]">UIU Mariner</strong>, I have represented Bangladesh in premier global competitions.
                  </p>
                </div>
              )}

              {/* Tab 2: Philosophy */}
              {activeTab === 'philosophy' && (
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed opacity-90">
                  <p>
                    I define myself as a <strong className="text-[var(--text-primary)]">technically curious, creative, and ambitious person</strong> who believes that true mastery comes from building new things, learning by doing, and constantly challenging my own boundaries.
                  </p>
                  <p>
                    Whether drafting world championship-winning technical documentation for subsea ROVs or architecting full-stack web platforms like <strong className="text-orange-400">TalkSmart</strong>, I bridge engineering precision with human-centric clarity.
                  </p>
                </div>
              )}

              {/* Tab 3: Hobbies */}
              {activeTab === 'hobbies' && (
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed opacity-90">
                  <p>
                    Outside of code and circuits, I am a creative contributor for UIU as a <strong className="text-[var(--text-primary)]">Communication Apprentice at UIU PRO and Comms</strong>. I specialize in cinematography, photography, and documentary videography.
                  </p>
                  <p>
                    My favorite hobby is <strong className="text-orange-400">riding motorcycles</strong>. I embark on frequent bike tours across the highways and rural backroads of Bangladesh—exploring scenic regions, meeting diverse people, and gaining fresh life lessons from every ride.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Metadata Badges */}
            <div className="mt-8 pt-6 border-t border-orange-500/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-500/5">
                <span className="text-[10px] font-mono opacity-60 block">Hometown</span>
                <span className="font-bold flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-red-400" />
                  Jatrabari, Dhaka
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-500/5">
                <span className="text-[10px] font-mono opacity-60 block">Degree</span>
                <span className="font-bold flex items-center gap-1 mt-0.5">
                  <GraduationCap className="w-3 h-3 text-orange-400" />
                  CSE @ UIU
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-500/5">
                <span className="text-[10px] font-mono opacity-60 block">Key Roles</span>
                <span className="font-bold flex items-center gap-1 mt-0.5">
                  <TrendingUp className="w-3 h-3 text-amber-400" />
                  CFO & Tech Lead
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-500/5">
                <span className="text-[10px] font-mono opacity-60 block">Favorite Hobby</span>
                <span className="font-bold flex items-center gap-1 mt-0.5">
                  <Compass className="w-3 h-3 text-amber-500" />
                  Bike Touring
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Column: Cinematography Photo Showcase & Credo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Visual Media & Touring Card */}
            <div className="relative rounded-3xl overflow-hidden border border-orange-500/20 group shadow-xl flex-1 flex flex-col justify-end min-h-[260px]">
              <img
                src="/assets/images/cinematography_drone_1789498441821.jpg"
                alt="Cinematography, Drones & Tour Photography"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10 p-6 text-white space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-500 text-white font-bold">
                  <Film className="w-3 h-3" />
                  Cinematography & Moto Touring
                </span>
                <h3 className="font-bold text-lg sm:text-xl">
                  Capturing Moments & Exploring Horizons
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  From university documentaries at UIU PRO & Comms to scenic cross-country motorcycle tours across Bangladesh.
                </p>
              </div>
            </div>

            {/* Personal Quote Card with Pop-Up Action */}
            <div
              className={`p-6 rounded-3xl border ${
                theme === 'dark'
                  ? 'bg-stone-900/60 border-orange-500/20'
                  : theme === 'eye-protect'
                  ? 'bg-[#f8f1e6] border-amber-200'
                  : 'bg-stone-50 border-orange-200'
              }`}
            >
              <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Life Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm italic opacity-85 leading-relaxed">
                "Learning by doing is my true compass. Real engineering is not bounded by lecture slides—it is about having the tenacity to prototype, test in unpredictable environments, and achieve world-class results."
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-orange-500/10">
                <span className="text-xs font-bold opacity-80">— Md. Mehrab Hossain Khan</span>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md flex items-center gap-1 cursor-pointer btn-popup"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Grid with Pop-Up Physics on Every Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-3xl border transition-all cursor-default btn-popup ${
                  theme === 'dark'
                    ? 'bg-stone-900/70 border-stone-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10'
                    : theme === 'eye-protect'
                    ? 'bg-[#fbf5eb] border-amber-200 hover:border-amber-400'
                    : 'bg-white border-orange-200 hover:border-orange-400 shadow-sm'
                }`}
              >
                <div className="w-11 h-11 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4 shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-orange-400">
                  {pillar.tag}
                </span>
                <h4 className="font-bold text-base mt-1 mb-2">{pillar.title}</h4>
                <p className="text-xs opacity-75 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
