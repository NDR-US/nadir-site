(function () {
  // Active nav highlighting based on current path
  try {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("nav a").forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === path) a.classList.add("active");
      else a.classList.remove("active");
    });
  } catch (e) {}

  // Prevent accidental “#” anchors from jumping if you later add placeholders
  document.querySelectorAll('a[href="#"]').forEach(a => {
    a.addEventListener("click", (ev) => ev.preventDefault());
  });
})();
