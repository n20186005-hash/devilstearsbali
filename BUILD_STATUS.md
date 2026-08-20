# Status verifikasi build

Sumber situs dan pemeriksaan statis telah disiapkan, tetapi paket ini **belum dapat disebut lolos gerbang build akhir** karena lingkungan kerja saat ini tidak dapat mengakses registry npm untuk mengunduh pnpm dan dependensi proyek.

## Pemeriksaan statis yang sudah dijalankan

- Versi dependensi di `package.json` dikunci sebagai versi eksak; `packageManager`, `engines.node`, `engines.pnpm`, dan `.node-version` konsisten.
- Proyek paket tunggal tidak memiliki `pnpm-workspace.yaml`.
- Tidak ditemukan `example.com`, `localhost`, `chrome-extension://`, parameter peta `zh-CN`, atau parameter wilayah `jp` di sumber situs.
- Embed Google Maps menggunakan parameter bahasa/wilayah Indonesia (`id-ID`).
- Tidak ditemukan karakter CJK pada sumber halaman yang terlihat pengguna.
- Tidak ada `<url>` atau `lastmod` sitemap yang ditulis manual.
- `@astrojs/sitemap` hanya aktif jika `SITE_URL` di `astro.config.mjs` diisi.
- SVG logo/favicon valid secara XML; dimensi foto lokal telah dicocokkan dengan atribut HTML.

## Gerbang build yang terblokir

Perintah yang diwajibkan dijalankan ulang setelah `node_modules` dihapus:

```sh
CI=1 corepack pnpm install --frozen-lockfile
```

Lingkungan gagal sebelum instalasi proyek dimulai karena Corepack tidak dapat mengambil pnpm 11.22.0 dari `registry.npmjs.org` (`getaddrinfo EAI_AGAIN`). Lingkungan juga menyediakan Node.js 22.16.0, sedangkan proyek sengaja dikunci ke Node.js 24.15.0 LTS.

Akibatnya:

- `pnpm-lock.yaml` **belum dibuat** dan tidak dipalsukan/ditulis manual.
- `pnpm check` dan `pnpm build` belum dapat dieksekusi di lingkungan ini.
- pemeriksaan `dist/` dan sitemap hasil build belum dapat dijalankan.

Setelah dijalankan pada mesin dengan Node.js 24.15.0 dan akses npm, gerbang penerimaan yang harus dijalankan adalah:

```sh
rm -rf node_modules
corepack enable
CI=1 corepack pnpm install
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
! grep -R -E 'example\\.com|localhost|chrome-extension://' dist
```

Catatan: instalasi pertama tanpa `--frozen-lockfile` diperlukan satu kali untuk menghasilkan `pnpm-lock.yaml` yang benar dari versi eksak di `package.json`; setelah lockfile tersimpan, ulangi instalasi bersih dengan `--frozen-lockfile` sebagai gerbang final. Jika `SITE_URL` masih kosong, sitemap memang tidak dibuat sesuai desain. Isi domain final hanya di `astro.config.mjs`, lalu build ulang untuk menghasilkan sitemap otomatis.
