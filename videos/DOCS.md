# Video Content — MiAgroGestión

## Setup rápido (hacer SIEMPRE antes de TTS)

```bash
# Activar el venv de TTS (Python 3.11 via uv)
source /Users/kambista/.local/share/hyperframes-tts/bin/activate

# Después ya funciona:
npx hyperframes tts script.txt --voice ef_dora --speed 1.0 --output narration.wav
npx hyperframes transcribe narration.wav
npx hyperframes render --output video.mp4
```

---

## Herramienta: HyperFrames

- Composiciones HTML → MP4
- Formato estándar: **1080×1920** (vertical, TikTok/Reels/Stories)
- Fuente soportada: **Poppins** (no usar Plus Jakarta Sans, no está en lista auto)
- GPU: hardware (WebGL) — renders rápidos ~10-20s por video corto

### Comandos clave
| Comando | Qué hace |
|---|---|
| `npx hyperframes lint` | Valida la composición antes de render |
| `npx hyperframes render --output X.mp4` | Renderiza |
| `npx hyperframes inspect` | Detecta overflow visual |
| `npx hyperframes tts script.txt --voice ef_dora` | Genera voz |
| `npx hyperframes transcribe narration.wav` | Timestamps por palabra |

---

## Voz (TTS)

- **Voz principal:** `ef_dora` — español latinoamericano, femenina, natural
- Speed `1.05` → marketing energético
- Speed `0.95` → demo/tutorial
- Speed `1.1` → CTA directo

---

## Design System (`DESIGN.md`)

- Fondo: `#0d1f16` (verde-negro)
- Acento primario: `#16a34a` (verde marca)
- Acento secundario: `#f59e0b` (ámbar huevo)
- Superficie cards: `#1e3a2e`
- Texto: `#f8fafc`
- Texto muted: `#94a3b8`
- Transición principal: **vertical push** (power3.inOut, 0.45s)
- Transición final: **blur crossfade** (sine.inOut, 0.5s)

---

## Videos creados — Tanda 1

| Archivo | Tipo | Duración | Descripción |
|---|---|---|---|
| `video-1-problema/video-1-problema.mp4` | Hook Problema→Solución | 18s | "¿Llevas tu granja en cuadernos?" → KPIs → CTA gratis |
| `video-2-demo/video-2-demo.mp4` | Demo del app | 22s | Dashboard real → 4 features → CTA celular |
| `video-3-cta/video-3-cta.mp4` | Oferta / CTA | 13s | 14 días gratis → $12/mes → social proof |

---

## Estructura de una composición nueva (plantilla mental)

```
videos/
└── video-N-nombre/
    ├── script.txt        ← texto plano del narrador
    ├── narration.wav     ← generado con hyperframes tts
    ├── transcript.json   ← generado con hyperframes transcribe
    └── index.html        ← composición HyperFrames
```

### Checklist antes de render
- [ ] `data-start="0"` en el div raíz
- [ ] Escenas 2+ tienen `opacity: 0`
- [ ] Cada elemento tiene entrada `gsap.from()`
- [ ] Sin `gsap.to()` en escenas intermedias (solo en la última)
- [ ] `tl.set('#sceneN', { visibility: 'hidden' }, T)` después de cada fade/blur
- [ ] `window.__timelines['id'] = tl`
- [ ] `npx hyperframes lint` → 0 errores

---

## Tipos de video disponibles y tiempo estimado

| Tipo | Tiempo de producción | Descripción |
|---|---|---|
| **Hook Problema** | ~20 min | Pregunta fuerte → dolor → solución → CTA |
| **Demo feature** | ~25 min | Mostrar 1 funcionalidad específica del app |
| **CTA / Oferta** | ~15 min | Precio + prueba gratis + URL |
| **Dato educativo** | ~20 min | Stat o concepto avícola con diseño infográfico |
| **Social proof** | ~20 min | Resultado de un cliente (números reales) |
| **Comparación** | ~25 min | Antes/después o vs Excel |

---

## Plan de contenido — 12 semanas

| Semana | Tipo | Tema / Gancho |
|---|---|---|
| 1 | Hook Problema | "¿Cuántos huevos rotos pierde tu granja al mes sin saberlo?" |
| 2 | Demo feature | "Así registro mi producción en 10 segundos" |
| 3 | Dato educativo | "Qué significa el % de postura y por qué importa" |
| 4 | CTA / Oferta | "Esta semana: 14 días gratis, sin tarjeta" |
| 5 | Hook Problema | "¿Sabes cuánto te cuesta 1 punto menos de postura?" |
| 6 | Demo feature | "Alertas automáticas: así funciona" |
| 7 | Social proof | "De Excel a MiAgroGestión — lo que cambió en 30 días" |
| 8 | Comparación | "Excel vs MiAgroGestión — diferencia real" |
| 9 | Dato educativo | "Conversión alimenticia: qué es y cómo mejorarla" |
| 10 | Hook Problema / Objeción | "¿Muy caro? Te muestro cuánto pierdes sin control" |
| 11 | Demo feature | "Reportes PDF para mostrarle a tu banco o socio" |
| 12 | CTA fuerte | "Último mes de precio de lanzamiento — entra ahora" |
