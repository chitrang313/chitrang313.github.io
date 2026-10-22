# Dual Gallery Interactive Display — Sikh History Museum Kiosk

## Metadata
- **Project Name:** Dual Gallery Interactive Display — Sikh History Museum Kiosk
- **Client:** Sikh History Museum (SHM)
- **Built At:** ViitorCloud Technologies
- **Role:** Interactive Systems Engineer — multimedia engine, offline cache pipeline, kiosk UI
- **Timeline:** 2023 — 2024
- **Platform:** Large Windows Touchscreen Kiosk Display
- **Tech Stack:** Unity 6 (Windows Kiosk), C#, Universal Render Pipeline (URP), REST API Integration, TextMeshPro, Newtonsoft JSON, Offline Media Caching

---

## Project Brief (Provided Information)

### Title
Dual Gallery Interactive Display — Sikh History Museum Kiosk

### Description
Client: Sikh History Museum (SHM)

Built an interactive touch-screen kiosk application for the Sikh History Museum that brings the stories of the Ten Gurus and Guru Nanak to life. Visitors can browse a rich gallery of images and videos, read detailed historical information, and explore multimedia content — all from a large touchscreen display installed at the museum.

The app fetches fresh content from the museum’s servers and automatically falls back to locally cached content when offline, ensuring the display is always up and running without manual intervention.

### Purpose
Replace static displays with an engaging, self-updating digital experience that educates museum visitors through interactive multimedia storytelling.

### Tech Stack
- Unity 6 (Windows Kiosk)
- C#
- REST API integration
- TextMesh Pro, URP
- Newtonsoft JSON

---

## Engineering Details & Architecture

### Overview
The Dual Gallery Interactive Display is a flagship installation for the Sikh History Museum, developed at ViitorCloud Technologies. It transforms static wall exhibits into an immersive, multimedia digital discovery station. Visitors explore curated dual narrative streams dedicated to Guru Nanak and the Ten Gurus, browsing high-resolution archival artwork, historical manuscripts, documentary video clips, and detailed interpretive texts.

### Operational Challenges & Solutions
1. **Uninterrupted Autonomous Operation (Offline-First):**
   - *Challenge:* Public museum kiosks cannot fail or show loading spinners when gallery networks experience downtime.
   - *Solution:* Implemented an authoritative store-and-forward caching architecture. The client maintains complete local media sets and SQLite/JSON manifests. When online, a background sync worker polls the museum REST API via Newtonsoft JSON, silently downloading updated media to an isolated staging directory and swapping manifests atomically. If the network drops, the application falls back immediately to locally cached content with zero visual interruption.
2. **Smooth High-Bitrate Multimedia Playback:**
   - *Challenge:* Simultaneous video playback, high-resolution archival image rendering, and fluid touch scrolling can quickly cause hitching or memory exhaustion on kiosk hardware.
   - *Solution:* Built on Unity 6 and the Universal Render Pipeline (URP) with hardware-accelerated video decoding buffers and asynchronous texture loading. Assets are streamed into memory on demand and released promptly when navigating between galleries.
3. **Typography & Readability Across Formats:**
   - *Challenge:* Historical texts must remain razor-sharp and legible to crowds viewing large-format kiosk displays at various distances.
   - *Solution:* Utilized TextMeshPro signed distance field (SDF) typography with dynamic font scaling and high-contrast styling adhering to museum accessibility standards.
4. **Gallery Lockdown & Attractor Loop:**
   - *Challenge:* Unattended installations must deter visitor tampering and actively invite passing guests.
   - *Solution:* Deployed a dedicated Windows kiosk shell that blocks OS shortcuts, task switching, and edge swipes. An idle timer triggers an ambient multimedia attract loop after periods of inactivity, resetting to the home view seamlessly when a visitor touches the screen.

### Architectural Layers
- **Kiosk Shell & Supervisor:** Full-screen kiosk lockdown, auto-boot sequence, OS hotkey suppression, hidden multi-touch staff controls.
- **Media Presentation Engine:** Hardware-accelerated video playback, archival image gallery viewer, touch gesture handler.
- **Dual Gallery Navigation UI:** Interactive story panels for Guru Nanak and the Ten Gurus, chapter selector, TextMeshPro typography.
- **Offline Cache Repository:** Local persistent storage, checksum validation, atomic asset swaps, zero-network fallback.
- **REST Sync Worker:** Background manifest polling, Newtonsoft JSON schema validation, asynchronous media delta downloader.
- **Attract & Session Manager:** Idle detection, ambient attract loop, automatic session timeout reset.

### Key Features
- Dual multimedia galleries covering the lives, travels, and teachings of Guru Nanak and the Ten Gurus.
- High-resolution archival artwork gallery with touch-enabled inspection.
- Embedded documentary video playback with hardware-accelerated rendering.
- Automatic content synchronization with museum servers via REST API and Newtonsoft JSON.
- Resilient offline fallback to local media cache for 100% kiosk uptime.
- Full-screen Windows kiosk lockdown with hidden staff administration controls.
- Idle attract loop with automatic session reset.
