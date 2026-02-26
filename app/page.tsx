"use client";
import { motion } from "framer-motion";

const steps = [
  "01 Attach Boundary", "02 Capture Policy Scope", "03 Normalize",
  "04 Canonicalize", "05 Hash & Sign", "06 Enforce Tiers", "07 Verify Independent"
];

export default function HomePage() {
  return (
    <main className="pt-64 px-12 min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        
        {/* HERO SECTION: ANDURIL STYLE */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-64"
        >
          <h1 className="font-display text-[9vw] uppercase leading-[0.82] tracking-tighter mb-16">
            The AI <br /> <span className="text-slate-800">Integrity Layer</span>
          </h1>
          <p className="text-slate-400 text-3xl md:text-5xl max-w-6xl leading-tight">
            An <span className="text-white">immutable evidence chain</span> for AI decision-support. Engineered for technical accountability via cryptographic sealing.
          </p>
        </motion.section>

        {/* DATA SECTION: PALANTIR STYLE */}
        <div className="grid lg:grid-cols-12 gap-24 border-t border-nadir-border pt-24 mb-64">
          <div className="lg:col-span-4 font-mono text-[11px] text-nadir-orange uppercase tracking-[0.6em]">
            Technical_Spec // Architecture
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl uppercase mb-16">Decoupled Mechanics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
              {steps.map((step, i) => (
                <div key={i} className="border border-nadir-border p-8 bg-white/[0.02] font-mono text-xs uppercase tracking-institutional hover:border-nadir-orange transition-all duration-300">
                  {step}
                </div>
              ))}
            </div>

            {/* FAIL-OPEN ARCHITECTURE MANDATE */}
            <div className="bg-nadir-orange/5 border border-nadir-orange/20 p-12">
              <h3 className="font-display text-2xl uppercase mb-8 text-nadir-orange">Fail-Open Mandate</h3>
              <div className="grid md:grid-cols-2 gap-12 font-mono text-[11px] text-slate-400 uppercase tracking-widest">
                <ul className="space-y-4">
                  <li className="text-white">✓ Inference Continues</li>
                  <li>✓ Failure Event Logged</li>
                </ul>
                <ul className="space-y-4">
                  <li>✓ Marked Unsealed</li>
                  <li>✓ Post-Hoc Review</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
