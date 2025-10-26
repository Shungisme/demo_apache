import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Learning Flashcards",
  description: "Learn English with interactive flashcards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
