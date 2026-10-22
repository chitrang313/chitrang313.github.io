# Museum on the Wheel — Interactive Trade Wall

## Metadata
- **Project Name:** Museum on the Wheel — Interactive Trade Wall: Mobile museum kiosk experience for rural India
- **Client:** Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum, Mumbai)
- **Built At:** ViitorCloud Technologies
- **Role:** Interactive Systems Engineer — mobile kiosk software, offline storage pipeline, bilingual UX
- **Timeline:** 2024 — Present
- **Platform:** Custom 4-Wheel Mobile Exhibition Vehicle (Tempo-Mounted Touchscreen Displays)
- **Tech Stack:** Unity 6, C#, Tauri (Windows desktop container), Offline File Caching, REST Backend, Bilingual Content Pipeline

---

## Project Brief (Provided Information)

### Showcase Description
Museum on the Wheel is a travelling museum on a 4-wheel tempo that drives village to village across India, carrying ancient history to people far from any city museum. Mounted on the tempo: multiple large touch screens running this Unity app. Villagers walk up, touch, and explore the ancient world — trade routes, materials, and the stories of how goods moved across the Harappan civilization.

I built the touch-screen software powering those screens.

### What Villagers Experience
- **Interactive map of ancient trade routes:** Touch any trade point → see what materials and products moved through it.
- **Rich stories:** Each product opens with images + description. Learn where carnelian, bitumen, textiles came from and how they travelled.
- **Two languages:** English and Marathi, switch anytime. Local-language access = real reach.
- **Simple, tap-only interface:** No manual, no keyboard. Anyone can use it.

### Built for the Road (Engineering)
- **Fully offline:** Villages have no reliable internet. App caches all data + images to the device once, then runs forever without network. On first setup online, syncs everything; after that, zero connectivity needed.
- **Kiosk-locked:** Full-screen, no exit, no OS access. Survives public hands-on use all day.
- **Silent analytics:** Tracks which products draw interest, language preference, screen time per village. Generates weekly reports auto-emailed to the museum team → data on what rural audiences engage with.

### Stack
Unity 6 · C# · Tauri (Windows desktop) · offline file caching · REST backend · bilingual content pipeline

---

## Engineering Details & Architecture

### Overview
Museum on the Wheel takes cultural heritage beyond traditional museum walls. Housed in a custom-engineered mobile vehicle traveling through rural districts, the software faces harsh operating constraints: extreme dust and heat vibration, intermittent power, completely absent cellular connectivity, and audiences of all ages who may have never interacted with a digital kiosk before.

### Operational Challenges & Solutions
1. **Zero-Connectivity Field Operation:**
   - *Challenge:* Remote villages often have zero mobile coverage or Wi-Fi.
   - *Solution:* Implemented an authoritative offline-first storage model. All archaeological data, route vectors, and high-resolution images are permanently cached on the vehicle's onboard solid-state storage during terminal maintenance.
2. **Ruggedized Kiosk Shell:**
   - *Challenge:* Unsupervised public use by crowds of curious schoolchildren and villagers requires extreme tamper resistance.
   - *Solution:* Packaged with Tauri/Windows native kiosk policies to prevent keyboard shortcuts, gesture escapes, or OS error dialogs from breaking full-screen immersion.
3. **Inclusive, Non-Technical UX:**
   - *Challenge:* Designing an interface that requires zero digital literacy.
   - *Solution:* Built a purely gestural, visual-first interface with large tap zones, high-contrast typography, and instant toggle between English and Marathi.

### Architectural Layers
- **Native Kiosk Wrapper (Tauri & Windows):** Enforces hardware windowing, auto-starts on boot, and suppresses OS hotkeys.
- **Harappan Trade Map Engine:** Vector map renderer illustrating ancient Indus Valley trade routes and regional hubs.
- **Story & Artifact Modal:** Audio-visual story cards exploring trade commodities (carnelian, shell, lapis, cotton).
- **Bilingual Font Pipeline:** Devanagari Unicode font rendering optimized for outdoor readability in harsh sunlight.
- **Offline Data Repository:** Encrypted local JSON and media blob cache with resilient checksum verification.
- **Silent Field Telemetry:** Tracks per-session route choices, language trends, and dwell times, queueing digests until periodic network sync.
