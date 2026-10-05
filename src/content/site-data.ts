/**
 * SITE DATA HUB — SINGLE SOURCE OF TRUTH
 * Koperasi Produsen Dirga Pangan Mandiri
 * 
 * Seluruh teks, informasi legalitas, nomor kontak, spesifikasi komoditas,
 * dan struktur keorganisasian dikelola terpusat pada file ini.
 */

// ==========================================
// TIPE DATA STRUKTURAL (TYPES & INTERFACES)
// ==========================================

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface MetricItem {
  readonly value: string;
  readonly label: string;
  readonly description: string;
}

export interface ValuePillar {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
}

export interface CommodityItem {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly weightRange: string;
  readonly description: string;
  readonly highlights: readonly string[];
}

export interface LegalCredential {
  readonly label: string;
  readonly number: string;
  readonly status: string;
  readonly issuer: string;
  readonly description: string;
}

export interface CoreValue {
  readonly title: string;
  readonly description: string;
}

export interface BiosecurityPrinciple {
  readonly step: number;
  readonly title: string;
  readonly description: string;
}

export interface TechFeature {
  readonly title: string;
  readonly description: string;
}

export interface PartnershipStep {
  readonly step: number;
  readonly title: string;
  readonly description: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface PersonProfile {
  readonly name: string;
  readonly role: string;
  readonly category: "Pengurus" | "Pengawas" | "Anggota";
  readonly department: string;
  readonly bio?: string;
  readonly imageUrl: string;
  readonly avatarPlaceholder?: string;
}

export interface GalleryItem {
  readonly id: string;
  readonly title: string;
  readonly category: "Fasilitas Kandang" | "Proses Panen" | "Kegiatan Anggota";
  readonly imageUrl: string;
  readonly aspect: "16:9" | "4:3";
  readonly date: string;
  readonly description: string;
}

// ==========================================
// DATA UTAMA ENTITAS & IDENTITAS SITUS
// ==========================================

export const siteIdentity = {
  name: "Koperasi Produsen Dirga Pangan Mandiri",
  shortName: "Dirga Pangan",
  legalForm: "Koperasi Produsen Berbadan Hukum",
  tagline: "Pangan Berkualitas Dari Peternak Mandiri",
  summary:
    "Koperasi produsen peternakan ayam broiler terpadu berbasis kemitraan adil, tata kelola closed house higienis, dan ketahanan pangan nasional.",
  establishedYear: 2024,
  liveStatus: "Pasokan Aktif",
  siteUrl: "https://dirgapangan.id",
} as const;

// ==========================================
// DATA NAVIGASI SITUS
// ==========================================

export const navigationLinks: readonly NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Usaha", href: "/usaha" },
  { label: "Organisasi", href: "/organisasi" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
] as const;

// ==========================================
// DATA KONTAK & LOKASI RESMI
// ==========================================

export const contactData = {
  phoneDisplay: "0811119610",
  phoneRaw: "62811119610",
  email: "kop.produsendirgapanganmandiri@outlook.com",
  officeAddress: {
    title: "Kantor Sekretariat Koperasi",
    street: "Jalan Ahmad Yani II Nomor 18",
    city: "Kota Bogor",
    province: "Jawa Barat",
    country: "Indonesia",
    full: "Jalan Ahmad Yani II Nomor 18, Tanah Sareal, Kota Bogor, Jawa Barat, Indonesia",
  },
  farmCenter: {
    title: "Sentra Fasilitas Kandang Closed House",
    location: "Jawa Barat, Indonesia",
    full: "Sentra Fasilitas Kandang Closed House, Jawa Barat, Indonesia",
  },
  operatingHours: "Senin – Sabtu: 08.00 – 17.00 WIB",
  operatingHoursNote: "Hari Minggu & Hari Libur Nasional: Layanan Darurat Kemitraan via WhatsApp",
  coordinates: {
    lat: -6.570920909879735,
    lng: 106.80489102888598,
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1341.1331530994398!2d106.80458793306538!3d-6.570969803075161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c43ca3663e85%3A0x60cca36d3caa8cc4!2sJl.%20Jend.%20A.%20Yani%20II%20No.18%2C%20RT.05%2FRW.04%2C%20Tanah%20Sareal%2C%20Kota%20Bogor%2C%20Jawa%20Barat%2016161!5e1!3m2!1sid!2sid!4v1791178403971!5m2!1sid!2sid",
  defaultWaMessage:
    "Halo Admin Koperasi Dirga Pangan Mandiri, saya ingin berkonsultasi mengenai kebutuhan pasokan ayam broiler dan kemitraan usaha.",
} as const;

// ==========================================
// HALAMAN 1: BERANDA (SCR-001)
// ==========================================

export const homeContent = {
  hero: {
    badge: "Kemitraan Peternakan & Pasokan Terbuka",
    headline: "Pangan Berkualitas Dari Peternak Mandiri, Menopang Pasokan Ayam Broiler Nasional.",
    subheadline:
      "Koperasi Produsen Dirga Pangan Mandiri mengelola produksi ayam broiler closed house dengan standar biosecurity ketat, kemitraan plasma adil, dan jaminan penyerapan pasar.",
    primaryCta: {
      label: "Mulai Kemitraan Usaha",
      href: "/kontak",
    },
    secondaryCta: {
      label: "Pelajari Profil Koperasi",
      href: "/profil",
    },
    image: {
      src: "/images/hero-koperasi.webp",
      mobileSrc: "/images/hero-koperasi-mobile.webp",
      fallbackSrc: "/images/hero-koperasi.jpg",
      alt: "Fasilitas Sentra Kandang Closed House Koperasi Produsen Dirga Pangan Mandiri",
      badge: "Sentra Fasilitas Koperasi",
      tag: "Placeholder Foto Utama",
      title: "Sentra Koperasi Dirga Pangan",
      caption: "Fasilitas Kandang Closed House Modern & Higienis",
      stats: "Kapasitas 50.000+ Ekor / Siklus • Biosecurity Terstandar",
    },
  },
  pillars: [
    {
      id: "mutu",
      title: "Standar Mutu Tinggi",
      description:
        "Pemeliharaan ayam broiler sehat dalam kandang closed house modern dengan biosecurity ketat, pakan terukur, dan rantai pasok higienis.",
      iconName: "ShieldCheck",
    },
    {
      id: "kemitraan",
      title: "Kemitraan Adil & Berdaya",
      description:
        "Skema kerja sama peternak plasma yang transparan, penyediaan sapronak berkualitas tinggi, serta pendampingan teknis harian intensif.",
      iconName: "Users",
    },
    {
      id: "pasokan",
      title: "Pasokan Berkelanjutan",
      description:
        "Manajemen siklus panen terencana untuk menjamin kepastian pasokan ayam hidup dan karkas segar bagi mitra horeka dan pasar ritel.",
      iconName: "Truck",
    },
  ] as readonly ValuePillar[],
  metrics: [
    {
      value: "50.000+",
      label: "Ekor / Siklus Panen",
      description: "Kapasitas populasi produksi ayam broiler aktif",
    },
    {
      value: "15+",
      label: "Kandang Closed House",
      description: "Fasilitas modern kandang inti & peternak mitra",
    },
    {
      value: "Higienis",
      label: "Mutu & Standar Terjaga",
      description: "Penerapan biosecurity dan penanganan karkas bersih",
    },
    {
      value: "100%",
      label: "Kemitraan Berdaya",
      description: "Komitmen pemberdayaan peternak rakyat lokal",
    },
  ] as readonly MetricItem[],
  commoditiesOverview: {
    title: "Komoditas Unggulan Koperasi",
    subtitle:
      "Ayam broiler sehat berbobot standar dan karkas segar higienis dengan penanganan rantai dingin terpadu.",
    items: [
      {
        id: "live-bird",
        name: "Ayam Broiler Hidup (Live Bird)",
        category: "Produksi Ternak",
        weightRange: "1,8 kg – 2,2 kg",
        description:
          "Ayam hidup sehat berkualitas super dengan konversi pakan (FCR) optimal, bulu bersih, dan siap panen dari kandang closed house.",
        highlights: [
          "Bebas residu antibiotik berbahaya",
          "Kondisi fisik prima dan aktif",
          "Penimbangan akurat dan transparan",
        ],
      },
      {
        id: "fresh-carcass",
        name: "Karkas Ayam Segar Higienis",
        category: "Produk Olahan Potong",
        weightRange: "0,8 kg – 1,4 kg (Karkas Bersih)",
        description:
          "Daging ayam karkas segar tanpa jeroan dan bulu, diproses secara higienis, bersih, dan dijaga suhunya dalam rantai dingin.",
        highlights: [
          "Pemotongan higienis dan terstandar",
          "Kemasan bersih kedap kontaminasi",
          "Siap kirim ke jaringan horeka & katering",
        ],
      },
    ] as readonly CommodityItem[],
  },
  governanceQuote: {
    quote:
      "Kedaulatan pangan bangsa dimulai dari kemandirian peternak rakyat yang terorganisir secara profesional, transparan, dan berkeadilan.",
    attribution: "Dewan Pengurus Koperasi Dirga Pangan Mandiri",
  },
  ctaBanner: {
    title: "Siap Menjadi Mitra Pasokan Atau Peternak Plasma?",
    description:
      "Hubungi tim kemitraan kami sekarang untuk mendiskusikan kebutuhan pasokan rutin karkas usaha Anda atau bergabung dalam program kemitraan kandang modern.",
    ctaLabel: "Hubungi Divisi Kemitraan via WhatsApp",
  },
} as const;

// ==========================================
// HALAMAN 2: PROFIL KOPERASI (SCR-002)
// ==========================================

export const profileContent = {
  header: {
    title: "Profil & Integritas Kelembagaan",
    subtitle: "Fondasi peternakan rakyat modern yang berdaulat, mandiri, dan amanah.",
  },
  story: {
    title: "Latar Belakang & Filosofi Nama",
    paragraphs: [
      "Koperasi Produsen Dirga Pangan Mandiri didirikan dari inisiatif bersama gabungan peternak ayam broiler di Jawa Barat yang menyadari pentingnya penguatan posisi tawar, kepastian pasokan sarana produksi (sapronak), dan stabilitas penyerapan hasil panen.",
      "Nama 'Dirga Pangan Mandiri' merefleksikan cita-cita luhur: 'Dirga' yang melambangkan keagungan dan pandangan jauh ke depan, 'Pangan' sebagai komitmen menjaga ketersediaan protein hewani terjangkau bagi masyarakat, dan 'Mandiri' sebagai tekad peternak rakyat untuk berdaulat dalam berusaha.",
      "Melalui badan hukum koperasi produsen, kami mengintegrasikan teknologi closed house dengan sistem keanggotaan partisipatif yang mengedepankan asas kekeluargaan dan transparansi hasil usaha.",
    ],
  },
  visionMission: {
    vision:
      "Menjadi koperasi produsen perunggasan terdepan dan terpercaya di Indonesia yang mewujudkan kedaulatan peternak rakyat serta kemandirian pasokan pangan hewani berkualitas.",
    missions: [
      "Menyediakan sapronak (bibit DOC, pakan berkualitas, obat-obatan) unggul dengan efisiensi biaya bagi seluruh peternak mitra.",
      "Mendorong modernisasi kandang melalui adopsi teknologi closed house dan sistem biosecurity terstandar yang ramah lingkungan.",
      "Menjamin stabilitas pasar dan transparansi penyerapan hasil panen dengan skema kerja sama yang adil dan menguntungkan.",
      "Menjalankan tata kelola koperasi yang bersih, akuntabel, dan mengutamakan peningkatan kesejahteraan anggota.",
    ],
  },
  coreValues: [
    {
      title: "Integritas & Transparansi",
      description: "Keterbukaan dalam penimbangan, pencatatan hasil pemeliharaan, serta pembagian hasil usaha secara jujur.",
    },
    {
      title: "Kemitraan Mandiri",
      description: "Membangun hubungan setara yang saling menguatkan antara koperasi dan peternak plasma tanpa ketergantungan sepihak.",
    },
    {
      title: "Kualitas Higienis",
      description: "Menjaga standar biosecurity ketat dari kandang hingga distribusi untuk menghasilkan produk unggas yang sehat dan aman.",
    },
    {
      title: "Keberlanjutan Lingkungan",
      description: "Pengelolaan limbah peternakan yang bertanggung jawab dan ramah lingkungan sekitar kawasan kandang.",
    },
  ] as readonly CoreValue[],
  legalities: [
    {
      label: "Nomor Induk Berusaha (NIB)",
      number: "1234567890123 [DRAFT]",
      status: "Terdaftar Resmi",
      issuer: "Kementerian Investasi / BKPM RI",
      description: "Legalitas perizinan berusaha berbasis risiko sektor peternakan unggas.",
    },
    {
      label: "SK Pengesahan Badan Hukum",
      number: "AHU-0012345.AH.01.26.TAHUN 2024 [DRAFT]",
      status: "Disahkan",
      issuer: "Kementerian Hukum dan HAM RI",
      description: "Surat keputusan pengesahan pendirian badan hukum Koperasi Produsen.",
    },
    {
      label: "Akta Pendirian Koperasi",
      number: "Akta Notaris No. 08 / 14 Mei 2024 [DRAFT]",
      status: "Akta Otentik",
      issuer: "Notaris Pembuat Akta Koperasi (NPAK)",
      description: "Anggaran dasar dan pengesahan susunan kepengurusan awal koperasi.",
    },
    {
      label: "Izin Usaha Peternakan (IUP)",
      number: "IUP-UNGGAS/2024/0089 [DRAFT]",
      status: "Aktif",
      issuer: "Dinas Penanaman Modal & PTSP Daerah",
      description: "Izin operasional budidaya dan produksi ayam broiler terintegrasi.",
    },
  ] as readonly LegalCredential[],
  biosecurity: {
    title: "Standar Biosecurity & Kesejahteraan Ternak",
    subtitle: "Empat pilar perlindungan preventif untuk menjamin kesehatan ayam dan lingkungan kandang yang steril.",
    principles: [
      {
        step: 1,
        title: "Zonasi & Isolasi Ketat",
        description: "Pemisahan tegas zona kotor, antara, dan bersih di area kandang untuk meminimalkan transmisi agen patogen dari luar.",
      },
      {
        step: 2,
        title: "Sanitasi & Disinfeksi Kendaraan",
        description: "Setiap kendaraan pengangkut pakan, DOC, dan panen wajib melewati bak dipping disinfektan dan penyemprotan menyeluruh.",
      },
      {
        step: 3,
        title: "Kontrol Kualitas Air & Pakan",
        description: "Penggunaan air minum teruji laboratorium dengan klorinasi aman dan pakan berformulasi nutrisi lengkap terdaftar dinas.",
      },
      {
        step: 4,
        title: "Pemantauan Kesehatan Harian",
        description: "Inspeksi rutin oleh tenaga teknis perunggasan bersertifikat untuk memantau performa flock dan pencegahan dini penyakit.",
      },
    ] as readonly BiosecurityPrinciple[],
  },
} as const;

// ==========================================
// HALAMAN 3: USAHA & PRODUKSI (SCR-003)
// ==========================================

export const businessContent = {
  header: {
    title: "Kapasitas Produksi & Skema Kemitraan",
    subtitle: "Pasokan ayam broiler berkualitas prima dengan otomasi tata kelola closed house modern.",
  },
  supplyChain: {
    title: "Rantai Pasok Unggas Dari Hulu ke Hilir",
    description:
      "Koperasi Dirga Pangan Mandiri mengelola ekosistem terpadu mulai dari penyediaan sarana produksi peternakan (sapronak), proses pemeliharaan modern, hingga distribusi panen ke mitra horeka dan pasar.",
  },
  products: [
    {
      id: "live-bird",
      name: "Ayam Broiler Hidup (Live Bird)",
      category: "Komoditas Utama",
      weightRange: "1,8 kg – 2,2 kg / ekor",
      description:
        "Ayam broiler hidup berkualitas prima dari kandang closed house. Memiliki rasio konversi pakan (FCR) yang efisien, tingkat deplesi rendah (< 3%), serta daya tahan transportasi yang tangguh.",
      highlights: [
        "Kondisi bulu bersih dan tidak berbau pekat",
        "Kepadatan daging optimal dan padat berisi",
        "Siap kirim ke Rumah Potong Hewan Unggas (RPHU)",
      ],
    },
    {
      id: "fresh-carcass",
      name: "Karkas Ayam Segar Higienis",
      category: "Pasokan Horeka & Ritel",
      weightRange: "0,8 kg – 1,4 kg / karkas",
      description:
        "Karkas ayam segar dingin (chilled) tanpa jeroan, kepala, dan cakar. Diproses dengan standar kebersihan tinggi dan disimpan dalam cold chain 0–4°C untuk menjamin kesegaran maksimal saat tiba di dapur mitra.",
      highlights: [
        "Diproses secara higienis dan terstandar",
        "Tanpa bahan pengawet atau suntikan air",
        "Pilihan potong kustom (parting 4, 8, atau 10 potong)",
      ],
    },
  ] as readonly CommodityItem[],
  technology: {
    title: "Teknologi Kandang Closed House",
    description:
      "Sistem kandang tertutup modern menciptakan iklim mikro buatan yang ideal bagi pertumbuhan ayam broiler, terlindung dari cuaca ekstrem luar dan kontaminasi udara luar.",
    features: [
      {
        title: "Pengendali Mikroklimat Otomatis",
        description: "Sensor suhu dan kelembapan mengatur kecepatan kipas dan tirai secara cerdas 24/7.",
      },
      {
        title: "Evaporative Cooling Pad",
        description: "Bantalan pendingin air menurunkan suhu udara masuk secara efisien dan merata.",
      },
      {
        title: "Ventilasi Tunnel Fan",
        description: "Kipas exhaust berdaya tinggi memastikan sirkulasi oksigen segar dan membuang gas amonia.",
      },
      {
        title: "Sistem Tempat Minum Nipple Otomatis",
        description: "Penyaluran air minum tertutup mencegah kontaminasi bakteri dan menjaga litter tetap kering.",
      },
    ] as readonly TechFeature[],
  },
  partnership: {
    title: "Alur 4 Langkah Kemitraan Peternak Plasma",
    subtitle: "Model kerja sama adil yang memberikan kepastian sapronak, pendampingan teknis, dan jaminan penyerapan panen.",
    steps: [
      {
        step: 1,
        title: "Registrasi & Verifikasi Lahan",
        description: "Calon peternak mendaftarkan lokasi kandang untuk ditinjau kelayakan teknis, akses jalan, dan sumber air bersih oleh tim koperasi.",
      },
      {
        step: 2,
        title: "Penyediaan Sapronak Terstandar",
        description: "Koperasi menyuplai Day Old Chick (DOC) strain unggul, pakan pabrikan bermutu, serta vitamin/vaksin lengkap ke lokasi peternak.",
      },
      {
        step: 3,
        title: "Pendampingan Pemeliharaan Intensif",
        description: "Technical Service (TS) koperasi melakukan kunjungan rutin berkala untuk memandu manajemen suhu, ventilasi, dan biosecurity.",
      },
      {
        step: 4,
        title: "Pemanenan & Pembayaran Hasil Usaha",
        description: "Seluruh hasil panen ayam hidup ditimbang secara transparan di kandang dan diserap koperasi dengan perhitungan bagi hasil yang adil.",
      },
    ] as readonly PartnershipStep[],
  },
  faqs: [
    {
      question: "Berapa minimal pemesanan ayam broiler untuk pasokan restoran atau katering?",
      answer: "Minimal pemesanan awal untuk pasokan rutin mitra horeka adalah 50 ekor untuk ayam hidup atau 50 kg untuk karkas segar. Kami menyediakan jadwal pengiriman berkala sesuai kebutuhan dapur Anda.",
    },
    {
      question: "Bagaimana sistem pengiriman pasokan karkas?",
      answer: "Pengiriman karkas menggunakan boks berinsulasi dingin (cold box) untuk menjaga suhu daging tetap stabil di bawah 4°C selama perjalanan dari sentra ke lokasi Anda.",
    },
    {
      question: "Apa syarat utama untuk bermitra sebagai peternak plasma koperasi?",
      answer: "Syarat utama meliputi memiliki kandang closed house (atau semi-closed) dengan kapasitas minimal 5.000 ekor, ketersediaan air bersih dan listrik memadai, serta komitmen mengikuti SOP biosecurity koperasi.",
    },
    {
      question: "Apakah peternak plasma harus membayar bibit dan pakan di awal?",
      answer: "Tidak. Dalam skema kemitraan plasma terpadu, modal sapronak (DOC, pakan, obat) difasilitasi oleh koperasi dan diperhitungkan secara transparan saat hasil panen dipasarkan.",
    },
    {
      question: "Apakah koperasi melayani pembelian eceran masyarakat?",
      answer: "Fokus utama koperasi saat ini adalah kemitraan B2B (distributor, pasar induk, hotel, restoran, dan katering) serta penyediaan karkas partai untuk acara perhelatan.",
    },
  ] as readonly FaqItem[],
} as const;

// ==========================================
// HALAMAN 4: KEORGANISASIAN (SCR-004)
// ==========================================

export const organizationContent = {
  header: {
    title: "Struktur Tata Kelola Koperasi",
    subtitle: "Berlandaskan musyawarah anggota, transparansi pembukuan, dan akuntabilitas kepemimpinan.",
  },
  structureIntro:
    "Sebagai badan hukum koperasi produsen, kekuasaan tertinggi berada di tangan Rapat Anggota Tahunan (RAT). Dewan Pengawas bertugas mengawasi jalannya roda usaha, sementara Dewan Pengurus memimpin eksekusi program kemitraan didukung oleh tim teknis profesional.",
  supervisors: [
    {
      name: "Drs. H. Mulyadi, M.M. [DRAFT]",
      role: "Ketua Dewan Pengawas",
      category: "Pengawas",
      department: "Pengawasan Tata Kelola & Audit",
      bio: "Praktisi perkoperasian senior dengan pengalaman lebih dari 20 tahun membina kelembagaan usaha bersama di Jawa Barat.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "HM",
    },
    {
      name: "Ir. Hendra Gunawan [DRAFT]",
      role: "Anggota Dewan Pengawas",
      category: "Pengawas",
      department: "Pengawasan Teknis & Aset Kandang",
      bio: "Pakar agribisnis peternakan yang fokus pada evaluasi kelayakan aset kandang dan keberlanjutan investasi kemitraan.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "HG",
    },
  ] as readonly PersonProfile[],
  boardMembers: [
    {
      name: "Ahmad Sulaeman, S.Pt. [DRAFT]",
      role: "Ketua Koperasi",
      category: "Pengurus",
      department: "Pimpinan Eksekutif",
      bio: "Sarjana Peternakan dengan rekam jejak memimpin peternakan closed house modern dan jejaring rantai pasok unggas regional.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "AS",
    },
    {
      name: "Budi Santoso, S.E. [DRAFT]",
      role: "Sekretaris Koperasi",
      category: "Pengurus",
      department: "Administrasi & Legal Kemitraan",
      bio: "Mengelola korespondensi hukum kelembagaan, registrasi anggota peternak, dan perjanjian kerja sama bisnis B2B.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "BS",
    },
    {
      name: "Siti Rahmawati, S.Ak. [DRAFT]",
      role: "Bendahara Koperasi",
      category: "Pengurus",
      department: "Keuangan & Akuntansi Kas",
      bio: "Akuntan profesional yang memastikan tata kelola pembukuan kas koperasi berjalan transparan, tertib, dan siap diaudit.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "SR",
    },
    {
      name: "Drh. Fahmi Ramadhan [DRAFT]",
      role: "Manajer Teknis & Mutu",
      category: "Pengurus",
      department: "Kesehatan Hewan & Biosecurity",
      bio: "Dokter hewan penanggung jawab kesehatan flock ayam, kepatuhan biosecurity, dan formulasi sanitasi kandang closed house.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "FR",
    },
  ] as readonly PersonProfile[],
  members: [
    {
      name: "H. Dadang Supriatna [DRAFT]",
      role: "Perwakilan Peternak Plasma",
      category: "Anggota",
      department: "Sentra Kemitraan Bogor",
      bio: "Peternak mandiri closed house dengan kapasitas pemeliharaan aktif 15.000 ekor per siklus.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "DS",
    },
    {
      name: "Wahyu Hidayat [DRAFT]",
      role: "Perwakilan Peternak Plasma",
      category: "Anggota",
      department: "Sentra Kemitraan Subang",
      bio: "Mitra peternak teladan dalam penerapan efisiensi pakan FCR dan kedisiplinan biosecurity.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "WH",
    },
    {
      name: "Suryadi Pratama [DRAFT]",
      role: "Anggota Peternak Mandiri",
      category: "Anggota",
      department: "Sentra Kemitraan Jawa Barat",
      bio: "Penggerak kemandirian peternak rakyat dengan rekam jejak kemitraan unggas berkelanjutan.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "SP",
    },
  ] as readonly PersonProfile[],
  technicalTeam: [
    {
      name: "Agus Pratama, S.Pt. [DRAFT]",
      role: "Koordinator Kemitraan Plasma",
      category: "Pengurus",
      department: "Layanan Teknis (TS)",
      bio: "Mendampingi peternak anggota di lapangan mulai dari persiapan chick-in, pemantauan masa brooder, hingga pelaksanaan panen.",
      imageUrl: "/images/placeholder-person.svg",
      avatarPlaceholder: "AP",
    },
  ] as readonly PersonProfile[],
  governanceCommitment: {
    title: "Komitmen Good Cooperative Governance",
    points: [
      {
        title: "Rapat Anggota Tahunan (RAT) Tepat Waktu",
        description: "Penyampaian laporan pertanggungjawaban pengurus dan pengawas secara transparan kepada seluruh anggota setiap tahun buku.",
      },
      {
        title: "Sistem Akuntansi Terbuka",
        description: "Pencatatan keuangan berkala yang dapat diakses oleh anggota pengawas untuk menjamin integritas penggunaan dana koperasi.",
      },
      {
        title: "Distribusi Sisa Hasil Usaha (SHU) Adil",
        description: "Pembagian keuntungan usaha proporsional berdasarkan kontribusi transaksi dan keaktifan anggota dalam memajukan koperasi.",
      },
    ],
  },
} as const;

// ==========================================
// HALAMAN 5: GALERI KEGIATAN & FASILITAS (SCR-005)
// ==========================================

export const galleryContent = {
  header: {
    title: "Galeri Dokumentasi & Fasilitas",
    subtitle: "Bukti nyata standar fasilitas modern, operasional pemeliharaan, dan aktivitas anggota.",
  },
  categories: ["Semua", "Fasilitas Kandang", "Proses Panen", "Kegiatan Anggota"] as const,
  items: [
    {
      id: "gal-01",
      title: "Fasilitas Kandang Closed House Modern",
      category: "Fasilitas Kandang",
      imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
      aspect: "16:9",
      date: "September 2024",
      description: "Tampak interior kandang closed house dengan sistem ventilasi tunnel dan pengaturan suhu otomatis.",
    },
    {
      id: "gal-02",
      title: "Sistem Evaporative Cooling Pad",
      category: "Fasilitas Kandang",
      imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
      aspect: "4:3",
      date: "September 2024",
      description: "Bantalan pendingin evaporatif untuk menjaga kesejukan udara masuk kandang saat cuaca terik.",
    },
    {
      id: "gal-03",
      title: "Pemeriksaan Kesehatan Ayam Harian",
      category: "Fasilitas Kandang",
      imageUrl: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80",
      aspect: "16:9",
      date: "Oktober 2024",
      description: "Tim teknis melakukan inspeksi berkala terhadap pertumbuhan bobot dan keaktifan ayam broiler.",
    },
    {
      id: "gal-04",
      title: "Penimbangan Bobot Panen Akurat",
      category: "Proses Panen",
      imageUrl: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      aspect: "4:3",
      date: "Oktober 2024",
      description: "Proses timbang panen di kandang mitra menggunakan timbangan digital terkalibrasi secara terbuka.",
    },
    {
      id: "gal-05",
      title: "Armada Distribusi Rantai Dingin",
      category: "Proses Panen",
      imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      aspect: "16:9",
      date: "November 2024",
      description: "Pengangkutan ayam karkas menggunakan boks berinsulasi higienis menuju jaringan mitra horeka.",
    },
    {
      id: "gal-06",
      title: "Musyawarah & Temu Anggota Peternak",
      category: "Kegiatan Anggota",
      imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      aspect: "16:9",
      date: "November 2024",
      description: "Forum evaluasi siklus pemeliharaan dan sosialisasi program kemitraan terbaru bersama peternak plasma.",
    },
    {
      id: "gal-07",
      title: "Pelatihan Biosecurity & Sanitasi",
      category: "Kegiatan Anggota",
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      aspect: "4:3",
      date: "Desember 2024",
      description: "Pelatihan teknis pencegahan penyakit unggas yang dipandu oleh dokter hewan penanggung jawab mutu.",
    },
    {
      id: "gal-08",
      title: "Kunjungan Koordinasi Dinas Koperasi",
      category: "Kegiatan Anggota",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      aspect: "16:9",
      date: "Desember 2024",
      description: "Pendampingan dan peninjauan tata kelola administrasi koperasi oleh instansi pembina daerah.",
    },
  ] as readonly GalleryItem[],
} as const;

// ==========================================
// HALAMAN 6: KONTAK & LOKASI (SCR-006)
// ==========================================

export const contactContent = {
  header: {
    title: "Hubungi Tim Koperasi",
    subtitle: "Siap melayani kebutuhan pasokan karkas dan konsultasi kemitraan usaha Anda.",
  },
  formCategories: [
    "Pemesanan Pasokan Karkas Ayam",
    "Kemitraan Peternak Plasma",
    "Kunjungan Fasilitas & Konsultasi",
    "Kerja Sama Bisnis Lainnya",
  ] as const,
  privacyNotice:
    "Informasi yang Anda kirimkan hanya digunakan oleh tim Koperasi Produsen Dirga Pangan Mandiri untuk keperluan korespondensi kemitraan usaha.",
  feedbackMessages: {
    success:
      "Terima kasih! Pesan kemitraan Anda telah kami catat. Anda akan dialihkan ke nomor WhatsApp resmi kami untuk konfirmasi instan.",
    validationErrors: {
      name: "Mohon isi nama lengkap Anda (minimal 3 karakter).",
      businessName: "Mohon isi nama perusahaan atau nama usaha Anda.",
      phone: "Nomor WhatsApp harus valid (format nomor Indonesia minimal 10 digit).",
      message: "Mohon tuliskan keterangan kebutuhan Anda minimal 10 karakter.",
    },
  },
} as const;

// ==========================================
// FOOTER SITUS
// ==========================================

export const footerContent = {
  copyright: "© 2026 Koperasi Produsen Dirga Pangan Mandiri. Seluruh hak cipta dilindungi undang-undang.",
  legalNote: "Badan Hukum Koperasi Produsen resmi terdaftar pada Kementerian Koperasi dan UKM Republik Indonesia.",
} as const;
