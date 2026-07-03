/* KobetheBarber — interactions: sticky header, mobile nav, scroll reveal, lightbox */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  var scrim = document.getElementById('nav-scrim');

  /* ---- Sticky header shrink ---- */
  var onScroll = function () {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav ---- */
  if (toggle && mobileNav) {
    var setNav = function (open) {
      mobileNav.classList.toggle('open', open);
      if (scrim) scrim.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    var closeNav = function () { setNav(false); };
    toggle.addEventListener('click', function () {
      setNav(!mobileNav.classList.contains('open'));
    });
    if (scrim) scrim.addEventListener('click', closeNav);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeNav();
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Lightbox ---- */
  var lightbox = document.getElementById('lightbox');
  var lbImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
  var lbClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  var lastFocused = null;

  var openLightbox = function (src, alt) {
    if (!lightbox) return;
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  };
  var closeLightbox = function () {
    if (!lightbox) return;
    lightbox.hidden = true;
    lbImg.src = '';
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  document.querySelectorAll('.tile[data-full]').forEach(function (tile) {
    tile.addEventListener('click', function () {
      lastFocused = tile;
      var img = tile.querySelector('img');
      openLightbox(tile.getAttribute('data-full'), img ? img.alt : '');
    });
  });
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
