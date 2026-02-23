// /assets/site.js
(function(){
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('nav a[data-page]').forEach(a=>{
    const target = (a.getAttribute("data-page") || "").toLowerCase();
    if(target === page) a.classList.add("active");
  });
})();
