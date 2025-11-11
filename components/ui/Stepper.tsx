// 3125 LAB Design System - Stepper Component
'use client'

import { motion } from 'framer-motion'
import Led from './Led'

interface Step {
  number: string
  title: string
  description: string
}

interface StepperProps {
  steps: Step[]
  className?: string
}

export default function Stepper({ steps, className = '' }: StepperProps) {
  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative"
        >
          {/* Connection Line (hidden on last item) */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-lab-line z-0">
              <motion.div
                className="h-full bg-lab-neon"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          )}

          {/* Step Card */}
          <div className="bg-lab-bg border border-lab-line rounded-lg p-6 hover:border-lab-blue transition-all duration-300 relative z-10 h-full">
            {/* Step Number with LED */}
            <div className="flex items-center gap-3 mb-4">
              <Led state="on" color="neon" size="md" />
              <div className="font-mono text-xs text-lab-neon uppercase tracking-widest">
                Step {step.number}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-mono text-lg font-bold text-lab-ink mb-3">{step.title}</h3>

            {/* Description */}
            <p className="text-sm text-lab-ink/70 leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
