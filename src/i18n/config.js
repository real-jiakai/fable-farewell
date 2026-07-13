// Single source of truth for the departure instant.
// July 19, 2026 at 11:59:59 PM Pacific Time — official, per Anthropic's support
// article (support.claude.com/en/articles/15424964-claude-fable-5-promotional-access).
// Originally set for July 7, 2026; Anthropic extended included access twice:
// first to July 12, 2026, then again to July 19, 2026.
export const DEPARTURE_ISO = '2026-07-20T06:59:59Z';

export const DEFAULT_LOCALE = 'en';

export const LOCALES = ['en', 'zh', 'ja'];

// Route for each locale. Adding a locale later only needs an entry here
// (plus a dictionary entry in ui.js and a thin page file under src/pages).
export const LOCALE_PATHS = {
  en: '/',
  zh: '/zh/',
  ja: '/ja/',
};
