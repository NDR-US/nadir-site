/* NADIR site JS: highlight active nav item (no animations, no wobble) */
(function () {
  const path = (window.location.pathname || '').split('/').pop() || 'index.html';
  const links = document.querySelectorAll('nav a[data-page]');
  links.forEach(a => {
    if (a.getAttribute('data-page') === path) a.classList.add('active');
  });
})();
