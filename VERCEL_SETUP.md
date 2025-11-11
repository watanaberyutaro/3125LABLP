# Vercel デプロイメント設定ガイド

## 404エラーが出る場合の確認事項

### 1. プロジェクト設定の確認

Vercelダッシュボードで以下を確認してください：

**Settings → General → Build & Development Settings**

- **Framework Preset**: `Next.js` を選択
- **Root Directory**: `.` または空白（プロジェクトのルート）
- **Build Command**: `npm run build` （デフォルト）
- **Output Directory**: 空白（デフォルト）
- **Install Command**: `npm install` （デフォルト）

### 2. 環境変数の設定

**Settings → Environment Variables**

お問い合わせフォームを動作させるために、以下の環境変数を追加：

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=noreply@3125lab.com
CONTACT_EMAIL=contact@3125lab.com
```

### 3. デプロイメントの確認

1. **Deployments** タブで最新のデプロイメントを確認
2. ビルドログを確認して、エラーがないか確認
3. デプロイメントが成功していることを確認

### 4. 再デプロイ

設定を変更した後、再デプロイが必要です：

1. **Deployments** タブで最新のデプロイメントを選択
2. 右上の「...」メニューから **Redeploy** を選択
3. **Redeploy** ボタンをクリック

## トラブルシューティング

### 404エラーが継続する場合

1. **Root Directoryを明示的に設定**
   - Settings → General → Root Directory に `.` を入力

2. **プロジェクトを削除して再作成**
   - 古いプロジェクトを削除
   - GitHubリポジトリから新しいプロジェクトをインポート

3. **ローカルでビルドを確認**
   ```bash
   npm run build
   npm start
   ```
   - ローカルで `http://localhost:3000` にアクセスして動作確認

## ページ構成

以下のページが利用可能です：

- `/` - ホームページ
- `/contact` - お問い合わせ
- `/works` - 実績一覧
- `/research` - 研究手法
- `/systems` - システム一覧
- `/lab-home` - ラボホーム

すべてのページがビルド時に静的生成されます。
