// 3125 LAB Design System - Button Component
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'link'
  size?: 'md' | 'lg'
  iconLeft?: ReactNode
  iconRight?: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'font-mono uppercase tracking-wider transition-all duration-300 ease-out inline-flex items-center justify-center gap-2'

  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700 border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:shadow-[0_0_30px_rgba(239,68,68,0.9)] relative overflow-hidden',
    ghost: 'bg-transparent text-lab-ink border-2 border-red-500 hover:border-red-600 hover:text-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]',
    link: 'bg-transparent text-red-500 hover:text-red-400 underline-offset-4 hover:underline',
  }

  const sizeClasses = {
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`

  const content = (
    <>
      {iconLeft && <span className="relative z-10">{iconLeft}</span>}
      {variant === 'primary' && <span className="text-yellow-300 relative z-10">⚠</span>}
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && <span className="text-yellow-300 relative z-10">⚠</span>}
      {iconRight && <span className="relative z-10">{iconRight}</span>}
      {variant === 'primary' && !disabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </>
  )

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={variant === 'primary' ? {
          boxShadow: [
            '0 0 20px rgba(239, 68, 68, 0.8)',
            '0 0 40px rgba(239, 68, 68, 0.4)',
            '0 0 20px rgba(239, 68, 68, 0.8)'
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      animate={variant === 'primary' && !disabled ? {
        boxShadow: [
          '0 0 20px rgba(239, 68, 68, 0.8)',
          '0 0 40px rgba(239, 68, 68, 0.4)',
          '0 0 20px rgba(239, 68, 68, 0.8)'
        ]
      } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      {content}
    </motion.button>
  )
}
