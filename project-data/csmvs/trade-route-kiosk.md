# Trade Route — Interactive Museum Kiosk

## Metadata
- **Project Name:** Trade Route: Interactive Museum Kiosk for CSMVS
- **Client:** Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum, Mumbai)
- **Built At:** ViitorCloud Technologies
- **Role:** Interactive Systems Engineer — kiosk architecture, map engine, offline sync
- **Timeline:** 2024 — Present
- **Platform:** Windows Touchscreen Kiosk Display
- **Tech Stack:** Unity 6, C#, Universal Render Pipeline (URP), DOTween, REST API, Persistent Local Caching

---

## Project Brief (Provided Information)

### Short Description (Project Card)
An interactive touchscreen kiosk built for CSMVS Museum. Visitors explore four ancient trade routes through a zoomable map and real artefacts, in English and Marathi.

### How It Works (Project Page)
Visitors pick a route on a zoomable map, and the app animates the journey between cities. Each route opens a panel with its history and the goods traded along it. Tapping a hotspot shows an artefact and its story. Visitors can switch between English and Marathi at any time.

The kiosk runs fully offline. It loads content from the backend when online and falls back to saved data when not. It runs in full-screen kiosk mode, with hidden staff controls to exit, restart or shut down the machine. A built-in analytics module records which routes, artefacts and languages visitors use, and produces weekly reports.

### Built With
Unity 6, C#, URP, DOTween, a REST backend, Windows kiosk deployment.

---

## Engineering Details & Architecture

### Overview
Built for the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum, Mumbai), Trade Route is an interactive touchscreen kiosk application that brings ancient mercantile history to life. Museum visitors explore four historical trade routes across a high-resolution, zoomable interactive map connected to physical artefacts displayed in the gallery.

### Operational Challenges & Solutions
1. **Unpredictable Gallery Connectivity:**
   - *Challenge:* Gallery network connectivity is unpredictable, but public museum exhibits must operate without interruption.
   - *Solution:* Designed a fully offline-capable architecture: all map assets, trade route data, and artefact narratives are bundled locally and cached. The app polls the REST backend in the background when connected, synchronizing updates without ever blocking visitor interaction.
2. **Unattended Hardware Lockdown:**
   - *Challenge:* Unattended public hardware requires strict lockdown to prevent visitors from accessing Windows desktop or OS settings.
   - *Solution:* Built a dedicated kiosk shell mode disabling OS hotkeys and edge-swipe gestures, coupled with a hidden multi-touch staff gesture that reveals an administrative panel for secure exit, reboot, or maintenance.
3. **Fluid Touch Responsiveness at 60 FPS:**
   - *Challenge:* Fluid map zooming and route animations must maintain locked 60 FPS under continuous visitor touch input.
   - *Solution:* Utilized Unity 6 Universal Render Pipeline (URP), DOTween easing sequences, sprite atlas batching, and strict texture memory budgeting to eliminate frame drops across hours of continuous use.
4. **Curatorial Analytics:**
   - *Challenge:* Measuring exhibit engagement without collecting personally identifiable information.
   - *Solution:* Engineered an on-device analytics module that tracks aggregate engagement—most visited routes, popular artefacts, and language distribution—and automatically aggregates metrics into weekly reports for museum curators.

### Architectural Layers
- **Kiosk Supervision:** Full-screen lockdown, watchdog monitor, hidden staff administration controls.
- **Map & Journey Engine:** Zoomable navigation, city waypoints, spline-based journey animations via DOTween.
- **Artefact & Exhibit Layer:** Interactive hotspots, modal artefact details, bilingual media cards.
- **Localization System:** Dynamic runtime English/Marathi string and asset swapping.
- **Data & Cache Layer:** REST backend sync with automatic offline fallback to local database.
- **Analytics Engine:** Local visitor telemetry, dwell time tracking, weekly digest generation.

### Key Features
- Interactive zoomable map exploring four ancient trade routes.
- Animated journey transitions tracking historic trade routes between cities.
- Detailed panels with historical narratives and commodities traded.
- Interactive artefact hotspots revealing physical museum pieces and their stories.
- Real-time bilingual support with instant English/Marathi language switching.
- Fully offline operation with resilient REST backend caching and synchronization.
- Full-screen Windows kiosk mode with hidden staff administrative controls.
- Built-in analytics tracking visitor interactions with automated weekly reporting.
