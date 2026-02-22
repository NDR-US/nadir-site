/* assets/site.js
   - active nav highlight
   - safe default for project-repo GitHub Pages paths
*/
document.addEventListener("DOMContentLoaded", () => {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll("nav a[data-page]").forEach((a) => {
    const target = (a.getAttribute("data-page") || "").toLowerCase();
    if (target === current) a.classList.add("active");
  });
});
