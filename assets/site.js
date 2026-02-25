// /assets/site.js
gsap.registerPlugin(ScrollTrigger);

/**
 * NADIR Narrative UI — Institutional Motion Rules
 * - Pin ONLY the hero by default (prevents mobile layout jumping).
 * - Narrative headings scrub (fade/translate/color) as you scroll.
 * - Optional pinned narrative sections via data-pin="true".
 */

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function initHero() {
  const hero = document.querySelector(".nadir-hero");
  if (!hero) return;

  const h1 = hero.querySelector(".hero-h1");
  const lead = hero.querySelector(".hero-lead");
  const pinBg = hero.querySelector(".hero-pin");

  // If reduced motion: keep everything static.
  if (prefersReducedMotion()) return;

  // Pin the background surface for the duration of the hero.
  ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "bottom top",
    pin: pinBg,
    pinSpacing: false,
  });

  // Scrub the hero typography as the user scrolls through the hero.
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  tl.fromTo(
    h1,
    { opacity: 1, y: 0, scale: 1 },
    { opacity: 0, y: -18, scale: 1.04, ease: "none" },
    0
  );

  if (lead) {
    tl.fromTo(
      lead,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -10, ease: "none" },
      0
    );
  }
}

function initNarrativeSections() {
  const sections = gsap.utils.toArray(".narrative-section");
  if (!sections.length) return;

  if (prefersReducedMotion()) return;

  sections.forEach((section) => {
    const heading = section.querySelector(".scroll-text");
    const reveals = section.querySelectorAll(".reveal");

    // Scrub the section heading: slides slightly upward and fades,
    // plus color transitions as it crosses the focal region.
    if (heading) {
      gsap.fromTo(
        heading,
        { opacity: 1, y: 0, color: "rgba(71,85,105,1)" }, // slateblue-ish
        {
          opacity: 0,
          y: -14,
          color: "#EA580C", // International Orange
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 55%",
            end: "top 15%",
            scrub: 1,
          },
        }
      );

      // Bring it back (so on reverse scroll it returns cleanly)
      gsap.fromTo(
        heading,
        { opacity: 0, y: -14 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 15%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );
    }

    // Cards reveal gently, no bounce, no overshoot.
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // OPTIONAL pinning (only if you set data-pin="true")
    const wantsPin = section.getAttribute("data-pin") === "true";
    if (wantsPin) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=900",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      });
    }
  });
}

function init() {
  initHero();
  initNarrativeSections();
}

document.addEventListener("DOMContentLoaded", init);
