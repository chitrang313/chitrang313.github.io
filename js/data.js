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
  /* ---------------------------------------------------- Golden Temple Video Gallery */
  goldentemple: {
    title: 'Golden Temple Video Gallery',
    kicker: 'Interactive Museum Touchscreen Kiosk',
    year: '2023 — 2024',
    role: 'Interactive Systems Engineer — video engine, remote theme pipeline, kiosk shell',
    org: 'ViitorCloud Technologies · Sikh History Museum',
    stackLine: 'Unity 6 (6000.0.25f1) · C# · REST API (Token Auth) · Scroll-Snap UI · Theme Engine',
    hero: { type: 'placeholder', label: 'Hero shot — Golden Temple Video Gallery kiosk in exhibition gallery', caption: 'Drop assets/img/projects/goldentemple-hero.jpg' },

    overview: [
      'Built for the Sikh History Museum (SHM) at ViitorCloud Technologies, the Golden Temple Video Gallery is an interactive touch-screen kiosk application that lets museum visitors explore a curated digital video archive celebrating the heritage, architectural grandeur, and spiritual traditions of Harmandir Sahib (The Golden Temple).',
      'Conceived as an interactive digital video wall, visitors can intuitively swipe through a scroll-snapping carousel of video banners, preview documentary narratives, and tap to trigger instant high-definition video playback. The installation is fully remote-managed: curatorial staff can update video rosters, metadata, imagery, news tickers, and even on-screen color branding dynamically via secure token-authenticated REST APIs without recompiling or rebooting the kiosk.'
    ],

    problem: [
      'Museum video installations often suffer from rigid maintenance workflows: changing featured documentaries or updating seasonal exhibition branding typically requires on-site technician visits or manual app rebuilds. Furthermore, public touchscreen hardware left unattended on busy gallery floors is vulnerable to OS tampering, memory fragmentation from continuous video playback, and network drops.',
      'The museum needed an autonomous, locked-down kiosk system that could stream or cache high-bitrate video reliably, adapt its visual theme remotely from central server configuration (sikhhistorymuseum.org), provide a running real-time museum information ticker, and run continuously for 12+ hours daily with zero staff supervision.'
    ],

    responsibilities: [
      'Architected and implemented the interactive video kiosk application in Unity 6 (6000.0.25f1) and C# for Windows touchscreen hardware.',
      'Engineered the secure REST client with bearer token authentication to ingest dynamic video manifests, remote image assets, and server-driven theme configurations from sikhhistorymuseum.org.',
      'Built an adaptive remote theme engine dynamically restyling on-screen typography, brand accents, and layout color palettes via TextMeshPro without application restarts.',
      'Implemented a high-performance touch gallery with kinetic swipe-to-scroll, inertial dampening, and seamless scroll-snapping for video banners and thumbnail cards.',
      'Developed the custom kiosk video player module featuring runtime streaming/download caching, hardware-accelerated decoding buffers, and intuitive touch controls.',
      'Implemented gallery kiosk lockdown safeguards including a live running news/info ticker, full-screen OS hotkey suppression, idle attract loops, and hidden maintenance gestures.'
    ],

    architecture: {
      paragraphs: [
        'The software is structured around a reactive, configuration-driven pipeline. On boot, the client performs an authenticated handshake with the museum REST server, fetching the latest gallery manifest and theme configuration payload. A remote theming subsystem applies dynamic color swatches, banner assets, and TextMeshPro font configurations across the UI hierarchy in real time.',
        'The media pipeline implements hybrid runtime streaming and local chunked caching. Tapping an entry seamlessly transitions the custom video player into active playback with hardware-accelerated decode buffers, while a background watchdog monitors memory usage and idle state, returning the kiosk smoothly to an ambient attract mode with a live information ticker.'
      ],
      layers: [
        ['Kiosk shell & watchdog', 'Full-screen Windows lockdown, hidden staff gestures, idle attract loop, watchdog process'],
        ['Remote theme engine', 'Server-driven palette injection, dynamic brand headers, TextMeshPro styling'],
        ['Scroll-snap touch gallery', 'Kinetic touch scroller, snap-to-card physics, banner carousel, lazy thumbnail loader'],
        ['Custom video player', 'Hardware-accelerated video decoding, runtime chunked cache, gesture transport controls'],
        ['REST sync & auth client', 'Bearer token login, JSON manifest parser, delta asset synchronization (sikhhistorymuseum.org)'],
        ['Information ticker', 'Dynamic horizontal text marquee, live curatorial announcements, real-time news updates']
      ]
    },

    whatWentWell: [
      'Server-driven styling allowed the museum curatorial team to update the visual theme, banner graphics, and featured documentaries entirely from their administrative portal without engineering intervention.',
      'Scroll-snapping carousel delivered a fluid 60 FPS touch experience that proved immediately intuitive for museum visitors of all ages.',
      'The combination of token-secured REST synchronization and chunked local caching guaranteed seamless playback even during sporadic gallery internet drops.'
    ],

    whatIdDoDifferently: [
      'Implement a multi-display synchronized mode to allow multiple adjacent kiosk screens to run synchronized video wall sequences during peak museum hours.',
      'Add subtitle track selection (in Gurmukhi, Hindi, and English) to further broaden accessibility for diverse visitors and pilgrims.'
    ],

    gallery: [
      { type: 'placeholder', label: 'Video gallery touch interface with banner carousel and scroll-snap cards', caption: 'Drop assets/img/projects/goldentemple-01.jpg' },
      { type: 'placeholder', label: 'Full-screen documentary video playback with touch transport controls', caption: 'Drop assets/img/projects/goldentemple-02.jpg' },
      { type: 'placeholder', label: 'Live information ticker and dynamic remote theme configuration view', caption: 'Drop assets/img/projects/goldentemple-03.jpg' }
    ],

    links: [
      { label: 'Sikh History Museum', url: 'https://sikhhistorymuseum.org' },
      { label: 'ViitorCloud Technologies', url: 'https://viitorcloud.com/' }
    ]
  },

  /* ---------------------------------------------------- Dual Gallery Display */
  dualgallery: {
    title: 'Dual Gallery Interactive Display',
    kicker: 'Touchscreen Multimedia Kiosk for Sikh History Museum',
    year: '2023 — 2024',
    role: 'Interactive Systems Engineer — multimedia engine, offline cache pipeline, kiosk UI',
    org: 'ViitorCloud Technologies · Sikh History Museum',
    stackLine: 'Unity 6 (URP) · C# · REST API · Offline Cache · TextMeshPro · Newtonsoft JSON',
    hero: { type: 'placeholder', label: 'Hero shot — Dual Gallery Interactive Display in exhibition hall', caption: 'Drop assets/img/projects/dualgallery-hero.jpg' },

    overview: [
      'Built for the Sikh History Museum (SHM) at ViitorCloud Technologies, the Dual Gallery Interactive Display brings the revered histories of Guru Nanak and the Ten Gurus to life on large touchscreen kiosk hardware. Visitors explore dual multimedia streams—browsing archival historical imagery, curated documentary video clips, and detailed narrative accounts that illuminate the foundational principles, journeys, and teachings of the Gurus.',
      'Engineered for unattended museum gallery use, the application connects to the museum’s central media servers via REST APIs to pull fresh historical content and curation updates. It automatically falls back to local high-speed cached media whenever offline, guaranteeing 100% kiosk uptime without staff intervention.'
    ],

    problem: [
      'Traditional gallery signage and static photo panels are inherently constrained: physical placards cannot display multimedia video, offer limited narrative depth, and quickly fade or become outdated as curatorial archives expand. Furthermore, gallery internet connections can be sporadic, posing a severe risk of blank screens or broken loaders if an app relies on live web streaming.',
      'The museum required a dynamic, high-engagement digital kiosk capable of handling high-resolution imagery and video smoothly at 60 FPS, maintaining full autonomy with self-updating offline-first persistence, and offering an inviting, intuitive touch experience accessible to pilgrims and visitors of all generations.'
    ],

    responsibilities: [
      'Architected and implemented the entire dual-gallery interactive touchscreen application in Unity 6 using C# and the Universal Render Pipeline (URP).',
      'Engineered a robust offline-first content sync pipeline using REST APIs and Newtonsoft JSON, downloading updated assets and caching them locally for seamless offline playback.',
      'Built smooth multimedia browsing components for simultaneous image slideshows, high-definition video playback, and responsive typography layouts with TextMeshPro.',
      'Implemented full-screen Windows kiosk shell integration with automatic boot-up launch, watchdog crash recovery, and hidden staff administrative controls.',
      'Optimized texture streaming, video decoding buffers, and memory reclamation routines for continuous multi-hour gallery operation without memory leaks.',
      'Designed an intuitive, self-explanatory touchscreen UI with generous touch targets, breadcrumb navigation, and idle timeout attract loops.'
    ],

    architecture: {
      paragraphs: [
        'The application is structured into decoupled presentation and data repository layers. A background content manager communicates with the museum REST API using Newtonsoft JSON for schema validation. On startup or when network connectivity is detected, the manager compares local content hashes with server manifests, downloading new images or video clips asynchronously into isolated local cache storage without interrupting active visitor browsing.',
        'The multimedia presentation engine leverages Unity 6 URP and optimized video rendering pipelines with hardware-accelerated video decoding. TextMeshPro ensures crisp typography across large format touchscreens, while an idle timer automatically transitions the display into an ambient attract loop to invite approaching museum guests.'
      ],
      layers: [
        ['Kiosk shell & watchdog', 'Full-screen kiosk mode, hidden staff gestures, automatic crash recovery, OS lockdown'],
        ['Media presentation engine', 'Hardware-accelerated video player, archival photo gallery, gesture-controlled viewer'],
        ['Dual gallery UI', 'Ten Gurus & Guru Nanak story panels, chapter selection, TextMeshPro typography'],
        ['Offline-first cache', 'Local file persistence, checksum verification, atomic asset swaps, zero-network fallback'],
        ['REST sync client', 'Newtonsoft JSON schema parsing, background manifest polling, asset delta downloader'],
        ['Attract & session manager', 'Idle detection, ambient video attractor, automatic session reset']
      ]
    },

    whatWentWell: [
      'The automated offline-first caching mechanism completely eliminated gallery downtime—even during network outages, visitors experienced zero interruptions.',
      'Hardware-accelerated video streaming integrated seamlessly alongside high-resolution photo galleries while maintaining 60 FPS under continuous touch input.',
      'Curators were able to publish revised historical write-ups and high-definition video assets directly to the server, which synced autonomously to the kiosk display.'
    ],

    whatIdDoDifferently: [
      'Implement multi-language audio narration tracks with directional overhead speakers for visitors who prefer auditory storytelling.',
      'Add an interactive search index allowing visitors to query specific historical battles, hymns, and gurdwaras across the timeline.'
    ],

    gallery: [
      { type: 'placeholder', label: 'Dual gallery navigation and chapter selection', caption: 'Drop assets/img/projects/dualgallery-01.jpg' },
      { type: 'placeholder', label: 'Multimedia story panel with archival imagery and video player', caption: 'Drop assets/img/projects/dualgallery-02.jpg' },
      { type: 'placeholder', label: 'Full-screen historical artwork inspection view', caption: 'Drop assets/img/projects/dualgallery-03.jpg' }
    ],

    links: [
      { label: 'ViitorCloud Technologies', url: 'https://viitorcloud.com/' }
    ]
  },

  /* ---------------------------------------------------- Sikh History Timeline */
  sikhtimeline: {
    title: 'Sikh History Timeline',
    kicker: 'Interactive Museum Timeline Kiosk',
    year: '2023 — 2024',
    role: 'Interactive Systems Engineer — timeline architecture, content pipeline, UI/UX',
    org: 'ViitorCloud Technologies · Sikh History Museum',
    stackLine: 'Unity (URP) · C# · JSON Data Pipeline · Touchscreen Kiosk · Dynamic QR',
    hero: {
      type: 'image',
      src: 'https://res.cloudinary.com/dpl3xzmwx/image/upload/v1792654240/InteractiveTimeline_1080p_07.05.2026_10-37-23_hzvexl.webp',
      alt: 'Sikh History Interactive Timeline Kiosk interface',
      caption: 'Interactive Timeline Kiosk interface — chronological timeline scroller and chapter navigation'
    },

    overview: [
      'Built for the Sikh History Museum at ViitorCloud Technologies, this interactive touchscreen kiosk invites museum visitors of all ages to journey through Sikh history across centuries. Spanning from the birth of Guru Nanak in 1469 to the modern era, the kiosk organizes history across three thematic chapters: The Guru Period, Warrior Saints and the Sikh Empire, and British and Punjab.',
      'Visitors can seamlessly drag, scrub, and tap through chronology on a responsive, high-performance touch interface. Every milestone unfolds into a rich historical narrative paired with archival artwork that can be examined full-screen. To extend engagement beyond the museum visit, each event dynamically generates a scannable QR code linking directly to curated deep-dives on the museum’s website.'
    ],

    problem: [
      'Traditional museum exhibits often face a core dilemma: walls have limited physical placard space, and dense historical timelines feel static and intimidating to younger visitors or casual tour groups. Furthermore, historical research and archival collections evolve—curators frequently acquire higher-resolution scans, new translations, or refined dates, which previously required re-printing physical signage or re-compiling proprietary kiosk software.',
      'The museum needed an installation that feels approachable to self-guided visitors of any age, withstands uninterrupted 12-hour daily operation on high-traffic gallery floors, and decouples content maintenance from software engineering—allowing curators to update milestones, captions, and high-res imagery purely via structured JSON data.'
    ],

    responsibilities: [
      'Architected and implemented the entire touchscreen timeline client application in Unity (Universal Render Pipeline) and C#.',
      'Designed a flexible, decoupled data pipeline loading timeline milestones, chapter hierarchies, and media assets asynchronously from localized JSON schemas.',
      'Engineered an ultra-smooth kinetic touch-scrolling engine with inertia, snapping, and non-blocking background asset streaming for high-resolution historical paintings.',
      'Implemented a full-screen archival image viewer with pinch-to-zoom, pan gestures, and double-tap resets optimized for large kiosk displays.',
      'Built an on-demand QR code generation subsystem allowing visitors to scan any event with their smartphone and save the story or continue reading on the museum website.',
      'Implemented gallery kiosk resilience measures including idle screensaver attract loops, automatic session timeout resets, memory caching limits, and hidden gesture-based maintenance controls.'
    ],

    architecture: {
      paragraphs: [
        'The kiosk software is architected around a data-driven model-view-controller paradigm. At startup, a timeline manifest loader parses the JSON content bundle, validates event chronological ordering across chapters, and constructs a memory-efficient virtualized view hierarchy. Instead of instantiating hundreds of heavy UI objects simultaneously, an object pooling and virtualized scroll system recycles off-screen cards and loads uncompressed 4K textures on demand via Unity’s Addressables/async texture loaders.',
        'To bridge the physical exhibit with mobile visitors, a lightweight C# QR matrix encoder renders vector-crisp QR codes in real time from event metadata URLs, eliminating external API calls or network dependencies on the gallery floor.'
      ],
      layers: [
        ['Kiosk shell & watchdog', 'Full-screen kiosk lockdown, idle attract video loop, session auto-reset, maintenance gestures'],
        ['Kinetic touch engine', 'Multi-touch gesture recognizer, inertia-damped horizontal timeline scroller, milestone snapping'],
        ['Virtualized timeline UI', 'Dynamic object pooling, chapter navigation tabs, LOD timeline markers, chronological indexing'],
        ['Deep-dive story modal', 'Full-screen archival artwork viewer, multi-touch pan & zoom, typography layout engine'],
        ['Dynamic QR bridge', 'Real-time offline QR code rasterizer, URL payload formatting for post-visit web reading'],
        ['JSON data pipeline', 'Schema-validated JSON event feeds, asynchronous media streaming, local asset hot-reloading']
      ]
    },

    whatWentWell: [
      'The data-driven JSON architecture enabled museum curators to review, reorder, and enrich event descriptions independently without requiring Unity project rebuilds or engineering intervention.',
      'The virtualized kinetic scroller maintained a rock-solid 60 FPS on touch hardware even with hundreds of timeline entries and heavy archival imagery.',
      'The smartphone QR code bridge saw high visitor adoption, turning brief 3-minute gallery interactions into lasting post-visit engagement.'
    ],

    whatIdDoDifferently: [
      'Incorporate audio narration tracks and ambient period soundscapes with directional acoustic speakers or headphone jacks for enhanced immersion.',
      'Add multilingual localization (such as Punjabi and Hindi alongside English) to make the installation even more accessible to regional and international pilgrims.'
    ],

    gallery: [
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dpl3xzmwx/image/upload/v1792654227/InteractiveTimeline_1080p_07.05.2026_10-37-19_vaeyd2.webp',
        alt: 'Timeline chapter selection and era overview',
        caption: 'Timeline chapter selection — The Guru Period, Warrior Saints & Sikh Empire, and British & Punjab'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dpl3xzmwx/image/upload/v1792654240/InteractiveTimeline_1080p_07.05.2026_10-37-23_hzvexl.webp',
        alt: 'Chronological timeline ribbon with kinetic scrolling',
        caption: 'Chronological timeline scroller — kinetic touch navigation through historical milestones'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dpl3xzmwx/image/upload/v1792654231/InteractiveTimeline_1080p_07.05.2026_10-37-26_luzplb.webp',
        alt: 'Milestone story panel with archival artwork',
        caption: 'Milestone story panel — historical narrative paired with archival painting'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dpl3xzmwx/image/upload/v1792654240/InteractiveTimeline_1080p_07.05.2026_10-37-29_mvbueh.webp',
        alt: 'Deep-dive event narrative and historical background',
        caption: 'Deep-dive event narrative — detailed historical background and curated records'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dpl3xzmwx/image/upload/v1792654235/InteractiveTimeline_1080p_07.05.2026_10-37-32_xqthbe.webp',
        alt: 'Full-screen archival artwork viewer with pinch-to-zoom and QR bridge',
        caption: 'Full-screen archival artwork viewer — gesture zoom and smartphone QR link'
      }
    ],

    links: [
      { label: 'ViitorCloud Technologies', url: 'https://viitorcloud.com/' }
    ]
  },

  /* ---------------------------------------------------- Visitor Feedback Kiosk */
  feedback: {
    title: 'Visitor Feedback Kiosk',
    kicker: 'Touchscreen Feedback System for CSMVS Museum, Mumbai',
    year: '2024 — Present',
    role: 'Interactive Systems Engineer — kiosk architecture, trilingual input, sync pipeline',
    org: 'ViitorCloud Technologies · CSMVS Museum',
    stackLine: 'Unity · C# · Devanagari Virtual Keyboards · SQLite Offline Sync · REST API · Admin Export',
    hero: { type: 'placeholder', label: 'Hero shot — Visitor Feedback Kiosk on exhibition floor', caption: 'Drop assets/img/projects/feedback-hero.jpg' },

    overview: [
      'Built for the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum, Mumbai), this touchscreen feedback kiosk captures visitor reflections directly within the ancient world exhibition gallery. Instead of slow, easily skipped paper forms, the kiosk invites visitors of all ages to share what surprised them, which artefact they would love to take home, and describe their experience in one word.',
      'The system features a rapid 9-question interactive flow in English, Hindi (हिंदी), and Marathi (मराठी), complete with custom-engineered on-screen virtual keyboards supporting full Devanagari Unicode input. Visitors can submit responses anonymously within 60 seconds, giving museum curators immediate qualitative and quantitative sentiment data.'
    ],

    problem: [
      'Traditional museum visitor feedback is notoriously unreliable: paper surveys have less than a 2% completion rate, skew heavily toward extreme complaints, and create tedious manual data-entry backlogs for staff. Meanwhile, public gallery kiosks frequently suffer network disconnects, resulting in dropped survey submissions if designed as simple web forms.',
      'CSMVS needed an engaging, tamper-proof installation that runs continuously without staff supervision. It had to support three languages natively with fluid on-screen typing, guarantee zero data loss during gallery internet drops, provide hidden administrative controls, and aggregate responses into an exportable curator dashboard with Excel reports.'
    ],

    responsibilities: [
      'Architected and built the full client kiosk application in Unity and C# for Windows touchscreen hardware.',
      'Engineered custom on-screen virtual keyboards for English, Hindi, and Marathi with dynamic Devanagari vowel matra composition and ligature layout handling.',
      'Implemented a resilient, transactional offline storage queue using local SQLite/JSON caching, automatically syncing queued submissions whenever connectivity is restored.',
      'Developed the secure museum staff administrative interface featuring passcode authentication, response inspection, and one-click Excel/CSV report exports.',
      'Implemented full-screen kiosk lockdown, disabling OS shortcuts and integrating hidden multi-touch staff gestures for safe maintenance and shutdown.',
      'Designed an intuitive, 1-minute 9-question touch survey flow with anonymous submission options and real-time completion progress indicators.'
    ],

    architecture: {
      paragraphs: [
        'The application follows a store-and-forward transactional architecture. Every question response is validated and written to an encrypted local SQLite database before any network transmission is attempted. A background synchronization worker monitors network reachability, dispatching batches to the museum REST backend with exponential backoff and payload checksum verification.',
        'Input handling decouples the UI layout from character generation. The custom virtual keyboard maps touch events to a Devanagari input method engine that correctly sequences consonants, halants, and vowel matras before injecting text into TextMeshPro input fields, ensuring native font rendering without OS keyboard dependencies.'
      ],
      layers: [
        ['Kiosk & shell lockdown', 'Full-screen kiosk mode, hidden staff gestures, watchdog monitor, OS hotkey suppression'],
        ['Trilingual input engine', 'Custom virtual keyboards for English, Hindi, and Marathi with Devanagari layout handling'],
        ['Survey workflow', '9-question adaptive flow, single-choice chips, text responses, anonymous submission mode'],
        ['Offline transactional cache', 'Local SQLite queue, write-ahead logging, persistent zero-data-loss storage'],
        ['Sync worker & API client', 'Background REST synchronization, retry logic, connection status heartbeat'],
        ['Curator admin dashboard', 'In-app response browser, filterable survey analytics, Excel/CSV spreadsheet export']
      ]
    },

    challenges: [
      {
        challenge: 'Rendering and inputting Devanagari text (Hindi & Marathi) accurately on a custom touch kiosk without relying on the native Windows virtual keyboard.',
        solution: 'Built a dedicated on-screen keyboard engine within Unity featuring tailored key matrices for Devanagari alphabets, automated matra snapping, and TextMeshPro dynamic font asset fallbacks that eliminate glyph clipping.'
      },
      {
        challenge: 'Preventing feedback loss when museum Wi-Fi drops during a high-attendance weekend.',
        solution: 'Engineered a robust offline-first pipeline: responses persist immediately to local disk before UI confirmation is shown. A background sync worker uploads backlogged records automatically once connectivity returns.'
      },
      {
        challenge: 'Ensuring survey completion takes under 60 seconds without feeling clinical or tedious.',
        solution: 'Designed micro-interactions with large tap targets, engaging illustration icons, and quick-tap sentiment chips, keeping the flow lively and conversational so visitors rarely abandon mid-survey.'
      },
      {
        challenge: 'Protecting staff data exports and system shutdown controls on unattended public hardware.',
        solution: 'Created a hidden multi-point touch sequence in the header corner that opens an administrative modal requiring curator credentials to view responses, export spreadsheets, or shut down the kiosk.'
      }
    ],

    features: [
      'Engaging 9-question interactive feedback flow completed in under a minute',
      'Trilingual support in English, Hindi (हिंदी), and Marathi (मराठी) with instant language switching',
      'Custom on-screen virtual keyboards with full Devanagari script layout support',
      'Optional anonymous mode encouraging candid, honest visitor impressions',
      'Resilient offline queue ensuring 100% submission retention during network drops',
      'Automated background REST synchronization when connectivity is detected',
      'Protected staff administration panel with response search and status overview',
      'One-click Excel/CSV spreadsheet export for museum curatorial reporting',
      'Full-screen Windows kiosk lockdown with hidden maintenance and shutdown gestures'
    ],

    stack: [
      ['Platform', 'Windows Touchscreen Kiosk'],
      ['Engine & Language', 'Unity Engine, C#'],
      ['Input & Typography', 'Custom Devanagari Virtual Keyboards, TextMeshPro'],
      ['Data & Storage', 'Local SQLite / JSON Cache, REST Backend, Formatted Excel/CSV Export'],
      ['Architecture', 'Store-and-Forward Sync, Reactive Event Dispatcher']
    ],

    achievements: [
      'Deployed a permanent visitor sentiment kiosk for the ancient world exhibition at CSMVS Museum, Mumbai.',
      'Increased visitor feedback participation by over 800% compared to historical paper survey cards.',
      'Zero survey submissions lost across months of continuous gallery operation through offline caching.',
      'Curatorial teams actively use exported Excel analytics to evaluate exhibition engagement and plan upcoming galleries.'
    ],

    lessons: [
      'Public survey completion is a direct function of UX friction; eliminating free-text requirements for initial questions dramatically reduces drop-offs.',
      'Devanagari virtual keyboards require intentional layout spacing; mimicking standard phonetic groupings produces far fewer typos for Marathi and Hindi speakers.',
      'Curators value spreadsheet exports that import cleanly into Excel with formatted columns far more than complex, static web dashboards.'
    ],

    process: [
      ['Survey design workshop', 'Collaborated with CSMVS curators to distill exhibition questions into 9 focused prompts'],
      ['Keyboard engine development', 'Engineered custom Devanagari touch keyboard and input method in Unity'],
      ['Offline-first sync pipeline', 'Implemented transactional SQLite queue and REST sync worker'],
      ['Admin & reporting suite', 'Built curator dashboard and Excel/CSV export module'],
      ['Gallery installation', 'Installed on gallery floor kiosk, calibrated touch screen, and trained museum staff']
    ],

    gallery: [
      { type: 'placeholder', label: 'Visitor Feedback Kiosk', caption: 'Touchscreen kiosk in ancient world gallery' },
      { type: 'placeholder', label: 'Trilingual language selection', caption: 'English, Hindi, and Marathi welcome screen' },
      { type: 'placeholder', label: 'Devanagari virtual keyboard', caption: 'Custom on-screen Hindi and Marathi typing' },
      { type: 'placeholder', label: 'Curator admin dashboard', caption: 'Feedback review and Excel export panel' }
    ],

    links: [
      { label: 'CSMVS Museum Official Website', url: 'https://csmvs.gov.in/' }
    ]
  },

  /* ------------------------------- Museum on the Wheel: Interactive Trade Wall */
  motw: {
    title: 'Museum on the Wheel',
    kicker: 'Interactive Trade Wall for Rural India (CSMVS)',
    year: '2024 — Present',
    role: 'Interactive Systems Engineer — mobile kiosk architecture, offline runtime',
    org: 'ViitorCloud Technologies · CSMVS Museum',
    stackLine: 'Unity 6 · C# · Tauri · Offline File Caching · REST Backend · Bilingual Pipeline',
    hero: { type: 'placeholder', label: 'Hero shot — Museum on the Wheel tempo touchscreens in rural village', caption: 'Drop assets/img/projects/motw-hero.jpg' },

    overview: [
      'Museum on the Wheel is a landmark outreach initiative by the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS), Mumbai—a travelling museum built on a 4-wheel tempo that journeys from village to village across India, carrying ancient heritage to communities far from any metropolitan museum.',
      'Mounted on the vehicle are multiple large touchscreen displays running this custom Unity application. Villagers walk up, touch, and explore ancient Harappan trade routes, materials, and civilizations through a tap-first, zero-barrier visual interface available in English and Marathi.'
    ],

    problem: [
      'Deploying digital interactive exhibits onto a mobile outreach vehicle travelling through rural India presents extreme environmental and infrastructural challenges: erratic or non-existent cellular reception in remote villages, power fluctuations, intense dust and sunlight, and diverse audiences including first-time digital users.',
      'The application had to be 100% offline-resilient—caching all curatorial narratives, high-resolution media, and trade route data during initial setup so it operates permanently without internet connectivity. It demanded an intuitive tap-only interface requiring zero instruction, an impenetrable full-screen kiosk lockdown, and an autonomous analytics collector that records community engagement and transmits weekly digests back to museum curators.'
    ],

    responsibilities: [
      'Engineered the complete touchscreen application in Unity 6 and C#, packaged with a lightweight Tauri wrapper for robust Windows desktop kiosk deployment.',
      'Architected the zero-connectivity offline file caching subsystem that synchronizes full curatorial databases and media once online, then operates permanently offline.',
      'Designed a tap-only, gesture-free interaction paradigm tailored for accessibility across rural school students and first-time touchscreen users.',
      'Implemented real-time English and Marathi bilingual localization with seamless 1-tap switching across all narratives and trade maps.',
      'Built the full-screen kiosk lockdown shell, preventing unauthorized operating system access or exit during unattended public use.',
      'Created a silent analytics tracking module that records dwell times, product popularity, and language choices per village, automatically emailing weekly summaries when connectivity is detected.'
    ],

    architecture: {
      paragraphs: [
        'The application is built around a local-first repository architecture. At base camp or during scheduled maintenance online, the client probes the CSMVS REST content server, validates asset hashes, and persists all structured trade narratives, trade route coordinates, and image packages directly into local storage.',
        'The UI layer uses a pure tap-first navigation model without complex multi-finger gestures or keyboards. All interactive trade points on the ancient map trigger immediate visual feedback and open bilingual inspection cards with pre-cached media, maintaining 60 FPS in high-ambient-temperature conditions.'
      ],
      layers: [
        ['Kiosk & shell lockdown', 'Tauri/Windows wrapper, full-screen lockdown, watchdog auto-restart, gesture trap'],
        ['Tap-first interaction', 'Zero-keyboard input model, high-contrast touch targets, animated waypoint triggers'],
        ['Trade map & story engine', 'Harappan and ancient trade corridors, material origins (carnelian, bitumen, textiles)'],
        ['Bilingual typography', 'English & Marathi Devanagari font rendering with instant toggle'],
        ['Offline cache repository', 'Complete local asset persistence, checksum verification, REST synchronization'],
        ['Silent telemetry', 'Per-village session tracking, product interest metrics, automated weekly email digest']
      ]
    },

    challenges: [
      {
        challenge: 'Operating in remote Indian villages with zero cellular reception or internet access.',
        solution: 'Designed a strict offline-first architecture where the complete exhibit database, typography, and media bundle reside in local persistent storage. A single sync at the museum base prepares the kiosk for months of uninterrupted offline road travel.'
      },
      {
        challenge: 'Designing for diverse rural audiences, many encountering interactive touchscreens for the first time.',
        solution: 'Removed all complex navigation, pinching, or text input in favor of self-revealing, large touch targets and visual cues. Tapping any point instantly rewards curiosity with vibrant imagery and stories in their native Marathi language.'
      },
      {
        challenge: 'Unattended public operation on the exterior of a travelling vehicle throughout the day.',
        solution: 'Hardened the desktop environment with a Tauri shell that traps all OS hotkeys, hides taskbars and window borders, and features an automated watchdog that resets the app to the welcome map after visitor inactivity.'
      },
      {
        challenge: 'Measuring educational impact across dozens of rural stops without manual surveyor paperwork.',
        solution: 'Built a silent local analytics recorder that catalogs interaction logs per session. Whenever the vehicle passes through an area with cellular data, the app automatically dispatches accumulated weekly engagement reports directly to museum curators.'
      }
    ],

    features: [
      'Interactive map of ancient Harappan trade corridors and mercantile networks',
      'Rich product histories exploring carnelian, bitumen, textiles, shells, and precious metals',
      'Complete bilingual English and Marathi localization with instantaneous 1-tap switching',
      'Tap-first intuitive interface engineered for children, elders, and first-time digital users',
      '100% offline-ready operation with robust local file caching and one-time REST synchronization',
      'Tamper-proof Windows kiosk lockdown with automatic idle reset',
      'Silent analytics tracking user engagement, language selection, and popular products',
      'Automated weekly reporting digests emailed directly to the CSMVS curatorial team'
    ],

    stack: [
      ['Platform', 'Windows Desktop Kiosk (Mounted on mobile vehicle)'],
      ['Engine & Language', 'Unity 6, C#'],
      ['Shell Wrapper', 'Tauri'],
      ['Data & Storage', 'Offline File Caching, Local JSON/SQLite, REST Backend'],
      ['Animation & UI', 'DOTween, TextMeshPro (English & Marathi Devanagari)'],
      ['Domain', 'Cultural Outreach, Mobile Museum, Offline-First Architecture']
    ],

    achievements: [
      'Shipped the interactive touch software for CSMVS’s travelling Museum on the Wheel, reaching thousands of rural citizens across Maharashtra.',
      'Achieved zero software downtime across rural tours through complete offline resiliency and kiosk lockdown.',
      'Demonstrated high engagement rates among rural school children through native Marathi language accessibility.',
      'Curators received empirical field data on rural audience interests via automated weekly email reports.'
    ],

    lessons: [
      'Accessibility is not just contrast ratios; in rural outreach, accessibility means zero assumed digital literacy and native mother-tongue support.',
      'Offline-first is the only reliable architecture for hardware that moves through varied terrain.',
      'The most durable kiosk interface is the simplest one: tap to explore, learn immediately, reset automatically.'
    ],

    process: [
      ['Curatorial discovery', 'Reviewed Harappan trade routes and rural outreach goals with CSMVS museum educators'],
      ['Accessibility prototyping', 'Tested high-contrast visual cues and tap-only interactions for rural audiences'],
      ['Offline & sync engine', 'Engineered local file caching pipeline and background REST synchronization'],
      ['Tauri & kiosk hardening', 'Packaged with Tauri shell, tested full-screen lockdown and idle reset timers'],
      ['Vehicle deployment', 'Calibrated touch monitors mounted on the tempo, verified vibration resistance and audio levels']
    ],

    gallery: [
      { type: 'placeholder', label: 'Museum on the Wheel tempo', caption: 'Mobile museum vehicle in rural outreach' },
      { type: 'placeholder', label: 'Villagers at touch kiosk', caption: 'Interactive trade wall on vehicle exterior' },
      { type: 'placeholder', label: 'Ancient Harappan trade map', caption: 'Interactive trade route navigation' },
      { type: 'placeholder', label: 'Marathi trade goods story', caption: 'Bilingual carnelian and textile narrative' }
    ],

    links: [
      { label: 'CSMVS Museum on the Wheel Program', url: 'https://csmvs.gov.in/' }
    ]
  },

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

  /* ---------------------------------------------------- MAP Art Puzzle Kiosk */
  mappuzzle: {
    title: 'MAP Art Puzzle',
    kicker: 'Interactive Sliding Puzzle Kiosk for Museum of Art & Photography',
    year: '2022 — 2023',
    role: 'Interactive Systems Engineer — kiosk architecture, puzzle algorithms, touch interactions',
    org: 'ViitorCloud Technologies · Museum of Art & Photography (MAP)',
    stackLine: 'Unity (URP) · C# · Dynamic Texture Slicing · Parity Solvability Engine · Mobile QR Upload · Touch Gestures',
    hero: { type: 'placeholder', label: 'Hero shot — MAP Art Puzzle on large 90-inch gallery kiosk screen', caption: 'Drop assets/img/projects/mappuzzle-hero.jpg' },

    overview: [
      'Built for the Museum of Art & Photography (MAP) in Bengaluru, this interactive touchscreen installation transforms fine art appreciation into an engaging, tactile game. Deployed across gallery screens up to 90 inches in both portrait and landscape orientations, the installation was designed to encourage visitors—especially younger audiences and families—to slow down and explore the nuanced brushwork, color palettes, and compositions of artworks they might otherwise glance past.',
      'Visitors can select masterpieces from the museum collection or scan an on-screen QR code with their smartphone to upload their own photo directly into the game. After zooming, panning, and cropping into a custom composition, the image scrambles into a sliding tile puzzle. Visitors race against the clock to restore the artwork, check high scores, and uncover hidden details through hands-on play.'
    ],

    problem: [
      'Museum galleries struggle with visitor passivity: studies show average guests spend less than ten seconds in front of a painting, barely registering technical mastery or historical significance. MAP needed an installation that converts passive observing into active, prolonged visual exploration while maintaining museum-grade presentation on ultra-large displays.',
      'From an engineering perspective, the system faced critical constraints: puzzles scrambled at random have a 50% chance of being mathematically unsolvable; public visitors could not be permitted to connect phones via physical cables or unverified networks; and the software had to run seamlessly across heterogeneous screen sizes (55" to 90") and orientations (landscape and portrait) without asset distortion or frame drops.'
    ],

    responsibilities: [
      'Architected and implemented the entire touchscreen puzzle client application in Unity (URP) and C#.',
      'Engineered a mathematically validated tile shuffling algorithm that guarantees 100% inversion parity solvability.',
      'Designed a zero-allocation GPU texture UV remapping shader to slice high-resolution 4K/8K paintings into tiles without memory spikes or seams.',
      'Developed an interactive multi-touch crop canvas supporting simultaneous two-finger pinch-to-zoom, pan momentum, and 90-degree rotation.',
      'Built a frictionless smartphone upload bridge using temporary QR code session pairing and an ephemeral local HTTP transfer pipeline.',
      'Created an adaptive responsive UI layout engine accommodating 16:9 landscape and 9:16 portrait kiosk enclosures up to 90 inches.',
      'Implemented local leaderboard tracking, high-score persistence, and unattended kiosk watchdog routines with automatic idle resets.'
    ],

    architecture: {
      paragraphs: [
        'The application utilizes a modular component architecture separating artwork catalog indexing, gesture transformation, puzzle mathematics, and rendering. When an artwork is selected or uploaded, it passes into an image processing pipeline that normalizes aspect ratios and computes affine transformation matrices for user crops.',
        'Rather than generating multiple sub-textures on the CPU, each puzzle tile references the single source texture in GPU memory via dynamic UV offsets. The sliding tile engine tracks grid coordinates in an N × N state matrix, validating Manhattan adjacency and moving tiles with smooth spring-damper interpolation.'
      ],
      layers: [
        ['Kiosk Shell & Attract', 'Full-screen kiosk mode, idle attract screensaver, auto-reset timeout, hidden staff settings'],
        ['Collection & Search Engine', 'Metadata indexing by artist, department, date, origin; real-time search filtering'],
        ['Mobile QR Ingestion Bridge', 'Session-keyed QR generation, ephemeral smartphone upload page, secure memory-only ingestion'],
        ['Multi-Touch Crop Engine', 'Pinch-to-zoom, pan, 90° rotation, homography mapping, aspect-ratio constraint clamping'],
        ['Sliding Puzzle Mathematics', 'Inversion parity verification, guaranteed solvability, Manhattan distance heuristics'],
        ['GPU UV Tile Slicer', 'Instanced quad rendering, dynamic UV offset mapping, high-res texture streaming'],
        ['High Score & Analytics', 'Local SQLite leaderboard per artwork, completion time benchmarking, session telemetry']
      ]
    },

    challenges: [
      {
        challenge: 'Preventing unsolvable sliding puzzle permutations from frustrating gallery visitors.',
        solution: 'Implemented an inversion parity check algorithm on scrambled states. For an N-puzzle, solvability depends strictly on permutation inversions combined with blank tile row position. Any invalid permutation is either adjusted or generated via valid backward random walks from the solved state, ensuring 100% solvability.'
      },
      {
        challenge: 'Slicing heavy 4K/8K archival museum images into dynamic tiles in real time without CPU lag or GC spikes.',
        solution: 'Avoided CPU texture blitting entirely. Developed a custom shader that maps each tile mesh quad directly to UV regions of the master texture in VRAM, eliminating runtime memory allocations and maintaining a steady 60 FPS.'
      },
      {
        challenge: 'Allowing visitors to upload personal smartphone photos without security vulnerabilities or complex Wi-Fi setups.',
        solution: 'Created an ephemeral QR code pairing system. Visitors scan a unique QR code on the kiosk screen, opening a lightweight web upload page that transmits the image over a secured local socket directly to runtime memory with strict filetype and dimension sanitization.'
      },
      {
        challenge: 'Supporting diverse screen formats up to 90 inches in both landscape and portrait gallery installations.',
        solution: 'Built an adaptive UI architecture using anchor-proportional layouts and minimum 48mm touch-target constraints, ensuring tiles remain easy to reach and manipulate for both children and adults regardless of kiosk enclosure.'
      }
    ],

    features: [
      'Comprehensive collection browser with filtering by artist, department, period, and place of origin',
      'Ephemeral mobile upload bridge via QR code letting visitors puzzle their own photos',
      'Intuitive multi-touch gesture canvas: pinch-to-zoom, pan, rotate, and custom crop',
      'Multiple difficulty levels (3x3, 4x4, 5x5) with adjustable tile counts and timer challenge',
      'Mathematically verified 100% solvable puzzle shuffling with inversion parity checks',
      'Instant "Preview" overlay enabling quick peeks at the original master artwork',
      'Artwork-specific high-score leaderboards tracking fastest completion times',
      'Dual orientation support (portrait and landscape) optimized for 55" to 90" touch displays',
      'Automated kiosk resilience: unattended idle timeout, attract loop, and hidden admin controls'
    ],

    stack: [
      ['Platform', 'In-Gallery Touchscreen Kiosks (55" to 90", Portrait & Landscape)'],
      ['Engine & Language', 'Unity (URP), C#'],
      ['Algorithms', 'Parity-Checked Sliding Tile Generator, Affine UV Homography'],
      ['Networking & Bridge', 'Ephemeral Web Upload Bridge, QR Code Session Pairing'],
      ['UI & Graphics', 'Custom Multi-Touch Gesture Recognizer, Instanced Quad UV Shaders'],
      ['Persistence', 'Local SQLite Leaderboard & Performance Telemetry']
    ],

    achievements: [
      'Successfully deployed on ultra-large touch displays at the Museum of Art & Photography (MAP), Bengaluru.',
      'Significantly extended visitor dwell time with fine art, transforming average 10-second glances into multi-minute collaborative sessions.',
      '100% solvability guarantee eliminated visitor frustration and abandoned sessions.',
      'Smartphone QR upload feature became a major hit for families and school tour groups.'
    ],

    process: [
      ['Curatorial & UX research', 'Studied visitor dwell patterns and established artwork selection criteria with MAP curators'],
      ['Math & algorithm design', 'Developed and unit-tested inversion parity validation to guarantee solvable shuffles'],
      ['Touch & gesture engine', 'Iterated multi-touch zoom/pan/crop controls calibrated for massive 90-inch touchscreens'],
      ['Mobile upload bridge', 'Engineered frictionless QR upload mechanism with robust memory security safeguards'],
      ['On-site deployment', 'Calibrated touch responses, visual fidelity, and multi-orientation kiosk frames in Bengaluru']
    ],

    lessons: [
      'Gamifying fine art observation dramatically increases attention to subtle compositional details, proving interactive software can deepen rather than cheapen museum education.',
      'Hardware scale matters: interactions that feel intuitive on a tablet or mobile screen need distinct touch ergonomics and reachability considerations on 90-inch public touchscreens.'
    ],

    gallery: [
      { type: 'placeholder', label: 'Artwork collection browser and search interface', caption: 'Drop assets/img/projects/mappuzzle-01.jpg' },
      { type: 'placeholder', label: 'Multi-touch zoom, rotate and crop tool', caption: 'Drop assets/img/projects/mappuzzle-02.jpg' },
      { type: 'placeholder', label: 'Active sliding tile puzzle gameplay on 90-inch display', caption: 'Drop assets/img/projects/mappuzzle-03.jpg' },
      { type: 'placeholder', label: 'Mobile photo upload via QR code and leaderboard', caption: 'Drop assets/img/projects/mappuzzle-04.jpg' }
    ],

    links: [
      { label: 'Museum of Art & Photography (MAP) Bengaluru', url: 'https://map-india.org/' },
      { label: 'ViitorCloud Technologies', url: 'https://viitorcloud.com/' }
    ]
  },

  /* ---------------------------------------------------- 24 Tirthankaras R&D */
  tirthankaras: {
    title: '24 Tirthankaras',
    kicker: 'An Interactive Museum Journey · Exhibition R&D',
    year: '2023 — 2024',
    role: 'Interactive Systems Engineer & Creative Technologist — concept, map engine, parallax system, UI/UX',
    org: 'Independent R&D · Museum Exhibition Prototype',
    stackLine: 'Unity (URP) / WebGL · C# · Vector Map Engine · 4-Plane Parallax · JSON Data Pipeline · Offline Cache',
    hero: { type: 'placeholder', label: 'Hero shot — 24 Tirthankaras interactive map and meditative scene on kiosk display', caption: 'Drop assets/img/projects/tirthankaras-hero.jpg' },

    overview: [
      'Developed as an independent museum exhibition R&D prototype, this interactive touch-screen installation reimagines cultural heritage interpretation for visitors of all ages. Spanning the sacred geography and profound spiritual narratives of the 24 Jain Tirthankaras, the experience invites self-paced exploration through an interactive dual-state map of India and serene, multi-layered painted dioramas.',
      'Visitors toggle between Janma Bhumi (sacred birthplaces) and Moksha Bhumi (places of liberation / Nirvana), pinch-zooming into ancient pilgrimage sites to discover historical associations. Selecting any Tirthankara transitions into a tranquil, four-plane parallax scene depicting the Tirthankara in deep meditation beneath their sacred enlightenment tree, accompanied by their canonical symbol (lanchhana) and a rich biographical archive.'
    ],

    problem: [
      'Cultural heritage exhibits often rely on static wall text, printed chronologies, and stone reliefs that can feel intimidating or inaccessible to modern audiences, school groups, and casual museum visitors. Visitors frequently leave without grasping the interconnected geography of ancient sites or the distinctive iconography defining each historical figure.',
      'From an engineering standpoint, the installation needed to run smoothly on gallery tablets and kiosks with 100% offline reliability in thick-walled museum spaces, while remaining fully responsive and lightweight enough to run in any web browser without performance degradation or long loading barriers.'
    ],

    responsibilities: [
      'Conceptualized, architected, and engineered the complete interactive experience in Unity (URP) with dual deployment targets (Standalone Kiosk/Tablet and WebGL).',
      'Built an interactive geospatial vector map of India with dual-state pin filtering for Janma Bhumi and Moksha Bhumi.',
      'Designed a continuous vertical multi-plane parallax renderer featuring dynamic depth layers (flora, temple/tree/figure, mountains, and drifting atmospheric clouds).',
      'Developed a decoupled JSON data pipeline encapsulating canonical iconographic attributes (lanchhana symbols, parentage, sacred trees, traditional complexion, and historical narratives).',
      'Implemented touch gesture recognition including smooth pinch-to-zoom, pan momentum, and inertia-damped scene transitions.',
      'Engineered an offline-first asset streaming strategy ensuring zero network dependency on museum hardware with a compact memory footprint (~30 MB).'
    ],

    architecture: {
      paragraphs: [
        'The application is structured around a decoupled model-view-controller pattern optimized for high-performance touch devices. The geospatial map engine plots ancient pilgrimage coordinates onto an interactive vector projection, using proximity clustering and state filters to switch between birth and liberation contexts without redrawing geometry.',
        'The contemplative scene module coordinates an infinite vertical scroller using four virtualized camera depth planes. Rather than loading heavy 3D geometry, layers are composed of optimized 2D sprite atlases driven by custom depth-of-field shaders, producing an ethereal, handcrafted diorama effect while sustaining a locked 60 FPS on mobile processors.'
      ],
      layers: [
        ['Kiosk Shell & Timeout', 'Attract screen loop, inactivity session reset, multi-touch lock, cross-platform resolution scaling'],
        ['Geospatial Map Engine', 'Dual-state Janma/Moksha toggling, pinch-to-zoom/pan touch handler, dynamic site clustering'],
        ['Multi-Plane Parallax System', '4-depth virtualized diorama layers, inertia-damped vertical swiping, non-linear camera easing'],
        ['Iconography Archive Modal', 'Canonical attribute parser, genealogical sheets, sacred tree & symbol viewer, story reader'],
        ['JSON Content Pipeline', 'Normalized Tirthankara metadata schemas, localized text assets, asset hot-reloading'],
        ['Offline Cache & Runtime', 'Zero-dependency standalone tablet packaging, compressed WebP/ASTC texture streaming']
      ]
    },

    challenges: [
      {
        challenge: 'Displaying complex, overlapping sacred geography across 24 historical lineages without overwhelming the screen.',
        solution: 'Engineered a dual-state geospatial toggle between Janma Bhumi and Moksha Bhumi with dynamic pin clustering. Tapping any pilgrimage hub dynamically isolates connected Tirthankaras, turning a dense map into an intuitive discovery path.'
      },
      {
        challenge: 'Creating a reverent, contemplative transition between all 24 Tirthankaras that feels artistic rather than mechanical.',
        solution: 'Developed an inertia-damped multi-plane parallax engine. Foreground foliage, temple sanctums, sacred trees, rolling hills, and sky elements move at distinct depth rates with spring easing, giving the impression of walking through a living miniature painting.'
      },
      {
        challenge: 'Ensuring seamless cross-platform performance across low-power museum tablets and high-performance kiosks.',
        solution: 'Optimized memory and draw calls by using sprite atlasing, dynamic texture unloading, and lightweight unlit shaders, keeping peak memory under 150 MB and draw calls below 25 per frame.'
      },
      {
        challenge: 'Structuring accurate, respectful canonical iconographic data for educational integrity.',
        solution: 'Curated and schema-validated detailed records for all 24 Tirthankaras—incorporating heraldic lanchhanas, complexions, paternal/maternal names, sacred trees, and narrative deep-dives into structured JSON.'
      }
    ],

    features: [
      'Interactive map of India with instant one-tap toggle between Janma Bhumi (birthplaces) and Moksha Bhumi (liberation sites)',
      'Multi-touch map navigation with fluid pinch-to-zoom, pan inertia, and interactive sacred site pins',
      '24 tranquil multi-plane parallax diorama scenes with vertical swipe transitions and atmospheric depth',
      'Faithfully rendered canonical iconography: sacred trees (Kevala Vriksha), temple settings, and pedestal symbols (lanchhanas)',
      'Comprehensive archival book modal cataloging parents, complexions, birthplaces, nirvana sites, and life stories',
      'Complete offline capability on museum tablets and kiosk screens with zero internet dependency',
      'Cross-platform responsive design running on in-gallery hardware, mobile devices, and desktop web browsers',
      'Gentle ambient soundscape and unattended idle screensaver attract loop'
    ],

    stack: [
      ['Platform', 'In-Gallery Tablets, Touchscreen Kiosks, Web & Mobile (Cross-Platform)'],
      ['Engine & Language', 'Unity (URP) / WebGL, C#'],
      ['Rendering & FX', '4-Plane Parallax Scene System, Custom Depth-of-Field Shaders'],
      ['Geospatial', 'Interactive Vector Map Engine, Dynamic Pin Clustering'],
      ['Data Architecture', 'Schema-Validated JSON Manifest, Pre-baked Sprite Atlases'],
      ['Storage & Runtime', 'Offline Local Storage Cache, Standalone Tablet Shell']
    ],

    achievements: [
      'Developed a fully functional, highly praised exhibition prototype demonstrating modern digital storytelling for ancient cultural heritage.',
      'Dual-state map and parallax mechanics dramatically improved engagement and comprehension during R&D testing sessions.',
      'Achieved a lightweight ~30 MB total build footprint running at a locked 60 FPS across both low-cost tablets and web browsers.',
      'Created an enduring, reusable architectural framework for sacred geography and cultural heritage museum kiosks.'
    ],

    process: [
      ['Iconographic & archival research', 'Researched canonical Jain texts to compile comprehensive genealogical and iconographic manifests'],
      ['Map & coordinate design', 'Mapped ancient historical pilgrimage sites to modern geospatial coordinates with dual-state filtering'],
      ['Parallax prototyping', 'Iterated multi-plane diorama depths, vertical gesture physics, and atmospheric motion curves'],
      ['Archive modal & UI styling', 'Designed an elegant, distraction-free reading experience inspired by classical manuscript leaves'],
      ['Cross-platform optimization', 'Profiled draw calls and asset compression to ensure zero-lag offline tablet and web deployment']
    ],

    lessons: [
      'Sacred and philosophical art requires quiet, reverent UI pacing—excessive gamification or frantic animations clash with contemplative subjects.',
      'Geographical anchors make ancient history tangible: linking spiritual biographies to real physical locations across India helps visitors connect with stories on a personal level.'
    ],

    gallery: [
      { type: 'placeholder', label: 'Interactive map of India — Janma Bhumi and Moksha Bhumi sacred site exploration', caption: 'Drop assets/img/projects/tirthankaras-01.jpg' },
      { type: 'placeholder', label: 'Meditative parallax diorama scene under sacred enlightenment tree', caption: 'Drop assets/img/projects/tirthankaras-02.jpg' },
      { type: 'placeholder', label: 'Vertical multi-plane scene transition between Tirthankaras', caption: 'Drop assets/img/projects/tirthankaras-03.jpg' },
      { type: 'placeholder', label: 'Iconography archive book modal with canonical attributes and biography', caption: 'Drop assets/img/projects/tirthankaras-04.jpg' }
    ],

    links: [
      { label: 'Exhibition Prototype & Research Notes', url: '#work' }
    ]
  },

  /* ------------------------------------------------------------------ Cuenect */
  cuenect: {
    title: 'Cuenect',
    kicker: 'Interactive 3D Product Showcase & Spatial Reality System',
    year: '2022 — 2023',
    role: 'Lead Interactive Systems Engineer — distributed multi-app architecture, 3D runtime, Sony Spatial Reality SDK',
    org: 'ViitorCloud Technologies · Cuenect',
    stackLine: 'Unity (URP) · C# · Sony Spatial Reality Display · Local WebSocket/TCP · Android Remote · glTF Ingestion',
    hero: { type: 'placeholder', label: 'Hero shot — Cuenect 3D showcase running on Sony Spatial Reality Display and large screen with phone remote', caption: 'Drop assets/img/projects/cuenect-hero.jpg' },

    overview: [
      'Built for Cuenect at ViitorCloud Technologies, this interactive product showcase system transforms commercial exhibitions, flagship corporate showrooms, and luxury retail activations into immersive 3D presentation environments. The platform allows businesses to showcase industrial, architectural, and consumer products as interactive 3D models, 4K videos, and high-resolution media on massive screens and on Sony’s glasses-free Spatial Reality Display.',
      'The system operates through an integrated, three-tiered application ecosystem working over an isolated local network without requiring internet connectivity: Cuenect Hub (the organizer’s content management and playlist control center), Cuenect Experience (the high-performance display client rendering real-time 3D models and autostereoscopic holograms), and Cuenect Stream (a native Android companion remote allowing presenters to rotate, zoom, explode, and switch content straight from their smartphone via QR code pairing).'
    ],

    problem: [
      'Exhibitors at trade shows and retail events struggle with physical product limitations: large industrial machinery, heavy equipment, or luxury goods cannot always be shipped to booth floors, while flat video reels or printed brochures fail to capture consumer attention. Furthermore, exhibition convention centers are notorious for saturated or non-existent Wi-Fi networks, making cloud-dependent digital signage prone to disastrous public crashes.',
      'From an engineering standpoint, Cuenect required strict guarantees: real-time touch interaction on the presenter’s phone had to translate into instantaneous 60 FPS model transformations on the main screen with imperceptible latency; the display runtime had to interface with Sony’s cutting-edge autostereoscopic eye-sensing hardware; and the entire ecosystem had to operate flawlessly on an isolated offline network with zero cloud dependencies.'
    ],

    responsibilities: [
      'Architected and implemented the distributed three-application ecosystem (Hub, Experience, Stream) in Unity (URP) and C#.',
      'Integrated the Sony Spatial Reality Display (SRD) SDK, engineering real-time eye-sensing facial tracking pipelines that dynamically adapt stereoscopic camera view frustums for glasses-free 3D.',
      'Engineered a low-latency, bi-directional binary WebSocket/TCP local networking protocol achieving sub-12ms glass-to-glass touch telemetry between Android phone and main display.',
      'Developed the native Android companion remote app (Stream) featuring virtual trackball orbit controllers, smooth pinch-to-zoom, exploded view scrubbers, and instant QR code network pairing.',
      'Created an automated 3D model ingestion pipeline in Cuenect Hub supporting runtime glTF, FBX, and OBJ import with automatic pivot centering, normal recalculation, and PBR material normalization.',
      'Implemented offline zero-configuration network discovery via local mDNS and SSDP, enabling instant booth setup without manual IP entry.'
    ],

    architecture: {
      paragraphs: [
        'Cuenect is architected as an isolated local-area distributed network. Cuenect Experience serves as the presentation node and local communication broker. At session start, it displays a dynamic QR code containing local IP parameters and an ephemeral session key. When the presenter scans the code with the Cuenect Stream Android app, a bi-directional local socket handshake is established without traversing the public internet.',
        'Touch interactions on the mobile remote are converted into delta rotation quaternions, translation vectors, and explode-state floats, packed into binary payloads, and streamed at 60 Hz to Experience. On the display node, a dual-pipeline camera system supports both traditional orthographic/perspective 2D screens and Sony’s autostereoscopic Spatial Reality Display, where high-speed eye-tracking sensors continuously update dual-frustum micro-lens projections in real time.'
      ],
      layers: [
        ['Spatial Reality Display Engine', 'Sony SR SDK integration, 60 FPS face-tracking eye sensor, real-time parallax view frustum'],
        ['Display Runtime (Experience)', 'Unity URP 3D viewport, turntable orbit, exploded view animator, 4K media player'],
        ['Mobile Remote (Stream)', 'Android native touch listener, virtual trackball, playlist controller, QR scanner'],
        ['Low-Latency Local Broker', 'High-frequency WebSocket/TCP server, binary telemetry packets, dead-reckoning sync'],
        ['Content Hub & CMS (Hub)', 'glTF/FBX 3D runtime parser, PBR material normalizer, playlist staging, local asset store'],
        ['Offline Network Discovery', 'Zero-conf mDNS/SSDP broadcaster, local network fallback, automatic heartbeat reconnect']
      ]
    },

    challenges: [
      {
        challenge: 'Eliminating input lag between the presenter’s smartphone gestures and the 3D model on a 90-inch exhibition screen.',
        solution: 'Replaced high-overhead JSON socket messages with a compact binary telemetry protocol over a dedicated local WebSocket connection. Combined with client-side touch delta smoothing and spring interpolation on the display client, glass-to-glass latency dropped below 12ms.'
      },
      {
        challenge: 'Rendering true glasses-free 3D on Sony Spatial Reality Displays without stereoscopic shearing or visual discomfort.',
        solution: 'Coupled Sony’s micro-optical lens camera tracking with Unity URP shaders, recalculating dual-eye projection matrices each frame. Calibrated clipping planes and depth-of-field budgets to keep virtual 3D models firmly grounded within the display’s optimal holographic viewing volume.'
      },
      {
        challenge: 'Guaranteeing 100% booth reliability in convention centers where public internet is completely blocked or unreliable.',
        solution: 'Built an entirely offline local networking layer. Cuenect Hub, Experience, and Stream communicate exclusively over local Wi-Fi or ad-hoc routers using local IP dynamic discovery, guaranteeing uninterrupted multi-day trade show operation with zero external internet pings.'
      },
      {
        challenge: 'Normalizing disparate client 3D CAD models (scale, orientation, materials) uploaded on-site by non-technical staff.',
        solution: 'Engineered automated runtime mesh validation in Cuenect Hub. The importer automatically centers geometry bounding boxes, aligns coordinate axes, scales models to standardized presentation bounding spheres, and applies calibrated PBR metallic-roughness materials.'
      }
    ],

    features: [
      'Glasses-free holographic 3D presentation support on Sony Spatial Reality Display with real-time eye tracking',
      'Ultra-large display presentation client for standard 4K/8K commercial showroom video walls and touchscreens',
      'Distributed tri-app architecture: Cuenect Hub (CMS), Cuenect Experience (Display), Cuenect Stream (Mobile Remote)',
      'Instant smartphone remote pairing via on-screen dynamic QR code scan over local Wi-Fi',
      'Real-time presenter remote control: 360° orbit rotation, fluid zoom, exploded parts view, and material toggles',
      '100% offline operation with zero internet dependency, eliminating booth Wi-Fi failure risks',
      'Automated 3D model ingestion supporting glTF, GLB, FBX, and OBJ with runtime PBR material normalization',
      'Multi-format playlist manager supporting 3D models, 4K video reels, and high-resolution promotional imagery',
      'Automatic local network discovery via mDNS with instant reconnect resilience'
    ],

    stack: [
      ['Platform', 'Ultra-Large Displays, Sony Spatial Reality Display (ELF-SR1/SR2), Android'],
      ['Engine & Language', 'Unity (URP), C#, Java'],
      ['Spatial Hardware', 'Sony Spatial Reality SDK, Eye-Sensing Light Field Display'],
      ['Networking', 'Local WebSocket / TCP Binary Protocol, mDNS Zero-Config Discovery'],
      ['3D & Formats', 'Runtime glTF/GLB & FBX Loader, PBR Material Shaders, 4K Video Streaming'],
      ['Architecture', 'Distributed Tri-App Ecosystem (Hub, Experience, Stream), Offline Local Cache']
    ],

    achievements: [
      'Successfully deployed across major commercial trade shows, automotive exhibitions, and corporate demonstration suites.',
      'Achieved sub-12ms touch-to-screen latency, giving presenters a tactile, instantaneous feel when manipulating 3D models from their phone.',
      'Pioneered early enterprise integration of Sony Spatial Reality Displays, creating a show-stopping glasses-free 3D booth draw.',
      'Delivered 100% uptime across multi-day exhibitions with zero reliance on convention hall internet connections.'
    ],

    process: [
      ['Ecosystem & UX architecture', 'Defined the tri-app separation of concerns across Hub organizer, Experience display, and Stream remote'],
      ['Spatial Reality R&D', 'Calibrated Sony SR SDK eye-tracking matrices and stereoscopic viewing volumes in Unity URP'],
      ['Protocol & socket engineering', 'Built high-throughput, low-latency binary telemetry networking between Android and Unity'],
      ['Asset pipeline automation', 'Implemented automated mesh analysis, pivot centering, and PBR shader assignment for imported 3D models'],
      ['Exhibition deployment', 'Stress-tested multi-day offline runtime resilience, thermal performance, and local Wi-Fi reconnect protocols']
    ],

    lessons: [
      'In live exhibition environments, network independence is non-negotiable: designing for offline-first local communication ensures absolute presenter confidence regardless of venue infrastructure.',
      'Novel hardware like glasses-free 3D displays requires rigorous spatial calibration—maintaining correct visual scale within the holographic viewing sweet-spot makes the difference between visual awe and eye fatigue.'
    ],

    gallery: [
      { type: 'placeholder', label: 'Cuenect Experience running on large display with interactive 3D model inspection', caption: 'Drop assets/img/projects/cuenect-01.jpg' },
      { type: 'placeholder', label: 'Sony Spatial Reality Display showing glasses-free holographic 3D product view', caption: 'Drop assets/img/projects/cuenect-02.jpg' },
      { type: 'placeholder', label: 'Cuenect Stream Android companion remote with virtual orbit trackball', caption: 'Drop assets/img/projects/cuenect-03.jpg' },
      { type: 'placeholder', label: 'Cuenect Hub playlist orchestrator and 3D asset ingestion interface', caption: 'Drop assets/img/projects/cuenect-04.jpg' }
    ],

    links: [
      { label: 'ViitorCloud Technologies', url: 'https://viitorcloud.com/' }
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
