gsap.registerPlugin(ScrollTrigger);

// Shared helper: fade/slide in "reveal" blocks
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, y: 14 },
    {
      opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    }
  );
});

// Hero: pin background + scrub H1/lead while version tag stays anchored
const hero = document.querySelector(".nadir-hero");
if (hero) {
  const h1 = hero.querySelector(".hero-h1");
  const lead = hero.querySelector(".hero-lead");
  const pin = hero.querySelector(".hero-pin");

  // Pin the background surface
  ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "+=900",
    pin: pin,
    pinSpacing: true
  });

  // Scrub the H1/lead (calm, no bounce)
  gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=900",
      scrub: 1
    }
  })
  .to(h1, { opacity: 0.12, scale: 1.06, letterSpacing: "0.14em", ease: "none" }, 0)
  .to(lead, { opacity: 0.35, y: -10, ease: "none" }, 0);
}

// Narrative sections: pin left column heading and shift focus color
gsap.utils.toArray(".narrative-section").forEach((section) => {
  const focus = section.querySelector(".scroll-text");
  if (!focus) return;

  gsap.to(focus, {
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=900",
      scrub: 1,
      pin: section.querySelector(".scroll-text"),
      pinSpacing: false
    },
    color: "#EA580C",
    ease: "none"
  });
});

// Header/footer injection (shared across pages)
async function injectPartial(id, url) {
  const host = document.getElementById(id);
  if (!host) return;
  const res = await fetch(url, { cache: "no-store" });
  host.innerHTML = await res.text();
}
injectPartial("siteHeader", "assets/partials/header.html");
injectPartial("siteFooter", "assets/partials/footer.html");
