import type { TopicContent } from './topics';

export const TOPICS_C: TopicContent[] = [
  // ===================== F. RUTE (8) =====================
  {
    slug: 'jalan-kaki-devils-tear-dream-beach-sandy-bay',
    category: 'rute',
    title: 'Jalan Kaki Devil’s Tears–Dream Beach–Sandy Bay',
    metaTitle: 'Rute Jalan Kaki Devil’s Tears–Dream Beach–Sandy Bay',
    metaDescription: 'Rute pejalan kaki aman menghubungkan Devil’s Tears, Dream Beach, dan Sandy Bay di barat-daya Lembongan.',
    lead: 'Ketiga titik di barat-daya bisa dihubungkan jalan kaki bila jalur sah tersedia. Halaman ini merangkum urutan dan keamanannya.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'urutan',
        heading: 'Urutan yang masuk akal',
        paragraphs: [
          'Datang ke Devil’s Tears lebih dulu saat cahaya masih terang, lalu berjalan ke Dream Beach, dan berakhir di Sandy Bay untuk makan/sunset.',
          'Urutan ini meminimalkan kendaraan dan memaksimalkan waktu di sisi barat-daya.',
        ],
      },
      {
        id: 'jalur',
        heading: 'Jalur pejalan kaki',
        paragraphs: [
          'Jarak antar titik pendek, tetapi sebagian jalur berbatu dan licin. Gunakan alas kaki baik dan hindari tepi tebing.',
          'Kami tidak memverifikasi rincian jalur; verifikasi jalur sah saat tiba dan jangan membuat jalan sendiri di area berbahaya.',
        ],
        callout: {
          tone: 'warn',
          text: 'Selalu verifikasi akses pejalan kaki yang legal. Jangan menyeberang tebing terjal yang tidak diizinkan hanya untuk memotong jarak.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah bisa jalan kaki saja antar ketiganya?', a: 'Ya bila Anda sudah di area barat-daya; jarak pendek. Verifikasi jalur sah saat tiba.' },
      { q: 'Urutan terbaik?', a: 'Devil’s Tears (cahaya terang) → Dream Beach → Sandy Bay untuk makan/sunset.' },
      { q: 'Berapa lama total?', a: 'Termasuk foto dan istirahat sekitar 2–3 jam. Baca halaman durasi kunjungan.' },
    ],
    related: ['durasi-kunjungan', 'dream-beach', 'sandy-bay', 'aksesibilitas-dan-keluarga'],
  },
  {
    slug: 'sunset-2-jam',
    category: 'rute',
    title: 'Rute Sunset 2 Jam di Lembongan Barat',
    metaTitle: 'Rute Sunset 2 Jam Devil’s Tears',
    metaDescription: 'Rencana 2 jam menjelang sunset: Devil’s Tears, lalu Sandy Bay/Dream Beach untuk menonton matahari terbenam.',
    lead: 'Bagi yang tiba sore, 2 jam cukup untuk melihat tebing lalu menikmati sunset di area terbuka.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'alokasi',
        heading: 'Pembagian waktu',
        paragraphs: [
          'Sisihkan 30–40 menit untuk Devil’s Tears saat cahaya masih ada, lalu 30 menit jalan kaki/transfer ke Sandy Bay/Dream Beach.',
          'Sisa waktu untuk makan ringan atau duduk menonton sunset sebelum gelap.',
        ],
      },
      {
        id: 'aman',
        heading: 'Keamanan sore',
        paragraphs: [
          'Jangan berlama-lama di tepi tebing saat senja mendekati gelap. Batu licin dan ombak sulit dilihat.',
          'Rencanakan jalur pulang sebelum gelap.',
        ],
        callout: {
          tone: 'warn',
          text: 'Dua jam ketat. Jangan menunda di tebing bila ingin menyambung sunset dengan nyaman.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah 2 jam cukup?', a: 'Cukup untuk tebing lalu sunset di area terbuka, asal tidak menunda di tebing.' },
      { q: 'Ke mana setelah tebing?', a: 'Sandy Bay atau Dream Beach untuk sunset lebih terbuka dan aman.' },
      { q: 'Boleh malam di tebing?', a: 'Tidak disarankan. Tanpa penerangan, tebing licin dan berbahaya.' },
    ],
    related: ['sunset-devils-tear', 'sunset-point', 'sandy-bay', 'waktu-terbaik-berkunjung'],
  },
  {
    slug: 'setengah-hari-lembongan',
    category: 'rute',
    title: 'Rute Setengah Hari di Lembongan',
    metaTitle: 'Itinerari Setengah Hari Lembongan',
    metaDescription: 'Rencana setengah hari mencakup Devil’s Tears, Dream Beach, Sandy Bay, dan waktu makan tanpa terburu-buru.',
    lead: 'Setengah hari memungkinkan eksplorasi barat-daya dengan lebih santai, termasuk Devil’s Tears dan pantai sekitar.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'alokasi',
        heading: 'Pembagian waktu',
        paragraphs: [
          'Sisihkan pagi atau sore untuk transfer dari pelabuhan ke barat-daya, lalu 2–3 jam di area Devil’s Tears–Dream Beach–Sandy Bay.',
          'Sediakan waktu makan dan istirahat agar tidak terburu-buru mengejar kapal.',
        ],
      },
      {
        id: 'urutan',
        heading: 'Urutan contoh',
        paragraphs: [
          'Pelabuhan → Devil’s Tears → Dream Beach → Sandy Bay (makan/sunset) → transfer ke pelabuhan.',
          'Baca halaman jalan kaki dan kapal pulang untuk menyambung.',
        ],
      },
      {
        id: 'catatan',
        heading: 'Catatan',
        paragraphs: [
          'Jangan memaksakan Ceningan atau mangrove dalam setengah hari kecuali Anda punya kendaraan dan waktu luang.',
        ],
        callout: {
          tone: 'info',
          text: 'Setengah hari ideal untuk fokus barat-daya. Luaskan ke seharian bila ingin Ceningan/mangrove.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah setengah hari cukup untuk Devil’s Tears?', a: 'Cukup dan santai bila fokus barat-daya. Sisakan waktu makan dan transfer ke pelabuhan.' },
      { q: 'Boleh masuk Ceningan?', a: 'Sulit dalam setengah hari. Lebih baik seharian bila ingin Yellow Bridge dan Ceningan.' },
      { q: 'Kapan waktu terbaik?', a: 'Pagi untuk menghindari kerumunan, atau sore untuk menyambung sunset.' },
    ],
    related: ['sehari-lembongan', 'jalan-kaki-devils-tear-dream-beach-sandy-bay', 'kapal-pulang-dan-waktu-cadangan'],
  },
  {
    slug: 'sehari-lembongan',
    category: 'rute',
    title: 'Rute Sehari Penuh di Lembongan',
    metaTitle: 'Itinerari Sehari Lembongan',
    metaDescription: 'Rencana seharian: Devil’s Tears, Dream Beach, Sandy Bay, plus Ceningan (Yellow Bridge) atau mangrove bila waktu mencukupi.',
    lead: 'Seharian memungkinkan Devil’s Tears digabung dengan sisi lain pulau seperti Ceningan atau mangrove.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'alokasi',
        heading: 'Pembagian waktu',
        paragraphs: [
          'Mulai pagi dari pelabuhan, ke barat-daya untuk Devil’s Tears–Dream Beach–Sandy Bay, lalu lanjut ke utara (mangrove) atau menyeberang Yellow Bridge ke Ceningan.',
          'Sisakan cadangan untuk kapal pulang.',
        ],
      },
      {
        id: 'opsi',
        heading: 'Tambahan',
        bullets: [
          'Ceningan via Yellow Bridge: atraksi tebing/pantai lain di pulau tetangga.',
          'Mangrove: perahu bakau di sisi utara.',
          'Jungutbatu: makan malam dekat pelabuhan sebelum pulang.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jangan terlalu padat. Lembongan kecil tetapi jalur berbatu dan cuaca bisa memperlambat pergerakan.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah seharian terlalu padat?', a: 'Masuk akal bila fokus Lembongan+Ceningan. Jangan memaksakan terlalu banyak titik.' },
      { q: 'Harus lewat Yellow Bridge?', a: 'Tidak wajib. Bridge hanya bila ingin Ceningan; Devil’s Tears ada di Lembongan sendiri.' },
      { q: 'Kapan pulang?', a: 'Catat kapal terakhir dan sediakan cadangan. Baca kapal pulang & waktu cadangan.' },
    ],
    related: ['setengah-hari-lembongan', 'yellow-bridge', 'mangrove-forest', 'kapal-pulang-dan-waktu-cadangan'],
  },
  {
    slug: 'wisata-keluarga',
    category: 'rute',
    title: 'Rute Wisata Keluarga di Lembongan',
    metaTitle: 'Itinerari Keluarga Lembongan',
    metaDescription: 'Rencana aman untuk keluarga dengan anak di Lembongan: Devil’s Tears dengan pengawasan, pantai, dan hindari tebing berbahaya.',
    lead: 'Keluarga butuh ritme lebih pelan dan fokus keamanan, terutama di tebing Devil’s Tears.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'aman',
        heading: 'Keamanan anak',
        paragraphs: [
          'Di Devil’s Tears, jaga anak dengan kontak fisik dekat dan jangan biarkan mendekati tepi. Baca halaman aksesibilitas dan keluarga.',
          'Pilih pantai (Dream Beach/Sandy Bay) sebagai area lebih terbuka untuk bermain daripada tebing.',
        ],
      },
      {
        id: 'rit',
        heading: 'Ritme',
        paragraphs: [
          'Hindari terik siang dengan datang pagi, sisakan waktu istirahat dan makan.',
          'Bawa air, topi, dan tabir surya. Fasilitas di tebing belum terverifikasi.',
        ],
      },
      {
        id: 'kendaraan',
        heading: 'Kendaraan',
        paragraphs: [
          'Sopir lokal sering lebih nyaman untuk keluarga daripada menyewa motor. Baca sewa motor atau sopir.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jangan biarkan anak berlarian di tepi tebing. Satu ombak besar cukup berbahaya bagi dewasa pun.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah Devil’s Tears aman untuk anak?', a: 'Bisa dengan pengawasan ketat dan menjauhi tepi. Lebih baik nikmati pantai terbuka setelah tebing.' },
      { q: 'Lebih baik motor atau sopir?', a: 'Sopir sering lebih nyaman untuk keluarga. Baca perbandingan sewa motor vs sopir.' },
      { q: 'Kapan waktu terbaik?', a: 'Pagi menghindari terik dan kerumunan. Bawa air dan perlindungan matahari.' },
    ],
    related: ['aksesibilitas-dan-keluarga', 'sewa-motor-atau-sopir', 'jalan-kaki-devils-tear-dream-beach-sandy-bay'],
  },
  {
    slug: 'saat-hujan-atau-ombak-tinggi',
    category: 'rute',
    title: 'Saat Hujan atau Ombak Tinggi',
    metaTitle: 'Rencana Saat Hujan / Ombak Tinggi',
    metaDescription: 'Apa yang dilakukan bila cuaca buruk di Lembongan: batalkan tepi tebing, pilih aktivitas aman, dan cadangan kapal.',
    lead: 'Cuaca buruk mengubah rencana. Halaman ini tentang pembatalan aman dan alternatif.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'batal',
        heading: 'Batalkan tepi tebing',
        paragraphs: [
          'Saat hujan atau ombak besar, jangan mendekati Devil’s Tears. Tebing licin dan hantaman ombak meningkat.',
          'Pilih aktivitas di area lebih terlindung atau tunda kunjungan ke hari lebih tenang.',
        ],
      },
      {
        id: 'alternatif',
        heading: 'Alternatif',
        bullets: [
          'Jelajahi warung dan desa di Jungutbatu.',
          'Kunjungi toko atau istirahat di penginapan.',
          'Baca prakiraan BMKG dan tunggu jendela cuaca lebih tenang.',
        ],
      },
      {
        id: 'kapal',
        heading: 'Cadangan kapal',
        paragraphs: [
          'Bila cuaca buruk, penyeberangan bisa dibatalkan. Pertimbangkan menginap daripada memaksa pulang.',
          'Baca kapal pulang dan waktu cadangan.',
        ],
        callout: {
          tone: 'warn',
          text: 'Keselamatan lebih penting dari foto. Jangan mengambil risiko di tebing saat laut memburuk.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah Devil’s Tears tutup saat hujan?', a: 'Tidak ada pengelola resmi, tetapi Anda harus menghindari tepi saat hujan/ombak besar. Tebing licin dan berbahaya.' },
      { q: 'Apa alternatif saat cuaca buruk?', a: 'Warung, desa, atau istirahat di penginapan. Tunggu jendela cuaca lebih tenang.' },
      { q: 'Boleh memaksa pulang kapal?', a: 'Jangan. Bila dibatalkan cuaca, lebih baik menginap di Lembongan daripada memaksakan penyeberangan berbahaya.' },
    ],
    related: ['pasang-surut-dan-cuaca', 'kapal-pulang-dan-waktu-cadangan', 'menginap-dekat-devils-tear', 'wisata-keluarga'],
  },
  {
    slug: 'hemat-biaya',
    category: 'rute',
    title: 'Rute Hemat Biaya di Lembongan',
    metaTitle: 'Itinerari Hemat Biaya Lembongan',
    metaDescription: 'Cara berwisata hemat ke Devil’s Tears: sewa motor vs sopir, warung lokal, dan menghindari biaya tak perlu.',
    lead: 'Devil’s Tears tidak memungut tiket yang kami konfirmasi, sehingga biaya terbesar biasanya transportasi dan makan.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'transport',
        heading: 'Transport hemat',
        paragraphs: [
          'Sewa motor sendiri umumnya lebih murah daripada sopir untuk solo/pasangan. Bandingkan keduanya di halaman sewa motor atau sopir.',
          'Bila berkelompok, sopir bisa lebih efisien per orang dan menghindari risiko menyetir.',
        ],
      },
      {
        id: 'makan',
        heading: 'Makan hemat',
        paragraphs: [
          'Warung lokal jauh lebih hemat daripada kafe pantai. Baca halaman warung lokal untuk lokasi.',
          'Bawa air sendiri dari penginapan untuk menghemat pembelian berkala.',
        ],
      },
      {
        id: 'hindari',
        heading: 'Hindari biaya tak perlu',
        bullets: [
          'Konfirmasikan retribusi/karcis sebelum bayar agar tak tumpang tindih.',
          'Tanya cakupan agar tidak bayar ganda untuk layanan sama.',
          'Simpan tunai dan tanya harga sebelum pesan.',
        ],
        callout: {
          tone: 'info',
          text: 'Kami tidak menjual apa pun. Perkiraan ini untuk membantu anggaran, bukan penawaran harga resmi.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah Devil’s Tears gratis?', a: 'Kami tidak mengonfirmasi tiket tunggal. Retribusi kawasan berbeda dari tiket atraksi; tanyakan cakupan sebelum bayar.' },
      { q: 'Lebih hemat motor atau sopir?', a: 'Motor biasanya lebih murah untuk solo/pasangan; sopir lebih praktis untuk kelompok atau keluarga.' },
      { q: 'Di mana makan termurah?', a: 'Warung lokal di Jungutbatu/Mushroom Bay. Konfirmasikan jam dan harga saat tiba.' },
    ],
    related: ['sewa-motor-atau-sopir', 'warung-lokal-lembongan', 'harga-tiket-dan-retribusi', 'tanpa-sewa-motor'],
  },
  {
    slug: 'rute-tanpa-motor',
    category: 'rute',
    title: 'Rute Tanpa Motor di Lembongan',
    metaTitle: 'Itinerari Tanpa Motor Lembongan',
    metaDescription: 'Menyusun rute Lembongan tanpa menyewa motor: sopir lokal, jalan kaki antar titik barat-daya, dan cadangan.',
    lead: 'Bagi yang tidak ingin menyetir, Lembongan masih bisa dijelajahi dengan sopir lokal dan jalan kaki di area barat-daya.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'sopir',
        heading: 'Sopir lokal sebagai tulang punggung',
        paragraphs: [
          'Gunakan sopir lokal untuk transfer dari pelabuhan ke area barat-daya dan kembali. Ini menghindari risiko menyetir jalur berbatu.',
          'Konfirmasikan apakah sopir menunggu selama kunjungan agar tidak terisolir.',
        ],
      },
      {
        id: 'kaki',
        heading: 'Jalan kaki di barat-daya',
        paragraphs: [
          'Setelah di area Sandy Bay/Dream Beach, jalan kaki antar titik dekat ke Devil’s Tears sangat masuk akal.',
          'Baca halaman jalan kaki Devil’s Tears–Dream Beach–Sandy Bay untuk urutan.',
        ],
      },
      {
        id: 'cadangan',
        heading: 'Cadangan',
        paragraphs: [
          'Sediakan waktu ekstra karena tanpa motor, pergerakan antar sisi pulau lebih lambat.',
          'Baca kapal pulang dan waktu cadangan agar tidak tertinggal kapal.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jangan memaksa jalan kaki melintasi pulau. Jungutbatu ke tebing terlalu jauh untuk berjalan kaki.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah bisa keliling Lembongan tanpa motor?', a: 'Bisa dengan sopir lokal untuk transfer utama, lalu jalan kaki antar titik barat-daya.' },
      { q: 'Apakah sopir menunggu?', a: 'Tergantung kesepakatan; konfirmasikan di awal.' },
      { q: 'Apakah perlu khawatir tertinggal kapal?', a: 'Ya, sediakan cadangan waktu karena pergerakan lebih lambat tanpa motor.' },
    ],
    related: ['tanpa-sewa-motor', 'sewa-motor-atau-sopir', 'jalan-kaki-devils-tear-dream-beach-sandy-bay', 'kapal-pulang-dan-waktu-cadangan'],
  },
];
