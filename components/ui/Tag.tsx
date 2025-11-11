// 3125 LAB Design System - Tag Component
import { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  tone?: 'blue' | 'neon' | 'line'
  as?: 'span' | 'a'
  href?: string
  className?: string
}

export default function Tag({
  children,
  tone = 'blue',
  as = 'span',
  href,
  className = '',
}: TagProps) {
  const baseClasses = 'inline-block font-mono text-[10px] px-3 py-1 uppercase tracking-widest border transition-colors duration-300'

  const toneClasses = {
    blue: 'border-lab-blue text-lab-blue bg-lab-blue/10 hover:bg-lab-blue/20',
    neon: 'border-lab-neon text-lab-neon bg-lab-neon/10 hover:bg-lab-neon/20',
    line: 'border-lab-line text-lab-ink/70 bg-transparent hover:border-lab-blue hover:text-lab-blue',
  }

  const combinedClasses = `${baseClasses} ${toneClasses[tone]} ${className}`

  if (as === 'a' && href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    )
  }

  return <span className={combinedClasses}>{children}</span>
}
