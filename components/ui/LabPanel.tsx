// 3125 LAB Design System - Lab Panel Component
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Led from './Led'

interface LabPanelProps {
  children: ReactNode
  label?: string
  ledState?: 'on' | 'off' | 'idle'
  ledColor?: 'blue' | 'neon' | 'red' | 'yellow'
  className?: string
}

export default function LabPanel({
  children,
  label,
  ledState = 'on',
  ledColor = 'neon',
  className = '',
}: LabPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-lab-bg border border-lab-line rounded-lg p-6 md:p-8 shadow-panel ${className}`}
    >
      {/* Panel Header with LED and Label */}
      {label && (
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-lab-line/30">
          <Led state={ledState} color={ledColor} size="sm" />
          <div className="font-mono text-xs text-lab-ink/70 uppercase tracking-widest">
            {label}
          </div>
        </div>
      )}

      {/* Panel Content */}
      <div>{children}</div>
    </motion.div>
  )
}
