export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  period: string;
  role: string;
  category: string;
  scope: string;
  difficulty: "Low" | "Medium" | "High" | "Very High";
  technologies: string[];
  challenges: string[];
  outcome: string;
  demoUrl?: string;
  demoVideo?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "42-ft-transcendence",
    title: "42_ft_transcendence",
    summary:
      "フルスタック Web アプリとして Pong を実装。認証、対戦、管理機能を一体で設計したチーム課題です。",
    description:
      "42 Tokyo の最終課題として、4 名のチーム開発で 3D Pong のリアルタイム対戦プラットフォームをフルスタック実装しました。pnpm workspace の `packages/{backend,frontend}` モノレポで Fastify + Socket.IO のバックエンドと Vite + Babylon.js のフロントエンドを分離し、60fps のサーバ権威型ゲームループ、Google OAuth 2.0 と JWT のハイブリッド認証、自前 SPA ルーター、Nginx での TLS / WebSocket 終端まで一気通貫で設計しました。チーム内では責務を分担しつつ、認証・通信・セキュリティの基盤レイヤーを横断的に整えるロールを担いました。",
    period: "",
    role: "4 名チーム開発における基盤担当として、サーバ権威型ゲームループの設計と実装、OAuth2 → JWT → Socket.IO ハンドシェイク認証フロー、SQLite トーナメントブラケット生成、Nginx での TLS / WSS リバースプロキシ設定、入力検証・XSS / SQLi 対策などのセキュリティ多層防御の整備を担当",
    category: "フルスタックWebアプリ",
    scope: "42Tokyoチーム課題（4名）",
    difficulty: "Very High",
    technologies: [
      "TypeScript",
      "Fastify 4",
      "Socket.IO",
      "Babylon.js 7",
      "SQLite (better-sqlite3)",
      "Vite",
      "Tailwind CSS 3",
      "zod",
      "Nginx",
      "Docker Compose",
      "Google OAuth 2.0",
      "JWT",
      "Playwright",
    ],
    challenges: [
      "60fps のサーバ権威型ゲームループでチート耐性を確保するため、クライアントから届くパドル座標を「型 → 範囲 → 偏差」の3段でフィルタし、`Math.max/min` クランプと `gameEnded` フラグによる二重終了防止までをサーバ側に集約した。",
      "Socket.IO ハンドシェイクにクッキーを渡す方式が破綻したため、`auth: { token }` で JWT を渡すデュアル方式に切り替え、HTTP API では Bearer 優先 → セッション フォールバックで両系統を貫通させた。",
      "OAuth コールバック直後のセッション固定化攻撃を防ぐため、`request.session.regenerate()` を必ず噛ませ、本番では `sameSite: \"none\"` + `secure: true` のクロスドメイン Cookie 設定で運用に耐えるよう調整した。",
      "シングルエリミネーションのトーナメントを `db.transaction()` で原子化し、奇数人数の bye パスと現ラウンド完了検知からの次ラウンド自動生成までを破綻なく繋いだ。",
      "React / JSX 不在の素 SPA で XSS を起こさないため、`document.createElement` の `textContent` 経由でブラウザにエスケープを任せるサニタイズユーティリティを整備し、`innerHTML` を直接書かない規約に統一した。",
    ],
    outcome:
      "4 名チームでの分担開発により、Fastify でサーバ層を薄く保ちつつ、Babylon.js + 自前 SPA ルーターで動く 3D Pong プラットフォームを完成させました。Major 4（Backend / OAuth / Remote Players / Advanced 3D）+ Minor 4（= 2 Major 換算）の合計 6 Major 相当のモジュールを実装し、ユニット・結合・モック・E2E の 4 層テストと「サーバ権威 / ホワイトリスト / 環境変数」の 3 原則による多層防御を備えた成果物に仕上げました。",
    githubUrl: "#",
  },
  {
    slug: "pseudo-crm-ai-internship",
    title: "インサイドセールス × AI 営業提案書自動生成エンジン",
    summary:
      "営業代行会社のインサイドセールス全工程（架電〜育成〜提案〜戦略立案）を AI で再構築する 6 デモ＋擬似 CRM スイート。最も時間をかけた Demo 04「提案資料自動作成エンジン」を主軸に実装しました。",
    description:
      "営業代行会社のインサイドセールスの全工程（架電 → 育成 → 商談後フォロー → 提案 → 戦略立案 → 育成フィードバック）を 6 つのデモアプリと擬似 CRM で AI 再構築するスイートとして実装しました。最も時間をかけた Demo 04「提案資料自動作成エンジン」を主軸に、商談ヒアリングデータからスライド構成が動的に変化する営業提案書を自動生成。AI に数値を考えさせるのではなく、コードで事前計算した正確な指標をプロンプトに注入し、Web プレビューと PowerPoint を同一の SlideDefinition JSON から二系統レンダリングする設計を採用しました。共通顧客マスタとして node:sqlite ベースの擬似 CRM を構築し、200 件のリアル風商談データを蓄積。Demo 05 のターゲティング戦略立案では擬似 CRM のデータを集計・分析して「次に狙うべき顧客像」を導出する経路まで含めています。",
    period: "2026年4月",
    role: "6 デモアプリと擬似 CRM の設計・実装、Demo 04 提案資料自動作成エンジンの全レイヤー（プロンプト構築・JSON 多段修復・スライド可変構成・Web/PPTX 二系統レンダリング）の実装、擬似 CRM のスキーマ設計と 200 件のシナリオデータ整備、Demo 05 における CRM データの集計・分析ロジック実装",
    category: "生成AI活用アプリケーション",
    scope: "インターン（個人開発）",
    difficulty: "High",
    technologies: ["Codex CLI", "プロンプト設計", "pptxgenjs"],
    challenges: [
      "AI に数値を計算させると商談化率・受注率・ROI でハルシネーションが起きるため、プロンプト構築フェーズで決定論的な計算をコードで済ませ、結果を「算出済み指標」として AI に渡し、AI には文脈に合わせた言い回しと構成だけを担当させる境界設計に倒した。",
      "Codex CLI の長文出力で JSON が途中切断される事故に対し、boundary 検出 → 末尾自動補完 → 直近の安全点まで切り戻し、の 3 段階リカバリを実装し、どれかが Zod 検証を通れば提案書が成立するようにした。",
      "「常に固定 8 枚」ではなく入力データに含まれる情報に応じてスライドの有無を動的決定する仕組みを生成パイプラインとテンプレートエンジンの両方に実装し、競合がいなければ差別化スライドを出さない、タイムラインがなければロードマップを出さない、をコードで担保した。",
      "Web プレビューと PowerPoint で見た目が違う事故を構造的に排除するため、座標系つきの SlideDefinition JSON を単一ソースとし、React コンポーネントと pptxgenjs の両方が同じ JSON から描画する二系統レンダリングを設計した。",
    ],
    outcome:
      "6 デモ + 擬似 CRM のスイートを 1 リポジトリで完成させ、提案資料自動作成は手動で数時間かかっていた作業を 60 秒以内（AI 生成のタイムアウト上限）に短縮。業種・規模・予算帯の異なる 200 件のデモデータでスライド構成と内容が動的に変化するライブデモを実現しました。AI に任せる範囲とコードで保証する範囲を明確に切り分けた設計により、数値ハルシネーションと体裁崩れを構造的に排除した実用的な営業提案書自動生成基盤に仕上げています。",
    demoVideo: "/demo4-video.mp4",
    githubUrl: "#",
  },
  {
    slug: "btc-trading-system",
    title: "BTC価格予測・自動トレーディングシステム",
    summary:
      "大学の通年講義として、Python で Bitcoin の価格予測モデルと自動トレーディングを構築しました。",
    description:
      "BTC 先物（5分足／15分足）を対象に、LightGBM で短期シグナルを生成し、手数料・スリッページを織り込んだバックテストまで一気通貫で回す検証基盤を構築しました。「勝つ戦略を見つける」ことより「同じ条件で何度でも検証できる基盤を作る」ことを主眼に置き、約3年分の高頻度データ（315,345 本）を Walk-Forward で評価。設定ファイル駆動で 60 件超の構成を比較し、最終的に 5分足ロングオンリーで PF=3.23 / 勝率 66.7% の構成を得ました。",
    period: "2025年度",
    role: "特徴量パイプライン設計、ラベル生成（動的閾値3クラス／トリプルバリア）の実装、Walk-Forward 評価フレームワーク構築、約定モデル（maker / taker / hybrid）とコスト感度分析の実装、実験設計と結果分析",
    category: "機械学習 / 自動取引システム",
    scope: "大学通年講義（1年間）",
    difficulty: "High",
    technologies: ["Python", "LightGBM", "pandas / numpy", "scikit-learn"],
    challenges: [
      "未来情報リークを「規約」ではなく「テスト」で潰すため、特徴量とラベルのインデックス整合・NaN 比率・任意 t における先読み有無を自動検査するリーク検出器を組み込んだ。",
      "ラベル生成とバックテスト執行のロジック不一致が成績を歪めるため、トリプルバリア判定（同一バーで TP/SL 双方タッチ時の優先ルール、t+1 始値約定）をラベル側と執行側の両方で同一実装にし、整合性をユニットテストで担保した。",
      "スリッページは事前確定できないという前提に立ち、0〜3bps のシナリオを並列評価する設計に。「スリッページ0で勝つ」ではなく「2〜3bps でも生き残る領域があるか」を判断軸とした。",
      "EV ベースの損益分岐勝率（required_winrate = (SL幅 + 往復コスト) / (TP幅 + SL幅)）を組み込み、EV > cost × k を満たす時のみエントリーする EV フィルタを実装した。",
    ],
    outcome:
      "62 件の YAML 構成と 45 件の実行済み実験レポートを蓄積し、ロングオンリー × cost_mult=0.10 の構成で PF=3.23 / 勝率 66.7%（5分足・12 fold）を達成。72 fold のフルランでも PF=1.01 を維持し、期間が変わってもエッジが残るかを検証できる体制を整えました。リーク検査・fold 別ラベル分布出力・シナリオ並列バックテストを先に作ったことで、設定ファイルを増やすだけで実験を量産でき、「精度」ではなく「PF と最大 DD」で評価するメトリクス設計の実践経験を得ました。",
    githubUrl: "#",
  },
  {
    slug: "42-minishell",
    title: "42_minishell",
    summary:
      "bash の主要機能を C 言語で再現し、プロセス管理とシェルの基礎を磨くコア課題です。",
    description:
      "42 Tokyo の課題として、Unixシェルの主要機能を C 言語で再実装しました。コマンド実行の表面的な再現ではなく、字句解析・構文解析・展開・実行制御までを一貫して設計し、プロセス・ファイルディスクリプタ・シグナルの扱いを実装レベルで体得することを目的としました。",
    period: "2024年11月",
    role: "字句解析・構文解析・展開・実行のパイプライン設計、heredoc / リダイレクト / パイプ処理、ビルトインコマンドの実装・検証",
    category: "システムプログラミング",
    scope: "42Tokyoチーム課題（2名）",
    difficulty: "Very High",
    technologies: [
      "C言語",
      "POSIX API (fork, execve, wait, pipe, dup2, signal)",
      "GNU Readline",
      "Makefile",
      "Linux",
    ],
    challenges: [
      "親プロセスで状態を更新すべきビルトイン（cd, export, unset, exit）と、子プロセスで実行すべき外部コマンドの責務分離。pipeなし単一ビルトインは親で実行、それ以外はforkして実行するルールを明確化した。",
      "heredoc中のシグナル処理と通常プロンプト時の挙動差分。readlineのevent hookを活用し、通常時とheredoc時で監視関数を切り替えてCtrl+Cの挙動を制御した。",
      "リダイレクト適用後の標準入出力復元漏れによる副作用。対象FDを退避して実行後に復元するフローを統一し、パイプライン実行時も整合性を保つようにした。",
    ],
    outcome:
      "tokenize → parse → expand → execute の一連フローを自作実装し、パイプ・リダイレクト・heredoc・環境変数展開・主要ビルトインを統合したシェルを完成させました。プロセス制御、ファイルディスクリプタ、シグナル、エラー処理の理解を実装レベルで深めることができました。",
    demoVideo: "/minishell-demo.webm",
    githubUrl: "#",
  },
  {
    slug: "42-cub3d",
    title: "42_cub3d",
    summary:
      "レイキャスティングを用いた 3D 表現ゲームを実装。レンダリングを軸にした描画処理を設計しました。",
    description:
      "C言語で制作した一人称視点の3D迷路探索アプリです。テキストで書かれたマップファイルを読み込み、壁・床・天井・プレイヤー位置をもとに、2Dの地図を3D空間として描画します。プレイヤーはキーボードとマウスで移動・視点操作ができ、画面上には現在位置が分かるミニマップも表示されます。",
    period: "2024年12月〜2025年1月",
    role: "マップ読み込み処理、不正マップのバリデーション、3D描画処理、プレイヤー移動と衝突判定、ミニマップ表示、エラー処理とメモリ管理",
    category: "ゲームプログラミング",
    scope: "42Tokyoチーム課題（3名）",
    difficulty: "High",
    technologies: [
      "C",
      "MiniLibX",
      "Makefile",
      "レイキャスティング",
      "テクスチャ描画",
      "Linux / X11",
    ],
    challenges: [
      "テキスト形式のマップファイルを解析し、壁配置・プレイヤー開始位置・床/天井色・壁画像を読み込めるようにした。",
      "マップに穴がある、プレイヤーが複数いる、壁で囲まれていないなどの不正な入力を検出し、クラッシュせず安全に終了するバリデーションを実装。",
      "2Dのマップを3Dに見せるため、レイキャスティングを実装。画面の各列ごとに壁までの距離を計算し、遠近感のある描画を実現。",
      "プレイヤーが壁をすり抜けないよう、移動先の座標と壁との当たり判定を行った。",
      "複雑なマップでも位置関係が分かるよう、ミニマップを実装した。",
    ],
    outcome:
      "テキストで作成した複数のマップを読み込み、3D空間として探索できるアプリを完成させました。壁のテクスチャ、床・天井の色、ミニマップを組み合わせることで、視覚的に分かりやすいデモに仕上げています。C言語でのファイル解析、メモリ管理、描画処理、入力処理を総合的に学び、低レイヤー寄りの実装力を高めることができました。",
    demoVideo: "/cub3d-demo.webm",
    githubUrl: "#",
  },
  {
    slug: "42-ft-irc",
    title: "42_ft_irc",
    summary:
      "IRCサーバをC++98で実装。pollベースの1スレッド非同期通信を構築。",
    description:
      "TCP を前提に、PASS/NICK/USER から JOIN/PART までを状態遷移として扱えるように設計。低レベル API を直接使う構成で、受信・送信・例外系を含めた通信基盤の整合性を意識して実装しました。バグを切り分けながら改善を重ね、仕様ベースで安定的に動く形にまで育てました。",
    period: "2025/04~07",
    role: "通信処理実装",
    category: "ネットワークサーバー",
    scope: "42Tokyoチーム課題（3名）",
    difficulty: "High",
    technologies: ["C++98", "TCP", "socket", "poll", "通信プロトコル設計"],
    challenges: [
      "スレッドを増やさず複数クライアントの接続・切断を扱う非同期処理の安定性",
      "PASS/NICK/USER の順序制約や JOIN/PART の状態遷移を崩さない実装",
      "低レベル API を直接扱う際の受信・送信境界条件とエラー時の再現性",
    ],
    outcome:
      "1スレッドの非同期通信基盤の設計〜実装を通して、ネットワーク基盤理解とプロトコル実装力を高められました。状態整合やエラーハンドリングに強いサーバ実装を目指して継続改善した点が成果として残っています。",
    githubUrl: "#",
  },
];
