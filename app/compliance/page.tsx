"use client";
export default function CompliancePage() {
  return (
    <main className="pt-40 px-12 min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h1 className="font-display text-7xl uppercase tracking-tighter mb-12 leading-none">Governance Gates</h1>
            <p className="text-slate-500 font-mono text-sm uppercase tracking-widest leading-relaxed">
              Alignment with statutory reporting requirements for high-stakes AI decision support.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-px bg-nadir-border border border-nadir-border">
            {[
              { label: "Ethical Use", content: "Mandatory compliance with human-in-the-loop (HITL) overrides." },
              { label: "Modern Slavery", content: "Annual statement of supply chain transparency and ethics." },
              { label: "Statutory Reporting", content: "Automated logging for serious incident reporting triggers." },
              { label: "PCL Logic", content: "Immutable versioning of all policy-as-code deployments." }
            ].map((item, i) => (
              <div key={i} className="bg-background p-12 flex justify-between group cursor-pointer hover:bg-white/[0.02]">
                <div>
                  <h4 className="font-display text-xl uppercase mb-2 group-hover:text-nadir-orange transition-colors">{item.label}</h4>
                  <p className="text-slate-500 font-mono text-[11px] uppercase">{item.content}</p>
                </div>
                <span className="font-mono text-nadir-orange opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
