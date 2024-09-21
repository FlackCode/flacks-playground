import type { Metadata } from "next";
import "./globals.css";

import { Press_Start_2P } from "next/font/google"

const pressStart = Press_Start_2P({
  subsets:['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: "Flack's Playground",
  description: "A retro themed OS-Like App.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${pressStart.className}`}
      >
        {children}
      </body>
    </html>
  );
}
