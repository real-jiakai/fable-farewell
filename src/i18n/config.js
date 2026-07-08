// Single source of truth for the departure instant.
// End of day July 12, 2026, Pacific Time (estimated — no official time was ever published).
// Originally set for July 7, 2026; Anthropic extended included access by five days on July 7, 2026.
export const DEPARTURE_ISO = '2026-07-13T06:59:59Z';

export const DEFAULT_LOCALE = 'en';

export const LOCALES = ['en', 'zh', 'ja'];

// Route for each locale. Adding a locale later only needs an entry here
// (plus a dictionary entry in ui.js and a thin page file under src/pages).
export const LOCALE_PATHS = {
  en: '/',
  zh: '/zh/',
  ja: '/ja/',
};
