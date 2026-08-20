# Panduan Devil's Tears — Nusa Lembongan

Situs informasi wisata independen dan nirlaba untuk Devil's Tears, Jungutbatu, Nusa Lembongan, Kabupaten Klungkung, Bali.

## Teknologi

- Astro 7.2.3
- Tailwind CSS 4.3.3 melalui plugin Vite resmi
- TypeScript 6.0.3
- pnpm 11.22.0
- Node.js 24.15.0 LTS
- Cloudflare Workers Static Assets melalui Wrangler 4.124.0
- Tanpa basis data, akun pengguna, login, atau CMS

## Domain produksi

Domain hanya diatur di `astro.config.mjs`, pada konstanta `SITE_URL`. Nilai awal sengaja kosong. Bila kosong:

- build tetap dapat berjalan;
- canonical dan `og:url` tidak diterbitkan;
- URL JSON-LD yang membutuhkan origin dihilangkan;
- integrasi `@astrojs/sitemap` tidak diaktifkan, sehingga tidak ada sitemap dengan domain palsu.

Setelah domain final tersedia, isi `SITE_URL` satu kali lalu build ulang. Sitemap akan dibuat otomatis oleh `@astrojs/sitemap`.

## Cookie dan GA4

ID GA4: `G-HXM22WWPKP`. Skrip Google Analytics hanya dimuat bila pengguna mengaktifkan kategori analitik pada `/cookie/`. Tidak ada popup persetujuan; halaman pengaturan cookie berdiri sendiri sesuai desain situs.

## Deployment Cloudflare Worker

Proyek menggunakan output statis Astro. Sesuai pola Cloudflare Workers Static Assets, tidak dibutuhkan adapter SSR Cloudflare. `wrangler.jsonc` menerbitkan direktori `dist/`.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## Sumber editorial utama

- Dinas Pariwisata Kabupaten Klungkung — retribusi wisata Nusa Lembongan–Nusa Ceningan dan inspeksi papan peringatan.
- Kementerian Pariwisata Republik Indonesia / Indonesia Travel — konteks Devil's Tears dan akses Nusa Lembongan.
- Pemerintah Provinsi Bali — konteks regional.
- Google Maps — lokasi, koordinat, jam tercantum, dan agregat penilaian.

## Foto dan lisensi

Aset foto disimpan lokal di `public/images/` untuk mengurangi ketergantungan runtime pada sumber eksternal.

- `devils-tears-hero.jpg` — Burmesedays / Wikimedia Commons, lisensi CC BY-SA.
- `devils-tears-landscape.jpg` — Burmesedays / Wikimedia Commons, lisensi CC BY-SA.
- `devils-tears-coast.jpeg` — Arnas Goldberg / Wikimedia Commons, lisensi CC BY.

Hak cipta tetap berada pada fotografer masing-masing. Saat memindahkan foto ke proyek lain, pertahankan atribusi dan ikuti ketentuan lisensinya.
