import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Globe, MapPin, Sparkles, X, Activity } from 'lucide-react';
import { ThemeMode } from '../types';

interface LiveWatchProps {
  theme: ThemeMode;
  compact?: boolean;
}

export const LiveWatch: React.FC<LiveWatchProps> = ({ theme, compact = false }) => {
  const [time, setTime] = useState<Date>(new Date());
  const [timezoneMode, setTimezoneMode] = useState<'dhaka' | 'local'>('dhaka');
  const [showAnalog, setShowAnalog] = useState(false);
  const [isExpandedModal, setIsExpandedModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time based on selected mode
  const getDisplayDate = () => {
    if (timezoneMode === 'dhaka') {
      return new Date(time.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }));
    }
    return time;
  };

  const displayDate = getDisplayDate();
  const hours = displayDate.getHours();
  const minutes = displayDate.getMinutes();
  const seconds = displayDate.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;

  const pad = (n: number) => n.toString().padStart(2, '0');

  // Analog watch angles
  const secondAngle = (seconds / 60) * 360;
  const minuteAngle = ((minutes + seconds / 60) / 60) * 360;
  const hourAngle = (((hours % 12) + minutes / 60) / 12) * 360;

  const dateStr = displayDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  if (compact) {
    return (
      <>
        <motion.button
          id="compact-live-watch-btn"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsExpandedModal(true)}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border transition-all cursor-pointer btn-popup ${
            theme === 'dark'
              ? 'bg-slate-900/90 border-cyan-500/30 text-cyan-300 hover:border-cyan-400/70 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
              : theme === 'eye-protect'
              ? 'bg-amber-100/90 border-amber-500/40 text-amber-900 hover:border-amber-600/60'
              : 'bg-white/90 border-sky-300 text-sky-800 hover:border-sky-500 shadow-sm'
          }`}
          title="Click to expand Live Watch & Timezone HUD"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Clock className="w-3.5 h-3.5" />
          <span>
            {pad(displayHours)}:{pad(minutes)}:{pad(seconds)} {ampm}
          </span>
          <span className="opacity-75 text-[10px] hidden sm:inline">
            {timezoneMode === 'dhaka' ? 'BST (UTC+6)' : 'Local'}
          </span>
        </motion.button>

        {/* Live Watch Expanded Modal */}
        <AnimatePresence>
          {isExpandedModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={`relative w-full max-w-md p-6 sm:p-7 rounded-3xl border shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-slate-900/95 border-cyan-500/40 text-white shadow-cyan-500/10'
                    : theme === 'eye-protect'
                    ? 'bg-[#fcf7ee] border-amber-300 text-stone-900'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                {/* Close Button with Pop-Up */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsExpandedModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-500/20 transition-colors cursor-pointer btn-popup"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-500">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg">Live Precision Chronometer</h3>
                    <p className="text-xs opacity-70">Real-time chronometer & timezone sync</p>
                  </div>
                </div>

                {/* Timezone Switcher with Pop-Up Buttons */}
                <div className="flex justify-center gap-2 mb-5">
                  <motion.button
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTimezoneMode('dhaka')}
                    className={`px-3.5 py-1.5 text-xs rounded-full font-bold transition-all cursor-pointer btn-popup ${
                      timezoneMode === 'dhaka'
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'bg-slate-500/10 hover:bg-slate-500/20'
                    }`}
                  >
                    🇧🇩 Dhaka Time (BST, UTC+6)
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTimezoneMode('local')}
                    className={`px-3.5 py-1.5 text-xs rounded-full font-bold transition-all cursor-pointer btn-popup ${
                      timezoneMode === 'local'
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'bg-slate-500/10 hover:bg-slate-500/20'
                    }`}
                  >
                    🌐 Your Device Time
                  </motion.button>
                </div>

                {/* Main Watch Card */}
                <div className="text-center py-5 rounded-2xl bg-slate-500/5 border border-slate-500/10 mb-4">
                  <div className="text-4xl sm:text-5xl font-mono font-black tracking-wider mb-1">
                    {pad(displayHours)}:{pad(minutes)}:
                    <span className="text-emerald-500">{pad(seconds)}</span>
                    <span className="text-sm ml-2 opacity-80">{ampm}</span>
                  </div>
                  <div className="text-xs sm:text-sm opacity-80 flex items-center justify-center gap-2 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>{dateStr} • {timezoneMode === 'dhaka' ? 'Dhaka, Bangladesh' : 'Local Time'}</span>
                  </div>
                </div>

                {/* Analog Toggle */}
                <div className="flex justify-center mb-4">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    onClick={() => setShowAnalog(!showAnalog)}
                    className="text-xs text-cyan-500 dark:text-cyan-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer btn-popup"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{showAnalog ? 'Hide Analog Face' : 'Show Analog Watch Face'}</span>
                  </motion.button>
                </div>

                {showAnalog && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="flex justify-center py-3"
                  >
                    <div className="relative w-44 h-44 rounded-full border-4 border-slate-700/50 bg-slate-950/50 flex items-center justify-center shadow-2xl">
                      {/* 12, 3, 6, 9 markers */}
                      <span className="absolute top-2 text-[10px] font-mono font-bold">12</span>
                      <span className="absolute right-2 text-[10px] font-mono font-bold">3</span>
                      <span className="absolute bottom-2 text-[10px] font-mono font-bold">6</span>
                      <span className="absolute left-2 text-[10px] font-mono font-bold">9</span>

                      {/* Hour hand */}
                      <div
                        className="absolute w-1.5 h-12 bg-slate-200 rounded-full origin-bottom bottom-1/2"
                        style={{ transform: `rotate(${hourAngle}deg)` }}
                      />
                      {/* Minute hand */}
                      <div
                        className="absolute w-1 h-16 bg-cyan-400 rounded-full origin-bottom bottom-1/2"
                        style={{ transform: `rotate(${minuteAngle}deg)` }}
                      />
                      {/* Second hand */}
                      <div
                        className="absolute w-0.5 h-18 bg-emerald-500 rounded-full origin-bottom bottom-1/2"
                        style={{ transform: `rotate(${secondAngle}deg)` }}
                      />
                      {/* Center pin */}
                      <div className="w-3 h-3 rounded-full bg-emerald-400 z-10 shadow" />
                    </div>
                  </motion.div>
                )}

                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <div>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Current Status:</span>
                    <span className="ml-1 opacity-90">Active in Dhaka, Bangladesh • Available for Tech, Research & Robotics Leadership.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <div
      className={`p-5 rounded-3xl border transition-all ${
        theme === 'dark'
          ? 'bg-slate-900/70 border-slate-800 text-white'
          : theme === 'eye-protect'
          ? 'bg-[#fbf5eb] border-amber-200 text-stone-900'
          : 'bg-white border-slate-200 text-slate-900 shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-bold uppercase tracking-wider opacity-70">
            {timezoneMode === 'dhaka' ? 'Dhaka Standard Time (BST)' : 'Device Local Time'}
          </span>
        </div>
        <div className="flex gap-1">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTimezoneMode('dhaka')}
            className={`px-2.5 py-1 text-[11px] rounded-lg transition-colors cursor-pointer btn-popup ${
              timezoneMode === 'dhaka' ? 'bg-emerald-500 text-white font-bold' : 'opacity-60 hover:opacity-100'
            }`}
          >
            BST (UTC+6)
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTimezoneMode('local')}
            className={`px-2.5 py-1 text-[11px] rounded-lg transition-colors cursor-pointer btn-popup ${
              timezoneMode === 'local' ? 'bg-emerald-500 text-white font-bold' : 'opacity-60 hover:opacity-100'
            }`}
          >
            Local
          </motion.button>
        </div>
      </div>

      <div className="font-mono text-2xl font-black">
        {pad(displayHours)}:{pad(minutes)}:
        <span className="text-emerald-500">{pad(seconds)}</span>
        <span className="text-xs ml-1.5 opacity-75">{ampm}</span>
      </div>
      <div className="text-[11px] opacity-70 mt-1">
        {dateStr}
      </div>
    </div>
  );
};
