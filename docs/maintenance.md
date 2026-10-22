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

### 2026-10-22 — Add TouchWall Interactive Projection Touch Installation

#### Request

Add TouchWall: Touch the Wall, the Story Plays (Interactive projection mapping & invisible touch surface installation) into the portfolio and `project-data/rnd/`, bringing the total projects to 21, then commit and push.

#### Investigation

- Examined project mechanics:
  - Invisible touch surface sensing: flush planar IR laser curtain / 2D solid-state LiDAR scanning 2mm above plain architectural drywall, stone, or plaster walls with sub-10mm spatial accuracy and sub-15ms response latency.
  - Projection mapping & 4-point homography calibration: software projective warp compensating for projector throw angles, keystone distortion, and surface irregularities.
  - Zero-hardware architectural integration: ultra-short-throw laser projector and sensors recessed into ceiling soffits and room trim, maintaining clean architectural aesthetics with zero visible screens, kiosks, or buttons.
  - Toggle interaction & media playback: touching a spot reveals a large-format story video via dynamic aperture shader; touching again closes it smoothly; inactivity timer resets to quiet standby.
  - On-site media hot-swapping: local file-system watcher allows venue staff to drag-and-drop standard MP4/WebM files onto a USB drive to update video slots without restarting or recompiling the app.
  - 100% offline standalone operation: zero internet required, integrated RS-232 / CEC projector sleep/wake scheduling.
- Re-balanced 6-column work grid across 21 total systems into 7 perfectly uniform rows of 3 standard cards each (42 columns total, 0 orphaned slots):
  - Row 1 (Sikh History Museum — 3 cards x 2 cols = 6 cols): `goldentemple`, `dualgallery`, `sikhtimeline`
  - Row 2 (CSMVS Museum Kiosks — 3 cards x 2 cols = 6 cols): `feedback`, `motw`, `rosetta`
  - Row 3 (CSMVS Trade & MAP Bengaluru — 3 cards x 2 cols = 6 cols): `tradewall`, `traderoute`, `mappuzzle`
  - Row 4 (Interactive Walls, IoT & Living Tree Installations — 3 cards x 2 cols = 6 cols): `touchwall`, `treelight`, `deedtree`
  - Row 5 (Digital Twins, Cultural Heritage & Spatial Reality — 3 cards x 2 cols = 6 cols): `digitaltwin`, `tirthankaras`, `cuenect`
  - Row 6 (Enterprise Platforms & Real-Time Simulations — 3 cards x 2 cols = 6 cols): `soreal`, `icc`, `ludo`
  - Row 7 (Classic Game Engines & Simulators — 3 cards x 2 cols = 6 cols): `cards`, `bus`, `arena`

#### Changes

- `project-data/rnd/touch-wall.md`: Created comprehensive project documentation detailing planar optical sensing, homography calibration, zero-hardware architectural integration, video playback pipeline, and on-site media hot-swapping.
- `project-data/README.md`: Updated directory tree and folder summary section 4 with `touch-wall.md`.
- `js/data.js`: Added comprehensive `touchwall` case study object to `window.CASE_STUDIES` complete with overview, problem, responsibilities, architecture layers, challenges/solutions, features, stack, achievements, process, lessons, gallery placeholders, and links.
- `css/style.css`: Added `.work-cover[data-cover="touchwall"]` luminous projection tint.
- `index.html`: Updated subtitle to "Twenty-one systems", inserted `touchwall` card (`data-project="touchwall"`, monogram badge `TC`), and normalized `cuenect` and `soreal` to standard span-2 cards to achieve 7 rows of 3 standard cards.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` and `node --check js/main.js` (both exit code 0).
- Validated runtime parsing of `js/data.js` via Node vm, verifying all 21 case study keys are properly registered.
- Verified grid column mathematics: 21 standard cards x 2 cols = 42 columns / 6 columns per row = exactly 7 full rows (zero orphaned slots).

---

### 2026-10-22 — Add Tree Light-Up and DigitalTwinLights IoT Installations

#### Request

Add two interactive hardware-software installations into the portfolio and `project-data/rnd/`:
1. "Tree Light-Up: Touch to Make a Tree Glow" (Interactive physical computing display connecting a touchscreen kiosk to a physical tree with four color strands, organic climbing/breathing animations, physical bulbs, and standalone wireless connectivity).
2. "DigitalTwinLights — Real Lights, Mirrored Live" (Hands-on digital twin demonstration pairing a physical 4-switch control panel with an exact virtual 3D replica in Unity URP, mirroring states live with sub-15ms latency).
This brings the total portfolio projects to 20 systems.

#### Investigation

- Examined project mechanics:
  - Tree Light-Up: Physical computing installation decoupling touchscreen UI from physical tree actuation; four independent color strands (red, green, blue, amber); cubic ease-out progressive climbing curves; non-linear gamma-corrected 0.2 Hz sinusoidal breathing pulses; optocoupled zero-crossing SSR drivers for real Edison filament bulbs; standalone local ESP32 Wi-Fi Access Point and connectionless UDP telemetry (<15ms glass-to-photon latency) with zero venue network setup.
  - DigitalTwinLights: Industrial IoT digital twin demonstration; heavy-duty industrial toggle switches with RC debouncing; microsecond GPIO edge interrupts (ISRs); sub-3ms binary telemetry packet streaming over local socket; CAD-accurate 3D control panel replica in Unity 6 (URP) with PBR materials, dynamic emissive filament shaders, and real-time shadow-casting point lights; authoritative state reconciler with initial state dump and 1 Hz background heartbeat.
- Balanced 6-column work grid across 20 total systems into 7 full rows (42 columns total, exactly 0 orphaned slots):
  - Row 1 (Sikh History Museum — 3 cards x 2 cols = 6 cols): `goldentemple`, `dualgallery`, `sikhtimeline`
  - Row 2 (CSMVS Museum Kiosks — 3 cards x 2 cols = 6 cols): `feedback`, `motw`, `rosetta`
  - Row 3 (CSMVS Trade & MAP Bengaluru — 3 cards x 2 cols = 6 cols): `tradewall`, `traderoute`, `mappuzzle`
  - Row 4 (Physical Computing, IoT & Living Tree Installations — 3 cards x 2 cols = 6 cols): `treelight`, `digitaltwin`, `deedtree`
  - Row 5 (Featured 3D Interactive Platforms — 2 cards x 3 cols = 6 cols): `cuenect` (is-feature), `soreal` (is-feature)
  - Row 6 (Cultural Systems, Sports & Multiplayer Simulations — 3 cards x 2 cols = 6 cols): `tirthankaras`, `icc`, `ludo`
  - Row 7 (Classic Game Engines & Simulators — 3 cards x 2 cols = 6 cols): `cards`, `bus`, `arena`

#### Changes

- `project-data/rnd/tree-light-up.md`: Created detailed project documentation detailing the physical-digital IoT architecture, non-blocking parametric climbing/breathing math, optocoupled SSR safety, and standalone AP resilience.
- `project-data/rnd/digital-twin-lights.md`: Created comprehensive digital twin documentation covering hardware interrupt routines, low-latency socket telemetry, Unity URP PBR shaders, state reconciliation, and industrial SCADA/PLC scalability.
- `project-data/README.md`: Updated directory tree and folder summary section 4 with `tree-light-up.md` and `digital-twin-lights.md`.
- `js/data.js`: Added comprehensive `treelight` and `digitaltwin` case study objects to `window.CASE_STUDIES` complete with overview, problem, responsibilities, architecture layers, challenges/solutions, features, stack, achievements, process, lessons, gallery placeholders, and links.
- `css/style.css`: Added `.work-cover[data-cover="treelight"]` and `.work-cover[data-cover="digitaltwin"]` gradient tints.
- `index.html`: Updated subtitle to "Twenty systems", inserted cards for `treelight` (monogram badge `TL`) and `digitaltwin` (monogram badge `DL`), styled `cuenect` and `soreal` as `is-feature` (span 3), and balanced Row 4, 5, 6, 7 across the 6-column grid.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` and `node --check js/main.js` (both exit code 0).
- Validated runtime parsing of `js/data.js` via Node vm, verifying all 20 case study keys are properly registered.
- Verified grid column mathematics: 18 standard cards x 2 cols + 2 feature cards x 3 cols = 36 + 6 = 42 columns / 6 columns per row = exactly 7 full rows (zero orphaned slots).

---

### 2026-10-22 — Add The Good Deed Tree Interactive Kindness Wall

#### Request

Add The Good Deed Tree: An Interactive Kindness Wall (Multi-screen public exhibition installation) into the portfolio and `project-data/rnd/`, bringing the total projects to 18, then commit and push.

#### Investigation

- Examined project mechanics: multi-screen collective art installation coupling an in-gallery touch tablet kiosk with a monumental 4K wall display running a living 3D tree.
- Cross-screen physics handoff: visitor types a personal deed of kindness, swipes the digital leaf upward off the tablet; the leaf launches seamlessly onto the giant 4K screen with matching velocity, angle, and timing over local socket (<10ms).
- Dynamic living 3D tree: procedural branch growth with GPU foliage instancing and LOD scaling, enabling thousands of cumulative visitor leaves to flourish without dropping below 60 FPS in 4K resolution.
- On-device content safety: offline Trie-based profanity filter with leetspeak/homoglyph normalization, ensuring 100% family-friendly public display without cloud dependencies.
- Autonomous ambient attractor: idle state machine with procedural volumetric god-rays, boid flocking birds, and floating memories of past deeds.
- Re-balanced 6-column work grid across 18 total systems into 6 perfectly balanced rows of 3 standard cards each (36 columns total, 0 orphaned slots):
  - Row 1 (Sikh History Museum — 3 cards x 2 cols = 6 cols): `goldentemple`, `dualgallery`, `sikhtimeline`
  - Row 2 (CSMVS Museum Kiosks — 3 cards x 2 cols = 6 cols): `feedback`, `motw`, `rosetta`
  - Row 3 (CSMVS Trade & MAP Bengaluru — 3 cards x 2 cols = 6 cols): `tradewall`, `traderoute`, `mappuzzle`
  - Row 4 (Interactive Installations, R&D & 3D — 3 cards x 2 cols = 6 cols): `deedtree`, `tirthankaras`, `cuenect`
  - Row 5 (Enterprise Platforms, Real-Time Sims & Multiplayer — 3 cards x 2 cols = 6 cols): `soreal`, `icc`, `ludo`
  - Row 6 (Engine Architecture, Vehicle Physics & Space Combat — 3 cards x 2 cols = 6 cols): `cards`, `bus`, `arena`

#### Changes

- `project-data/rnd/good-deed-tree.md`: Created detailed project documentation detailing the two-screen ecosystem, bezel-spanning gesture handoff, GPU-instanced 3D tree foliage, on-device Trie profanity filtering, and offline resilience.
- `project-data/README.md`: Updated directory tree and folder summary section 4 with `good-deed-tree.md`.
- `js/data.js`: Added comprehensive `deedtree` case study object with overview, problem, responsibilities, architecture layers, challenges/solutions, features, stack, achievements, and workflow process.
- `css/style.css`: Added `.work-cover[data-cover="deedtree"]` emerald/gold morning tint gradient.
- `index.html`: Updated subtitle to "Eighteen systems", inserted `deedtree` card (`data-project="deedtree"`, monogram badge `DT`), and normalized `cuenect` and `soreal` to standard span-2 cards for 6 perfectly filled rows.

#### Validation

- Validated JavaScript syntax using `node --check js/data.js` (exit code 0).
- Verified grid column mathematics: 18 cards x 2 columns = 36 columns / 6 columns per row = exactly 6 full rows.

---

### 2026-10-22 — Add Cuenect Interactive 3D Product Showcase

#### Request

Add Cuenect: Interactive 3D Product Showcase (Client: Cuenect, built at ViitorCloud Technologies) into the portfolio and `project-data/cuenect/`, bringing the total projects to 17, then commit and push.

#### Investigation

- Examined project mechanics: distributed three-app ecosystem (Hub CMS, Experience display client, and Stream Android companion remote) operating over an isolated local network (zero internet needed at venues).
- Supported cutting-edge hardware: autostereoscopic Sony Spatial Reality Display (ELF-SR1/ELF-SR2) with real-time 60 FPS eye-sensing facial tracking view frustum adjustments, plus large-format standard 4K/8K showroom displays.
- Sub-12ms touch-to-screen presenter remote telemetry via binary WebSocket/TCP local socket streaming.
- Re-aligned 6-column work grid across 17 total systems to maintain full row parity and thematic symmetry:
  - Row 1 (Sikh History Museum — 3 cards x 2 cols = 6 cols): `goldentemple`, `dualgallery`, `sikhtimeline`
  - Row 2 (CSMVS Museum Kiosks — 3 cards x 2 cols = 6 cols): `feedback`, `motw`, `rosetta`
  - Row 3 (CSMVS Trade & MAP Bengaluru — 3 cards x 2 cols = 6 cols): `tradewall`, `traderoute`, `mappuzzle`
  - Row 4 (Featured 3D Interactive Platforms — 2 cards x 3 cols = 6 cols): `cuenect` (is-feature), `soreal` (is-feature)
  - Row 5 (Digital Systems & Simulations — 3 cards x 2 cols = 6 cols): `tirthankaras`, `icc`, `ludo`
  - Row 6 (Classic Game Engines & Simulators — 3 cards x 2 cols = 6 cols): `cards`, `bus`, `arena`

#### Changes

- `project-data/cuenect/interactive-3d-showcase.md`: Created detailed project documentation detailing the tri-app ecosystem, Sony Spatial Reality SDK integration, low-latency mobile telemetry, and offline venue resilience.
- `project-data/README.md`: Updated directory tree and folder summaries with `cuenect/`.
- `js/data.js`: Added `cuenect` case study entry containing complete overview, problem statement, responsibilities, architecture, challenges/solutions, features, stack, achievements, process, and lessons.
- `index.html`: Added `cuenect` card (`data-project="cuenect"`, cover badge `CU`), styled as `is-feature` (span 3) paired with `soreal` in Row 4, normalized `tirthankaras`, `icc`, and `ludo` to standard span 2 cards in Row 5, and updated subtitle to "Seventeen systems".
- `css/style.css`: Added `.work-cover[data-cover="cuenect"]` gradient styling.

#### Validation

- `node --check js/data.js` passed with zero errors.

---

### 2026-10-22 — Add 24 Tirthankaras Museum Journey R&D Project

#### Request

Add 24 Tirthankaras — An Interactive Museum Journey (R&D exhibition prototype developed by Chitrang Patel, client name strictly confidential/omitted) into the portfolio and `project-data/rnd/`, bringing the total projects to 16, then commit and push.

#### Investigation

- Examined project mechanics: dual-state geospatial map of India (instant one-touch toggle between Janma Bhumi birthplaces and Moksha Bhumi liberation sites with pinch-to-zoom and site pins), serene vertical 4-plane parallax diorama scenes (foreground flora, midground Tirthankara under sacred enlightenment tree with heraldic lanchhana, background hills, and atmospheric clouds/birds), and an archival iconography book reader detailing parentage, complexions, symbols, and life stories.
- Confirmed zero-dependency offline tablet kiosk capability and lightweight WebGL cross-platform deployment.
- Re-aligned the 6-column work grid across 16 total projects to achieve full row parity with zero orphaned cards:
  - Row 1 (Sikh History Museum — 3 cards x 2 cols = 6 cols): `goldentemple`, `dualgallery`, `sikhtimeline`
  - Row 2 (CSMVS Museum Kiosks — 3 cards x 2 cols = 6 cols): `feedback`, `motw`, `rosetta`
  - Row 3 (CSMVS Trade & MAP Bengaluru — 3 cards x 2 cols = 6 cols): `tradewall`, `traderoute`, `mappuzzle`
  - Row 4 (Featured Cultural & 3D Platforms — 2 cards x 3 cols = 6 cols): `tirthankaras` (is-feature), `soreal` (is-feature)
  - Row 5 (Featured Real-Time Flagships — 2 cards x 3 cols = 6 cols): `icc` (is-feature), `ludo` (is-feature)
  - Row 6 (Classic Game Engines & Simulators — 3 cards x 2 cols = 6 cols): `cards`, `bus`, `arena`

#### Changes

- `project-data/rnd/tirthankaras-museum-journey.md`: Created detailed R&D project documentation omitting client name as requested, capturing dual-state map algorithms, 4-plane parallax renderer, canonical iconography database, and offline tablet architecture.
- `project-data/README.md`: Updated directory tree and folder summaries with `rnd/`.
- `js/data.js`: Added `tirthankaras` case study entry containing complete overview, problem statement, responsibilities, architecture, challenges/solutions, features, stack, achievements, process, and lessons.
- `index.html`: Added `tirthankaras` card (`data-project="tirthankaras"`, cover badge `24`), styled as `is-feature` (span 3), set `ludo` as `is-feature` (span 3) to pair with `icc`, and updated subtitle to "Sixteen systems".
- `css/style.css`: Added `.work-cover[data-cover="tirthankaras"]` gradient styling.

#### Validation

- `node --check js/data.js` passed with zero errors.

---

### 2026-10-22 — Add MAP Art Puzzle Kiosk for Museum of Art & Photography

#### Request

Add MAP Art Puzzle — Interactive Sliding Puzzle Kiosk for the Museum of Art & Photography (MAP), Bengaluru (built at ViitorCloud Technologies) into the portfolio and `project-data/map/`, bringing the total projects to 15, then commit and push.

#### Investigation

- Examined project mechanics: large-format touch-screen puzzle kiosk on screens up to 90" in portrait and landscape orientation, collection browsing with multi-facet metadata search, smartphone photo upload bridge via ephemeral QR code pairing, multi-touch crop/zoom/rotate engine, guaranteed solvable sliding puzzle generator (inversion parity verification), and artwork-specific high scores.
- Re-balanced 6-column work grid across 15 total systems:
  - Row 1 (Sikh History Museum — 3 cards x 2 cols = 6 cols): `goldentemple`, `dualgallery`, `sikhtimeline`
  - Row 2 (CSMVS Museum Kiosks — 3 cards x 2 cols = 6 cols): `feedback`, `motw`, `rosetta`
  - Row 3 (CSMVS & MAP Bengaluru — 3 cards x 2 cols = 6 cols): `tradewall`, `traderoute`, `mappuzzle`
  - Row 4 (Flagship Commercial Platforms — 2 cards x 3 cols = 6 cols): `soreal`, `icc`
  - Row 5 (Multiplayer & Simulation — 3 cards x 2 cols = 6 cols): `ludo`, `cards`, `bus`
  - Row 6 (Action Game — 1 card x 2 cols = 2 cols): `arena`

#### Changes

- `project-data/map/art-puzzle-kiosk.md`: Created detailed project document capturing provided information and in-depth architectural breakdown (parity verification, UV tile slicing, multi-touch affine transform, QR upload bridge).
- `project-data/README.md`: Updated directory structure and folder summaries with `map/`.
- `js/data.js`: Added `mappuzzle` case study entry containing complete overview, problem, responsibilities, architecture, challenges/solutions, features, stack, achievements, process, and lessons.
- `index.html`: Added `mappuzzle` card (`data-project="mappuzzle"`, cover badge `MP`), normalized `tradewall` and `traderoute` to standard 2-column cards, and updated subtitle to "Fifteen systems".
- `css/style.css`: Added `.work-cover[data-cover="mappuzzle"]` gradient styling.

#### Validation

- `node --check js/data.js` passed with zero errors.

---

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
