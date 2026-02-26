"use client";
import { motion } from "framer-motion";

export default function PlatformPage() {
  return (
    <main className="pt-40 px-12 bg-grid-industrial min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-32 border-l-4 border-nadir-orange pl-8">
          <div className="font-mono text-[10px] text-nadir-orange uppercase tracking-[0.5em] mb-4">Deployment_Model // v1.0.4</div>
          <h1 className="font-display text-6xl uppercase tracking-tighter">Operational Integration</h1>
        </header>

        <section className="grid lg:grid-cols-2 gap-24 mb-40">
          <div>
            <h2 className="font-display text-3xl uppercase mb-12 text-slate-200">Non-Invasive Attachment</h2>
            <p className="text-slate-400 font-mono text-sm leading-relaxed mb-8 uppercase tracking-wide">
              NADIR integrates via Sidecar, Gateway, or Wrapper. Instrumentation occurs outside the core model weights, ensuring zero mutation of original AI parameters.
            </p>
            <div className="border border-nadir-border p-8 bg-black/40">
              <h4 className="font-mono text-[10px] text-nadir-orange mb-4 uppercase">Verification_Suite</h4>
              <ul className="space-y-3 font-mono text-[11px] text-slate-500 uppercase">
                <li>• Latency Overhead: &lt;12ms</li>
                <li>• Memory Footprint: Isolated</li>
                <li>• Consensus Type: Non-Custodial Signing</li>
              </ul>
            </div>
          </div>
          
          <div className="border border-nadir-border relative group overflow-hidden bg-black/60 p-12">
             <div className="font-mono text-[10px] text-slate-600 absolute top-4 right-4 uppercase">Ref_Diag_01</div>
             <h3 className="font-display text-xl uppercase mb-12">Inference Logic Flow</h3>
             <div className="space-y-6">
                {["Inference Request", "NADIR Intercept", "PCL Alignment Check", "Cryptographic Sealing", "Response Forwarding"].map((step, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <span className="text-nadir-orange font-mono text-[10px]">0{i+1}</span>
                    <div className="h-px flex-1 bg-nadir-border"></div>
                    <span className="font-mono text-[11px] uppercase tracking-widest">{step}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </div>
    </main>
  );
}
