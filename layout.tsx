// app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "NADIR | AI Integrity Layer",
  description: "Immutable evidence chain for AI decision-support systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" class="bg-[#05070a] text-white">
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        {/* Cinematic Backdrop Blur Nav */}
        <nav className="fixed top-0 inset-x-0 z-[100] h-20 border-b border-white/10 backdrop-blur-md bg-black/40">
          <div className="max-w-[1600px] mx-auto h-full px-8 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <span className="font-display text-xl font-medium tracking-[0.5em]">NADIR</span>
              <div className="hidden md:flex gap-8 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                <a href="/architecture" className="hover:text-white transition-colors">Architecture</a>
                <a href="/trust" className="hover:text-white transition-colors">Trust_Center</a>
                <a href="/compliance" className="hover:text-white transition-colors">Compliance</a>
              </div>
            </div>
            <div className="font-mono text-[9px] text-[#EA580C] border border-[#EA580C]/30 px-3 py-1">
              SYSTEM_STATUS: OPERATIONAL
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
