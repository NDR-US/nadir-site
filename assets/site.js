<!-- /assets/site.js
GLOBAL GSAP SCROLL LOGIC (Palantir-style scrub + pin)
Applies to:
- .nadir-hero (pins background + scrubs hero text)
- .narrative-section (pins left column focus text + reveals right-column cards)
No bounce. No elastic. Procurement-safe motion.
-->
<script>
  (function () {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Respect reduced motion
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    // HERO: pin background while scrubbing headline + lead
    const hero = document.querySelector(".nadir-hero");
    if (hero) {
      const h1 = hero.querySelector(".hero-h1");
      const lead = hero.querySelector(".hero-lead");
      const version = hero.querySelector(".hero-version");
      const pinBg = hero.querySelector(".hero-pin");

      if (pinBg) {
        ScrollTrigger.create({
          trigger: hero,
          start: "top top",
          end: "+=1200",
          pin: pinBg,
          pinSpacing: false
        });
      }

      if (h1) {
        gsap.to(h1, {
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=900",
            scrub: 1
          },
          opacity: 0,
          y: -24,
          scale: 1.04,
          ease: "none"
        });
      }

      if (lead) {
        gsap.to(lead, {
          scrollTrigger: {
            trigger: hero,
            start: "top+=120 top",
            end: "+=900",
            scrub: 1
          },
          opacity: 0,
          y: -10,
          ease: "none"
        });
      }

      if (version) {
        gsap.fromTo(
          version,
          { opacity: 0.85 },
          {
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "+=900",
              scrub: 1
            },
            opacity: 1,
            ease: "none"
          }
        );
      }
    }

    // NARRATIVE SECTIONS: pin the left column and gently focus the h2 color
    const sections = gsap.utils.toArray(".narrative-section");
    sections.forEach((section) => {
      const focus = section.querySelector(".scroll-text");
      const pinCol = section.querySelector(".pin-col");
      const reveals = section.querySelectorAll(".reveal");

      // Pin the left column so the narrative holds while the right side scrolls.
      if (pinCol) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=1100",
          pin: pinCol,
          pinSpacing: true
        });
      }

      // Focus transition (slate -> obsidian -> orange accent at focal point)
      if (focus) {
        gsap.to(focus, {
          scrollTrigger: {
            trigger: section,
            start: "top+=120 top",
            end: "+=900",
            scrub: 1
          },
          color: "#0A0F1E",
          ease: "none"
        });

        gsap.to(focus, {
          scrollTrigger: {
            trigger: section,
            start: "top+=420 top",
            end: "+=500",
            scrub: 1
          },
          color: "#EA580C",
          ease: "none"
        });
      }

      // Reveal cards (subtle)
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%"
            }
          }
        );
      });
    });
  })();
</script>
