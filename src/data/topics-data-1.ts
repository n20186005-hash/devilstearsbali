import type { TopicContent } from './topics';

export const TOPICS_A: TopicContent[] = [
  // ===================== A. PANDUAN (12) =====================
  {
    slug: 'nama-pantai-batu-belek',
    category: 'panduan',
    title: 'Nama Devil’s Tears dan Pantai Batu Belek',
    metaTitle: 'Devil’s Tears vs Pantai Batu Belek: Nama & Sejarah',
    metaDescription: 'Mengapa Devil’s Tears juga disebut Pantai Batu Belek dalam arsip Pemkab Klungkung, dan apa bedanya dengan nama lain di Nusa Lembongan.',
    lead: 'Devil’s Tears dan Pantai Batu Belek merujuk pada bentang tebing yang sama di Nusa Lembongan. Berikut penjelasan nama, status resmi dan cara mencarinya di peta.',
    updated: '29 Oktober 2026',
    facts: [
      { label: 'Nama populer', value: 'Devil’s Tear / Devil’s Tears' },
      { label: 'Nama arsip', value: 'Pantai Batu Belek' },
      { label: 'Lokasi', value: 'Nusa Lembongan, Klungkung, Bali' },
    ],
    sections: [
      {
        id: 'nama',
        heading: 'Dua nama untuk satu tebing',
        paragraphs: [
          'Di kalangan wisatawan internasional tempat ini dikenal sebagai Devil’s Tear atau Devil’s Tears (kadang ditulis Devil Tear). Dalam arsip Pemerintah Kabupaten Klungkung, lokasi serupa dirujuk sebagai Pantai Batu Belek.',
          'Perbedaan penamaan tidak mengubah objek yang dimaksud: tebing pesisir di sisi barat-daya Nusa Lembongan tempat ombak menghantam batu dan memancarkan semburan air.',
        ],
      },
      {
        id: 'arsip',
        heading: 'Apa yang tertulis di arsip pemerintah',
        paragraphs: [
          'Arsip Pemkab Klungkung membahas Pantai Batu Belek dan rencana fasilitas di sekitarnya. Tulisan tersebut berguna sebagai bukti bahwa nama “Batu Belek” digunakan secara resmi, tetapi bukan konfirmasi bahwa fasilitas yang disebutkan sudah selesai atau beroperasi.',
          'Jangan menganggap artikel arsip sebagai jadwal, harga tiket, atau jaminan layanan hari ini.',
        ],
      },
      {
        id: 'cari',
        heading: 'Cara mencarinya di peta',
        paragraphs: [
          'Gunakan istilah “Devil’s Tear” pada aplikasi peta saat mencari rute; banyak pengemudi lokal juga mengenali nama ini. Simpan pin lokasi sebelum tiba karena sinyal di beberapa titik tebing bisa lemah.',
          'Koordinat orientasi yang tercantum di beranda kami adalah -8.690565, 115.4302884. Angka itu membantu memahami arah, bukan jaminan titik turun atau jalur kaki yang bisa dilewati.',
        ],
        callout: {
          tone: 'warn',
          text: 'Nama “Devil’s Tears” kadang digunakan secara longgar untuk seluruh sisi barat-daya pulau. Pastikan dujung Anda adalah titik tebing semburan, bukan hanya area pantai umum.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah Devil’s Tears dan Pantai Batu Belek tempat yang sama?', a: 'Ya, keduanya merujuk pada tebing semburan ombak di Nusa Lembongan. “Batu Belek” adalah nama yang muncul dalam arsip pemerintah daerah.' },
      { q: 'Apa nama resminya di peta?', a: 'Peta pihak ketiga biasanya menampilkan “Devil’s Tear”. Arsip Pemkab Klungkung menggunakan “Pantai Batu Belek”. Keduanya kami anggap objek yang sama.' },
      { q: 'Apakah tempat ini memiliki situs atau telepon pengelola?', a: 'Cuplikan peta per 29 Oktober 2026 tidak mencantumkan telepon atau situs resmi. Panduan ini independen dan bukan situs pengelola.' },
    ],
    related: ['fenomena-ombak-devils-tear', 'keamanan-tebing-devils-tear', 'jam-kunjungan'],
  },
  {
    slug: 'fenomena-ombak-devils-tear',
    category: 'panduan',
    title: 'Fenomena Ombak Devil’s Tears',
    metaTitle: 'Fenomena Semburan Ombak Devil’s Tears',
    metaDescription: 'Bagaimana ombak Devil’s Tears membentuk semburan air dan pelangi, serta mengapa waktu dan cuaca tidak bisa dijanjikan.',
    lead: 'Semburan air di Devil’s Tears terjadi ketika ombak besar menghantam celah dan rongga batu karang. Berikut cara kerjanya dan mengapa Anda tidak bisa menjadwalkannya.',
    updated: '29 Oktober 2026',
    facts: [
      { label: 'Jenis tempat', value: 'Tebing karang terbuka' },
      { label: 'Aktivitas air', value: 'Semburan & percikan ombak' },
    ],
    sections: [
      {
        id: 'cara',
        heading: 'Mengapa air memancar ke atas',
        paragraphs: [
          'Tebing di sini memiliki celah dan rongga batu. Saat ombak mencapai kecepatan dan sudut tertentu, air terperangkap lalu terdorong keluar melalui celah sempit, menciptakan semburan yang bisa menjulang beberapa meter.',
          'Cahaya matahari sudut rendah (pagi atau menjelang sore) sering memunculkan pelangi di percikan. Itu efek optik biasa, bukan pertunjukan yang dijadwalkan.',
        ],
      },
      {
        id: 'faktor',
        heading: 'Faktor yang memengaruhi semburan',
        paragraphs: [
          'Ketinggian dan arah ombak, angin, serta pasang-surut menentukan apakah semburan terlihat kuat. Tidak ada rumus pasti; hari yang sama bisa berbeda dari satu jam ke jam berikutnya.',
          'Ombak besar bukan jaminan foto bagus dan bukan ajakan mendekat. Semakin besar ombak, semakin berbahaya mendekati tepi.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jangan mengejar semburan dengan turun ke batu yang terkena ombak. Satu gelombang besar cukup untuk menyeret pengunjung ke air.',
        },
      },
      {
        id: 'mitos',
        heading: 'Apa yang tidak bisa dijanjikan',
        paragraphs: [
          'Tidak ada pihak yang menjamin jam tertentu untuk semburan, pelangi, atau kondisi laut tenang. Video yang Anda tonton mungkin diambil saat ombak sedang pas, bukan kondisi harian.',
          'Gunakan prakiraan resmi (BMKG maritim) untuk memahami tinggi gelombang umum, tetapi prakiraan itu bukan jaminan keselamatan di tebing.',
        ],
      },
    ],
    faqs: [
      { q: 'Jam berapa semburan paling kuat?', a: 'Tidak ada jam pasti. Semburan bergantung pada ombak dan pasang-surut, bukan jadwal. Jangan mendekat ke tepi hanya karena ingin melihat semburan.' },
      { q: 'Apakah pelangi selalu muncul?', a: 'Tidak. Pelangi muncul tergantung sudut matahari dan percikan, biasanya pagi atau sore, tetapi tidak dijamin setiap hari.' },
      { q: 'Apakah boleh berenang di area ini?', a: 'Tidak. Devil’s Tears adalah tebing karang dengan arus dan hantaman ombak kuat, bukan pantai berenang.' },
    ],
    related: ['pasang-surut-dan-cuaca', 'keamanan-tebing-devils-tear', 'waktu-terbaik-berkunjung', 'tips-foto-aman'],
  },
  {
    slug: 'keamanan-tebing-devils-tear',
    category: 'panduan',
    title: 'Keselamatan Tebing Devil’s Tears',
    metaTitle: 'Keselamatan Tebing Devil’s Tears: Aturan & Larangan',
    metaDescription: 'Bahaya utama Devil’s Tears: hantaman ombak, tebing licin dan pagar. Panduan menjaga jarak aman dan apa yang harus dihindari.',
    lead: 'Devil’s Tears menarik, tetapi tebingnya berbahaya. Halaman ini merangkum batas aman, larangan, dan tindakan jika kondisi memburuk.',
    updated: '29 Oktober 2026',
    facts: [
      { label: 'Bahaya utama', value: 'Hantaman ombak & tebing licin' },
      { label: 'Larangan', value: 'Lewati pagar, turun ke batu, masuk air' },
    ],
    sections: [
      {
        id: 'bahaya',
        heading: 'Bahaya yang sering diremehkan',
        paragraphs: [
          'Ombak di tebing ini bisa naik lebih tinggi dari perkiraan dan menyapu batu yang tampak kering. Batu karang licin, apalagi saat terkena percikan, sehingga mudah terpeleset.',
          'Pagar atau tali pembatas, bila ada, dipasang karena titik di baliknya berisiko. Keberadaan pagar juga tidak seragam di sepanjang tebing.',
        ],
      },
      {
        id: 'larangan',
        heading: 'Hal yang tidak boleh dilakukan',
        bullets: [
          'Jangan melampaui pagar, tali, atau batas yang ditandai.',
          'Jangan turun ke batu yang terkena ombak untuk foto atau video.',
          'Jangan masuk ke air, berenang, atau melompat dari tebing.',
          'Jangan mengangkangkan tubuh ke luar tepi untuk mengambil gambar.',
          'Jangan mengandalkan foto orang lain sebagai bukti bahwa titik tersebut aman.',
        ],
      },
      {
        id: 'resmi',
        heading: 'Catatan pemeriksaan pemerintah',
        paragraphs: [
          'Dinas Pariwisata Klungkung melaporkan pemeriksaan papan peringatan di sejumlah destinasi di Nusa Lembongan, termasuk Devil’s Tear, pada 30 Agustus 2025. Laporan itu mencatat kegiatan, bukan pernyataan bahwa kondisi saat ini aman.',
          'Keberadaan papan peringatan tidak menggantikan kewaspadaan Anda. Anggaplah setiap tepi tebing sebagai berisiko kecuali terbukti aman di lokasi.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jika ombak besar, hujan, atau akses ditutup, batalkan kunjungan ke tepi. Tidak ada foto yang sepadan dengan cedera serius.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah aman membawa anak ke Devil’s Tears?', a: 'Bisa dengan pengawasan sangat ketat dan menjaga jarak dari tepi. Baca halaman aksesibilitas dan keluarga untuk persiapan lebih lanjut.' },
      { q: 'Apakah boleh foto di dekat semburan?', a: 'Foto dari area yang diizinkan, jauh dari tepi dan percikan. Jangan mendekat hanya demi sudut gambar.' },
      { q: 'Apa yang harus dilakukan kalau ombak membesar?', a: 'Segera mundur ke area aman, jauhi batu basah, dan pertimbangkan menghentikan kunjungan. Ikuti arahan petugas atau penutupan setempat.' },
    ],
    related: ['tips-foto-aman', 'fenomena-ombak-devils-tear', 'pasang-surut-dan-cuaca', 'aksesibilitas-dan-keluarga'],
  },
  {
    slug: 'pasang-surut-dan-cuaca',
    category: 'panduan',
    title: 'Pasang Surut & Cuaca di Devil’s Tears',
    metaTitle: 'Pasang Surut & Cuaca Devil’s Tears',
    metaDescription: 'Membaca pasang-surut dan prakiraan BMKG untuk Devil’s Tears, serta mengapa prediksi tidak boleh dijadikan jaminan aman.',
    lead: 'Memahami pasang-surut dan gelombang membantu Anda menghindari hari berbahaya, tetapi tidak menggantikan kewaspadaan di tebing.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'pasang',
        heading: 'Pasang-surut memengaruhi akses batu',
        paragraphs: [
          'Saat air pasang tinggi, batu di kaki tebing lebih sering terkena ombak dan lebih licin. Saat surut, sebagian batu terbuka, tetapi celah semburan bisa berubah.',
          'Jangan menganggap surut berarti aman. Ombak besar bisa tetap menghantam batu yang tampak kering.',
        ],
      },
      {
        id: 'bmkg',
        heading: 'Gunakan prakiraan resmi',
        paragraphs: [
          'BMKG menyediakan informasi maritim (tinggi gelombang, arah angin, peringatan dini) melalui layanannya. Cek prakiraan untuk perairan Bali selatan dan selat sekitar Nusa Lembongan sebelum berangkat.',
          'Prakiraan gelombang umum membantu memilih hari yang lebih tenang, tetapi bukan jaminan kondisi di tebing pada jam tertentu.',
        ],
        callout: {
          tone: 'info',
          text: 'Prakiraan adalah alat perencanaan, bukan izin aman. Selalu lihat kondisi nyata di lokasi dan ikuti rambu.',
        },
      },
      {
        id: 'musim',
        heading: 'Musim vs hari',
        paragraphs: [
          'Secara umum periode kemarau (sekitar April–Oktober) cenderung lebih tenang untuk perjalanan laut dari Bali, tetapi ombak di tebing tetap bervariasi harian.',
          'Jangan menjadwalkan kedatangan hanya berdasarkan “musim terbaik”; konfirmasikan kondisi hari-hari mendekati keberangkatan.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah saya harus cek pasang-surut sebelum datang?', a: 'Sangat disarankan. Pasang tinggi membuat batu lebih licin dan lebih sering terkena ombak. Gunakan juga prakiraan gelombang BMKG.' },
      { q: 'Apakah prakiraan BMKG jaminan aman?', a: 'Bukan. Prakiraan membantu memilih hari lebih tenang, tetapi kondisi tebing tetap harus dilihat langsung di lokasi.' },
      { q: 'Bulan apa ombak paling tenang?', a: 'Tidak ada jaminan bulan tertentu. Kemarau cenderung lebih nyaman untuk penyeberangan, tetapi ombak tebing bervariasi harian.' },
    ],
    related: ['waktu-terbaik-berkunjung', 'keamanan-tebing-devils-tear', 'saat-hujan-atau-ombak-tinggi'],
  },
  {
    slug: 'waktu-terbaik-berkunjung',
    category: 'panduan',
    title: 'Waktu Terbaik Berkunjung ke Devil’s Tears',
    metaTitle: 'Kapan Waktu Terbaik ke Devil’s Tears',
    metaDescription: 'Rekomendasi waktu datang ke Devil’s Tears: pagi vs sore, hubungan dengan sunset, dan menghindari hari ombak berbahaya.',
    lead: 'Waktu terbaik tergantung tujuan Anda: melihat semburan, menghindari kerumunan, atau menyambungnya dengan sunset. Halaman ini membantu memilih.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'pagi',
        heading: 'Pagi hari',
        paragraphs: [
          'Pagi biasanya lebih sepi dan sinar matahari rendah sering memunculkan pelangi di percikan. Cahaya juga lebih lembut untuk foto dari jarak aman.',
          'Jika Anda menyambungkan perjalanan dengan aktivitas lain di Lembongan, datang pagi memberi ruang waktu lebih banyak.',
        ],
      },
      {
        id: 'sore',
        heading: 'Sore menjelang sunset',
        paragraphs: [
          'Banyak pengunjung datang sore untuk menyambung Devil’s Tears dengan sunset di area sekitar (Sunset Point atau Sandy Bay). Ini kombinasi populer tetapi lebih ramai.',
          'Cahaya sore membantu foto, tetapi jangan biarkan niat melihat sunset membuat Anda mendekat ke tepi saat ombak membesar.',
        ],
      },
      {
        id: 'hindari',
        heading: 'Kapan sebaiknya dihindari',
        bullets: [
          'Hari dengan peringatan gelombang tinggi dari BMKG.',
          'Saat hujan lebat atau tebing basah licin.',
          'Saat akses ditutup atau pagar/rambu menunjukkan bahaya.',
        ],
        callout: {
          tone: 'warn',
          text: 'Waktu “terbaik” bukan jaminan aman. Cek kondisi hari-hari mendekati keberangkatan dan batalkan bila laut memburuk.',
        },
      },
    ],
    faqs: [
      { q: 'Pagi atau sore lebih bagus?', a: 'Pagi lebih sepi dan sering ada pelangi; sore populer karena bisa dilanjutkan dengan sunset. Pilih berdasarkan rencana Anda, bukan janji semburan.' },
      { q: 'Apakah bisa malam hari?', a: 'Cuplikan peta mencantumkan 24 jam, tetapi itu bukan jaminan akses, penerangan, atau keselamatan malam. Kami tidak menyarankan mendekati tebing saat gelap.' },
      { q: 'Hari apa paling sepi?', a: 'Hari kerja cenderung lebih sepi dari akhir pekan dan hari libur nasional, tetapi tidak ada jaminan.' },
    ],
    related: ['sunset-devils-tear', 'durasi-kunjungan', 'pasang-surut-dan-cuaca'],
  },
  {
    slug: 'sunset-devils-tear',
    category: 'panduan',
    title: 'Sunset di Devil’s Tears',
    metaTitle: 'Menikmati Sunset Devil’s Tears & Sekitarnya',
    metaDescription: 'Apakah Devil’s Tears cocok untuk sunset, dan ke mana melanjutkan setelahnya: Sunset Point, Sandy Bay, dan tips keamanan saat sore.',
    lead: 'Devil’s Tears menghadap sisi barat-daya sehingga cocok untuk suasana sore, tetapi bukan tempat duduk menonton matahari terbenam. Berikut opsi menyambungnya dengan sunset.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'arah',
        heading: 'Arah dan keterbatasan',
        paragraphs: [
          'Tebing berada di sisi barat-daya pulau, sehingga cahaya sore menyinari percikan. Namun area ini adalah tebing berbahaya, bukan amphitheater sunset dengan tempat duduk.',
          'Menonton matahari terbenam sambil berdiri di tepi tebing saat ombak membesar sangat tidak disarankan.',
        ],
      },
      {
        id: 'lanjut',
        heading: 'Opsi sunset setelah Devil’s Tears',
        bullets: [
          'Sunset Point: titik pandang matahari terbenam di dekat area barat-daya.',
          'Sandy Bay / Sunset Beach: pantai menghadap barat dengan ruang lebih terbuka.',
          'Dream Beach: bisa dilanjutkan dengan sunset dari bibir pantai, jarak dekat.',
        ],
      },
      {
        id: 'aman',
        heading: 'Tips keamanan sore',
        paragraphs: [
          'Cahaya meredup membuat batu lebih sulit dilihat. Jangan berlama-lama di tepi saat senja mendekati gelap.',
          'Rencanakan jalur pulang sebelum gelap, terutama bila berjalan kaki atau menyewa motor.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah Devil’s Tears tempat terbaik untuk sunset?', a: 'Bukan untuk duduk menonton. Tebingnya berbahaya. Lebih baik saksikan sunset di Sunset Point atau Sandy Bay yang ruangnya lebih terbuka, lalu lewati Devil’s Tears saat cahaya masih ada.' },
      { q: 'Bolehkah foto sunset di tebing?', a: 'Boleh dari area aman dan jauh dari tepi. Jangan mendekat ke batu basah hanya untuk cahaya lebih bagus.' },
      { q: 'Ke mana setelah sunset?', a: 'Sandy Bay dan Dream Beach dekat dan punya pilihan makan malam. Baca halaman makan malam setelah sunset.' },
    ],
    related: ['sunset-point', 'sandy-bay', 'makan-malam-setelah-sunset', 'waktu-terbaik-berkunjung'],
  },
  {
    slug: 'harga-tiket-dan-retribusi',
    category: 'panduan',
    title: 'Harga Tiket & Retribusi Devil’s Tears',
    metaTitle: 'Harga Tiket & Retribusi Nusa Lembongan 2026',
    metaDescription: 'Bedakan retribusi kawasan Nusa Lembongan–Ceningan dari tiket atraksi, parkir, dan layanan lain. Jangan anggap satu harga mencakup semua.',
    lead: 'Tidak ada satu “tiket Devil’s Tears” yang kami konfirmasi. Yang sering tertukar adalah retribusi kawasan, tiket atraksi, dan biaya parkir atau transportasi.',
    updated: '29 Oktober 2026',
    facts: [
      { label: 'Retribusi kawasan (WN)', value: 'Rp25.000 dewasa / Rp15.000 anak 4–13' },
      { label: 'Berlaku', value: 'Mulai 1 September 2026 (WN)' },
    ],
    sections: [
      {
        id: 'retribusi',
        heading: 'Retribusi kawasan, bukan tiket atraksi',
        paragraphs: [
          'Laporan Pemerintah Klungkung 19 Agustus 2026 membahas retribusi kawasan Nusa Lembongan–Nusa Ceningan untuk wisatawan mancanegara: Rp25.000 dewasa dan Rp15.000 anak usia 4–13 tahun, dengan penyesuaian pemungutan mulai 1 September 2026.',
          'Angka tersebut adalah konteks kebijakan kawasan dan membedakan kawasan wisata dari daya tarik wisata (DTW). Bukan konfirmasi tiket tunggal Devil’s Tears atau biaya untuk semua kewarganegaraan.',
        ],
      },
      {
        id: 'beda',
        heading: 'Jangan campur tiga hal ini',
        bullets: [
          'Retribusi/levy kawasan: kebijakan daerah, mungkin berlaku saat masuk area pulau tertentu.',
          'Tiket atraksi atau loket: belum kami konfirmasi ada untuk Devil’s Tears.',
          'Parkir, sewa motor, sopir, dan makanan: layanan terpisah dengan tarif sendiri.',
        ],
        callout: {
          tone: 'warn',
          text: 'Sebelum membayar, tanyakan kategori pengunjung, cakupan, masa berlaku, bukti pembayaran, metode bayar, dan biaya tambahan. Jangan anggap satu pembayaran mencakup semua.',
        },
      },
      {
        id: 'warga',
        heading: 'Status pengunjung domestik',
        paragraphs: [
          'Laporan merinci kategori wisatawan mancanegara. Kami tidak memiliki salinan tarif resmi untuk pengunjung domestik; jangan asumsikan angka di atas berlaku sama.',
          'Tanyakan langsung kepada petugas atau sumber resmi kabupaten saat tiba.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa tiket masuk Devil’s Tears?', a: 'Kami tidak mengonfirmasi tiket tunggal. Laporan resmi membahas retribusi kawasan untuk WN dengan tarif tertentu; tanyakan cakupan dan kategori sebelum membayar.' },
      { q: 'Apakah retribusi sama dengan tiket?', a: 'Tidak. Retribusi kawasan berbeda dari tiket atraksi, parkir, atau layanan lain. Jangan anggap satu harga mencakup semua.' },
      { q: 'Apakah gratis untuk warga Indonesia?', a: 'Laporan yang kami baca merinci kategori WN. Kami tidak memverifikasi tarif domestik; konfirmasikan ke sumber resmi.' },
    ],
    related: ['jam-kunjungan', 'fasilitas-parkir-toilet', 'dari-sanur'],
  },
  {
    slug: 'jam-kunjungan',
    category: 'panduan',
    title: 'Jam Kunjungan Devil’s Tears',
    metaTitle: 'Jam Buka Devil’s Tears & Batas Akses',
    metaDescription: 'Cuplikan Google Maps mencantumkan 24 jam, tetapi itu bukan jaminan akses malam, petugas, atau keselamatan. Pahami batasnya.',
    lead: 'Peta pihak ketiga mencantumkan Devil’s Tears buka 24 jam, namun itu bukan izin masuk, penerangan, atau jaminan keselamatan. Halaman ini menjelaskannya.',
    updated: '29 Oktober 2026',
    facts: [
      { label: 'Cuplikan peta', value: '24 jam (pihak ketiga)' },
      { label: 'Status', value: 'Akses perlu dikonfirmasi' },
    ],
    sections: [
      {
        id: 'peta',
        heading: 'Apa arti “24 jam” di peta',
        paragraphs: [
          'Google Maps per 29 Oktober 2026 mencantumkan Devil’s Tears buka 24 jam setiap hari. Itu cuplikan pihak ketiga yang merangkum laporan pengguna, bukan pengumuman pengelola.',
          'Angka tersebut tidak memastikan petugas, loket, penerangan, atau bahwa seluruh area tebing aman di semua jam.',
        ],
      },
      {
        id: 'malam',
        heading: 'Mengapa malam tidak kami sarankan',
        paragraphs: [
          'Tanpa penerangan memadai, tebing licin dan ombak lebih sulit dilihat. Risiko kecelakaan meningkat tajam saat gelap.',
          'Kami menyarankan kunjungan saat masih terang, dan keluar dari area tebing sebelum senja mendekati malam.',
        ],
      },
      {
        id: 'penutupan',
        heading: 'Penutupan dan kondisi',
        paragraphs: [
          'Bila rambu, pagar, atau petugas menunjukkan akses ditutup, patuhi. Cuaca buruk dapat menutup jalur secara mendadak.',
          'Jangan menganggap “24 jam” sebagai izin mengabaikan penutupan setempat.',
        ],
        callout: {
          tone: 'warn',
          text: 'Konfirmasikan akses sebelum berangkat dan patuhi penutupan. Peta tidak menjamin kondisi lapangan.',
        },
      },
    ],
    faqs: [
      { q: 'Jam berapa Devil’s Tears buka?', a: 'Cuplikan peta mencantumkan 24 jam, tapi itu bukan jaminan akses malam, petugas, atau keselamatan. Kunjungi saat terang dan patuhi penutupan.' },
      { q: 'Bolehkah datang tengah malam?', a: 'Kami tidak menyarankan. Tanpa penerangan, tebing licin dan ombak sulit dilihat. Risiko cedera tinggi.' },
      { q: 'Apakah ada loket atau petugas?', a: 'Cuplikan peta tidak mencantumkan situs atau telepon pengelola. Jangan asumsikan ada loket resmi di lokasi.' },
    ],
    related: ['keamanan-tebing-devils-tear', 'harga-tiket-dan-retribusi', 'waktu-terbaik-berkunjung'],
  },
  {
    slug: 'fasilitas-parkir-toilet',
    category: 'panduan',
    title: 'Parkir & Toilet di Devil’s Tears',
    metaTitle: 'Parkir & Toilet Devil’s Tears: Apa yang Tersedia',
    metaDescription: 'Fasilitas di Devil’s Tears belum terverifikasi. Pisahkan rencana pemerintah dari fasilitas yang benar-benar beroperasi hari ini.',
    lead: 'Kami tidak memverifikasi toilet, parkir, atau warung di lokasi. Arsip pemerintah membahas rencana fasilitas, yang bukan bukti semuanya sudah beroperasi.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'arsip',
        heading: 'Rencana vs kenyataan',
        paragraphs: [
          'Arsip Pemkab Klungkung membahas rencana parkir, jalur, toilet, dan ruang kuliner di sekitar Pantai Batu Belek. Itu catatan perencanaan, bukan konfirmasi fasilitas selesai atau beroperasi.',
          'Jangan menganggap semua fasilitas tersebut tersedia hanya karena disebut dalam rencana.',
        ],
      },
      {
        id: 'konfirmasi',
        heading: 'Apa yang harus dikonfirmasi',
        bullets: [
          'Apakah toilet umum tersedia dan berfungsi.',
          'Apakah area parkir tersedia, tarifnya, dan kapasitasnya.',
          'Apakah warung atau penjual air ada, dengan jam layanan.',
          'Kondisi jalur dari titik turun ke tebing.',
        ],
      },
      {
        id: 'persiapan',
        heading: 'Persiapan mandiri',
        paragraphs: [
          'Bawa air minum, tisu, dan uang tunai. Jangan bergantung pada fasilitas yang belum dipastikan.',
          'Untuk kebutuhan makan atau ATM, rencanakan di area Jungutbatu, Sandy Bay, atau Mushroom Bay secara terpisah.',
        ],
        callout: {
          tone: 'info',
          text: 'Halaman ini bukan daftar fasilitas yang dijamin. Kami tujuannya membantu Anda menyiapkan diri, bukan mengklaim layanan tersedia.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah ada toilet di Devil’s Tears?', a: 'Kami tidak memverifikasi toilet di lokasi. Arsip pemerintah membahas rencana fasilitas, bukan bukti beroperasi. Konfirmasikan saat tiba.' },
      { q: 'Apakah ada parkir motor/mobil?', a: 'Belum terverifikasi. Tanyakan tarif dan ketersediaan kepada penyedia transportasi atau warga setempat.' },
      { q: 'Di mana saya bisa dapat air atau makan?', a: 'Rencanakan di area Sandy Bay, Dream Beach, Jungutbatu, atau Mushroom Bay. Baca halaman kuliner kami.' },
    ],
    related: ['harga-tiket-dan-retribusi', 'aksesibilitas-dan-keluarga', 'sandy-bay', 'jungutbatu-beach'],
  },
  {
    slug: 'durasi-kunjungan',
    category: 'panduan',
    title: 'Berapa Lama Berkunjung ke Devil’s Tears',
    metaTitle: 'Durasi Kunjungan Devil’s Tears & Rute Singkat',
    metaDescription: 'Waktu yang diperlukan di Devil’s Tears sendiri dan bila disambung dengan Dream Beach atau Sandy Bay dalam satu trip.',
    lead: 'Di tebing sendiri, kunjungan singkat sudah cukup. Durasi total tergantung apakah Anda menyambungnya dengan pantai dan makan di sekitar.',
    updated: '29 Oktober 2026',
    facts: [
      { label: 'Hanya tebing', value: '±20–40 menit' },
      { label: 'Dengan pantai dekat', value: '±2–3 jam' },
    ],
    sections: [
      {
        id: 'tebing',
        heading: 'Hanya di tebing',
        paragraphs: [
          'Melihat semburan, berfoto dari jarak aman, dan membaca rambu biasanya cukup 20–40 menit. Jangan berlama-lama di tepi.',
          'Waktu tidak bisa dijanjikan karena semburan bergantung ombak; jangan menunggu berjam-jam hanya untuk satu momen.',
        ],
      },
      {
        id: 'kombinasi',
        heading: 'Bila disambung dengan sekitar',
        paragraphs: [
          'Dream Beach berjarak dekat sehingga kombinasi Devil’s Tears + Dream Beach mudah dilakukan dalam 2–3 jam termasuk jalan kaki.',
          'Menyambung dengan Sandy Bay untuk makan atau sunset menambah 1–2 jam tergantung aktivitas.',
        ],
      },
      {
        id: 'rencana',
        heading: 'Sesuaikan dengan rute pulau',
        paragraphs: [
          'Jika Devil’s Tears bagian dari setengah hari atau sehari Lembongan, alokasikan waktu berdasarkan titik lain yang dikunjungi.',
          'Baca rencana rute kami untuk kombinasi yang masuk akal tanpa terburu-buru.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa lama di tebing sendiri?', a: 'Sekitar 20–40 menit sudah cukup untuk melihat semburan dan foto dari jarak aman. Jangan menunggu berjam-jam.' },
      { q: 'Berapa lama bila dengan Dream Beach?', a: 'Sekitar 2–3 jam termasuk jalan kaki antar titik. Baca halaman jalan kaki Devil’s Tears–Dream Beach–Sandy Bay.' },
      { q: 'Apakah perlu seharian?', a: 'Tidak untuk Devil’s Tears sendiri. Seharian baru masuk akal bila Anda menjelajah Lembongan secara luas.' },
    ],
    related: ['jalan-kaki-devils-tear-dream-beach-sandy-bay', 'setengah-hari-lembongan', 'waktu-terbaik-berkunjung'],
  },
  {
    slug: 'tips-foto-aman',
    category: 'panduan',
    title: 'Tips Foto Aman di Devil’s Tears',
    metaTitle: 'Tips Foto Aman Devil’s Tears',
    metaDescription: 'Posisi foto yang aman, waktu cahaya terbaik, dan larangan mendekat ke tepi atau turun ke batu basah.',
    lead: 'Foto bagus bisa diambil tanpa mengorbankan keselamatan. Halaman ini merangkum posisi, waktu, dan batasan.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'posisi',
        heading: 'Posisi yang aman',
        paragraphs: [
          'Ambil gambar dari area yang diizinkan dan permukaan kering, jauh dari tepi serta percikan. Semburan terlihat jelas tanpa harus mendekat.',
          'Gunakan lensa zoom daripada mendekatkan tubuh ke jurang.',
        ],
      },
      {
        id: 'waktu',
        heading: 'Waktu cahaya',
        paragraphs: [
          'Pagi dan sore memberikan cahaya lembut dan sering memunculkan pelangi. Hindari memotret saat gelap karena batu licin sulit dilihat.',
          'Jangan biarkan niat mendapatkan cahaya membuat Anda berada di tepi saat ombak membesar.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jangan meminta orang lain memotret Anda di tepi tebing. Satu gelombang besar sudah cukup menyeret korban ke air.',
        },
      },
      {
        id: 'drone',
        heading: 'Drone dan alat',
        paragraphs: [
          'Jika menggunakan drone, pahami aturan setempat dan jangan mengorbankan keselamatan saat mengoperasikan di area berangin.',
          'Simpan ponsel dengan tali pengaman; batu licin membuat jatuhnya mudah.',
        ],
      },
    ],
    faqs: [
      { q: 'Di mana titik foto terbaik?', a: 'Dari area kering yang diizinkan, agak menjauh dari tepi. Semburan terlihat jelas tanpa mendekat.' },
      { q: 'Apakah boleh foto di tepi tebing?', a: 'Tidak disarankan. Jangan mendekat ke batu basah atau mengangkang di luar tepi hanya untuk sudut gambar.' },
      { q: 'Kapan cahaya paling bagus?', a: 'Pagi dan sore. Hindari gelap karena risiko licin dan ombak sulit dilihat.' },
    ],
    related: ['keamanan-tebing-devils-tear', 'fenomena-ombak-devils-tear', 'tips-foto-aman'],
  },
  {
    slug: 'aksesibilitas-dan-keluarga',
    category: 'panduan',
    title: 'Aksesibilitas & Kunjungan Keluarga',
    metaTitle: 'Aksesibilitas & Keluarga di Devil’s Tears',
    metaDescription: 'Devil’s Tears untuk anak, lansia, dan kursi roda: risiko jalur tebing, pengawasan, dan persiapan sebelum membawa keluarga.',
    lead: 'Tebing ini tidak ramah anak kecil atau pengunjung dengan mobilitas terbatas tanpa persiapan. Halaman ini merangkum batas dan tips.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'risiko',
        heading: 'Risiko jalur tebing',
        paragraphs: [
          'Jalur menuju tebing tidak seragam: bisa berbatu, tidak rata, licin saat basah, dan tanpa pagar penuh. Bukan lingkungan yang aman untuk lari-larian anak.',
          'Arsip pemerintah membahas rencana akses, tetapi bukan bukti jalur bebas hambatan atau ramah kursi roda saat ini.',
        ],
      },
      {
        id: 'anak',
        heading: 'Bawa anak',
        bullets: [
          'Jaga anak dengan kontak fisik dekat, jangan biarkan mendekati tepi.',
          'Gunakan alas kaki dengan cengkeraman baik.',
          'Hindari kunjungan saat ombak besar atau hujan.',
          'Siapkan air minum dan istirahat sebelum jalan kaki panjang.',
        ],
      },
      {
        id: 'kursi-roda',
        heading: 'Kursi roda & lansia',
        paragraphs: [
          'Kami tidak memverifikasi akses kursi roda ke tepi tebing. Jangan asumsikan jalur datar atau tertutup tersedia.',
          'Tanyakan kebutuhan mobilitas dan pendampingan sebelum perjalanan, lalu ikuti kondisi serta petunjuk di lokasi.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jika anggota keluarga memiliki mobilitas terbatas, pertimbangkan menikmati pemandangan dari area aman yang lebih jauh dan hindari tepi sama sekali.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah Devil’s Tears ramah anak?', a: 'Bisa dikunjungi dengan pengawasan sangat ketat, tetapi tebing licin dan tidak berpagar penuh. Jangan biarkan anak mendekati tepi.' },
      { q: 'Apakah bisa diakses kursi roda?', a: 'Belum terverifikasi. Arsip membahas rencana akses, bukan bukti ramah kursi roda hari ini. Tanyakan sebelum datang.' },
      { q: 'Apakah aman untuk lansia?', a: 'Jalur berbatu dan licin berisiko. Pastikan alas kaki, pendampingan, dan hindari saat ombak besar.' },
    ],
    related: ['keamanan-tebing-devils-tear', 'fasilitas-parkir-toilet', 'wisata-keluarga'],
  },

  // ===================== B. TRANSPORTASI (8) =====================
  {
    slug: 'dari-sanur',
    category: 'transportasi',
    title: 'Dari Sanur ke Devil’s Tears',
    metaTitle: 'Sanur ke Devil’s Tears: Kapal & Lanjutan',
    metaDescription: 'Rute Sanur–Nusa Lembongan (kapal cepat), titik turun Jungutbatu/Mushroom Bay, dan sambungan darat ke Devil’s Tears.',
    lead: 'Sebagian besar wisatawan memulai dari Sanur, Bali. Halaman ini merangkum penyeberangan dan sambungan darat ke tebing.',
    updated: '29 Oktober 2026',
    facts: [
      { label: 'Titik awal', value: 'Pantai Sanur, Bali' },
      { label: 'Penyeberangan', value: 'Kapal cepat ke Lembongan' },
    ],
    sections: [
      {
        id: 'kapal',
        heading: 'Penyeberangan Sanur–Lembongan',
        paragraphs: [
          'Beberapa operator kapal cepat melayani rute Sanur ke Nusa Lembongan, biasanya turun di Jungutbatu atau Mushroom Bay. Durasi dan jadwal bervariasi; konfirmasikan langsung kepada operator.',
          'Jadwal, harga, dan pembatalan karena cuaca bisa berubah. Jangan asumsikan jadwal lama masih berlaku.',
        ],
      },
      {
        id: 'turun',
        heading: 'Memilih titik turun',
        paragraphs: [
          'Jungutbatu berada di sisi timur-laut, cukup jauh dari Devil’s Tears (barat-daya). Mushroom Bay di selatan lebih dekat secara garis lurus tetapi tetap butuh sambungan darat.',
          'Tanyakan kepada operator pelabuhan tujuan di Lembongan agar sambungan darat ke penginapan atau sewa kendaraan lebih mudah.',
        ],
      },
      {
        id: 'darat',
        heading: 'Sambungan darat ke tebing',
        paragraphs: [
          'Dari pelabuhan, Anda butuh sewa motor, sopir lokal, atau transportasi lain menuju sisi barat-daya. Baca halaman dari pelabuhan Jungutbatu dan dari Mushroom Bay.',
          'Konfirmasikan titik turun legal dan jalur yang bisa digunakan; pin peta bukan jaminan jalan kaki tersambung.',
        ],
        callout: {
          tone: 'info',
          text: 'Kami tidak menjual tiket kapal. Hubungi operator resmi untuk jadwal, harga, bagasi, dan kebijakan pembatalan cuaca.',
        },
      },
    ],
    faqs: [
      { q: 'Berapa lama Sanur ke Lembongan?', a: 'Bervariasi antar operator dan kondisi laut; konfirmasikan kepada operator. Jangan asumsikan durasi tetap.' },
      { q: 'Turun di Jungutbatu atau Mushroom Bay?', a: 'Keduanya butuh sambungan darat ke Devil’s Tears. Mushroom Bay lebih dekat garis lurus, Jungutbatu punya lebih banyak pilihan penginapan dan warung.' },
      { q: 'Apakah perlu pesan kapal dulu?', a: 'Sangat disarankan, terutama musim ramai. Konfirmasikan pembatalan akibat cuaca.' },
    ],
    related: ['dari-pelabuhan-jungutbatu', 'dari-mushroom-bay', 'sewa-motor-atau-sopir', 'tanpa-sewa-motor'],
  },
  {
    slug: 'dari-bandara-ngurah-rai',
    category: 'transportasi',
    title: 'Dari Bandara Ngurah Rai ke Devil’s Tears',
    metaTitle: 'Bandara Bali ke Devil’s Tears: Rute & Waktu',
    metaDescription: 'Rute Bandara Ngurah Rai (DPS) ke Sanur lalu penyeberangan Lembongan, plus waktu cadangan untuk menyesuaikan jadwal kapal.',
    lead: 'Tidak ada kapal langsung dari bandara. Perjalanan selalu melalui Sanur terlebih dahulu, lalu penyeberangan ke pulau.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'jalur',
        heading: 'Urutan perjalanan',
        paragraphs: [
          'Dari Bandara Internasional Ngurah Rai (DPS), Anda perlu ke pantai Sanur dulu (perjalanan darat melintasi Denpasar/area selatan). Baru dari Sanur naik kapal cepat ke Lembongan.',
          'Jangan mencari pelabuhan kapal di dekat bandara; titik keberangkatan utama adalah Sanur.',
        ],
      },
      {
        id: 'waktu',
        heading: 'Waktu và cadangan',
        paragraphs: [
          'Waktu darat bandara–Sanur bervariasi tergantung lalu lintas; siapkan cadangan karena kapal punya jadwal tetap dan pembatalan cuaca mungkin terjadi.',
          'Jika tiba siang, pertimbangkan menginap di Sanur atau Bali daratan daripada mengejar kapal terakhir.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jangan menyusun rencana ketat tanpa cadangan. Kapal dan jalan darat sama-sama bisa terlambat atau dibatalkan.',
        },
      },
      {
        id: 'lanjut',
        heading: 'Lanjutan ke tebing',
        paragraphs: [
          'Setelah turun di Lembongan, sambungan darat ke Devil’s Tears masih diperlukan. Gabungkan dengan halaman dari Sanur dan dari pelabuhan.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah ada kapal langsung dari bandara?', a: 'Tidak. Anda harus ke Sanur dulu untuk penyeberangan ke Lembongan, lalu sambungan darat ke tebing.' },
      { q: 'Berapa lama dari bandara ke Sanur?', a: 'Bervariasi tergantung lalu lintas. Sediakan cadangan waktu untuk mengejar jadwal kapal.' },
      { q: 'Lebih baik menginap di mana?', a: 'Bila tiba siang, Sanur atau Bali daratan lebih mudah dijangkau daripada mengejar kapal terakhir ke pulau.' },
    ],
    related: ['dari-sanur', 'kapal-pulang-dan-waktu-cadangan', 'menginap-dekat-devils-tear'],
  },
  {
    slug: 'dari-pelabuhan-jungutbatu',
    category: 'transportasi',
    title: 'Dari Pelabuhan Jungutbatu ke Devil’s Tears',
    metaTitle: 'Jungutbatu ke Devil’s Tears: Jarak & Waktu',
    metaDescription: 'Jungutbatu adalah titik turun utama di Lembongan timur-laut. Pelajari jarak darat, opsi kendaraan, dan waktu ke tebing barat-daya.',
    lead: 'Pelabuhan Jungutbatu berada cukup jauh dari Devil’s Tears. Halaman ini membantu menyusun sambungan darat yang masuk akal.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'posisi',
        heading: 'Posisi dan jarak',
        paragraphs: [
          'Jungutbatu terletak di sisi timur-laut pulau, sedangkan Devil’s Tears di barat-daya. Jarak darat menyeberangi sebagian pulau; bukan sekadar beberapa menit.',
          'Kami tidak memverifikasi angka jarak atau durasi pasti; konfirmasikan kepada penyedia transportasi setempat.',
        ],
      },
      {
        id: 'kendaraan',
        heading: 'Opsi kendaraan',
        bullets: [
          'Sewa motor: fleksibel, tetapi jalur berbatu dan licin perlu hati-hati.',
          'Sopir lokal / “taxi” Lembongan: praktis bila tidak ingin menyetir.',
          'Jalan kaki: tidak masuk akal dari Jungutbatu ke tebing karena jauh.',
        ],
        callout: {
          tone: 'info',
          text: 'Konfirmasikan titik turun legal dan durasi transfer kepada penyedia. Pin bukan jaminan jalan kaki tersambung atau parkir tersedia.',
        },
      },
      {
        id: 'rit',
        heading: 'Gabung dengan sekitar',
        paragraphs: [
          'Dari Jungutbatu, Anda bisa menyusuri pulau melewati area tengah ke barat-daya. Banyak yang menyambungkan dengan Sandy Bay atau Dream Beach dalam satu trip.',
          'Baca rencana setengah hari atau sehari Lembongan untuk urutan yang efisien.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa lama Jungutbatu ke Devil’s Tears?', a: 'Kami tidak memverifikasi angka pasti; konfirmasikan durasi transfer kepada penyedia transportasi setempat.' },
      { q: 'Boleh jalan kaki dari pelabuhan?', a: 'Tidak masuk akal karena jarak menyeberangi pulau. Gunakan sewa motor atau sopir lokal.' },
      { q: 'Lebih baik turun di Jungutbatu atau Mushroom Bay?', a: 'Mushroom Bay lebih dekat garis lurus ke tebing; Jungutbatu punya lebih banyak pilihan penginapan dan warung.' },
    ],
    related: ['dari-sanur', 'sewa-motor-atau-sopir', 'setengah-hari-lembongan', 'dari-mushroom-bay'],
  },
  {
    slug: 'dari-mushroom-bay',
    category: 'transportasi',
    title: 'Dari Mushroom Bay ke Devil’s Tears',
    metaTitle: 'Mushroom Bay ke Devil’s Tears: Rute Terdekat',
    metaDescription: 'Mushroom Bay lebih dekat secara garis lurus ke tebing barat-daya. Pelajari sambungan darat và perbandingan dengan Jungutbatu.',
    lead: 'Mushroom Bay di selatan pulau lebih dekat ke Devil’s Tears daripada Jungutbatu, tetapi tetap membutuhkan sambungan darat.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'dekat',
        heading: 'Lebih dekat, tapi bukan jalan kaki',
        paragraphs: [
          'Secara garis lurus, Mushroom Bay lebih dekat ke tebing barat-daya daripada Jungutbatu. Namun jalur darat masih diperlukan dan belum kami verifikasi rinciannya.',
          'Jangan asumsikan Anda bisa berjalan langsung dari pantai ke tebing tanpa kendaraan.',
        ],
      },
      {
        id: 'kendaraan',
        heading: 'Sambungan darat',
        paragraphs: [
          'Opsi sama seperti titik lain: sewa motor atau sopir lokal. Konfirmasikan titik turun legal dan kondisi jalur.',
          'Baca halaman sewa motor atau sopir dan tanpa sewa motor untuk menimbang pilihan.',
        ],
        callout: {
          tone: 'info',
          text: 'Mushroom Bay juga punya area warung dan menjadi titik turun kapal; baca halaman Mushroom Bay untuk makan dan lanjutan rute.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah Mushroom Bay titik turun terbaik?', a: 'Lebih dekat garis lurus ke tebing, tetapi tetap butuh sambungan darat. Kelebihannya ada warung dan area pantai.' },
      { q: 'Berapa lama ke Devil’s Tears dari sini?', a: 'Belum terverifikasi; konfirmasikan durasi kepada penyedia transportasi setempat.' },
      { q: 'Bisa jalan kaki?', a: 'Tidak kami sarankan; jalur darat masih diperlukan meski lebih pendek.' },
    ],
    related: ['mushroom-bay', 'sewa-motor-atau-sopir', 'tanpa-sewa-motor', 'dari-pelabuhan-jungutbatu'],
  },
  {
    slug: 'dari-dream-beach',
    category: 'transportasi',
    title: 'Dari Dream Beach ke Devil’s Tears',
    metaTitle: 'Dream Beach ke Devil’s Tears: Jalan Kaki & Jarak',
    metaDescription: 'Dream Beach sangat dekat dengan Devil’s Tears dan bisa dihubungkan jalan kaki. Pelajari jarak, arah, dan keamanan jalur.',
    lead: 'Dream Beach adalah titik terdekat untuk menyambung Devil’s Tears, sering dilakukan dengan berjalan kaki. Halaman ini merangkum rutenya.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'dekat',
        heading: 'Dua titik yang berdekatan',
        paragraphs: [
          'Dream Beach dan Devil’s Tears berada di sisi barat-daya yang sama dan sering dikunjungi berurutan. Jarak jalan kaki pendek, tetapi kami tidak memverifikasi angka tepatnya.',
          'Jangan menganggap seluruh jalur mulus; sebagian bisa berbatu dan licin.',
        ],
      },
      {
        id: 'jalur',
        heading: 'Jalan kaki antar keduanya',
        paragraphs: [
          'Banyak pengunjung berjalan dari area Dream Beach ke tebing. Gunakan alas kaki dengan cengkeraman dan hindari jalur tepi tebing yang tidak diizinkan.',
          'Baca halaman jalan kaki Devil’s Tears–Dream Beach–Sandy Bay untuk urutan lengkap.',
        ],
        callout: {
          tone: 'warn',
          text: 'Selalu verifikasi jalur pejalan kaki yang sah saat tiba. Jangan membuat jalan sendiri di tepi tebing berbahaya.',
        },
      },
    ],
    faqs: [
      { q: 'Berapa jauh Dream Beach ke Devil’s Tears?', a: 'Sangat dekat dan biasa dihubungkan jalan kaki, tetapi kami tidak memverifikasi angka tepatnya. Pastikan jalur sah saat tiba.' },
      { q: 'Bisa jalan kaki saja?', a: 'Ya, dari Dream Beach umumnya bisa. Gunakan alas kaki baik dan hindari tepi tebing.' },
      { q: 'Apakah perlu kendaraan?', a: 'Tidak bila Anda sudah di area Dream Beach. Kendaraan baru diperlukan untuk mencapai Dream Beach dari sisi lain pulau.' },
    ],
    related: ['dream-beach', 'jalan-kaki-devils-tear-dream-beach-sandy-bay', 'sandy-bay', 'tips-foto-aman'],
  },
  {
    slug: 'tanpa-sewa-motor',
    category: 'transportasi',
    title: 'Ke Devil’s Tears Tanpa Sewa Motor',
    metaTitle: 'Devil’s Tears Tanpa Sewa Motor: Opsi Transport',
    metaDescription: 'Bagi yang tidak ingin menyetir: sopir lokal, jasa antar, dan menyusun rute tanpa kendaraan sendiri di Lembongan.',
    lead: 'Tidak ingin menyewa motor bukan berarti tidak bisa ke Devil’s Tears. Halaman ini merangkum opsi tanpa kendaraan pribadi.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'sopir',
        heading: 'Sopir lokal / jasa antar',
        paragraphs: [
          'Layanan sopir atau antar-jemput lokal tersedia di Lembongan, sering diatur melalui penginapan atau grup perpesanan. Ini cara paling praktis tanpa menyetir sendiri.',
          'Konfirmasikan tarif, durasi, titik jemput, dan apakah sopir menunggu selama kunjungan.',
        ],
      },
      {
        id: 'kombinasi',
        heading: 'Kombinasi berjalan kaki',
        paragraphs: [
          'Jika Anda turun di area barat-daya (dekat Dream Beach/Sandy Bay), kombinasi sopir lokal dengan jalan kaki antar titik dekat sangat masuk akal.',
          'Baca halaman rute tanpa motor untuk menyusun urutan tanpa kendaraan sendiri.',
        ],
      },
      {
        id: 'biaya',
        heading: 'Soal biaya',
        paragraphs: [
          'Kami tidak memverifikasi tarif sopir; tanyakan sebelum setuju. Bandingkan dengan biaya sewa motor bila Anda mempertimbangkan keduanya.',
          'Baca halaman sewa motor atau sopir untuk perbandingan.',
        ],
        callout: {
          tone: 'info',
          text: 'Halaman ini tidak bekerja sama dengan sopir mana pun. Konfirmasi langsung dan sepakati harga sebelum naik.',
        },
      },
    ],
    faqs: [
      { q: 'Apakah bisa ke Devil’s Tears tanpa motor?', a: 'Bisa. Gunakan sopir lokal atau jasa antar, lalu jalan kaki antar titik dekat di sisi barat-daya.' },
      { q: 'Lebih murah sewa motor atau sopir?', a: 'Bervariasi; kami tidak memverifikasi tarif. Tanyakan kedua opsi dan bandingkan dengan durasi serta jumlah penumpang.' },
      { q: 'Apakah sopir menunggu?', a: 'Tergantung kesepakatan. Konfirmasikan di awal agar tidak terisolir di pulau.' },
    ],
    related: ['sewa-motor-atau-sopir', 'rute-tanpa-motor', 'dari-mushroom-bay'],
  },
  {
    slug: 'sewa-motor-atau-sopir',
    category: 'transportasi',
    title: 'Sewa Motor atau Sopir ke Devil’s Tears',
    metaTitle: 'Sewa Motor vs Sopir Lembongan',
    metaDescription: 'Perbandingan sewa motor sendiri dan menyewa sopir lokal di Lembongan: biaya, fleksibilitas, risiko jalur, dan siapa yang cocok.',
    lead: 'Keputusan sewa motor atau sopir memengaruhi biaya, fleksibilitas, dan kenyamanan. Halaman ini membantu menimbang keduanya.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'motor',
        heading: 'Sewa motor sendiri',
        paragraphs: [
          'Sewa motor memberi fleksibilitas penuh dan biasanya lebih murah untuk solo atau pasangan. Namun jalur Lembongan berbatu, berdebu, dan licin saat basah.',
          'Konfirmasikan kelengkapan surat, helm, dan kondisi unit. Jangan menyetir bila tidak nyaman dengan jalan pulau.',
        ],
      },
      {
        id: 'sopir',
        heading: 'Sopir lokal',
        paragraphs: [
          'Sopir menghemat energi dan menghindari risiko menyetir sendiri, cocok untuk keluarga atau yang tidak biasa jalan pulau.',
          'Konfirmasikan tarif, durasi, dan apakah sopir menunggu selama kunjungan.',
        ],
      },
      {
        id: 'pilih',
        heading: 'Siapa yang cocok',
        bullets: [
          'Motor: solo/pasangan, budget ketat, nyaman menyetir jalan pulau.',
          'Sopir: keluarga, lansia, tidak ingin menyetir, ingin panduan lokal.',
          'Campuran: sopir ke area barat-daya, lalu jalan kaki antar titik dekat.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jalur berbatu dan licin berisiko kecelakaan. Pilih opsi yang membuat Anda fokus menikmati, bukan berisiko.',
        },
      },
    ],
    faqs: [
      { q: 'Lebih baik sewa motor atau sopir?', a: 'Motor lebih murah dan fleksibel; sopir lebih praktis dan aman untuk keluarga. Pilih berdasarkan kenyamanan menyetir jalan pulau.' },
      { q: 'Apakah jalannya sulit?', a: 'Bervariasi, sebagian berbatu dan licin saat basah. Gunakan kehati-hatian ekstra bila menyewa motor.' },
      { q: 'Berapa tarif sewa motor?', a: 'Kami tidak memverifikasi angka; tanyakan penyedia setempat dan sepakati sebelum menyetir.' },
    ],
    related: ['tanpa-sewa-motor', 'dari-pelabuhan-jungutbatu', 'dari-mushroom-bay', 'rute-tanpa-motor'],
  },
  {
    slug: 'kapal-pulang-dan-waktu-cadangan',
    category: 'transportasi',
    title: 'Kapal Pulang & Waktu Cadangan',
    metaTitle: 'Kapal Pulang & Waktu Cadangan Lembongan',
    metaDescription: 'Menyusun waktu pulang dari Lembongan: jadwal kapal terakhir, cuaca, dan cadangan agar tidak tertinggal kapal.',
    lead: 'Rencanakan pulang sejak berangkat. Kapal punya jadwal dan bisa dibatalkan cuaca; waktu cadangan sangat penting.',
    updated: '29 Oktober 2026',
    sections: [
      {
        id: 'jadwal',
        heading: 'Kapal terakhir dan jadwal',
        paragraphs: [
          'Setiap operator punya jadwal pulang yang bisa berbeda. Catat kapal terakhir saat pergi dan jangan mengandalkan ingatan.',
          'Konfirmasikan kemungkinan perubahan jadwal hari itu juga kepada operator.',
        ],
      },
      {
        id: 'cuaca',
        heading: 'Risiko cuaca',
        paragraphs: [
          'Penyeberangan bisa dibatalkan atau ditunda karena ombak besar. Jangan menunda di pantai sampai kapal terakhir bila cuaca memburuk.',
          'Baca prakiraan BMKG dan peringatan dini sebelum hari keberangkatan.',
        ],
        callout: {
          tone: 'warn',
          text: 'Jika cuaca buruk, lebih baik menginap di Lembongan daripada memaksakan penyeberangan berbahaya.',
        },
      },
      {
        id: 'cadangan',
        heading: 'Waktu cadangan',
        paragraphs: [
          'Sediakan cadangan untuk transfer darat ke pelabuhan, antre, dan penundaan. Jangan menyusun kunjungan tebing di menit terakhir sebelum kapal pulang.',
          'Baca halaman menginap jika Anda mempertimbangkan bermalam di pulau.',
        ],
      },
    ],
    faqs: [
      { q: 'Jam berapa kapal terakhir pulang?', a: 'Bervariasi antar operator; catat saat pergi dan konfirmasikan kemungkinan perubahan hari itu.' },
      { q: 'Bagaimana bila kapal dibatalkan cuaca?', a: 'Pertimbangkan menginap di Lembongan. Jangan memaksakan penyeberangan berbahaya.' },
      { q: 'Berapa cadangan waktu ideal?', a: 'Cukup untuk transfer darat, antre, dan penundaan. Jangan jadwalkan tebing di menit terakhir sebelum kapal.' },
    ],
    related: ['dari-sanur', 'dari-bandara-ngurah-rai', 'menginap-dekat-devils-tear', 'saat-hujan-atau-ombak-tinggi'],
  },
];
