/* /assets/site.js
GLOBAL GSAP SCROLL LOGIC — apply to every page using the template above.
- Hero pin + scrub (H1 scale + fade)
- Narrative section pin + scrub (color shift into focus)
- Subtle reveals for cards (no bounce)
- Reduced-motion safe
*/
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Nav active state (simple filename match)
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[href]').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('text-obsidian');
  });

  if (prefersReduced) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // 1) HERO: pin background + scrub H1 / lead
  const hero = document.querySelector('.nadir-hero');
  if (hero) {
    const pinLayer = hero.querySelector('.hero-pin');
    const h1 = hero.querySelector('.hero-h1');
    const lead = hero.querySelector('.hero-lead');

    // Pin the background surface
    if (pinLayer) {
      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: '+=900',
        pin: pinLayer,
        pinSpacing: true
      });
    }

    // Scrub the hero narrative (no bounce, no “elastic”)
    const tlHero = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '+=900',
        scrub: 1.2
      }
    });

    if (h1) {
      tlHero.to(h1, {
        opacity: 0,
        scale: 1.06,
        y: -18,
        ease: 'none',
        duration: 1
      }, 0);
    }

    if (lead) {
      tlHero.to(lead, {
        opacity: 0.25,
        y: -10,
        ease: 'none',
        duration: 1
      }, 0.15);
    }
  }

  // 2) Pinned narrative sections (Palantir-style)
  gsap.utils.toArray('.narrative-section').forEach(section => {
    const focal = section.querySelector('.scroll-text');
    if (!focal) return;

    // Pin each narrative block for controlled disclosure
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=900',
      pin: true,
      scrub: 1
    });

    // Text color transition as it becomes focal
    gsap.fromTo(
      focal,
      { color: 'rgba(71,85,105,0.95)' }, // slateblue-ish
      {
        color: '#EA580C',                // International Orange
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=900',
          scrub: 1
        }
      }
    );
  });

  // 3) Subtle reveal for cards and blocks (no bouncing)
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 14 }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      }
    });
  });
})();
