import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Award,
  Maximize2,
  Check,
  UserCheck
} from 'lucide-react';
import { ThemeMode } from '../types';

interface PortraitModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const PortraitModal: React.FC<PortraitModalProps> = ({
  isOpen,
  onClose,
  theme
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const profileImage = '/assets/images/Profile.jpeg';

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset zoom on open
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
    }
  }, [isOpen]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.35, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.35, 0.8));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={`relative w-full max-w-3xl my-6 rounded-3xl border shadow-2xl overflow-hidden z-10 ${
            theme === 'dark'
              ? 'bg-stone-950 border-stone-800 text-white'
              : theme === 'eye-protect'
              ? 'bg-[#fcf7ee] border-amber-300 text-stone-900'
              : 'bg-white border-orange-200 text-stone-900'
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-orange-500/20 bg-stone-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
                Md Mehrab Hossain Khan • Executive Portrait
              </span>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.12, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer border border-white/20"
              title="Close Fullscreen View (Esc)"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Photo Canvas Stage with Interactive Zooming */}
          <div className="relative w-full h-[60vh] sm:h-[68vh] bg-stone-950 overflow-hidden flex items-center justify-center select-none group">
            {/* Background Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-black pointer-events-none" />

            {/* The Image Container with Zoom Transform */}
            <div
              className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${zoomLevel})`
              }}
            >
              <img
                src={profileImage}
                alt="Md Mehrab Hossain Khan - Executive Portrait with Tucked-in Shirt"
                className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
                draggable={false}
              />
            </div>

            {/* Float Floating Annotation Tags on Image */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <UserCheck className="w-3 h-3 text-emerald-400" />
                  <span>Formal Tucked-in Attire</span>
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/75 backdrop-blur-md text-orange-400 border border-orange-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-orange-400" />
                  <span>UIU Mariner CFO</span>
                </span>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/75 backdrop-blur-md text-amber-300 border border-amber-500/30 items-center gap-1">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>MATE ROV World Champion</span>
                </span>
              </div>

              <div className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-stone-900/90 text-stone-300 border border-stone-700">
                Zoom: {Math.round(zoomLevel * 100)}%
              </div>
            </div>

            {/* Floating Zoom Control Bar */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 p-1 rounded-2xl bg-black/70 backdrop-blur-md border border-white/20 shadow-xl">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleZoomIn}
                className="p-2 rounded-xl text-white hover:bg-white/20 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4 text-orange-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleZoomOut}
                className="p-2 rounded-xl text-white hover:bg-white/20 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4 text-orange-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleResetZoom}
                className="p-2 rounded-xl text-white hover:bg-white/20 cursor-pointer"
                title="Reset Zoom (100%)"
              >
                <RotateCcw className="w-4 h-4 text-stone-300" />
              </motion.button>
            </div>
          </div>

          {/* Footer Details Strip */}
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-90 border-t border-orange-500/15">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>
                <strong>Md Mehrab Hossain Khan</strong> — Standing leader, robotics explorer, and Chief Financial Officer.
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-md cursor-pointer self-end sm:self-auto"
            >
              Close View
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
