import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://m1heng.github.io/clawd-share',
  base: '/clawd-share',
  integrations: [tailwind()],
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
