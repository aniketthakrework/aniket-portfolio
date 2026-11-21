import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniket Thakre | Senior Software Engineer",
  description: "Portfolio of Aniket Thakre, a senior software engineer building scalable backend systems across fintech and telecommunications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
