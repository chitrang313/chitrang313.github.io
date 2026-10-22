# Project Data Repository

This directory serves as the centralized source of truth for all project briefs, engineering notes, architectural breakdowns, and client requirements for Chitrang Patel's portfolio.

---

## Directory Structure

```
project-data/
├── README.md
├── csmvs/                             # Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum, Mumbai)
│   ├── interactive-trade-wall.md      # Dual-screen touch book + animated map wall
│   ├── museum-on-the-wheel.md         # Travelling mobile museum kiosk for rural India
│   ├── rosetta-stone-kiosk.md         # Interactive touch kiosk + hieroglyphic drawing game
│   ├── trade-route-kiosk.md           # Zoomable trade map + artifact exploration kiosk
│   └── visitor-feedback-kiosk.md      # Trilingual gallery feedback kiosk with offline sync
│
├── shm/                               # Sikh History Museum (SHM)
│   ├── dual-gallery-interactive-display.md # Interactive touchscreen multimedia gallery (Ten Gurus & Guru Nanak)
│   ├── golden-temple-video-gallery.md # Walk-up video wall kiosk with remote theming & REST sync
│   └── interactive-timeline-kiosk.md  # Interactive chronological timeline kiosk (1469–Modern)
│
├── map/                               # Museum of Art & Photography (MAP), Bengaluru
│   └── art-puzzle-kiosk.md            # Interactive sliding puzzle kiosk on up to 90" displays
│
├── rnd/                               # Research & Development / Unpublished Museum & Public Prototypes
│   ├── good-deed-tree.md              # The Good Deed Tree interactive kindness wall & 4K living 3D tree
│   └── tirthankaras-museum-journey.md # 24 Tirthankaras interactive map & multi-plane parallax journey
│
├── cuenect/                           # Cuenect
│   └── interactive-3d-showcase.md     # Tri-app 3D showcase & Sony Spatial Reality Display
│
├── soreal/                            # SoReal / ViitorCloud
│   └── soreal-real-estate-platform.md # Multi-user guided 3D interior walkthrough platform
│
├── ncore-games/                       # nCore Games
│   └── icc-cricket-mobile.md          # Officially licensed cricket simulation with GOAP AI
│
├── vasundhara-vision/                 # Vasundhara Vision
│   ├── ludo-multiplayer.md            # Real-time authoritative multiplayer board platform
│   └── configurable-card-engine.md    # Multi-variant card rules engine for 2 shipped games
│
└── escrow-infotech/                   # Escrow Infotech
    ├── heavy-bus-simulator.md         # Deterministic vehicle physics simulation
    └── shooting-arena.md              # Arcade vehicular combat & virtual economy
```

---

## Folder Summaries

### 1. `csmvs/` — Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (Mumbai)
Contains documentation for 5 interactive museum installations built at ViitorCloud Technologies:
- **`trade-route-kiosk.md`**: An interactive touchscreen map exploring four historical trade routes and physical gallery artefacts with offline caching and bilingual English/Marathi support.
- **`interactive-trade-wall.md`**: A bilingual, two-screen experience pairing a touch-screen book controller with an illuminated animated map wall.
- **`rosetta-stone-kiosk.md`**: A touchscreen exhibit station featuring historical deep-dives and a GPU-accelerated hieroglyphic drawing and decoding game.
- **`museum-on-the-wheel.md`**: A mobile travelling museum mounted on a 4-wheel tempo bringing Harappan civilization trade history to rural Indian villages with zero-connectivity offline operation.
- **`visitor-feedback-kiosk.md`**: A trilingual (English, Hindi, Marathi) gallery feedback kiosk with custom on-screen Devanagari virtual keyboards and transactional SQLite offline sync.

### 2. `shm/` — Sikh History Museum
Interactive touchscreen kiosk projects built at ViitorCloud Technologies:
- **`dual-gallery-interactive-display.md`**: Touchscreen multimedia gallery bringing the stories of Guru Nanak and the Ten Gurus to life with hardware-accelerated video, archival galleries, and automatic REST/offline caching.
- **`golden-temple-video-gallery.md`**: Walk-up interactive video gallery kiosk featuring scroll-snap browsing, remote brand/color theming from `sikhhistorymuseum.org`, custom video player, and live news ticker.
- **`interactive-timeline-kiosk.md`**: Touchscreen timeline kiosk allowing visitors to explore Sikh history from 1469 across three themed chapters with full-screen artwork and dynamic smartphone QR bridge.

### 3. `map/` — Museum of Art & Photography (MAP), Bengaluru
Interactive museum installation built at ViitorCloud Technologies:
- **`art-puzzle-kiosk.md`**: Large-format touchscreen sliding puzzle kiosk (up to 90" displays in portrait and landscape) featuring collection search, mobile photo upload bridge via QR code, interactive crop/zoom/rotate, and parity-checked solvable tile scrambling.

### 4. `rnd/` — Research & Development (Cultural Heritage & Interactive Prototypes)
Independent museum and public exhibition prototypes developed by Chitrang Patel:
- **`good-deed-tree.md`**: A multi-screen interactive collective art installation pairing a tablet kiosk with a 4K living 3D tree display, featuring swipe-to-release physics, GPU foliage instancing, Trie-based real-time profanity filtering, and an atmospheric idle attractor.
- **`tirthankaras-museum-journey.md`**: An interactive touch-screen exhibition prototype exploring the lives and sacred geography of the 24 Jain Tirthankaras through a dual-state map of India (Janma vs Moksha Bhumi), calm multi-plane parallax scenes, and an iconographic archival book reader.

### 5. `cuenect/` — Cuenect
Interactive 3D product showcase and spatial reality platform:
- **`interactive-3d-showcase.md`**: Distributed three-app ecosystem (Hub CMS, Experience display client, and Stream Android remote) powering offline interactive 3D product presentations on large screens and autostereoscopic Sony Spatial Reality Displays.

### 6. `soreal/` — SoReal
- **`soreal-real-estate-platform.md`**: Lead client engineering for an authoritative real-time 3D property walkthrough platform used by sales agents and buyers.

### 7. `ncore-games/` — nCore Games
- **`icc-cricket-mobile.md`**: Core systems, deterministic mathematics layer, and Goal-Oriented Action Planning (GOAP) AI decision engine for an officially licensed global mobile title.

### 8. `vasundhara-vision/` — Vasundhara Vision
- **`ludo-multiplayer.md`**: Authoritative Node.js/Socket.IO backend and client state machine for real-time mobile multiplayer matches.
- **`configurable-card-engine.md`**: Composable rules engine driving two commercially shipped titles with dynamic variant toggling and monetization.

### 9. `escrow-infotech/` — Escrow Infotech
- **`heavy-bus-simulator.md`**: Fixed-timestep vehicle handling simulation and data-driven level authoring pipeline.
- **`shooting-arena.md`**: Arcade space combat with state-driven enemy AI, centralized damage evaluation, and virtual economy.
