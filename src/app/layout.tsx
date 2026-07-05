import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://aknoa.vercel.app"),

  verification: {
    google: "GDM-OXt80OExZSfRu7mhqXPOX6ZiPWzrt2tdurbrATs",
  },

  title: "AKNOA",
  description:
    "AKNOAは、固定費管理・健康管理・生活改善をサポートする便利ツールWebアプリです。",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "AKNOA",
    description:
      "サブスク管理・固定費の見直し・健康管理をひとつにまとめた生活改善ツール",
    siteName: "AKNOA",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AKNOA",
    description:
      "サブスク管理・固定費の見直し・健康管理をひとつにまとめた生活改善ツール",
    images: ["/opengraph-image.png"],
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
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-XR701WQZQV" />
      </body>
    </html>
  );
}
