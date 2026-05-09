// ===== ALEXIS OBI — SHARED JAVASCRIPT =====

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  // Keyboard support for hamburger
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hamburger.click();
    }
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  const mobileNavClose = document.getElementById('mobile-nav-close');
  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
}

// Header shrink on scroll
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Scroll reveal animations
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// Lightbox for Gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (lightbox && lightboxImg && img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxClose) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });
}

// Escape key closes lightbox and mobile nav
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (lightbox && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (mobileNav && mobileNav.classList.contains('open')) {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
});

// Blog filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const postCards = document.querySelectorAll('.post-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    const category = btn.dataset.filter;

    postCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Active nav link highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
