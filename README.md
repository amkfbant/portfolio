# Portfolio

GitHub Pages用のポートフォリオです。

この構成は、`username.github.io` 形式のユーザー/Organizationサイトでは `basePath` を使わず、  
それ以外のリポジトリサイトでは `/{repo}` を自動で適用するようにしています。

## 使い方

### 1) ローカル起動

```bash
npm install
npm run dev
```

### 2) GitHub Pages向けビルド

```bash
npm run build
```

`next.config.mjs` の `output: "export"` により `out/` が生成され、  
GitHub Actions からそのまま公開されます。

### 3) Tailwind CSS

Tailwind CSSを最小構成で導入済みです。`app/globals.css` に読み込み済みで、  
コンポーネント側は `className` でユーティリティを使える状態です。

必要に応じて `npm install` 後に `node_modules` を生成してください。

### 4) GitHub Actions設定

- `.github/workflows/gh-pages.yml` を追加済み
- `main` への push で自動ビルド・デプロイ

## GitHub Pages公開手順

1. GitHubリポジトリの `Settings > Pages`
2. Source を `GitHub Actions` に設定
3. `main` ブランチへ push
