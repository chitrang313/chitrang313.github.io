# Interactive Trade Wall — A Touch-Screen Museum Experience

## Metadata
- **Project Name:** Interactive Trade Wall: A Touch-Screen Museum Experience for CSMVS
- **Client:** Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum, Mumbai)
- **Built At:** ViitorCloud Technologies
- **Role:** Interactive Systems Engineer — dual-screen synchronization, trade route engine, kiosk architecture
- **Timeline:** 2024 — Present
- **Platform:** Dual-Screen Installation (Touch-Screen Book Controller + Large Wall Display)
- **Tech Stack:** Unity, C#, DOTween, REST API, Windows Kiosk Mode, Local IPC Sync, Kiosk Analytics

---

## Project Brief (Provided Information)

### Short Description (Portfolio)
A bilingual, two-screen interactive kiosk built for CSMVS (Chhatrapati Shivaji Maharaj Vastu Sangrahalaya), Mumbai. Visitors browse an on-screen book of ancient trade materials such as lapis lazuli, shell, bitumen, carnelian, agate, cotton and gold and silver. Tapping a material opens its story. At the same time, an animated trade route is drawn across a historical map on a large display, so visitors can see where each material came from and how it travelled.

### How It Works (One Line)
The touch book is the visitor’s controller and the big screen shows the result: choose a material, read its history in English or Marathi, and watch its route light up on the map.

### Highlights
- Two synchronised screens: a touch book and a large map display
- Full English and Marathi support, with one-tap language switching
- Content updated from a backend, with no app rebuild
- Built-in analytics with a weekly visitor report
- Built in Unity (C#) for a Windows touch kiosk
- Role / tech line: Unity · C# · DOTween · REST API · Kiosk analytics

---

## Engineering Details & Architecture

### Overview
Designed for CSMVS Museum, this dual-screen installation transforms ancient maritime and overland trade histories into an immersive visual dialogue. The visitor stands before an interactive podium styled as an open digital ledger ("touch book"), controlling an expansive, animated trade map projected on a large architectural wall display.

### Operational Challenges & Solutions
1. **Low-Latency Dual-Screen Orchestration:**
   - *Challenge:* Coordinating actions across two screens in real time without lag or dropped synchronization frames.
   - *Solution:* Implemented a local high-speed inter-process communication (IPC) channel between the touch podium and the display screen, ensuring zero perceived latency when materials are selected.
2. **Synchronized Multilingual Typography:**
   - *Challenge:* Maintaining uniform font aesthetics and text reflow across English and complex Devanagari script (Marathi) on both screens simultaneously.
   - *Solution:* Integrated custom TextMeshPro font atlases with tailored baseline offsets, kerning tables, and dynamic layout constraints.
3. **Data-Driven Curatorial Updates:**
   - *Challenge:* Curators frequently uncover new archaeological findings and need to update narratives and trade waypoints without developer intervention.
   - *Solution:* Engineered a schema-validated REST/JSON ingestion pipeline that fetches route nodes, historical descriptions, and artefact imagery dynamically, saving them into local persistence for offline reliability.

### Architectural Layers
- **Dual-Screen Window Manager:** Manages multi-monitor display outputs, resolution locks, and input isolation.
- **IPC Synchronization Bus:** Dispatches state events from the touch controller to the wall map display.
- **Touch Book Controller:** Interactive book interface for browsing ancient trade goods and materials.
- **Spline Map Animator:** Renders smooth particle trails and animated journey routes across ancient terrains using DOTween.
- **Bilingual Content Engine:** Handles real-time English and Marathi string and media swapping.
- **Analytics & Watchdog Service:** Monitors continuous hardware health and compiles weekly visitor engagement metrics.
