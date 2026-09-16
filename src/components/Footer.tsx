import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Heart, Sparkles, Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="border-t border-slate-500/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <BrandLogo size="md" withGlow={true} className="flex-shrink-0" />
            <div className="w-10 h-10 rounded-2xl overflow-hidden border border-orange-500/40 p-0.5 bg-gradient-to-tr from-orange-500 to-amber-400 flex-shrink-0">
              <img
                src="/assets/images/Profile.jpeg"
                alt="Md. Mehrab Hossain Khan"
                className="w-full h-full object-cover object-[center_20%] rounded-[14px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-extrabold text-sm tracking-wide text-stone-900 dark:text-white">
                Md. Mehrab Hossain Khan
              </div>
              <div className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                CFO & Robotics Lead • United International University (UIU)
              </div>
            </div>
          </div>

          {/* Social Links Row (Pop Up!) */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-2xl bg-stone-500/10 hover:bg-orange-500/20 hover:text-orange-400 border border-stone-500/15 transition-all btn-popup cursor-pointer"
                title={link.platform}
              >
                {getSocialIcon(link.iconName)}
              </motion.a>
            ))}
          </div>

          {/* Back to top Pop-up button as explicitly requested */}
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.94 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold bg-stone-500/10 hover:bg-orange-500/20 hover:text-orange-400 border border-stone-500/15 cursor-pointer transition-all btn-popup"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
          </motion.button>

        </div>

        <div className="mt-8 pt-6 border-t border-orange-500/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-400 font-medium text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Md. Mehrab Hossain Khan. Engineered with React, TypeScript & Tailwind.
          </div>
          <div>
            Jatrabari, Dhaka, Bangladesh • United International University (UIU)
          </div>
        </div>
      </div>
    </footer>
  );
};
