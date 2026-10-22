# Golden Temple Video Gallery — Interactive Museum Kiosk

## Metadata
- **Project Name:** Golden Temple Video Gallery — Interactive Museum Kiosk
- **Client:** Sikh History Museum (SHM)
- **Built At:** ViitorCloud Technologies
- **Role:** Interactive Systems Engineer — video engine, remote theme pipeline, kiosk shell
- **Timeline:** 2023 — 2024
- **Platform:** Windows Touchscreen Kiosk Display (Locked-Down, Self-Running)
- **Tech Stack:** Unity 6 (6000.0.25f1), C#, REST API with Token Auth, TextMeshPro, URP, Scroll-Snap UI, Remote Theme Engine, Runtime Video Caching

---

## Project Brief (Provided Information)

### Short Description
An interactive touchscreen kiosk application that lets museum visitors browse and watch a curated collection of videos about the Golden Temple and Sikh heritage. Visitors swipe through a gallery of banners and thumbnails, tap any entry, and watch high-quality videos right at the exhibit — a self-serve, walk-up experience with no staff needed.

### What It Does (Non-Technical)
Think of it as a digital video wall visitors control by touch. Someone walks up to the screen at the museum, scrolls through beautifully presented video entries, picks one, and it plays instantly. All the content — videos, images, titles, and even the on-screen branding and colors — is managed remotely by the museum team, so they can update the gallery anytime without touching the kiosk itself. A running information ticker and clean, kiosk-locked interface keep it looking polished and tamper-resistant in a public space.

### Purpose
Give museum visitors an engaging, self-guided way to explore Golden Temple video content, while giving the museum an easy, central way to keep that content fresh across its kiosks.

### Tech Stack
- **Engine:** Unity 6 (6000.0.25f1), C#
- **Platform:** Windows touchscreen kiosk (locked-down, self-running)
- **Backend Integration:** REST API with token login — pulls all content and styling from the museum’s server (`sikhhistorymuseum.org`)
- **Media:** Runtime video streaming/download, dynamic image loading, custom video player
- **UI:** Scroll-snap gallery, dynamic content generation, themeable styling driven by backend config (TextMeshPro, custom UI modules)

---

## Engineering Details & Architecture

### Overview
The Golden Temple Video Gallery is a dedicated interactive kiosk installation designed for the Sikh History Museum. Celebrating the spiritual, architectural, and historical significance of Harmandir Sahib (The Golden Temple), the installation provides visitors with a walk-up, self-guided multimedia experience. Visitors interact with a large touchscreen display featuring a kinetic scroll-snap gallery of video banners and thumbnails, exploring documentary films, historical retrospectives, and cultural archives.

### Operational Challenges & Solutions
1. **Remote Curatorial & Theme Management:**
   - *Challenge:* Physical kiosks in galleries are difficult to update manually; changing video playlists, exhibition branding, or color palettes traditionally requires an engineer on site.
   - *Solution:* Built a token-authenticated REST synchronization engine interfacing with `sikhhistorymuseum.org`. The client dynamically downloads manifests containing video URLs, thumbnail paths, and styling parameters (color codes, brand typography, and header assets), applying theme changes at runtime without restarting the application.
2. **Smooth Scroll-Snapping Touch Navigation:**
   - *Challenge:* Large touchscreen surfaces need to feel tactile and responsive, avoiding the sluggish or jarring movements common in basic web wrappers.
   - *Solution:* Implemented a custom scroll-snap touch gallery in Unity 6 with inertial physics, card centering constraints, and lazy texture streaming to ensure locked 60 FPS performance under continuous visitor browsing.
3. **Continuous High-Definition Video Playback:**
   - *Challenge:* Repeatedly loading and streaming high-bitrate video in an unattended environment can lead to memory fragmentation, buffer underruns, or audio desynchronization.
   - *Solution:* Engineered a custom video player module with hardware-accelerated decoding buffers, runtime chunk caching, and automatic garbage collection passes between playback sessions.
4. **Public Kiosk Hardening & Live Information Ticker:**
   - *Challenge:* The kiosk operates unattended in high-footfall galleries and must prevent visitor escapes while keeping visitors informed about museum events.
   - *Solution:* Developed a complete kiosk shell disabling OS shortcuts and edge gestures, featuring an idle attract loop that activates during quiet periods and an integrated running marquee ticker broadcasting live curatorial announcements and schedules.

### Architectural Layers
- **Kiosk Shell & Lockdown:** Full-screen Windows kiosk container, hidden multi-touch staff gestures, idle attract loop, watchdog process.
- **Remote Theme Engine:** Runtime palette and brand injection from server configuration, dynamic TextMeshPro styling.
- **Scroll-Snap Touch Gallery:** Kinetic multi-touch scroller, card-snapping physics, banner carousel, lazy texture loader.
- **Custom Video Player:** Hardware-accelerated video decoding, runtime chunked cache, gesture-driven transport controls.
- **REST Sync & Auth Client:** Secure bearer token authentication, JSON manifest parser, delta asset synchronization (`sikhhistorymuseum.org`).
- **Live Information Ticker:** Dynamic horizontal text marquee, real-time curatorial announcements, automated text wrapping.

### Key Features
- Interactive scroll-snap touch gallery with video banners and thumbnails.
- Instant walk-up video playback with custom touch transport controls.
- Remote content and theme management via token-authenticated REST API (`sikhhistorymuseum.org`).
- Dynamic on-screen color palettes and branding driven by backend configuration.
- Real-time running information marquee ticker for museum announcements.
- Full-screen Windows kiosk mode with hidden maintenance and reboot controls.
- Resilient runtime video caching ensuring seamless playback even during network fluctuations.
