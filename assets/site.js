// assets/site.js
(() => {
  // Highlight active nav link based on current pathname.
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll("nav a[data-page]").forEach((a) => {
    const page = (a.getAttribute("data-page") || "").toLowerCase();
    if (page === path) a.classList.add("active");
  });

  // Make the brand area click to home.
  const brand = document.querySelector(".brand");
  if (brand) {
    brand.style.cursor = "pointer";
    brand.addEventListener("click", () => {
      location.href = "index.html";
    });
  }
})();
