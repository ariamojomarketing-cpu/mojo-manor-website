/* ============================================================
   MOJO MANOR — Interactive Scripts
   ============================================================ */

(function () {
  'use strict';

  // ── DOM References ──────────────────────────────────────
  const header     = document.getElementById('siteHeader');
  const navToggle  = document.getElementById('navToggle');
  const mobileNav  = document.getElementById('mobileNav');
  const stickyCta  = document.getElementById('stickyCta');
  const lightbox   = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const contactForm = document.getElementById('contactForm');

  // ── Header scroll state ─────────────────────────────────
  let lastScroll = 0;
  const SCROLL_THRESHOLD = 80;

  function onScroll() {
    const y = window.scrollY;

    // Header background
    if (y > SCROLL_THRESHOLD) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Sticky CTA visibility (show after hero)
    if (stickyCta) {
      const heroBottom = document.getElementById('hero')?.offsetHeight || 600;
      if (y > heroBottom) {
        stickyCta.classList.add('visible');
        stickyCta.setAttribute('aria-hidden', 'false');
      } else {
        stickyCta.classList.remove('visible');
        stickyCta.setAttribute('aria-hidden', 'true');
      }
    }

    lastScroll = y;
  }

  // Scroll progress bar
  var scrollBar = document.getElementById('scrollBar');
  function updateScrollProgress() {
    if (!scrollBar) return;
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    scrollBar.style.width = pct.toFixed(1) + '%';
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  onScroll(); // Initial state
  updateScrollProgress();

  // ── Mobile Navigation ───────────────────────────────────
  function toggleMobileNav() {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('active');
    mobileNav.setAttribute('aria-hidden', String(isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  navToggle.addEventListener('click', toggleMobileNav);

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (mobileNav.classList.contains('active')) {
        toggleMobileNav();
      }
    });
  });

  // ── Lightbox Gallery ────────────────────────────────────
  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;

  function getGalleryImages() {
    return Array.from(galleryItems).map(function (item) {
      var img = item.querySelector('img');
      return {
        src: img.src.replace(/w=\d+/, 'w=1600'),
        alt: img.alt
      };
    });
  }

  function openLightbox(index) {
    var images = getGalleryImages();
    currentIndex = index;
    lightboxImg.src = images[index].src;
    lightboxImg.alt = images[index].alt;
    lightboxCounter.textContent = (index + 1) + ' / ' + images.length;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    galleryItems[currentIndex]?.focus();
  }

  function navigateLightbox(dir) {
    var images = getGalleryImages();
    currentIndex = (currentIndex + dir + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
    lightboxCounter.textContent = (currentIndex + 1) + ' / ' + images.length;
  }

  galleryItems.forEach(function (item, i) {
    item.addEventListener('click', function () { openLightbox(i); });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(i);
      }
    });
  });

  if (lightbox) {
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', function () { navigateLightbox(-1); });
    lightbox.querySelector('.lightbox-next').addEventListener('click', function () { navigateLightbox(1); });

    // Close on backdrop click
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }

  // ── Scroll Reveal (IntersectionObserver) ────────────────
  // Note: .guide-category (large container) is intentionally excluded —
  // animating a parent container hides its children even after items get .visible
  var revealElements = document.querySelectorAll(
    '.section-header, .amenity-card-featured, .amenity-item, .gallery-item, ' +
    '.room-card, .review-card, .location-item, .booking-detail, .faq-item, ' +
    '.intro-text, .intro-img, .booking-info, .booking-form-wrap, .location-text, .location-map, ' +
    '.guide-item, .guide-category-header'
  );

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net: force-reveal anything still hidden after 2s
    setTimeout(function () {
      revealElements.forEach(function (el) {
        el.classList.add('visible');
      });
    }, 2000);
  } else {
    // Fallback: just show everything
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Smooth scroll for anchor links ──────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Contact Form ────────────────────────────────────────
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic client-side validation
      var name    = document.getElementById('formName');
      var email   = document.getElementById('formEmail');
      var checkin = document.getElementById('formCheckin');
      var checkout = document.getElementById('formCheckout');
      var guests  = document.getElementById('formGuests');

      var valid = true;
      [name, email, checkin, checkout, guests].forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = '#e74c3c';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      // Email format check
      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = '#e74c3c';
        valid = false;
      }

      if (!valid) return;

      // Simulate submission (replace with real endpoint)
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(function () {
        submitBtn.textContent = 'Inquiry Sent!';
        submitBtn.style.background = '#2ecc71';
        submitBtn.style.borderColor = '#2ecc71';

        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.style.borderColor = '';
          submitBtn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1200);
    });

    // Clear validation on input
    contactForm.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        this.style.borderColor = '';
      });
    });
  }

  // ── Set min dates on date inputs ────────────────────────
  var today = new Date().toISOString().split('T')[0];
  var checkinInput  = document.getElementById('formCheckin');
  var checkoutInput = document.getElementById('formCheckout');

  if (checkinInput)  checkinInput.min = today;
  if (checkoutInput) checkoutInput.min = today;

  if (checkinInput && checkoutInput) {
    checkinInput.addEventListener('change', function () {
      var next = new Date(this.value);
      next.setDate(next.getDate() + 1);
      checkoutInput.min = next.toISOString().split('T')[0];
      if (checkoutInput.value && checkoutInput.value <= this.value) {
        checkoutInput.value = '';
      }
    });
  }

})();
