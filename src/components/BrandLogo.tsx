import React from 'react';
import { motion } from 'motion/react';

interface BrandLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  className?: string;
  animated?: boolean;
  withGlow?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
  animated = true,
  withGlow = true,
  onClick
}) => {
  // Convert size to pixel dimensions
  const getDimension = () => {
    if (typeof size === 'number') return size;
    switch (size) {
      case 'xs':
        return 28;
      case 'sm':
        return 34;
      case 'md':
        return 42;
      case 'lg':
        return 68;
      case 'xl':
        return 96;
      case '2xl':
        return 120;
      default:
        return 42;
    }
  };

  const dim = getDimension();
  const idPrefix = `mk-logo-${Math.random().toString(36).substring(2, 7)}`;

  return (
    <motion.div
      whileHover={onClick ? { scale: 1.08, rotate: 2 } : { scale: 1.05 }}
      whileTap={onClick ? { scale: 0.94 } : undefined}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center select-none ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
      style={{ width: dim, height: dim }}
    >
      {/* Ambient Pulsing Aura behind logo */}
      {withGlow && (
        <div
          className={`absolute -inset-2 rounded-full bg-gradient-to-tr from-orange-500/40 via-amber-500/30 to-orange-400/40 blur-md pointer-events-none ${
            animated ? 'animate-pulse' : ''
          }`}
        />
      )}

      {/* Scalable High-Precision Vector SVG */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-md"
      >
        <defs>
          <linearGradient id={`${idPrefix}-orange`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-neon`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="45%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#fdba74" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-amber`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-bg`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1c120c" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0c0704" stopOpacity="0.98" />
          </linearGradient>
        </defs>

        {/* Outer Precision Hexagonal Shield Frame */}
        <polygon
          points="100,10 178,54 178,146 100,190 22,146 22,54"
          fill={`url(#${idPrefix}-bg)`}
          stroke={`url(#${idPrefix}-neon)`}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Cyber Hairline Track */}
        <polygon
          points="100,20 166,58 166,142 100,180 34,142 34,58"
          fill="none"
          stroke={`url(#${idPrefix}-orange)`}
          strokeWidth="1.2"
          strokeOpacity="0.45"
          strokeDasharray="6 4"
        />

        {/* Vertex Telemetry Circuit Nodes */}
        <circle cx="100" cy="10" r="3.5" fill="#fdba74" />
        <circle cx="178" cy="54" r="3.5" fill="#fb923c" />
        <circle cx="178" cy="146" r="3.5" fill="#f97316" />
        <circle cx="100" cy="190" r="3.5" fill="#fdba74" />
        <circle cx="22" cy="146" r="3.5" fill="#f59e0b" />
        <circle cx="22" cy="54" r="3.5" fill="#fbbf24" />

        {/* Top Autonomous Navigation Star (North Compass) */}
        <g transform="translate(100, 44) scale(0.6)">
          <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill={`url(#${idPrefix}-amber)`} />
          <circle cx="0" cy="0" r="3" fill="#ffffff" />
        </g>

        {/* Dynamic Stylized "MK" (Mehrab Khan) Monogram */}
        {/* Left "M" Pillar */}
        <path
          d="M 52,148 L 52,66 L 70,66 L 70,148 Z"
          fill={`url(#${idPrefix}-neon)`}
        />

        {/* Center Interlocking V Chevron */}
        <path
          d="M 68,66 L 100,118 L 132,66 L 148,66 L 100,142 L 54,66 Z"
          fill={`url(#${idPrefix}-orange)`}
        />

        {/* Upper "K" Wing */}
        <path
          d="M 98,106 L 138,58 L 158,58 L 115,116 Z"
          fill={`url(#${idPrefix}-neon)`}
        />

        {/* Lower "K" Leg */}
        <path
          d="M 112,112 L 158,148 L 136,148 L 96,122 Z"
          fill={`url(#${idPrefix}-neon)`}
        />

        {/* Bottom World Champion Crest Indicator */}
        <g transform="translate(100, 168) scale(0.55)">
          <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#fb923c" />
          <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
        </g>
      </svg>
    </motion.div>
  );
};
