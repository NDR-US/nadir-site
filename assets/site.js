/** * NADIR // Site Logic v2026.02.19 
 * Handles modular partial injection, animations, and operational state.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Partial Injection (Header/Footer)
    // Loads the shared navigation and boundary declaration into every page.
    async function injectPartials() {
        const headerContainer = document.querySelector('#header-injection');
        const footerContainer = document.querySelector('#footer-injection');

        if (headerContainer) {
            try {
                const response = await fetch('assets/partials/header.html');
                headerContainer.innerHTML = await response.text();
                // Re-run nav highlight after injection
                highlightActiveNav(); 
            } catch (err) {
                console.error("NADIR Error: Header injection failed.", err);
            }
        }

        if (footerContainer) {
            try {
                const response = await fetch('assets/partials/footer.html');
                footerContainer.innerHTML = await response.text();
            } catch (err) {
                console.error("NADIR Error: Footer injection failed.", err);
            }
        }
    }

    // 2. Navigation Active State
    // Marks the current page in the navigation bar for user orientation.
    function highlightActiveNav() {
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('text-[#EA580C]');
                link.classList.remove('opacity-50');
            }
        });
    }

    // 3. Scroll Reveal Observer
    // Triggers the "Institutional Proof" fade-in effect on page elements.
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Initialize
    injectPartials();
    console.log("NADIR // System State: Operational");
});
