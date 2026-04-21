/* â”€â”€ Mobile menu toggle â”€â”€ */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.nav__mobile-link, .nav__mobile-cta').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* â”€â”€ Active nav link on scroll â”€â”€ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  const onScroll = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 80) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* â”€â”€ Scroll reveal â”€â”€ */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));

  /* â”€â”€ Content tabs â”€â”€ */
  function setTab(el) {
    document.querySelectorAll('.content__tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }