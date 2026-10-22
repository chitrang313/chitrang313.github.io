# The Good Deed Tree: An Interactive Kindness Wall

## Metadata
- **Project Name:** The Good Deed Tree: An Interactive Kindness Wall
- **Client / Context:** Interactive Public Installation / Museum Exhibition ([Client Name] — Client Confidential)
- **Category:** Interactive Exhibition Installation (Community & Cultural Engagement)
- **Role:** Lead Interactive Systems Engineer — multi-screen architecture, 3D procedural tree engine, swipe gesture physics, tablet-to-wall IPC networking, automated profanity filter
- **Timeline:** 2023 — 2024
- **Platform:** In-Gallery Tablet Kiosk (Input Station) + Ultra-Large 4K Wall Display (Cinematic 3D Visualization)
- **Tech Stack:** Unity 6 (Universal Render Pipeline / URP), C#, Local High-Speed IPC (WebSocket/TCP), Procedural 3D Foliage & GPU Mesh Instancing, Custom VFX Shaders, Trie-based Profanity Filter, SQLite Local Persistence

---

## Project Brief (Provided Information)

### Title
The Good Deed Tree: An Interactive Kindness Wall

### Short Description (For a Project Card)
An interactive installation for [Client Name] where visitors write a good deed on a tablet and send it to grow on a living digital tree, shown on a giant wall screen.

### About the Project (Longer Description)
The Good Deed Tree turns small acts of kindness into something people can see grow.

Visitors walk up to a tablet, type their name and a good deed they want to do, such as “help a stranger” or “call my parents”, and swipe their leaf up. The leaf leaves the tablet and appears on a large wall display, where it drifts up into a beautiful 3D tree. The tree glows in response, a new bud grows with the visitor’s message on it, and the wall thanks them by name: “Thank you, Chitrang. Your good deed now lives on the tree · #1,249”.

Every deed stays on the tree, so it keeps growing with each visit. When nobody is using it, the wall comes alive on its own: birds drift across the sky, golden light falls through the leaves, and past good deeds gently float across the screen, inviting the next visitor to take part.

### Purpose
To encourage everyday kindness and community spirit by giving each person’s promise a visible, lasting place, and to show how small good deeds add up to something bigger together.

### Highlights
- **Tablet kiosk** for writing and “releasing” a good deed with a simple swipe.
- **Cinematic 4K wall display** with a living 3D tree.
- **Personalized moment:** each visitor's leaf grows on the tree and they are thanked by name.
- **Dynamic idle mode** that attracts visitors, showcasing real deeds others have planted.
- **Family-friendly moderation:** automated filtering prevents inappropriate words from ever appearing on screen.

---

## Engineering Details & Architecture

### Overview
The Good Deed Tree is a multi-screen collective art installation engineered to foster empathy, civic engagement, and community solidarity in high-traffic public spaces (museums, civic centers, or cultural pavilions). By physically decoupling the intimate input action (typing a personal pledge on an ergonomic tablet kiosk) from the grand communal output (a monumental 4K living 3D tree on a wall screen), the system creates an emotional, shared ritual that celebrates everyday human kindness.

### Multi-Screen Ecosystem

```
┌─────────────────────────────────────────────────────────────┐
│                   TABLET KIOSK (Input)                      │
│  - On-Screen Virtual Keyboard & Name / Deed Input           │
│  - Automated Real-Time Profanity & Homoglyph Filter         │
│  - Swipe-to-Release Touch Gesture Physics Detector          │
│  - Instant Confirmation & Attractor Inactivity Reset        │
└──────────────────────────────┬──────────────────────────────┘
                               │ Low-Latency Local IPC (WebSocket/TCP)
                               │ Normalized Vector Handoff (<10ms)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 4K WALL DISPLAY (Living 3D Tree)            │
│  - Seamless Leaf Trajectory Spawn & Wind Turbulence Sim     │
│  - Procedural 3D Tree Canopy with GPU Foliage Instancing    │
│  - Dynamic Bud Growth & Luminescent Bloom FX                │
│  - Personal Milestone Overlay: "Thank you, [Name] · #N"     │
│  - Ambient Idle Attractor: Birds, God-Rays, Floating Deeds  │
│  - Persistent SQLite Database of Community Contributions    │
└─────────────────────────────────────────────────────────────┘
```

### Operational Challenges & Solutions

1. **Bezel-Spanning Gesture Physics Handoff (Tablet -> 4K Wall):**
   - *Challenge:* When a visitor swipes their leaf upward to release it, any delay or spatial mismatch between the leaf disappearing at the tablet’s top border and appearing at the bottom of the giant wall display shatters the physical illusion.
   - *Solution:* Built a synchronized vector handoff protocol over a local high-speed socket. The tablet calculates exit velocity, launch angle, and horizontal alignment, packing them into an IPC payload sent in under 10ms. The wall display receives the telemetry and spawns the 3D leaf at the matching virtual baseline with continuous momentum, transitioning smoothly into a wind-driven Bezier steering curve into the tree canopy.

2. **Scalable 3D Foliage & Cumulative Deed Growth:**
   - *Challenge:* In a long-running public exhibition, thousands of good deeds accumulate (#1,249 and beyond). Rendering thousands of individual text meshes and unique leaf geometries would quickly overwhelm GPU fill rates and draw-call budgets at 4K resolution.
   - *Solution:* Implemented GPU instancing with dynamic Level of Detail (LOD). Active and recently planted deeds are rendered as glowing, high-detail billboard leaves with dynamic text shaders. As new leaves arrive, older deeds are mathematically baked into an instanced foliage cluster with localized wind vertex shaders, preserving 60 FPS performance without memory bloat.

3. **Family-Friendly Real-Time Text Moderation:**
   - *Challenge:* Public kiosks are susceptible to offensive words, inappropriate content, and leetspeak circumvention (e.g., using numbers or symbols in place of letters). The filter had to work in real time without external cloud APIs to maintain 100% offline booth reliability.
   - *Solution:* Developed a multi-tier offline moderation engine utilizing a compact Trie data structure paired with regex homoglyph normalization (converting `@` to `a`, `1` to `i`, etc.). Submissions containing flagged terms are blocked instantly with gentle guidance on the tablet screen, ensuring zero vulgarities ever reach the public wall display.

4. **Atmospheric Idle Mode & Attractor Dynamics:**
   - *Challenge:* Museum installations often sit idle between waves of visitors. A static screen fails to draw passersby across the gallery floor.
   - *Solution:* Programmed an autonomous ambient state machine that activates after 45 seconds of inactivity. Procedural volumetric light shafts sweep through the branches, flocks of birds glide across the horizon with boid flocking algorithms, and past community good deeds gently drift across the viewing plane with glowing embers, sparking curiosity and inviting the next visitor to walk up to the tablet.

5. **100% Offline Resilience & Sequential Ledger:**
   - *Challenge:* Venue network connections can fail unpredictably, yet sequential deed numbering (#1,249, #1,250...) must remain strictly consistent and tamper-proof.
   - *Solution:* Stored all contributions in an ACID-compliant local SQLite database with write-ahead logging (WAL). The wall display acts as the authoritative master node, assigning atomic sequence IDs and broadcasting confirmation back to the tablet kiosk.

### Architectural Layers

- **Tablet Input Runtime:** Unity URP tablet client, custom on-screen keyboard, touch velocity tracker, multi-touch suppression, inactivity watchdog timer.
- **Content Moderation Engine:** High-speed Trie profanity filter, homoglyph replacement pipeline, family-friendly input validation.
- **Local Network Synchronization:** Low-latency WebSocket/TCP server on wall display, auto-reconnecting client on tablet, zero-cloud local IP handshake.
- **3D Tree & Canopy Engine:** Procedural branch growth hierarchy, GPU instanced leaves, wind vertex shaders, dynamic leaf bud spawner.
- **Particle & Atmospheric VFX:** Volumetric god-rays, floating spore particles, leaf flutter aerodynamics, boid flocking bird simulation.
- **Persistence & Milestone Ledger:** Local SQLite relational store, atomic sequence counter, archival backup exporter.

---

## Media Assets & Screenshots

*(Awaiting media links from exhibition archive)*
