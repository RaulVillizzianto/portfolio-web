// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { enlacesConBase } from './src/lib/enlaces-con-base.mjs';

// Sitio publicado en GitHub Pages como "project site":
// https://raulvillizzianto.github.io/portfolio-web/
// Si algún día se sirve desde un dominio propio (o Cloudflare Pages),
// cambiar `site` y dejar `base: '/'`.
const site = 'https://raulvillizzianto.github.io';
const base = '/portfolio-web';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  markdown: {
    processor: satteri({
      hastPlugins: [enlacesConBase(base)],
    }),
  },
});
