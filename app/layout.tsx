import type { ReactNode } from "react";
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
            <a href="/" className="site-brand">
              Portfolio
            </a>
            <nav className="site-links">
              <a href="/">ホーム</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
