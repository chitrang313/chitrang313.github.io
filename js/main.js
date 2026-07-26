/**
 * Portfolio behaviour — vanilla ES2021, no dependencies.
 *
 * Responsibilities, in order of appearance:
 *   1. Footer year
 *   2. Mobile navigation sheet
 *   3. Scroll spy + reading progress
 *   4. Reveal-on-scroll (respects prefers-reduced-motion)
 *   5. Case-study modal (native <dialog>: focus trap + Esc for free)
 *   6. Media gallery + lightbox
 *   7. Contact form -> mail client (no third-party endpoint)
 */
(function () {
  'use strict';

  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /** Escape text before injecting into markup. */
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ------------------------------------------------------------ 1. Footer year */
  const yearEl = $('#foot-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------------------------------- 2. Mobile navigation */
  const head = $('#site-head');
  const nav = $('#site-nav');
  const navToggle = $('#nav-toggle');

  function setNav(open) {
    if (!nav || !navToggle) return;
    document.body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      setNav(!document.body.classList.contains('nav-open'));
    });
  }

  if (nav) {
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setNav(false);
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
      setNav(false);
      if (navToggle) navToggle.focus();
    }
  });

  /* -------------------------------------------- 3. Scroll spy + reading progress */
  const navLinks = $$('.nav-link');
  const sections = navLinks
    .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);
  const progress = $('#head-progress');

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      const y = window.scrollY;

      if (head) head.classList.toggle('is-stuck', y > 24);

      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
      }

      // Active section = the last one whose top has passed the reading line.
      const line = y + window.innerHeight * 0.32;
      let current = sections[0];
      sections.forEach(function (section) {
        if (section.offsetTop <= line) current = section;
      });
      if (current) {
        navLinks.forEach(function (link) {
          const isCurrent = link.getAttribute('href') === '#' + current.id;
          link.classList.toggle('is-current', isCurrent);
          if (isCurrent) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // Background tabs pause requestAnimationFrame, which can leave `ticking` latched.
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
      ticking = false;
      onScroll();
    }
  });

  onScroll();

  /* ------------------------------------------------------ 4. Reveal on scroll */
  const revealables = $$('.reveal');
  if (REDUCED_MOTION || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    revealables.forEach((el) => observer.observe(el));
  }

  /* -------------------------------------------------------- 5. Case-study modal */
  const caseModal = $('#case-modal');
  const caseInner = $('#case-inner');
  const caseClose = $('#case-close');
  const studies = window.CASE_STUDIES || {};
  let activeGallery = [];

  function mediaFigure(item, index, large) {
    const cls = large ? 'case-hero-media' : 'gallery-item';
    const caption = item.caption ? '<figcaption>' + esc(item.caption) + '</figcaption>' : '';

    if (item.type === 'image') {
      return (
        '<figure class="' + cls + '">' +
        '<button class="media-open" type="button" data-media="' + index + '" aria-label="Open ' +
        esc(item.alt || item.caption || 'image') + ' full screen">' +
        '<img src="' + esc(item.src) + '" alt="' + esc(item.alt || '') + '" loading="lazy" decoding="async">' +
        '<span class="media-badge" aria-hidden="true"><svg class="icon"><use href="#i-expand"></use></svg></span>' +
        '</button>' + caption + '</figure>'
      );
    }

    if (item.type === 'video' || item.type === 'youtube') {
      const label = item.type === 'youtube' ? 'Play video' : 'Play clip';
      const poster = item.poster
        ? '<img src="' + esc(item.poster) + '" alt="" loading="lazy" decoding="async">'
        : '<span class="media-placeholder-art" aria-hidden="true"></span>';
      return (
        '<figure class="' + cls + ' is-video">' +
        '<button class="media-open" type="button" data-media="' + index + '" aria-label="' + label + '">' +
        poster +
        '<span class="media-badge" aria-hidden="true"><svg class="icon"><use href="#i-play"></use></svg></span>' +
        '</button>' + caption + '</figure>'
      );
    }

    // Designed empty slot — intentional, never a broken image.
    return (
      '<figure class="' + cls + ' is-slot">' +
      '<span class="media-slot" aria-hidden="true">' +
      '<span class="media-slot-art"></span>' +
      '<span class="media-slot-label">' + esc(item.label || 'Media slot') + '</span>' +
      '</span>' +
      caption + '</figure>'
    );
  }

  function pairList(pairs, className) {
    return (
      '<dl class="' + className + '">' +
      pairs
        .map((pair) => '<div><dt>' + esc(pair[0]) + '</dt><dd>' + esc(pair[1]) + '</dd></div>')
        .join('') +
      '</dl>'
    );
  }

  function paras(list) {
    return (list || []).map((text) => '<p>' + esc(text) + '</p>').join('');
  }

  function bullets(list) {
    return (
      '<ul class="case-list">' +
      (list || []).map((text) => '<li>' + esc(text) + '</li>').join('') +
      '</ul>'
    );
  }

  function renderCase(id) {
    const data = studies[id];
    if (!data || !caseInner) return false;

    activeGallery = [].concat(data.hero ? [data.hero] : [], data.gallery || []);

    const blocks = [
      '<section class="case-block"><h3>Overview</h3>' + paras(data.overview) + '</section>',
      '<section class="case-block"><h3>Problem statement</h3>' + paras(data.problem) + '</section>',
      '<section class="case-block"><h3>My responsibilities</h3>' + bullets(data.responsibilities) + '</section>',
      '<section class="case-block"><h3>Architecture</h3>' +
        paras(data.architecture && data.architecture.paragraphs) +
        (data.architecture && data.architecture.layers
          ? pairList(data.architecture.layers, 'case-layers')
          : '') +
        '</section>',
      '<section class="case-block"><h3>Challenges &amp; solutions</h3><div class="case-cs">' +
        (data.challenges || [])
          .map(
            (row) =>
              '<div class="cs-row">' +
              '<p class="cs-challenge"><span>Challenge</span>' + esc(row.challenge) + '</p>' +
              '<p class="cs-solution"><span>Solution</span>' + esc(row.solution) + '</p>' +
              '</div>'
          )
          .join('') +
        '</div></section>',
      '<section class="case-block"><h3>Features</h3><ul class="case-features">' +
        (data.features || [])
          .map(
            (f) =>
              '<li><svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg>' + esc(f) + '</li>'
          )
          .join('') +
        '</ul></section>',
      '<section class="case-block"><h3>Technology stack</h3>' + pairList(data.stack || [], 'case-stack') + '</section>',
      '<section class="case-block"><h3>Key achievements</h3>' + bullets(data.achievements) + '</section>',
      '<section class="case-block"><h3>Development process</h3><ol class="case-process">' +
        (data.process || [])
          .map((step) => '<li><strong>' + esc(step[0]) + '</strong><span>' + esc(step[1]) + '</span></li>')
          .join('') +
        '</ol></section>',
      '<section class="case-block"><h3>Lessons learned</h3>' + bullets(data.lessons) + '</section>'
    ].join('');

    const galleryHtml = (data.gallery || []).length
      ? '<section class="case-block case-gallery-block"><h3>Gallery</h3>' +
        '<div class="case-gallery" role="group" aria-label="Project media">' +
        (data.gallery || []).map((item, i) => mediaFigure(item, i + 1, false)).join('') +
        '</div></section>'
      : '';

    const linksHtml = (data.links || []).length
      ? '<section class="case-block"><h3>Related links</h3><ul class="case-links">' +
        data.links
          .map(
            (link) =>
              '<li><a href="' + esc(link.url) + '" target="_blank" rel="noopener">' +
              esc(link.label) +
              '<svg class="icon" aria-hidden="true"><use href="#i-arrow-up-right"></use></svg></a></li>'
          )
          .join('') +
        '</ul></section>'
      : '';

    caseInner.innerHTML =
      '<header class="case-head">' +
      '<p class="case-eyebrow">' + esc(data.year) + ' · ' + esc(data.org) + '</p>' +
      '<h2 class="case-title" id="case-title">' + esc(data.title) + '</h2>' +
      '<p class="case-kicker">' + esc(data.kicker) + '</p>' +
      '<dl class="case-facts">' +
      '<div><dt>Role</dt><dd>' + esc(data.role) + '</dd></div>' +
      '<div><dt>Timeline</dt><dd>' + esc(data.year) + '</dd></div>' +
      '<div><dt>Stack</dt><dd>' + esc(data.stackLine) + '</dd></div>' +
      '</dl>' +
      '</header>' +
      (data.hero ? mediaFigure(data.hero, 0, true) : '') +
      '<div class="case-body">' + blocks + galleryHtml + linksHtml + '</div>';

    return true;
  }

  function openCase(id) {
    if (!caseModal || !renderCase(id)) return;
    document.body.classList.add('is-locked');
    caseModal.showModal();
    caseInner.scrollTop = 0;
    caseInner.focus();
  }

  $$('[data-open]').forEach(function (button) {
    button.addEventListener('click', function () {
      openCase(button.getAttribute('data-open'));
    });
  });

  // Whole card is clickable, without nesting interactive elements.
  $$('.work-card').forEach(function (card) {
    card.addEventListener('click', function (event) {
      if (event.target.closest('a, button')) return;
      openCase(card.getAttribute('data-project'));
    });
  });

  /**
   * Idempotent teardown. Bound to `close` and `cancel` and also called directly by our
   * own close paths, because the `close` event is not reliable in every engine.
   */
  function cleanupCase() {
    if (!caseModal || caseModal.open) return;
    document.body.classList.remove('is-locked');
    if (caseInner) caseInner.innerHTML = '';
    activeGallery = [];
  }

  function closeCase() {
    if (!caseModal) return;
    caseModal.close();
    cleanupCase();
  }

  if (caseClose) {
    caseClose.addEventListener('click', closeCase);
  }

  if (caseModal) {
    // Click on the backdrop area (the dialog element itself) closes.
    caseModal.addEventListener('click', function (event) {
      if (event.target === caseModal) closeCase();
    });
    caseModal.addEventListener('close', cleanupCase);
    // Esc: `cancel` fires first, before the dialog is actually closed.
    caseModal.addEventListener('cancel', function () {
      window.setTimeout(cleanupCase, 0);
    });
  }

  /* ------------------------------------------------------------- 6. Lightbox */
  const lightbox = $('#lightbox');
  const lbStage = $('#lb-stage');
  const lbCaption = $('#lb-caption');
  const lbPrev = $('#lb-prev');
  const lbNext = $('#lb-next');
  const lbClose = $('#lb-close');
  let lbIndex = 0;

  function renderLightbox() {
    const item = activeGallery[lbIndex];
    if (!item || !lbStage) return;

    if (item.type === 'image') {
      lbStage.innerHTML =
        '<img src="' + esc(item.src) + '" alt="' + esc(item.alt || item.caption || '') + '">';
    } else if (item.type === 'video') {
      lbStage.innerHTML =
        '<video src="' + esc(item.src) + '" controls autoplay playsinline' +
        (item.poster ? ' poster="' + esc(item.poster) + '"' : '') +
        '></video>';
    } else if (item.type === 'youtube') {
      lbStage.innerHTML =
        '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(item.id) +
        '?autoplay=1&amp;rel=0" title="' + esc(item.caption || 'Project video') +
        '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    } else {
      lbStage.innerHTML =
        '<div class="lb-slot"><span class="media-slot-art"></span><span>' +
        esc(item.label || 'Media slot') + '</span></div>';
    }

    if (lbCaption) lbCaption.textContent = item.caption || item.alt || '';
    const many = activeGallery.length > 1;
    if (lbPrev) lbPrev.hidden = !many;
    if (lbNext) lbNext.hidden = !many;
  }

  function openLightbox(index) {
    if (!lightbox || !activeGallery.length) return;
    lbIndex = index;
    renderLightbox();
    lightbox.showModal();
  }

  function stepLightbox(delta) {
    if (!activeGallery.length) return;
    lbIndex = (lbIndex + delta + activeGallery.length) % activeGallery.length;
    renderLightbox();
  }

  if (caseInner) {
    caseInner.addEventListener('click', function (event) {
      const trigger = event.target.closest('.media-open');
      if (!trigger) return;
      openLightbox(Number(trigger.getAttribute('data-media')) || 0);
    });
  }

  // Clearing the stage stops video/iframe playback, so it must happen on every close path.
  function cleanupLightbox() {
    if (!lightbox || lightbox.open) return;
    if (lbStage) lbStage.innerHTML = '';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.close();
    cleanupLightbox();
  }

  if (lbPrev) lbPrev.addEventListener('click', () => stepLightbox(-1));
  if (lbNext) lbNext.addEventListener('click', () => stepLightbox(1));
  if (lbClose) lbClose.addEventListener('click', closeLightbox);

  if (lightbox) {
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox || event.target === lbStage) closeLightbox();
    });
    lightbox.addEventListener('close', cleanupLightbox);
    lightbox.addEventListener('cancel', function () {
      window.setTimeout(cleanupLightbox, 0);
    });
    lightbox.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') stepLightbox(-1);
      if (event.key === 'ArrowRight') stepLightbox(1);
    });
  }

  /* -------------------------------------------------------- 7. Contact form */
  const form = $('#contact-form');
  const status = $('#form-status');

  function showError(id, invalid) {
    const field = $('#' + id);
    const error = $('#' + id + '-error');
    if (field) field.setAttribute('aria-invalid', invalid ? 'true' : 'false');
    if (error) error.hidden = !invalid;
    return !invalid;
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = $('#cf-name').value.trim();
      const email = $('#cf-email').value.trim();
      const subject = $('#cf-subject').value.trim() || 'Portfolio enquiry';
      const message = $('#cf-message').value.trim();

      const okName = showError('cf-name', name.length === 0);
      const okEmail = showError('cf-email', !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email));
      const okMessage = showError('cf-message', message.length === 0);

      if (!okName || !okEmail || !okMessage) {
        if (status) status.textContent = 'Please complete the highlighted fields.';
        const firstInvalid = $('[aria-invalid="true"]', form);
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const body = message + '\n\n—\n' + name + '\n' + email;
      const href =
        'mailto:chitrang313@outlook.com?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(body);

      if (status) status.textContent = 'Opening your mail client…';
      window.location.href = href;
    });
  }
})();
