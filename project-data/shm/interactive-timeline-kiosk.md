# Sikh History — Interactive Timeline Kiosk

## Metadata
- **Project Name:** Sikh History — Interactive Timeline Kiosk
- **Client:** Sikh History Museum
- **Built At:** ViitorCloud Technologies
- **Role:** Interactive Systems Engineer — timeline architecture, content pipeline, UI/UX
- **Timeline:** 2023 — 2024
- **Platform:** Touchscreen Kiosk Display
- **Tech Stack:** Unity (Universal Render Pipeline / URP), C#, Data-driven JSON Pipeline, Touchscreen Kiosk, Dynamic QR Subsystem

---

## Project Brief (Provided Information)

### Short Description
An interactive touchscreen kiosk that lets museum visitors explore the history of Sikhism through a visual timeline. Starting from the birth of Guru Nanak in 1469, visitors tap and scroll through key events across three themed chapters — The Guru Period, Warrior Saints and the Sikh Empire, and British and Punjab. Each event opens into a detailed story with historical artwork that can be viewed full-screen. A QR code links visitors to the museum’s website to continue learning after they leave.

### Purpose
Turn a static history lesson into a hands-on, self-guided experience. The kiosk lets anyone walk up and explore Sikh heritage at their own pace — making the museum’s collection more engaging, educational, and accessible to visitors of all ages.

### Tech Stack
- **Engine:** Unity (Universal Render Pipeline / URP)
- **Language:** C#
- **Content:** Data-driven (JSON) so timeline events and images update without rebuilding the app
- **Platform:** Touchscreen kiosk display

---

## Engineering Details & Architecture

### Overview
Spanning more than five centuries from the birth of Guru Nanak in 1469 through the modern era, this interactive kiosk transforms chronological archival research into a fluid, hands-on exhibition experience. The timeline is organized into three distinct historical epochs:
1. **The Guru Period (1469–1708):** The foundational eras of the ten Gurus, the compilation of the Guru Granth Sahib, and community institutions.
2. **Warrior Saints and the Sikh Empire (1708–1849):** The era of Baba Banda Singh Bahadur, the Misls, and the sovereign reign of Maharaja Ranjit Singh.
3. **British and Punjab (1849–Modern Era):** The Anglo-Sikh wars, colonial history, the partition of Punjab, and contemporary global heritage.

### Operational Challenges & Solutions
1. **Dynamic Content Without App Rebuilds:**
   - *Challenge:* Museum historians and curators regularly acquire higher-resolution scans, refined dates, and newly translated narratives. Recompiling a Unity binary for minor text fixes is slow and cost-prohibitive.
   - *Solution:* Built a strict JSON schema loader. Event chronologies, chapter groupings, thumbnail pointers, and full-resolution painting manifests are parsed at startup, allowing curators to modify content simply by updating local JSON files and asset folders.
2. **Virtualized Kinetic Touch Navigation:**
   - *Challenge:* Scrolling hundreds of historical milestone cards with heavy paintings on a large touch screen can cause frame stutter and memory bloat.
   - *Solution:* Implemented an object-pooling virtualized scroll engine. Only off-screen cards are recycled, and 4K archival textures are streamed asynchronously using Unity Addressables, keeping memory footprint low and locking performance at 60 FPS.
3. **Archival Artwork Deep-Dive Viewer:**
   - *Challenge:* Visitors need to closely inspect intricate historical paintings and illuminated manuscripts on display.
   - *Solution:* Engineered a full-screen image viewer supporting multi-touch gestures (pinch-to-zoom, pan with momentum, double-tap to reset) and high-fidelity texture filtering.
4. **Post-Visit Web Engagement Bridge:**
   - *Challenge:* Museum visitors often want to bookmark stories to read more after leaving the gallery.
   - *Solution:* Built an in-engine real-time QR code generator that creates crisp vector QR codes for any event milestone, pointing directly to deep-links on the museum's website.

### Architectural Layers
- **Kiosk Shell & Watchdog:** Full-screen kiosk lockdown, idle attract video loop, session auto-reset, maintenance gestures.
- **Kinetic Touch Engine:** Multi-touch gesture recognizer, inertia-damped horizontal timeline scroller, milestone snapping.
- **Virtualized Timeline UI:** Dynamic object pooling, chapter navigation tabs, LOD timeline markers, chronological indexing.
- **Deep-Dive Story Modal:** Full-screen archival artwork viewer, multi-touch pan & zoom, typography layout engine.
- **Dynamic QR Bridge:** Real-time offline QR code rasterizer, URL payload formatting for post-visit web reading.
- **JSON Data Pipeline:** Schema-validated JSON event feeds, asynchronous media streaming, local asset hot-reloading.
