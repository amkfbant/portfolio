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
          {children}
        </div>
      </body>
    </html>
  );
}
