import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://imsfc.com',
  build: {
    assets: 'assets',
  },
  integrations: [mdx(), sitemap()],
})
