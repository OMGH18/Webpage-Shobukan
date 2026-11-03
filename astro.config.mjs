// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

const SITE = 'https://shobukan.djabelsolutions.fr'

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Les pages légales sont des fichiers statiques (public/) : on les ajoute à la main.
      customPages: [`${SITE}/privacy/`, `${SITE}/terms/`, `${SITE}/account-deletion/`],
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } },
    }),
  ],
})
