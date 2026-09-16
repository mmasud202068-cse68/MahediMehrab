import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Mic,
  MicOff,
  Sparkles,
  Award,
  RotateCcw,
  Volume2,
  CheckCircle,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { ThemeMode } from '../types';
import confetti from 'canvas-confetti';

interface TalkSmartDemoModalProps {
  isOpen: boolean;
  theme: ThemeMode;
  onClose: () => void;
}

export const TalkSmartDemoModal: React.FC<TalkSmartDemoModalProps> = ({
  isOpen,
  theme,
  onClose
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [evaluatedResult, setEvaluatedResult] = useState<any>(null);
  const [simulatedTranscript, setSimulatedTranscript] = useState('');

  const topics = [
    {
      cue: "IELTS Speaking Part 2: Cue Card",
      prompt: "Describe an innovative robotic or technological system that has significantly impacted society.",
      bulletPoints: [
        "What this robotic system is",
        "How you learned about it or worked with it",
        "What challenges it helps overcome",
        "And explain why you consider this innovation remarkable."
      ]
    },
    {
      cue: "IELTS Speaking Part 1: Exploration & Travel",
      prompt: "Do you enjoy touring and traveling to new destinations by motorcycle or road?",
      bulletPoints: [
        "How often you travel",
        "What you like most about road exploration",
        "Who you prefer traveling with"
      ]
    }
  ];

  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleStartSpeaking = () => {
    setIsRecording(true);
    setTimer(0);
    setEvaluatedResult(null);
    setSimulatedTranscript(
      "In my perspective, subsea robotics and autonomous rovers represent a paramount leap in exploratory engineering. During my work with UIU Mariner and planetary rover systems, we implemented vectored propulsion and precise telemetry..."
    );
  };

  const handleStopAndEvaluate = () => {
    setIsRecording(false);
    setTimeout(() => {
      const result = {
        overallBand: "8.0",
        breakdown: [
          { metric: "Fluency & Coherence", score: "8.0", desc: "Smooth transitional speech, natural pausing, excellent discourse connectors." },
          { metric: "Lexical Resource", score: "8.5", desc: "Precise engineering and descriptive vocabulary with idiomatic range." },
          { metric: "Grammar & Accuracy", score: "7.5", desc: "Complex sentence clauses with consistent subject-verb concordance." },
          { metric: "Pronunciation & Intonation", score: "8.0", desc: "Clear syllable stress, rhythm, and confident delivery." }
        ],
        feedback: "Outstanding response! You demonstrated strong topical cohesion, structured your points around the cue card seamlessly, and maintained steady pace.",
        wordCount: 142,
        pace: "135 words/min (Optimal range: 120-150 wpm)"
      };
      setEvaluatedResult(result);
      confetti({
        particleCount: 55,
        spread: 75,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  const handleReset = () => {
    setIsRecording(false);
    setTimer(0);
    setEvaluatedResult(null);
    setSimulatedTranscript('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className={`relative w-full max-w-2xl my-6 rounded-3xl border shadow-2xl overflow-hidden ${
            theme === 'dark'
              ? 'bg-slate-900 border-cyan-500/40 text-white'
              : theme === 'eye-protect'
              ? 'bg-[#fcf7ee] border-amber-300 text-stone-900'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Close button with Pop Up */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer btn-popup"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Header Banner */}
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-1 opacity-90">
              <Award className="w-4 h-4 text-amber-300" />
              <span>UIU CSE Project Show Champion • Fall 2024</span>
            </div>
            <h2 className="text-2xl font-black flex items-center gap-2">
              <span>TalkSmart Live Mock Simulator</span>
              <Sparkles className="w-5 h-5 text-amber-300" />
            </h2>
            <p className="text-xs sm:text-sm opacity-90 mt-1">
              Interactive demonstration of the IELTS Speaking evaluation platform engineered by Mehrab Khan & team.
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Topic Switcher Pills (Pop Up!) */}
            <div className="flex gap-2 border-b border-slate-500/10 pb-3">
              {topics.map((t, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedTopic(idx);
                    handleReset();
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer btn-popup ${
                    selectedTopic === idx
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'bg-slate-500/10 hover:bg-slate-500/20 opacity-80'
                  }`}
                >
                  Topic #{idx + 1}
                </motion.button>
              ))}
            </div>

            {/* Current Prompt Card */}
            <div className="p-4 rounded-2xl bg-slate-500/5 border border-slate-500/10">
              <div className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider mb-1">
                {topics[selectedTopic].cue}
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">
                "{topics[selectedTopic].prompt}"
              </h3>
              <ul className="list-disc list-inside text-xs opacity-80 space-y-1">
                {topics[selectedTopic].bulletPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* Interactive Recording Area */}
            <div className="text-center py-5 rounded-2xl border border-dashed border-slate-500/30 bg-slate-500/5">
              <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-mono font-bold mb-3">
                <span className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-ping' : 'bg-slate-400'}`} />
                <span>00:{timer.toString().padStart(2, '0')}</span>
              </div>

              {/* Dynamic waveform visualization during recording */}
              {isRecording && (
                <div className="flex items-center justify-center gap-1 h-10 mb-4">
                  {[40, 70, 30, 90, 60, 100, 50, 80, 45, 85, 30, 75, 95, 40].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.2}%`] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.05 }}
                      className="w-1.5 bg-emerald-500 rounded-full"
                    />
                  ))}
                </div>
              )}

              <div className="flex justify-center gap-3">
                {!isRecording ? (
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={handleStartSpeaking}
                    className="px-6 py-3 rounded-2xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 flex items-center gap-2 cursor-pointer btn-popup"
                  >
                    <Mic className="w-4 h-4" />
                    <span>Start Speaking Practice</span>
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={handleStopAndEvaluate}
                    className="px-6 py-3 rounded-2xl font-bold text-sm bg-red-500 hover:bg-red-400 text-white shadow-lg shadow-red-500/25 flex items-center gap-2 cursor-pointer btn-popup"
                  >
                    <MicOff className="w-4 h-4" />
                    <span>Stop & Calculate Band Score</span>
                  </motion.button>
                )}

                {(timer > 0 || evaluatedResult) && (
                  <motion.button
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReset}
                    className="px-4 py-3 rounded-2xl text-xs font-semibold bg-slate-500/10 hover:bg-slate-500/20 transition-colors flex items-center gap-1.5 cursor-pointer btn-popup"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Evaluated Result Card */}
            {evaluatedResult && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                      Instant TalkSmart Assessment
                    </span>
                    <h4 className="font-bold text-lg">Overall Band Score</h4>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-500">
                    {evaluatedResult.overallBand}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {evaluatedResult.breakdown.map((b: any) => (
                    <div key={b.metric} className="p-2.5 rounded-xl bg-slate-500/5 border border-slate-500/10">
                      <div className="flex justify-between items-center font-bold mb-0.5">
                        <span>{b.metric}</span>
                        <span className="text-emerald-500 font-mono">Band {b.score}</span>
                      </div>
                      <div className="text-[11px] opacity-75">{b.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="text-xs pt-2 border-t border-emerald-500/20 opacity-90 leading-relaxed">
                  <strong>Examiner Summary:</strong> {evaluatedResult.feedback}
                </div>
              </motion.div>
            )}

          </div>

          <div className="p-4 sm:px-8 border-t border-slate-500/15 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-500/10 hover:bg-slate-500/20 transition-colors cursor-pointer btn-popup"
            >
              Close Simulator
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
