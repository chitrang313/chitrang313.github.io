/**
 * Portfolio behaviour — vanilla ES2021, no dependencies.
 *
 *   1. Boot (js class, footer year)
 *   2. Navigation: mobile sheet, current section, progress bar
 *   4. Work grid: filters + cards from js/work.js (window.WORK)
 *   5. Case-study modal from js/data.js (window.CASE_STUDIES)
 *   6. Media lightbox
 *   7. Contact form -> visitor's own mail client (no third-party endpoint)
 *
 * Sound: this file never plays audio. It dispatches `sfx` events on document;
 * js/sound.js (uisfx) decides whether and how to play them.
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------ 1. Boot */
  document.documentElement.classList.add('js');

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /** Escape untrusted text before it goes into markup. */
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Only allow http(s) links from data files. */
  function safeUrl(url) {
    try {
      const u = new URL(url, window.location.href);
      return u.protocol === 'https:' || u.protocol === 'http:' ? u.href : null;
    } catch (_) {
      return null;
    }
  }

  function sfx(name) {
    document.dispatchEvent(new CustomEvent('sfx', { detail: name }));
  }

  const yearEl = $('#foot-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const STUDIES = window.CASE_STUDIES || {};
  const WORK = window.WORK || { work: [], filters: [], cdn: null };
  if (!window.CASE_STUDIES) console.error('[portfolio] js/data.js did not load: case studies unavailable.');
  if (!window.WORK) console.error('[portfolio] js/work.js did not load: project grid unavailable.');

  /* ------------------------------------------------------------ 1b. Theme toggle
     The stored choice is applied before paint by js/enter.js. With no stored choice the
     page follows the OS, and keeps following it live until the visitor picks one. */
  const themeToggle = $('#theme-toggle');
  const metaTheme = $('#meta-theme');
  const osLight = window.matchMedia('(prefers-color-scheme: light)');

  function currentTheme() {
    const set = document.documentElement.getAttribute('data-theme');
    return set === 'light' || set === 'dark' ? set : (osLight.matches ? 'light' : 'dark');
  }
  function reflectTheme() {
    const t = currentTheme();
    if (themeToggle) {
      const next = t === 'light' ? 'dark' : 'light';
      themeToggle.setAttribute('aria-label', `Switch to ${next} theme`);
      themeToggle.setAttribute('title', `Switch to ${next} theme`);
    }
    if (metaTheme) metaTheme.setAttribute('content', t === 'light' ? '#ffffff' : '#0f0f0f');
    document.dispatchEvent(new CustomEvent('themechange', { detail: t }));
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = currentTheme() === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { window.localStorage.setItem('cp-theme', next); } catch (_) { /* not remembered */ }
      reflectTheme();
      sfx(next === 'light' ? 'toggle-on' : 'toggle-off');
    });
  }
  osLight.addEventListener('change', () => {
    if (!document.documentElement.hasAttribute('data-theme')) reflectTheme();
  });
  reflectTheme();

  /* ------------------------------------------------------------ 2. Navigation */
  const navToggle = $('#nav-toggle');
  const nav = $('#site-nav');

  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    }
  }
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = !document.body.classList.contains('nav-open');
      setNav(open);
      sfx(open ? 'open' : 'close');
    });
  }
  if (nav) nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      setNav(false);
      if (navToggle) navToggle.focus();
    }
  });

  const navLinks = $$('.nav-link');
  const sections = navLinks.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  const progress = $('#head-progress');
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;

      const probe = y + window.innerHeight * 0.35;
      let current = null;
      for (const s of sections) if (s.offsetTop <= probe) current = s.id;
      navLinks.forEach((a) => {
        const on = a.getAttribute('href') === `#${current}`;
        a.classList.toggle('is-current', on);
        if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
      });
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ------------------------------------------------------------ 4. Work grid */
  const grid = $('#work-grid');
  const filtersEl = $('#work-filters');
  const statusEl = $('#work-status');
  const cdn = WORK.cdn;
  const byKey = new Map(WORK.work.map((w) => [w.key, w]));

  /** Normalise [kind, version, id, caption?] tuples. */
  function mediaOf(item) {
    return (item && item.media ? item.media : []).map(([kind, v, id, label]) => ({ kind, v, id, label: label || '' }));
  }

  function coverHtml(item, study) {
    const media = mediaOf(item);
    const lead = media.find((m) => m.kind === 'v') || media[0];
    const alt = study ? `${study.title} — ${item.type}` : item.key;
    if (!lead) {
      const mono = (study ? study.title : item.key).replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
      return `<div class="card-cover"><span class="card-mono" aria-hidden="true">${esc(mono)}</span></div>`;
    }
    const src = lead.kind === 'v' ? cdn.poster(lead.id, lead.v, 800) : cdn.image(lead.id, lead.v, 800);
    const src2x = lead.kind === 'v' ? cdn.poster(lead.id, lead.v, 1200) : cdn.image(lead.id, lead.v, 1200);
    const videos = media.filter((m) => m.kind === 'v').length;
    const images = media.length - videos;
    const badge = [videos ? `${videos} video${videos > 1 ? 's' : ''}` : '', images ? `${images} screen${images > 1 ? 's' : ''}` : ''].filter(Boolean).join(' · ');
    return `<div class="card-cover">
        <img src="${esc(src)}" srcset="${esc(src)} 800w, ${esc(src2x)} 1200w" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 420px"
             alt="${esc(alt)}" width="800" height="500" loading="lazy" decoding="async">
        <span class="card-badge"><svg class="icon" aria-hidden="true"><use href="#${videos ? 'i-play' : 'i-image'}"></use></svg>${esc(badge)}</span>
      </div>`;
  }

  function cardHtml(item) {
    const study = STUDIES[item.key];
    if (!study) {
      console.warn(`[portfolio] no case study for "${item.key}" in js/data.js; card skipped.`);
      return '';
    }
    // Tech chips live in the case study (Stack); the card keeps meta, title and summary.
    return `<article class="card" data-group="${esc(item.group)}" data-key="${esc(item.key)}">
        ${coverHtml(item, study)}
        <div class="card-body">
          <p class="card-meta">${esc(item.client)} · ${esc(study.year)}</p>
          <h3 class="card-title">${esc(study.title)}</h3>
          <p class="card-desc">${esc(item.desc)}</p>
          <button class="card-open" type="button" data-open="${esc(item.key)}" data-sfx="open">
            Open case study<span class="visually-hidden">: ${esc(study.title)}</span>
            <svg class="icon" aria-hidden="true"><use href="#i-arrow-up-right"></use></svg>
          </button>
        </div>
      </article>`;
  }

  let activeFilter = 'museum';

  function applyFilter(key) {
    activeFilter = key;
    let shown = 0;
    $$('.card', grid).forEach((card) => {
      const on = key === 'all' || card.dataset.group === key;
      card.hidden = !on;
      if (on) shown += 1;
    });
    $$('.filter', filtersEl).forEach((b) => b.setAttribute('aria-pressed', b.dataset.filter === key ? 'true' : 'false'));
    if (statusEl) statusEl.textContent = `${shown} project${shown === 1 ? '' : 's'} shown`;
  }

  if (grid && filtersEl && cdn) {
    grid.innerHTML = WORK.work.map(cardHtml).join('');
    const counts = WORK.work.reduce((acc, w) => { acc[w.group] = (acc[w.group] || 0) + 1; return acc; }, {});
    filtersEl.innerHTML = WORK.filters.map((f) => {
      const n = f.key === 'all' ? WORK.work.length : counts[f.key] || 0;
      return `<button class="filter" type="button" data-filter="${esc(f.key)}" aria-pressed="false">${esc(f.label)}<span class="filter-count">${n}</span></button>`;
    }).join('');
    filtersEl.addEventListener('click', (e) => {
      const b = e.target.closest('.filter');
      if (!b || b.dataset.filter === activeFilter) return;
      applyFilter(b.dataset.filter);
      sfx('select');
    });
    applyFilter(activeFilter);
  }

  /* ------------------------------------------------------------ 5. Case-study modal */
  const modal = $('#case-modal');
  const modalInner = $('#case-inner');
  const modalClose = $('#case-close');
  let lastTrigger = null;
  let currentMedia = [];

  const list = (items) => `<ul class="case-list">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;
  const paras = (items) => items.map((t) => `<p>${esc(t)}</p>`).join('');
  const table = (rows) => `<table class="case-table"><tbody>${rows.map(([a, b]) => `<tr><th scope="row">${esc(a)}</th><td>${esc(b)}</td></tr>`).join('')}</tbody></table>`;
  const section = (title, body, wide) => `<section class="case-section${wide ? ' is-wide' : ''}"><h3 class="case-h">${esc(title)}</h3>${body}</section>`;
  const has = (v) => Array.isArray(v) ? v.length > 0 : Boolean(v);

  function heroMediaHtml(media, title) {
    const lead = media.find((m) => m.kind === 'v') || media[0];
    if (!lead) return '';
    if (lead.kind === 'v') {
      return `<div class="case-hero">
          <video controls playsinline preload="metadata" poster="${esc(cdn.poster(lead.id, lead.v, 1600))}" title="${esc(title)} — project video">
            <source src="${esc(cdn.video(lead.id, lead.v, 1600))}" type="video/mp4">
            <source src="${esc(cdn.videoOriginal(lead.id, lead.v))}" type="video/mp4">
          </video>
        </div>`;
    }
    return `<div class="case-hero"><img src="${esc(cdn.image(lead.id, lead.v, 1600))}" alt="${esc(title)} — screen 1" width="1600" height="900"></div>`;
  }

  function galleryHtml(media, title) {
    if (media.length < 2) return '';
    const thumbs = media.map((m, i) => {
      const src = m.kind === 'v' ? cdn.poster(m.id, m.v, 600) : cdn.image(m.id, m.v, 600);
      const label = m.label ? `${title} — ${m.label}` : `${title} — ${m.kind === 'v' ? 'video' : 'screen'} ${i + 1}`;
      return `<button class="thumb" type="button" data-lb="${i}" aria-label="Open ${esc(label)}" data-sfx="expand">
          <img src="${esc(src)}" alt="" width="600" height="375" loading="lazy" decoding="async">
          ${m.kind === 'v' ? '<span class="thumb-play" aria-hidden="true"><svg class="icon"><use href="#i-play-solid"></use></svg></span>' : ''}
        </button>`;
    }).join('');
    return section('Video and screens', `<div class="case-gallery">${thumbs}</div>`, true);
  }

  function renderCase(key) {
    const d = STUDIES[key];
    const item = byKey.get(key);
    if (!d) return false;
    const media = mediaOf(item);
    currentMedia = media.map((m) => ({ ...m, title: d.title }));

    const meta = [
      ['Year', d.year], ['Role', d.role], ['Organisation', d.org], ['Stack', d.stackLine]
    ].filter(([, v]) => has(v)).map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('');

    const parts = [];
    if (has(d.overview)) parts.push(section('Overview', paras(d.overview)));
    if (has(d.problem)) parts.push(section('The problem', paras(d.problem)));
    if (has(d.responsibilities)) parts.push(section('What I did', list(d.responsibilities)));
    if (d.architecture && (has(d.architecture.paragraphs) || has(d.architecture.layers))) {
      parts.push(section('Architecture',
        (has(d.architecture.paragraphs) ? paras(d.architecture.paragraphs) : '') +
        (has(d.architecture.layers) ? table(d.architecture.layers) : ''), true));
    }
    if (has(d.challenges)) {
      parts.push(section('Challenges and solutions', `<dl class="case-pairs">${d.challenges.map((c) =>
        `<div class="case-pair"><dt>${esc(c.challenge)}</dt><dd>${esc(c.solution)}</dd></div>`).join('')}</dl>`, true));
    }
    if (has(d.features)) parts.push(section('Features', list(d.features)));
    if (has(d.stack)) parts.push(section('Stack', table(d.stack)));
    if (has(d.achievements)) parts.push(section('Outcomes', list(d.achievements)));
    if (has(d.whatWentWell)) parts.push(section('What went well', list(d.whatWentWell)));
    if (has(d.whatIdDoDifferently)) parts.push(section('What I would do differently', list(d.whatIdDoDifferently)));
    if (has(d.lessons)) parts.push(section('Lessons', list(d.lessons)));
    if (has(d.process)) parts.push(section('Process', table(d.process)));
    parts.push(galleryHtml(media, d.title));

    const links = (d.links || []).map((l) => {
      const href = safeUrl(l.url);
      return href ? `<a class="btn btn-tonal" href="${esc(href)}" target="_blank" rel="noopener" data-sfx="press">Visit ${esc(l.label)}<svg class="icon" aria-hidden="true"><use href="#i-arrow-up-right"></use></svg></a>` : '';
    }).join('');
    if (links) parts.push(section('Links', `<div class="case-links">${links}</div>`));

    modalInner.innerHTML = `
      ${heroMediaHtml(media, d.title)}
      <div class="case-body">
        <header class="case-head">
          <p class="case-kicker">${esc(d.kicker)}</p>
          <h2 class="case-title" id="case-title">${esc(d.title)}</h2>
        </header>
        <dl class="case-meta">${meta}</dl>
        ${parts.join('')}
      </div>`;
    modalInner.scrollTop = 0;
    return true;
  }

  function openCase(key, trigger) {
    if (!modal || !renderCase(key)) return;
    lastTrigger = trigger || document.activeElement;
    modal.showModal();
    modalInner.focus({ preventScroll: true });
    history.replaceState(null, '', `#project-${key}`);
  }

  function closeCase() {
    if (!modal || !modal.open) return;
    $$('video', modalInner).forEach((v) => v.pause());
    modal.close();
  }

  if (modal) {
    modal.addEventListener('close', () => {
      $$('video', modalInner).forEach((v) => v.pause());
      if (location.hash.startsWith('#project-')) history.replaceState(null, '', '#work');
      if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus({ preventScroll: true });
      sfx('close');
    });
    // click on the backdrop closes
    modal.addEventListener('click', (e) => { if (e.target === modal) closeCase(); });
    if (modalClose) modalClose.addEventListener('click', closeCase);
    modalInner.addEventListener('click', (e) => {
      const t = e.target.closest('[data-lb]');
      if (t) openLightbox(Number(t.dataset.lb), t);
    });
  }

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-open]');
    if (t) openCase(t.dataset.open, t);
  });

  // Deep link: #project-<key> opens that case study on load.
  const deep = location.hash.match(/^#project-([a-z0-9-]+)$/i);
  if (deep && STUDIES[deep[1]]) {
    requestAnimationFrame(() => {
      const w = $('#work');
      if (w) w.scrollIntoView();
      openCase(deep[1], null);
    });
  }

  /* ------------------------------------------------------------ 6. Lightbox */
  const lb = $('#lightbox');
  const lbStage = $('#lb-stage');
  const lbCount = $('#lb-count');
  const lbPrev = $('#lb-prev');
  const lbNext = $('#lb-next');
  const lbClose = $('#lb-close');
  let lbIndex = 0;
  let lbTrigger = null;

  function showLb(i) {
    if (!currentMedia.length) return;
    lbIndex = (i + currentMedia.length) % currentMedia.length;
    const m = currentMedia[lbIndex];
    const label = m.label ? `${m.title} — ${m.label}` : `${m.title} — ${m.kind === 'v' ? 'video' : 'screen'} ${lbIndex + 1}`;
    $$('video', lbStage).forEach((v) => v.pause());
    lbStage.innerHTML = m.kind === 'v'
      ? `<video controls autoplay playsinline poster="${esc(cdn.poster(m.id, m.v, 1920))}" title="${esc(label)}"><source src="${esc(cdn.video(m.id, m.v, 1920))}" type="video/mp4"><source src="${esc(cdn.videoOriginal(m.id, m.v))}" type="video/mp4"></video>`
      : `<img src="${esc(cdn.image(m.id, m.v, 2000))}" alt="${esc(label)}">`;
    lbCount.textContent = `${lbIndex + 1} / ${currentMedia.length}`;
    const single = currentMedia.length < 2;
    lbPrev.hidden = single;
    lbNext.hidden = single;
  }

  function openLightbox(i, trigger) {
    if (!lb) return;
    lbTrigger = trigger;
    $$('video', modalInner).forEach((v) => v.pause());
    showLb(i);
    lb.showModal();
  }

  if (lb) {
    lbPrev.addEventListener('click', () => { showLb(lbIndex - 1); sfx('back'); });
    lbNext.addEventListener('click', () => { showLb(lbIndex + 1); sfx('forward'); });
    lbClose.addEventListener('click', () => lb.close());
    lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbStage) lb.close(); });
    lb.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); showLb(lbIndex - 1); sfx('back'); }
      if (e.key === 'ArrowRight') { e.preventDefault(); showLb(lbIndex + 1); sfx('forward'); }
    });
    lb.addEventListener('close', () => {
      $$('video', lbStage).forEach((v) => v.pause());
      lbStage.innerHTML = '';
      if (lbTrigger && document.contains(lbTrigger)) lbTrigger.focus({ preventScroll: true });
      sfx('collapse');
    });
    // touch swipe
    let x0 = null;
    lbStage.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    lbStage.addEventListener('touchend', (e) => {
      if (x0 == null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 48) { showLb(lbIndex + (dx < 0 ? 1 : -1)); sfx('swipe'); }
      x0 = null;
    });
  }

  /* ------------------------------------------------------------ 7. Contact form */
  const form = $('#contact-form');
  if (form) {
    const fields = {
      name: { el: $('#cf-name'), err: $('#cf-name-error'), ok: (v) => v.trim().length > 0 },
      email: { el: $('#cf-email'), err: $('#cf-email-error'), ok: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
      message: { el: $('#cf-message'), err: $('#cf-message-error'), ok: (v) => v.trim().length > 0 }
    };
    const status = $('#form-status');

    function check(f) {
      const valid = f.ok(f.el.value);
      f.err.hidden = valid;
      f.el.setAttribute('aria-invalid', valid ? 'false' : 'true');
      return valid;
    }
    Object.values(fields).forEach((f) => f.el.addEventListener('blur', () => { if (f.el.value) check(f); }));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const results = Object.values(fields).map(check);
      if (results.includes(false)) {
        const first = Object.values(fields).find((f) => !f.ok(f.el.value));
        if (first) first.el.focus();
        status.textContent = 'Please fix the highlighted fields.';
        sfx('error');
        return;
      }
      const subject = $('#cf-subject').value.trim().slice(0, 150) || 'Opportunity for Chitrang';
      const body = `${fields.message.el.value.trim()}\n\n— ${fields.name.el.value.trim()} (${fields.email.el.value.trim()})`;
      const href = `mailto:chitrang313@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.slice(0, 4000))}`;
      status.textContent = 'Opening your mail client with the message filled in.';
      sfx('send');
      window.location.href = href;
    });
  }
})();
