// 3125 LAB Design System - Root Layout
import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP, JetBrains_Mono, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp'
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm-plex-mono'
})

export const metadata: Metadata = {
  title: '3125 LAB | 業務課題を、実験で仕組みに変える研究所',
  description: '3125 LABは、企業が抱えるニッチな業務課題を実験的に解決する開発スタジオです。',
  keywords: ['AI開発', '業務効率化', 'システム開発', 'ローコード', 'DX支援'],
  openGraph: {
    title: '3125 LAB | 業務課題を、実験で仕組みに変える研究所',
    description: '企業が抱えるニッチな業務課題を実験的に解決する開発スタジオ',
    type: 'website',
    locale: 'ja_JP',
    siteName: '3125 LAB',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3125 LAB | 業務課題を、実験で仕組みに変える研究所',
    description: '企業が抱えるニッチな業務課題を実験的に解決する開発スタジオ',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansJP.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable} font-sans antialiased bg-lab-bg text-lab-ink min-h-screen`}>
        {/* Global Grid Background */}
        <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="global-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#78C4D4" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#global-grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
