# 99.9% Impossible Bus Simulator — Vehicle Physics Simulation

## Metadata
- **Project Name:** 99.9% Impossible Bus Simulator
- **Company:** Escrow Infotech
- **Role:** Solo Developer — physics, level pipeline, game modes
- **Timeline:** 2018 — 2019
- **Platform:** Android Mobile Devices
- **Tech Stack:** C#, Unity Engine, Vehicle Physics Rig, Modular Level Pipeline, Android Optimization

---

## Project Summary
A 3D precision driving game built around narrow sky-roads where the entire player experience hinges on vehicle feel and predictability. I designed and programmed the title end-to-end, later expanding modes and challenges in response to live player feedback.

---

## Engineering Details & Architecture

### Problem
Difficulty was the core gameplay premise: too forgiving and the challenge vanishes; too harsh or unpredictable and players abandon the game immediately. The physics model had to execute consistently across low-end and high-end Android hardware where frame timings vary wildly.

### Responsibilities
- Engineered the custom vehicle physics handling model and steer assist curves.
- Designed and implemented the modular segment-based level authoring toolchain.
- Added new game modes, obstacle hazards, and checkpoint systems guided by player reviews.
- Tuned draw calls, shader complexity, and physics update budgets across a broad device spectrum.

### Architecture
- **Fixed-Timestep Simulation:** All wheel colliders, suspension calculations, and center-of-mass forces operate strictly in `FixedUpdate` with frame interpolation, guaranteeing identical handling at both 30 FPS and 60 FPS.
- **Segmented Level Pipeline:** Tracks are authored from prefabricated segments and serialized parameters, enabling rapid iteration and difficulty balancing without rebuilding scene geometry.

### Architectural Layers
- **Physics Core:** Fixed-timestep vehicle model, suspension dynamics, deterministic handling.
- **Input & Assist Layer:** Smoothed touch controls and dynamic steering curves.
- **Level Pipeline:** Segmented road authoring, checkpoint triggers, hazard scripting.
- **Progression System:** Unlockable stages, vehicle customization, player scoring.
- **Device Performance Manager:** Dynamic performance tiering and physics sub-stepping adjustments.
