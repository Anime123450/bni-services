/* ========================================
   BNI Services - Main JavaScript
   ======================================== */

/* --- Page Loader --- */
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 400);
    }, 600);
  }
});

/* --- Navbar Scroll Effect --- */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
    backToTop?.classList.add('visible');
  } else {
    navbar?.classList.remove('scrolled');
    backToTop?.classList.remove('visible');
  }
});

/* --- Hamburger Menu --- */
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
  document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
});

/* Close mobile menu on link click */
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* --- Back to Top --- */
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* --- Active Nav Link --- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, #mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* --- Scroll Reveal Animation --- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* --- Counter Animation --- */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => {
  counterObserver.observe(el);
});

/* --- Testimonial Slider --- */
const track = document.getElementById('testimonials-track');
const dots = document.querySelectorAll('.t-dot');
const prevBtn = document.getElementById('t-prev');
const nextBtn = document.getElementById('t-next');

if (track) {
  const cards = track.querySelectorAll('.testimonial-card');
  let current = 0;
  let cardsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  let total = Math.ceil(cards.length / cardsPerView);
  let autoplayTimer;

  function getCardWidth() {
    return cards[0]?.offsetWidth || 0;
  }

  function goTo(index) {
    current = ((index % total) + total) % total;
    const cardWidth = getCardWidth();
    const gap = 24;
    const offset = current * (cardWidth + gap) * cardsPerView;
    track.style.transform = `translateX(-${current * (100 / cardsPerView)}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goToPercent(index) {
    current = ((index % total) + total) % total;
    const pct = (current * 100) / cardsPerView;
    track.style.transform = `translateX(-${current * (100 / 3)}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  // Simpler approach — move by percentage of container width
  function slide(index) {
    current = ((index % total) + total) % total;
    const slideWidth = 100 / cardsPerView;
    track.style.transform = `translateX(-${current * (slideWidth * cardsPerView)}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  // Actually use a container-based approach
  const sliderWrap = document.querySelector('.testimonials-slider');
  function slideToIndex(idx) {
    current = ((idx % total) + total) % total;
    if (!sliderWrap) return;
    const wrapWidth = sliderWrap.offsetWidth;
    const gapPx = 24;
    const cardW = (wrapWidth - gapPx * (cardsPerView - 1)) / cardsPerView;
    const offset = current * (cardW + gapPx) * cardsPerView;
    track.style.transform = `translateX(-${offset}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => slideToIndex(current + 1), 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  prevBtn?.addEventListener('click', () => { slideToIndex(current - 1); startAutoplay(); });
  nextBtn?.addEventListener('click', () => { slideToIndex(current + 1); startAutoplay(); });

  dots.forEach((d, i) => {
    d.addEventListener('click', () => { slideToIndex(i); startAutoplay(); });
  });

  // Touch/swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      slideToIndex(diff > 0 ? current + 1 : current - 1);
      startAutoplay();
    }
  });

  window.addEventListener('resize', () => {
    cardsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    total = Math.ceil(cards.length / cardsPerView);
    current = 0;
    slideToIndex(0);
  });

  slideToIndex(0);
  startAutoplay();
}

/* --- Contact Form Handler --- */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Sending...';
  btn.disabled = true;

  setTimeout(() => {
    contactForm.style.display = 'none';
    if (formSuccess) formSuccess.style.display = 'block';
  }, 1500);
});

/* --- Sidebar Form Handler --- */
const sidebarForm = document.getElementById('sidebar-form');
sidebarForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = sidebarForm.querySelector('[type="submit"]');
  btn.innerHTML = '✓ Request Sent!';
  btn.style.background = 'var(--success)';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = 'Request Callback';
    btn.style.background = '';
    btn.disabled = false;
    sidebarForm.reset();
  }, 3000);
});

/* --- Smooth Hover on Service Cards --- */
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.willChange = 'transform';
  });
  card.addEventListener('mouseleave', function() {
    this.style.willChange = 'auto';
  });
});

/* --- Initialize on DOM ready --- */
document.addEventListener('DOMContentLoaded', () => {
  // Trigger reveals already in viewport
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.classList.add('visible');
    }
  });
});
