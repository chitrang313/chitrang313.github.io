/**
 * Interface sounds — uisfx (https://uisfx.com, MIT code / CC0 audio).
 *
 * - OFF by default. The header toggle turns it on; the choice is remembered
 *   per visitor (uisfx preferences -> localStorage, key "cp-uisfx").
 * - Sounds are synthesised in the browser with Web Audio: no audio files load.
 * - The AudioContext is only unlocked from a real click (browser autoplay rules).
 * - Other scripts never call audio directly: they dispatch
 *     document.dispatchEvent(new CustomEvent('sfx', { detail: '<cue>' }))
 *   and elements may carry data-sfx="<cue>" (played on click).
 * - Hover sounds only on fine pointers, and never under reduced motion.
 *
 * Pinned version: uisfx@0.4.0 (published 2026-07-14).
 */

const toggle = document.getElementById('sound-toggle');
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Cues the page uses — every name is a real uisfx cue id.
const ALLOWED = new Set([
  'hover', 'press', 'open', 'close', 'select', 'expand', 'collapse',
  'back', 'forward', 'swipe', 'play', 'pause', 'send', 'error', 'toggle-on', 'toggle-off'
]);

let ui = null;

function storage() {
  try {
    const t = '__cp_t';
    window.localStorage.setItem(t, '1');
    window.localStorage.removeItem(t);
    return window.localStorage;
  } catch (_) {
    return null; // private mode / blocked storage: preference just isn't remembered
  }
}

function reflect(on) {
  if (!toggle) return;
  toggle.setAttribute('aria-pressed', on ? 'true' : 'false');
  toggle.setAttribute('title', on ? 'Interface sounds on' : 'Interface sounds off');
}

function play(cue) {
  if (!ui || !ui.isEnabled() || !ALLOWED.has(cue)) return;
  try { ui.play(cue); } catch (err) { console.warn('[sound] play failed:', err); }
}

async function init() {
  if (!toggle) return;
  let mod;
  try {
    mod = await import('https://cdn.jsdelivr.net/npm/uisfx@0.4.0/dist/index.js');
  } catch (err) {
    console.warn('[sound] uisfx could not load; sounds disabled.', err);
    toggle.hidden = true; // no sound engine: hide the control rather than show a dead button
    return;
  }

  const store = storage();
  ui = mod.createUISFX({
    pack: 'glass',
    volume: 0.35,
    enabled: false,
    maxVoices: 4,
    cooldownMs: 40,
    preferences: store ? { key: 'cp-uisfx', storage: store } : undefined
  });

  // Respect a stored choice, but stay off for first-time visitors.
  reflect(ui.isEnabled());

  toggle.addEventListener('click', async () => {
    const next = !ui.isEnabled();
    if (next) {
      const ok = await ui.unlock().catch(() => false);
      if (!ok) {
        console.warn('[sound] audio could not be unlocked by this browser.');
        return;
      }
    }
    ui.setEnabled(next);
    reflect(next);
    if (next) play('toggle-on');
  });

  // Unlock on the first real interaction if the visitor already chose "on".
  if (ui.isEnabled()) {
    const unlockOnce = () => { ui.unlock().catch(() => {}); };
    window.addEventListener('pointerdown', unlockOnce, { once: true, capture: true });
    window.addEventListener('keydown', unlockOnce, { once: true, capture: true });
  }

  // Event bus from js/main.js
  document.addEventListener('sfx', (e) => play(e.detail));

  // data-sfx on click
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-sfx]');
    if (el) play(el.getAttribute('data-sfx'));
  });

  // quiet hover ticks on cards and buttons (fine pointers only)
  if (FINE && !REDUCED) {
    let lastEl = null;
    document.addEventListener('pointerover', (e) => {
      const el = e.target.closest('.card, .btn, .filter, .thumb');
      if (el && el !== lastEl) play('hover');
      lastEl = el;
    });
  }
}

init();
