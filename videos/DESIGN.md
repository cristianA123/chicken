## Style Prompt
Swiss Pulse adapted for Latin American agri-SaaS. Precise, data-driven, but with warmth from
the brand green and amber palette. Videos feel like a high-end fintech dashboard — clean dark
backgrounds, large bold numbers that count up, fast confident entrances. Nothing floats or drifts.
Content targets non-technical egg farmers who will be impressed by seeing their granja managed
with the same polish as a bank app.

## Colors
- `#0d1f16` — background (deep forest-green black)
- `#f8fafc` — foreground (near-white, warm-tinted)
- `#16a34a` — primary accent (brand green)
- `#f59e0b` — secondary accent (egg amber)
- `#1e3a2e` — surface (elevated card / scene layer)
- `#94a3b8` — muted (labels, secondary text)

## Typography
- Headlines: Plus Jakarta Sans, weight 900. 80–140px. No gradient fill.
- Sub-headlines: Plus Jakarta Sans, weight 700. 40–60px.
- Body / labels: Plus Jakarta Sans, weight 500. 28–36px.
- Data numbers: Plus Jakarta Sans, 900, `font-variant-numeric: tabular-nums`.

## Motion
- Entrances: 0.35–0.55s, `expo.out` for headlines, `power3.out` for data, `power2.out` for labels.
- Stagger between siblings: 0.08s.
- Numbers count up from 0 using GSAP `innerText` counter.
- Background always has a slow-breathing radial glow (scale 1.0 → 1.05 → 1.0, 4s, `sine.inOut`, repeat).
- Everything snaps — no floaty, no elastic on text.

## Transitions
- Primary: vertical push (upward) — 0.45s, `power3.inOut`
- Accent (final CTA): blur crossfade — 0.5s, `sine.inOut`

## What NOT to Do
- No gradient text (`background-clip: text`)
- No cyan, purple, or neon accents — stick to green + amber only
- No slow (>0.7s) entrance animations
- No empty frames — always have background glow active
- No centered layout on every scene — vary alignment (left, center, left, center pattern)
