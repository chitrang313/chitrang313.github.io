/**
 * Hero effect — a slow wave field of points, drawn with raw WebGL (no library).
 *
 * The page's one effect (tasteskill: one effect on a tech page). Decorative only:
 * the canvas is aria-hidden and the page reads the same without it.
 *
 * - Pauses when the hero is off screen or the tab is hidden (no wasted GPU).
 * - prefers-reduced-motion: draws a single still frame and stops.
 * - No WebGL: the canvas simply stays transparent.
 * - Device pixel ratio capped at 1.75 to keep fill-rate sane on phones.
 */

const canvas = document.getElementById('hero-canvas');
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function start() {
  if (!canvas) return;

  const gl = canvas.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: true, powerPreference: 'low-power' });
  if (!gl) return; // no WebGL: leave the hero on its flat ground

  /* ---------------------------------------------------------------- shaders */
  const VERT = `
    attribute vec2 aGrid;          // x,z in -1..1
    uniform float uTime;
    uniform float uAspect;
    uniform vec2  uPointer;        // -1..1, eased
    uniform float uDpr;
    varying float vGlow;
    varying float vFade;

    void main() {
      float x = aGrid.x * 2.2;
      float z = aGrid.y * 2.2;

      // layered waves
      float y = sin(x * 1.6 + uTime * 0.55) * 0.12
              + sin(z * 2.1 - uTime * 0.40) * 0.10
              + sin((x + z) * 3.2 + uTime * 0.90) * 0.035;

      // pointer adds a soft swell
      vec2 p = vec2(uPointer.x * 2.2, -uPointer.y * 1.4);
      float d = distance(vec2(x, z), p);
      y += exp(-d * d * 1.6) * 0.16;

      // camera: tilt the plane toward the viewer, then perspective
      vec3 pos = vec3(x, y - 0.55, z);
      float ang = 0.52 + uPointer.y * 0.04;
      float cy = cos(ang), sy = sin(ang);
      pos = vec3(pos.x + uPointer.x * 0.12, pos.y * cy - pos.z * sy, pos.y * sy + pos.z * cy);
      pos.z -= 3.0;

      float f = 1.0 / tan(0.5 * 0.9);           // ~52deg fov
      // no depth test needed for additive points: z stays 0 inside the clip range
      gl_Position = vec4(pos.x * f / uAspect, pos.y * f, 0.0, -pos.z);

      float depth = clamp(-pos.z / 6.0, 0.0, 1.0);
      gl_PointSize = (2.6 - depth * 1.6) * uDpr;
      vGlow = smoothstep(0.02, 0.24, y + 0.06);
      vFade = (1.0 - depth) * smoothstep(1.0, 0.55, abs(aGrid.x));
    }`;

  const FRAG = `
    precision mediump float;
    uniform vec3 uBase;                          // neutral points
    uniform vec3 uHi;                            // crest colour (theme accent)
    uniform float uStrength;
    varying float vGlow;
    varying float vFade;
    void main() {
      vec2 c = gl_PointCoord - 0.5;
      if (dot(c, c) > 0.25) discard;
      vec3 col = mix(uBase, uHi, vGlow);
      float a = vFade * (0.28 + vGlow * 0.55) * uStrength;
      gl_FragColor = vec4(col * a, a);
    }`;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn('[scene] shader:', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }
  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return;
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.warn('[scene] link:', gl.getProgramInfoLog(prog));
    return;
  }
  gl.useProgram(prog);

  /* ---------------------------------------------------------------- grid */
  const COLS = window.innerWidth < 640 ? 90 : 160;
  const ROWS = window.innerWidth < 640 ? 50 : 80;
  const pts = new Float32Array(COLS * ROWS * 2);
  let k = 0;
  for (let j = 0; j < ROWS; j++) {
    for (let i = 0; i < COLS; i++) {
      pts[k++] = (i / (COLS - 1)) * 2 - 1;
      pts[k++] = (j / (ROWS - 1)) * 2 - 1;
    }
  }
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, pts, gl.STATIC_DRAW);
  const aGrid = gl.getAttribLocation(prog, 'aGrid');
  gl.enableVertexAttribArray(aGrid);
  gl.vertexAttribPointer(aGrid, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(prog, 'uTime');
  const uAspect = gl.getUniformLocation(prog, 'uAspect');
  const uPointer = gl.getUniformLocation(prog, 'uPointer');
  const uDpr = gl.getUniformLocation(prog, 'uDpr');
  const uBase = gl.getUniformLocation(prog, 'uBase');
  const uHi = gl.getUniformLocation(prog, 'uHi');
  const uStrength = gl.getUniformLocation(prog, 'uStrength');

  /* theme colours: dark = grey points with lime crests; light = soft grey with a deep green crest */
  const THEMES = {
    dark:  { base: [0.56, 0.56, 0.56], hi: [0.855, 0.980, 0.612], strength: 1.0 },
    light: { base: [0.45, 0.45, 0.45], hi: [0.122, 0.420, 0.227], strength: 0.9 }
  };
  function themeNow() {
    const t = document.documentElement.getAttribute('data-theme');
    if (t === 'light' || t === 'dark') return t;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function applyTheme(name) {
    const th = THEMES[name] || THEMES.dark;
    gl.uniform3fv(uBase, th.base);
    gl.uniform3fv(uHi, th.hi);
    gl.uniform1f(uStrength, th.strength);
  }
  applyTheme(themeNow());

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);

  /* ---------------------------------------------------------------- sizing */
  const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    canvas.width = Math.round(w * DPR);
    canvas.height = Math.round(h * DPR);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(uAspect, w / h);
    gl.uniform1f(uDpr, DPR);
  }
  resize();
  window.addEventListener('resize', () => { resize(); if (REDUCED) draw(T0); }, { passive: true });

  /* ---------------------------------------------------------------- pointer */
  const target = { x: 0, y: 0 };
  const eased = { x: 0, y: 0 };
  if (!REDUCED && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', (e) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    }, { passive: true });
  }

  function draw(t) {
    eased.x += (target.x - eased.x) * 0.04;
    eased.y += (target.y - eased.y) * 0.04;
    gl.uniform1f(uTime, t);
    gl.uniform2f(uPointer, eased.x, eased.y);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, COLS * ROWS);
  }

  /* ---------------------------------------------------------------- loop */
  // Clock from load: drawing may skip while off screen, but the wave keeps its
  // place in time, so no visible "start" shows when the visitor scrolls back.
  let raf = 0;
  let visible = true;
  const T0 = 8; // start mid-wave so the still frame has shape
  const clock = () => T0 + performance.now() / 1000;

  function frame() {
    draw(clock());
    raf = requestAnimationFrame(frame);
  }
  function play() {
    if (raf || REDUCED || !visible || document.hidden) return;
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  draw(clock());
  canvas.classList.add('is-ready');

  // repaint on theme change (also when the page is still under reduced motion)
  document.addEventListener('themechange', (e) => { applyTheme(e.detail); if (!raf) draw(clock()); });

  if (REDUCED) return; // one still frame, nothing moves

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible) play(); else stop();
    }).observe(canvas);
  }
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else play(); });

  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); stop(); });
  play();
}

try {
  start();
} catch (err) {
  console.warn('[scene] disabled:', err);
}
