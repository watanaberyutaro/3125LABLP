// 3125 LAB Design System - Case Study Card Component
'use client'

import { motion } from 'framer-motion'
import Tag from './Tag'

interface CaseCardProps {
  caseNumber: string
  title: string
  client: string
  challenge: string
  experiment: string
  result: string
  tags: string[]
  className?: string
}

export default function CaseCard({
  caseNumber,
  title,
  client,
  challenge,
  experiment,
  result,
  tags,
  className = '',
}: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className={`bg-lab-bg border border-lab-line rounded-lg p-6 hover:border-lab-blue hover:shadow-glow transition-all duration-300 ${className}`}
    >
      {/* Case Number Label */}
      <div className="font-mono text-[10px] text-lab-neon border-l-2 border-lab-neon pl-3 mb-4 uppercase tracking-widest">
        Case {caseNumber}
      </div>

      {/* Title */}
      <h3 className="font-mono text-xl font-bold text-lab-ink mb-2">{title}</h3>

      {/* Client */}
      <div className="text-sm text-lab-ink/60 mb-6">{client}</div>

      {/* Details */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="font-mono text-xs text-lab-blue uppercase tracking-wider mb-1">Challenge</div>
          <p className="text-sm text-lab-ink/80 leading-relaxed">{challenge}</p>
        </div>

        <div>
          <div className="font-mono text-xs text-lab-blue uppercase tracking-wider mb-1">Experiment</div>
          <p className="text-sm text-lab-ink/80 leading-relaxed">{experiment}</p>
        </div>

        <div>
          <div className="font-mono text-xs text-lab-neon uppercase tracking-wider mb-1">Result</div>
          <p className="text-sm font-semibold text-lab-neon">{result}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag key={index} tone="line">
            {tag}
          </Tag>
        ))}
      </div>
    </motion.div>
  )
}
