document.addEventListener("DOMContentLoaded", function() {
    // 1. INJECT GLOBAL CSS (So you don't have to edit the <head>)
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'app/css/global.css'; // Path to your CSS file
    document.head.appendChild(styleLink);

    // 2. INJECT THE NAVIGATION MENU
    const navHTML = `
        <div class="max-w-screen-2xl mx-auto flex justify-between items-center px-6 py-4">
            <div class="flex items-center gap-8">
                <a href="index.html" class="text-white font-black italic text-xl tracking-tighter">NADIR</a>
                <span class="mono text-[10px] text-gray-600 hidden md:block uppercase tracking-widest">// SECURE_INFRASTRUCTURE</span>
            </div>
            <div class="flex items-center gap-6 mono text-[10px] uppercase font-bold tracking-widest text-gray-400">
                <a href="architecture.html">02. Architecture</a>
                <a href="compliance.html">07. Compliance</a>
                <a href="capability.html">11. Capability</a>
                <a href="sitemap.html" class="text-blue-500 border border-blue-500/30 px-3 py-1 bg-blue-500/5">15. Index</a>
            </div>
        </div>
    `;

    const navContainer = document.getElementById('institutional-nav');
    if (navContainer) {
        navContainer.innerHTML = navHTML;
        navContainer.className = "w-full border-b border-[#262626] bg-black/90 backdrop-blur-md sticky top-0 z-[1000]";
    }

    // 3. INJECT THE DEFENSE-GRADE GRID BACKGROUND
    const grid = document.createElement('div');
    grid.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:-1; opacity:0.05; background-image: linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px); background-size: 50px 50px;";
    document.body.appendChild(grid);
});
