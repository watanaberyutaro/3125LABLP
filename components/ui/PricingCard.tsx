// 3125 LAB Design System - Pricing Card Component
'use client'

import { motion } from 'framer-motion'
import Button from './Button'
import Led from './Led'

interface PricingCardProps {
  name: string
  setupPrice: string
  monthlyPrice: string
  features: string[]
  recommended?: boolean
  className?: string
}

export default function PricingCard({
  name,
  setupPrice,
  monthlyPrice,
  features,
  recommended = false,
  className = '',
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-lab-bg border ${
        recommended ? 'border-lab-neon shadow-glow' : 'border-lab-line'
      } rounded-lg p-6 md:p-8 relative ${className}`}
    >
      {/* Recommended Badge */}
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-lab-neon text-black font-mono text-xs px-4 py-1 uppercase tracking-wider flex items-center gap-2">
            <Led state="on" color="blue" size="sm" />
            Recommended
          </div>
        </div>
      )}

      {/* Plan Name */}
      <div className="font-mono text-2xl font-bold text-lab-ink mb-6 text-center">
        {name}
      </div>

      {/* Pricing */}
      <div className="mb-6 text-center space-y-2">
        <div>
          <div className="font-mono text-xs text-lab-ink/60 uppercase tracking-wider">
            Setup Fee
          </div>
          <div className="font-mono text-3xl font-bold text-lab-ink">{setupPrice}</div>
        </div>
        <div>
          <div className="font-mono text-xs text-lab-ink/60 uppercase tracking-wider">
            Monthly
          </div>
          <div className="font-mono text-xl font-bold text-lab-neon">{monthlyPrice}</div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-8 border-t border-lab-line/30 pt-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="mt-1">
              <Led state="on" color="neon" size="sm" />
            </div>
            <div className="text-sm text-lab-ink/80 leading-relaxed">{feature}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button variant={recommended ? 'primary' : 'ghost'} size="md" className="w-full">
        相談する
      </Button>
    </motion.div>
  )
}
