import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Satu-satunya tempat untuk mengatur domain produksi.
// Diisi agar Astro menghasilkan canonical, og:url absolut, gambar OG absolut,
// serta sitemap-index.xml. Kosongkan hanya saat belum ada domain final.
const SITE_URL = 'https://devilstearsbali.com';
const site = SITE_URL.trim() || undefined;

export default defineConfig({
  site,
  trailingSlash: "always",
  integrations: site ? [sitemap({ filter: (page) => !/\/404(?:\.html)?\/?$/.test(page) })] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
