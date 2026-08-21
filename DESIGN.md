# DESIGN.md — Joieria Comas · "El Moviment" (dark horological)

Current design. A warm-light CELESTIQUE redesign was tried and reverted at the user's
request; this dark world is the active one. Mode: **Persuade** (drive a visit/call).

## World
A horological-atelier scroll narrative. Dark near-black "case" chapters (hero, transition)
let metal and stone glow; warm ivory chapters (heritage, workshop, catalogue) read like a
jeweller's editorial. Brass-gold is the single metal. Bodoni Moda Didone display + Jost UI.

## Hero — scroll-scrubbed watch
`assets/video/hero-reloj.mp4` (a watch-assembly clip, the Hublot ad trimmed to 11.3s to drop
its branding) plays **scrubbed by scroll**: scroll position → `video.currentTime` over a
420vh pin, with a "muntatge complet" counter. If the video is missing/fails, the hero falls
back to a **code-built SVG watch that assembles part by part** on the same scroll. Requires
HTTP Range on the host (`server.mjs` provides it). The hero→1862 **seam** is linked: the hero
lifts and dims while the ivory chapter rises over it on a large top radius + gold hairline.

## Color tokens (`:root`)
`--ink #0c0d10` / `--ink-2 #14161b` / `--ink-3 #1c1f26`; `--ivory #f3ede2` / `--ivory-2 #ece4d5`
/ `--paper-line #d8cdb8`; `--gold #c39b53` / `--gold-soft #d8b876` / `--gold-deep #9c7936`;
ink type `--graphite #24211c` / `--graphite-2 #5c554a`; on-dark `--bone #efe9dd` / `--bone-2 #a49c8c`.
Two grounds (ink / ivory) alternated for scroll rhythm; gold accent.

## Type
Display **Bodoni Moda** (Didone — headings, wordmark, numerals). UI/body **Jost** (300–400).

## Sections
Hero → **1862** (giant outlined numerals, family story) → **"El taller"** transition (3D
gold-framed plates converge) → **workshop** (Roman-numeral bench ledger) → **col·leccions**
(bento grid + Pandora / Daniel Wellington blocks) → **botigues** (two shop cards + blurred
parallax shop-interior backdrop, exact hours, Vidreres/Salt) → footer.

## Components
`.prod` bento tiles (real photos; woven "Foto" placeholder when a slot is empty via `is-empty`),
`.bench` workshop ledger, split `.brand` blocks, dark `.shop` cards, nav (transparent → ivory
glass on scroll). Auth modal (Google/Apple/email — **visual demo**) + Catalan concierge chatbot
(`css/ui.css`, `js/ui.js`), both dark-themed.

## Motion (GSAP + ScrollTrigger, CDN)
Hero video scrub / SVG assembly; 1862 parallax + count-up; converging "El taller" plates;
bench numeral pops; brand clip-reveals; product + shop stagger; shop-backdrop parallax. All
gated by `prefers-reduced-motion` (IntersectionObserver reveal fallback).

## Assets & recovery
Real photos in `assets/products/` + `assets/img/`. ffmpeg available at
`node_modules/ffmpeg-static/ffmpeg.exe`. The project has **no git history/backup** — restore
by reconstructing from the conversation if needed.

## Run
`node server.mjs` → http://localhost:4321 (Range-enabled; needed for the video scrub).
