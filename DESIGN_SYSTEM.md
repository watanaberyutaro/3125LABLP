# 3125 LAB Design System

研究所UIスタイルの統一デザインシステム
**テーマ**: 黒ベース × ドット/線画 × モノスペースフォント × B2B信頼感

---

## 📐 Design Tokens

### Colors
```typescript
lab.bg        = #000000  // 背景（黒）
lab.ink       = #EDEDED  // テキスト（明るいグレー）
lab.line      = #333333  // 罫線・枠線
lab.blue      = #78C4D4  // ブランドカラー
lab.neon      = #00C896  // アクセント（ネオングリーン）
lab.neonSoft  = #00FFAA  // アクセント（明るいネオングリーン）
```

### Typography
```typescript
font-sans  // Inter, Noto Sans JP
font-mono  // JetBrains Mono, IBM Plex Mono
```

### Spacing
- Section: `py-24` (上下96px)
- Container: `px-4 md:px-6 lg:px-8`
- Gap: `gap-8` (基本)

### Border & Shadow
- `border-lab-line` (1px #333)
- `shadow-panel` (微細な枠線効果)
- `shadow-glow` (LED発光効果)

---

## 🧱 Component API

### Container
```tsx
import Container from '@/components/ui/Container'

<Container className="...">
  {children}
</Container>
```

### Section
```tsx
import Section from '@/components/ui/Section'

<Section
  id="example"
  kicker="#01 LABEL"  // 小見出し
  title="タイトル"
  lead="導入テキスト"
  tone="default" | "panel" | "grid"  // 背景スタイル
>
  {children}
</Section>
```

### Button
```tsx
import Button from '@/components/ui/Button'

<Button
  variant="primary" | "ghost" | "link"
  size="md" | "lg"
  href="/path"  // aタグとして動作
  onClick={() => {}}  // buttonタグとして動作
  iconLeft={<Icon />}
  iconRight={<Icon />}
>
  ボタンテキスト
</Button>
```

### Led (LEDインジケーター)
```tsx
import Led from '@/components/ui/Led'

<Led
  size="sm" | "md" | "lg"
  color="blue" | "neon" | "red" | "yellow"
  state="on" | "off" | "idle"  // on: 点灯, off: 消灯, idle: 脈動
/>
```

### Tag
```tsx
import Tag from '@/components/ui/Tag'

<Tag
  tone="blue" | "neon" | "line"
  as="span" | "a"
  href="/path"  // as="a"の場合
>
  タグ名
</Tag>
```

### LabPanel (ラボ風パネル)
```tsx
import LabPanel from '@/components/ui/LabPanel'

<LabPanel
  label="PANEL LABEL"
  ledState="on" | "off" | "idle"
  ledColor="blue" | "neon" | "red" | "yellow"
>
  {children}
</LabPanel>
```

### CaseCard (事例カード)
```tsx
import CaseCard from '@/components/ui/CaseCard'

<CaseCard
  caseNumber="01"
  title="タイトル"
  client="クライアント名"
  challenge="課題"
  experiment="実験内容"
  result="成果（KPI）"
  tags={['Tag1', 'Tag2']}
/>
```

### PricingCard (料金カード)
```tsx
import PricingCard from '@/components/ui/PricingCard'

<PricingCard
  name="Business"
  setupPrice="¥200,000〜"
  monthlyPrice="¥5,000〜"
  features={['機能1', '機能2', '機能3']}
  recommended={true}  // おすすめバッジ表示
/>
```

### Stepper (ステップ表示)
```tsx
import Stepper from '@/components/ui/Stepper'

<Stepper
  steps={[
    {
      number: '01',
      title: 'ステップ名',
      description: '説明文',
    },
    // ...
  ]}
/>
```

### DotIllustration (ドット調イラスト)
```tsx
import DotIllustration from '@/components/ui/DotIllustration'

<DotIllustration
  kind="scientist" | "desk" | "chart" | "beaker" | "whiteboard" | "flow" | "files" | "labHUD"
  role="img"
  aria-label="イラストの説明"
  className="w-64 h-64"
  colorOverride="#EDEDED"  // オプション
/>
```

---

## 📄 Page Structure

### 基本テンプレート
```tsx
import Header from '@/components/sections/Header'
import LabFooter from '@/components/LabFooter'
import Section from '@/components/ui/Section'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Section
          id="section1"
          kicker="#01 LABEL"
          title="タイトル"
          lead="導入文"
        >
          {/* コンテンツ */}
        </Section>

        <Section id="section2" {...}>
          {/* コンテンツ */}
        </Section>
      </main>
      <LabFooter />
    </>
  )
}
```

### ページ構成（LP例）
1. **HERO** - ヒーローセクション（キャッチコピー + イラスト + CTA）
2. **PROBLEM** - 課題提示（4〜6点）
3. **SOLUTION** - 解決策（AI/ローコード/API統合）
4. **SERVICES** - 料金プラン（Lite/Business/Custom）
5. **WORKS** - 事例紹介（Case 01〜04）
6. **FLOW** - 開発フロー（4ステップ）
7. **CTA** - 問い合わせ導線

---

## 🎨 Animation Guidelines

### Framer Motion基本設定
```tsx
// セクション出現
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// ホバー効果
whileHover={{ scale: 1.02, y: -2 }}
transition={{ duration: 0.3 }}
```

### LED点滅
```tsx
animate={{ opacity: [1, 0.6, 1] }}
transition={{ duration: 1.2, repeat: Infinity }}
```

---

## ♿ Accessibility

- `aria-label`, `role="img"` を適切に使用
- キーボード操作可能（Tab/Enter）
- コントラスト比 4.5:1以上
- `prefers-reduced-motion` 考慮

---

## 📦 File Structure

```
/components
  /ui
    - Container.tsx
    - Section.tsx
    - Button.tsx
    - Led.tsx
    - Tag.tsx
    - LabPanel.tsx
    - CaseCard.tsx
    - PricingCard.tsx
    - Stepper.tsx
    - DotIllustration.tsx
  /sections
    - Header.tsx
  - LabFooter.tsx

/app
  /lab-home
    - page.tsx  // 新デザインシステム版LP
  - layout.tsx
  - globals.css
```

---

## 🚀 Quick Start

### 1. 新しいページを作成
```bash
# /app/new-page/page.tsx を作成
```

### 2. テンプレートをコピー
```tsx
import Header from '@/components/sections/Header'
import LabFooter from '@/components/LabFooter'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function NewPage() {
  return (
    <>
      <Header />
      <main>
        <Section
          id="intro"
          kicker="#01 INTRODUCTION"
          title="ページタイトル"
          lead="ページの説明文"
        >
          <Button variant="primary" size="lg" href="/contact">
            お問い合わせ
          </Button>
        </Section>
      </main>
      <LabFooter />
    </>
  )
}
```

### 3. デザイントークンを使用
```tsx
className="bg-lab-bg text-lab-ink border-lab-line"
className="text-lab-blue hover:text-lab-neon"
className="font-mono tracking-tight uppercase"
```

---

## 📝 Naming Conventions

### Tailwindクラス
- `lab-*` カラー (bg-lab-bg, text-lab-ink, border-lab-line)
- `font-mono` モノスペースフォント
- `uppercase tracking-widest` ラベル用
- `shadow-panel` パネル用
- `shadow-glow` 発光効果

### Component Props
- `variant` - スタイルバリエーション
- `size` - サイズ
- `tone` - トーン（色調）
- `state` - 状態（on/off/idle）
- `kind` - 種類

---

## 🎯 Design Principles

1. **冷静・実験的** - 無駄な装飾を避け、機能的に
2. **信頼感** - B2B向けに安心感を与える配色・フォント
3. **統一感** - すべてのページで一貫したUI
4. **アクセシビリティ** - 誰でも使いやすく

---

## 📚 Reference

- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **Next.js**: https://nextjs.org/

---

## 🔧 Troubleshooting

### フォントが表示されない
→ `app/layout.tsx`でフォント変数が正しく設定されているか確認

### 色が適用されない
→ `tailwind.config.ts`で`lab.*`カラーが定義されているか確認

### アニメーションが動かない
→ Framer Motionがインストールされているか確認（`npm install framer-motion`）

---

**Built with Claude × Vercel**
© 2025 3125 LAB | Research in progress...
