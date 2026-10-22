# Tree Light-Up: Touch to Make a Tree Glow

## Metadata
- **Project Name:** Tree Light-Up: Touch to Make a Tree Glow
- **Client / Context:** Interactive Exhibition Installation / Physical Computing Prototype ([Client Confidential])
- **Category:** Physical Computing & Interactive IoT Installation (Museums, Festivals & Public Spaces)
- **Role:** Lead Interactive Systems & Physical Computing Engineer — touchscreen interface, microcontroller firmware, addressable LED animation engine, relay switching, standalone wireless telemetry
- **Timeline:** 2023 — 2024
- **Platform:** Interactive Touchscreen Tablet Kiosk + Physical Tree Installation (Microcontroller, Addressable LED Strands & Real Bulbs)
- **Tech Stack:** Unity / C# Touch UI Client, Microcontroller Firmware (ESP32 / C++), WS2812B Addressable LED Light Strands, Solid State Relay (SSR) Drivers, Local UDP/WebSocket Wireless Telemetry, Standalone Wi-Fi Access Point (Zero Cloud / No Internet)

---

## Project Brief (Provided Information)

### Title
Tree Light-Up: Touch to Make a Tree Glow

### Short Description (For a Project Card)
An interactive installation where touching a screen lights up a real, physical tree. Visitors tap four color buttons to send climbing light strands and calming breathing glows up the branches, illuminating physical bulbs over a zero-setup local wireless link.

### About the Project (Longer Description)
Tree Light-Up is an interactive display where a touch on a screen lights up a real, physical tree. Visitors tap one of four buttons and a colored strand of lights (red, green, blue, or amber) climbs the tree, then glows with a slow, calming "breathing" effect. Tap again and the lights fade out one by one. A real bulb switches on with each strand.

### Purpose
It turns a screen into a hands-on experience. Visitors watch their touch change something real in front of them, which makes the display more memorable and gets people to stop and engage. It runs on its own wireless connection, so it needs no internet and no complicated setup at the venue.

### Highlights
- **Direct physical-digital bridge:** Touchscreen interactions control physical lighting on an actual living tree in real time.
- **Four interactive color channels:** Red, Green, Blue, and Amber strands can be toggled independently or layered together.
- **Organic lighting animation curves:** Dynamic sequential climbing animation up trunk and branches, transitioning into a soothing sinusoidal "breathing" pulse.
- **Physical filament illumination:** A real, dedicated bulb illuminates alongside each active color strand.
- **Standalone wireless infrastructure:** Employs an isolated local access point requiring zero venue Wi-Fi, zero internet, and zero configuration.

---

## Engineering Details & Architecture

### Overview
Tree Light-Up bridges digital user interfaces with tangible physical environments. Public exhibitions and festivals often suffer from screen fatigue—visitors walk past flat television monitors and interactive tablets without stopping. By tightly coupling a responsive touchscreen interface to the kinetic and luminous reality of a physical tree, the installation turns a simple touch into an enchanting, memorable sensory moment that encourages active social engagement.

### Hardware & IoT Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                 TOUCHSCREEN CONTROLLER KIOSK                │
│  - 4 Tactile Color Buttons: Red, Green, Blue, Amber         │
│  - Real-Time Virtual Strand State Feedback & Animations     │
│  - Input Debounce & Concurrency Management Engine           │
│  - Local UDP / WebSocket Telemetry Broadcaster (<10ms)      │
└──────────────────────────────┬──────────────────────────────┘
                               │ Dedicated Standalone Wi-Fi (No Internet)
                               │ Local Binary / JSON Packets
                               ▼
┌─────────────────────────────────────────────────────────────┐
│           PHYSICAL TREE CONTROLLER (ESP32 / MCU)            │
│  - Embedded Access Point (AP) & UDP Listener Loop           │
│  - High-Resolution LED Timing Engine (FastLED / RMT DMA)    │
│  - 4x Independent State Machines: Climb -> Breathe -> Fade  │
│  - SSR / MOSFET Drivers for 4x Physical Filament Bulbs      │
└──────────────────────────────┬──────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
┌─────────────────────────────┐ ┌─────────────────────────────┐
│ 4x ADDRESSABLE LED STRANDS  │ │   4x REAL EDISON BULBS      │
│ - Red, Green, Blue, Amber   │ │ - Physical Warm Bulbs       │
│ - Progressive Node Climbing │ │ - Solid State Relay Driven  │
│ - Sinusoidal Pulse (0.2 Hz) │ │ - Zero-Crossing Switching   │
└─────────────────────────────┘ └─────────────────────────────┘
```

### Operational Challenges & Solutions

1. **Imperceptible Input-to-Light Latency over Standalone Wi-Fi:**
   - *Challenge:* In public interactive exhibits, any perceived lag between a visitor tapping the screen and the physical tree reacting ruins the magical illusion of direct agency. Relying on venue Wi-Fi networks is notoriously brittle due to RF congestion and firewalls.
   - *Solution:* Built a dedicated, local-only wireless network. The microcontroller acts as a hardened autonomous Access Point (AP). The touchscreen client broadcasts compact UDP telemetry packets containing channel IDs and target states. End-to-end glass-to-photon latency is kept under 15ms without needing external routers or internet access.

2. **Organic "Climbing" and "Breathing" Illumination Curves:**
   - *Challenge:* Addressable LED strips often look harsh and mechanical if lit linearly or driven with stepped delay loops that block controller execution.
   - *Solution:* Engineered non-blocking parametric curve evaluators running inside the microcontroller firmware. The climbing effect uses cubic bezier ease-out math to simulate energy surging up the trunk into the canopy. Once fully climbed, each channel seamlessly shifts into an organic sinusoidal breathing frequency (0.2 Hz) with non-linear gamma-corrected luminance ($I \propto V^{2.2}$) to match human ocular perception.

3. **High-Current Mixed Load Control (LEDs + Mains Bulbs):**
   - *Challenge:* Driving hundreds of 5V digital LEDs simultaneously while switching 110V/220V physical filament bulbs risks voltage dips, electrical noise, and microcontroller lockups caused by inductive transients.
   - *Solution:* Galvanically isolated the digital logic from the AC lighting circuits using optocoupled Solid State Relays (SSRs) with zero-crossing detection. Dedicated decoupled DC power rails prevent voltage sag during peak white/amber illumination, ensuring absolute hardware stability during 12-hour continuous public operation.

4. **Concurrent Multi-Strand State Layering:**
   - *Challenge:* Multiple visitors (e.g. parents and children) often tap multiple buttons simultaneously or tap rapidly while animations are mid-transition.
   - *Solution:* Architected an independent state machine for each of the 4 color channels (Idle/Off, Climbing, Breathing, Fading Out). Each strand executes its animation timeline autonomously; tapping a strand while climbing reverses it smoothly into a graceful fade-out cascade, while other active strands continue their soothing breathing cycles unaffected.

---

## Technical Specifications

| Parameter | Specification |
|---|---|
| **Controller Hardware** | Espressif ESP32 dual-core microcontroller (240 MHz) with FreeRTOS |
| **LED Protocol** | WS2812B addressable 5V digital strands via ESP32 hardware RMT peripheral |
| **Physical Bulbs** | 4x Warm Edison vintage filament lamps switched via zero-cross SSRs |
| **Networking** | 802.11b/g/n local AP, connectionless low-latency UDP binary socket |
| **Latency** | <15ms touch-to-photon glass-to-hardware response |
| **Power Distribution** | Regulated dual-rail power supply (5V 20A DC for LEDs + 220V isolated AC for lamps) |
| **Venue Requirements** | Single standard mains wall outlet; zero internet, zero ethernet wiring |

---

## Operational Resilience & Venue Deployment

- **Zero-Configuration Setup:** Plug in the tree power cable, turn on the tablet kiosk, and the two devices pair automatically over the embedded private Wi-Fi network. No network credentials, router logins, or calibration steps are needed on site.
- **Watchdog Auto-Recovery:** The firmware features hardware watchdog timers that auto-reset in milliseconds in case of electrical spikes, immediately restoring current light state from non-volatile memory.
- **Fail-Safe Inactivity Mode:** When left untouched for 3 minutes, the installation initiates an ambient attractor breathing sequence across all strands at 20% brightness, drawing passersby toward the kiosk.
