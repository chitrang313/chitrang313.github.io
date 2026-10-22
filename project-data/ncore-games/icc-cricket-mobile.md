# ICC Cricket Mobile — Officially Licensed Sports Simulation

## Metadata
- **Project Name:** ICC Cricket Mobile
- **Company / Publisher:** nCore Games
- **Role:** Core Systems Engineer — gameplay logic, decision AI, statistics & mathematics
- **Timeline:** 2020 — 2023
- **Platform:** iOS, Android (Global Release)
- **Tech Stack:** C#, Unity Engine, Goal-Oriented Action Planning (GOAP), State Machines, Pure Deterministic Math, CI/CD

---

## Project Summary
A licensed cricket simulation released to a global audience. I owned the core application logic, the AI decision layer, and the statistics and mathematics subsystems — the parts that decide whether a simulated match feels like cricket or like a random number generator wearing a jersey.

---

## Engineering Details & Architecture

### Problem
A licensed sport carries expectations: players who know the game will notice when a fielder makes a decision no real fielder would make. The AI had to be statistically believable across a very large state space, while staying deterministic enough for the team to unit test it, tune it, and reproduce a reported bug on demand.

### Responsibilities
- Built batting, bowling and fielding mechanics from scratch.
- Authored the AI decision layer using Goal-Oriented Action Planning (GOAP).
- Built the statistics and mathematics layer underpinning all simulation outcomes.
- Reviewed peer code through CI/CD-gated pull requests.
- Delivered Agile sprint commitments ahead of schedule for a global release.

### Architecture
- **State Machine Gameplay:** Gameplay runs as explicit state machines (delivery, shot, ball-in-play, fielding response) with strictly enforced entry and exit contracts.
- **GOAP Decision Planner:** The AI evaluates agent goals against match state and dynamically plans action sequences with clear preconditions and post-effects.
- **Pure Mathematics Layer:** Outcome resolutions, ball trajectories, and probabilistic calculations are completely isolated as pure, side-effect-free functions, ensuring total determinism and testability in CI.

### Architectural Layers
- **Simulation Core:** Deterministic match state, game phases, transition graphs.
- **Mathematics Layer:** Pure functions for probability, trajectory calculations, and outcome resolution.
- **AI Planner (GOAP):** Goals, actions with preconditions and effects, plan selection.
- **Agent Behaviours:** Batting shot evaluation, bowling variation selection, fielding actions.
- **Statistics Layer:** Live scorecard aggregations, player career records, match analytics.

### Challenges & Solutions
1. **Believable AI vs Testable AI:** Isolated probabilistic models behind a seeded mathematics layer, while GOAP kept decisions deterministic for a given match state.
2. **Large Numerical State Space:** Unit tests around boundary states with statistical output distributions checked programmatically rather than manually eyeballed.
3. **Continuous Tuning Demands:** Exposed parameters to game designers through data assets, avoiding code rewrites for balance adjustments.
4. **Multi-Engineer Code Quality:** Standardized CI/CD automated test gates and mandatory PR code reviews across core modules.
