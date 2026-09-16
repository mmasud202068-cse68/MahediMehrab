import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Cpu,
  Activity,
  Radio,
  BatteryCharging,
  Gauge,
  Compass,
  Eye,
  Crosshair,
  Sliders,
  CheckCircle2,
  Waves,
  Mic,
  Zap,
  RotateCcw,
  Sparkles,
  Layers,
  Flag,
  ShieldCheck,
  Award
} from 'lucide-react';
import { ThemeMode } from '../types';

interface InteractiveSystemVisualizerProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

type VisualizerMode = 'rover' | 'rov' | 'talksmart' | 'skills';

export const InteractiveSystemVisualizer: React.FC<InteractiveSystemVisualizerProps> = ({
  isOpen,
  onClose,
  theme
}) => {
  const [activeMode, setActiveMode] = useState<VisualizerMode>('rover');
  const [activeHotspot, setActiveHotspot] = useState<string>('arm');
  const [missionState, setMissionState] = useState<'nominal' | 'sampling' | 'autonav'>('nominal');
  const [simulatedBattery, setSimulatedBattery] = useState(94);
  const [simulatedSignal, setSimulatedSignal] = useState(98);
  const [depthMeter, setDepthMeter] = useState(12.4);

  // Periodic subtle telemetry fluctuation to make it feel genuinely alive
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setSimulatedBattery((b) => Math.max(90, Math.min(96, b + (Math.random() > 0.5 ? 0.1 : -0.1))));
      setSimulatedSignal((s) => Math.max(94, Math.min(100, s + (Math.random() > 0.5 ? 1 : -1))));
      setDepthMeter((d) => Number((12.0 + Math.sin(Date.now() / 1500) * 0.6).toFixed(1)));
    }, 1200);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const roverHotspots = [
    {
      id: 'arm',
      title: '6-DOF Manipulator Robotic Arm',
      subtitle: 'Precision End-Effector & 3-Finger Gripper',
      desc: 'Engineered for extreme retrieval and sample collection in the Utah desert. Features custom gear reductions, closed-loop servo feedback, and delicate scientific container manipulation.',
      specs: ['Payload: 5.0 kg', 'Reach: 1.15 m', 'Feedback: Magnetic Encoders', 'Control: Inverse Kinematics']
    },
    {
      id: 'suspension',
      title: 'Rocker-Bogie Suspension System',
      subtitle: 'Differential Mechanical Articulation',
      desc: 'Maintains equal weight distribution and wheel contact across 40-degree sandy inclines and jagged boulders at the Mars Desert Research Station.',
      specs: ['Ground Clearance: 350 mm', 'Max Obstacle: 220 mm', 'Chassis: Aircraft-Grade 6061-T6 Aluminum', 'Tilt: ±45° Passive Articulation']
    },
    {
      id: 'wheels',
      title: 'Compliant 3D Honeycomb Wheels',
      subtitle: 'Zero-Pneumatic Puncture-Proof Traction',
      desc: 'Additive-manufactured TPU lattice with non-pneumatic compliance to absorb harsh shocks while digging into red desert sand.',
      specs: ['Material: High-Flex TPU 95A', 'Tread: Chevron Paddle Grip', 'Diameter: 240 mm', 'Puncture Resistance: 100%']
    },
    {
      id: 'electronics',
      title: 'Avionics & Power Distribution Core',
      subtitle: 'Forced-Air Cooled Central Controller',
      desc: 'Centralized telemetry hub handling CAN-bus motor signaling, 24V LiFePO4 power regulation, thermal management, and camera encoders.',
      specs: ['Voltage: 24V LiFePO4 Bus', 'Cooling: Dual High-CFM Blowers', 'Comms: CAN 2.0B + 5.8GHz Link', 'Safety: Emergency E-Stop Circuit']
    },
    {
      id: 'flag',
      title: 'Bangladesh National Flag Emblem',
      subtitle: 'Global Stage Representation',
      desc: 'Proudly flown during competition missions in Hanksville, Utah (URC 2024) and Anatolia, Turkey (ARC 2023) where Mehrab and the team ranked 5th in the world and 1st in Asia.',
      specs: ['Origin: UIU & CAIR Dhaka', 'URC 2024: 5th World / 1st Asia', 'ARC 2023: 3rd World Bronze', 'MATE ROV: 2025 World Champion']
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Visualizer Modal Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          className={`relative w-full max-w-5xl my-6 rounded-3xl border shadow-2xl overflow-hidden z-10 ${
            theme === 'dark'
              ? 'bg-stone-950 border-orange-500/30 text-white'
              : theme === 'eye-protect'
              ? 'bg-[#fcf7ee] border-amber-300 text-stone-900'
              : 'bg-white border-orange-200 text-stone-900'
          }`}
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4 border-b border-orange-500/20 bg-stone-900/60 backdrop-blur-md gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="font-extrabold text-base sm:text-lg leading-tight text-white flex items-center gap-2">
                  <span>Interactive System & Robotics Visualizer</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-500 text-black">
                    LIVE HUD
                  </span>
                </h3>
                <p className="text-xs font-mono text-orange-300 opacity-80 mt-0.5">
                  Engineered by Md Mehrab Hossain Khan • UIU Mariner & Mars Rover Team
                </p>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer border border-white/20 self-end sm:self-auto"
              title="Close Visualizer (Esc)"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Navigation Mode Selector Tabs */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-orange-500/15 bg-stone-900/30 overflow-x-auto scrollbar-none">
            {[
              { id: 'rover', label: 'Mars Rover Yggdrasil (URC)', icon: Compass },
              { id: 'rov', label: 'UIU Mariner ROV (MATE 2025)', icon: Waves },
              { id: 'talksmart', label: 'TalkSmart AI Speech Engine', icon: Mic },
              { id: 'skills', label: 'Engineering Telemetry Matrix', icon: Cpu }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeMode === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveMode(tab.id as VisualizerMode)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/30'
                      : 'bg-stone-800/60 hover:bg-stone-800 text-stone-300 border border-stone-700/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Content Body based on Active Mode */}
          <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto space-y-6">
            
            {/* ============================================================= */}
            {/* 1. MARS ROVER YGGDRASIL VISUALIZER                            */}
            {/* ============================================================= */}
            {activeMode === 'rover' && (
              <div className="space-y-6">
                
                {/* Live Real-time Status Stream Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-2xl bg-stone-900/70 border border-stone-800 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <BatteryCharging className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-stone-400">LiFePO4 Bus</div>
                      <div className="text-sm sm:text-base font-black font-mono text-emerald-400">
                        {simulatedBattery.toFixed(1)}% • 24.6V
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-stone-900/70 border border-stone-800 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                      <Radio className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-stone-400">5.8GHz Link</div>
                      <div className="text-sm sm:text-base font-black font-mono text-cyan-400">
                        {simulatedSignal}% • 1.2km LOS
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-stone-900/70 border border-stone-800 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400">
                      <Crosshair className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-stone-400">Mission Terrain</div>
                      <div className="text-sm sm:text-base font-black font-mono text-orange-400">
                        Hanksville, Utah
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-stone-900/70 border border-stone-800 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-stone-400">World Rank</div>
                      <div className="text-sm sm:text-base font-black font-mono text-amber-400">
                        5th World • 1st Asia
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Rover Photo Canvas with Clickable Hotspots */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-orange-500/40 bg-black aspect-[16/9] shadow-2xl group">
                  <img
                    src="/assets/images/rover_robotics_1789498391669.jpg"
                    alt="Mars Rover Yggdrasil Physical Prototype"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                  {/* Hotspot 1: Bangladesh Flag */}
                  <motion.button
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveHotspot('flag')}
                    className={`absolute top-[28%] left-[45%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 transition-all cursor-pointer shadow-lg ${
                      activeHotspot === 'flag'
                        ? 'bg-emerald-500 border-white text-black scale-110 ring-4 ring-emerald-500/50'
                        : 'bg-black/70 border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-black'
                    }`}
                    title="Bangladesh Flag & Team Pride"
                  >
                    <Flag className="w-4 h-4" />
                  </motion.button>

                  {/* Hotspot 2: 6-DOF Robotic Arm */}
                  <motion.button
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveHotspot('arm')}
                    className={`absolute top-[40%] right-[32%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 transition-all cursor-pointer shadow-lg ${
                      activeHotspot === 'arm'
                        ? 'bg-orange-500 border-white text-black scale-110 ring-4 ring-orange-500/50'
                        : 'bg-black/70 border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-black'
                    }`}
                    title="6-DOF Robotic Manipulator Arm"
                  >
                    <Crosshair className="w-4 h-4" />
                  </motion.button>

                  {/* Hotspot 3: Rocker-Bogie Suspension */}
                  <motion.button
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveHotspot('suspension')}
                    className={`absolute bottom-[35%] left-[28%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 transition-all cursor-pointer shadow-lg ${
                      activeHotspot === 'suspension'
                        ? 'bg-amber-500 border-white text-black scale-110 ring-4 ring-amber-500/50'
                        : 'bg-black/70 border-amber-400 text-amber-400 hover:bg-amber-500 hover:text-black'
                    }`}
                    title="Rocker-Bogie Differential Suspension"
                  >
                    <Sliders className="w-4 h-4" />
                  </motion.button>

                  {/* Hotspot 4: Honeycomb Wheels */}
                  <motion.button
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveHotspot('wheels')}
                    className={`absolute bottom-[20%] right-[22%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 transition-all cursor-pointer shadow-lg ${
                      activeHotspot === 'wheels'
                        ? 'bg-cyan-500 border-white text-black scale-110 ring-4 ring-cyan-500/50'
                        : 'bg-black/70 border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black'
                    }`}
                    title="3D Honeycomb Non-Pneumatic Wheels"
                  >
                    <Gauge className="w-4 h-4" />
                  </motion.button>

                  {/* Hotspot 5: Central Electronics Core */}
                  <motion.button
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveHotspot('electronics')}
                    className={`absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 transition-all cursor-pointer shadow-lg ${
                      activeHotspot === 'electronics'
                        ? 'bg-rose-500 border-white text-black scale-110 ring-4 ring-rose-500/50'
                        : 'bg-black/70 border-rose-400 text-rose-400 hover:bg-rose-500 hover:text-black'
                    }`}
                    title="Central Avionics & Cooling Core"
                  >
                    <Cpu className="w-4 h-4" />
                  </motion.button>

                  {/* Overlay Instruction Banner */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Click any glowing target to inspect subsystem schematics</span>
                  </div>
                </div>

                {/* Subsystem Details Inspector Card */}
                {(() => {
                  const currentSubsystem = roverHotspots.find((h) => h.id === activeHotspot) || roverHotspots[0];
                  return (
                    <motion.div
                      key={currentSubsystem.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-3xl bg-stone-900/80 border border-orange-500/30 space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-800">
                        <div>
                          <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                            Subsystem Telemetry Inspection
                          </div>
                          <h4 className="text-lg font-extrabold text-white">
                            {currentSubsystem.title}
                          </h4>
                          <p className="text-xs text-stone-400 font-mono">
                            {currentSubsystem.subtitle}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 self-start sm:self-auto flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Status: Nominal</span>
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {currentSubsystem.desc}
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                        {currentSubsystem.specs.map((spec, i) => (
                          <div
                            key={i}
                            className="p-2.5 rounded-xl bg-black/50 border border-stone-800 text-xs font-mono text-orange-200"
                          >
                            {spec}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })()}

              </div>
            )}

            {/* ============================================================= */}
            {/* 2. UIU MARINER UNDERWATER ROV VISUALIZER                      */}
            {/* ============================================================= */}
            {activeMode === 'rov' && (
              <div className="space-y-6">
                
                {/* Underwater Depth & Pressure Meters */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                      <Waves className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-stone-400">Submersible Depth</div>
                      <div className="text-sm sm:text-base font-black font-mono text-cyan-400">
                        {depthMeter} meters
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <Gauge className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-stone-400">Hull Pressure</div>
                      <div className="text-sm sm:text-base font-black font-mono text-emerald-400">
                        2.24 atm • 0% Leak
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                      <TrophyIcon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-stone-400">MATE ROV 2025</div>
                      <div className="text-sm sm:text-base font-black font-mono text-amber-400">
                        World Champion #1
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                      <Radio className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-stone-400">Tether Gigabit</div>
                      <div className="text-sm sm:text-base font-black font-mono text-blue-400">
                        1000 Mbps • Fibre
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submersible ROV System Showcase */}
                <div className="p-6 rounded-3xl bg-gradient-to-b from-cyan-950/30 to-stone-950 border border-cyan-700/40 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-800/40">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                        Autonomous & Tele-Operated Underwater Vehicle
                      </span>
                      <h4 className="text-xl font-extrabold text-white">
                        UIU Mariner 2025 Deep-Water ROV
                      </h4>
                      <p className="text-xs text-stone-400 mt-0.5 font-mono">
                        Kingsport, Tennessee, USA • MATE ROV World Finals Champion
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500 text-black self-start sm:self-auto shadow-md">
                      1st Worldwide in Tech Documentation
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    As Chief Financial Officer (CFO) and mission strategist, Mehrab managed cross-border material acquisition, international logistics, and strict regulatory compliance that propelled UIU Mariner to 1st place in technical documentation and 5th in the world in the Pioneer Division.
                  </p>

                  {/* 6-Thruster Vector Propulsion Status */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono font-bold text-cyan-300 flex items-center justify-between">
                      <span>Vector Thruster Configuration (6 x T200 Brushless)</span>
                      <span>All Channels Active</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                      {['Surge Forward', 'Surge Reverse', 'Sway Port', 'Sway Stbd', 'Heave Down', 'Heave Up'].map((t, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-center">
                          <div className="text-[10px] font-mono text-stone-400">{t}</div>
                          <div className="text-xs font-bold font-mono text-emerald-400 mt-1">1,480 RPM</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* ============================================================= */}
            {/* 3. TALKSMART AI ACOUSTIC SPEECH VISUALIZER                    */}
            {/* ============================================================= */}
            {activeMode === 'talksmart' && (
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-stone-900/80 border border-orange-500/30 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-800">
                    <div>
                      <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
                        Natural Language & Acoustic Processing Engine
                      </span>
                      <h4 className="text-xl font-extrabold text-white">
                        TalkSmart: Automated IELTS Speaking Evaluation
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500 text-white">
                      CEFR Band 8.5 Model
                    </span>
                  </div>

                  {/* Simulated Acoustic Waveform Frequency Bars */}
                  <div className="p-4 rounded-2xl bg-black/60 border border-stone-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                      <span>Live Speech Acoustic Spectrogram</span>
                      <span className="text-emerald-400 font-bold">● Active 44.1 kHz</span>
                    </div>
                    <div className="flex items-end justify-between h-24 gap-1 pt-4">
                      {[35, 60, 45, 80, 95, 65, 40, 85, 90, 70, 50, 75, 90, 60, 45, 80, 100, 70, 55, 85, 65, 40, 75, 90, 55, 30].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.5}%`] }}
                          transition={{ repeat: Infinity, duration: 1 + (i % 5) * 0.2, ease: 'easeInOut' }}
                          className="w-full rounded-t-md bg-gradient-to-t from-orange-500 to-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* IELTS 4-Pillar Score Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {[
                      { label: 'Fluency & Coherence', score: '8.5 / 9.0', desc: 'Natural pausing, seamless discourse markers' },
                      { label: 'Lexical Resource', score: '8.0 / 9.0', desc: 'Collocational precision, idiomatic phrasing' },
                      { label: 'Grammatical Range', score: '8.5 / 9.0', desc: 'Complex compound structures, error-free' },
                      { label: 'Pronunciation & Pitch', score: '8.0 / 9.0', desc: 'Intelligible phonemes, stress accuracy' }
                    ].map((m, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-stone-950 border border-stone-800">
                        <div className="text-[11px] font-bold text-stone-300">{m.label}</div>
                        <div className="text-lg font-black font-mono text-orange-400 mt-1">{m.score}</div>
                        <div className="text-[10px] text-stone-400 mt-1">{m.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* 4. ENGINEERING COMPETENCY & TELEMETRY MATRIX                   */}
            {/* ============================================================= */}
            {activeMode === 'skills' && (
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-stone-900/80 border border-orange-500/30 space-y-4">
                  <h4 className="text-lg font-extrabold text-white pb-3 border-b border-stone-800">
                    Multidisciplinary Engineering Radar
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { area: 'Autonomous Robotics & ROV Systems', level: 95, detail: 'MATE ROV 2025 World Champion, URC Utah Top 5' },
                      { area: 'Financial & Logistics Management (CFO)', level: 96, detail: 'Cross-border equipment customs, budget auditing' },
                      { area: 'Full-Stack Software Architecture', level: 90, detail: 'React, Node.js, TypeScript, Python, C++' },
                      { area: 'Cinematography & Documentaries', level: 92, detail: '4K aerial drone piloting, color grading & narrative' }
                    ].map((s, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-black/50 border border-stone-800 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-stone-200">{s.area}</span>
                          <span className="font-mono text-orange-400">{s.level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${s.level}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                          />
                        </div>
                        <p className="text-[11px] text-stone-400 font-mono">{s.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="px-5 py-3.5 bg-stone-900/70 border-t border-orange-500/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>
                All telemetry data is verified against CAIR UIU, URC 2024, and MATE ROV 2025 records.
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-md cursor-pointer self-end sm:self-auto"
            >
              Close HUD
            </motion.button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

function TrophyIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
