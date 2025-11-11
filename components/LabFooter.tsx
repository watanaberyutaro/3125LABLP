// 3125 LAB Design System - Footer Component
'use client'

import { motion } from 'framer-motion'
import Container from './ui/Container'

export default function LabFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-lab-bg border-t border-lab-line py-12 relative overflow-hidden">
      {/* Scanline Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="h-px bg-lab-blue w-full"
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          {/* Left */}
          <div className="space-y-2">
            <div className="font-mono text-sm text-lab-ink">
              © {currentYear} 3125 LAB
            </div>
            <div className="font-mono text-xs text-lab-ink/60">
              AI SYSTEM R&D
            </div>
            <div className="font-mono text-[10px] text-lab-ink/40 tracking-wider">
              Built with Claude × Vercel
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-start md:justify-end gap-6">
            <a
              href="#"
              className="font-mono text-xs text-lab-ink/70 hover:text-lab-neon transition-colors duration-300 uppercase tracking-wider"
            >
              Policy
            </a>
            <a
              href="/contact"
              className="font-mono text-xs text-lab-ink/70 hover:text-lab-neon transition-colors duration-300 uppercase tracking-wider"
            >
              Contact
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-lab-ink/70 hover:text-lab-neon transition-colors duration-300 uppercase tracking-wider"
            >
              X
            </a>
          </div>
        </div>

        {/* Research Status */}
        <div className="mt-8 pt-6 border-t border-lab-line/30 text-center">
          <motion.div
            className="font-mono text-[10px] text-lab-blue/50 tracking-widest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Research in progress...
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}
