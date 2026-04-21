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

### 3) GitHub Actions設定

- `.github/workflows/gh-pages.yml` を追加済み
- `main` への push で自動ビルド・デプロイ

## GitHub Pages公開手順

1. GitHubリポジトリの `Settings > Pages`
2. Source を `GitHub Actions` に設定
3. `main` ブランチへ push
