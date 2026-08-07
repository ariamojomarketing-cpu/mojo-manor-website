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
      if (y > 300) {
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
    '.guide-item, .guide-category-header, .blog-card'
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

// ── Mojo Manor 3D Medallion (Three.js + GSAP scroll) ──────────────────────
(function () {
  function initMedallion() {
    if (typeof THREE === 'undefined') return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    var canvas    = document.getElementById('medallionCanvas');
    var medallion = document.getElementById('heroMedallion');
    var navLogo   = document.querySelector('.logo-img');
    var shadow    = medallion ? medallion.querySelector('.hero-medallion-shadow') : null;

    if (!canvas || !medallion) return;

    // ── Three.js Scene Setup ──────────────────────────────────
    var size = 180;
    var dpr  = Math.min(window.devicePixelRatio, 2);

    var renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(dpr);
    renderer.outputEncoding = THREE.sRGBEncoding;

    var scene  = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 4.2;

    // ── Lighting ──────────────────────────────────────────────
    // Key light — warm gold highlight from upper-right
    var keyLight = new THREE.DirectionalLight(0xfff4e0, 1.4);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    // Fill light — soft cool from left
    var fillLight = new THREE.DirectionalLight(0xc8d8ff, 0.5);
    fillLight.position.set(-4, 1, 3);
    scene.add(fillLight);

    // Rim light — behind and below for edge glow
    var rimLight = new THREE.DirectionalLight(0xffd080, 0.7);
    rimLight.position.set(0, -3, -4);
    scene.add(rimLight);

    // Ambient — lift shadows and let colors show
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    // ── Medallion Geometry ────────────────────────────────────
    // Thick cylinder for the disc body
    var radius     = 1.35;
    var thickness  = 0.18;
    var segments   = 64;

    var discGeo = new THREE.CylinderGeometry(radius, radius, thickness, segments);
    // Rotate so the flat face points at camera (cylinder default is Y-up)
    discGeo.rotateX(Math.PI / 2);

    // Gold metallic material for the rim/edge
    var goldMat = new THREE.MeshStandardMaterial({
      color:      0xd4a840,
      metalness:  0.85,
      roughness:  0.28,
      emissive:   0x1a0f00,
      emissiveIntensity: 0.15
    });

    var disc = new THREE.Mesh(discGeo, goldMat);
    scene.add(disc);

    // ── Logo as Embossed Relief on Both Faces ───────────────────
    // Converts the logo into a gold-toned bump-mapped coin face
    var logoImg = new Image();
    logoImg.onload = function () {
      var texSize = 512;

      // ── Step 1: Draw logo onto canvas and extract pixel data ──
      var srcCanvas = document.createElement('canvas');
      srcCanvas.width = texSize;
      srcCanvas.height = texSize;
      var srcCtx = srcCanvas.getContext('2d');
      srcCtx.drawImage(logoImg, 0, 0, texSize, texSize);
      var srcData = srcCtx.getImageData(0, 0, texSize, texSize);
      var pixels = srcData.data;

      // ── Step 2: Create color map ──
      // Original logo colors where opaque, gold where transparent (negative space)
      var colorCanvas = document.createElement('canvas');
      colorCanvas.width = texSize;
      colorCanvas.height = texSize;
      var colorCtx = colorCanvas.getContext('2d');
      var colorImg = colorCtx.createImageData(texSize, texSize);
      var cd = colorImg.data;

      // Gold fill for negative space
      var goldR = 212, goldG = 168, goldB = 64;

      for (var i = 0; i < pixels.length; i += 4) {
        var a = pixels[i + 3] / 255;
        if (a > 0.1) {
          // Opaque: keep original logo color
          cd[i]     = pixels[i];
          cd[i + 1] = pixels[i + 1];
          cd[i + 2] = pixels[i + 2];
        } else {
          // Transparent: gold fill
          cd[i]     = goldR;
          cd[i + 1] = goldG;
          cd[i + 2] = goldB;
        }
        cd[i + 3] = 255;
      }
      colorCtx.putImageData(colorImg, 0, 0);

      // ── Step 3: Create bump map (height map) ──
      // Opaque design areas = raised (white), transparent = flat (dark grey)
      // Also use edge detection for sharper relief lines
      var bumpCanvas = document.createElement('canvas');
      bumpCanvas.width = texSize;
      bumpCanvas.height = texSize;
      var bumpCtx = bumpCanvas.getContext('2d');
      var bumpImg = bumpCtx.createImageData(texSize, texSize);
      var bd = bumpImg.data;

      for (var i = 0; i < pixels.length; i += 4) {
        var a = pixels[i + 3] / 255;
        // Height: opaque = raised (white), transparent = base (black)
        var height = Math.round(a * 255);
        bd[i] = bd[i + 1] = bd[i + 2] = height;
        bd[i + 3] = 255;
      }

      // Edge enhancement: detect alpha transitions for crisp relief edges
      var edgeData = bumpCtx.createImageData(texSize, texSize);
      var ed = edgeData.data;
      for (var y = 1; y < texSize - 1; y++) {
        for (var x = 1; x < texSize - 1; x++) {
          var idx = (y * texSize + x) * 4;
          var left  = pixels[idx - 4 + 3];
          var right = pixels[idx + 4 + 3];
          var up    = pixels[idx - texSize * 4 + 3];
          var down  = pixels[idx + texSize * 4 + 3];
          var edge  = Math.min(255, Math.abs(right - left) + Math.abs(down - up));
          // Boost the bump at edges
          var base = bd[idx];
          var boosted = Math.min(255, base + edge * 1.2);
          ed[idx] = ed[idx + 1] = ed[idx + 2] = Math.round(boosted);
          ed[idx + 3] = 255;
        }
      }
      bumpCtx.putImageData(edgeData, 0, 0);

      // ── Step 4: Create materials with bump mapping ──
      var maxAniso = renderer.capabilities.getMaxAnisotropy();

      var colorTex = new THREE.CanvasTexture(colorCanvas);
      colorTex.encoding = THREE.sRGBEncoding;
      colorTex.anisotropy = maxAniso;

      var bumpTex = new THREE.CanvasTexture(bumpCanvas);
      bumpTex.anisotropy = maxAniso;

      var faceMat = new THREE.MeshStandardMaterial({
        map:       colorTex,
        bumpMap:   bumpTex,
        bumpScale: 0.6,        // Heavy emboss — deep relief lines
        metalness: 0.3,
        roughness: 0.55,
        side:      THREE.FrontSide
      });

      // Front face
      var faceGeo = new THREE.CircleGeometry(radius * 0.93, segments);
      var frontFace = new THREE.Mesh(faceGeo, faceMat);
      frontFace.position.z = thickness / 2 + 0.001;
      disc.add(frontFace);

      // ── Back face: mirrored ──
      var colorCanvas2 = document.createElement('canvas');
      colorCanvas2.width = texSize;
      colorCanvas2.height = texSize;
      var cc2 = colorCanvas2.getContext('2d');
      cc2.translate(texSize, 0);
      cc2.scale(-1, 1);
      cc2.drawImage(colorCanvas, 0, 0);

      var bumpCanvas2 = document.createElement('canvas');
      bumpCanvas2.width = texSize;
      bumpCanvas2.height = texSize;
      var bc2 = bumpCanvas2.getContext('2d');
      bc2.translate(texSize, 0);
      bc2.scale(-1, 1);
      bc2.drawImage(bumpCanvas, 0, 0);

      var colorTex2 = new THREE.CanvasTexture(colorCanvas2);
      colorTex2.encoding = THREE.sRGBEncoding;
      colorTex2.anisotropy = maxAniso;
      var bumpTex2 = new THREE.CanvasTexture(bumpCanvas2);
      bumpTex2.anisotropy = maxAniso;

      var backMat = new THREE.MeshStandardMaterial({
        map:       colorTex2,
        bumpMap:   bumpTex2,
        bumpScale: 0.6,        // Heavy emboss — match front
        metalness: 0.3,
        roughness: 0.55,
        side:      THREE.FrontSide
      });

      var backFace = new THREE.Mesh(faceGeo.clone(), backMat);
      backFace.position.z = -(thickness / 2 + 0.001);
      backFace.rotation.y = Math.PI;
      disc.add(backFace);
    };
    logoImg.src = MOJO_LOGO_BASE64;

    // ── Beveled Ring (outer edge highlight) ───────────────────
    var ringGeo = new THREE.TorusGeometry(radius, 0.04, 16, segments);
    var ringMat = new THREE.MeshStandardMaterial({
      color:     0xf0d060,
      metalness: 0.95,
      roughness: 0.15
    });
    // Front ring
    var frontRing = new THREE.Mesh(ringGeo, ringMat);
    frontRing.position.z = thickness / 2;
    disc.add(frontRing);
    // Back ring
    var backRing = new THREE.Mesh(ringGeo.clone(), ringMat);
    backRing.position.z = -thickness / 2;
    disc.add(backRing);

    // ── Animation State ──────────────────────────────────────
    var clock   = new THREE.Clock();
    var floatY  = { value: 0 };
    var running = true;

    // Gyroscopic rotation speeds (radians/sec)
    var spinY = 0.45;   // Primary spin — like a coin
    var spinX = 0.07;   // Very gentle nod forward/back
    var spinZ = 0.04;   // Subtle axial roll

    // Floating bob via GSAP
    gsap.to(floatY, {
      value: -0.18,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Shadow breathes
    if (shadow) {
      gsap.to(shadow, {
        scaleX: 0.65,
        opacity: 0.45,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Scroll fade-out
    gsap.to(medallion, {
      opacity: 0,
      scale: 0.55,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '22% top',
        scrub: 0.6
      }
    });

    // ── Render Loop ──────────────────────────────────────────
    function animate() {
      if (!running) return;
      requestAnimationFrame(animate);

      var t = clock.getElapsedTime();

      // Gyroscopic rotation — all three axes at different rates
      disc.rotation.y = t * spinY;
      disc.rotation.x = Math.sin(t * spinX) * 0.06;  // Very slight nod
      disc.rotation.z = Math.sin(t * spinZ) * 0.03;   // Barely perceptible roll

      // Floating bob
      disc.position.y = floatY.value;

      renderer.render(scene, camera);
    }
    animate();

    // Pause when off-screen to save GPU
    var observer = new IntersectionObserver(function (entries) {
      running = entries[0].isIntersecting;
      if (running) {
        clock.start();
        animate();
      }
    }, { threshold: 0.05 });
    observer.observe(medallion);

    // ── Nav Logo Spin (GSAP, same as before) ──────────────────
    if (navLogo) {
      gsap.to(navLogo, {
        rotateY: 360,
        duration: 18,
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center center',
        delay: 1.2
      });
    }
  }

  // Wait for scripts to be ready (deferred)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      requestAnimationFrame(function () { setTimeout(initMedallion, 0); });
    });
  } else {
    requestAnimationFrame(function () { setTimeout(initMedallion, 0); });
  }
})();
