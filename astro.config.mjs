import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thestonefamily.com',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'it', 'es', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
