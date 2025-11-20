import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポートフォリオサイト",
  description: "個人のスキルや実績を紹介するポートフォリオサイト",
  keywords: ["ポートフォリオ", "Web開発", "エンジニア"],
  authors: [{ name: "utsuchim" }],
  openGraph: {
    title: "ポートフォリオサイト",
    description: "個人のスキルや実績を紹介するポートフォリオサイト",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
