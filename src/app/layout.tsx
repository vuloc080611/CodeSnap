import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeSnap – Tạo ảnh code đẹp",
  description: "Self‑hosted alternative to carbon.now.sh. Create beautiful code screenshots instantly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
