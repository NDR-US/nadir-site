"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Database, Lock, Activity, EyeOff, FileText, ChevronRight } from "lucide-react";

export default function Home() {
  const fUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="pt-32 pb-20">
      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 max-w-7xl mx-auto border-b border-border pb-20">
        <motion.div {...fUp}>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] mb-12">
            EVIDENTIARY <br /> INFRASTRUCTURE
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-6">For Autonomous Systems</p>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                AI systems increasingly influence decisions in regulated, safety-critical, and institutional environments. When those decisions are reviewed, the underlying infrastructure often produces telemetry, logs, and traces that were never designed to function as durable evidence.
              </p>
            </div>
            <div className="bg-slate-900/40 p-8 border border-border">
              <p className="font-mono text-sm text-white mb-4 uppercase">Infrastructure Gap Analysis:</p>
              <div className="space-y-2 font-mono text-xs text-slate-500">
                <p className="flex justify-between"><span>Telemetry</span> <span className="text-red-500">Describes Activity</span></p>
                <p className="flex justify-between"><span>Telemetry</span> <span className="text-red-500">Does Not Preserve Proof</span></p>
                <div className="h-px bg-border my-4" />
                <p className="text-accent">NADIR EXISTS TO ADDRESS THAT STRUCTURAL GAP.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CORE DEFINITION */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div {...fUp} className="max-w-4xl">
          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12">
            NADIR is a decoupled evidentiary layer that attaches beside inference systems and produces policy-scoped, canonical artifacts representing defined inference-time decision-state context. These artifacts are deterministically structured and cryptographically sealed to support later institutional verification without default disclosure of proprietary internals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
            <div className="border border-border p-4 flex gap-3"><ChevronRight size={12}/> No Output Evaluation</div>
            <div className="border border-border p-4 flex gap-3"><ChevronRight size={12}/> No Compliance Adjudication</div>
            <div className="border border-border p-4 flex gap-3 text-white"><ChevronRight size={12}/> Produces Records</div>
          </div>
        </motion.div>
      </section>

      {/* THE ACCOUNTABILITY GAP */}
      <section className="py-32 bg-slate-950 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div {...fUp}>
            <h2 className="text-4xl font-bold tracking-tighter mb-8 italic">THE ACCOUNTABILITY GAP</h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>Modern AI deployments optimize for throughput, latency, and availability. Accountability infrastructure is frequently secondary.</p>
              <p>When a decision is later questioned—through regulatory inquiry, internal audit, incident review, or litigation—organizations often reconstruct events from partial logs and distributed traces. Reconstruction is interpretive. It is not deterministic.</p>
              <p className="text-white font-medium italic">This is an architectural deficit, not an operational oversight.</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-px bg-border border border-border">
            {["Canonical in structure", "Explicit in capture scope", "Cryptographically sealed", "Independently verifiable"].map((item, i) => (
              <div key={i} className="bg-background p-8 font-mono text-[11px] text-accent uppercase tracking-tighter">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DECOUPLED LAYER / DISCLOSURE / AVAILABILITY */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <motion.div {...fUp} className="space-y-6">
          <h3 className="font-mono text-xs text-accent uppercase tracking-widest">Decoupled Verification</h3>
          <p className="text-sm text-slate-400 leading-relaxed">NADIR captures only what policy defines, normalizes context into a stable schema, and seals for tamper-evidence. Verification confirms integrity and provenance, not correctness of output. Separation ensures evidence infrastructure remains independent from decision authority.</p>
        </motion.div>

        <motion.div {...fUp} className="space-y-6 border-l border-border pl-12">
          <h3 className="font-mono text-xs text-accent uppercase tracking-widest">Constrained Disclosure</h3>
          <p className="text-sm text-slate-400 leading-relaxed">Structured to enable tiered disclosure. Integrity may be validated without revealing proprietary architecture or confidential model weights. Disclosure boundaries are explicit rather than implied.</p>
        </motion.div>

        <motion.div {...fUp} className="space-y-6 border-l border-border pl-12">
          <h3 className="font-mono text-xs text-accent uppercase tracking-widest">Availability by Design</h3>
          <p className="text-sm text-slate-400 leading-relaxed">No default operational dependency that halts inference. Sealing failures may be logged and flagged without interrupting inference unless configured otherwise. Availability remains an institutional decision.</p>
        </motion.div>
      </section>

      {/* INSTITUTIONAL POSITION (FOOTER BLOCK) */}
      <section className="py-32 border-t border-border bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div {...fUp}>
              <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-6">Institutional Position</h4>
              <p className="text-4xl font-bold tracking-tighter leading-none mb-10 text-white">NADIR IS INFRASTRUCTURE. <br /> IT IS NOT ADJUDICATION.</p>
              <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-600 uppercase">
                <span>• No Certification of Regulatory Compliance</span>
                <span>• No Guarantee of Admissibility</span>
                <span>• No Determination of Fairness</span>
              </div>
            </motion.div>
            <div className="flex flex-col justify-end">
              <div className="border border-border p-10 space-y-6 bg-slate-900/20">
                <p className="text-sm text-slate-400">Authorized institutions and regulated operators retain responsibility for determinations. NADIR provides the record. Institutions provide the oversight.</p>
                <button className="w-full bg-white text-black font-mono font-bold py-4 text-xs tracking-widest hover:bg-accent transition-colors">
                  [ REQUEST_SPECIFICATION ]
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
