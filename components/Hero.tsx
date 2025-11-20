import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Hi, I'm Utsuchim!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          XRエンジニア | AIエンジニア | WEBエンジニア | UI/UXデザイン
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          現在は、主にWeb開発とAI技術の習得に注力しています。
          モダンな技術を駆使して、ユーザーフレンドリーなアプリケーションを構築することを目指しています。
          また、XR技術にも強い関心を持っており、将来的にはXR関連のプロジェクトにも積極的に取り組んでいきたいと考えています。
          AIを活用した革新的なソリューションの開発にも挑戦中です。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            プロジェクトを見る
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-primary text-primary dark:text-white rounded-lg hover:bg-primary hover:text-white transition font-semibold"
          >
            お問い合わせ
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
