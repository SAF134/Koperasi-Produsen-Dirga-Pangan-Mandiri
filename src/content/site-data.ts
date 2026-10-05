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

export interface BusinessUnit {
  readonly id: string;
  readonly name: string;
  readonly type: "Usaha Utama" | "Usaha Pendukung" | "Usaha Tambahan";
  readonly category: string;
  readonly imageUrl: string;
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

export interface PersonProfile {
  readonly name: string;
  readonly category: "Pengurus" | "Pengawas" | "Pendiri";
  readonly role: string;
  readonly imageUrl: string;
}

export interface GalleryItem {
  readonly id: string;
  readonly title: string;
  readonly category: "Fasilitas Usaha" | "Proses Usaha" | "Kegiatan Anggota";
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
    title: "Sentra Fasilitas Usaha Closed House",
    location: "Jawa Barat, Indonesia",
    full: "Sentra Fasilitas Usaha Closed House, Jawa Barat, Indonesia",
  },
  operatingHours: "Senin – Jumat: 08.00 – 16.00 WIB",
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
      mobileSrc: "/images/hero-koperasi.webp",
      fallbackSrc: "/images/hero-koperasi.webp",
      alt: "Fasilitas Sentra Kandang Closed House Koperasi Produsen Dirga Pangan Mandiri",
      badge: "Sentra Fasilitas Koperasi",
      tag: "Placeholder Foto Utama",
      title: "Sentra Koperasi Dirga Pangan",
      caption: "Fasilitas Usaha Closed House Modern & Higienis",
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
      "Menjadi Koperasi Produsen Dirga Pangan Mandiri yang kuat, profesional dan terintegrasi secara horizontal dalam membangun ekosistem peternakan dan pangan berkelanjutan.",
    missions: [
      "Mengembangkan usaha produksi pangan, khususnya peternakan Unggas dan usaha turunannya secara profesional dan berkelanjutan.",
      "Mengintegrasikan kegiatan usaha anggota dari penyediaan sarana produksi, budidaya, pengolahan hingga pemasaran hasil.",
      "Meningkatkan produktivitas, efisiensi dan daya saing usaha anggota.",
      "Membantu anggota memperoleh akses terhadap sarana produksi, teknologi, manajemen, dan jaringan pemasaran.",
      "Mengembangkan produk pangan dan hasil peternakan yang berkualitas serta bernilai tambah.",
      "Menerapkan tata kelola koperasi yang profesional, transparan dan akuntabel.",
    ],
  },
  objectives: [
    "Meningkatkan kesejahteraan anggota pada khususnya dan masyarakat pada umumnya.",
    "Membantu dan mengembangkan usaha anggota koperasi.",
    "Meningkatkan kapasitas produksi dan produktivitas usaha peternakan Unggas.",
    "Membuka akses pasar yang lebih luas bagi produk anggota.",
    "Mengembangkan produk pangan dan hasil peternakan yang memiliki nilai tambah dan daya saing.",
    "Mendukung ketahanan pangan serta pertumbuhan ekonomi masyarakat.",
  ] as readonly string[],
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
      number: "1509260034865",
      status: "Terdaftar Resmi",
      issuer: "Kementerian Investasi / BKPM RI",
      description: "Legalitas perizinan berusaha berbasis risiko sektor peternakan unggas.",
    },
    {
      label: "SK Pengesahan Badan Hukum",
      number: "AHU-0007590.AH.01.29.2026 ",
      status: "Disahkan",
      issuer: "Kementerian Hukum dan HAM RI",
      description: "Surat keputusan pengesahan pendirian badan hukum Koperasi Produsen.",
    },
    {
      label: "Akta Pendirian Koperasi",
      number: "Akta Notaris No. 10 / 14 September 2026 ",
      status: "Akta Otentik",
      issuer: "Notaris Pembuat Akta Koperasi (NPAK)",
      description: "Anggaran dasar dan pengesahan susunan kepengurusan awal koperasi.",
    },
    {
      label: "Izin Usaha Peternakan (IUP)",
      number: "IUP-UNGGAS/2026/0089 ",
      status: "Aktif",
      issuer: "Dinas Penanaman Modal & PTSP Daerah",
      description: "Izin operasional budidaya dan produksi ayam broiler terintegrasi.",
    },
  ] as readonly LegalCredential[],
} as const;

// ==========================================
// HALAMAN 3: USAHA & PRODUKSI (SCR-003)
// ==========================================

export const businessContent = {
  header: {
    title: "Unit & Kegiatan Usaha Koperasi",
    subtitle: "Portofolio kegiatan usaha Koperasi Produsen Dirga Pangan Mandiri yang terbagi dalam Usaha Utama, Usaha Pendukung, dan Usaha Tambahan.",
  },
  mainBusinesses: [
    {
      id: "main-01",
      name: "Budi Daya Ayam Ras Pedaging",
      type: "Usaha Utama",
      category: "Budidaya Peternakan",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "main-02",
      name: "Budi Daya Ayam Ras Petelur",
      type: "Usaha Utama",
      category: "Budidaya Peternakan",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "main-03",
      name: "Budi Daya Ayam Lokal dan Persilangan",
      type: "Usaha Utama",
      category: "Budidaya Peternakan",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "main-04",
      name: "Perdagangan Besar Mesin, Peralatan, dan Perlengkapan Pertanian",
      type: "Usaha Utama",
      category: "Sarana Produksi",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "main-05",
      name: "Perdagangan Besar Binatang Hidup",
      type: "Usaha Utama",
      category: "Perdagangan Ternak",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "main-06",
      name: "Perdagangan Besar Hasil Pertanian dan Hewan Hidup Lainnya",
      type: "Usaha Utama",
      category: "Perdagangan Komoditas",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "main-07",
      name: "Perdagangan Besar Telur dan Hasil Olahan Telur",
      type: "Usaha Utama",
      category: "Hasil Olahan Ternak",
      imageUrl: "/images/placeholder.png",
    },
  ] as readonly BusinessUnit[],
  supportingBusinesses: [
    {
      id: "sup-01",
      name: "Pengolahan dan Pengawetan Daging dan Produk Daging",
      type: "Usaha Pendukung",
      category: "Industri Pengolahan",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "sup-02",
      name: "Kegiatan Rumah Potong Unggas",
      type: "Usaha Pendukung",
      category: "Jasa RPHU Higienis",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "sup-03",
      name: "Perdagangan Besar Daging Ayam dan Daging Ayam Olahan",
      type: "Usaha Pendukung",
      category: "Distribusi Rantai Dingin",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "sup-04",
      name: "Industri Makanan dan Masakan Olahan",
      type: "Usaha Pendukung",
      category: "Manufaktur Pangan",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "sup-05",
      name: "Pendidikan Lainnya Swasta",
      type: "Usaha Pendukung",
      category: "Pelatihan & Edukasi",
      imageUrl: "/images/placeholder.png",
    },
  ] as readonly BusinessUnit[],
  additionalBusinesses: [
    {
      id: "add-01",
      name: "Aktivitas Remediasi dan Pengelolaan Limbah atau Sampah Lainnya",
      type: "Usaha Tambahan",
      category: "Pengelolaan Lingkungan",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "add-02",
      name: "Industri Pupuk Hara Makro Primer Lainnya",
      type: "Usaha Tambahan",
      category: "Manufaktur Pupuk",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "add-03",
      name: "Industri Pupuk Organik, Pupuk Hayati, dan Media Tanam",
      type: "Usaha Tambahan",
      category: "Pupuk Organik & Hayati",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "add-04",
      name: "Angkutan Bermotor untuk Barang Umum",
      type: "Usaha Tambahan",
      category: "Logistik & Transportasi",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "add-05",
      name: "Aktivitas Jasa Boga untuk Acara Tertentu (Event Catering)",
      type: "Usaha Tambahan",
      category: "Jasa Boga & Katering",
      imageUrl: "/images/placeholder.png",
    },
    {
      id: "add-06",
      name: "Aktivitas Pemberian Kredit oleh Koperasi Konvensional",
      type: "Usaha Tambahan",
      category: "Permodalan Koperasi",
      imageUrl: "/images/placeholder.png",
    },
  ] as readonly BusinessUnit[],
} as const;

// ==========================================
// HALAMAN 4: KEORGANISASIAN (SCR-004)
// ==========================================

export const organizationContent = {
  header: {
    title: "Struktur Tata Kelola Koperasi",
    subtitle: "Berlandaskan musyawarah anggota, transparansi pembukuan, dan akuntabilitas kepemimpinan.",
  },
  pengurus: {
    ketua: {
      name: "Setya Winarno",
      category: "Pengurus",
      role: "Ketua",
      imageUrl: "/images/placeholder_person.png",
    } as PersonProfile,
    officers: [
      {
        name: "Ajar Widoyoko",
        category: "Pengurus",
        role: "Wakil Ketua Bidang Organisasi",
        imageUrl: "/images/placeholder_person.png",
      },
      {
        name: "Mohamad Mansyur",
        category: "Pengurus",
        role: "Wakil Ketua Bidang Usaha",
        imageUrl: "/images/placeholder_person.png",
      },
      {
        name: "Robiatun Nazilah",
        category: "Pengurus",
        role: "Sekretaris",
        imageUrl: "/images/placeholder_person.png",
      },
      {
        name: "Aurum Fitrisari Sakti",
        category: "Pengurus",
        role: "Wakil Sekretaris",
        imageUrl: "/images/placeholder_person.png",
      },
      {
        name: "Rohmad Susilowarno",
        category: "Pengurus",
        role: "Bendahara",
        imageUrl: "/images/placeholder_person.png",
      },
      {
        name: "Farhan Satrio Yudanto",
        category: "Pengurus",
        role: "Wakil Bendahara",
        imageUrl: "/images/placeholder_person.png",
      },
    ] as readonly PersonProfile[],
  },
  pengawas: {
    ketua: {
      name: "Tri Hardiyanto",
      category: "Pengawas",
      role: "Ketua",
      imageUrl: "/images/placeholder_person.png",
    } as PersonProfile,
    members: [
      {
        name: "Muslikhin Irmat",
        category: "Pengawas",
        role: "Anggota",
        imageUrl: "/images/placeholder_person.png",
      },
      {
        name: "Indra Aquarius",
        category: "Pengawas",
        role: "Anggota",
        imageUrl: "/images/placeholder_person.png",
      },
    ] as readonly PersonProfile[],
  },
  pendiri: [
    {
      name: "Setya Winarno",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Robiatun Nazilah",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Rohmad Susilowarno",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Ajar Widoyoko",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Mohamad Mansyur",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Aurum Fitrisari Sakti",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Tuan Farhan Satrio Yudanto",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Tri Hardiyanto",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Muslikhin Irmat",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Indra Aquarius",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Anita Herdiyati",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Ramadhana Dwi Putra Mandiri",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Aris Kumaidi",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Muhtar",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Faisal Adlan",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Fiki Rahaditya Putra",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Firlyana Mentari Datya Putri",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Imam Ali Suwarno",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
    },
    {
      name: "Syauqi Akmal Fadhali",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/syauqi.jpg",
    },
    {
      name: "Tema Panunggal",
      category: "Pendiri",
      role: "Pendiri",
      imageUrl: "/images/placeholder_person.png",
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
        description: "Pencatatan keuangan berkala yang dapat diakses oleh dewan pengawas untuk menjamin integritas penggunaan dana koperasi.",
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
  categories: ["Semua", "Fasilitas Usaha", "Proses Usaha", "Kegiatan Anggota"] as const,
  items: [
    {
      id: "gal-01",
      title: "Fasilitas Usaha Closed House Modern",
      category: "Fasilitas Usaha",
      imageUrl: "/images/placeholder.png",
      aspect: "16:9",
      date: "September 2024",
      description: "Tampak interior kandang closed house dengan sistem ventilasi tunnel dan pengaturan suhu otomatis.",
    },
    {
      id: "gal-02",
      title: "Sistem Evaporative Cooling Pad",
      category: "Fasilitas Usaha",
      imageUrl: "/images/placeholder.png",
      aspect: "16:9",
      date: "September 2024",
      description: "Bantalan pendingin evaporatif untuk menjaga kesejukan udara masuk kandang saat cuaca terik.",
    },
    {
      id: "gal-03",
      title: "Pemeriksaan Kesehatan Ayam Harian",
      category: "Fasilitas Usaha",
      imageUrl: "/images/placeholder.png",
      aspect: "16:9",
      date: "Oktober 2024",
      description: "Tim teknis melakukan inspeksi berkala terhadap pertumbuhan bobot dan keaktifan ayam broiler.",
    },
    {
      id: "gal-04",
      title: "Penimbangan Bobot Panen Akurat",
      category: "Proses Usaha",
      imageUrl: "/images/placeholder.png",
      aspect: "16:9",
      date: "Oktober 2024",
      description: "Proses timbang panen di kandang mitra menggunakan timbangan digital terkalibrasi secara terbuka.",
    },
    {
      id: "gal-05",
      title: "Armada Distribusi Rantai Dingin",
      category: "Proses Usaha",
      imageUrl: "/images/placeholder.png",
      aspect: "16:9",
      date: "November 2024",
      description: "Pengangkutan ayam karkas menggunakan boks berinsulasi higienis menuju jaringan mitra horeka.",
    },
    {
      id: "gal-06",
      title: "Musyawarah & Temu Anggota Peternak",
      category: "Kegiatan Anggota",
      imageUrl: "/images/placeholder.png",
      aspect: "16:9",
      date: "November 2024",
      description: "Forum evaluasi siklus pemeliharaan dan sosialisasi program kemitraan terbaru bersama peternak plasma.",
    },
    {
      id: "gal-07",
      title: "Pelatihan Biosecurity & Sanitasi",
      category: "Kegiatan Anggota",
      imageUrl: "/images/placeholder.png",
      aspect: "16:9",
      date: "Desember 2024",
      description: "Pelatihan teknis pencegahan penyakit unggas yang dipandu oleh dokter hewan penanggung jawab mutu.",
    },
    {
      id: "gal-08",
      title: "Kunjungan Koordinasi Dinas Koperasi",
      category: "Kegiatan Anggota",
      imageUrl: "/images/placeholder.png",
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
  legalNote: "Badan Hukum Koperasi Produsen Dirga Pangan Mandiri resmi terdaftar pada Kementerian Hukum Republik Indonesia dengan Nomor SK AHU-0007590.AH.01.29.2026.",
} as const;
