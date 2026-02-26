/** * NADIR Site Logic v2026.02.19 
 * Handles scroll reveals and operational UI logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Observer
    const revealOptions = { threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, revealOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Navigation Active State
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = "var(--nadir-orange)";
            link.classList.remove('opacity-50');
        }
    });

    // 3. Simple Log for Verification (Ops Console)
    console.log("NADIR // Session Initialized: " + new Date().toISOString());
});
