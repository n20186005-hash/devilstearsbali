// Satu-satunya sumber kebenaran untuk nama situs.
// Format SEO: nama objek wisata + kota + panduan wisata.
// Dipakai oleh BaseLayout (og:site_name), halaman indeks, dan halaman legal
// melalui withSiteName() agar semua judul konsisten dan mudah diperbarui.
export const SITE_NAME = "Devil's Tears Nusa Lembongan — Panduan Wisata";

export function withSiteName(title: string): string {
  return `${title} | ${SITE_NAME}`;
}
