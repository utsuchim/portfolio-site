# ポートフォリオサイト

Next.js 15 + TypeScript + Tailwind CSSで構築されたモダンなポートフォリオサイトです。

## 🚀 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel

## 📋 機能

- ✅ レスポンシブデザイン（モバイルファースト）
- ✅ ダークモード対応
- ✅ スムーススクロール
- ✅ プロジェクト一覧・詳細表示
- ✅ スキルセクション
- ✅ お問い合わせフォーム
- ✅ SEO最適化

## 🛠️ セットアップ

### 必要要件

- Node.js 18.x以上
- npm または yarn

### インストール

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. ブラウザで開く:
```
http://localhost:3000
```

## 📁 プロジェクト構造

```
PortfolioSite/
├── app/                    # Next.js App Router
│   ├── page.tsx           # トップページ
│   ├── layout.tsx         # ルートレイアウト
│   ├── globals.css        # グローバルスタイル
│   ├── projects/          # プロジェクト関連ページ
│   └── contact/           # コンタクトページ
├── components/            # Reactコンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SkillList.tsx
│   ├── ProjectCard.tsx
│   └── ContactForm.tsx
├── lib/                   # ユーティリティとデータ
│   └── data/
│       ├── projects.ts
│       └── skills.ts
├── types/                 # TypeScript型定義
│   └── index.ts
└── public/                # 静的ファイル

```

## 🎨 カスタマイズ

### プロジェクトデータの編集

`lib/data/projects.ts`でプロジェクト情報を編集できます。

### スキルデータの編集

`lib/data/skills.ts`でスキル情報を編集できます。

### カラースキームの変更

`tailwind.config.ts`でカラー設定を変更できます。

## 📦 ビルド

本番用ビルドの作成:
```bash
npm run build
```

ビルドの確認:
```bash
npm start
```

## 🚀 デプロイ

### Vercel（推奨）

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com)にインポート
3. 自動デプロイ完了

## 📝 ライセンス

MIT License

## 👤 作成者

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
