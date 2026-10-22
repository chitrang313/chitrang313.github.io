# Visitor Feedback Kiosk — CSMVS Museum Mumbai

## Metadata
- **Project Name:** Museum Visitor Feedback Kiosk: CSMVS Mumbai
- **Client:** Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum, Mumbai)
- **Built At:** ViitorCloud Technologies
- **Role:** Interactive Systems Engineer — kiosk architecture, trilingual input, sync pipeline
- **Timeline:** 2024 — Present
- **Platform:** Gallery Touchscreen Kiosk Display
- **Tech Stack:** Unity, C#, Devanagari Virtual Keyboards, SQLite Offline Sync, REST API, Admin Dashboard, Excel Export

---

## Project Brief (Provided Information)

### Title Options
- Museum Visitor Feedback Kiosk: CSMVS Mumbai
- CSMVS Visitor Voice: Touchscreen Feedback for a Museum Exhibition
- Interactive Feedback Kiosk for CSMVS Museum, Mumbai

### Short Description (1–2 Lines)
A touchscreen feedback kiosk built for Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS), Mumbai. Visitors to its ancient world exhibition share their experience in English, Hindi or Marathi.

### Full Description
CSMVS is one of India’s leading museums. It wanted to hear from visitors to its ancient world exhibition: what surprised them, which object they would love to take home, and how they would describe the exhibition in one word. Paper forms were slow and easy to skip, so we built a friendly touchscreen kiosk that sits right in the gallery.

Visitors tap through a few short questions in English, Hindi or Marathi, with an on-screen keyboard for each language. It takes about a minute, and they can stay anonymous if they like. The kiosk runs all day on its own. If the internet drops, it saves answers and sends them later, so no feedback is lost.

Behind the scenes, museum staff use a secure admin panel to read every response and download the data as a spreadsheet. The curators get a clear picture of who visits, what visitors learn and what moves them, which helps shape future exhibitions.

### Highlights
- Touchscreen kiosk app that runs full-screen in the gallery with no staff needed
- Three languages: English, हिंदी (Hindi), मराठी (Marathi)
- Quick, simple flow of about 9 short questions, with an anonymous option
- Works offline and syncs answers automatically when back online
- Admin dashboard to view feedback and export it to Excel
- Hidden staff controls to shut down or service the kiosk safely

### Purpose (One Line)
Give museum visitors an easy, fun way to share their thoughts, and give the museum real insight to improve its exhibitions.

---

## Engineering Details & Architecture

### Overview
Built for the ancient world gallery at CSMVS Museum, this installation replaces low-yield paper guestbooks with a dynamic, trilingual sentiment engine. Visitors can complete a 9-question reflection flow in under 60 seconds using custom-engineered on-screen virtual keyboards for English, Hindi, and Marathi.

### Operational Challenges & Solutions
1. **Devanagari Touch Typing Engine:**
   - *Challenge:* Operating systems lack friendly, clean on-screen touch keyboards for Hindi and Marathi that prevent visitors from switching OS settings or seeing system trays.
   - *Solution:* Built a custom virtual keyboard in Unity supporting full Devanagari Unicode: dynamic vowel matra attachment, halant combining, conjunct ligatures, and responsive touch layouts.
2. **Zero Data Loss Store-and-Forward Cache:**
   - *Challenge:* Gallery Wi-Fi drops frequently due to thick stone museum architecture; traditional web forms drop responses when offline.
   - *Solution:* Designed a local SQLite transactional queue. Every completed response is encrypted and committed to local storage with write-ahead logging before network dispatch is attempted. A background sync worker dispatches queued batches whenever connectivity returns.
3. **Curator Administration & Export:**
   - *Challenge:* Museum curatorial teams needed quick access to survey data without requiring database or engineering support.
   - *Solution:* Built a secure admin dashboard accessible via hidden multi-touch staff gestures, featuring password verification, live response filtering, and one-click Excel (.xlsx) and CSV report generation.

### Architectural Layers
- **Kiosk Shell & Lockdown:** Full-screen lock, hidden multi-touch gestures, OS hotkey blocking.
- **Trilingual Virtual Keyboards:** Dedicated English, Hindi, and Marathi on-screen keyboards with dynamic ligature handling.
- **Survey Workflow Engine:** 9-question adaptive survey flow with multiple-choice chips, sentiment tags, and optional anonymous submissions.
- **Offline Transactional Queue:** Local SQLite database with atomic commits guaranteeing zero data loss.
- **Sync Worker & API Client:** Background daemon monitoring connectivity and batch-syncing responses to the museum backend.
- **Admin Dashboard:** In-app response inspector with date/question filtering and native Excel/CSV export.
