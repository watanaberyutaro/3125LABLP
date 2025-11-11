// 3125 LAB Design System - Section Component
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Container from './Container'

interface SectionProps {
  id?: string
  kicker?: string
  title?: string
  lead?: string
  children: ReactNode
  tone?: 'default' | 'panel' | 'grid'
  className?: string
}

export default function Section({
  id,
  kicker,
  title,
  lead,
  children,
  tone = 'default',
  className = '',
}: SectionProps) {
  const sectionClasses = tone === 'panel' ? 'bg-lab-bg border border-lab-line' : ''
  const gridBackground = tone === 'grid' ? (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${id || 'default'}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#78C4D4" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${id || 'default'})`} />
      </svg>
    </div>
  ) : null

  return (
    <section id={id} className={`py-24 relative ${sectionClasses} ${className}`}>
      {gridBackground}

      <Container>
        {/* Section Header */}
        {(kicker || title || lead) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            {kicker && (
              <div className="font-mono text-xs text-lab-blue border-l-4 border-lab-blue pl-4 mb-6 inline-block uppercase tracking-widest">
                {kicker}
              </div>
            )}

            {title && (
              <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-lab-ink tracking-tight mb-6">
                {title}
              </h2>
            )}

            {lead && (
              <p className="text-lg text-lab-ink/80 leading-relaxed max-w-2xl mx-auto">
                {lead}
              </p>
            )}
          </motion.div>
        )}

        {/* Section Content */}
        <div className="relative z-10">
          {children}
        </div>
      </Container>
    </section>
  )
}
