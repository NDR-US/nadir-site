(function () {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav a[data-page]').forEach(a => {
    const p = (a.getAttribute('data-page') || '').toLowerCase();
    if (p === path) a.classList.add('active');
  });

  window.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.page');
    if (page) requestAnimationFrame(() => page.classList.add('ready'));
  });

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const isInternalPage = href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('mailto:');
    if (!isInternalPage) return;

    e.preventDefault();
    const page = document.querySelector('.page');
    if (!page) return (location.href = href);
    page.classList.remove('ready');
    setTimeout(() => (location.href = href), 180);
  });

  const targets = Array.from(document.querySelectorAll('section, .card, .pill, .callout'))
    .filter(el => !el.classList.contains('no-reveal'));
  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) ent.target.classList.add('on');
    });
  }, { threshold: 0.08 });

  targets.forEach(el => io.observe(el));
})();
