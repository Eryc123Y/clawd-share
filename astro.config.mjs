import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eryc123y.github.io/clawd-share',
  base: '/clawd-share',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory',
  },
});
