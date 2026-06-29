import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: confirmer le domaine final avec la direction (mlysappart.com ?)
export default defineConfig({
  site: 'https://mlysappart.com',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      // FR par défaut mais préfixé : toutes les pages vivent sous /fr/ ou /en/
      prefixDefaultLocale: true,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
