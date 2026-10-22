# Cuenect: Interactive 3D Product Showcase

## Metadata
- **Project Name:** Cuenect: Interactive 3D Product Showcase
- **Client:** Cuenect
- **Built At:** ViitorCloud Technologies
- **Role:** Lead Interactive Systems Engineer — distributed multi-app architecture, 3D runtime engine, Sony Spatial Reality Display integration, Android remote client
- **Timeline:** 2022 — 2023
- **Platform:** Commercial Ultra-Large Touchscreens, Sony Spatial Reality Display (Glasses-Free 3D), Android Mobile Devices
- **Tech Stack:** Unity (URP), C#, Sony Spatial Reality SDK (Eye-Sensing Light Field), Local WebSocket/TCP Network Protocol, Android (Java/C#), glTF/FBX Runtime Asset Loader, Offline Hub CMS

---

## Project Brief (Provided Information)

### Title
Cuenect: Interactive 3D Product Showcase

### Client
Cuenect

### Short Description
Cuenect is an interactive showcase system for exhibitions, showrooms and events. It lets businesses present their products as 3D models, videos and images on large screens, and on Sony’s Spatial Reality Display, which shows 3D content without glasses.

### How It Works
The system has three apps that work together over a local network, so no internet is needed at the venue:
1. **Hub (Control Centre):** The organiser uploads product models, videos and images, then arranges them into playlists for the show.
2. **Experience (Display Screen):** Runs on the big screen or the 3D display and presents the content to visitors in rich, interactive 3D.
3. **Stream (Mobile Remote):** An Android app that connects to the display by scanning a QR code. A presenter can then switch content, rotate and zoom models, and play videos straight from their phone.

### Purpose
To give businesses an eye-catching way to present products in person. Visitors can explore every angle of a product in 3D, and presenters stay in full control from their phone. It runs entirely offline, so it works reliably at any venue.

---

## Engineering Details & Architecture

### Overview
Trade show floors, executive briefing centers, and premium retail showrooms are high-stakes presentation environments where consumer engagement must be instantaneous, visual fidelity must be flawless, and network reliability cannot be assumed. Cuenect addresses this challenge through a distributed, three-tiered application ecosystem operating over an isolated local area network (LAN/Wi-Fi), allowing exhibitors to showcase complex industrial, architectural, and luxury products in full interactive 3D with zero internet connectivity.

### The Tri-App Ecosystem

```
┌─────────────────────────────────────────────────────────────┐
│                   CUENECT HUB (CMS)                         │
│  - Asset Ingestion (glTF, FBX, 4K Video, PNG/JPG)           │
│  - Playlist Orchestration & Transitions                     │
│  - Material Variant & Exploded View Configuration           │
└──────────────────────────────┬──────────────────────────────┘
                               │ Local Network Sync
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 CUENECT EXPERIENCE (Display)                │
│  - Unity Universal Render Pipeline (URP) Runtime            │
│  - Sony Spatial Reality Display (Glasses-Free Autostereo)   │
│  - Real-Time Eye-Sensing Facial Tracking & View Frustum     │
│  - Interactive 3D Inspection (Orbit, Pan, Zoom, Explode)   │
└──────────────────────────────▲──────────────────────────────┘
                               │ Low-Latency WebSocket/TCP
                               │ (QR Code Session Pairing)
┌──────────────────────────────┴──────────────────────────────┐
│                  CUENECT STREAM (Remote)                    │
│  - Native Android Presenter Companion                       │
│  - Real-Time Touch Telemetry (Rotation, Zoom, Explode)      │
│  - Slide / Media Playlist Scrubber & Stage Notes            │
└─────────────────────────────────────────────────────────────┘
```

### Operational Challenges & Solutions

1. **Sony Spatial Reality Display (Glasses-Free 3D) Integration:**
   - *Challenge:* Sony's Spatial Reality Display (SRD / ELF-SR1/SR2) generates an autostereoscopic holographic 3D image using high-speed micro-optical lens arrays and eye-sensing vision sensors. Traditional camera setups cause severe stereoscopic shearing or image tearing if head tracking latency exceeds 16ms.
   - *Solution:* Integrated the Sony SR SDK within Unity's Universal Render Pipeline. Created a dynamic view-frustum recalculation pipeline that couples high-frequency 60 FPS face-tracking telemetry with real-time stereo eye rendering, creating the illusion of a solid 3D physical object floating inside the display frame without 3D glasses.

2. **Ultra-Low Latency Presenter Remote Telemetry (Stream -> Experience):**
   - *Challenge:* When a presenter rotates or zooms a 3D model on their phone screen, any perceptible lag between their finger movement and the 90-inch wall display breaks immersion and feels disconnected.
   - *Solution:* Engineered a lightweight binary WebSocket/TCP telemetry protocol. Touch deltas, rotation quaternions, and pinch-scale multipliers are packed into compact binary byte buffers and broadcast at 60 Hz over the local Wi-Fi, achieving sub-12ms glass-to-glass latency with client-side dead reckoning.

3. **Runtime Ingestion & Normalization of Arbitrary 3D Models:**
   - *Challenge:* Organizers upload diverse 3D CAD and DCC assets (glTF, GLB, FBX, OBJ) with varying scale units, pivot origins, polycounts, and unoptimized PBR material setups.
   - *Solution:* Built an automated asset ingest pipeline within Cuenect Hub. The importer automatically computes bounding box extents, normalizes model pivots to geometric centers, recalculates surface normals, and assigns standardized PBR metallic-roughness materials to ensure uniform lighting across all catalog assets.

4. **Zero-Internet Venue Resilience:**
   - *Challenge:* Trade exhibition centers (e.g. convention halls) are notorious for saturated 4G/5G networks, captive Wi-Fi portals, and sudden internet dropouts.
   - *Solution:* Architected the entire system to run strictly over an ad-hoc or local offline router. Cuenect Hub acts as a local mDNS / SSDP discovery beacon; Cuenect Experience broadcasts a dynamic QR code containing the local IP and encrypted handshake token; Cuenect Stream pairs instantaneously upon camera scan with zero external cloud dependencies.

### Architectural Layers

- **Display & Spatial 3D Engine:** Unity URP, Sony Spatial Reality SDK, eye-tracking view frustum adjuster, real-time shadow & reflections.
- **Presenter Remote Client (Stream):** Android native touch gesture listener, virtual trackball orbit controller, playlist trigger deck.
- **Local Network Broker:** Lightweight local WebSocket/TCP server, mDNS device discovery, dynamic QR session authenticator.
- **Runtime 3D Model Manipulator:** Orbit camera controller, spring-damped zoom limiter, exploded view lerp animator, hotspot callout manager.
- **Hub CMS & Asset Loader:** Asynchronous glTF/FBX runtime parser, local SQLite playlist catalog, media cache synchronizer.

---

## Media Assets & Screenshots

*(Awaiting media links from Cuenect product archive)*
