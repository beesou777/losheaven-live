import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  serverMiddleware: ['compression'],
  devtools: { enabled: false },
  typescript: {
    typeCheck: false,
  },
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Losheaven crafts unique apparel experiences. Discover trendy, oversized clothing designed to empower your style and individuality. Shop now!',
        },
        { hid: 'canonical', name: 'canonical', content: 'https://www.losheaven.com/' },
        { name: 'Publisher', content: 'Losheaven Clothing' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Losheaven Clothing in Nepal | losheaven clothing' },
        {
          property: 'og:description',
          content:
            'Losheaven crafts unique apparel experiences. Discover trendy, oversized clothing designed to empower your style and individuality. Shop now!',
        },
        { property: 'og:image', content: 'https://i.postimg.cc/7YpWCPYH/icon-180x180.png' },
        { property: 'og:url', content: 'https://www.losheaven.com/' },
        { property: 'og:site_name', content: 'Losheaven Clothing' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Losheaven Clothing in Nepal | losheaven clothing' },
        {
          name: 'twitter:description',
          content:
            'Losheaven crafts unique apparel experiences. Discover trendy, oversized clothing designed to empower your style and individuality. Shop now!',
        },
        { name: 'twitter:image', content: 'https://i.postimg.cc/7YpWCPYH/icon-180x180.png' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' },
        { rel: 'icon', href: '/favicon-32x32.png', type: '/imgage/png' },
        { rel: 'icon', href: '/favicon-16x16.png', type: 'image/png' },
        { rel: 'manifest', href: '/apps/src/public/icons/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true },
        { rel: 'canonical', href: 'https://www.losheaven.com' },
      ],
    },
  },
  imports: {
    dirs: ['composables/**', 'utils/**'],
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
  },
  css: [resolve('./assets/scss/app.scss')],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-headlessui',
    '@nuxt/image',
    'nuxt-icon',
    '@vite-pwa/nuxt',
    'nuxt-lazy-hydrate',
    'nuxt-schema-org',
  ],

  // module::pinia
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**'],
  },
  // eslint-disable-next-line unicorn/expiring-todo-comments
  // TODO: build is consistently failing because of this. check whether we need pre-render check.
  nitro: {
    prerender: {
      crawlLinks: false,
    },
    compressPublicAssets: true,
  },
  routeRules: {
    '/_ipx/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/icons/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/favicon.ico': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL ?? 'http://localhost:3000',
      showNetPrices: true,
      logoUrl: (process.env.API_URL ?? 'http://localhost:3000') + '/images/logo.png',
      useWebp: process.env?.USE_WEBP === '1' ?? false,
    },
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'losheaven',
      url: 'https://www.losheaven.com',
      logo: 'https://www.losheaven.com/images/logo.png',
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,json,css,html,ico,svg,png,webp,ico,woff,woff2,ttf,eit,otf}', 'icons/*'],
      globIgnores: ['manifest**.webmanifest'],
      additionalManifestEntries: [
        {
          url: '/offline',
          revision: Math.random().toString(32),
        },
      ],
      navigationPreload: true,
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkOnly',
          options: {
            precacheFallback: {
              fallbackURL: '/offline',
            },
          },
        },
      ],
      cleanupOutdatedCaches: true,
    },

    manifest: {
      name: 'losheaven',
      short_name: 'lh',
      theme_color: '#274C5B',
      icons: [
        {
          src: 'icons/icon-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
        {
          src: 'icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: 'icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    registerWebManifestInRouteRules: true,
  },
});
