import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AKNOA",
  description:
    "AKNOAは、固定費管理・健康管理・生活改善をサポートする便利ツールWebアプリです。",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "AKNOA",
    description: "サブスク管理と固定費見直しのための生活改善ツール",
    siteName: "AKNOA",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
