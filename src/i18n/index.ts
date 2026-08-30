import { fr } from './fr';
import { en } from './en';

// Ajoutez it.ts, es.ts, ar.ts au même format et importez-les ici
// import { it } from './it';
// import { es } from './es';
// import { ar } from './ar';

export const locales = ['fr', 'en', 'it', 'es', 'ar'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'fr';

export const translations: Record<string, typeof fr> = {
  fr,
  en,
  // it,
  // es,
  // ar,
};

// Retourne les traductions pour une locale donnée, avec fallback FR
export function t(locale: string): typeof fr {
  return translations[locale] ?? translations['fr'];
}

// Génère les chemins statiques pour toutes les locales
export function getLocalePaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

// URL d'une page dans une locale donnée
export function localePath(locale: Locale, path: string = '') {
  if (locale === defaultLocale) return `/${path}`;
  return `/${locale}/${path}`;
}

// Toutes les locales avec leur label natif
export const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  it: 'IT',
  es: 'ES',
  ar: 'AR',
};
