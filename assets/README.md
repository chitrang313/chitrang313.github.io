# Assets — where to drop what

No build step. Add a file, reference it, commit. Paths are relative to the repo root.

## Portrait (hero)

Drop `assets/img/portrait.jpg` (or `.webp`), ideally 4:5, ~720×900, under 200 KB.

Then in `index.html`, replace the `<figure class="portrait">` inner `<div class="portrait-frame">…</div>`
block with:

```html
<img src="assets/img/portrait.jpg" alt="Portrait of Chitrang Patel"
     width="720" height="900" class="portrait-img">
```

## Project cover images

Drop into `assets/img/projects/` — 16:10, ~1200×750, under 250 KB each.

In `index.html`, inside the matching `<div class="work-cover" data-cover="…">`, replace the two
placeholder `<span>` elements with:

```html
<img class="work-cover-img" src="assets/img/projects/soreal-cover.jpg"
     alt="SoReal — 3D interior walkthrough" width="1200" height="750"
     loading="lazy" decoding="async">
```

## Case-study media (modal gallery, videos, diagrams)

All of this is data — edit `js/data.js` only, no HTML changes. Each project has `hero` and
`gallery`; swap a `placeholder` entry for one of:

```js
{ type: 'image',   src: 'assets/img/projects/soreal-01.jpg', alt: 'Living room walkthrough', caption: 'Interior walkthrough' }
{ type: 'video',   src: 'assets/video/soreal-demo.mp4', poster: 'assets/img/projects/soreal-poster.jpg', caption: 'Session demo' }
{ type: 'youtube', id: 'VIDEO_ID', caption: 'Gameplay walkthrough' }
```

YouTube embeds are click-to-load via `youtube-nocookie.com`, so nothing third-party runs until a
visitor asks for it. Self-hosted video: keep clips under ~8 MB, H.264 MP4, and always give a poster.

Related links per project go in the same file:

```js
links: [ { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=…' } ]
```

## Certifications

Certificates are documents, not decoration. Put PDFs in `assets/certificates/` and add a card to the
"Recognition" group in the Résumé section of `index.html`, linking the PDF.

## Résumé

`assets/resume/Chitrang-Patel-Resume.pdf` — overwrite in place to update; the filename is
referenced twice in `index.html`.

## Image hygiene

- Export at the size actually displayed; nothing above 1600px wide is needed anywhere.
- Prefer WebP where you can (`<img src="…​.webp">` works everywhere the site targets).
- Always set `width`/`height` so the layout never shifts while images load.
- Keep `loading="lazy"` on everything except the portrait.
