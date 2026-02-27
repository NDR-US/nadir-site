/* =========================================================
   CEYO / NADIR — Shared motion + spotlight + UX
   ========================================================= */

(function(){
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Enable custom cursor only on fine pointers (desktop)
  const isFinePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
  const cursor = document.getElementById('cursorDot');
  const spotlight = document.getElementById('spotlight');

  if (isFinePointer && cursor && spotlight){
    document.body.classList.add('has-cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      spotlight.style.background =
        `radial-gradient(circle 280px at ${e.clientX}px ${e.clientY}px, rgba(255,255,240,.06) 0%, transparent 70%)`;
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      spotlight.style.background = 'none';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });

    // Hover enlarge
    const hoverables = document.querySelectorAll('a, button, .card, .pill, [data-hover]');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', ()=> cursor.classList.add('hover'));
      el.addEventListener('mouseleave', ()=> cursor.classList.remove('hover'));
    });
  }

  // Active nav highlighting based on current file
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a, .indexbar a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });

  // Reveal/focus on scroll
  const revealEls = document.querySelectorAll('.reveal');
  if (!prefersReduced && revealEls.length){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(ent=>{
        if(ent.isIntersecting){
          ent.target.classList.add('visible');
          // focus while intersecting
          ent.target.classList.add('focus');
        } else {
          ent.target.classList.remove('focus');
        }
      });
    }, { threshold: 0.10 });

    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // Typewriter for marked titles
  const tw = document.querySelectorAll('[data-typewrite="1"]');
  if (!prefersReduced && tw.length){
    const twObs = new IntersectionObserver((entries)=>{
      entries.forEach(ent=>{
        if(ent.isIntersecting && !ent.target.dataset.typed){
          ent.target.dataset.typed = '1';
          const txt = ent.target.textContent;
          ent.target.textContent = '';
          ent.target.classList.add('typewrite');

          let i = 0;
          const iv = setInterval(()=>{
            ent.target.textContent += txt[i] || '';
            i++;
            if(i >= txt.length){
              clearInterval(iv);
              ent.target.classList.remove('typewrite');
            }
          }, 18);
        }
      });
    }, { threshold: 0.55 });

    tw.forEach(el => twObs.observe(el));
  }

  // Touch highlight for cards (mobile)
  document.querySelectorAll('.card, .pill').forEach(el=>{
    el.addEventListener('touchstart', ()=>{
      el.style.background = 'rgba(255,255,240,.06)';
      el.style.borderColor = 'rgba(255,255,240,.18)';
    }, {passive:true});
    el.addEventListener('touchend', ()=>{
      setTimeout(()=>{
        el.style.background = '';
        el.style.borderColor = '';
      }, 160);
    }, {passive:true});
  });
})();
