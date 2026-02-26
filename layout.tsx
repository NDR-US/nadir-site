import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NADIR | Evidentiary Infrastructure",
  description: "Evidence infrastructure for autonomous systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased selection:bg-accent/30">
        <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-accent" />
              <span className="font-bold">NADIR</span>
            </div>
            <div className="flex gap-8 text-slate-500">
              <span className="text-accent underline decoration-accent/30 underline-offset-4">V2026.02.19</span>
              <button className="hover:text-white transition-colors">[ ACCESS_FRAMEWORK ]</button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
