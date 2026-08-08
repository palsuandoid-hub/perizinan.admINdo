export type IconName =
  | 'building'
  | 'calculator'
  | 'handshake'
  | 'sparkle'
  | 'check'
  | 'phone'
  | 'mail'
  | 'mapPin'
  | 'clock'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'fileText'
  | 'shieldCheck'
  | 'users'
  | 'zap'
  | 'heartHandshake'
  | 'messageCircle'
  | 'lock'
  | 'chevronDown'
  | 'arrowRight'
  | 'star'
  | 'quote';

export interface ServiceSummary {
  id: string;
  title: string;
  icon: IconName;
  short: string;
  items: string[];
  ctaLabel: string;
  ctaTarget: 'layanan' | 'soon';
}

export interface ServiceDetail {
  id: string;
  title: string;
  icon: IconName;
  tagline: string;
  subServices: string[];
  requirements: string[];
  ctaLabel: string;
  soon?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  message: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  whatsapp: string;
  whatsappDisplay: string;
  whatsappLink: string;
  phone: string;
  email: string;
  address: string;
  operationalHours: string;
  mapsEmbed: string;
  mapsLink: string;
  instagram: string;
  instagramHandle: string;
  facebook: string;
  tiktok: string;
  qrCodeUrl: string;
}

const waNumber = '62881024197970';
const waUrl = `https://wa.me/${waNumber}`;

export const contact: ContactInfo = {
  whatsapp: waNumber,
  whatsappDisplay: '+62 881-0241-97970',
  whatsappLink: waUrl,
  phone: '083844203305',
  email: 'info@perizinanadmindo.com',
  address: 'Bandung, Jawa Barat, Indonesia',
  operationalHours: 'Senin – Sabtu, 08.00 – 17.00 WIB',
  mapsEmbed:
    'https://www.google.com/maps?q=Bandung,+West+Java,+Indonesia&output=embed',
  mapsLink: 'https://maps.google.com/?q=Bandung,+West+Java,+Indonesia',
  instagram: 'https://www.instagram.com/lani_atmaja?igsh=MXJ2cDN2em5vMHNscQ==',
  instagramHandle: '@lani_atmaja',
  facebook: 'https://www.facebook.com/share/1bJzj8bCDf/',
  tiktok: 'https://tiktok.com/@perizinanadmindo',
  qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(waUrl)}`,
};

export const waLink = (message?: string) => {
  const base = `https://wa.me/${contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const serviceSummaries: ServiceSummary[] = [
  {
    id: 'oss',
    title: 'Jasa OSS',
    icon: 'building',
    short: 'Pengurusan NIB, perubahan data OSS, penambahan KBLI, hingga pendampingan OSS.',
    items: [
      'Pembuatan NIB',
      'Perubahan Data OSS',
      'Penambahan KBLI',
      'Perubahan KBLI',
      'Penambahan Kegiatan Usaha',
      'Perubahan Data Usaha',
      'Pembaruan Data Pelaku Usaha',
      'Pengurusan Perizinan Berusaha',
      'Pendampingan OSS',
      'Konsultasi OSS',
    ],
    ctaLabel: 'Selengkapnya',
    ctaTarget: 'layanan',
  },
  {
    id: 'coretax',
    title: 'Jasa Coretax',
    icon: 'calculator',
    short: 'Registrasi Coretax, aktivasi akun, pelaporan SPT, hingga konsultasi perpajakan.',
    items: [
      'Registrasi Coretax',
      'Aktivasi Akun Coretax',
      'Pemutakhiran Data Pajak',
      'Pelaporan SPT Tahunan Orang Pribadi',
      'Pelaporan SPT Tahunan Badan',
      'Pelaporan SPT Masa',
      'Pembuatan Kode Billing',
      'Pendampingan Administrasi Pajak',
      'Konsultasi Perpajakan',
    ],
    ctaLabel: 'Selengkapnya',
    ctaTarget: 'layanan',
  },
  {
    id: 'pendampingan',
    title: 'Jasa Pendampingan',
    icon: 'handshake',
    short: 'Konsultasi legalitas, pendampingan perizinan, dan administrasi UMKM sampai selesai.',
    items: [
      'Konsultasi Legalitas Usaha',
      'Pendampingan Perizinan',
      'Pendampingan Administrasi UMKM',
      'Pendampingan Pengembangan Legalitas',
      'Pendampingan Persiapan Dokumen',
      'Pendampingan Setelah NIB Terbit',
    ],
    ctaLabel: 'Selengkapnya',
    ctaTarget: 'layanan',
  },
  {
    id: 'tambahan',
    title: 'Layanan Tambahan',
    icon: 'sparkle',
    short: 'Segera Hadir — pendirian badan usaha, perubahan akta, dan perizinan khusus.',
    items: [
      'Pendirian Badan Usaha',
      'Perubahan Akta',
      'Pengurusan Legalitas Lainnya',
      'Perizinan Khusus',
    ],
    ctaLabel: 'Segera Hadir',
    ctaTarget: 'soon',
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'oss',
    title: 'Jasa OSS',
    icon: 'building',
    tagline: 'Pengurusan dan pendampingan lisensi berbasis OSS secara menyeluruh.',
    subServices: [
      'Pembuatan NIB',
      'Perubahan NIB',
      'Penambahan KBLI',
      'Perubahan KBLI',
      'Penambahan Kegiatan Usaha',
      'Perubahan Data Usaha',
      'Pembaruan OSS',
      'Pendampingan OSS',
      'Konsultasi OSS',
    ],
    requirements: [
      'KTP',
      'NPWP (jika ada)',
      'Email aktif',
      'Nomor HP aktif',
      'Data usaha',
      'Alamat usaha',
      'KBLI (bila sudah ada)',
    ],
    ctaLabel: 'Konsultasi WhatsApp',
  },
  {
    id: 'coretax',
    title: 'Jasa Coretax',
    icon: 'calculator',
    tagline: 'Registrasi, pelaporan, dan pendampingan administrasi pajak berbasis Coretax.',
    subServices: [
      'Registrasi Coretax',
      'Aktivasi Coretax',
      'Pelaporan SPT Tahunan OP',
      'Pelaporan SPT Tahunan Badan',
      'Pelaporan SPT Masa',
      'Pembuatan Kode Billing',
      'Pemutakhiran Data Pajak',
      'Konsultasi Pajak',
    ],
    requirements: [
      'NPWP',
      'KTP',
      'Email',
      'Bukti Potong (jika diperlukan)',
      'Dokumen pendukung sesuai layanan',
    ],
    ctaLabel: 'Konsultasi WhatsApp',
  },
  {
    id: 'pendampingan',
    title: 'Jasa Pendampingan',
    icon: 'handshake',
    tagline: 'Pendampingan menyeluruh untuk legalitas dan administrasi usaha Anda.',
    subServices: [
      'Konsultasi Legalitas',
      'Pendampingan OSS',
      'Pendampingan Administrasi',
      'Pendampingan UMKM',
      'Pendampingan Legalitas Usaha',
    ],
    requirements: ['Menyesuaikan kebutuhan layanan.'],
    ctaLabel: 'Konsultasi',
  },
  {
    id: 'tambahan',
    title: 'Layanan Tambahan',
    icon: 'sparkle',
    tagline: 'Layanan ekspansi yang akan segera tersedia untuk Anda.',
    subServices: [
      'Pendirian PT',
      'Pendirian CV',
      'Perubahan Akta',
      'Perizinan Khusus',
      'Legalitas Lainnya',
    ],
    requirements: ['Persyaratan akan diberitahukan saat layanan tersedia.'],
    ctaLabel: 'Segera Hadir',
    soon: true,
  },
];

export const advantages: { title: string; icon: IconName; description: string }[] = [
  { title: 'Proses Cepat', icon: 'zap', description: 'Pengurusan dilakukan secepat mungkin tanpa proses berbelit.' },
  { title: 'Pelayanan Ramah', icon: 'heartHandshake', description: 'Tim kami siap membantu dengan ramah dan sabar.' },
  { title: 'Konsultasi Mudah', icon: 'messageCircle', description: 'Konsultasi cukup lewat WhatsApp, kapan saja.' },
  { title: 'Harga Transparan', icon: 'fileText', description: 'Biaya jelas di awal, tanpa biaya tersembunyi.' },
  { title: 'Pendampingan Sampai Selesai', icon: 'shieldCheck', description: 'Kami dampingi sampai dokumen Anda terbit.' },
  { title: 'Data Aman & Rahasia', icon: 'lock', description: 'Data Anda kami jaga kerahasiaannya sepenuhnya.' },
];

export interface NibTestimonial {
  company: string;
  category: string;
  location: string;
  nibNo: string;
  review: string;
}

export const nibTestimonials: NibTestimonial[] = [
  {
    company: 'PT SAMUDRA HOLIDAY TRANS',
    category: 'Angkutan Bus Pariwisata',
    location: 'Kab. Bandung, Jawa Barat',
    nibNo: '090726008****',
    review: 'Proses penerbitan NIB usaha angkutan pariwisata cepat, transparan, dan resmi terdaftar di OSS.',
  },
  {
    company: 'CV PURI WIJAYA ABADI',
    category: 'Perdagangan Eceran Tekstil & Tas',
    location: 'Kab. Bandung, Jawa Barat',
    nibNo: '310726009****',
    review: 'Sangat membantu pengurusan izin perizinan tunggal UMKM kami. Mantap!',
  },
  {
    company: 'PT ATLANTIK BIRD INDONESIA',
    category: 'Perdagangan Pakan & Obat Hewan',
    location: 'Jakarta Barat, DKI Jakarta',
    nibNo: '090726009****',
    review: 'Pelayanan profesional, perizinan berusaha lengkap tanpa kendala.',
  },
  {
    company: 'PT WAHANA INTERIOR PERSADA',
    category: 'Dekorasi Interior & Konstruksi',
    location: 'Kab. Bandung, Jawa Barat',
    nibNo: '290726009****',
    review: 'NIB dan sertifikat standar untuk jasa konstruksi interior terbit dengan lancar.',
  },
  {
    company: 'CV ARTAVIA',
    category: 'Perdagangan Mesin & Instalasi Listrik',
    location: 'Kab. Bandung Barat, Jawa Barat',
    nibNo: '912031408****',
    review: 'Respon cepat dan penanganan izin perdagangan besar sangat memuaskan.',
  },
  {
    company: 'PT WAHANA INTERIOR NASIONAL',
    category: 'Desain Interior & Perdagangan Tekstil',
    location: 'Kab. Bandung, Jawa Barat',
    nibNo: '290726011****',
    review: 'Sangat direkomendasikan untuk pengurusan legalitas perusahaan baru.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Budi Santoso',
    role: 'Pemilik UMKM Kuliner',
    message: 'Berkat Perizinan.AdmINdo proses NIB saya selesai tanpa ribet. Timnya responsif dan sabar membimbing saya.',
    initials: 'BS',
  },
  {
    name: 'Siti Rahayu',
    role: 'Pelaku Usaha Fashion',
    message: 'Pelayanan sangat memuaskan. KBLI tambahan saya urus dalam waktu singkat dan semua jelas.',
    initials: 'SR',
  },
  {
    name: 'Andi Wijaya',
    role: 'Direktur CV Maju Jaya',
    message: 'Coretax saya bingung dulu, tapi setelah dibantu di sini semua jadi gampang. SPT badan beres!',
    initials: 'AW',
  },
  {
    name: 'Dewi Lestari',
    role: 'Pemilik Toko Online',
    message: 'Dampingannya benar-benar sampai selesai. NIB terbit, saya tetap dibantu untuk langkah selanjutnya.',
    initials: 'DL',
  },
  {
    name: 'Rizki Pratama',
    role: 'Freelancer & Pelaku Usaha',
    message: 'Harga transparan, tidak ada biaya tersembunyi. Prosesnya cepat dan hasilnya memuaskan.',
    initials: 'RP',
  },
  {
    name: 'Maya Sari',
    role: 'Pemilik Yayasan Sosial',
    message: 'Konsultasinya enak banget, tidak dipersulit. Semua dokumen dipandu persiapan dan pengurusannya.',
    initials: 'MS',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Berapa lama pembuatan NIB?',
    answer: 'Umumnya 1–3 hari kerja setelah dokumen persyaratan lengkap, tergantung proses verifikasi sistem OSS.',
  },
  {
    question: 'Apa saja syarat membuat NIB?',
    answer: 'KTP, NPWP (jika ada), email aktif, nomor HP aktif, data usaha, alamat usaha, dan KBLI (bila sudah ada).',
  },
  {
    question: 'Apakah bisa konsultasi dulu?',
    answer: 'Tentu. Anda dapat berkonsultasi gratis via WhatsApp sebelum memutuskan menggunakan layanan kami.',
  },
  {
    question: 'Apakah melayani seluruh Indonesia?',
    answer: 'Ya, kami melayani pelaku usaha dari seluruh wilayah Indonesia secara online.',
  },
  {
    question: 'Apa itu OSS dan mengapa penting?',
    answer: 'OSS (Online Single Submission) adalah sistem pemerintah untuk pendaftaran izin berusaha. NIB yang diterbitkan berlaku sebagai identitas usaha sekaligus NPWP perusahaan.',
  },
  {
    question: 'Apa itu Coretax?',
    answer: 'Coretax adalah sistem administrasi pajak modern Direktorat Jenderal Pajak yang menggabungkan registrasi, pelaporan, dan pembayaran pajak dalam satu platform.',
  },
  {
    question: 'Apakah saya perlu datang ke kantor?',
    answer: 'Tidak perlu. Seluruh proses dan konsultasi dapat dilakukan secara online melalui WhatsApp dan email.',
  },
  {
    question: 'Berapa biaya pengurusan NIB?',
    answer: 'Biaya bervariasi tergantung kebutuhan. Hubungi kami via WhatsApp untuk mendapatkan informasi biaya yang transparan.',
  },
  {
    question: 'Bagaimana cara pelaporan SPT Tahunan?',
    answer: 'Kami akan memandu Anda menyiapkan dokumen, lalu melaporkan SPT Tahunan melalui sistem Coretax sesuai jenis wajib pajak (orang pribadi atau badan).',
  },
  {
    question: 'Apakah data saya aman?',
    answer: 'Tentu. Seluruh data dan dokumen Anda kami jaga kerahasiaannya dan hanya digunakan untuk keperluan pengurusan yang Anda minta.',
  },
];
