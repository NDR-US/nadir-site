import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "NADIR | AI Integrity Layer",
  description: "Immutable evidence chain for high-stakes AI support systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-background text-white antialiased">
        <nav className="fixed top-0 w-full z-[100] backdrop-blur-xl border-b border-nadir-border bg-black/40 h-24 flex items-center px-12">
          <div className="w-full max-w-[1600px] mx-auto flex justify-between items-center">
            <div className="font-display text-2xl tracking-institutional font-medium">NADIR</div>
            <div className="hidden md:flex gap-12 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
              <a href="/platform" className="hover:text-white transition-colors">Platform</a>
              <a href="/trust" className="hover:text-white transition-colors">Trust_Center</a>
              <a href="/compliance" className="hover:text-white transition-colors">Compliance</a>
            </div>
            <div className="font-mono text-[10px] text-nadir-orange border border-nadir-orange/30 px-4 py-2">
              OP_STATUS: 2026.02.19_ACTIVE
            </div>
          </div>
        </nav>
        {children}
        <footer className="mt-60 border-t border-nadir-border py-24 px-12 bg-black">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-nadir-orange font-mono text-[11px] uppercase tracking-[0.5em] mb-8 border-b border-nadir-border pb-4">
              Statutory Boundary Declaration
            </div>
            <p className="font-mono text-[12px] text-slate-500 uppercase leading-relaxed max-w-4xl">
              NADIR is a project of Brian Covarrubias. This system provides technical artifacts for oversight and does not constitute legal advice. PCL Framework Version 2026.02.19.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
