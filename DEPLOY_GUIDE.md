# 🚀 Vercelへのデプロイ手順

このポートフォリオサイトをVercelにデプロイする手順を説明します。

## 前提条件

- ✅ Gitリポジトリが初期化済み（完了）
- ✅ 初回コミット済み（完了）
- GitHubアカウント（必要）
- Vercelアカウント（必要・無料）

---

## 📋 デプロイ手順

### ステップ1: GitHubにリポジトリを作成

1. **GitHub（https://github.com）にアクセスしてログイン**

2. **新しいリポジトリを作成**
   - 右上の「+」→「New repository」をクリック
   - Repository name: `portfolio-site`（任意の名前）
   - Public または Private を選択
   - 「Create repository」をクリック

3. **既存のリポジトリをプッシュ**
   
   GitHubに表示される手順をコピーして実行します：

   ```bash
   # GitHubのリモートリポジトリを追加
   git remote add origin https://github.com/あなたのユーザー名/portfolio-site.git
   
   # ブランチ名をmainに変更（推奨）
   git branch -M main
   
   # GitHubにプッシュ
   git push -u origin main
   ```

   **PowerShellで実行する場合:**
   ```powershell
   cmd /c "cd /d c:\Users\utsuc\ドキュメント\utsuchimProject\PortfolioSite && git remote add origin https://github.com/あなたのユーザー名/portfolio-site.git"
   cmd /c "cd /d c:\Users\utsuc\ドキュメント\utsuchimProject\PortfolioSite && git branch -M main"
   cmd /c "cd /d c:\Users\utsuc\ドキュメント\utsuchimProject\PortfolioSite && git push -u origin main"
   ```

   ⚠️ **注意**: `あなたのユーザー名`と`portfolio-site`は実際の値に置き換えてください。

---

### ステップ2: Vercelにデプロイ

#### 方法1: Vercel Web UI（推奨・最も簡単）

1. **Vercel（https://vercel.com）にアクセス**
   - 「Sign Up」または「Log In」
   - GitHubアカウントで連携ログイン

2. **新しいプロジェクトをインポート**
   - ダッシュボードで「Add New」→「Project」をクリック
   - 「Import Git Repository」を選択
   - GitHubリポジトリ一覧から `portfolio-site` を選択

3. **プロジェクト設定**
   - **Framework Preset**: Next.js（自動検出）
   - **Root Directory**: そのまま
   - **Build Command**: `npm run build`（自動設定）
   - **Output Directory**: `.next`（自動設定）
   - **Install Command**: `npm install`（自動設定）

4. **環境変数（必要な場合のみ）**
   - 今回は不要なのでスキップ

5. **デプロイ開始**
   - 「Deploy」ボタンをクリック
   - 1〜3分待つ

6. **デプロイ完了！**
   - デプロイが完了すると、URLが発行されます
   - 例: `https://portfolio-site-xxxx.vercel.app`

---

#### 方法2: Vercel CLI

1. **Vercel CLIをインストール**
   ```bash
   npm install -g vercel
   ```

2. **ログイン**
   ```bash
   vercel login
   ```

3. **デプロイ**
   ```bash
   cd c:\Users\utsuc\ドキュメント\utsuchimProject\PortfolioSite
   vercel
   ```

4. **質問に答える**
   - Set up and deploy: Y
   - Which scope: 自分のアカウントを選択
   - Link to existing project: N
   - Project name: portfolio-site
   - In which directory: ./ （そのまま Enter）
   - Override settings: N

5. **本番デプロイ**
   ```bash
   vercel --prod
   ```

---

## 🎉 デプロイ後の確認

デプロイが完了したら：

1. **発行されたURLにアクセス**
   - `https://your-project.vercel.app`

2. **カスタムドメインの設定（オプション）**
   - Vercelダッシュボード → Settings → Domains
   - 独自ドメインを追加可能

3. **自動デプロイの確認**
   - GitHubにプッシュすると自動的に再デプロイされます
   - `main`ブランチへのプッシュ = 本番環境
   - 他のブランチ = プレビュー環境

---

## 🔄 更新の方法

コードを更新してデプロイし直す場合：

```bash
# 変更をコミット
git add .
git commit -m "Update: 変更内容の説明"

# GitHubにプッシュ（自動的にVercelが再デプロイ）
git push
```

---

## ⚙️ 推奨設定

### パフォーマンス最適化

Vercelは自動的に以下を行います：
- ✅ CDNによる配信
- ✅ 画像の最適化
- ✅ 自動キャッシング
- ✅ Edge Functions
- ✅ HTTPS証明書の自動発行

### 環境変数（今後の拡張用）

もし将来的にAPIキーなどが必要になったら：
1. Vercelダッシュボード → Settings → Environment Variables
2. 変数を追加
3. 再デプロイ

---

## 🐛 トラブルシューティング

### ビルドエラーが発生する場合

1. **ローカルでビルドを確認**
   ```bash
   npm run build
   ```

2. **Node.jsのバージョンを確認**
   - Vercelは Node.js 18.x 以上を推奨

3. **ログを確認**
   - Vercelダッシュボード → Deployments → 失敗したデプロイをクリック

### GitHubプッシュができない場合

1. **認証設定を確認**
   - GitHubのPersonal Access Tokenを使用
   - または SSH鍵を設定

2. **リモートURLを確認**
   ```bash
   git remote -v
   ```

---

## 📚 参考リンク

- [Vercel公式ドキュメント](https://vercel.com/docs)
- [Next.jsデプロイガイド](https://nextjs.org/docs/deployment)
- [Vercelダッシュボード](https://vercel.com/dashboard)

---

## ✅ チェックリスト

- [ ] GitHubリポジトリを作成
- [ ] コードをGitHubにプッシュ
- [ ] Vercelアカウントを作成/ログイン
- [ ] Vercelでプロジェクトをインポート
- [ ] デプロイ完了を確認
- [ ] 発行されたURLで動作確認
- [ ] （オプション）カスタムドメイン設定

---

🎊 **おめでとうございます！**
あなたのポートフォリオサイトが世界中からアクセス可能になりました！
