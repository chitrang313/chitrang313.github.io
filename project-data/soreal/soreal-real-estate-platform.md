# SoReal — Interactive Real-Estate Visualisation Platform

## Metadata
- **Project Name:** SoReal: Interactive Real-Estate Walkthrough Platform
- **Company / Client:** ViitorCloud Technologies / SoReal
- **Role:** Lead Client Engineer — technical spec, interaction systems, session handling
- **Timeline:** 2023 — Present
- **Platform:** iOS, Android, Touchscreen Displays, VR-Ready
- **Tech Stack:** C#, .NET, Unity Engine, Photon Networking, Socket-Based Messaging, REST APIs

---

## Project Summary
SoReal lets prospective buyers walk through a property that has not been built yet — a 3D interior explored in real time, with a sales agent guiding the session from another device. It is used in live client engagements, which means every session is someone actually trying to sell a home.

I owned the technical specification, the interaction systems, multi-user session handling, and the full client application layer.

---

## Engineering Details & Architecture

### Problem
Static renders and floor plans do not answer the questions buyers actually ask: how does this room feel, what does the light do, can I see the view from here? The client needed a guided, interactive walkthrough that worked on the hardware their customers already carried, over whatever network happened to be available in a sales office.

### Responsibilities
- Authored the technical specification and translated evolving client requirements into a buildable system.
- Designed and built the interaction layer: navigation, object inspection, material and configuration switching.
- Implemented multi-user session handling so an agent and a buyer share one synchronised view.
- Owned the full client application layer, including REST integration with backend services.
- Profiled and optimised memory and load behaviour for large 3D interiors on mobile hardware.

### Architecture
- **Composition-First Modules:** Session, scene, interaction, UI, and networking modules depend on interfaces rather than concrete implementations, allowing features to evolve cleanly without regressions.
- **Authoritative Networking:** One participant drives session state; remote participants apply state deltas with interpolation so temporary packet drops degrade smoothness instead of correctness.
- **On-Demand Content Streaming:** Content is streamed addressably rather than pre-loaded, ensuring mobile memory tracks only what is currently visible.

### Architectural Layers
- **Session Layer:** Join, roles, presence, recovery after disconnect.
- **Sync Layer:** Authoritative state, deltas, interpolation, latency tolerance.
- **Content Layer:** On-demand asset streaming, unload policy, memory budget.
- **Interaction Layer:** Navigation, selection, configuration switching.
- **Service Layer:** REST integration, retries, payload validation, error surfaces.

### Challenges & Solutions
1. **Multi-User Sync on Unreliable Networks:** Authoritative state with delta updates and client-side interpolation, plus explicit reconnect handling that restores position and context.
2. **Large 3D Interiors vs Mobile Memory Ceiling:** Addressable streaming, aggressive unloading of out-of-view assets, object pooling, and continuous profiling passes.
3. **Evolving Client Requirements:** Interface-driven modules and data-configured content so requests became configuration additions rather than surgery on core systems.
4. **Third-Party Service Resilience:** Structured error handling with exponential backoff and payload boundary validation.

### Key Features
- Real-time guided walkthrough with multiple participants in one session.
- 3D interior exploration with free and guided navigation.
- Runtime configuration switching for materials and fittings.
- Reconnect and resume without losing session context.
- REST-backed content and session services.
- Tuned for mid-range iOS and Android devices.
