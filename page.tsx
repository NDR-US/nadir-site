"use client";
import { useParams } from "next/navigation";
import { docsData } from "../../data/docsData";
import { motion } from "framer-motion";

export default function DynamicDocPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = docsData[slug as keyof typeof docsData];

  if (!data) return <div className="pt-40 text-center font-mono">DOCUMENT_NOT_FOUND</div>;

  return (
    <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-mono text-xs text-accent tracking-[0.4em] uppercase mb-4 block">
          {data.subtitle}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase italic">
          {data.title}
        </h1>
        
        {/* This "white-space: pre-line" ensures your line breaks stay exactly as you pasted them */}
        <div className="text-slate-400 leading-relaxed text-lg whitespace-pre-line border-l border-border pl-8">
          {data.content}
        </div>

        <footer className="mt-20 pt-10 border-t border-border font-mono text-[10px] text-slate-600 uppercase">
          Institutional Record // Nadir Systems // Confidential Review Tier
        </footer>
      </motion.div>
    </main>
  );
}
