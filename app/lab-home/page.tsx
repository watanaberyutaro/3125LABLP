// 3125 LAB Design System - Home Page
'use client'

import { motion } from 'framer-motion'
import Header from '@/components/sections/Header'
import LabFooter from '@/components/LabFooter'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import LabPanel from '@/components/ui/LabPanel'
import CaseCard from '@/components/ui/CaseCard'
import PricingCard from '@/components/ui/PricingCard'
import Stepper from '@/components/ui/Stepper'
import DotIllustration from '@/components/ui/DotIllustration'
import Led from '@/components/ui/Led'

export default function LabHome() {
  const cases = [
    {
      caseNumber: '01',
      title: 'LP制作',
      client: 'スタートアップ企業',
      challenge: '企業のランディングページを研究所風デザインで制作',
      experiment: 'モダンなアニメーションとドット調イラストで独自性の高いブランディングを実施',
      result: 'CVR 2.3倍向上',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      caseNumber: '02',
      title: 'HP制作',
      client: '中小企業',
      challenge: 'コーポレートサイトの全面リニューアル',
      experiment: 'レスポンシブ対応、SEO最適化、CMSによる更新システムを実装',
      result: '問い合わせ数 3倍増',
      tags: ['WordPress', 'PHP', 'Google Analytics'],
    },
    {
      caseNumber: '03',
      title: '請求書管理システム',
      client: '営業代行企業',
      challenge: 'Excel管理から脱却し、請求業務を自動化したい',
      experiment: 'AI-OCRとZapierを活用したクラウドベース自動請求システムを構築',
      result: '工数 40時間/月 削減',
      tags: ['AI-OCR', 'Zapier', 'Google Apps Script'],
    },
    {
      caseNumber: '04',
      title: '契約書管理システム',
      client: '人材系会社',
      challenge: '契約書の電子化と一元管理',
      experiment: '検索機能、期限アラート、承認フローを実装',
      result: '検索時間 95%削減',
      tags: ['Airtable', 'Slack API', 'Box API'],
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'ヒアリング',
      description: 'お客様の課題や業務フローを詳しくヒアリング。本質的な課題を特定します。',
    },
    {
      number: '02',
      title: '設計・試作',
      description: '最適な技術スタックを選定し、プロトタイプを素早く構築。実際に触って検証できます。',
    },
    {
      number: '03',
      title: '納品・導入',
      description: 'システムを納品し、使い方をレクチャー。スムーズに業務へ導入できるようサポートします。',
    },
    {
      number: '04',
      title: '保守・改善',
      description: '運用後の課題に対応し、継続的に改善。ビジネスの変化に合わせてアップデートします。',
    },
  ]

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Kicker */}
              <div className="font-mono text-xs text-[#78C4D4] border-l-4 border-[#78C4D4] pl-4 mb-8 uppercase tracking-widest">
                [LAB_HOME] RESEARCH_STUDIO
              </div>

              {/* Title */}
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
                {'>'} BUSINESS_<span className="text-[#00FF96]">EXPERIMENT</span>
              </h1>

              {/* Description */}
              <p className="text-white/70 text-sm md:text-base max-w-3xl font-mono leading-relaxed">
                {'// '}企業が抱えるニッチな業務課題を実験的に解決する開発スタジオ
                <br />
                {'// '}AI × ローコード × API統合で高速プロトタイピングを実現
              </p>

              {/* Stats Bar */}
              <div className="mt-8 flex flex-wrap gap-6 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <motion.span
                    className="text-[#00FF96]"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ●
                  </motion.span>
                  <span className="text-white/60">PROJECTS: <span className="text-[#00FF96]">50+</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#78C4D4]">●</span>
                  <span className="text-white/60">SUCCESS_RATE: <span className="text-[#78C4D4]">98%</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#00C896]">●</span>
                  <span className="text-white/60">STATUS: <span className="text-[#00C896]">ACTIVE</span></span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROBLEM */}
        <Section
          id="problem"
          kicker="#02 OBSERVATION"
          title="Experiment — 実験で業務を再設計"
          lead="こんな課題は、実験的アプローチで解決できます。"
          tone="grid"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                '手入力が多く、人的ミスが発生している',
                'Excel管理が限界を迎えている',
                'データを毎回集計・コピーしている',
                '属人化していて、引き継ぎが難しい',
              ].map((problem, index) => (
                <LabPanel key={index} label={`Problem ${index + 1}`} ledState="on" ledColor="red">
                  <p className="text-lab-ink/80 leading-relaxed">{problem}</p>
                </LabPanel>
              ))}
            </div>

            <div>
              <DotIllustration kind="files" className="w-full h-auto" />
            </div>
          </div>
        </Section>

        {/* SOLUTION */}
        <Section
          id="solution"
          kicker="#03 HYPOTHESIS → PROTOTYPE"
          title="Systems — 業務を仕組み化"
          lead="プロトタイプから始めて、段階的に最適化します。"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <DotIllustration kind="flow" className="w-full h-auto" />
            </div>

            <div className="space-y-8">
              <LabPanel label="AI × Automation" ledState="on" ledColor="neon">
                <h3 className="font-mono text-xl font-bold text-lab-ink mb-3">AI連携</h3>
                <p className="text-lab-ink/80 leading-relaxed">
                  ChatGPT APIやOCR技術を活用し、データ入力・分類・要約を自動化。人の判断が必要な部分だけを残します。
                </p>
              </LabPanel>

              <LabPanel label="Low-Code Platform" ledState="on" ledColor="blue">
                <h3 className="font-mono text-xl font-bold text-lab-ink mb-3">ローコード開発</h3>
                <p className="text-lab-ink/80 leading-relaxed">
                  Airtable、Zapier、Google Apps Scriptなどを組み合わせ、高速に業務システムをプロトタイピング。
                </p>
              </LabPanel>

              <LabPanel label="Custom Integration" ledState="on" ledColor="blue">
                <h3 className="font-mono text-xl font-bold text-lab-ink mb-3">API統合</h3>
                <p className="text-lab-ink/80 leading-relaxed">
                  既存のSaaS（Slack、Box、Salesforce等）とシームレスに連携。データの一元管理を実現します。
                </p>
              </LabPanel>
            </div>
          </div>
        </Section>

        {/* SERVICES (PRICING) */}
        <Section
          id="service"
          kicker="#04 EXPERIMENT PLANS"
          title="Plans — 実験プラン"
          lead="小さく始めて、段階的にスケールできます。"
          tone="panel"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              name="Lite"
              setupPrice="¥80,000〜"
              monthlyPrice="¥3,000〜"
              features={[
                '既存ツール連携',
                'スプレッドシート自動化',
                '基本レポート機能',
                'メールサポート',
              ]}
            />
            <PricingCard
              name="Business"
              setupPrice="¥200,000〜"
              monthlyPrice="¥5,000〜"
              features={[
                'カスタムワークフロー',
                'AI連携（OCR/要約）',
                'ダッシュボード構築',
                'チャットサポート',
                'データ分析支援',
              ]}
              recommended
            />
            <PricingCard
              name="Custom"
              setupPrice="¥400,000〜"
              monthlyPrice="¥10,000〜"
              features={[
                'フルカスタム開発',
                '複数システム統合',
                'API開発',
                '専任担当者',
                'オンサイト対応可',
              ]}
            />
          </div>
        </Section>

        {/* WORKS */}
        <Section
          id="works"
          kicker="#05 RESULTS"
          title="Works — 研究成果"
          lead="実験を重ねて、確実な成果を出しています。"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem) => (
              <CaseCard key={caseItem.caseNumber} {...caseItem} />
            ))}
          </div>
        </Section>

        {/* FLOW */}
        <Section
          id="flow"
          kicker="#06 PROCESS"
          title="Flow — 開発プロセス"
          lead="4つのステップで、確実に成果を実現します。"
          tone="grid"
        >
          <Stepper steps={steps} />
        </Section>

        {/* CTA */}
        <Section
          id="cta"
          kicker="#07 CONTACT"
          title={
            <>
              あなたの
              <span className="text-lab-neon">&quot;研究テーマ&quot;</span>を
              <br />
              教えてください。
            </>
          }
          lead="まずは1テーマから、実験を始めましょう。"
        >
          <div className="flex flex-col items-center gap-6">
            <Button variant="primary" size="lg" href="/contact">
              無料で相談する
            </Button>

            <div className="flex items-center gap-6 text-sm text-lab-ink/60">
              <div className="flex items-center gap-2">
                <Led state="on" color="neon" size="sm" />
                <span>返信 2営業日以内</span>
              </div>
              <div className="flex items-center gap-2">
                <Led state="on" color="blue" size="sm" />
                <span>秘密保持契約可</span>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <LabFooter />
    </>
  )
}
