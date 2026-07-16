import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Felix Hausiku — Blockchain & AI Systems Engineer",
  description:
    "Blockchain and AI systems engineer. Published blockchain-naming research (IEEE ICFT 2025), a filed Indian patent, and production systems: Predator Bot (Monad flash-loan arbitrage) and Nexus OS (institutional macro intelligence platform).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="font-mono">{children}</body>
    </html>
  );
}
