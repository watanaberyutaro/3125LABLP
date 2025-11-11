// 3125 LAB Design System - LED Indicator Component
'use client'

import { motion } from 'framer-motion'

interface LedProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'blue' | 'neon' | 'red' | 'yellow'
  state?: 'on' | 'off' | 'idle'
  className?: string
}

export default function Led({
  size = 'md',
  color = 'neon',
  state = 'on',
  className = '',
}: LedProps) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  }

  const colorClasses = {
    blue: 'bg-lab-blue',
    neon: 'bg-lab-neon',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
  }

  const glowColors = {
    blue: '0 0 8px rgba(120, 196, 212, 0.8)',
    neon: '0 0 8px rgba(0, 200, 150, 0.8)',
    red: '0 0 8px rgba(239, 68, 68, 0.8)',
    yellow: '0 0 8px rgba(234, 179, 8, 0.8)',
  }

  const baseClasses = `rounded-full ${sizeClasses[size]} ${className}`

  if (state === 'off') {
    return <div className={`${baseClasses} bg-lab-line opacity-30`} />
  }

  if (state === 'idle') {
    return (
      <motion.div
        className={`${baseClasses} ${colorClasses[color]}`}
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }

  // state === 'on'
  return (
    <motion.div
      className={`${baseClasses} ${colorClasses[color]}`}
      animate={{ opacity: [1, 0.6, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
      style={{ boxShadow: glowColors[color] }}
    />
  )
}
