# Shooting Arena: Total Destruction — Arcade Combat Systems

## Metadata
- **Project Name:** Shooting Arena: Total Destruction
- **Company:** Escrow Infotech
- **Role:** Gameplay Systems Developer
- **Timeline:** 2017 — 2018
- **Platform:** Android Mobile Devices
- **Tech Stack:** C#, Unity 3D, State-Driven AI, Virtual Economy Design, Unity IAP, AdMob

---

## Project Summary
An arcade vehicular combat title where I built the ship control systems, enemy AI behaviors, health/damage pipelines, and the virtual economy alongside in-app monetization integrations.

---

## Engineering Details & Architecture

### Problem
Combat needed to stay readable, responsive, and fair as enemy waves scaled exponentially in intensity. Simultaneously, the currency and progression loop had to reward skill without opening vectors for exploit or client tampering.

### Responsibilities
- Implemented ship physics controls, weapon ballistics, and tactile combat feedback.
- Developed state-driven enemy AI with diverse combat profiles and targeting behaviors.
- Engineered unified damage calculation pipelines and particle impact feedback.
- Designed the virtual currency progression economy and secured transaction boundaries.
- Integrated video advertisements and in-app purchase stores with receipt validation.

### Architecture
- **State-Driven Enemy AI:** Enemies run distinct finite state machines sharing sensory perception interfaces, allowing new enemy behaviors to be configured without modifying existing combat code.
- **Centralized Resolution Pipeline:** Damage and status effects flow through a single authoritative evaluation path, ensuring predictable balancing and straightforward telemetry logging.

### Architectural Layers
- **Player Controller:** Kinematic steering, projectile spawning, weapon heat/cooldown state.
- **Enemy AI System:** Finite state machines (patrol, intercept, engage, retreat).
- **Combat Resolution:** Centralized damage evaluation, hitboxes, audio-visual feedback.
- **Economy & Inventory:** Virtual currency balances, ship upgrade tiers, transaction validation.
- **Monetization Layer:** AdMob video rewards and Google Play in-app purchases.
