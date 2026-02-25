// assets/site.js
// NADIR Institutional Motion System (GSAP + ScrollTrigger)
// - No bouncy motion. Linear-ish, calm, procurement-safe.
// - Hero pinned background, H1 scrubs (scale + fade).
// - Narrative sections pin and shift focal text color to International Orange.

gsap.registerPlugin(ScrollTrigger);

(function () {
  // Respect reduced motion
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  // HERO: pinned background + scrub headline
  const hero = document.querySelector(".nadir-hero");
  if (hero) {
    const h1 = hero.querySelector(".hero-h1");
    const lead = hero.querySelector(".hero-lead");
    const pin = hero.querySelector(".hero-pin");

    if (pin) {
      ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        end: "bottom top",
        pin: pin,
        pinSpacing: false
      });
    }

    if (h1) {
      gsap.to(h1, {
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        opacity: 0,
        scale: 1.06,
        y: -16,
        ease: "none"
      });
    }

    if (lead) {
      gsap.to(lead, {
        scrollTrigger: {
          trigger: hero,
          start: "top+=80 top",
          end: "bottom top",
          scrub: 1
        },
        opacity: 0.15,
        y: -10,
        ease: "none"
      });
    }
  }

  // NARRATIVE SECTIONS: pin left column + focus color shift for the heading
  const narrativeSections = gsap.utils.toArray(".narrative-section");
  narrativeSections.forEach((section) => {
    const focus = section.querySelector(".scroll-text");
    const leftCol = section.querySelector(".narrative-left");
    const reveals = section.querySelectorAll(".reveal");

    // Pin only when marked as narrative (avoid pinning on pure legal pages)
    const pinEnabled = section.dataset.pin === "true";

    if (pinEnabled && leftCol) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=900",
        pin: leftCol,
        pinSpacing: true
      });
    }

    if (focus) {
      gsap.fromTo(
        focus,
        { opacity: 0.45 },
        {
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 25%",
            scrub: 1
          },
          opacity: 1,
          color: "#EA580C",
          ease: "none"
        }
      );

      gsap.to(focus, {
        scrollTrigger: {
          trigger: section,
          start: "top 25%",
          end: "bottom 10%",
          scrub: 1
        },
        color: "#0A0F1E",
        ease: "none"
      });
    }

    // Calm reveals: small fade + y
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 10 },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out"
        }
      );
    });
  });
})();
