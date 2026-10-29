import type { TopicContent } from './topics';

export const TOPICS_B: TopicContent[] = [
  // ===================== C. SEKITAR (8) =====================
  {
    slug: 'dream-beach',
    category: 'sekitar',
    title: 'Dream Beach dekat Devil’s Tears',
    metaTitle: 'Dream Beach Nusa Lembongan',
    metaDescription: 'Dream Beach sangat dekat Devil’s Tears dan sering dikunjungi berurutan. Pelajari akses, pantai, dan cara menyambung keduanya.',
    lead: 'Dream Beach adalah pasangan alami Devil’s Tears: dekat, bisa dihubungkan jalan kaki, dan punya area pantai serta warung.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'hubungan',
        heading: 'Mengapa menyambung keduanya',
        paragraphs: [
          'Keduanya berada di sisi barat-daya yang sama dan jarak jalan kaki pendek. Kombinasi ini populer karena efisien dan saling melengkapi: tebing semburan lalu pantai.',
          'Baca halaman dari Dream Beach untuk rute pejalan kaki antar keduanya.',
        ],
      },
      {
        id: 'pantai',
        heading: 'Tentang pantai',
        paragraphs: [
          'Dream Beach adalah pantai dengan area berpasir dan tebing di sekitarnya. Kami tidak memverifikasi status renang resmi; jangan asumsikan aman berenang di semua titik.',
          'Beri jarak dari batu besar yang terkena ombak; area ini juga berbahaya saat laut besar.',
        ],
      },
      {
        id: 'fasilitas',
        heading: 'Fasilitas sekitar',
        paragraphs: [
          'Area ini punya warung/klub pantai yang beroperasi, tetapi jam dan status kami anjurkan konfirmasi saat tiba.',
          'Baca halaman kafe dan makan di sekitar untuk pilihan setelah pantai.',
        ],
        callout: {
          tone: 'info',
          text: 'Kami tidak bekerja sama dengan bisnis di Dream Beach. Konfirmasi jam dan harga langsung di lokasi.',
        },
      },
    ],
    faqs: [
      { q: 'Berapa jauh Dream Beach dari Devil’s Tears?', a: 'Sangat dekat, biasa dihubungkan jalan kaki. Kami tidak memverifikasi angka tepatnya; pastikan jalur sah saat tiba.' },
      { q: 'Apakah Dream Beach aman berenang?', a: 'Kami tidak memverifikasi status renang resmi. Beri jarak dari batu terkena ombak dan hati-hati saat laut besar.' },
      { q: 'Boleh dikunjungi berurutan?', a: 'Sangat disarankan. Tebing lalu pantai efisien dan saling melengkapi.' },
    ],
    related: ['jalan-kaki-devils-tear-dream-beach-sandy-bay', 'sandy-bay', 'dari-dream-beach', 'restoran-dekat-devils-tear'],
  },
  {
    slug: 'sandy-bay',
    category: 'sekitar',
    title: 'Sandy Bay dekat Devil’s Tears',
    metaTitle: 'Sandy Bay Nusa Lembongan',
    metaDescription: 'Sandy Bay / Sunset Beach dekat Devil’s Tears: cocok untuk santai, makan, dan sunset setelah mengunjungi tebing.',
    lead: 'Sandy Bay (sering disebut Sunset Beach) adalah area pantai menghadap barat dekat Devil’s Tears, nyaman untuk makan dan menonton matahari terbenam.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'posisi',
        heading: 'Posisi dan peran',
        paragraphs: [
          'Sandy Bay berada di sisi barat-daya, dekat Devil’s Tears dan Dream Beach. Area ini lebih terbuka untuk santai dibanding tebing semburan.',
          'Banyak pengunjung menyambungkan Devil’s Tears dengan makan sore di Sandy Bay.',
        ],
      },
      {
        id: 'makan',
        heading: 'Pilihan makan',
        paragraphs: [
          'Area Sandy Bay punya warung dan kafe yang menghadap ke barat. Kami tidak memverifikasi nama, jam, dan harga masing-masing; konfirmasikan saat tiba.',
          'Baca halaman kafe Sandy Bay untuk catatan lebih rinci.',
        ],
      },
      {
        id: 'sunset',
        heading: 'Sunset',
        paragraphs: [
          'Karena menghadap barat, Sandy Bay cocok untuk sunset setelah Devil’s Tears. Jangan mendekat ke tepi tebing saat senja gelap.',
        ],
        callout: {
          tone: 'info',
          text: 'Kami tidak memverifikasi bisnis tertentu di Sandy Bay dan tidak menerima komisi. Konfirmasi langsung di lokasi.',
        },
      },
    ],
    faqs: [
      { q: 'Apa bedanya Sandy Bay dan Sunset Beach?', a: 'Sering merujuk area pantai barat yang sama di sekitar Devil’s Tears. Penamaan lokal bisa bervariasi.' },
      { q: 'Apakah cocok untuk sunset?', a: 'Ya, menghadap barat dan ruang lebih terbuka dibanding tebing. Cocok dilanjutkan setelah Devil’s Tears.' },
      { q: 'Apakah ada restoran?', a: 'Ada warung dan kafe, tetapi kami tidak memverifikasi nama/jam. Konfirmasikan saat tiba.' },
    ],
    related: ['kafe-sandy-bay', 'sunset-devils-tear', 'dream-beach', 'makan-malam-setelah-sunset'],
  },
  {
    slug: 'mushroom-bay',
    category: 'sekitar',
    title: 'Mushroom Bay Nusa Lembongan',
    metaTitle: 'Mushroom Bay Nusa Lembongan',
    metaDescription: 'Mushroom Bay: teluk di selatan Lembongan dengan warung, pantai, dan titik turun kapal. Hubungannya dengan Devil’s Tears.',
    lead: 'Mushroom Bay adalah teluk di sisi selatan pulau dengan area pantai dan warung, sekaligus titik turun kapal. Lebih dekat garis lurus ke Devil’s Tears.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'posisi',
        heading: 'Posisi dan peran',
        paragraphs: [
          'Mushroom Bay terletak di selatan pulau dan sering jadi titik turun kapal selain Jungutbatu. Dari sini ke Devil’s Tears lebih pendek secara garis lurus.',
          'Area ini punya pantai dan warung, nyaman untuk makan atau beristirahat.',
        ],
      },
      {
        id: 'makan',
        heading: 'Pilihan makan',
        paragraphs: [
          'Beberapa warung berada di area Mushroom Bay. Kami tidak memverifikasi nama, jam, dan harga; konfirmasikan saat tiba.',
          'Baca halaman warung lokal dan makan malam untuk ide menyambung.',
        ],
      },
      {
        id: 'ke-tebing',
        heading: 'Ke Devil’s Tears',
        paragraphs: [
          'Meski lebih dekat, tetap butuh sambungan darat. Baca halaman dari Mushroom Bay untuk rincinya.',
        ],
        callout: {
          tone: 'info',
          text: 'Kami tidak bekerja sama dengan bisnis di Mushroom Bay. Konfirmasi langsung di lokasi untuk jam dan harga.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah Mushroom Bay titik turun kapal?', a: 'Ya, selain Jungutbatu. Dari sini ke Devil’s Tears lebih dekat garis lurus.' },
      { q: 'Apakah ada warung?', a: 'Ada beberapa, tetapi kami tidak memverifikasi nama/jam. Konfirmasikan saat tiba.' },
      { q: 'Boleh berenang?', a: 'Kami tidak memverifikasi status renang resmi. Berhati-hatilah terhadap arus dan ombak.' },
    ],
    related: ['dari-mushroom-bay', 'warung-lokal-lembongan', 'makan-malam-setelah-sunset', 'sehari-lembongan'],
  },
  {
    slug: 'sunset-point',
    category: 'sekitar',
    title: 'Sunset Point Nusa Lembongan',
    metaTitle: 'Sunset Point Lembongan',
    metaDescription: 'Titik pandang matahari terbenam di dekat Devil’s Tears: mengapa lebih aman daripada tebing semburan untuk menonton sunset.',
    lead: 'Sunset Point adalah titik pandang matahari terbenang di area barat-daya, lebih aman untuk menonton sunset daripada berdiri di tepi tebing Devil’s Tears.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'peran',
        heading: 'Mengapa lebih cocok sunset',
        paragraphs: [
          'Devil’s Tears adalah tebing berbahaya, bukan tempat duduk menonton matahari terbenam. Sunset Point di area barat-daya memberi pandangan lebih terbuka.',
          'Banyak pengunjung menyambungkan Devil’s Tears dengan sunset di titik ini.',
        ],
      },
      {
        id: 'aman',
        heading: 'Keamanan',
        paragraphs: [
          'Meski lebih terbuka, tetap jauhi tepi tebing saat senja gelap. Batu licin dan ombak sulit dilihat tanpa cahaya.',
          'Baca halaman sunset Devil’s Tears untuk konteks.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jangan memilih tebing semburan sebagai tempat sunset. Gunakan titik pandang yang ruangnya lebih terbuka.',
        },
      },
    ],
    faqs: [
      { q: 'Di mana tempat terbaik sunset di Lembongan barat?', a: 'Sunset Point di area barat-daya lebih terbuka dan aman daripada tebing Devil’s Tears untuk menonton matahari terbenam.' },
      { q: 'Apakah harus bayar?', a: 'Kami tidak memverifikasi status tiket titik ini. Konfirmasikan saat tiba.' },
      { q: 'Berapa lama dari Devil’s Tears?', a: 'Sangat dekat di sisi barat-daya; konfirmasikan jalur sah saat tiba.' },
    ],
    related: ['sunset-devils-tear', 'sandy-bay', 'makan-malam-setelah-sunset', 'waktu-terbaik-berkunjung'],
  },
  {
    slug: 'yellow-bridge',
    category: 'sekitar',
    title: 'Yellow Bridge (Jembatan Kuning)',
    metaTitle: 'Yellow Bridge Lembongan–Ceningan',
    metaDescription: 'Yellow Bridge menghubungkan Nusa Lembongan dan Nusa Ceningan. Pelajari akses, aturan kendaraan, dan apakah masuk rute Devil’s Tears.',
    lead: 'Yellow Bridge (Jembatan Kuning) menghubungkan Lembongan dengan Ceningan. Bagi sebagian wisatawan, ini bisa menjadi bagian rute pulau yang lebih luas.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'fungsi',
        heading: 'Menghubungkan dua pulau',
        paragraphs: [
          'Yellow Bridge menghubungkan Nusa Lembongan dan Nusa Ceningan. Jembatan ini sempit dan sering berlaku aturan satu arah bergantian untuk kendaraan.',
          'Bagi pengunjung yang menyewa motor, ini jalur menuju atraksi di Ceningan (seperti tebing lain atau pantai).',
        ],
      },
      {
        id: 'atur',
        heading: 'Aturan dan kehati-hatian',
        paragraphs: [
          'Kami tidak memverifikasi detail aturan lalu lintas terkini; tanyakan kepada warga atau penginapan. Jangan memaksa melawan arus.',
          'Pejalan kaki biasanya bisa melintas, tetapi beri ruang bagi kendaraan.',
        ],
      },
      {
        id: 'rute',
        heading: 'Apakah masuk rute Devil’s Tears?',
        paragraphs: [
          'Yellow Bridge bukan bagian langsung dari Devil’s Tears, tetapi bisa menjadi tambahan bila Anda ingin memperluas eksplorasi ke Ceningan.',
          'Jangan menganggap Ceningan sebagai “jalan kaki dari Devil’s Tears”; butuh menyeberang jembatan dan menempuh jarak darat.',
        ],
        callout: {
          tone: 'info',
          text: 'Kami tidak memverifikasi status hukum atau tarif jembatan. Konfirmasikan aturan saat tiba.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah Devil’s Tears di Ceningan?', a: 'Tidak. Devil’s Tears di Nusa Lembongan. Yellow Bridge menghubungkannya dengan Ceningan, bukan ke tebing itu sendiri.' },
      { q: 'Boleh jalan kaki menyeberang?', a: 'Biasanya ya, tetapi beri ruang kendaraan. Kami tidak memverifikasi aturan terkini; tanyakan warga setempat.' },
      { q: 'Apakah perlu bayar?', a: 'Kami tidak memverifikasi tarif jembatan. Konfirmasikan saat tiba.' },
    ],
    related: ['sehari-lembongan', 'sewa-motor-atau-sopir', 'jungutbatu-beach'],
  },
  {
    slug: 'mangrove-forest',
    category: 'sekitar',
    title: 'Hutan Bakau (Mangrove) Lembongan',
    metaTitle: 'Mangrove Nusa Lembongan',
    metaDescription: 'Hutan bakau di Lembongan: aktivitas perahu bakau, lokasi di sisi utara, dan hubungannya dengan rute Devil’s Tears.',
    lead: 'Hutan bakau Lembongan berada di sisi utara/selat, berbeda arah dari Devil’s Tears di barat-daya. Menarik sebagai aktivitas air tenang yang kontras dengan tebing berombak.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'lokasi',
        heading: 'Lokasi',
        paragraphs: [
          'Hutan bakau berada di sisi utara pulau, dekat selat yang memisahkan Lembongan dan Ceningan. Berbeda arah dari Devil’s Tears.',
          'Aktivitas biasanya berupa perahu kecil menyusuri air tenang di antara akar bakau.',
        ],
      },
      {
        id: 'aktivitas',
        heading: 'Aktivitas',
        paragraphs: [
          'Perahu bakau menawarkan suasana tenang dan fotografi alam. Kami tidak memverifikasi operator atau tarif; konfirmasikan saat tiba.',
          'Cocok sebagai aktivitas pelengkap bila Anda ingin variasi selain tebing dan pantai.',
        ],
        callout: {
          tone: 'info',
          text: 'Hutan bakau bukan bagian langsung Devil’s Tears. Masukkan sebagai tambahan rute pulau, bukan jalan kaki dari tebing.',
        },
      },
    ],
    faqs: [
      { q: 'Di mana hutan bakau Lembongan?', a: 'Di sisi utara pulau dekat selat ke Ceningan, berbeda arah dari Devil’s Tears.' },
      { q: 'Apakah perlu sewa perahu?', a: 'Aktivitas biasanya pakai perahu kecil; kami tidak memverifikasi operator/tarif. Konfirmasikan saat tiba.' },
      { q: 'Berapa lama di sana?', a: 'Tergantung tur perahu; tanyakan penyedia lokal.' },
    ],
    related: ['budidaya-rumput-laut', 'jungutbatu-beach', 'sehari-lembongan'],
  },
  {
    slug: 'budidaya-rumput-laut',
    category: 'sekitar',
    title: 'Budidaya Rumput Laut Lembongan',
    metaTitle: 'Rumput Laut Lembongan',
    metaDescription: 'Budidaya rumput laut sebagai ekonomi lokal Lembongan: di mana melihatnya, musim panen, dan makna budaya bagi warga.',
    lead: 'Lembongan dikenal dengan budidaya rumput laut (seaweed). Ini warisan ekonomi lokal yang bisa Anda amati, bukan atraksi berpagar.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'ekonomi',
        heading: 'Ekonomi lokal',
        paragraphs: [
          'Rumput laut dibudidayakan warga di perairan dangkal, sering terlihat sebagai jaring atau tali di area tertentu pulau. Ini sumber penghidupan nyata, bukan dekorasi wisata.',
          'Pengunjung bisa mengamati dari kejauhan atau saat menyewa perahu antar pulau.',
        ],
      },
      {
        id: 'musim',
        heading: 'Musim và pengamatan',
        paragraphs: [
          'Kami tidak memverifikasi kalender panen pasti; tanyakan kepada warga setempat bila ingin melihat aktivitas petik atau jemur.',
          'Jangan masuk ke area budidaya tanpa izin; hargai lahan kerja warga.',
        ],
        callout: {
          tone: 'info',
          text: 'Halaman ini membantu memahami lanskap Lembongan, bukan mengarahkan ke atraksi berbayar. Hormati area kerja warga.',
        },
      },
    ],
    faqs: [
      { q: 'Di mana melihat budidaya rumput laut?', a: 'Di perairan dangkal beberapa area pulau, sering terlihat sebagai jaring. Kami tidak memverifikasi titik pasti; tanyakan warga.' },
      { q: 'Apakah boleh mendekat?', a: 'Amati dari kejauhan. Jangan masuk area budidaya tanpa izin karena itu lahan kerja warga.' },
      { q: 'Apakah ada tur khusus?', a: 'Kami tidak memverifikasi tur khusus. Tanyakan penyedia perahu lokal bila tertarik.' },
    ],
    related: ['mangrove-forest', 'jungutbatu-beach', 'sehari-lembongan'],
  },
  {
    slug: 'jungutbatu-beach',
    category: 'sekitar',
    title: 'Jungutbatu Beach Nusa Lembongan',
    metaTitle: 'Jungutbatu Beach Lembongan',
    metaDescription: 'Jungutbatu Beach: pantai utama tempat kapal dari Sanur tiba, dengan warung, penginapan, dan koneksi ke Devil’s Tears.',
    lead: 'Jungutbatu adalah pantai utama di sisi timur-laut tempat kapal dari Sanur biasa tiba, sekaligus pusat warung dan penginapan.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'peran',
        heading: 'Pusat kedatangan',
        paragraphs: [
          'Sebagian besar kapal dari Sanur turun di Jungutbatu. Area ini punya deretan warung, penginapan, dan jasa sewa motor/sopir.',
          'Dari sini ke Devil’s Tears cukup jauh (barat-daya), perlu sambungan darat.',
        ],
      },
      {
        id: 'fasilitas',
        heading: 'Fasilitas',
        paragraphs: [
          'Pilihan makan dan menginap lebih lengkap di Jungutbatu dibanding sisi barat-daya. Kami tidak memverifikasi nama/jam bisnis; konfirmasikan saat tiba.',
          'Baca halaman menginap dan warung lokal untuk ide.',
        ],
      },
      {
        id: 'hubungan',
        heading: 'Ke Devil’s Tears',
        paragraphs: [
          'Jungutbatu adalah titik awal, bukan tujuan akhir tebing. Baca halaman dari pelabuhan Jungutbatu untuk sambungan darat.',
        ],
        callout: {
          tone: 'info',
          text: 'Kami tidak bekerja sama dengan bisnis di Jungutbatu. Konfirmasi langsung di lokasi.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah Jungutbatu tempat kapal tiba?', a: 'Ya, sebagian besar kapal dari Sanur turun di sini. Mushroom Bay adalah titik lain.' },
      { q: 'Apakah banyak penginapan?', a: 'Area ini punya pilihan penginapan dan warung lebih lengkap; konfirmasikan nama/jam saat tiba.' },
      { q: 'Berapa lama ke Devil’s Tears?', a: 'Cukup jauh (barat-daya); perlu sewa motor atau sopir. Konfirmasikan durasi kepada penyedia.' },
    ],
    related: ['dari-pelabuhan-jungutbatu', 'menginap-dekat-devils-tear', 'warung-lokal-lembongan', 'sehari-lembongan'],
  },

  // ===================== D. KULINER (5) =====================
  {
    slug: 'restoran-dekat-devils-tear',
    category: 'kuliner',
    title: 'Restoran & Warung Dekat Devil’s Tears',
    metaTitle: 'Restoran Dekat Devil’s Tears',
    metaDescription: 'Di mana makan setelah Devil’s Tears: area Sandy Bay, Dream Beach, dan Jungutbatu, dengan catatan bahwa nama/jam perlu dikonfirmasi.',
    lead: 'Devil’s Tears sendiri tidak punya restoran. Tempat makan terdekat ada di Sandy Bay, Dream Beach, dan lebih jauh di Jungutbatu.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'terdekat',
        heading: 'Pilihan terdekat',
        paragraphs: [
          'Area Sandy Bay dan Dream Beach di sisi barat-daya punya warung/kafe yang bisa dijangkau setelah tebing, sering dihubungkan jalan kaki atau motor pendek.',
          'Kami tidak memverifikasi nama, jam, dan harga masing-masing; konfirmasikan saat tiba karena status bisnis bisa berubah.',
        ],
      },
      {
        id: 'jenis',
        heading: 'Jenis makanan',
        paragraphs: [
          'Umumnya warung Indonesia dan kafe pantai dengan hidangan ringan hingga makanan utama. Sesuai untuk santai setelah melihat semburan.',
          'Baca halaman kafe Sandy Bay và warung lokal untuk variasi.',
        ],
      },
      {
        id: 'tips',
        heading: 'Tips memilih',
        bullets: [
          'Pilih tempat dengan banyak pengunjung lokal sebagai tanda segar.',
          'Konfirmasikan harga sebelum pesan.',
          'Simpan tunai; pembayaran digital belum tentu tersedia.',
        ],
        callout: {
          tone: 'warn',
          text: 'Kami tidak memverifikasi nama bisnis tertentu dan tidak menerima komisi. Jangan menganggap daftar ini sebagai rekomendasi berbayar.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah ada restoran di tebing Devil’s Tears?', a: 'Tidak. Tempat makan terdekat ada di Sandy Bay dan Dream Beach, beberapa menit dari tebing.' },
      { q: 'Warung apa yang buka?', a: 'Kami tidak memverifikasi nama/jam. Konfirmasikan saat tiba karena status bisnis berubah.' },
      { q: 'Apakah harga mahal?', a: 'Bervariasi; konfirmasikan sebelum pesan. Bawa tunai untuk berjaga.' },
    ],
    related: ['sandy-bay', 'kafe-sandy-bay', 'dream-beach', 'warung-lokal-lembongan'],
  },
  {
    slug: 'kafe-sandy-bay',
    category: 'kuliner',
    title: 'Kafe di Sandy Bay',
    metaTitle: 'Kafe Sandy Bay Lembongan',
    metaDescription: 'Kafe dan warung Sandy Bay untuk santai, makan sore, dan sunset setelah Devil’s Tears. Nama/jam perlu dikonfirmasi.',
    lead: 'Sandy Bay punya beberapa kafe dan warung menghadap barat, nyaman untuk makan setelah tebing dan menunggu sunset.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'suasana',
        heading: 'Suasana',
        paragraphs: [
          'Area ini lebih terbuka dibanding tebing, cocok bersantai dengan minuman atau makanan ringan sambil menunggu matahari terbenam.',
          'Kami tidak memverifikasi nama, jam, dan harga kafe tertentu; konfirmasikan saat tiba.',
        ],
      },
      {
        id: 'waktu',
        heading: 'Waktu terbaik',
        paragraphs: [
          'Sore menjelang sunset adalah momen populer. Datang lebih awal bila ingin tempat duduk nyaman.',
          'Baca halaman sunset Devil’s Tears dan makan malam setelah sunset untuk menyambung rencana.',
        ],
      },
      {
        id: 'hati',
        heading: 'Catatan jujur',
        paragraphs: [
          'Kami tidak bekerja sama dengan bisnis apa pun di Sandy Bay. Daftar ini bertujuan membantu lokasi, bukan rekomendasi berbayar.',
        ],
        callout: {
          tone: 'info',
          text: 'Konfirmasikan jam operasional karena bisnis pantai bisa berubah musim atau cuaca.',
        },
      },
    ],
    faqs: [
      { q: 'Kafe apa yang ada di Sandy Bay?', a: 'Ada beberapa warung/kafe pantai; kami tidak memverifikasi nama/jam. Konfirmasikan saat tiba.' },
      { q: 'Apakah cocok untuk sunset?', a: 'Ya, menghadap barat dan lebih terbuka. Cocok setelah Devil’s Tears.' },
      { q: 'Apakah perlu reservasi?', a: 'Kami tidak memverifikasi kebijakan reservasi. Tanyakan langsung bila khawatir penuh.' },
    ],
    related: ['sandy-bay', 'restoran-dekat-devils-tear', 'makan-malam-setelah-sunset', 'sunset-devils-tear'],
  },
  {
    slug: 'warung-lokal-lembongan',
    category: 'kuliner',
    title: 'Warung Lokal di Lembongan',
    metaTitle: 'Warung Lokal Nusa Lembongan',
    metaDescription: 'Warung Indonesia asli di Lembongan untuk makan hemat dan otentik, tersebar di Jungutbatu, Mushroom Bay, dan sekitar.',
    lead: 'Warung lokal memberi makanan Indonesia otentik dan hemat. Mereka tersebar di Jungutbatu, Mushroom Bay, dan area lain, bukan hanya di barat-daya.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'lokasi',
        heading: 'Di mana menemukannya',
        paragraphs: [
          'Jungutbatu dan Mushroom Bay punya deretan warung dengan nasi campur, mie, dan hidangan laut sederhana.',
          'Kami tidak memverifikasi nama/jam; tanyakan penginapan atau warga untuk yang sedang buka.',
        ],
      },
      {
        id: 'harga',
        heading: 'Harga dan pembayaran',
        paragraphs: [
          'Warung umumnya lebih hemat daripada kafe pantai. Konfirmasikan harga sebelum pesan dan siapkan tunai.',
          'Pembayaran digital belum tentu tersedia di warung kecil.',
        ],
      },
      {
        id: 'tips',
        heading: 'Tips',
        bullets: [
          'Pilih warung dengan perputaran pengunjung tinggi agar makanan segar.',
          'Tanya menu harian karena stok laut bervariasi.',
          'Hormati etika warung keluarga.',
        ],
        callout: {
          tone: 'info',
          text: 'Kami tidak memverifikasi bisnis tertentu dan tidak menerima komisi. Konfirmasikan langsung di lokasi.',
        },
      },
    ],
    faqs: [
      { q: 'Di mana warung termurah?', a: 'Warung lokal di Jungutbatu/Mushroom Bay umumnya hemat; kami tidak memverifikasi nama/jam. Tanyakan warga.' },
      { q: 'Apakah halal?', a: 'Sebagian besar warung Indonesia halal; konfirmasikan bila penting bagi Anda.' },
      { q: 'Apakah bisa makan pagi?', a: 'Beberapa warung buka pagi; kami tidak memverifikasi jam. Baca halaman sarapan sebelum Devil’s Tears.' },
    ],
    related: ['sarapan-sebelum-devils-tear', 'jungutbatu-beach', 'mushroom-bay', 'hemat-biaya'],
  },
  {
    slug: 'sarapan-sebelum-devils-tear',
    category: 'kuliner',
    title: 'Sarapan Sebelum ke Devil’s Tears',
    metaTitle: 'Sarapan Sebelum Devil’s Tears',
    metaDescription: 'Opsi sarapan di Lembongan sebelum mengunjungi tebing: di penginapan, warung pagi, atau bawa bekal sendiri.',
    lead: 'Makan pagi sebelum ke tebing membantu energi untuk jalan kaki dan panas matahari. Berikut opsi di Lembongan.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'penginapan',
        heading: 'Sarapan di penginapan',
        paragraphs: [
          'Banyak penginapan di Jungutbatu dan area lain menyediakan sarapan. Tanyakan saat memesan kamar.',
          'Ini opsi paling mudah bila Anda menginap di pulau.',
        ],
      },
      {
        id: 'warung',
        heading: 'Warung pagi',
        paragraphs: [
          'Beberapa warung buka pagi dengan nasi, mie, atau roti sederhana. Kami tidak memverifikasi nama/jam; tanyakan warga setempat.',
          'Baca halaman warung lokal untuk konteks.',
        ],
      },
      {
        id: 'bekal',
        heading: 'Bawa bekal',
        paragraphs: [
          'Karena fasilitas di tebing belum terverifikasi, membawa air dan camilan sendiri adalah aman.',
          'Jangan tinggalkan sampah di tebing; bawa kembali kemasan.',
        ],
        callout: {
          tone: 'warn',
          text: 'Air minum penting. Tebing terbuka dan panas; dehidrasi mudah terjadi sebelum Anda sadar.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah ada sarapan dekat tebing?', a: 'Tidak terverifikasi di tebing. Sarapan di penginapan atau warung pagi di Jungutbatu/Mushroom Bay lebih masuk akal.' },
      { q: 'Boleh bawa makanan sendiri?', a: 'Ya, dan disarankan. Bawa air serta camilan, lalu bawa pulang sampah.' },
      { q: 'Jam berapa sebaiknya sarapan?', a: 'Cukup awal agar punya waktu sebelum panas dan sebelum menyusun rute pulau.' },
    ],
    related: ['warung-lokal-lembongan', 'menginap-dekat-devils-tear', 'waktu-terbaik-berkunjung'],
  },
  {
    slug: 'makan-malam-setelah-sunset',
    category: 'kuliner',
    title: 'Makan Malam Setelah Sunset',
    metaTitle: 'Makan Malam Setelah Sunset Lembongan',
    metaDescription: 'Opsi makan malam setelah sunset di Lembongan, dan bagaimana menyesuaikannya dengan jadwal kapal pulang.',
    lead: 'Setelah sunset di barat-daya, Anda perlu merencanakan makan malam sekaligus waktu pulang. Halaman ini membantu.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'lokasi',
        heading: 'Di mana makan',
        paragraphs: [
          'Sandy Bay dan Dream Beach di barat-daya punya kafe/warung untuk makan sore, tetapi area ini lebih jauh dari pelabuhan.',
          'Jungutbatu punya lebih banyak pilihan makan malam dan lebih dekat ke pelabuhan bila Anda harus pulang hari itu.',
        ],
      },
      {
        id: 'waktu',
        heading: 'Sesuaikan dengan kapal',
        paragraphs: [
          'Jika harus mengejar kapal pulang hari itu, hitung waktu makan, transfer darat, dan cadangan pelabuhan.',
          'Baca halaman kapal pulang dan waktu cadangan.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jangan makan terlalu lama di barat-daya bila kapal terakhir mendesak. Pilih Jungutbatu bila perlu pulang hari itu.',
        },
      },
    ],
    faqs: [
      { q: 'Di mana makan malam setelah sunset?', a: 'Sandy Bay/Dream Beach untuk suasana pantai, Jungutbatu untuk lebih banyak pilihan dan dekat pelabuhan.' },
      { q: 'Boleh makan lalu pulang hari itu?', a: 'Bisa, asal hitung waktu makan + transfer + cadangan pelabuhan. Jangan menunda di pantai.' },
      { q: 'Apakah warung buka malam?', a: 'Sebagian warung di Jungutbatu buka malam; kami tidak memverifikasi jam. Konfirmasikan saat tiba.' },
    ],
    related: ['sunset-devils-tear', 'kafe-sandy-bay', 'jungutbatu-beach', 'kapal-pulang-dan-waktu-cadangan'],
  },

  // ===================== E. MENGINAP (1) =====================
  {
    slug: 'menginap-dekat-devils-tear',
    category: 'menginap',
    title: 'Menginap di Sekitar Devil’s Tears',
    metaTitle: 'Menginap di Lembongan: Sandy Bay vs Mushroom Bay',
    metaDescription: 'Logika memilih area menginap: Sandy Bay dekat tebing, Mushroom Bay dekat kapal, Jungutbatu lengkap. Apakah sepadan bermalam?',
    lead: 'Devil’s Tears sendiri tidak punya hotel. Memilih area menginap tergantung apakah Anda ingin dekat tebing atau dekat pelabuhan dan fasilitas.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'area',
        heading: 'Tiga area utama',
        paragraphs: [
          'Sandy Bay/Dream Beach: paling dekat tebing barat-daya, cocok jika fokus ke Devil’s Tears dan sunset, tetapi pilihan lebih terbatas.',
          'Mushroom Bay: dekat titik turun kapal selatan, seimbang antara pantai dan akses.',
          'Jungutbatu: paling lengkap warung dan penginapan, dekat pelabuhan timur-laut, tetapi jauh dari tebing.',
        ],
      },
      {
        id: 'sepadan',
        heading: 'Apakah sepadan bermalam?',
        paragraphs: [
          'Bermalam masuk akal bila Anda ingin eksplorasi Lembongan luas (Ceningan, mangrove, pantai) tanpa terburu-buru mengejar kapal.',
          'Bagi kunjungan sangat singkat, pulang hari dari Bali bisa lebih praktis bila jadwal kapal mendukung.',
        ],
      },
      {
        id: 'tanpa-motor',
        heading: 'Bila tidak menyewa motor',
        paragraphs: [
          'Pilih penginapan di area barat-daya (Sandy Bay/Dream Beach) agar bisa jalan kaki ke tebing, atau di Jungutbatu dengan sopir lokal.',
          'Baca halaman tanpa sewa motor dan menginap untuk menyusun.',
        ],
        callout: {
          tone: 'info',
          text: 'Kami tidak memverifikasi hotel tertentu dan tidak menerima komisi. Pilih berdasarkan lokasi relatif ke tebing dan pelabuhan.',
        },
      },
    ],
    faqs: [
      { q: 'Area mana paling dekat Devil’s Tears?', a: 'Sandy Bay/Dream Beach di barat-daya paling dekat tebing. Jungutbatu paling jauh tetapi paling lengkap fasilitas.' },
      { q: 'Apakah sepadan menginap?', a: 'Ya bila ingin eksplorasi pulau luas. Kunjungan sangat singkat bisa pulang hari dari Bali bila kapal mendukung.' },
      { q: 'Lebih baik di mana tanpa motor?', a: 'Sandy Bay/Dream Beach untuk jalan kaki ke tebing, atau Jungutbatu dengan sopir lokal.' },
    ],
    related: ['sandy-bay', 'mushroom-bay', 'jungutbatu-beach', 'tanpa-sewa-motor', 'dari-sanur'],
  },
];
