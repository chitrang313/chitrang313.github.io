# Configurable Card Engine — Data-Driven Multi-Title Platform

## Metadata
- **Project Name:** Configurable Card Engine (Shared Multi-Title Platform)
- **Company:** Vasundhara Vision
- **Role:** Architect and Developer — rules engine, AI bots, monetization
- **Timeline:** 2019 — 2020
- **Platform:** iOS, Android (Two Shipped Production Titles)
- **Tech Stack:** C#, Unity 3D, Data-Driven Configuration, DOTween, Unity IAP, Google AdMob

---

## Project Summary
A casino-style card platform where eight rule variants can be toggled at runtime, complete with AI bot opponents, an event-driven animation pipeline, and monetization integrations. Two commercially shipped titles — a casino card game and a celebrity-themed variant — were built on this single reusable engine.

---

## Engineering Details & Architecture

### Problem
The product brief called for two separate game titles. Developing them as forks would have doubled development and maintenance costs. Furthermore, the client required eight distinct rule variants that could combine arbitrarily without producing tangled conditional branching.

### Responsibilities
- Designed the data-driven rules engine and its declarative configuration schema.
- Implemented runtime rule toggling across eight game variants without code branching sprawl.
- Built convincing AI bot opponents and an event-driven DOTween animation pipeline.
- Integrated in-app purchases and Google AdMob ad networks with server-side validation.
- Shipped and maintained both titles end-to-end on iOS and Android.

### Architecture
- **Rules as Declarative Data:** Each rule is an isolated, composable unit declaring its impact on turn flow, card scoring, and play legality. Rules never reference each other, allowing arbitrary combinations to resolve predictably in a deterministic order.
- **Decoupled Event Presentation:** The engine resolves card math first and emits structured events. The visual/animation layer listens and replays them, making it impossible for visual delays or animation hitches to desynchronize table state.

### Architectural Layers
- **Configuration Layer:** Declarative rule sets per title and per table.
- **Rules Engine:** Composable rule units with deterministic resolution pipelines.
- **Table State:** Hand cards, turn sequencing, move validation, scoring models.
- **Bot Policy:** Decision heuristics evaluated over legal move sets.
- **Presentation Layer:** Event-driven animation pipeline via DOTween.
