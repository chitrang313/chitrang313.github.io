# Maintenance

This document preserves useful engineering context between AI-agent sessions. It is not a conversation transcript. Summarize investigations, changes, validation, and remaining work; never copy a full AI conversation.

## Current State

Repository origin is configured and verified for push access to `https://github.com/chitrang313/chitrang313.github.io.git` on branch `main`.

## Active / In-Progress Work

<!-- Record incomplete meaningful work using this format. Remove or move entries once resolved. -->

### Task: <Short Name>

Status: <Not Started | In Progress | Blocked>

Completed: <What is finished>

Remaining: <What still needs to happen>

Blockers: <What prevents progress, if anything>

Relevant Areas: <Files, components, or project areas>

Next Step: <Most useful next action>

## Known Issues

<!-- Record unresolved, reproducible, or material issues using this format. -->

### Issue: <Short Description>

Status: <Open | Investigating | Mitigated | Resolved>

Observed Behavior: <What happens>

Expected Behavior: <What should happen>

Known Cause: <Cause, if known>

Investigation Performed: <What has been checked>

Possible Next Step: <Recommended follow-up>

## Pending Work

<!-- List meaningful planned work that has not yet started, with enough context to prioritize it. -->

## Recent Work

<!-- Add entries only for meaningful work. Do not create fictional history. -->

### 2026-10-22 — Add Cloudinary Media Assets for Sikh History Interactive Timeline Kiosk

#### Request

Integrate 5 provided Cloudinary image URLs into the "Interactive Timeline Kiosk" (`sikhtimeline`) project across the portfolio card cover, case study modal hero, and gallery.

#### Investigation

- Identified 5 1080p WebP screenshots showing the interactive timeline kiosk application across key views: chapter selection, chronological ribbon, milestone story panel, deep-dive narrative, and full-screen archival artwork viewer with QR code bridge.
- Determined asset mapping:
  - Hero & Cover card: `InteractiveTimeline_1080p_07.05.2026_10-37-23_hzvexl.webp` (timeline chronological ribbon).
  - Gallery item 1: `..._vaeyd2.webp` (chapter navigation & era selection).
  - Gallery item 2: `..._hzvexl.webp` (chronological ribbon scroller).
  - Gallery item 3: `..._luzplb.webp` (milestone story panel & artwork).
  - Gallery item 4: `..._mvbueh.webp` (deep-dive narrative view).
  - Gallery item 5: `..._xqthbe.webp` (full-screen archival artwork viewer & QR bridge).

#### Changes

- `index.html`: Replaced placeholder spans in `<div class="work-cover" data-cover="sikhtimeline">` with an `<img class="work-cover-img">` targeting the primary timeline overview.
- `js/data.js`: Updated `sikhtimeline.hero` to `type: 'image'` with Cloudinary URL, and populated `sikhtimeline.gallery` with all 5 Cloudinary URLs with descriptive labels and captions for the lightbox modal.
- `project-data/shm/interactive-timeline-kiosk.md`: Appended `## Media Assets & Screenshots` section linking the 5 URLs.

#### Validation

- `node --check js/data.js` passed with zero errors.

---

### 2026-10-22 — Add Golden Temple Video Gallery for Sikh History Museum

#### Request

Add Golden Temple Video Gallery — Interactive Museum Kiosk (Client: Sikh History Museum, built at ViitorCloud Technologies) into the portfolio and `project-data/shm/`, completing all 3 SHM museum projects, then commit and push.

#### Investigation

- Examined kiosk requirements: walk-up touchscreen video wall letting museum visitors browse and watch curated Golden Temple documentary videos via scroll-snapping carousel.
- Evaluated technical architecture: Unity 6 (6000.0.25f1), C#, token-authenticated REST synchronization with `sikhhistorymuseum.org`, dynamic server-driven brand/color theming, custom video player with runtime chunk caching, and real-time news/information ticker.
- Re-aligned 6-column work grid across 14 total systems:
  - Row 1 (Sikh History Museum — 3 cards x 2 cols = 6 cols): `goldentemple`, `dualgallery`, `sikhtimeline`
  - Row 2 (CSMVS Museum Touchscreen Kiosks — 3 cards x 2 cols = 6 cols): `feedback`, `motw`, `rosetta`
  - Row 3 (CSMVS Museum Trade Displays — 2 cards x 3 cols = 6 cols): `tradewall`, `traderoute`
  - Row 4 (Flagship Commercial Platforms — 2 cards x 3 cols = 6 cols): `soreal`, `icc`
  - Row 5 (Multiplayer & Simulation — 3 cards x 2 cols = 6 cols): `ludo`, `cards`, `bus`
  - Row 6 (Action Game — 1 card x 2 cols = 2 cols): `arena`

#### Changes

- Created `project-data/shm/golden-temple-video-gallery.md` containing complete brief, metadata, architecture, challenges, and feature specifications; removed temporary `project-03.md` placeholder and updated `project-data/README.md`.
- Added `goldentemple` case study entry to `js/data.js` detailing video engine, server-driven theme pipeline, scroll-snap touch gallery, custom video player, and REST auth client.
- Added `goldentemple` card (`data-project="goldentemple"`, badge `GT`) to `index.html`, updated section subtitle to "Fourteen systems", and normalized SHM cards to form a cohesive 3-card trio in Row 1.
- Added `.work-cover[data-cover="goldentemple"]` warm gold & ochre gradient tint in `css/style.css`.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` and `node --check js/main.js`.
- Verified desktop (6-column) and mobile single-column responsive behavior.

### 2026-10-22 — Add Dual Gallery Interactive Display for Sikh History Museum

#### Request

Add Dual Gallery Interactive Display — Sikh History Museum Kiosk (Client: Sikh History Museum, built at ViitorCloud Technologies) into the portfolio and `project-data/shm/`, then commit and push.

#### Investigation

- Examined kiosk requirements: interactive touchscreen installation exploring the lives, travels, and teachings of Guru Nanak and the Ten Gurus through high-resolution archival photo galleries and documentary video clips.
- Evaluated technical architecture: Unity 6 (Windows Kiosk), C#, Universal Render Pipeline (URP), REST API media synchronization with Newtonsoft JSON, and automatic offline fallback to local cached media for zero-downtime gallery operation.
- Re-aligned 6-column work grid across 13 total systems:
  - Row 1 (Sikh History Museum — 2 cards x 3 cols = 6 cols): `dualgallery`, `sikhtimeline`
  - Row 2 (CSMVS Museum Touchscreen Kiosks — 3 cards x 2 cols = 6 cols): `feedback`, `motw`, `rosetta`
  - Row 3 (CSMVS Museum Trade Displays — 2 cards x 3 cols = 6 cols): `tradewall`, `traderoute`
  - Row 4 (Flagship Commercial Platforms — 2 cards x 3 cols = 6 cols): `soreal`, `icc`
  - Row 5 (Multiplayer & Simulation — 3 cards x 2 cols = 6 cols): `ludo`, `cards`, `bus`
  - Row 6 (Action Game — 1 card x 2 cols = 2 cols): `arena`

#### Changes

- Created `project-data/shm/dual-gallery-interactive-display.md` containing complete project brief, metadata, architecture, challenges, and feature specifications; removed temporary `project-02.md` placeholder and updated `project-data/README.md`.
- Added `dualgallery` case study entry to `js/data.js` covering multimedia engine, offline cache pipeline, hardware-accelerated video buffers, and kiosk UI.
- Added `dualgallery` card (`data-project="dualgallery"`, badge `DG`) to `index.html`, updated section subtitle to "Thirteen systems", and balanced grid rows.
- Added `.work-cover[data-cover="dualgallery"]` sage & warm ochre gradient tint in `css/style.css`.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` and `node --check js/main.js`.
- Verified desktop (6-column) and mobile single-column responsive behavior.

### 2026-10-22 — Create Organized project-data Directory and Project Briefs

#### Request

Create `project-data` directory on root level, containing all project information texts provided by the user and existing project details organized into sub-folders based on clients/institutions (e.g. `csmvs/`, `shm/`, and other existing projects), each as an individual, well-structured `.md` file.

#### Changes

- Created root `project-data/` folder with sub-folders for each client and publisher:
  - `project-data/csmvs/`: 5 projects (`interactive-trade-wall.md`, `museum-on-the-wheel.md`, `rosetta-stone-kiosk.md`, `trade-route-kiosk.md`, `visitor-feedback-kiosk.md`).
  - `project-data/shm/`: `interactive-timeline-kiosk.md`, plus placeholders `project-02.md` and `project-03.md` for upcoming briefs.
  - `project-data/soreal/`: `soreal-real-estate-platform.md`.
  - `project-data/ncore-games/`: `icc-cricket-mobile.md`.
  - `project-data/vasundhara-vision/`: `ludo-multiplayer.md`, `configurable-card-engine.md`.
  - `project-data/escrow-infotech/`: `heavy-bus-simulator.md`, `shooting-arena.md`.
  - `project-data/README.md`: Centralized index and navigation guide for all project data.
- Preserved exact user briefs and integrated complete technical architectures, operational challenges, solutions, and feature lists.

#### Validation

- Verified directory structure and file contents across all 15 markdown files.

### 2026-10-22 — Add Sikh History Interactive Timeline Kiosk

#### Request

Add Sikh History — Interactive Timeline Kiosk (Client: Sikh History Museum, built at ViitorCloud Technologies) into the portfolio, then commit and push.

#### Investigation

- Examined museum timeline requirements: chronological self-guided exploration spanning 1469 (birth of Guru Nanak) to modern times across three themed chapters (The Guru Period, Warrior Saints & Sikh Empire, British & Punjab).
- Analysed technical architecture: Unity (URP), C#, data-driven JSON schema for timeline milestones and assets without rebuilding, kinetic touch scrolling, full-screen archival image viewer with pan & zoom, and dynamic QR smartphone bridge for post-visit engagement.
- Re-aligned 6-column work grid across 12 total systems:
  - Row 1 (Museum Kiosks — 3 cards x 2 cols = 6 cols): `sikhtimeline`, `feedback`, `motw`
  - Row 2 (Museum Kiosks & Exhibits — 3 cards x 2 cols = 6 cols): `rosetta`, `tradewall`, `traderoute`
  - Row 3 (Flagship Commercial Platforms — 2 cards x 3 cols = 6 cols): `soreal`, `icc`
  - Row 4 (Multiplayer & Simulation — 3 cards x 2 cols = 6 cols): `ludo`, `cards`, `bus`
  - Row 5 (Action Game — 1 card x 2 cols = 2 cols): `arena`

#### Changes

- Added `sikhtimeline` case study entry to `js/data.js` detailing timeline architecture, kinetic scrolling, virtualized object pooling, archival image viewer, dynamic QR generator, and JSON data pipeline.
- Added `sikhtimeline` card (`data-project="sikhtimeline"`, badge `SH`) to `index.html`, updated section subtitle to "Twelve systems", and normalized `tradewall` and `traderoute` to standard 2-column cards to maintain a balanced 3x3 layout for museum exhibits.
- Added `.work-cover[data-cover="sikhtimeline"]` warm heritage tint in `css/style.css`.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` and `node --check js/main.js`.
- Verified layout and grid balance across desktop and mobile breakpoints.

### 2026-10-22 — Add Visitor Feedback Kiosk for CSMVS Museum

#### Request

Add Visitor Feedback Kiosk for CSMVS Museum, Mumbai into the portfolio, then commit and push.

#### Investigation

- Examined gallery feedback requirements: replace paper surveys with a 1-minute, 9-question touchscreen kiosk with optional anonymity.
- Analysed trilingual input (English, Hindi, Marathi) requiring custom Devanagari on-screen virtual keyboards in Unity.
- Verified store-and-forward offline queueing via SQLite/JSON with automated REST synchronization and curator admin panel with Excel export.
- Re-aligned 6-column work grid across 11 total projects: Row 1 groups three touchscreen kiosks (`feedback`, `motw`, `rosetta`), Row 2 pairs the exhibition trade map exhibits (`tradewall`, `traderoute`), Row 3 pairs commercial platforms (`soreal`, `icc`).

#### Changes

- Added `feedback` case study entry to `js/data.js` covering overview, gallery sentiment challenges, trilingual input engine, offline queue, admin dashboard, Excel export, and official CSMVS link.
- Added `feedback` card (`data-project="feedback"`, badge `VF`) to `index.html`, updated section subtitle to "Eleven systems", and balanced grid rows.
- Added `.work-cover[data-cover="feedback"]` gradient tint in `css/style.css`.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` and `node --check js/main.js`.
- Verified git status and diff across all modified files.

#### Remaining Work

- Replace media placeholders with photography/video assets when available.

#### Notes for Future Agents

- Case study ID is `feedback`. Cover mono badge is `VF`.

### 2026-10-22 — Add Museum on the Wheel: Interactive Trade Wall for CSMVS

#### Request

Add Museum on the Wheel — Interactive Trade Wall: Mobile museum kiosk experience for rural India (CSMVS Museum, Mumbai) into the portfolio, then commit and push.

#### Investigation

- Examined mobile travelling museum vehicle constraints: 4-wheel tempo visiting rural villages across India with zero internet connectivity.
- Analysed interaction paradigm: tap-only visual navigation for first-time touchscreen users, offline persistent media/data caching, Tauri Windows wrapper, and automated weekly email reporting.
- Re-aligned 6-column work grid across 10 total projects: Row 1 & 2 accommodate the four CSMVS interactive exhibits in featured pairs (`is-feature`, span 3 each).

#### Changes

- Added `motw` case study entry to `js/data.js` covering overview, rural outreach challenges, offline-first architecture, tap-first UI, bilingual English/Marathi pipeline, Tauri kiosk wrapper, and automated email telemetry.
- Added `motw` card (`data-project="motw"`, badge `MW`) to `index.html`, updated section subtitle to "Ten systems", and balanced museum cards across two featured rows.
- Added `.work-cover[data-cover="motw"]` gradient tint in `css/style.css`.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` and `node --check js/main.js`.
- Verified git status and diff across all modified files.

#### Remaining Work

- Replace media placeholders with photography/video assets from mobile vehicle tours when available.

#### Notes for Future Agents

- Case study ID is `motw`. Cover mono badge is `MW`.

### 2026-10-22 — Add Rosetta Stone Interactive Kiosk for CSMVS Museum

#### Request

Add Rosetta Stone Interactive Kiosk, CSMVS Museum, Mumbai into the portfolio, then commit and push.

#### Investigation

- Examined Rosetta Stone exhibit specifics: interactive hieroglyph drawing evaluation game ("How to Decode"), trilingual history exploration, idle attractor video screensaver, English/Marathi Devanagari typography, and automated weekly email digests.
- Structured work grid to align 9 total projects: Row 1 groups all 3 CSMVS Museum interactive exhibits (`rosetta`, `tradewall`, `traderoute`) across 6 columns (span 2 each).

#### Changes

- Added `rosetta` case study entry to `js/data.js` covering overview, problem statement, responsibilities, GPU-accelerated drawing comparison architecture, challenges, features, stack, achievements, lessons, process, gallery placeholders, and official CSMVS link.
- Added `rosetta` card (`data-project="rosetta"`, badge `RS`) to `index.html`, updated section subtitle to "Nine systems", and balanced Row 1 as a three-kiosk gallery suite.
- Added `.work-cover[data-cover="rosetta"]` gradient tint in `css/style.css`.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` and `node --check js/main.js`.
- Verified git status and diff across all modified files.

#### Remaining Work

- Replace media placeholders with photography/video assets when available.

#### Notes for Future Agents

- Case study ID is `rosetta`. Cover mono badge is `RS`.

### 2026-10-22 — Add Interactive Trade Wall: A Touch-Screen Museum Experience for CSMVS

#### Request

Add Interactive Trade Wall: A Touch-Screen Museum Experience for CSMVS project into the portfolio as an additional, separate CSMVS exhibit, then commit and push.

#### Investigation

- Verified dual-display museum kiosk architecture: digital touch-book controller paired with large wall map display.
- Integrated material exploration stories (lapis lazuli, shell, bitumen, carnelian, agate, cotton, gold, silver) and animated trade corridor mapping.
- Updated 6-column work grid to cleanly accommodate eight total case studies in balanced pairs and triplets.

#### Changes

- Added `tradewall` case study entry to `js/data.js` with full technical breakdown (dual-screen sync, runtime Marathi/English localization, backend content pipeline, offline resilience, kiosk lockdown, and weekly visitor analytics).
- Added `tradewall` card to `index.html` as a featured project card, updated section count to "Eight systems", and formatted `icc` alongside `soreal` for balanced 6-column rows.
- Added `.work-cover[data-cover="tradewall"]` gradient tint in `css/style.css`.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` and `node --check js/main.js`.
- Verified git status and diff across all modified files.

#### Remaining Work

- Replace media placeholders with photography/video assets when available.

#### Notes for Future Agents

- Case study ID is `tradewall`. Cover mono badge is `TW`.

### 2026-10-22 — Add Trade Route: Interactive Museum Kiosk for CSMVS

#### Request

Add Trade Route: Interactive Museum Kiosk for CSMVS project into the portfolio, then commit and push changes.

#### Investigation

- Examined `index.html` work section structure, `js/data.js` case study schema (`window.CASE_STUDIES`), and `css/style.css` cover tint styling.
- Checked grid responsiveness: 6-column desktop layout with feature cards spanning 3 columns.

#### Changes

- Added `traderoute` case study entry to `js/data.js` covering overview, problem statement, responsibilities, architecture, challenges, features, stack, achievements, lessons, process, gallery placeholders, and official CSMVS link.
- Added Trade Route card (`data-project="traderoute"`) to `index.html` in the Selected Work section, updated project count to seven systems, and adjusted grid spans.
- Added `.work-cover[data-cover="traderoute"]` gradient tint in `css/style.css`.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js`.
- Verified git status and diff across all modified files.

#### Remaining Work

- Replace media placeholders with photography/video assets when available.

#### Notes for Future Agents

- Case study ID is `traderoute`. Cover mono badge is `TR`.

### 2026-10-22 — Verify GitHub Connection and Remote Push Access

#### Request

Commit and push sample changes to verify that the repository is connected to GitHub.

#### Investigation

- Verified `origin` remote points to `https://github.com/chitrang313/chitrang313.github.io.git`.
- Configured authenticated push access.
- Confirmed non-interactive dry-run push succeeds with `Everything up-to-date`.

#### Changes

- Updated `docs/maintenance.md` with current repository connection status and recent maintenance history.

#### Validation

- Executed `git push --dry-run origin main` verifying push authentication.
- Pushed commit to `origin/main` on GitHub.

#### Remaining Work

- None. Connection is verified.

#### Notes for Future Agents

- Origin remote is authenticated for push operations on `main`.

## Important Discoveries

<!-- Record discoveries useful to future agents. If a discovery becomes durable project knowledge, move or summarize it in project context, architecture, decisions, or workflow instead of leaving it buried in history. -->

## Handoff Notes

<!-- Capture where to continue, completed investigation, remaining uncertainty, areas not to change without further investigation, and the next logical step. -->
