**English** | [简体中文](./README.zh.md) | [日本語](./README.ja.md)

# Farewell for now, Fable 5 ⏳

An unofficial, multilingual countdown to the end of Claude Fable 5's universal included access on Claude plans.

## What this is

This site counts down to the end of Fable 5's universal included access on Claude plans: July 19, 2026 at 11:59:59 PM Pacific Time. Fable 5 is **not retired or deprecated** — beginning July 20, 2026, it enters a new, split arrangement: it stays included in all Max and Team Premium plans (at 50% of limits, with no end date announced), while Pro and Team Standard users move to usage-credit billing and receive a one-time $100 credit, per Anthropic's @claudeai announcement of July 18, 2026. It remains fully available on the Claude API throughout, unaffected by any of this. The cutover was originally set for July 7, 2026, and had already been extended twice — first to July 12, 2026, then again to July 19, 2026 — before this split arrangement was announced. The countdown targets `2026-07-20T06:59:59Z` (July 19, 2026 at 11:59:59 PM US Pacific Time) — an official figure, per Anthropic's support article, not an estimate.

This is an unofficial, fan-made page and is not affiliated with or endorsed by Anthropic.

## Features

- A single UTC departure instant, converted client-side with `Intl.DateTimeFormat` — a correct countdown in every visitor's timezone, with zero hand-maintained timezone tables.
- Synchronous first paint: the countdown renders on load via an inline script, with no placeholder-digit flash.
- English, 简体中文, and 日本語 as fully pre-rendered static routes (`/`, `/zh/`, `/ja/`), with `hreflang` tags linking them together.
- A Starlight-style, accessible native `<select>` language switcher that remembers your preference and auto-detects your browser language without redirect loops.
- A world clock showing the departure moment across 7 cities.
- A graceful "departed" state once the countdown reaches zero.
- A CSS-only starfield background that respects `prefers-reduced-motion`.
- No frameworks, no CDN, no webfonts — the build output is a fully self-contained static site.

## Tech stack

- [Astro 7](https://astro.build)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`
- Vanilla inline JavaScript (no client-side framework or hydration)
- Node >= 22

## Quick start

```sh
npm install
npm run dev       # start the dev server
npm run build     # build the static site to dist/
npm run preview   # serve the built dist/ output locally
```

## Project structure

```
src/
├── i18n/
│   ├── config.js        # single source of truth: DEPARTURE_ISO, DEFAULT_LOCALE, LOCALES, LOCALE_PATHS
│   └── ui.js             # en/zh/ja text dictionaries (copy, facts, world-clock labels, ...)
├── layouts/
│   └── Layout.astro      # <head> (meta, hreflang, favicon) + loop-proof locale auto-redirect
├── components/
│   ├── Farewell.astro    # page body: hero, countdown, world clock, facts, footer
│   └── LangSwitcher.astro# accessible native-select language switcher
└── pages/
    ├── index.astro       # en (default, unprefixed route)
    ├── zh/index.astro    # zh
    └── ja/index.astro    # ja
```

## Adding a language

1. Add a new dictionary entry to `src/i18n/ui.js` (copy the shape of an existing locale).
2. Add its code to `LOCALES` and `LOCALE_PATHS` in `src/i18n/config.js`.
3. Add a thin page under `src/pages/<code>/index.astro` that passes a `locale` prop into `Layout` and `Farewell`, following the existing pattern.

The language switcher and `hreflang` tags pick up new locales automatically — there's no other place that hand-lists locales.

## Deployment note

The build output (`dist/`) is fully static and can be hosted anywhere. Before pointing it at a real domain, set `site: 'https://…'` in `astro.config.mjs` and add canonical/absolute `hreflang` URLs — this is currently deferred on purpose since the site isn't deployed to a permanent domain yet.

## Disclaimer

This is an unofficial fan project, not affiliated with or endorsed by Anthropic. The countdown targets the end of the universal included-access period, an official time published in Anthropic's support article, not an estimate. Facts are current as of July 18, 2026, based on Anthropic's documentation and the @claudeai announcement of that date.
