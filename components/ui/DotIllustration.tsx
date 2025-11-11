// 3125 LAB Design System - Dot Illustration Component
'use client'

import { motion } from 'framer-motion'

interface DotIllustrationProps {
  kind: 'scientist' | 'desk' | 'chart' | 'beaker' | 'whiteboard' | 'flow' | 'files' | 'labHUD'
  role?: string
  'aria-label'?: string
  className?: string
  colorOverride?: string
}

export default function DotIllustration({
  kind,
  role = 'img',
  'aria-label': ariaLabel,
  className = 'w-64 h-64',
  colorOverride,
}: DotIllustrationProps) {
  const strokeColor = colorOverride || '#EDEDED'

  // Simplified SVG illustrations with dot patterns
  const illustrations = {
    scientist: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role={role} aria-label={ariaLabel || 'Scientist illustration'}>
        <defs>
          <pattern id="dots-scientist" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill={strokeColor} opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-scientist)"/>
        <circle cx="100" cy="60" r="25" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <rect x="75" y="85" width="50" height="70" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <line x1="75" y1="100" x2="50" y2="130" stroke={strokeColor} strokeWidth="2" opacity="0.7"/>
        <line x1="125" y1="100" x2="150" y2="130" stroke={strokeColor} strokeWidth="2" opacity="0.7"/>
      </svg>
    ),
    beaker: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role={role} aria-label={ariaLabel || 'Beaker illustration'}>
        <defs>
          <pattern id="dots-beaker" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill={strokeColor} opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-beaker)"/>
        <path d="M70 50 L70 100 L60 140 L140 140 L130 100 L130 50 Z" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <line x1="60" y1="50" x2="140" y2="50" stroke={strokeColor} strokeWidth="2" opacity="0.7"/>
        <motion.path
          d="M65 120 L135 120"
          stroke="#78C4D4"
          strokeWidth="2"
          opacity="0.5"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role={role} aria-label={ariaLabel || 'Chart illustration'}>
        <defs>
          <pattern id="dots-chart" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill={strokeColor} opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-chart)"/>
        <line x1="40" y1="40" x2="40" y2="160" stroke={strokeColor} strokeWidth="2" opacity="0.7"/>
        <line x1="40" y1="160" x2="160" y2="160" stroke={strokeColor} strokeWidth="2" opacity="0.7"/>
        <polyline points="50,120 80,90 110,100 140,60" stroke="#00C896" strokeWidth="2" fill="none"/>
        <circle cx="50" cy="120" r="4" fill="#00C896"/>
        <circle cx="80" cy="90" r="4" fill="#00C896"/>
        <circle cx="110" cy="100" r="4" fill="#00C896"/>
        <circle cx="140" cy="60" r="4" fill="#00C896"/>
      </svg>
    ),
    flow: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role={role} aria-label={ariaLabel || 'Flow illustration'}>
        <defs>
          <pattern id="dots-flow" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill={strokeColor} opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-flow)"/>
        <circle cx="60" cy="60" r="20" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <circle cx="140" cy="60" r="20" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <circle cx="100" cy="140" r="20" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <line x1="80" y1="60" x2="120" y2="60" stroke="#78C4D4" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <line x1="140" y1="80" x2="115" y2="125" stroke="#78C4D4" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#78C4D4"/>
          </marker>
        </defs>
      </svg>
    ),
    files: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role={role} aria-label={ariaLabel || 'Files illustration'}>
        <defs>
          <pattern id="dots-files" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill={strokeColor} opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-files)"/>
        <rect x="50" y="40" width="70" height="90" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <rect x="70" y="60" width="70" height="90" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.5"/>
        <line x1="60" y1="60" x2="100" y2="60" stroke={strokeColor} strokeWidth="1" opacity="0.5"/>
        <line x1="60" y1="75" x2="100" y2="75" stroke={strokeColor} strokeWidth="1" opacity="0.5"/>
        <line x1="60" y1="90" x2="90" y2="90" stroke={strokeColor} strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
    labHUD: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role={role} aria-label={ariaLabel || 'Lab HUD illustration'}>
        <defs>
          <pattern id="dots-labHUD" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill={strokeColor} opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-labHUD)"/>
        <rect x="30" y="30" width="140" height="140" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <circle cx="100" cy="100" r="40" stroke="#78C4D4" strokeWidth="2" fill="none"/>
        <motion.circle
          cx="100"
          cy="100"
          r="30"
          stroke="#00C896"
          strokeWidth="1"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        />
        <line x1="50" y1="50" x2="70" y2="50" stroke={strokeColor} strokeWidth="1" opacity="0.5"/>
        <line x1="50" y1="65" x2="70" y2="65" stroke={strokeColor} strokeWidth="1" opacity="0.5"/>
        <line x1="130" y1="50" x2="150" y2="50" stroke={strokeColor} strokeWidth="1" opacity="0.5"/>
        <line x1="130" y1="65" x2="150" y2="65" stroke={strokeColor} strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
    desk: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role={role} aria-label={ariaLabel || 'Desk illustration'}>
        <defs>
          <pattern id="dots-desk" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill={strokeColor} opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-desk)"/>
        <rect x="40" y="80" width="120" height="60" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <line x1="50" y1="140" x2="50" y2="170" stroke={strokeColor} strokeWidth="2" opacity="0.7"/>
        <line x1="150" y1="140" x2="150" y2="170" stroke={strokeColor} strokeWidth="2" opacity="0.7"/>
        <rect x="70" y="50" width="40" height="30" stroke="#78C4D4" strokeWidth="2" fill="none" opacity="0.5"/>
        <circle cx="130" cy="100" r="10" stroke="#00C896" strokeWidth="2" fill="none"/>
      </svg>
    ),
    whiteboard: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role={role} aria-label={ariaLabel || 'Whiteboard illustration'}>
        <defs>
          <pattern id="dots-whiteboard" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill={strokeColor} opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-whiteboard)"/>
        <rect x="30" y="40" width="140" height="100" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7"/>
        <path d="M50 70 Q70 60 90 70 T130 70" stroke="#78C4D4" strokeWidth="2" fill="none"/>
        <circle cx="60" cy="100" r="15" stroke="#00C896" strokeWidth="2" fill="none"/>
        <rect x="100" y="90" width="30" height="20" stroke="#00C896" strokeWidth="2" fill="none"/>
        <line x1="145" y1="95" x2="155" y2="105" stroke="#78C4D4" strokeWidth="2"/>
        <line x1="155" y1="95" x2="145" y2="105" stroke="#78C4D4" strokeWidth="2"/>
      </svg>
    ),
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {illustrations[kind]}
    </motion.div>
  )
}
