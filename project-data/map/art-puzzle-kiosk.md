# MAP Art Puzzle — Interactive Sliding Puzzle Kiosk

## Metadata
- **Project Name:** MAP Art Puzzle — Interactive Sliding Puzzle Kiosk
- **Shorter Title:** MAP Jigsaw — Play With Art
- **Client:** Museum of Art & Photography (MAP), Bengaluru
- **Built At:** ViitorCloud Technologies
- **Role:** Interactive Systems Engineer — kiosk architecture, puzzle generation algorithm, multi-touch crop & gesture engine
- **Timeline:** 2022 — 2023
- **Platform:** In-Gallery Large Touchscreen Kiosks (up to 90-inch displays, Portrait & Landscape)
- **Tech Stack:** Unity (URP), C#, Dynamic Texture Slicing, Parity-Validated Sliding Tile Algorithm, Mobile Web Upload Bridge, Touch Gestures, Local Leaderboard

---

## Project Brief (Provided Information)

### Title Options
- **Primary:** MAP Art Puzzle — Interactive Sliding Puzzle Kiosk for the Museum of Art & Photography
- **Shorter Option:** MAP Jigsaw — Play With Art

### Short Description (Portfolio Card, ~40 Words)
A touch-screen puzzle game built for the Museum of Art & Photography (MAP), Bengaluru. Visitors pick a painting from the museum’s collection, or upload their own photo from their phone, and solve it as a sliding tile puzzle on large in-gallery screens.

### Full Description
MAP wanted a way to get visitors, especially families and younger audiences, to slow down and actually look at artworks. Not just glance at them on the way past.

The answer was a large touch-screen kiosk, installed on screens up to 90 inches in both portrait and landscape setups, that turns art into a game.

#### How It Works for a Visitor
1. **Pick a picture:** Browse and search the museum’s collection by artist, department, date, place of origin and more. Or scan a QR code with your phone and upload a photo of your own.
2. **Choose the part you love:** Zoom, rotate and crop to the section of the painting you want to play with.
3. **Pick your challenge:** Choose a difficulty level.
4. **Solve it:** The image is scrambled into tiles. Tap to slide them back into place, racing the clock. Peek at the original any time with Preview.
5. **Beat the record:** Finish to see your time and how it compares to the high score for that artwork.

#### Why It Matters
Putting a detail of a painting back together piece by piece makes people study brushwork, colour and composition they’d otherwise walk past. Art becomes something you play with rather than something behind glass.

---

## Engineering Details & Architecture

### Overview
Installed on ultra-large museum displays (ranging from 55-inch to 90-inch commercial touchscreens across both portrait and landscape galleries), this interactive installation invites museum visitors into active, tactile contemplation of fine art. By decoupling the experience from passive placard reading, visitors reconstruct micro-compositions tile by tile, creating intimate familiarity with the artist's brush technique, pigment blending, and geometric composition.

### Operational Challenges & Solutions

1. **Guaranteed Solvable Tile Scrambling (Parity Check):**
   - *Challenge:* Random permutations of an $N \times N$ sliding puzzle (15-puzzle / 8-puzzle) have a 50% mathematical probability of being unsolvable, which would frustrate museum visitors.
   - *Solution:* Implemented an inversion parity validation algorithm. For grid width $W$ and blank tile row $R$, the permutation parity condition $(inversions + R) \pmod 2$ is verified during shuffling; alternatively, the board is scrambled via randomized valid move walks from the solved state, strictly guaranteeing 100% solvability.

2. **Real-Time High-Resolution Texture Slicing:**
   - *Challenge:* Museum collection paintings are archived in ultra-high resolution (up to 8K). Dynamically generating new rectangular textures on the CPU for dozens of tiles caused noticeable frame stutter and garbage collection spikes.
   - *Solution:* Engineered a zero-allocation UV coordinate remapping shader. Instead of creating physical texture slices, each tile is an instanced quad mesh mapped to a sub-region UV rectangle of the single source texture in GPU memory.

3. **Multi-Touch Crop & Orientation Transformation:**
   - *Challenge:* Visitors can select arbitrary rectangular regions with two-finger pinch-to-zoom, free pan, and 90-degree rotations across varying kiosk screen aspect ratios (16:9 landscape vs 9:16 portrait).
   - *Solution:* Developed a matrix transformation pipeline calculating affine homographies between screen coordinates, crop boundaries, and texture pixel space, ensuring sharp, un-skewed output tiles regardless of zoom factor.

4. **Smartphone Photo Upload Bridge (QR Code):**
   - *Challenge:* Public kiosks cannot allow visitors to insert physical USB drives or connect directly to local filesystem storage due to museum security protocols.
   - *Solution:* Built an ephemeral mobile web bridge. The kiosk generates a session-keyed QR code. When scanned by a visitor’s smartphone, a lightweight web upload page transfers the visitor’s chosen image over a secure local network channel directly into the kiosk’s runtime memory cache without cloud persistence.

5. **Adaptive Multi-Form Factor Layout:**
   - *Challenge:* Kiosks across different gallery wings feature different physical orientations (portrait vs landscape) and display scales up to 90 inches.
   - *Solution:* Built a responsive UI anchor layout with scale-independent touch targets (minimum 48mm interactive zones) so both young children and adult visitors can comfortably reach tiles.

### Architectural Layers

- **Kiosk Shell & Attract Engine:** Full-screen lock, idle attract loop showcasing popular artworks, session auto-reset after inactivity, hidden maintenance menu.
- **Collection Browser & Search Index:** Faceted filtering by artist, century, medium, department, and origin with instant keyword search.
- **Mobile QR Ingestion Bridge:** Session token generation, ephemeral HTTP/WebSocket image ingestion, image format validation and memory-only staging.
- **Interactive Crop & Transform Canvas:** Gesture-driven pan/zoom/rotate bounding box with real-time preview and edge boundary clamping.
- **Sliding Puzzle Engine:** Mathematical parity checker, kinetic slide animations, tap-to-move pathfinding, move counter, and precision timer.
- **High-Score & Telemetry Persistence:** Local SQLite leaderboard per artwork, session metrics aggregation (average solve times, difficulty distribution).

---

## Media Assets & Screenshots

*(Awaiting media links from exhibition archive)*
