# fable-farewell — agent guide

An unofficial, single-page static countdown site marking the end of Claude
Fable 5's universal included access on Claude plans. Get the facts straight:
Fable 5 is **not retired or deprecated** — the site counts down to July 19,
2026 at 11:59:59 PM Pacific Time, when the universal included-access period
ends. Beginning July 20, 2026, Fable 5 enters a split arrangement, per
Anthropic's @claudeai post of July 18, 2026: it stays included in Max and
Team Premium plans (at 50% of limits, no end date announced), while Pro and
Team Standard users move to usage-credit billing and receive a one-time $100
credit. It was never removed from the Claude API, and remains fully
available there throughout. Timeline: the cutover was originally set for
July 7, 2026, extended to July 12, 2026, then to July 19, 2026, followed by
the July 18, 2026 announcement of this split arrangement.

## Requirements

Node >= 22.

## Commands

- `npm install` — install dependencies.
- `npm run dev` — start the Astro dev server.
- `npm run build` — build the static site to `dist/`.
- `npm run preview` — serve the built `dist/` output locally.

## Architecture map

- `src/i18n/config.js` — `DEPARTURE_ISO` (the single UTC source of truth for
  the departure instant) plus `DEFAULT_LOCALE`, `LOCALES`, and `LOCALE_PATHS`.
- `src/i18n/ui.js` — the en/zh/ja text dictionaries (copy, facts, world-clock
  zone labels, etc.) keyed by locale.
- `src/layouts/Layout.astro` — page `<head>` (meta, hreflang tags, favicon)
  and the loop-proof locale auto-redirect script, which reads/writes the
  `fable-lang` localStorage key.
- `src/components/Farewell.astro` — the page body: hero, countdown, world
  clock, facts, footer, and the inline synchronous countdown script.
- `src/components/LangSwitcher.astro` — the Starlight-style native `<select>`
  language dropdown (with a `<noscript>` link fallback).
- `src/pages/index.astro`, `src/pages/zh/index.astro`, `src/pages/ja/index.astro`
  — thin per-locale wrappers that just pass a `locale` prop into `Layout` +
  `Farewell`.

## Invariants — do not break these

- `DEPARTURE_ISO` in `src/i18n/config.js` is the **one** UTC instant for the
  whole site. Never duplicate it elsewhere or hardcode a copy, and never do
  manual timezone-offset arithmetic — always let `Intl.DateTimeFormat` (with
  a `timeZone` option) do timezone conversion.
- The countdown must render synchronously via the inline `is:inline` script
  in `Farewell.astro` — no client-side frameworks, no hydration, no flash of
  placeholder digits.
- To add a locale: add one dictionary entry to `ui.js`, add its code to
  `LOCALES`/`LOCALE_PATHS` in `config.js`, and add one thin page under
  `src/pages/<code>/index.astro` following the existing pattern. The
  switcher and hreflang tags pick new locales up automatically — don't hand-list
  locales anywhere else.
- The localStorage key is `fable-lang`. The redirect script in `Layout.astro`
  and the `onchange` handler in `LangSwitcher.astro` must stay in sync on
  this key and its semantics (stored preference always wins; only the
  default locale probes `navigator.language`).
- No external CDN, webfont, or third-party script/network requests — this is
  a fully self-contained static page.
- Keep zh and ja copy factually identical to en (same claims, same facts) —
  translate, don't drift.

## Design conventions

- Ink background `#0b0d14`, amber accent `#e8b45a`.
- System serif stack for body text (Georgia/Iowan Old Style/Palatino
  fallbacks), plus dedicated CJK serif stacks for `html[lang="zh"]` and
  `html[lang="ja"]` — system fonts only, no webfont downloads.
- Countdown/numeric text uses tabular numerals (`font-variant-numeric:
  tabular-nums` / `'tnum'` feature) and stays in Latin digits across all
  locales.
- The starfield background is CSS-only (radial-gradient layers + keyframe
  twinkle) and must respect `prefers-reduced-motion: reduce`.
- Layout must stay usable down to 360px viewport width.
