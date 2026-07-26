# chitrang313.github.io

Personal portfolio of **Chitrang Patel** — software engineer, C# / .NET, backend and real-time
systems. Live at <https://chitrang313.github.io/>.

Static by choice: no framework, no bundler, no build step. Three source files do the work, so the
site stays fast, deploys as-is on GitHub Pages, and is still editable in five years.

## Structure

```
index.html                  Single page, all sections, semantic HTML + inline SVG icon sprite
404.html                    Styled fallback
css/style.css               The whole design system (tokens → components → responsive)
js/data.js                  Case-study content for the project modals (the only file with prose data)
js/main.js                  Nav, scroll spy, reveal, modal, gallery/lightbox, contact form
assets/resume/              Résumé PDF (linked from hero + résumé section)
assets/img/                 favicon, Open Graph card, portrait and project images
assets/README.md            Where to drop images, video, certificates — read this before adding media
robots.txt · sitemap.xml    Crawl basics
```

## Design decisions worth knowing

- **Warm paper theme.** Ivory/parchment background with a CSS-generated grain (no image request).
  Ink is a warm charcoal, accent a muted olive. Every text tier clears WCAG AA (4.5:1) against the
  darkest paper tone in use — verified against computed styles, not eyeballed.
- **Two typefaces.** Instrument Serif for display, Inter for text, loaded once with `display=swap`.
- **One icon family.** A hand-authored SVG sprite at the top of `index.html`: 24px grid, 1.6 stroke,
  round caps. Technology badges are text chips with a category glyph rather than brand logos —
  deliberate, so the icon language never fragments. Add new icons in that same style.
- **Case studies open in a native `<dialog>`.** Focus trapping, Esc and the top layer come from the
  platform; teardown is explicit and idempotent so it never depends on the `close` event firing.
- **Media placeholders are designed, not broken.** Empty slots render as intentional dashed frames
  until real assets land, so the page never shows a missing-image icon.
- **Motion is subtle and optional.** Reveal-on-scroll via `IntersectionObserver`, everything
  disabled under `prefers-reduced-motion`.
- **The contact form has no backend.** It composes a `mailto:` in the visitor's own mail client —
  nothing is posted to a third party. Swap in a form endpoint later if that becomes worth it.

## Editing content

| Change | File |
| --- | --- |
| Bio, experience, skills, contact details | `index.html` |
| Project case studies, galleries, related links | `js/data.js` |
| Colours, type scale, spacing | `:root` in `css/style.css` |
| Résumé PDF | overwrite `assets/resume/Chitrang-Patel-Resume.pdf` |

Adding images, video or certificates: see [`assets/README.md`](assets/README.md).

## Local preview

Any static server works; no build:

```bash
python -m http.server 4173
```

Then open <http://localhost:4173>. `.claude/launch.json` wires the same command up for tooling.

## CI/CD

- `.github/workflows/ci.yml` — html-validate, stylelint, ESLint and a Lighthouse run on pull
  requests. HTML validation is the gate that actually fails; the rest report.
- `.github/workflows/deploy.yml` — pushes to `main` publish to GitHub Pages.
