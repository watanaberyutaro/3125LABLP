// 3125 LAB Design System - Root Layout
import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP, JetBrains_Mono, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

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
  title: 'ニッチなシステム開発なら3125 LAB | 低価格・高品質な業務システム構築',
  description: 'ニッチな業務課題に特化したシステム開発。低価格（5万円〜）でAI連携・業務自動化システムを構築。請求書管理、在庫管理、日程調整など、Excel作業を効率化。小規模企業向けの安い業務システム開発ならお任せください。',
  keywords: [
    'ニッチなシステム開発',
    'システム開発 安い',
    '業務システム開発 低価格',
    '小規模 システム開発',
    '業務自動化',
    'AI システム開発',
    'ローコード開発',
    '請求書管理システム',
    '在庫管理システム',
    'Excel 自動化',
    '業務効率化 システム',
    'DX支援',
    '中小企業 システム開発',
  ],
  verification: {
    google: 'i8LAZUR3i5z8ulnyj2JRYUaRYndg8Yqr2QqKlSEuy9w',
  },
  openGraph: {
    title: 'ニッチなシステム開発なら3125 LAB | 低価格・高品質な業務システム構築',
    description: 'ニッチな業務課題に特化したシステム開発。5万円〜の低価格でAI連携・業務自動化システムを構築。請求書管理、在庫管理、Excel作業の効率化に対応。',
    type: 'website',
    locale: 'ja_JP',
    siteName: '3125 LAB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ニッチなシステム開発なら3125 LAB | 低価格・高品質な業務システム構築',
    description: 'ニッチな業務課題に特化したシステム開発。5万円〜の低価格でAI連携・業務自動化システムを構築。',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://3125lablp.vercel.app',
  },
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
      <head>
        <StructuredData />
      </head>
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
