// Airship Games - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const open = navLinks.classList.toggle('active');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start'
        });
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // Parallax effect for hero background
  const parallaxBg = document.querySelector('.parallax-bg');
  const heroDecors = document.querySelectorAll('.hero-decor');

  if (!reduceMotion && (parallaxBg || heroDecors.length > 0)) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;

      if (parallaxBg) {
        parallaxBg.style.transform = 'translateY(' + rate + 'px)';
      }

      // Floating decorative elements move at different rates
      heroDecors.forEach(function(decor, index) {
        const speed = 0.1 + (index * 0.05);
        decor.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
      });
    });
  }

  // Add scroll effect to header
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 20px rgba(112, 66, 20, 0.25)';
    } else {
      header.style.boxShadow = '0 4px 20px rgba(112, 66, 20, 0.15)';
    }

    lastScroll = currentScroll;
  });

  // Animate elements on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe game cards, feature cards, and decorative items
  if (!reduceMotion) document.querySelectorAll('.game-card, .feature-card, .screenshot-item, .decor-item, .feature-showcase').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add CSS for animation
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // Decorative strip items staggered animation
  const decorItems = document.querySelectorAll('.decor-item');
  decorItems.forEach(function(item, index) {
    item.style.transitionDelay = (index * 0.1) + 's';
  });
});
