document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <div class="max-w-screen-2xl mx-auto flex justify-between items-center px-6 py-4">
            <div class="flex items-center gap-8">
                <a href="index.html" class="text-white font-black italic text-xl tracking-tighter">NADIR</a>
                <span class="mono text-[10px] text-gray-600 hidden md:block uppercase tracking-widest">// SECURE_INFRASTRUCTURE</span>
            </div>
            <div class="flex items-center gap-6 mono text-[10px] uppercase font-bold tracking-widest text-gray-400">
                <a href="architecture.html" class="hover:text-white transition-colors">02. Architecture</a>
                <a href="compliance.html" class="hover:text-white transition-colors">07. Compliance</a>
                <a href="capability.html" class="hover:text-white transition-colors">11. Capability</a>
                <a href="sitemap.html" class="text-blue-500 border border-blue-500/30 px-3 py-1 bg-blue-500/5">15. Index</a>
            </div>
        </div>
    `;

    const navContainer = document.getElementById('institutional-nav');
    if (navContainer) {
        navContainer.innerHTML = navHTML;
        navContainer.className = "w-full border-b border-[#262626] bg-black/90 backdrop-blur-md sticky top-0 z-[1000]";
    }
    
    // Also add the background grid for aesthetic
    const grid = document.createElement('div');
    grid.className = 'grid-overlay';
    document.body.appendChild(grid);
});
