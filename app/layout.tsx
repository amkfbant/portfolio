import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built on Next.js and GitHub Pages.",
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
