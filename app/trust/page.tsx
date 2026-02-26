"use client";
const assets = [
  { title: "VDP", desc: "Vulnerability Disclosure Protocol", status: "Public" },
  { title: "SBOM", desc: "Software Bill of Materials (Transparency)", status: "Active" },
  { title: "KMS", desc: "Non-Custodial Key Custody Declaration", status: "Verified" },
  { title: "PCL Framework", desc: "Policy-as-Code Logic Versioning", status: "v2026.02" }
];

export default function TrustCenter() {
  return (
    <main className="pt-40 px-12 min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="font-display text-7xl uppercase tracking-tighter mb-24">Trust Infrastructure</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-nadir-border border border-nadir-border mb-40">
          {assets.map((asset, i) => (
            <div key={i} className="bg-background p-10 hover:bg-nadir-orange/[0.02] transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[10px] text-nadir-orange tracking-widest uppercase">{asset.status}</span>
                <div className="w-2 h-2 bg-nadir-orange animate-pulse"></div>
              </div>
              <h3 className="font-display text-2xl uppercase mb-4">{asset.title}</h3>
              <p className="text-slate-500 font-mono text-[11px] uppercase leading-relaxed">{asset.desc}</p>
            </div>
          ))}
        </div>
        
        <section className="border border-nadir-border p-16 bg-white/[0.01]">
          <h3 className="font-display text-2xl uppercase mb-8">Cryptographic Integrity</h3>
          <p className="text-slate-400 font-mono text-sm max-w-3xl mb-12 uppercase tracking-wide">
            NADIR utilizes a dual-signature model. All artifacts are hashed via SHA-256 and signed with ECDSA P-256. 
            Verification can be performed independently of the NADIR environment.
          </p>
          <button className="bg-white text-black font-mono text-[10px] uppercase tracking-[0.3em] px-8 py-4 hover:bg-nadir-orange hover:text-white transition-all">
            Download_Specs_PDF
          </button>
        </section>
      </div>
    </main>
  );
}
