// /assets/site.js
(() => {
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a[data-page]").forEach(a => {
    const p = (a.getAttribute("data-page") || "").toLowerCase();
    if (p === file) a.classList.add("active");
  });
})();
