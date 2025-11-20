import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Eコマースサイト",
    description: "モダンなEコマースプラットフォーム。ユーザー認証、商品管理、カート機能を実装。",
    image: "/images/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    role: "フルスタック開発者",
    achievements: [
      "パフォーマンス最適化により、ページ読み込み時間を50%短縮",
      "レスポンシブデザインの実装",
      "SEO対策による検索順位の向上"
    ]
  },
  {
    id: "2",
    title: "タスク管理アプリ",
    description: "チームでのプロジェクト管理を効率化するタスク管理アプリケーション。",
    image: "/images/project2.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    role: "フロントエンド開発者",
    achievements: [
      "リアルタイム通信機能の実装",
      "ドラッグ&ドロップUIの開発",
      "ユーザーフィードバックに基づく機能改善"
    ]
  },
  {
    id: "3",
    title: "ブログプラットフォーム",
    description: "マークダウン対応のブログシステム。記事投稿、編集、コメント機能を搭載。",
    image: "/images/project3.jpg",
    technologies: ["Next.js", "TypeScript", "MDX", "Vercel"],
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveUrl: "https://blog-platform-demo.vercel.app",
    role: "フルスタック開発者",
    achievements: [
      "静的サイト生成（SSG）による高速化",
      "マークダウンエディタのカスタマイズ",
      "シンタックスハイライト機能の実装"
    ]
  },
  {
    id: "4",
    title: "天気予報アプリ",
    description: "位置情報ベースの天気予報アプリ。OpenWeatherMap APIを使用。",
    image: "/images/project4.jpg",
    technologies: ["React", "TypeScript", "OpenWeatherMap API", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app-demo.vercel.app",
    role: "フロントエンド開発者",
    achievements: [
      "位置情報の取得と活用",
      "天気データの視覚化",
      "PWA対応による オフライン機能"
    ]
  }
];
