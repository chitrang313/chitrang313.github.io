# TouchWall — Touch the Wall, the Story Plays

## Metadata
- **Project Name:** TouchWall — Touch the Wall, the Story Plays
- **Client / Context:** Interactive Projection Mapping & Invisible Touch Surface Installation ([Client Confidential])
- **Category:** Interactive Exhibition Installation (Cultural Heritage, Temples, Museums & Showrooms)
- **Role:** Lead Interactive Systems Engineer — touch plane sensor calibration (LiDAR/laser), projection mapping homography, video playback runtime in Unity (URP), zero-hardware architectural integration, on-site hot-swap media pipeline
- **Timeline:** 2023 — 2024
- **Platform:** Ultra-Short-Throw (UST) Laser Projection + Invisible Optical/LiDAR Touch Plane + Architectural Wall Surface
- **Tech Stack:** Unity 6 (Universal Render Pipeline / URP), C#, Optical/LiDAR Touch Plane Tracking (Laser Curtain / Depth Sensor), 4-Point Homography Perspective Calibration, Hardware-Accelerated Video Player, Local File Watcher & Dynamic Media Loader, 100% Offline Kiosk Wrapper

---

## Project Brief (Provided Information)

### Title
TouchWall — Touch the Wall, the Story Plays

### Short Description (For a Project Card)
A plain architectural wall that springs to life when touched. Visitors touch a designated hotspot on the blank wall, and an ultra-bright video appears directly over it via laser projection, disappearing seamlessly on tap with zero visible hardware.

### About the Project (Longer Description)
A plain white wall that comes alive when you touch it. Visitors walk up, touch a spot on the wall, and a video appears right there — played large, bright and clear by a projector. No screen, no kiosk, no buttons, no hardware in sight. Touch again and the video closes. The wall looks completely ordinary until someone reaches out.

### Purpose
Turn blank wall space into an experience people want to walk up to. Built for temples, exhibitions, museums, showrooms and retail — anywhere you want visitors to explore content themselves instead of watching a screen loop in the corner. Costs a fraction of a large display, works on any size wall, needs no internet, and the videos can be swapped on site in minutes.

### Highlights
- **Zero-hardware aesthetic:** Completely invisible technology footprint—no screens, tablets, kiosks, wires, or physical buttons visible on the wall surface.
- **Large-format projection:** Renders large, high-definition projected visuals directly on existing drywall, plaster, or stone surfaces.
- **Natural tactile discovery:** The wall appears ordinary until approached, transforming passive gallery spaces into hands-on exploration.
- **Toggle interaction:** Touching a hotspot opens the story video; touching again or stepping away closes it cleanly.
- **Rapid on-site media swapping:** Venue staff can swap story videos in minutes by dropping standard MP4 files into a local folder.
- **Cost-effective & scalable:** Delivers monumental interactive display capability at a fraction of the hardware cost of large commercial touchscreens.

---

## Engineering Details & Architecture

### Overview
Modern cultural and commercial spaces frequently need large-format interactive storytelling, but standard hardware solutions present major drawbacks: giant commercial touchscreens cost tens of thousands of dollars, gather unsightly fingerprints, and disrupt the clean aesthetic of architectural heritage walls or temple sanctums. 

TouchWall solves this dilemma through invisible projection mapping and optical touch tracking. The entire installation remains imperceptible to the naked eye until visitors approach. By sweeping an invisible planar detection curtain flush across the wall, any touch instantly triggers ultra-bright, dynamic video projection mapped precisely to where the visitor reached.

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                 INVISIBLE SENSING LAYER                     │
│  - Flush Planar Laser Curtain / Solid-State 2D LiDAR        │
│  - Sub-Millimeter Optical Detection (<2mm off wall surface) │
│  - Sub-15ms XY Touch Coordinate Tracking & Debouncing       │
└──────────────────────────────┬──────────────────────────────┘
                               │ High-Speed Sensor Telemetry (USB/Serial)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│             TOUCHWALL RUNTIME ENGINE (Unity URP)            │
│  - 4-Point Homography Warp & Optical Keystone Calibration   │
│  - Touch Hit-Testing & Interactive Hotspot State Machine    │
│  - GPU-Accelerated Hardware Video Streamer (H.264/HEVC)     │
│  - Dynamic Smooth Expand / Collapse Aperture Shaders        │
│  - Local Hot-Reload File Watcher (Drop MP4 to Update)       │
│  - Autonomous Inactivity Timeout & Ambient Attractor Logic  │
└──────────────────────────────┬──────────────────────────────┘
                               │ GPU Video Output (HDMI / DisplayPort)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│            ULTRA-SHORT-THROW (UST) LASER PROJECTOR          │
│  - Hidden Ceiling / Recessed Architectural Soffit Mount     │
│  - 4000+ Lumens High-Contrast Laser Projection Engine       │
│  - Seamless Blending on Plain Drywall, Stone, or Plaster    │
└─────────────────────────────────────────────────────────────┘
```

### Operational Challenges & Solutions

1. **Achieving the "Zero Visible Hardware" Architectural Illusion:**
   - *Challenge:* In religious temples, historical museums, and luxury showrooms, mounting metallic touchscreen frames, dangling cabling, or glass monitors ruins the serene spatial aesthetic.
   - *Solution:* Replaced visible hardware with ceiling-recessed ultra-short-throw (UST) laser projectors and perimeter-concealed solid-state laser plane sensors painted to match the room molding. To the visitor, the wall appears as an ordinary architectural drywall or stone surface until touched.

2. **Optical Sensor to Projection Surface Homography:**
   - *Challenge:* Slight mechanical misalignments between the projector lens and the laser touch sensor create parallax error, causing the projected video to open offset from where the visitor touched.
   - *Solution:* Built an in-engine 4-point homography calibration utility. During venue installation, technicians project a crosshair matrix onto the wall, tap the projected alignment points, and the runtime automatically computes a 3x3 projective homography transformation matrix, ensuring sub-5mm touch-to-projection alignment.

3. **Ambient Light Glare and False Triggers:**
   - *Challenge:* Public galleries experience shifting ambient sunlight, passing crowds, and shadows that can confuse optical tracking sensors into triggering phantom videos.
   - *Solution:* Utilized modulated infrared laser curtains operating at 850nm with bandpass optical filters that reject ambient visible light. Combined this with a software cluster-tracking algorithm that validates touch contact area, velocity threshold, and dwell time before registering a valid press.

4. **Non-Technical On-Site Content Swapping:**
   - *Challenge:* Venue operators frequently change exhibits, seasonal temple narratives, or showroom promotional reels, but lack technical staff to recompile Unity builds or adjust configurations.
   - *Solution:* Implemented a dynamic file-system watcher. Operators drop standard `.mp4` or `.webm` video clips into designated local folders (`/media/slot_01.mp4`, etc.) via USB drive. The engine hot-detects file updates, re-indexes aspect ratios, and refreshes video player textures at runtime without requiring an application restart.

---

## Technical Specifications

| Parameter | Specification |
|---|---|
| **Projection Hardware** | Ultra-Short-Throw (UST) Laser Projector (4,000–6,000 Lumens, WUXGA/4K) |
| **Touch Tracking** | Planar IR Laser Curtain / 2D Solid-State LiDAR (20–40 Hz scan rate) |
| **Touch Accuracy** | Sub-10mm spatial resolution with zero-latency hardware filtering |
| **Wall Compatibility** | Any flat or slightly textured matte wall (drywall, wood veneer, stone, canvas) |
| **Video Engine** | Unity 6 URP with hardware-accelerated Media Foundation / VideoPlayer |
| **Supported Formats** | H.264 / HEVC / ProRes / WebM with dynamic runtime streaming |
| **Network Dependency** | 100% Offline; zero venue internet or cloud connection required |
| **Content Update** | Local USB drag-and-drop or network share hot-reloading |

---

## Operational Resilience & Venue Deployment

- **Autonomous Daily Operation:** Integrated RS-232 / CEC projector power controls allowing the application to automatically power on laser projectors before venue opening hours and shut down after closing.
- **Fail-Safe Inactivity Reset:** If a visitor walks away mid-video, an inactivity countdown smoothly fades the video and restores the wall to its quiet ambient standby state after 30 seconds.
- **Zero Fingerprint Maintenance:** Because projected light eliminates physical glass touchscreens, the wall never accumulates oily fingerprints, smudges, or surface glare, dramatically reducing daily janitorial upkeep.
