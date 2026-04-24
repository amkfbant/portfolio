import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "マイポートフォリオ",
  description: "ポートフォリオサイト",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="container">
          <header className="site-nav">
            <Link href="/" className="site-brand">
              Portfolio
            </Link>
            <nav className="site-links">
              <Link href="/">ホーム</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
