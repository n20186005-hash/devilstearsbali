// Pusat data panduan Devil's Tears.
// Setiap topik adalah halaman indeks yang berdiri sendiri (Bahasa Indonesia).
// Semua fakta yang belum diverifikasi secara mandiri ditandai dengan jelas;
// panduan ini tidak menjual tiket dan bukan situs resmi pengelola.

export type TopicCategory =
  | 'panduan'
  | 'transportasi'
  | 'sekitar'
  | 'kuliner'
  | 'menginap'
  | 'rute';

export interface TopicFact {
  label: string;
  value: string;
}

export interface TopicSection {
  id?: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: { tone: 'info' | 'warn'; text: string };
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  slug: string;
  category: TopicCategory;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  lead: string;
  updated: string;
  facts?: TopicFact[];
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[]; // slug topik lain (lintas kategori)
}

export interface CategoryMeta {
  key: TopicCategory;
  label: string;
  title: string;
  blurb: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    key: 'panduan',
    label: 'Panduan Kunjungan',
    title: 'Panduan Kunjungan Devil’s Tears',
    blurb: 'Hal dasar sebelum berangkat: nama tempat, gelombang, keselamatan tebing, waktu, biaya, fasilitas dan aksesibilitas.',
  },
  {
    key: 'transportasi',
    label: 'Transportasi',
    title: 'Transportasi ke Devil’s Tears',
    blurb: 'Rute dari Sanur, bandara, pelabuhan dan antar-pantai di Nusa Lembongan, plus pilihan tanpa sewa motor.',
  },
  {
    key: 'sekitar',
    label: 'Tempat Sekitar',
    title: 'Tempat Wisata Sekitar Devil’s Tears',
    blurb: 'Dream Beach, Sandy Bay, Mushroom Bay, Sunset Point, Yellow Bridge, mangrove dan budidaya rumput laut.',
  },
  {
    key: 'kuliner',
    label: 'Kuliner',
    title: 'Kuliner di Sekitar Devil’s Tears',
    blurb: 'Warung, kafe dan pilihan makan yang benar-benar sejalan dengan rute Devil’s Tears.',
  },
  {
    key: 'menginap',
    label: 'Menginap',
    title: 'Menginap di Sekitar Devil’s Tears',
    blurb: 'Logika memilih area menginap dan apakah sepadan bermalam di Lembongan.',
  },
  {
    key: 'rute',
    label: 'Rencana Perjalanan',
    title: 'Rencana Perjalanan Devil’s Tears',
    blurb: 'Rute jalan kaki, setengah hari, sehari penuh, keluarga, hemat biaya dan tanpa motor.',
  },
];

import { TOPICS_A } from './topics-data-1';
import { TOPICS_B } from './topics-data-2';
import { TOPICS_C } from './topics-data-3';

export const TOPICS: TopicContent[] = [...TOPICS_A, ...TOPICS_B, ...TOPICS_C];

const BY_SLUG: Record<string, TopicContent> = Object.fromEntries(
  TOPICS.map((t) => [t.slug, t]),
);

export function getTopic(slug: string): TopicContent | undefined {
  return BY_SLUG[slug];
}

export function topicsByCategory(cat: TopicCategory): TopicContent[] {
  return TOPICS.filter((t) => t.category === cat);
}

export function categoryMeta(cat: TopicCategory): CategoryMeta {
  return CATEGORIES.find((c) => c.key === cat)!;
}

export function topicUrl(t: TopicContent): string {
  return `/${t.category}/${t.slug}/`;
}
