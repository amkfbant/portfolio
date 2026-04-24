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
    description: "",
    period: "",
    role: "",
    category: "フルスタックWebアプリ",
    scope: "42Tokyoチーム課題（4名）",
    difficulty: "Very High",
    technologies: [],
    challenges: [],
    outcome: "",
    githubUrl: "#",
  },
  {
    slug: "pseudo-crm-ai-internship",
    title: "擬似CRMシステムと生成AIへの応用",
    summary:
      "インターンシップで、顧客情報を蓄積する擬似CRMを構築し、生成AIで分析・文書作成を自動化するデモを作成しました。",
    description: "",
    period: "",
    role: "",
    category: "生成AI活用アプリケーション",
    scope: "インターン（チーム開発）",
    difficulty: "High",
    technologies: [],
    challenges: [],
    outcome: "",
    githubUrl: "#",
  },
  {
    slug: "btc-trading-system",
    title: "BTC価格予測・自動トレーディングシステム",
    summary:
      "大学の通年講義として、Python で Bitcoin の価格予測モデルと自動トレーディングを構築しました。",
    description: "",
    period: "",
    role: "",
    category: "機械学習 / 自動取引システム",
    scope: "大学通年講義（1年間）",
    difficulty: "High",
    technologies: [],
    challenges: [],
    outcome: "",
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
