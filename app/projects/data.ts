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
    description: "",
    period: "",
    role: "",
    category: "システムプログラミング",
    scope: "42Tokyoチーム課題（2名）",
    difficulty: "Very High",
    technologies: [],
    challenges: [],
    outcome: "",
    githubUrl: "#",
  },
  {
    slug: "42-cub3d",
    title: "42_cub3d",
    summary:
      "レイキャスティングを用いた 3D 表現ゲームを実装。レンダリングを軸にした描画処理を設計しました。",
    description: "",
    period: "",
    role: "",
    category: "ゲームプログラミング",
    scope: "42Tokyoチーム課題（3名）",
    difficulty: "High",
    technologies: [],
    challenges: [],
    outcome: "",
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
