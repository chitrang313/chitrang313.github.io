/**
 * Project grid config + Cloudinary media.
 *
 * Long-form case-study text lives in js/data.js (window.CASE_STUDIES) — keyed by the
 * same `key` used here. This file only holds what the grid card needs and the media.
 *
 * MEDIA FORMAT
 *   [kind, version, publicId, caption?]   kind: 'v' = video, 'i' = image
 *   Copy version + public ID from the Cloudinary console (cloud: dpl3xzmwx).
 *   The first video (or first image when there is no video) becomes the card cover
 *   and the hero of the case-study modal.
 *
 * Projects with an empty `media` array show a designed placeholder cover.
 */
(function () {
  'use strict';

  const CLOUD = 'https://res.cloudinary.com/dpl3xzmwx';

  /**
   * Cloudinary delivery URL builders.
   * Explicit .jpg/.mp4 suffix: some public IDs contain dots, and an extension stops
   * Cloudinary from reading part of the ID as a format. f_auto still negotiates AVIF/WebP.
   */
  const cdn = {
    image: (id, v, w) => `${CLOUD}/image/upload/f_auto,q_auto,c_limit,w_${w}/v${v}/${encodeURIComponent(id)}.jpg`,
    poster: (id, v, w) => `${CLOUD}/video/upload/so_1,f_auto,q_auto,c_limit,w_${w}/v${v}/${encodeURIComponent(id)}.jpg`,
    video: (id, v, w) => `${CLOUD}/video/upload/q_auto,vc_auto,c_limit,w_${w}/v${v}/${encodeURIComponent(id)}.mp4`,
    /* Untransformed original: second <source>, used only if the transcode above fails
       (Cloudinary returns 423 while a very large video cannot be processed on the fly). */
    videoOriginal: (id, v) => `${CLOUD}/video/upload/v${v}/${encodeURIComponent(id)}.mp4`
  };

  /** Filter bar, in display order. */
  const filters = [
    { key: 'all', label: 'All work' },
    { key: 'museum', label: 'Museum installations' },
    { key: 'lab', label: 'Interactive & IoT' },
    { key: 'product', label: 'Products' },
    { key: 'game', label: 'Games' }
  ];

  /* Card text below is carried over unchanged from the previous site's project cards. */
  const work = [
    /* ------------------------------------------------ CSMVS Museum, Mumbai */
    {
      key: 'traderoute', group: 'museum', client: 'CSMVS Museum', type: 'Touchscreen Kiosk',
      desc: 'An interactive touchscreen kiosk built for CSMVS Museum. Visitors explore four ancient trade routes through a zoomable map and real artefacts, in English and Marathi.',
      chips: ['C#', 'Unity 6 · URP', 'DOTween', 'REST backend'],
      media: [
        ['v', '1794033269', 'Trade_Route_Videos_wenzqf_czqshl'],
        ['i', '1794032512', '00_ddor3i_fbqxic'],
        ['i', '1794032512', '01_qvpzfw_tizxtg'],
        ['i', '1794032513', '02_ufyqil_upqsyh'],
        ['i', '1794032556', '03_a97fll_duaatr'],
        ['i', '1794033245', '04_weoenm_msrdzw']
      ]
    },
    {
      key: 'tradewall', group: 'museum', client: 'CSMVS Museum', type: 'Dual-Screen Kiosk',
      desc: 'A bilingual, two-screen interactive kiosk built for CSMVS, Mumbai. Visitors browse an on-screen book of ancient trade materials; tapping one reveals its history and animates its route across a large wall display.',
      chips: ['C#', 'Unity', 'DOTween', 'Dual-screen sync'],
      media: [
        ['v', '1794033260', 'Interactive_Trade_Wall_Video_cf4fjk_kmyjbb'],
        ['i', '1794032511', '00_ip77el_h7hovl'],
        ['i', '1794032512', '01_jbzovp_tcxxp8'],
        ['i', '1794032511', '02_cac4ci_wpxbno'],
        ['i', '1794032512', '03_yky6ql_gxzhpy'],
        ['i', '1794032512', 'KioskScreenScene_1080p_04.11.2026_11-21-37_nrxhbl'],
        ['i', '1794032512', 'KioskScreenScene_1080p_04.11.2026_11-23-12_u0mnvt']
      ]
    },
    {
      key: 'rosetta', group: 'museum', client: 'CSMVS Museum', type: 'Touchscreen Kiosk',
      desc: 'An interactive touchscreen kiosk for the Rosetta Stone exhibit. Visitors explore its story, discover who cracked its code, and practice drawing ancient hieroglyphs in English or Marathi.',
      chips: ['C#', 'Unity', 'GPU Drawing Eval'],
      media: [
        ['v', '1794033278', 'Rosetta-stone-video_ddc3wt'],
        ['i', '1794032509', 'screenshot_1920x1080_2026-11-04_11-03-24_rws3tr'],
        ['i', '1794032507', 'screenshot_1920x1080_2026-11-04_11-03-45_keddjp'],
        ['i', '1794032506', 'screenshot_1920x1080_2026-11-04_11-03-50_rhhmbo'],
        ['i', '1794032506', 'screenshot_1920x1080_2026-11-04_11-03-53_ueoqa6'],
        ['i', '1794032507', 'screenshot_1920x1080_2026-11-04_11-03-55_kk4rm5'],
        ['i', '1794032507', 'screenshot_1920x1080_2026-11-04_11-04-05_ambfom'],
        ['i', '1794032508', 'screenshot_1920x1080_2026-11-04_11-04-06_j02zhg'],
        ['i', '1794032508', 'screenshot_1920x1080_2026-11-04_11-04-26_vbmui2'],
        ['i', '1794032507', 'screenshot_1920x1080_2026-11-04_11-04-31_r0ekjh'],
        ['i', '1794032507', 'screenshot_1920x1080_2026-11-04_11-04-34_hx9meu'],
        ['i', '1794032509', 'screenshot_1920x1080_2026-11-04_11-04-40_yetp89'],
        ['i', '1794032510', 'screenshot_1920x1080_2026-11-04_11-04-50_xncwsg'],
        ['i', '1794032510', 'screenshot_1920x1080_2026-11-04_11-05-10_qnvm92'],
        ['i', '1794032510', 'screenshot_1920x1080_2026-11-04_11-05-15_xqi6cr'],
        ['i', '1794032510', 'screenshot_1920x1080_2026-11-04_11-05-24_awhsxi'],
        ['i', '1794032511', 'screenshot_1920x1080_2026-11-04_11-05-33_nux5j3'],
        ['i', '1794032511', 'screenshot_1920x1080_2026-11-04_11-06-13_tpserb']
      ]
    },
    {
      key: 'motw', group: 'museum', client: 'CSMVS Museum', type: 'Mobile Museum Kiosk',
      desc: 'A travelling museum on a 4-wheel tempo bringing ancient Harappan trade history to rural villages across India via large touchscreens, zero-connectivity offline operation, and English/Marathi support.',
      chips: ['C#', 'Unity 6', 'Tauri', 'Offline cache'],
      media: [
        ['v', '1794033264', 'Museum_on_the_wheel_Video_nz3nzp_wgozjv'],
        ['i', '1794032509', '00_niialq_ylfna8'],
        ['i', '1794032510', '01_xgvpzv_ylgq59'],
        ['i', '1794032509', '02_ieiyid_ybxtil'],
        ['i', '1794032509', '03_lfmfhi_g11ucy']
      ]
    },
    {
      key: 'feedback', group: 'museum', client: 'CSMVS Museum', type: 'Touchscreen Kiosk',
      desc: 'A trilingual touchscreen feedback kiosk for CSMVS Museum. Visitors share exhibition impressions in English, Hindi, or Marathi with custom on-screen keyboards and offline sync.',
      chips: ['C#', 'Unity', 'Trilingual', 'Offline queue'],
      media: [
        ['v', '1794033247', 'Feedback_App_Video_wxq4ge_rxi2zd'],
        ['i', '1794033245', '00_h1i8dk_pif7mx'],
        ['i', '1794033244', '01_htbcsy_nzejpb'],
        ['i', '1794033244', '02_vknmeg_ggrxoc']
      ]
    },

    /* ------------------------------------------------ Sikh History Museum */
    {
      key: 'dualgallery', group: 'museum', client: 'Sikh History Museum', type: 'Touchscreen Kiosk',
      desc: 'An interactive touch kiosk bringing the stories of Guru Nanak and the Ten Gurus to life through archival imagery, documentary video, TextMeshPro typography, and automatic offline caching.',
      chips: ['C#', 'Unity 6 (URP)', 'REST API', 'Offline cache'],
      media: [
        ['v', '1793434263', 'Dus_Guru_Galleries_Video_qu4eje'],
        ['i', '1793434257', '00_mfkzbb'],
        ['i', '1793434255', '01_apfmdd'],
        ['i', '1793434254', '02_qkzpzf'],
        ['i', '1793434256', '03_zdcfus'],
        ['i', '1793434253', '04_pyk4fr']
      ]
    },
    {
      key: 'sikhtimeline', group: 'museum', client: 'Sikh History Museum', type: 'Touchscreen Kiosk',
      desc: 'An interactive touchscreen kiosk exploring Sikh heritage from 1469 through three themed chapters, archival artwork, kinetic touch scrolling, and dynamic QR smartphone links.',
      chips: ['C#', 'Unity (URP)', 'JSON data', 'Dynamic QR'],
      media: [
        ['v', '1793434364', 'Sikh_History_Timeline_Video_ku4gks'],
        ['i', '1793434356', '00_swbxbf'],
        ['i', '1793434353', '01_vcxfnc'],
        ['i', '1793434355', '02_tkglmb'],
        ['i', '1793434354', '03_hrg69u'],
        ['i', '1793434351', '04_o3r4l2']
      ]
    },
    {
      key: 'goldentemple', group: 'museum', client: 'Sikh History Museum', type: 'Touchscreen Kiosk',
      desc: 'An interactive video wall kiosk letting museum visitors explore Golden Temple documentaries with scroll-snap touch browsing, remote branding/color theming, and a live information ticker.',
      chips: ['C#', 'Unity 6', 'REST (Auth)', 'Remote Theme'],
      media: [
        ['i', '1793434314', '00_keum7f'],
        ['i', '1793434312', '01_hofgav'],
        ['i', '1793434313', '02_lilloy']
      ]
    },

    /* ------------------------------------------------ MAP, Bengaluru */
    {
      key: 'mappuzzle', group: 'museum', client: 'MAP Bengaluru', type: 'Touchscreen Kiosk',
      desc: 'A touch-screen puzzle game for MAP Bengaluru. Visitors pick collection paintings or upload smartphone photos, crop custom details, and solve sliding tile puzzles on up to 90" screens.',
      chips: ['C#', 'Unity (URP)', 'Parity Solvable', 'QR Upload'],
      media: [
        ['v', '1793434191', 'MAP-Jigsaw-Puzzle-Video_oovp6r'],
        ['i', '1793434167', '00_vgwm57'],
        ['i', '1793434166', '01_unh54f'],
        ['i', '1793434168', '02_cluuuw'],
        ['i', '1793434168', '03_vd9v2e'],
        ['i', '1793434167', '04_ubrisv'],
        ['i', '1793434168', '05_py0wfr']
      ]
    },

    /* ------------------------------------------------ Products */
    {
      key: 'soreal', group: 'product', client: 'ViitorCloud', type: 'Real-time 3D platform',
      desc: 'A multi-user 3D property walkthrough used in live client engagements — synchronised sessions over unreliable networks, large scenes inside a mobile memory budget.',
      chips: ['C#', 'Real-time networking', 'REST APIs'],
      /* One folder per feature on Cloudinary, each with Windows + Android captures. */
      media: [
        ['v', '1793441207', 'Walkthrough_Android_qlci2r', 'Walkthrough · Android'],
        /* 99.5 MB original: Cloudinary answers 423 to on-the-fly transcodes, so the
           player falls back to the original file (see cdn.videoOriginal). */
        ['v', '1793441240', 'Walkthrough_Windows_upptvj', 'Walkthrough · Windows'],
        ['v', '1793441110', 'Shell_House_View_Windows_peaejw', 'Shell house view · Windows'],
        ['v', '1793440789', 'Shell_House_View_Android_qvohge', 'Shell house view · Android'],
        ['v', '1793441221', 'Windows_vvqguz', 'Furniture customisation · Windows'],
        ['v', '1793441082', 'Android_nnrqcz', 'Furniture customisation · Android'],
        ['v', '1793441157', 'Windows_2024-05-02_13-50-44_avjmi8', 'Theme customisation · Windows'],
        ['v', '1793441094', 'Android_2024-05-02-13-50-42_m6qamh', 'Theme customisation · Android'],
        ['v', '1793441079', 'Windows_2024-05-02_16-19-58_dts1kp', 'Theme customisation · Windows'],
        ['v', '1793440795', 'Android_2024-05-02-16-19-56_xlw9fj', 'Theme customisation · Android'],
        ['v', '1793441392', 'Day_Night_Windowns_hzhrti', 'Day & night · Windows'],
        ['v', '1793441382', 'DayNight_Android_p7rur8', 'Day & night · Android'],
        ['v', '1793441362', 'DayNight_Android_gva35d', 'Day & night · Android'],
        ['v', '1793441127', 'Lights_Turn_On_Off_Windows_wjxkhh', 'Lights on / off · Windows'],
        ['v', '1793440791', 'Lights_Turn_On_Off_Android_h2pyah', 'Lights on / off · Android'],
        ['v', '1793441099', 'Layout_Windows_nhnb6c', 'Layout · Windows'],
        ['v', '1793441096', 'Layout_v1_Windows_d0ywtx', 'Layout · Windows'],
        ['v', '1793440787', 'Layout_v1_Android_zjsatp', 'Layout · Android'],
        ['v', '1793441194', 'Dimension_Windows_njnjzu', 'Dimensions · Windows'],
        ['v', '1793441090', 'Dimension_Android_aerqi5', 'Dimensions · Android'],
        ['v', '1793441201', 'Bookmark_Windows_ed0uwy', 'Bookmarks · Windows'],
        ['v', '1793441084', 'Bookmark_Android_ijszg9', 'Bookmarks · Android'],
        ['v', '1793441102', '360DegImageCapture_Windows_2024-05-02_14-13-05_duxy5k', '360° image capture · Windows'],
        ['v', '1793441114', '360DegImageCapture_Android_cajtes', '360° image capture · Android'],
        ['v', '1793441202', '360capture2024-05-02-14-32-04_sojw5y', '360° image capture'],
        ['v', '1793441147', 'BACK_2024-05-02-14-32-04_zshs3k', '360° capture · back camera'],
        ['v', '1793441106', 'FRONT-05-02-14-13-03_ddtbjs', '360° capture · front camera']
      ]
    },
    {
      key: 'cuenect', group: 'product', client: 'Cuenect', type: 'Interactive 3D & Spatial Reality',
      desc: 'An offline interactive 3D showcase system for exhibitions and showrooms. Businesses present products as 3D models on large screens and Sony’s Spatial Reality Display, controlled by presenters from an Android remote.',
      chips: ['C#', 'Unity (URP)', 'Sony Spatial 3D', 'Offline Tri-App'],
      media: []
    },

    /* ------------------------------------------------ Interactive installations & IoT */
    {
      key: 'touchwall', group: 'lab', client: 'Interactive Installation', type: 'Invisible Touch Projection',
      desc: 'An interactive installation where touching a plain architectural wall plays bright, large-format story videos via laser projection and optical touch tracking, with zero hardware in sight.',
      chips: ['C#', 'Unity 6 (URP)', 'Optical Touch', 'UST Projection'],
      media: []
    },
    {
      key: 'treelight', group: 'lab', client: 'Physical Computing', type: 'Touch & IoT Installation',
      desc: 'An interactive physical installation where a touch on a screen lights up an actual tree. Visitors tap four color buttons to send climbing light strands and calming breathing glows up the branches, illuminating physical bulbs.',
      chips: ['C# · C++', 'WS2812B & Bulbs', 'Breathing Light', 'Local Wi-Fi'],
      media: []
    },
    {
      key: 'deedtree', group: 'lab', client: 'Interactive Installation', type: 'Tablet & 4K Wall',
      desc: 'An interactive installation pairing a tablet kiosk with a 4K living 3D tree display. Visitors pledge acts of kindness and swipe their leaf to grow on the communal tree, thanked personally by name.',
      chips: ['C#', 'Unity 6 (URP)', 'Local IPC', 'GPU Instancing'],
      media: []
    },
    {
      key: 'digitaltwin', group: 'lab', client: 'Digital Twin', type: 'Real Lights, Mirrored Live',
      desc: 'A hands-on digital twin demonstration: an industrial control panel with four physical light switches paired with an exact 3D virtual copy in Unity URP, mirroring switch flips and lighting live with sub-15ms latency.',
      chips: ['C#', 'Unity 6 (URP)', 'Real-Time Mirror', 'Telemetry (IoT)'],
      media: []
    },
    {
      key: 'tirthankaras', group: 'lab', client: 'R&D Prototype', type: 'Interactive Museum Journey',
      desc: 'An interactive touch-screen exhibition prototype exploring the 24 Jain Tirthankaras. Visitors navigate an interactive map of India (Janma vs Moksha Bhumi) and step into serene multi-plane parallax diorama scenes.',
      chips: ['C#', 'Unity (URP)', 'Vector Map', '4-Plane Parallax'],
      media: []
    },

    /* ------------------------------------------------ Games (earlier career) */
    {
      key: 'icc', group: 'game', client: 'nCore Games', type: 'Core systems & AI',
      desc: 'Batting, bowling and fielding mechanics plus an AI decision layer built from scratch with goal-oriented action planning — believable behaviour that still unit tests cleanly.',
      chips: ['C#', 'GOAP', 'Deterministic sim'],
      media: []
    },
    {
      key: 'ludo', group: 'game', client: 'Vasundhara Vision', type: 'Full-stack owner',
      desc: 'Online and offline modes, bot opponents, and transaction-facing error handling with graceful mid-session disconnect recovery.',
      chips: ['Node.js', 'Socket.IO', 'C#'],
      media: []
    },
    {
      key: 'cards', group: 'game', client: 'Vasundhara Vision', type: 'Architecture & delivery',
      desc: 'A data-driven rules engine with eight variants toggleable at runtime, AI bots and monetisation — no conditional-logic sprawl.',
      chips: ['C#', 'Data-driven rules', 'IAP · Ads'],
      media: []
    },
    {
      key: 'bus', group: 'game', client: 'Escrow Infotech', type: 'Solo developer',
      desc: 'Sky-road driving challenges with a level-authoring pipeline that let new modes ship from player feedback in days, not weeks.',
      chips: ['C#', 'Physics tuning', 'Android'],
      media: []
    },
    {
      key: 'arena', group: 'game', client: 'Escrow Infotech', type: 'Gameplay systems',
      desc: 'Ship controls, state-driven enemy AI, health and damage, plus a currency economy designed to resist exploitation.',
      chips: ['C#', 'State machines', 'IAP · Ads'],
      media: []
    }
  ];

  window.WORK = { cdn, filters, work };
})();
