# Ludo Multiplayer — Real-Time Gaming Platform

## Metadata
- **Project Name:** Ludo Multiplayer: Real-Time Gaming Platform
- **Company:** Vasundhara Vision
- **Role:** Full-Stack Owner — game state machine, API layer, socket handling, bots
- **Timeline:** 2019 — 2020
- **Platform:** iOS, Android
- **Tech Stack:** C#, Unity Engine, Node.js, Express.js, Socket.IO, REST APIs, Best HTTP/2

---

## Project Summary
An online and offline multiplayer platform featuring concurrent matches, real-time socket sessions, and bot opponents. I implemented the full game state machine, the client-server API integration layer, socket event handling, bot decision logic, and transaction-facing error management.

---

## Engineering Details & Architecture

### Problem
The platform needed concurrent matches to be provably fair and transactionally correct, while surviving mobile connectivity drops where players lose signal mid-turn, switch apps, or switch networks and expect their game state intact.

### Responsibilities
- Designed and implemented the complete game state machine for online and offline modes.
- Built the client-side REST API integration layer and Socket.IO event contracts.
- Implemented bot decision logic for offline play and dynamic table filling.
- Owned transaction-facing error management and state recovery paths.
- Contributed to the Node.js / Express.js / Socket.IO authoritative game server: session and room management, dice authority, and real-time broadcasting.

### Architecture
- **Server Authority:** The server owns all critical game truth (turn orders, dice rolls, token movements). Clients serve solely as input collectors and renderers, eliminating client-side manipulation.
- **Resilient Reconnection:** Explicit state re-hydration mechanism that resynchronizes board state and timer countdowns upon reconnection.

### Architectural Layers
- **Client State Machine:** Turn phases, input gating, animation-safe state transitions.
- **Socket Layer:** Strongly-typed event contracts, acknowledgments, reconnect and state re-hydration.
- **REST Layer:** Authentication, wallet and player profile transactions with validation and retries.
- **Authoritative Server:** Room management, turn sequencing, dice generation, win validation.
- **Bot Layer:** Plausible, deterministic decision heuristics for offline mode and matchmaking fallbacks.
