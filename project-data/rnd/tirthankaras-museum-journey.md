# 24 Tirthankaras — An Interactive Museum Journey

## Metadata
- **Project Name:** 24 Tirthankaras — An Interactive Museum Journey
- **Alternative Titles:** Janma Bhumi & Moksha Bhumi: The 24 Tirthankaras · Walk with the Tirthankaras
- **Category:** R&D Project (Unpublished Prototype, Developed Solo)
- **Client / Context:** Cultural Heritage Museum Exhibition (R&D Prototype — Client Confidential)
- **Role:** Interactive Systems Engineer & Creative Technologist — concept design, interactive map, parallax scene engine, iconography archive, cross-platform architecture
- **Timeline:** 2023 — 2024
- **Platform:** In-Gallery Tablets, Touchscreen Kiosks, Web & Mobile (Cross-Platform)
- **Tech Stack:** Unity (URP) / WebGL, C#, Geospatial SVG/Vector Map Engine, Multi-Plane Parallax Renderer, Data-Driven JSON Iconography Pipeline, Offline Cache

---

## Project Brief (Provided Information)

### Title
- **Primary:** 24 Tirthankaras — An Interactive Museum Journey
- **Alternatives:** “Janma Bhumi & Moksha Bhumi: The 24 Tirthankaras” or “Walk with the Tirthankaras”

### Nature of Project
R&D project, not published, independently conceptualized and developed. *(Note: Client name is strictly confidential and omitted per requirements).*

### Short Description (Portfolio Card, ~40 Words)
An interactive touch-screen experience exploring the lives of the 24 Jain Tirthankaras. Visitors switch between Janma Bhumi and Moksha Bhumi on an interactive map of India, stepping into meditative multi-plane parallax scenes and rich iconographic stories.

### Full Description
Built as an interactive museum exhibit, this installation brings the 24 Jain Tirthankaras to life for visitors of all ages.

The journey starts with an interactive map of India. With one tap, visitors switch between **Janma Bhumi** (where each Tirthankara was born) and **Moksha Bhumi** (where each attained liberation / Nirvana). Visitors can pinch to zoom and tap any sacred site to discover which Tirthankaras are connected to it.

Choosing a Tirthankara opens a calm, layered scene: the Tirthankara seated in meditation before a temple, positioned beneath the sacred tree where they attained omniscience (*Kevala Jnana*), with their heraldic symbol (*lanchhana*) at their feet. A gentle swipe up or down transitions through all 24 Tirthankaras, with layered hills, clouds, and birds drifting at varying depths via multi-plane parallax.

A dedicated book button opens an archival details page cataloging each Tirthankara’s parents, sacred symbol, canonical body color, birthplace, place of liberation, sacred tree, and life story.

### Purpose
To turn a sacred subject traditionally learned from dense physical texts and static temple wall friezes into a hands-on, contemplative digital journey that visitors can explore at their own pace. Engineered to run offline on gallery tablets with zero internet dependency, as well as on any mobile phone or computer so the experience travels beyond physical museum walls.

---

## Engineering Details & Architecture

### Overview
Traditional exhibitions on ancient Jain heritage face unique interpretation challenges: historical lineages spanning millennia, complex sacred geography across the Indian subcontinent, and intricate canonical iconography that can overwhelm casual visitors. This interactive installation translates these spiritual narratives into an accessible spatial and visual journey, organizing information through geographical anchors and meditative artwork.

### Operational Challenges & Solutions

1. **Interactive Dual-State Sacred Map of India (Janma vs Moksha Bhumi):**
   - *Challenge:* Sacred geographical sites (such as Ayodhya, Sammed Shikharji, Pavapuri, Mount Girnar, Champapuri, and Mount Ashtapad) host overlapping historical milestones across multiple Tirthankaras. The map needed to toggle between birth and liberation contexts without visual clutter or slow redraws.
   - *Solution:* Built a vector-coordinate map engine with dynamic state filtering. Tapping between "Janma Bhumi" and "Moksha Bhumi" triggers animated pin transitions with clustering; tapping any hub highlights associated Tirthankaras and filters the active roster.

2. **Calm Multi-Plane Parallax Scene Navigation:**
   - *Challenge:* Moving through 24 serene meditative scenes needed to feel seamless, reverent, and organic rather than like standard page flips.
   - *Solution:* Designed an infinite-scroll vertical parallax scene system. Four distinct depth planes (foreground flora, midground Tirthankara/temple/tree, background rolling landscape, and far-depth drifting clouds/sky) move with non-linear easing and inertia damping, giving a three-dimensional diorama effect.

3. **Data-Driven Iconographic Database:**
   - *Challenge:* Each Tirthankara has precise canonical attributes: specific *lanchhanas* (bull, elephant, horse, serpent, lion, etc.), sacred tree varieties (*Ashoka, Sala, Banyan*), complex parental lineages, and distinct traditional body colors (golden yellow, emerald green, sapphire blue, ruby red, crystalline white).
   - *Solution:* Structured a normalized JSON schema encapsulating all 24 historical profiles, genealogical records, and asset pointers, decoupling content review from application logic and enabling rapid curation adjustments.

4. **Zero-Connectivity Offline Guarantee & Universal Deployment:**
   - *Challenge:* Gallery tablet mounts often lack stable Wi-Fi, while museum curators desired an experience capable of running simultaneously on kiosk hardware and visitors' personal devices via WebGL.
   - *Solution:* Engineered a lightweight asset pipeline utilizing texture compression (ASTC / WebP) and pre-baked vector assets, keeping the total build footprint compact (~30 MB) and enabling 100% offline local tablet operation alongside instant web browser loading.

### Architectural Layers

- **Kiosk Shell & Attract Controller:** Idle timeout reset, gentle ambient audio loop, gesture lock, and orientation scaling.
- **Geospatial Map Engine:** Interactive map of India, pinch-to-zoom/pan gesture controller, site pin clustering, Janma/Moksha state toggle.
- **Parallax Scene Renderer:** 4-depth multi-plane diorama manager, vertical swipe gesture recognizer, smooth spring damping, dynamic depth-of-field shaders.
- **Iconography Archive Modal:** Book overlay UI, canonical attribute parser, responsive typography layout, and multilingual story reader.
- **Data Pipeline & Asset Cache:** Schema-validated JSON manifest, preloaded sprite atlases, zero-latency asset streaming.

---

## Media Assets & Screenshots

*(R&D exhibition prototype — media captures archived in research repository)*
