/* NADIR // Site Logic v2026.02.19 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Partial Injection (Header/Footer)
    async function injectPartials() {
        const headerContainer = document.querySelector('#header-injection');
        const footerContainer = document.querySelector('#footer-injection');

        if (headerContainer) {
            const resp = await fetch('assets/partials/header.html');
            headerContainer.innerHTML = await resp.text();
            highlightNav();
        }

        if (footerContainer) {
            const resp = await fetch('assets/partials/footer.html');
            footerContainer.innerHTML = await resp.text();
        }
    }

    // 2. Nav Highlighting
    function highlightNav() {
        const path = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('href') === path) {
                link.classList.add('text-[#EA580C]');
                link.classList.remove('opacity-50');
            }
        });
    }

    // 3. Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    injectPartials();
});
