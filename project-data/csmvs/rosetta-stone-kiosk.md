# Rosetta Stone Interactive Kiosk

## Metadata
- **Project Name:** Rosetta Stone Interactive Kiosk, CSMVS Museum, Mumbai
- **Client:** Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum, Mumbai)
- **Built At:** ViitorCloud Technologies
- **Role:** Interactive Systems Engineer — kiosk architecture, drawing recognition engine, bilingual UX
- **Timeline:** 2024 — Present
- **Platform:** Windows Touchscreen Kiosk Display
- **Tech Stack:** Unity, C#, Windows Touchscreen Kiosk, REST API, TextMeshPro, DOTween, GPU-Based Drawing Comparison, Local Analytics

---

## Project Brief (Provided Information)

### Short Description (Project Card)
An interactive touchscreen kiosk for the Rosetta Stone exhibit at the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS), Mumbai. Visitors explore the stone’s story, meet the people who cracked its code, and try writing hieroglyphs themselves, in English or Marathi.

### How It Works (Project Page)
- **Explore:** Visitors learn what the Rosetta Stone is, why it matters and when it was found. Photo slideshows and zoomable hotspots show who decoded it.
- **Try it:** In the “How to Decode” game, a visitor picks a hieroglyph and draws it on screen. The app scores the drawing for accuracy, gives a friendly message, and reveals the symbol’s meaning.
- **Two languages:** One tap switches the whole app between English and Marathi, including the fonts.
- **Built for a busy museum floor:** The kiosk plays a screensaver video when idle, keeps content stored on the device between sessions, and loads text and media from the museum’s content server.
- **Usage insights:** Built-in analytics record which symbols and screens visitors use most, which language they pick and how long they stay. The weekly report is sent to the museum by email.

### Tech Stack
Unity (C#), Windows touchscreen kiosk, REST API, TextMeshPro, DOTween, GPU-based drawing comparison.

---

## Engineering Details & Architecture

### Overview
Positioned alongside the Rosetta Stone exhibit at CSMVS Mumbai, this touchscreen kiosk turns an ancient epigraphic masterpiece into an interactive discovery station. Visitors explore the three scripts of the stone (Ancient Greek, Demotic, and Egyptian Hieroglyphs), navigate biographies of the scholars who unlocked the text (Thomas Young, Jean-François Champollion), and interactively trace hieroglyphs on the touchscreen.

### GPU-Based Hieroglyphic Recognition Engine
1. **Real-Time Stroke Capture:** Visitor touch paths are rasterized to an off-screen render texture buffer in real time.
2. **GPU Texture Differencing & Hausdorff Evaluation:** A lightweight compute shader / texture evaluation kernel compares visitor stroke coverage against normalized golden vectors of the target hieroglyph.
3. **Dynamic Feedback & Scoring:** Calculates accuracy percentages, generates particle flourishes, and reveals archaeological meanings and pronunciations without lag.

### Architectural Layers
- **Screensaver & Attract Loop:** High-definition video screensaver with ambient animation, waking instantly on touch.
- **Exhibition Narrative Module:** High-resolution image galleries, pinch-to-zoom artifact exploration, and curatorial bios.
- **Interactive Decoding Game:** Touch canvas with stroke normalization, GPU similarity scoring, and reward feedback.
- **Bilingual Typographic System:** Dynamic runtime language swapping between English and Marathi with TextMeshPro.
- **Local Cache & Sync Engine:** Persistent on-device asset caching with background REST polling.
- **Automated Reporting Module:** Aggregates visitor metrics (draw attempts, dwell time, language choice) into scheduled email digests.
