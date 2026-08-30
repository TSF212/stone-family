# The Stone Family — Site Astro

Site vitrine multilingue pour carrière de marbre noir absolu, Moyen Atlas, Maroc.

## Stack
- **Astro 4** — HTML statique, ultra-rapide, SEO natif
- **i18n natif Astro** — FR (défaut) / EN / IT / ES / AR
- **Netlify** — hébergement + formulaire contact + redirections langue
- **Google Fonts** — Archivo + Barlow + IBM Plex Mono + Noto Kufi Arabic

## Structure du projet

```
stone-family/
├── src/
│   ├── i18n/
│   │   ├── index.ts       ← Utilitaires i18n + export locales
│   │   ├── fr.ts          ← Traductions françaises (référence)
│   │   ├── en.ts          ← Traductions anglaises
│   │   ├── it.ts          ← À créer (copier fr.ts et traduire)
│   │   ├── es.ts          ← À créer
│   │   └── ar.ts          ← À créer (dir: 'rtl')
│   ├── layouts/
│   │   └── BaseLayout.astro  ← HTML, meta, hreflang, fonts
│   ├── components/
│   │   ├── Header.astro      ← Nav sticky + sélecteur langue
│   │   └── HomePage.astro    ← Toutes les sections de la home
│   └── pages/
│       ├── index.astro        ← / (français, locale par défaut)
│       └── [locale]/
│           └── index.astro    ← /en/ /it/ /es/ /ar/
├── public/
│   ├── images/               ← Placez vos photos ici
│   │   ├── hero_slab.jpg     ← Hero (1600 × 1200 px min)
│   │   ├── finish_polished.jpg
│   │   ├── finish_honed.jpg
│   │   ├── finish_sandblasted.jpg
│   │   ├── finish_bushhammered.jpg
│   │   ├── finish_raw.jpg
│   │   ├── quarry_face_wide.jpg
│   │   ├── macro_polished.jpg
│   │   ├── macro_honed.jpg
│   │   ├── edge_detail.jpg
│   │   ├── ref_hotel.jpg
│   │   ├── ref_villa.jpg
│   │   ├── ref_funeraire.jpg
│   │   └── og-image.jpg      ← Open Graph (1200 × 630 px)
│   └── favicon.svg
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## Installation locale

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev
# → http://localhost:4321

# 3. Build de production
npm run build

# 4. Prévisualiser le build
npm run preview
```

## Ajouter une traduction

1. Copier `src/i18n/fr.ts` vers `src/i18n/it.ts`
2. Traduire toutes les valeurs (ne pas toucher aux clés)
3. Dans `src/i18n/index.ts`, décommenter :
   ```ts
   import { it } from './it';
   // ...
   translations: { fr, en, it, ... }
   ```
4. C'est tout — Astro génère automatiquement `/it/`

## Déploiement sur Netlify

1. Pousser le projet sur GitHub
2. Connecter le repo sur [netlify.com](https://netlify.com)
3. Build command : `npm run build`
4. Publish directory : `dist`
5. Déployer

Le formulaire de contact fonctionne via **Netlify Forms** — aucun backend requis.

## Remplacer les placeholders photos

Dans `src/components/HomePage.astro`, cherchez les commentaires `<!-- Remplacez par -->` et remplacez les `<div set:html={ph(...)} />` par :

```astro
<img
  src="/images/hero_slab.jpg"
  alt="Marbre noir Atlas — carrière Moyen Atlas Maroc"
  style="width:100%;height:100%;object-fit:cover;"
  loading="lazy"
/>
```

## SEO multilingue

- **hreflang** automatiques dans `BaseLayout.astro`
- **sitemap** : installer `@astrojs/sitemap` puis ajouter à `astro.config.mjs`
- **Open Graph** configuré dans `BaseLayout.astro`
- **Structured data** Organization schema inclus

## Personnalisation

- Couleur accent : cherchez `#C8A96A` dans les fichiers et remplacez
- Nom du site : cherchez `The Stone Family` 
- Domaine : modifier `site` dans `astro.config.mjs` et `BaseLayout.astro`
- Adresse Netlify formulaire : le formulaire est prêt, aucune config
