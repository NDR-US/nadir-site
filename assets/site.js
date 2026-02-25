// /assets/site.js
(() => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a[data-page]").forEach(a => {
    a.classList.toggle("active", a.getAttribute("data-page") === path);
  });
})();
