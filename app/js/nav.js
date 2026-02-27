// app/js/nav.js

(function () {
  const root = document.documentElement;

  // ---------- Spotlight tracking ----------
  const onMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    root.style.setProperty("--mx", `${x}%`);
    root.style.setProperty("--my", `${y}%`);
  };
  window.addEventListener("mousemove", onMove, { passive: true });

  // Touch: set spotlight to touch point once
  window.addEventListener("touchstart", (e) => {
    const t = e.touches && e.touches[0];
    if (!t) return;
    const x = (t.clientX / window.innerWidth) * 100;
    const y = (t.clientY / window.innerHeight) * 100;
    root.style.setProperty("--mx", `${x}%`);
    root.style.setProperty("--my", `${y}%`);
  }, { passive: true });

  // ---------- Reveal on scroll ----------
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add("is-in");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );
  reveals.forEach((el) => io.observe(el));

  // ---------- “Active” section glow (hover + tap) ----------
  const sections = Array.from(document.querySelectorAll(".section"));
  sections.forEach((sec) => {
    sec.addEventListener("click", () => {
      sections.forEach((s) => s.classList.remove("is-active"));
      sec.classList.add("is-active");
    });
  });

  // ---------- Type-on for explicit lines only ----------
  const typeTargets = Array.from(document.querySelectorAll("[data-type]"));
  typeTargets.forEach((el) => {
    // Expect a single line element inside with class type-line
    const line = el.querySelector(".type-line");
    if (!line) return;

    // Configure duration/steps from attributes
    const dur = el.getAttribute("data-type-dur") || "1.6s";
    const steps = el.getAttribute("data-type-steps") || "42";
    line.style.setProperty("--tDur", dur);
    line.style.setProperty("--tSteps", steps);

    const typeIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) line.classList.add("is-typed");
      });
    }, { threshold: 0.6 });

    typeIO.observe(el);
  });
})();
