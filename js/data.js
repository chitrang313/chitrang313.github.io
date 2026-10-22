/**
 * Case-study content for the projects section.
 *
 * The cards in index.html are static HTML (crawlable); this file holds the long-form
 * detail rendered into the fullscreen modal by js/main.js.
 *
 * ADDING MEDIA
 * ------------
 * Every project has a `gallery` array. Each item is one of:
 *
 *   { type: 'image',       src: 'assets/img/projects/soreal-01.jpg', alt: '...', caption: '...' }
 *   { type: 'video',       src: 'assets/video/soreal-demo.mp4', poster: 'assets/img/projects/soreal-poster.jpg', caption: '...' }
 *   { type: 'youtube',     id: 'dQw4w9WgXcQ', caption: '...' }          // click-to-load, no tracking on page load
 *   { type: 'placeholder', label: 'Architecture diagram', caption: '...' }  // designed empty slot
 *
 * Replace the `placeholder` entries as assets become available — nothing else needs to change.
 * `hero` follows the same shape and is shown large at the top of the modal.
 */
window.CASE_STUDIES = {
  /* ------------------------------------------- Rosetta Stone Interactive Kiosk */
  rosetta: {
    title: 'Rosetta Stone Kiosk',
    kicker: 'Interactive Exhibit for CSMVS Museum, Mumbai',
    year: '2024 — Present',
    role: 'Interactive Systems Engineer — drawing evaluation engine, bilingual kiosk runtime',
    org: 'ViitorCloud Technologies · CSMVS Museum',
    stackLine: 'Unity · C# · GPU Drawing Eval · REST API · TextMeshPro · DOTween',
    hero: { type: 'placeholder', label: 'Hero shot — Rosetta Stone touch kiosk on museum floor', caption: 'Drop assets/img/projects/rosetta-hero.jpg' },

    overview: [
      'An interactive touchscreen kiosk installation developed for the landmark Rosetta Stone exhibit at the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS), Mumbai. The kiosk invites museum visitors of all ages to unravel the story of ancient Egypt’s linguistic breakthrough and discover the scholars who cracked its trilingual inscription.',
      'Beyond historical exposition, the exhibit features a hands-on “How to Decode” interactive minigame. Visitors select ancient hieroglyphs, draw them directly on the touchscreen, and receive real-time shape-matching evaluation and phonetic/symbolic meaning reveals, with complete bilingual support in English and Marathi.'
    ],

    problem: [
      'Epigraphic and linguistic museum exhibits often suffer from visitor disengagement: ancient inscriptions look static, academic decipherment histories are text-heavy, and visitors quickly move past without grasping how hieroglyphic writing worked.',
      'CSMVS needed an exhibit that translated academic discovery into tactile, active participation. The kiosk had to run continuously without attendant supervision, evaluate freehand visitor touch strokes accurately and performantly on budget touchscreen hardware, support instant bilingual typography in English and Marathi, and withstand high-traffic gallery conditions.'
    ],

    responsibilities: [
      'Architected the full client kiosk application in Unity (C#) targeting Windows touchscreen hardware.',
      'Developed a custom GPU-accelerated drawing comparison algorithm that samples, normalizes, and compares freehand visitor stroke paths against reference hieroglyphs in real time.',
      'Engineered the interactive "How to Decode" minigame loop, stroke feedback FX, and progressive accuracy scoring.',
      'Implemented real-time English and Marathi localization with custom Devanagari TextMeshPro font rendering and 1-tap switching.',
      'Built museum-floor operational features: attractor screensaver video loop, automatic idle timeout reset, and persistent local asset caching.',
      'Integrated a background REST client for remote content and media updates, plus an automated analytics module generating weekly curator email reports.'
    ],

    architecture: {
      paragraphs: [
        'The application employs a modular, event-driven architecture separating user input, touch stroke processing, historical narrative display, and system supervision. A central kiosk state machine coordinates transitions between the idle video attractor, the historical exploration modules, and the interactive drawing canvas.',
        'The drawing recognition pipeline renders vector touch input into an off-screen render texture, performing rapid distance-field and spatial-occupancy kernel comparisons on the GPU against pre-authored glyph templates. This eliminates CPU bottlenecks and delivers instant, silky-smooth scoring feedback regardless of stroke complexity.'
      ],
      layers: [
        ['Attractor & watchdog', 'Screensaver video loop, touch wakeup, idle timeout reset, OS lockdown'],
        ['Drawing eval engine', 'Touch stroke capture, off-screen GPU rasterization, kernel shape matching'],
        ['Curatorial exploration', 'Zoomable artefact hotspots, historical decoding slideshows, narrative panels'],
        ['Bilingual typography', 'Devanagari & Latin TextMeshPro fonts, instant runtime language swap'],
        ['Data & cache layer', 'REST content ingestion, schema validation, persistent offline fallback'],
        ['Telemetry & reports', 'Symbol attempt tracking, dwell times, automated weekly email digest generation']
      ]
    },

    challenges: [
      {
        challenge: 'Evaluating freehand touch drawings accurately and instantly without heavy neural network overhead on standard kiosk hardware.',
        solution: 'Engineered a lightweight GPU-accelerated stroke rasterization and distance-field comparison pass that evaluates spatial stroke coverage, directionality, and aspect ratio in milliseconds, providing forgiving, encouragement-based feedback for visitors.'
      },
      {
        challenge: 'Preventing kiosk lockup or display burn-in during long idle gallery periods.',
        solution: 'Built an automated activity watchdog that transitions into a cinematic screensaver video after configurable periods of inactivity, instantly returning to the welcome state upon the first screen touch.'
      },
      {
        challenge: 'Rendering intricate Marathi glyph ligatures in Devanagari without baseline jumping or text clipping during runtime language switching.',
        solution: 'Configured custom Devanagari font atlases in TextMeshPro with tailored font fallbacks, automated kerning pairs, and layout anchors that preserve visual hierarchy across both languages.'
      },
      {
        challenge: 'Providing actionable exhibit insights to curatorial staff without requiring manual data extraction.',
        solution: 'Implemented an embedded analytics pipeline that logs anonymized visitor journeys, popular hieroglyph choices, and language preferences, automatically compiling and emailing weekly PDF/CSV summary reports to museum curators.'
      }
    ],

    features: [
      'Interactive exploration of the Rosetta Stone discovery, history, and decipherment',
      'Interactive "How to Decode" drawing game with real-time GPU-based shape scoring',
      'Instant meaning, phonetic pronunciation, and symbol background reveals upon completion',
      'One-tap bilingual language switching between English and Marathi across all UI and text',
      'Attractor screensaver video mode that plays automatically during gallery idle periods',
      'Decoupled REST backend content updates allowing curatorial text edits without app rebuilds',
      'Persistent local asset cache guaranteeing uninterrupted offline exhibit operation',
      'Automated weekly email reports summarizing visitor engagement, dwell times, and popular symbols'
    ],

    stack: [
      ['Platform', 'Windows Touchscreen Kiosk'],
      ['Engine', 'Unity Engine'],
      ['Language', 'C#'],
      ['Evaluation', 'GPU-based Drawing Comparison, RenderTextures'],
      ['Typography & FX', 'TextMeshPro (Devanagari & Latin), DOTween'],
      ['Services', 'REST API, Local SQLite/JSON Cache, Automated Email Dispatch']
    ],

    achievements: [
      'Shipped a permanent interactive centerpiece for the Rosetta Stone exhibit at CSMVS Museum, Mumbai.',
      'Achieved over 95% visitor completion rate on the hieroglyph decoding game with positive curator feedback.',
      'Delivered zero-maintenance operation in high-traffic museum gallery conditions with robust idle reset and offline fallback.',
      'Curators received automated weekly email digests informing future exhibit planning and language accessibility.'
    ],

    lessons: [
      'Drawing games in public venues must prioritize encouragement over strict precision; generous scoring tolerances keep younger visitors motivated.',
      'Screensaver attractor loops are vital for museum kiosks; dynamic video motion dramatically increases initial visitor engagement.',
      'Emailing automated weekly summaries directly to non-technical museum staff is far more effective than asking them to log into an administrative dashboard.'
    ],

    process: [
      ['Curatorial research', 'Reviewed historical decipherment timeline and hieroglyphic glyph set with CSMVS curators'],
      ['Drawing algorithm R&D', 'Prototyped GPU stroke comparison and accuracy scoring curves in Unity'],
      ['Bilingual design', 'Integrated English and Marathi typography with instant language switching'],
      ['Kiosk hardening', 'Integrated idle timeout attractor, screensaver playback, and crash-resilient watchdog'],
      ['Gallery installation', 'On-site touch calibration, ambient light tuning, and curator staff handover at CSMVS']
    ],

    gallery: [
      { type: 'placeholder', label: 'Rosetta Stone exhibit kiosk', caption: 'Touchscreen installation on museum floor' },
      { type: 'placeholder', label: 'Hieroglyph drawing canvas', caption: '“How to Decode” interactive stroke evaluation' },
      { type: 'placeholder', label: 'Historical decipherment story', caption: 'Scholars and discovery timeline' },
      { type: 'placeholder', label: 'Bilingual Marathi mode', caption: 'Marathi font rendering and narrative' }
    ],

    links: [
      { label: 'CSMVS Museum Official Website', url: 'https://csmvs.gov.in/' }
    ]
  },

  /* --------------------------------------------------- Interactive Trade Wall */
  tradewall: {
    title: 'Interactive Trade Wall',
    kicker: 'A Touch-Screen Museum Experience for CSMVS',
    year: '2024 — Present',
    role: 'Lead Interactive Engineer — dual-screen synchronization, kiosk architecture',
    org: 'ViitorCloud Technologies · CSMVS Museum',
    stackLine: 'Unity · C# · DOTween · REST API · Dual-Screen Sync · Kiosk Analytics',
    hero: { type: 'placeholder', label: 'Hero shot — two-screen interactive installation', caption: 'Drop assets/img/projects/tradewall-hero.jpg' },

    overview: [
      'A bilingual, two-screen interactive installation built for the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum), Mumbai. Visitors interact with an on-screen digital book of ancient trade commodities—such as lapis lazuli, shell, bitumen, carnelian, agate, cotton, gold, and silver.',
      'The touch book acts as the visitor’s personal controller, while a large companion display renders the spatial narrative. Tapping any material opens its historical significance and origin story in English or Marathi, simultaneously triggering dynamic animations on the large wall map showing where the material originated and how it traversed ancient trade corridors.'
    ],

    problem: [
      'Single-screen kiosks often force a painful compromise between readable long-form curatorial stories and broad geographic context. Visitors trying to read detailed historical narratives on a large wall display suffer poor ergonomics, while cramming both the map and deep stories onto a small touchscreen makes the map illegible.',
      'CSMVS required a decoupled, two-screen architecture: a tactile, ergonomic touch-book kiosk for visitor interaction and reading, paired with an eye-level wall display for cinematic trade route animations. The system had to stay synchronized with sub-second latency, support instant bilingual switching, update content remotely via a REST backend without application rebuilds, and run continuously in gallery conditions.'
    ],

    responsibilities: [
      'Architected the inter-screen communication pipeline synchronizing the tabletop touch-book controller with the large wall map display.',
      'Built the interactive digital book interface, animated page turns, material inspection panels, and route visualization triggers using Unity and DOTween.',
      'Implemented real-time English and Marathi localization with single-tap switching that updates both displays simultaneously.',
      'Engineered a dynamic backend content pipeline allowing museum curators to update narratives, materials, and route coordinates via REST APIs without client redeployment.',
      'Integrated an offline-first storage and caching layer ensuring 100% exhibit availability during gallery network outages.',
      'Developed an onboard analytics module that tracks visitor interactions (most inspected materials, route paths, language selection) and compiles automated weekly curator reports.'
    ],

    architecture: {
      paragraphs: [
        'The installation operates on a synchronized dual-display topology. The touch book serves as the primary input and narrative terminal, broadcasting material selection events, language toggles, and state changes to the map wall display runtime via low-latency local inter-process messaging.',
        'Data flows through a decoupled CMS-ready repository. On boot and during scheduled maintenance windows, the application polls the REST API for updated material manifests, route waypoint geometries, and bilingual copy, validating content hashes against local cache before applying changes on the fly.'
      ],
      layers: [
        ['Dual-screen sync', 'Low-latency event messaging coordinating touch-book controller and map wall display'],
        ['Touch book interface', 'Interactive digital book, material selector, bilingual narrative reader'],
        ['Map animation engine', 'DOTween-driven path drawing, waypoint reveals, camera focus transitions'],
        ['Localization layer', 'Synchronized bilingual switching across both screens without frame drops'],
        ['Backend & cache layer', 'REST content ingestion, schema validation, persistent offline fallback'],
        ['Analytics & telemetry', 'Interaction event logging, material popularity metrics, automated weekly digests']
      ]
    },

    challenges: [
      {
        challenge: 'Maintaining tight, glitch-free synchronization between two separate displays under erratic visitor tapping.',
        solution: 'Implemented an authoritative event dispatcher that debounces rapid touch inputs and queues animation sequences, ensuring the wall display map draws smoothly while the touch book immediately updates curatorial text.'
      },
      {
        challenge: 'Enabling museum curators to revise historical content and add materials without requiring software builds or developer intervention.',
        solution: 'Built a data-driven content pipeline consuming structured JSON and media from a REST backend, with strict validation and local fallback caching so content edits reflect immediately upon approval.'
      },
      {
        challenge: 'Delivering rich Marathi typography alongside English without layout clipping or font-rendering artifacts.',
        solution: 'Engineered custom TextMeshPro font assets with comprehensive Devanagari Unicode glyph support, automated line-height adjustments, and language-aware layout constraints.'
      },
      {
        challenge: 'Capturing exhibit engagement insights in a public setting without requiring network access or compromising visitor privacy.',
        solution: 'Created an offline analytics engine that logs anonymized interaction timestamps and generates clean, structured weekly CSV/PDF reporting digests for museum administration.'
      }
    ],

    features: [
      'Two synchronized screens: interactive touch-book controller and large map display',
      'Interactive exploration of ancient materials: lapis lazuli, shell, bitumen, carnelian, agate, cotton, gold, silver',
      'Simultaneous animated trade route rendering across historical maps upon material selection',
      'One-tap bilingual switching between English and Marathi across both screens',
      'Dynamic backend-driven content updates with zero client rebuilds required',
      'Full offline resiliency with automated local storage caching',
      'Custom Windows kiosk lockdown preventing visitor access to operating system',
      'Built-in privacy-preserving analytics engine generating weekly visitor engagement reports'
    ],

    stack: [
      ['Platform', 'Windows Touch Kiosk (Dual-screen hardware)'],
      ['Engine', 'Unity Engine'],
      ['Language', 'C#'],
      ['Animation', 'DOTween'],
      ['Backend & Sync', 'REST API, Local Inter-Process Messaging, JSON Cache'],
      ['Localization', 'English & Marathi (Devanagari TMP)']
    ],

    achievements: [
      'Engineered and deployed a flagship dual-display interactive installation at CSMVS Museum, Mumbai.',
      'Achieved seamless multi-display synchronization with zero visitor-facing latency or desync issues.',
      'Empowered museum curatorial teams to publish text and route corrections via REST APIs with zero code changes.',
      'Weekly automated analytics enabled museum leadership to quantify visitor engagement across all exhibited materials.'
    ],

    lessons: [
      'Dual-screen installations multiply visual impact, but interaction must remain centralized: one screen asks for input, the other rewards attention.',
      'Multi-lingual typography in Devanagari requires generous vertical leading and careful baseline testing compared to Latin scripts.',
      'Curators should never need a Unity developer to fix a typo or swap an image; data-driven content pipelines are essential for cultural institutions.'
    ],

    process: [
      ['Conceptual alignment', 'Defined the two-screen interaction paradigm and material list with CSMVS curators'],
      ['Prototyping & sync', 'Engineered the dual-display communication bridge and map animation timings'],
      ['Bilingual content pipeline', 'Integrated REST data models, Devanagari font rendering, and asset caching'],
      ['Kiosk integration', 'Calibrated touch responsiveness, dual-monitor windowing, and system lockdown'],
      ['Museum deployment', 'On-site installation at CSMVS gallery, stress testing, and staff training']
    ],

    gallery: [
      { type: 'placeholder', label: 'Two-screen installation', caption: 'Touch book and map wall in gallery' },
      { type: 'placeholder', label: 'Digital trade book', caption: 'Material selection on touch controller' },
      { type: 'placeholder', label: 'Animated wall map', caption: 'Trade route illumination on large display' },
      { type: 'placeholder', label: 'Bilingual Marathi view', caption: 'Marathi curatorial story panel' }
    ],

    links: [
      { label: 'CSMVS Museum Official Website', url: 'https://csmvs.gov.in/' }
    ]
  },

  /* ------------------------------------------------------------- Trade Route */
  traderoute: {
    title: 'Trade Route',
    kicker: 'Interactive Museum Kiosk for CSMVS',
    year: '2024 — Present',
    role: 'Interactive Systems Engineer — kiosk architecture, map engine, offline sync',
    org: 'ViitorCloud Technologies · CSMVS Museum',
    stackLine: 'Unity 6 · C# · URP · DOTween · REST API · Windows Kiosk',
    hero: { type: 'placeholder', label: 'Hero shot — interactive touchscreen map', caption: 'Drop assets/img/projects/traderoute-hero.jpg' },

    overview: [
      'Built for the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum, Mumbai), Trade Route is an interactive touchscreen kiosk application that brings ancient mercantile history to life. Museum visitors explore four historical trade routes across a high-resolution, zoomable interactive map connected to physical artefacts displayed in the gallery.',
      'Visitors pick a route on a zoomable map, and the app animates the journey between cities. Each route opens a panel with its history and the goods traded along it. Tapping a hotspot shows an artefact and its story, with seamless bilingual switching between English and Marathi.'
    ],

    problem: [
      'Museum kiosks face unforgiving operational realities: unmonitored public hardware with high daily footfall, visitors of diverse age groups requiring intuitive zero-learning-curve gestures, and gallery spaces where network connectivity is intermittent or unavailable.',
      'The museum needed an exhibit that runs completely offline with automatic background updates, stays locked in full-screen kiosk mode with secure staff administration, and anonymously records visitor engagement trends for curators without compromising system uptime.'
    ],

    responsibilities: [
      'Architected and implemented the interactive map system, smooth pinch/drag navigation, and animated journey transitions using Unity 6, URP, and DOTween.',
      'Engineered an offline-first data synchronization engine that loads content from the REST backend when online and reliably falls back to local cached storage when offline.',
      'Built instant bilingual localization (English and Marathi) across all route histories, city narratives, and artefact description panels without reload hitching.',
      'Implemented the secure Windows kiosk deployment shell with full-screen lockdown and hidden staff multi-touch controls for safe exit, restart, and system shutdown.',
      'Developed an onboard analytics module that logs route engagement, artefact views, and language selections, producing weekly automated reporting digests.'
    ],

    architecture: {
      paragraphs: [
        'The application is structured into decoupled modules: Map Navigation, Journey Orchestration, Artefact Viewer, Localization, Data Repository, and Kiosk Supervision. Communication flows via a lightweight reactive event bus, isolating touch input from state transitions and camera tweens.',
        'Content follows a cache-first repository pattern. When connectivity is available, the client probes the REST backend for updated narratives or media assets and validates payloads before persisting them locally. If offline or if requests fail, the application continues running seamlessly from local storage.'
      ],
      layers: [
        ['Kiosk supervision', 'Full-screen lockdown, watchdog monitor, hidden staff administration controls'],
        ['Map & journey engine', 'Zoomable navigation, city waypoints, spline-based journey animations via DOTween'],
        ['Artefact & exhibit layer', 'Interactive hotspots, modal artefact details, bilingual media cards'],
        ['Localization system', 'Dynamic runtime English/Marathi string and asset swapping'],
        ['Data & cache layer', 'REST backend sync with automatic offline fallback to local database'],
        ['Analytics engine', 'Local visitor telemetry, dwell time tracking, weekly digest generation']
      ]
    },

    challenges: [
      {
        challenge: 'Gallery network connectivity is unpredictable, but public museum exhibits must operate without interruption.',
        solution: 'Designed a fully offline-capable architecture: all map assets, trade route data, and artefact narratives are bundled locally and cached. The app polls the REST backend in the background when connected, synchronizing updates without ever blocking visitor interaction.'
      },
      {
        challenge: 'Unattended public hardware requires strict lockdown to prevent visitors from accessing Windows desktop or OS settings.',
        solution: 'Built a dedicated kiosk shell mode disabling OS hotkeys and edge-swipe gestures, coupled with a hidden multi-touch staff gesture that reveals an administrative panel for secure exit, reboot, or maintenance.'
      },
      {
        challenge: 'Fluid map zooming and route animations must maintain locked 60 FPS under continuous visitor touch input.',
        solution: 'Utilized Unity 6 Universal Render Pipeline (URP), DOTween easing sequences, sprite atlas batching, and strict texture memory budgeting to eliminate frame drops across hours of continuous use.'
      },
      {
        challenge: 'Measuring exhibit engagement without collecting personally identifiable information.',
        solution: 'Engineered an on-device analytics module that tracks aggregate engagement—most visited routes, popular artefacts, and language distribution—and automatically aggregates metrics into weekly reports for museum curators.'
      }
    ],

    features: [
      'Interactive zoomable map exploring four ancient trade routes',
      'Animated journey transitions tracking historic trade routes between cities',
      'Detailed panels with historical narratives and commodities traded',
      'Interactive artefact hotspots revealing physical museum pieces and their stories',
      'Real-time bilingual support with instant English/Marathi language switching',
      'Fully offline operation with resilient REST backend caching and synchronization',
      'Full-screen Windows kiosk mode with hidden staff administrative controls',
      'Built-in analytics tracking visitor interactions with automated weekly reporting'
    ],

    stack: [
      ['Engine', 'Unity 6 (Universal Render Pipeline)'],
      ['Language', 'C#'],
      ['Animation', 'DOTween'],
      ['Backend & Sync', 'REST API, persistent local cache'],
      ['Deployment', 'Windows Kiosk Mode, Touchscreen Hardware'],
      ['Tooling', 'Visual Studio, Git']
    ],

    achievements: [
      'Delivered a public-facing interactive exhibition piece for CSMVS Museum (Mumbai), used daily by visitors of all age groups.',
      'Maintained 100% kiosk uptime in gallery operation through robust offline fallback and lockdown controls.',
      'Enabled museum curators to analyze visitor interest patterns through automated weekly analytics reports.'
    ],

    lessons: [
      'Public touch interfaces must be self-explanatory within 3 seconds; visual affordances and breadcrumb animations are essential.',
      'Offline-first is mandatory for public venue deployments; relying on real-time internet in museum halls is an operational risk.',
      'Staff administration must be completely invisible to visitors yet easily accessible to authorized gallery staff.'
    ],

    process: [
      ['Curatorial review', 'Collaborated on route narratives, artefacts, and bilingual translations with CSMVS'],
      ['UX & map prototyping', 'Iterated touch gestures, zoom constraints, and animated route pathing'],
      ['Offline sync pipeline', 'Implemented REST connectors, schema validation, and persistent local storage'],
      ['Kiosk lockdown & telemetry', 'Hardened Windows kiosk mode, staff controls, and analytics logger'],
      ['Gallery deployment', 'On-site installation, touch calibration, and staff handover at CSMVS Museum']
    ],

    gallery: [
      { type: 'placeholder', label: 'Interactive trade route map', caption: 'Touchscreen route selection' },
      { type: 'placeholder', label: 'City journey animation', caption: 'Animated route progression' },
      { type: 'placeholder', label: 'Artefact detail modal', caption: 'Hotspot inspection view' },
      { type: 'placeholder', label: 'Bilingual language toggle', caption: 'English and Marathi content panels' }
    ],

    links: [
      { label: 'CSMVS Museum Official Website', url: 'https://csmvs.gov.in/' }
    ]
  },

  /* ------------------------------------------------------------------ SoReal */
  soreal: {
    title: 'SoReal',
    kicker: 'Interactive real-estate visualisation platform',
    year: '2023 — Present',
    role: 'Lead client engineer — technical spec, interaction systems, session handling',
    org: 'ViitorCloud Technologies',
    stackLine: 'C# · .NET · real-time networking · REST APIs · Unity Engine',
    hero: { type: 'placeholder', label: 'Hero shot — 3D interior walkthrough', caption: 'Drop assets/img/projects/soreal-hero.jpg' },

    overview: [
      'SoReal lets prospective buyers walk through a property that has not been built yet — a 3D interior explored in real time, with a sales agent guiding the session from another device. It is used in live client engagements, which means every session is someone actually trying to sell a home.',
      'I owned the technical specification, the interaction systems, multi-user session handling, and the full client application layer.'
    ],

    problem: [
      'Static renders and floor plans do not answer the questions buyers actually ask: how does this room feel, what does the light do, can I see the view from here? The client needed a guided, interactive walkthrough that worked on the hardware their customers already carried, over whatever network happened to be available in a sales office.'
    ],

    responsibilities: [
      'Authored the technical specification and translated evolving client requirements into a buildable system.',
      'Designed and built the interaction layer: navigation, object inspection, material and configuration switching.',
      'Implemented multi-user session handling so an agent and a buyer share one synchronised view.',
      'Owned the full client application layer, including REST integration with backend services.',
      'Profiled and optimised memory and load behaviour for large 3D interiors on mobile hardware.'
    ],

    architecture: {
      paragraphs: [
        'The client is split into composition-first modules — session, scene, interaction, UI, and networking — each depending on interfaces rather than on each other. That separation is what allowed the feature set to grow through several rounds of client feedback without the codebase turning into a knot.',
        'Networking is authoritative: one participant drives session state, remote participants apply state deltas with interpolation so brief packet loss degrades smoothness instead of correctness. Content is streamed rather than pre-loaded, so memory tracks what is visible rather than what exists.'
      ],
      layers: [
        ['Session layer', 'Join, roles, presence, recovery after disconnect'],
        ['Sync layer', 'Authoritative state, deltas, interpolation, latency tolerance'],
        ['Content layer', 'On-demand asset streaming, unload policy, memory budget'],
        ['Interaction layer', 'Navigation, selection, configuration switching'],
        ['Service layer', 'REST integration, retries, payload validation, error surfaces']
      ]
    },

    challenges: [
      {
        challenge: 'Multi-user state synchronisation over unreliable connections — sales offices are not data centres.',
        solution: 'Authoritative state with delta updates and client-side interpolation, plus explicit reconnect handling that restores position and context instead of dumping the user back at the entrance.'
      },
      {
        challenge: 'Large, detailed 3D interiors versus a mobile memory ceiling.',
        solution: 'Streamed content with an addressable loading strategy, aggressive unloading of out-of-view assets, object pooling for repeated elements, and profiling passes to keep peak memory under budget.'
      },
      {
        challenge: 'Client requirements that legitimately changed as they saw the product working.',
        solution: 'Interface-driven modules and data-configured content, so most requests became configuration or an added module rather than surgery on existing systems.'
      },
      {
        challenge: 'Third-party services failing in the middle of a live demo.',
        solution: 'Structured error handling with retry and backoff, payload validation at the boundary, and graceful degraded states instead of hard failures in front of a buyer.'
      }
    ],

    features: [
      'Real-time guided walkthrough with multiple participants in one session',
      '3D interior exploration with free and guided navigation',
      'Runtime configuration switching for materials and fittings',
      'Reconnect and resume without losing session context',
      'REST-backed content and session services',
      'Tuned for mid-range iOS and Android devices'
    ],

    stack: [
      ['Language', 'C#'],
      ['Platform', 'Unity Engine, iOS, Android'],
      ['Real-time', 'Photon Networking, socket-based messaging'],
      ['Services', 'REST APIs, third-party SDKs'],
      ['Practices', 'OOP, SOLID, modular architecture, profiling'],
      ['Delivery', 'Git, CI/CD']
    ],

    achievements: [
      'Delivered a platform used in live client engagements rather than a demo that stayed internal.',
      'Held multi-user synchronisation stable across the unreliable networks real sales conversations happen on.',
      'Kept large 3D scenes inside mobile memory budgets through streaming and pooling.',
      'Contributed to the reusable module patterns that cut team feature development time by roughly 30%.'
    ],

    lessons: [
      'Specification is a design tool. Writing the technical spec first surfaced three requirement conflicts that would have been expensive to find in code.',
      'Reconnect behaviour is a product feature, not error handling. Users judge a real-time system by how it recovers, not by how it behaves when everything is fine.',
      'Memory budgets should be a build-time assertion, not a thing you rediscover on a test device the week before a demo.'
    ],

    process: [
      ['Discovery', 'Requirement workshops with the client, technical spec, risk list'],
      ['Foundation', 'Module boundaries, session and sync layer, memory strategy'],
      ['Iteration', 'Feature increments against client feedback, weekly demo builds'],
      ['Hardening', 'Profiling, network fault injection, device matrix testing'],
      ['Live use', 'Support during client engagements, iterative refinement']
    ],

    gallery: [
      { type: 'placeholder', label: 'Interior walkthrough', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Multi-user session', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Architecture diagram', caption: 'Diagram slot' },
      { type: 'placeholder', label: 'Walkthrough capture', caption: 'Video slot' }
    ],

    links: []
  },

  /* ------------------------------------------------------- ICC Cricket Mobile */
  icc: {
    title: 'ICC Cricket Mobile',
    kicker: 'Officially licensed sports simulation, released globally',
    year: '2020 — 2023',
    role: 'Core systems engineer — gameplay logic, decision AI, statistics & mathematics',
    org: 'nCore Games',
    stackLine: 'C# · GOAP · state machines · algorithms · CI/CD',
    hero: { type: 'placeholder', label: 'Hero shot — match gameplay', caption: 'Drop assets/img/projects/icc-hero.jpg' },

    overview: [
      'A licensed cricket simulation released to a global audience. I owned the core application logic, the AI decision layer, and the statistics and mathematics subsystems — the parts that decide whether a simulated match feels like cricket or like a random number generator wearing a jersey.'
    ],

    problem: [
      'A licensed sport carries expectations: players who know the game will notice when a fielder makes a decision no real fielder would make. The AI had to be statistically believable across a very large state space, while staying deterministic enough for the team to unit test it, tune it, and reproduce a reported bug on demand.'
    ],

    responsibilities: [
      'Built batting, bowling and fielding mechanics.',
      'Authored the AI decision layer from scratch using goal-oriented action planning (GOAP).',
      'Built the statistics and mathematics layer underpinning simulation outcomes.',
      'Reviewed peer code through CI/CD-gated pull requests.',
      'Delivered Agile sprint commitments ahead of schedule for a global release.'
    ],

    architecture: {
      paragraphs: [
        'Gameplay is a set of explicit state machines — delivery, shot, ball-in-play, fielding response — each with clear entry and exit conditions. The AI sits above them as a planner rather than a bundle of conditionals: agents hold goals, evaluate available actions against world state, and select a plan. Adding a behaviour means adding an action with preconditions and effects, not editing a decision tree that everyone is afraid to touch.',
        'The mathematics layer is pure and side-effect free, which is what made the whole thing testable: given a state, outcomes are reproducible, so tuning is measurable and regressions show up in CI instead of in reviews.'
      ],
      layers: [
        ['Simulation core', 'Deterministic match state, phases, transitions'],
        ['Mathematics layer', 'Pure functions: probability, trajectory, outcome resolution'],
        ['AI planner (GOAP)', 'Goals, actions with preconditions/effects, plan selection'],
        ['Agent behaviours', 'Batting, bowling, fielding action sets'],
        ['Statistics layer', 'Aggregation, records, presentation-ready data']
      ]
    },

    challenges: [
      {
        challenge: 'Believable AI versus testable AI — realism usually means randomness, and randomness resists testing.',
        solution: 'Probabilistic models isolated behind a seeded, pure mathematics layer, with GOAP making the decision itself deterministic given a state. Believable in play, reproducible in a test.'
      },
      {
        challenge: 'A large simulation state space where numerical errors hide until someone notices an impossible scorecard.',
        solution: 'Side-effect-free mathematics with targeted unit tests around boundary states, and statistics validated against expected distributions rather than eyeballed.'
      },
      {
        challenge: 'Behaviour tuning requests arriving continuously from design.',
        solution: 'Data-exposed tuning parameters and an action-based AI structure, so design iterations rarely required structural code changes.'
      },
      {
        challenge: 'Multiple engineers touching shared core systems under release pressure.',
        solution: 'CI/CD-gated pull requests with review as the default, which measurably reduced defects reaching QA.'
      }
    ],

    features: [
      'Batting, bowling and fielding mechanics built from scratch',
      'GOAP-driven AI decision making for opposition behaviour',
      'Statistics and records subsystem',
      'Deterministic simulation suitable for unit testing and tuning',
      'Designer-facing tuning parameters',
      'CI/CD-gated contribution workflow'
    ],

    stack: [
      ['Language', 'C#'],
      ['AI', 'Goal-oriented action planning, state machines'],
      ['Quality', 'Unit testing, code review, CI/CD'],
      ['Tooling', 'Visual Studio, SourceTree, Git'],
      ['Platform', 'Unity Engine, iOS, Android']
    ],

    achievements: [
      'Shipped core modules ahead of schedule for a global, officially licensed release.',
      'Delivered an AI decision layer that design could tune without engineering rework.',
      'Guaranteed numerical correctness across a large simulation state space.',
      'Raised baseline code quality across the team through consistent CI-gated review.'
    ],

    lessons: [
      'Planners beat decision trees the moment behaviour needs to grow. GOAP cost more up front and paid it back every sprint after.',
      'Keeping mathematics pure was the single highest-leverage decision in the project — everything testable downstream depended on it.',
      'When designers can tune numbers themselves, engineers stop being a bottleneck and the game gets better faster.'
    ],

    process: [
      ['Design intake', 'Behaviour requirements from design, edge-case catalogue'],
      ['Core build', 'State machines, mathematics layer, test harness'],
      ['AI build', 'GOAP action set, plan evaluation, tuning surface'],
      ['Balance', 'Iterative tuning against distribution targets'],
      ['Release', 'Sprint delivery, QA cycles, global launch support']
    ],

    gallery: [
      { type: 'placeholder', label: 'Match gameplay', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'GOAP planner diagram', caption: 'Diagram slot' },
      { type: 'placeholder', label: 'Statistics screen', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Gameplay capture', caption: 'Video slot' }
    ],

    links: []
  },

  /* ---------------------------------------------------------- Ludo Multiplayer */
  ludo: {
    title: 'Ludo Multiplayer',
    kicker: 'Real-time, real-money gaming platform',
    year: '2019 — 2020',
    role: 'Full-stack owner — game state machine, API layer, socket handling, bots',
    org: 'Vasundhara Vision',
    stackLine: 'C# · Node.js · Express.js · Socket.IO · REST APIs',
    hero: { type: 'placeholder', label: 'Hero shot — live match board', caption: 'Drop assets/img/projects/ludo-hero.jpg' },

    overview: [
      'An online and offline multiplayer platform with real-money sessions and bot opponents. I implemented the full game state machine, the API integration layer, socket event handling, bot decision logic, and the transaction-facing error management.',
      'Money changes the engineering standard. A desynchronised board in a casual game is an annoyance; here it is a dispute with a paying user.'
    ],

    problem: [
      'The platform needed concurrent real-money matches to be provably fair and transactionally correct, while surviving the ordinary reality of mobile networks: users lose signal mid-turn, switch apps, and rejoin expecting their stake and their board intact.'
    ],

    responsibilities: [
      'Designed and implemented the complete game state machine for online and offline modes.',
      'Built the REST API integration layer and socket event handling on the client.',
      'Implemented bot decision logic for offline play and table filling.',
      'Owned transaction-facing error management and recovery paths.',
      'Contributed to the Node.js, Express.js and Socket.IO backend: session and room management, authoritative server logic, real-time event broadcasting.'
    ],

    architecture: {
      paragraphs: [
        'The server is authoritative for everything that matters — turn order, dice results, stake movement. Clients render and request; they never decide. That single rule removes an entire category of cheating and makes disputes answerable from server state.',
        'Session and room management live behind Socket.IO event handlers with explicit event contracts, and every money-adjacent operation is validated server-side before it is acknowledged. Reconnect is a first-class flow: rejoin, re-hydrate state, resume turn timing.'
      ],
      layers: [
        ['Client state machine', 'Turn phases, input gating, animation-safe transitions'],
        ['Socket layer', 'Typed event contracts, ack handling, reconnect and re-hydration'],
        ['REST layer', 'Auth, wallet and profile operations with validation and retries'],
        ['Authoritative server', 'Rooms, turn order, dice authority, stake movement'],
        ['Bot layer', 'Deterministic decision policy for offline and table filling']
      ]
    },

    challenges: [
      {
        challenge: 'Transactional correctness under concurrent real-money sessions.',
        solution: 'Server-side validation of every stake-affecting operation, acknowledged transitions rather than fire-and-forget events, and error paths that fail closed instead of guessing.'
      },
      {
        challenge: 'Mid-session disconnects on mobile networks.',
        solution: 'Explicit rejoin and state re-hydration flow with turn-timer reconciliation, so a dropped user returns to the correct board rather than forfeiting silently.'
      },
      {
        challenge: 'Fair play — clients cannot be trusted with dice or turn order.',
        solution: 'Fully authoritative server for randomness and sequencing; the client became a renderer with opinions but no authority.'
      },
      {
        challenge: 'Empty tables killing the experience during low-traffic hours.',
        solution: 'Bot opponents with a deterministic decision policy, tuned to be plausible without being unbeatable.'
      }
    ],

    features: [
      'Online real-time multiplayer with room and session management',
      'Offline mode against bot opponents',
      'Real-money stake handling with server-side validation',
      'Disconnect and rejoin with full state recovery',
      'Leaderboards and player progression',
      'Structured error surfaces for payment and network failures'
    ],

    stack: [
      ['Client', 'C#, Unity Engine'],
      ['Backend', 'Node.js, Express.js, Socket.IO'],
      ['Integration', 'REST APIs, Best HTTP/2, Lodash'],
      ['Platform', 'iOS, Android'],
      ['Practices', 'Authoritative server design, state machines']
    ],

    achievements: [
      'Delivered a real-money platform where fairness and transactional correctness held under concurrent sessions.',
      'Turned disconnects from a support problem into a handled flow.',
      'Owned both sides of the wire — client state machine and server logic — for a single coherent protocol.'
    ],

    lessons: [
      'Decide authority before writing a line of networking code. Every later question answers itself once the server owns truth.',
      'Money-adjacent code deserves explicit failure modes. "Probably fine" is not a state.',
      'Bots are a product decision disguised as an engineering one — their job is plausibility, not strength.'
    ],

    process: [
      ['Protocol design', 'Event contracts, authority model, failure catalogue'],
      ['Server foundation', 'Rooms, sessions, turn authority, broadcasting'],
      ['Client state machine', 'Turn phases, input gating, reconnection'],
      ['Money paths', 'Validation, acknowledgement, dispute-answerable logging'],
      ['Release', 'Load behaviour checks, store release, live monitoring']
    ],

    gallery: [
      { type: 'placeholder', label: 'Live match board', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Room / lobby flow', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Authority & reconnect diagram', caption: 'Diagram slot' }
    ],

    links: []
  },

  /* ------------------------------------------------- Configurable card engine */
  cards: {
    title: 'Configurable Card Engine',
    kicker: 'One data-driven engine, two shipped titles',
    year: '2019 — 2020',
    role: 'Architect and developer — rules engine, AI bots, monetisation',
    org: 'Vasundhara Vision',
    stackLine: 'C# · data-driven configuration · IAP · ad SDKs · DOTween',
    hero: { type: 'placeholder', label: 'Hero shot — card table', caption: 'Drop assets/img/projects/cards-hero.jpg' },

    overview: [
      'A casino-style card platform where eight rule variants can be toggled at runtime, with AI bot opponents, an animation pipeline, and monetisation integrations. Two shipped titles — a casino card game and a celebrity-themed variant — came out of the same engine.'
    ],

    problem: [
      'The brief looked like two games. It was really one game with two configurations, and the naive path — copy the project, edit the rules — would have doubled the maintenance surface immediately. The rules also had to combine arbitrarily, which is exactly where conditional logic goes to die.'
    ],

    responsibilities: [
      'Designed the data-driven rules engine and its configuration schema.',
      'Implemented runtime rule toggling across eight variants without branching sprawl.',
      'Built AI bot opponents and the animation pipeline (DOTween).',
      'Integrated in-app purchases and Google AdMob.',
      'Shipped and maintained both titles end to end.'
    ],

    architecture: {
      paragraphs: [
        'Rules are data, not code paths. Each rule is a small composable unit with declared effects on scoring, turn flow, and legality; a configuration selects which units are active, and the engine resolves them in a defined order. Because the rules never reference each other, arbitrary combinations work without a matrix of special cases.',
        'Presentation is decoupled from resolution: the engine emits events, the animation layer interprets them. That separation is what let a second title reuse the whole core with a different skin and rule set.'
      ],
      layers: [
        ['Configuration', 'Declarative rule set per title / per table'],
        ['Rules engine', 'Composable rule units, deterministic resolution order'],
        ['Table state', 'Hands, turns, legality checks, scoring'],
        ['Bot policy', 'Decision heuristics over legal move set'],
        ['Presentation', 'Event-driven animation pipeline, UI']
      ]
    },

    challenges: [
      {
        challenge: 'Eight rule variants combinable at runtime without conditional-logic sprawl.',
        solution: 'Rules as independent, declarative units resolved in a fixed order — adding a rule adds a unit and never touches existing ones.'
      },
      {
        challenge: 'Two products from one codebase without a fork.',
        solution: 'Configuration and content separated from engine, so the second title shipped substantially faster than the first.'
      },
      {
        challenge: 'Animation timing fighting rule resolution.',
        solution: 'Resolution completes first and emits events; the presentation layer replays them, so visuals can never desynchronise the table state.'
      },
      {
        challenge: 'Bots that are convincing but not oppressive.',
        solution: 'Heuristic policy over the legal move set with tunable aggression, evaluated against win-rate targets.'
      }
    ],

    features: [
      'Eight rule variants toggleable at runtime',
      'Configuration-driven table setup',
      'AI bot opponents with tunable behaviour',
      'Event-driven animation pipeline (DOTween)',
      'In-app purchases and AdMob integration',
      'Shared core across two shipped titles'
    ],

    stack: [
      ['Language', 'C#'],
      ['Engine', 'Unity 3D'],
      ['Architecture', 'Data-driven configuration, composable rules'],
      ['Monetisation', 'Unity IAP, Google AdMob'],
      ['Animation', 'DOTween']
    ],

    achievements: [
      'Two production titles delivered from a single reusable engine, cutting build time on the second substantially.',
      'Rule combinations expanded without regression to existing variants.',
      'Monetisation integrated without contaminating game logic.'
    ],

    lessons: [
      'When a client asks for two similar products, design the second one before shipping the first. The abstraction is cheap now and expensive later.',
      'Deterministic resolution followed by replayed presentation is the pattern I have reached for on every stateful UI since.',
      '"Data-driven" is only true if the data can express combinations nobody anticipated.'
    ],

    process: [
      ['Rule analysis', 'Catalogued all variants, extracted the composable primitive'],
      ['Engine build', 'Resolution order, legality checks, event emission'],
      ['Content pass', 'Per-title configuration, art integration, animation'],
      ['Monetisation', 'IAP and ad integration with validation'],
      ['Ship & maintain', 'Two store releases, ongoing updates']
    ],

    gallery: [
      { type: 'placeholder', label: 'Card table', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Rule configuration', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Rules engine diagram', caption: 'Diagram slot' }
    ],

    links: []
  },

  /* ------------------------------------------------------------ Bus simulator */
  bus: {
    title: '99.9% Impossible Bus Simulator',
    kicker: 'Vehicle physics and a content pipeline built for iteration',
    year: '2018 — 2019',
    role: 'Solo developer — physics, level pipeline, game modes',
    org: 'Escrow Infotech',
    stackLine: 'C# · vehicle physics · content pipeline · Android',
    hero: { type: 'placeholder', label: 'Hero shot — sky-road level', caption: 'Drop assets/img/projects/bus-hero.jpg' },

    overview: [
      'A driving game built around narrow sky-roads, where the entire experience rests on how the vehicle feels. I designed and coded it end to end, then added modes and levels driven by what players actually asked for after release.'
    ],

    problem: [
      'Difficulty was the product. Too forgiving and the premise collapses; too punishing and players leave in the first minute. The vehicle also had to behave consistently across a wide spread of Android hardware, where frame timing is anything but uniform.'
    ],

    responsibilities: [
      'Built the vehicle physics model and control feel.',
      'Designed and implemented the level authoring pipeline.',
      'Added game modes and levels informed by post-release user feedback.',
      'Tuned performance across a broad Android device range.'
    ],

    architecture: {
      paragraphs: [
        'Physics runs on a fixed timestep with input smoothing on top, so behaviour stays identical whether the device renders at 30 or 60 frames per second. Levels are authored as data — road segments, checkpoints, hazards — which meant new content did not require new code.'
      ],
      layers: [
        ['Physics core', 'Fixed-timestep vehicle model, deterministic handling'],
        ['Input layer', 'Smoothed control mapping, assist curves'],
        ['Level data', 'Segment-based authoring, checkpoints, hazards'],
        ['Progression', 'Modes, unlocks, scoring'],
        ['Performance', 'Device tiering, draw and physics budget tuning']
      ]
    },

    challenges: [
      {
        challenge: 'Frame-rate-dependent handling on low-end devices.',
        solution: 'All vehicle forces moved to a fixed timestep with rendering interpolated, so handling stopped depending on hardware.'
      },
      {
        challenge: 'Difficulty tuning against real player tolerance.',
        solution: 'Segment-based levels made it cheap to re-author individual sections, so tuning happened by editing data after reading feedback, not by rebuilding levels.'
      },
      {
        challenge: 'Adding modes after launch without destabilising the base game.',
        solution: 'Modes expressed as rule sets over the same level data, keeping the core untouched.'
      }
    ],

    features: [
      'Fixed-timestep vehicle physics with assist curves',
      'Sky-road level set with checkpoints and hazards',
      'Multiple game modes added post-launch',
      'Data-authored levels for rapid iteration',
      'Tuned for low- and mid-tier Android devices'
    ],

    stack: [
      ['Language', 'C#'],
      ['Engine', 'Unity Engine'],
      ['Domain', 'Vehicle physics, level design tooling'],
      ['Platform', 'Android'],
      ['Tooling', 'Visual Studio Community']
    ],

    achievements: [
      'Shipped and maintained a consumer title as sole developer.',
      'Turned post-launch feedback into shipped modes and levels quickly, thanks to the data pipeline.',
      'Consistent handling across a wide device performance range.'
    ],

    lessons: [
      'Build the content pipeline before the content. Every hour there returned several during tuning.',
      'Determinism matters outside simulations too — inconsistent handling reads to players as a broken game, not a slow device.',
      'Feel is measurable if you decide what to measure: time-to-first-failure told me more than any opinion.'
    ],

    process: [
      ['Prototype', 'Handling model first, one test road, nothing else'],
      ['Pipeline', 'Segment authoring, checkpoint system'],
      ['Content', 'Level set, progression, scoring'],
      ['Release', 'Android launch, review monitoring'],
      ['Post-launch', 'Feedback-driven modes and levels']
    ],

    gallery: [
      { type: 'placeholder', label: 'Sky-road level', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Level authoring view', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Gameplay capture', caption: 'Video slot' }
    ],

    links: []
  },

  /* ------------------------------------------------------------ Shooting arena */
  arena: {
    title: 'Shooting Arena: Total Destruction',
    kicker: 'Enemy AI, combat systems and an exploit-resistant economy',
    year: '2017 — 2018',
    role: 'Gameplay systems developer',
    org: 'Escrow Infotech',
    stackLine: 'C# · state-driven AI · virtual economy · IAP · ads',
    hero: { type: 'placeholder', label: 'Hero shot — combat encounter', caption: 'Drop assets/img/projects/arena-hero.jpg' },

    overview: [
      'An arcade combat title where I built the ship control system, enemy AI, health and damage systems, and the virtual currency economy alongside its monetisation integrations. This was the project where I learned that an economy is a system with adversaries.'
    ],

    problem: [
      'Combat needed to stay readable and fair while enemy pressure scaled, and the currency loop had to reward play without opening a path to trivially farmed or tampered balances.'
    ],

    responsibilities: [
      'Implemented ship controls and combat feel.',
      'Built state-driven enemy AI with distinct behaviour profiles.',
      'Built health, damage and hit-feedback systems.',
      'Designed the virtual currency economy and hardened it against exploitation.',
      'Integrated advertisements and in-app purchases.'
    ],

    architecture: {
      paragraphs: [
        'Enemies are finite state machines with shared perception and separate behaviour profiles, so a new enemy type is a new profile rather than new plumbing. Damage flows through one resolution path — every source, one place to reason about — which kept balance work honest.',
        'Currency operations are transactional and validated rather than incremented ad hoc, with rewards granted by the system that owns the loop instead of by whichever feature happened to trigger them.'
      ],
      layers: [
        ['Control layer', 'Ship movement, aiming, input feel'],
        ['Perception', 'Shared target acquisition and threat data'],
        ['Enemy FSM', 'Per-type behaviour profiles over common states'],
        ['Combat resolution', 'Single damage path, health, feedback'],
        ['Economy', 'Validated currency transactions, reward authority']
      ]
    },

    challenges: [
      {
        challenge: 'A currency economy exposed to tampering and farming.',
        solution: 'Centralised, validated transactions with a single reward authority, removing the ad-hoc increments that make exploits trivial.'
      },
      {
        challenge: 'Enemy variety without a combinatorial explosion of AI code.',
        solution: 'One state machine, many profiles — behaviour differences expressed as data over shared states.'
      },
      {
        challenge: 'Balance drift as new enemies and weapons landed.',
        solution: 'A single damage resolution path, so every balance change had one place to be reasoned about and tested.'
      }
    ],

    features: [
      'Responsive ship control and combat feel',
      'State-driven enemy AI with multiple behaviour profiles',
      'Health, damage and hit-feedback systems',
      'Virtual currency economy with validated transactions',
      'Rewarded ads and in-app purchases'
    ],

    stack: [
      ['Language', 'C#'],
      ['Engine', 'Unity 3D'],
      ['Domain', 'State machines, combat systems, virtual economy'],
      ['Monetisation', 'IAP, ad SDKs'],
      ['Tooling', 'Visual Studio']
    ],

    achievements: [
      'Delivered the combat and economy systems for a shipped Android title.',
      'Contributed to the reusable UI and animation components adopted across other projects at the studio.',
      'Part of the work that lifted user retention 20% through iterative UX refinement.'
    ],

    lessons: [
      'Any value a user benefits from will be attacked. Design the transaction, not the increment.',
      'One resolution path per mechanic is worth more than clever per-feature optimisations.',
      'Store reviews are a free, brutal usability lab — reading them changed how I prioritised.'
    ],

    process: [
      ['Core loop', 'Controls and combat feel prototyped first'],
      ['AI', 'State machine, perception, behaviour profiles'],
      ['Economy', 'Currency model, validation, reward authority'],
      ['Monetisation', 'Ads and IAP integration'],
      ['Release', 'Android launch, feedback-driven refinement']
    ],

    gallery: [
      { type: 'placeholder', label: 'Combat encounter', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Upgrade / economy screen', caption: 'Screenshot slot' },
      { type: 'placeholder', label: 'Gameplay capture', caption: 'Video slot' }
    ],

    links: []
  }
};
