import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thestonefamily.ma',
  integrations: [sitemap({
    filter: (page) => new URL(page).pathname.replace(/\/$/, '') !== '/success',
    i18n: {
      defaultLocale: 'fr',
      locales: { fr: 'fr', en: 'en', it: 'it', es: 'es', ar: 'ar' },
    },
  })],
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