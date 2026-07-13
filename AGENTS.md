# fable-farewell — agent guide

An unofficial, single-page static countdown site marking the moment Claude
Fable 5 leaves Claude subscription plans. Get the facts straight: Fable 5 is
**not retired or deprecated** — after July 19, 2026 it moves from Claude
subscriptions (Pro/Max/Team/select Enterprise) to usage-credit billing, it
remains fully available on the Claude API throughout, and this is stated to
be temporary, with Anthropic aiming to restore it to subscriptions. The
cutover was originally set for July 7, 2026; Anthropic has since extended
included access twice — first to July 12, 2026, then again to July 19, 2026.
The cutover time is now official: July 19, 2026 at 11:59:59 PM Pacific Time,
per Anthropic's support article.

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
