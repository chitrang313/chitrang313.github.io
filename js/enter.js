/*
  Runs in <head> before first paint (not deferred, tiny).
  - Theme: a stored choice ("light" / "dark") wins; otherwise no data-theme is set and
    the CSS follows the OS (prefers-color-scheme). Setting it here avoids a flash.
  - html.m-enter arms the hero's one-time entrance (css: [data-enter]); m-enter-done lets it finish.
  - html.mo-js lets the scroll moment hide its resting state only when script runs;
    mo-safe after 2.5 s shows everything if a module fails (assets/moments/moments.js).
  Kept as a file, not inline, because the Content-Security-Policy forbids inline scripts.
*/
(function () {
  var h = document.documentElement;
  try {
    var t = window.localStorage.getItem('cp-theme');
    if (t === 'light' || t === 'dark') h.setAttribute('data-theme', t);
  } catch (e) { /* storage blocked: follow the OS */ }
  h.classList.add('js', 'm-enter', 'mo-js');
  setTimeout(function () { h.classList.add('m-enter-done'); }, 700);
  setTimeout(function () { h.classList.add('mo-safe'); }, 2500);
})();
