# Decisions

This document records important decisions and the reasoning behind them so future agents do not accidentally undo intentional choices. Record durable decisions that affect design, behavior, constraints, or workflow; do not add routine implementation details.

## Decision: <Short Name>

Date: <YYYY-MM-DD>

Status: <Proposed | Accepted | Superseded | Revisit>

### Context

<!-- What situation, problem, constraint, or tradeoff required a decision? -->

### Decision

<!-- State the choice clearly. -->

### Reason

<!-- Explain why this option was selected. -->

### Alternatives Considered

<!-- Record meaningful alternatives and why they were not selected. -->

### Consequences

<!-- Note expected benefits, costs, limitations, and follow-up implications. -->

### Revisit Conditions

<!-- State what new evidence or changed conditions should trigger reconsideration. -->

<!-- Copy the decision template above for each important decision. Do not create fictional decisions. -->


## Decision: Sections grow instead of clipping

Date: 2026-11-12

Status: Accepted

### Context

tasteskill asks every section to be exactly one or two screens tall (fixed height). Testing at
768x1024, 1024x768 and 1280x800 showed content clipped by up to 444px with fixed heights.

### Decision

Sections use `min-height: calc(var(--h) * 100svh)`: one or two screens at minimum, growing with content.

### Reason

Clipped content is a defect on real devices; the client asked for industry-standard, all-device behaviour.

### Alternatives Considered

Fixed heights with per-breakpoint content cuts (fragile; hides real information).

### Consequences

The tasteskill gate reports section-height findings on short screens; content is always reachable.

### Revisit Conditions

If the page content is cut down so every section fits its screens at 1024x768.

## Decision: Raw WebGL hero instead of three.js

Date: 2026-11-12

Status: Accepted

### Context

The hero needs one decorative 3D effect (a point field).

### Decision

A ~4 KB raw WebGL shader in `js/scene.js`.

### Reason

three.js would add ~690 KB (≈170 KB gzipped) for one decorative effect.

### Alternatives Considered

three.js r170 from jsDelivr.

### Consequences

No dependency; the effect is simple to change; richer 3D scenes would justify three.js later.

### Revisit Conditions

If interactive 3D models (e.g. product or museum scenes) are added to the site.

## Decision: Project media served from Cloudinary

Date: 2026-11-12

Status: Accepted

### Context

Project videos and screenshots are organised in the client's Cloudinary account.

### Decision

Reference Cloudinary delivery URLs with `f_auto,q_auto` and width limits; keep IDs in `js/work.js`.

### Reason

Keeps the repository light, serves AVIF/WebP automatically, lets the client manage media centrally.

### Alternatives Considered

Committing images and videos to `assets/` (heavy repo, manual optimisation).

### Consequences

The site depends on the Cloudinary account staying public; CSP allows `res.cloudinary.com` only.

### Revisit Conditions

If the Cloudinary plan or account changes.
