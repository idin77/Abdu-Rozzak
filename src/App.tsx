import React, { useState, useEffect, useMemo, useRef } from 'react';

import articleImg1 from './assets/images/septic_tank_inspection_1791207275527.jpg';
import articleImg2 from './assets/images/bathroom_toilet_care_1791207290292.jpg';
import articleImg3 from './assets/images/kitchen_sink_drain_1791207304577.jpg';
import articleImg4 from './assets/images/vacuum_truck_service_1791207318875.jpg';
import articleImg5 from './assets/images/inspection_chamber_drain_1791207332865.jpg';
import articleImg6 from './assets/images/toilet_plunger_emergency_1791207348420.jpg';

export interface CustomerTestimonial {
  id: number;
  name: string;
  roleOrLocation: string;
  category: 'sedot_wc' | 'mampet' | 'stp' | 'darurat';
  categoryLabel: string;
  serviceBadge: string;
  rating: number;
  date: string;
  verified: boolean;
  avatarInitials: string;
  avatarColor: string;
  headline: string;
  text: string;
  tagHighlight: string;
  highlightIcon: string;
}

const customerTestimonialsData: CustomerTestimonial[] = [
  {
    id: 1,
    name: 'Hendra Wijaya',
    roleOrLocation: 'Grand Galaxy City, Bekasi Selatan',
    category: 'sedot_wc',
    categoryLabel: 'Sedot WC',
    serviceBadge: 'Kuras Septic Tank & Lumpur',
    rating: 5,
    date: '2 hari lalu',
    verified: true,
    avatarInitials: 'HW',
    avatarColor: '#0284C7',
    headline: 'Septic tank penuh tuntas disedot sampai ke dasar lumpur!',
    text: 'Rumah saya di perumahan dengan akses jalan yang cukup ramai, tapi armada Mitra Bersih sangat sigap. Selang vakum panjang menjangkau tanpa hambatan, septic tank dikuras tuntas sampai ke endapan lumpur padat. Tidak ada bau tercecer sama sekali ke teras.',
    tagHighlight: 'Selang 50m & Bebas Bau',
    highlightIcon: 'fa-wind',
  },
  {
    id: 2,
    name: 'Ibu Ratna Dewi',
    roleOrLocation: 'Harapan Indah, Medan Satria',
    category: 'mampet',
    categoryLabel: 'Saluran Mampet',
    serviceBadge: 'Pelancaran Saluran Wastafel & Kloset',
    rating: 5,
    date: '4 hari lalu',
    verified: true,
    avatarInitials: 'RD',
    avatarColor: '#DB2777',
    headline: 'Wastafel dapur mampet beku lemak langsung plong tanpa bongkar lantai',
    text: 'Lemak sisa masakan sudah menumpuk bertahun-tahun di pipa pembuangan. Teknisi datang membawa mesin spiral fleksibel modern, dalam 35 menit air langsung mengalir kencang tanpa perlu merusak ubin keramik. Biayanya pun sangat wajar dan transparan!',
    tagHighlight: 'Tanpa Bongkar Keramik',
    highlightIcon: 'fa-wrench',
  },
  {
    id: 3,
    name: 'Rudi Hartono (Owner Resto)',
    roleOrLocation: 'Ruko Kemang Pratama, Rawalumbu',
    category: 'stp',
    categoryLabel: 'Limbah STP',
    serviceBadge: 'Sedot Grease Trap & STP Ruko',
    rating: 5,
    date: '1 minggu lalu',
    verified: true,
    avatarInitials: 'RH',
    avatarColor: '#16A34A',
    headline: 'Mitra andalan restoran kami untuk kuras bak lemak STP berkala',
    text: 'Sebagai pengelola rumah makan, pembersihan grease trap adalah hal mutlak agar tidak mencemari lingkungan. Tim Mitra Bersih selalu disiplin tepat waktu setiap jadwal maintenance bulanan. Pembuangan limbah resmi ke IPLT Pemda Bekasi dengan dokumen lengkap.',
    tagHighlight: 'Izin Resmi DLH Bekasi',
    highlightIcon: 'fa-file-shield',
  },
  {
    id: 4,
    name: 'dr. Farhan Maulana',
    roleOrLocation: 'Summarecon Bekasi, Bekasi Utara',
    category: 'darurat',
    categoryLabel: 'Darurat 24 Jam',
    serviceBadge: 'Panggilan Urgent Tengah Malam',
    rating: 5,
    date: '1 minggu lalu',
    verified: true,
    avatarInitials: 'FM',
    avatarColor: '#DC2626',
    headline: 'Telepon jam 11 malam saat kumpul keluarga, 20 menit armada sudah tiba',
    text: 'Kejadian kloset mendadak meluap saat ada kumpul keluarga besar di rumah. Panik sekali, langsung chat admin WhatsApp Mitra Bersih. Respon dalam 1 menit dan armada tiba sangat kilat. Petugas santun, sigap, dan masalah selesai tuntas malam itu juga!',
    tagHighlight: 'Respon Kilat < 20 Menit',
    highlightIcon: 'fa-bolt',
  },
  {
    id: 5,
    name: 'Hj. Nurhasanah',
    roleOrLocation: 'Jatiasih (Dekat Pasar Rebo), Bekasi',
    category: 'sedot_wc',
    categoryLabel: 'Sedot WC',
    serviceBadge: 'Sedot WC Rumah Tangga',
    rating: 5,
    date: '2 minggu lalu',
    verified: true,
    avatarInitials: 'NH',
    avatarColor: '#7C3AED',
    headline: 'Lumpur septic tank yang membatu 8 tahun berhasil dihancurkan',
    text: 'Kondisi septic tank sudah keras karena lama tidak disedot. Teknisi dengan sabar menyemprotkan air tekanan tinggi berkali-kali sampai encer dan tersedot tuntas. Petugasnya ramah, jujur, dan tidak menaikkan harga di tengah pengerjaan. Sangat amanah!',
    tagHighlight: 'Kuras Lumpur Tuntas',
    highlightIcon: 'fa-shield-halved',
  },
  {
    id: 6,
    name: 'Bambang Pamungkas, S.T.',
    roleOrLocation: 'Perumahan Pondok Timur Indah, Mustikajaya',
    category: 'mampet',
    categoryLabel: 'Saluran Mampet',
    serviceBadge: 'Pelancaran Pipa Kamar Mandi',
    rating: 5,
    date: '2 minggu lalu',
    verified: true,
    avatarInitials: 'BP',
    avatarColor: '#D97706',
    headline: 'Pipa pembuangan lantai 2 tersumbat, ditangani tuntas bergaransi',
    text: 'Pipa pembuangan air kamar mandi atas mampet parah. Dikerjakan memakai mesin hidro vakum tanpa merusak instalasi pipa PVC rumah. Ditambah garansi kerja yang membuat kami sekeluarga merasa sangat tenang. Rekomendasi teratas di Bekasi!',
    tagHighlight: 'Garansi Pekerjaan Resmi',
    highlightIcon: 'fa-certificate',
  },
  {
    id: 7,
    name: 'Linda Kusuma',
    roleOrLocation: 'Taman Galaxi Indah, Bekasi Barat',
    category: 'sedot_wc',
    categoryLabel: 'Sedot WC',
    serviceBadge: 'Kuras Septic Tank Rumah',
    rating: 5,
    date: '3 minggu lalu',
    verified: true,
    avatarInitials: 'LK',
    avatarColor: '#059669',
    headline: 'Harga sesuai konfirmasi awal di WhatsApp, tanpa biaya tersembunyi',
    text: 'Paling kapok dengan tukang sedot WC lain yang awalnya murah tapi pas sampai di lokasi minta biaya tambahan ini itu. Di Mitra Bersih dari awal tanya admin sampai teknisi selesai harga sama persis tanpa ada biaya siluman. Sangat transparan dan profesional.',
    tagHighlight: 'Harga Transparan di Awal',
    highlightIcon: 'fa-tags',
  },
  {
    id: 8,
    name: 'Agus Setiawan',
    roleOrLocation: 'Kawasan Pergudangan & Industri, Bantargebang',
    category: 'stp',
    categoryLabel: 'Limbah STP',
    serviceBadge: 'Kuras Bak Kontrol & STP Pabrik',
    rating: 5,
    date: '1 bulan lalu',
    verified: true,
    avatarInitials: 'AS',
    avatarColor: '#4F46E5',
    headline: 'Armada tangki besar, teknisi taat K3 dan surat jalan resmi',
    text: 'Untuk kebutuhan fasilitas industri pergudangan, kami butuh vendor penyedotan limbah yang punya izin AMDAL resmi dan kapasitas tangki memadai. Mitra Bersih memenuhi semua kriteria: teknisi memakai APD lengkap, kerja rapi, dan administrasi tertib.',
    tagHighlight: 'Standar K3 & Kapasitas Besar',
    highlightIcon: 'fa-industry',
  },
  {
    id: 9,
    name: 'Dedi Kurniawan',
    roleOrLocation: 'Pondok Gede (Masuk Gang Melati), Bekasi',
    category: 'darurat',
    categoryLabel: 'Darurat 24 Jam',
    serviceBadge: 'Penanganan Luapan Air WC',
    rating: 5,
    date: '1 bulan lalu',
    verified: true,
    avatarInitials: 'DK',
    avatarColor: '#EA580C',
    headline: 'Masuk gang sempit tetap dilayani dengan armada fleksibel',
    text: 'Rumah saya di gang buntu yang mobil biasa tidak bisa putar balik. Mitra Bersih menurunkan armada dengan selang panjang yang ditarik rapi ke dalam rumah tanpa mengganggu tetangga. Pukul 2 malam tetap melayani dengan ramah!',
    tagHighlight: 'Akses Gang Sempit Lancar',
    highlightIcon: 'fa-truck-fast',
  },
];

interface GalleryItem {
  id: number;
  image: string;
  fallbackImage: string;
  title: string;
  desc: string;
}

export interface FAQItem {
  id: number;
  category: 'prosedur' | 'harga' | 'legalitas';
  categoryLabel: string;
  serviceGroup: 'prosedur' | 'harga' | 'legalitas';
  serviceGroupLabel: string;
  badgeClass: string;
  question: string;
  answer: string;
}

export interface ArticleItem {
  id: number;
  category: 'septic' | 'pipe' | 'emergency';
  categoryLabel: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  fallbackImage: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bullets?: string[];
    }[];
    conclusion: string;
  };
}

const articlesData: ArticleItem[] = [
  {
    id: 1,
    category: 'septic',
    categoryLabel: 'Perawatan Septic Tank',
    title: '5 Tanda Septic Tank Mulai Penuh & Kapan Waktu Tepat Sedot WC',
    excerpt: 'Jangan tunggu sampai kotoran meluap ke lantai kamar mandi. Kenali tanda-tanda awal septic tank penuh agar penanganannya lebih mudah dan higienis.',
    readTime: '4 Menit Baca',
    date: '3 Oktober 2026',
    image: articleImg1,
    fallbackImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'Banyak pemilik rumah baru menyadari septic tank mereka penuh saat kotoran sudah tidak bisa disiram sama sekali atau bahkan meluap ke lantai kamar mandi. Padahal septic tank selalu memberikan indikasi awal sebelum mengalami kepenuhan total.',
      sections: [
        {
          heading: '1. Kloset Mengeluarkan Suara "Gurgling" (Gleguk) Saat Disiram',
          body: 'Jika saat menekan flush atau mengguyur air terdengar suara gelembung udara dari dalam leher kloset, itu pertanda saluran udara terdesak oleh ketinggian air limbah di tangki septic.',
        },
        {
          heading: '2. Aliran Air Kloset Turun Lambat Secara Konsisten',
          body: 'Berbeda dengan mampet akibat sumbatan mendadak (seperti benda asing), septic tank yang penuh membuat air turun perlahan di semua kloset yang terhubung ke tangki yang sama.',
        },
        {
          heading: '3. Timbul Bau Busuk Menusuk di Sekitar Kamar Mandi atau Halaman',
          body: 'Gas metana dan hidrogen sulfida yang tidak terserap resapan tanah akan keluar melalui celah tutup tangki atau ventilasi, menimbulkan aroma kurang sedap yang terus menerus.',
        },
        {
          heading: '4. Rumput di Dekat Area Tangki Resapan Tumbuh Terlalu Subur',
          body: 'Limbah cair yang meluap dari tangki resapan ke permukaan tanah bertindak seperti pupuk, menyebabkan rumput di atas tangki tampak jauh lebih hijau dan basah dibanding area sekitarnya.',
        },
      ],
      conclusion: 'Jika Anda menemukan 2 dari 4 tanda di atas, segera hubungi jasa sedot WC profesional sebelum septic tank mengeras dan menimbulkan kerak padat yang lebih sulit dibersihkan.',
    },
  },
  {
    id: 2,
    category: 'pipe',
    categoryLabel: 'Cegah Pipa Mampet',
    title: 'Jangan Buang 7 Benda Ini ke Kloset: Pemicu Utama WC Mampet Parah',
    excerpt: 'Tisu basah, pembalut, sisa minyak goreng, hingga puntung rokok tidak akan hancur oleh air dan seringkali tersangkut di leher angsa kloset rumah tangga.',
    readTime: '3 Menit Baca',
    date: '28 September 2026',
    image: articleImg2,
    fallbackImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'Kloset dirancang hanya untuk menampung air dan kotoran manusia yang mudah larut secara alami. Membuang benda asing ke dalam kloset adalah penyebab nomor satu 85% kasus pipa mampet di rumah.',
      sections: [
        {
          heading: 'Daftar Benda Pantangan Masuk Kloset',
          body: 'Pastikan anggota keluarga dan tamu di rumah mengetahui bahwa benda-benda berikut wajib dibuang ke tempat sampah:',
          bullets: [
            'Tisu Basah (Wet Wipes): Mengandung serat sintetis/plastik yang tidak dapat hancur dalam air.',
            'Pembalut & Popok Bayi: Menyerap air dan mengembang hingga 5 kali lipat, menyumbat seketika.',
            'Minyak Goreng & Kuah Lemak: Membeku di dinding pipa dingin dan membentuk gumpalan keras (fatberg).',
            'Rambut Rontok: Mengikat kotoran lain menjadi jaring padat yang sulit ditembus air.',
            'Benang Gigi (Dental Floss) & Cotton Bud: Batang plastik dan benang nilon mengunci kelokan pipa.',
            'Puntung Rokok: Filter rokok mengandung selulosa asetat yang sulit terurai.',
          ],
        },
      ],
      conclusion: 'Sediakan tempat sampah kecil tertutup di setiap kamar mandi untuk menghindari godaan membuang sampah kecil ke dalam lubang kloset.',
    },
  },
  {
    id: 3,
    category: 'pipe',
    categoryLabel: 'Cegah Pipa Mampet',
    title: 'Cara Praktis Mengatasi Saluran Wastafel Dapur Mampet Akibat Lemak',
    excerpt: 'Minyak dan sisa kuah masakan yang mengeras di dinding pipa PVC dapat dibersihkan dengan metode ramah pipa tanpa bahan kimia soda api berbahaya.',
    readTime: '5 Menit Baca',
    date: '22 September 2026',
    image: articleImg3,
    fallbackImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'Wastafel cuci piring adalah saluran yang paling sering bermasalah karena akumulasi minyak goreng, sabun cuci piring, dan partikel sisa makanan yang menempel di leher pipa sifon (P-trap).',
      sections: [
        {
          heading: 'Metode Alami Tanpa Merusak Pipa PVC',
          body: 'Hindari penggunaan soda api berlebihan karena panas reaksinya dapat membuat pipa PVC melengkung atau bocor di sambungan lem.',
          bullets: [
            'Siram 2 liter air panas (bukan air mendidih murni) untuk melunakkan lapisan lemak beku.',
            'Taburkan 1 cangkir baking soda ke dalam lubang wastafel dan diamkan selama 10 menit.',
            'Tuangkan 1 cangkir cuka putih. Biarkan terjadi reaksi busa pembersih selama 20-30 menit.',
            'Bilas kembali dengan air hangat mengalir deras untuk mendorong lemak yang terlepas ke bak kontrol.',
          ],
        },
        {
          heading: 'Pemasangan Grease Trap Sederhana',
          body: 'Untuk dapur yang sering memasak makanan berminyak, pasang alat penyaring lemak (grease trap) di bawah wastafel agar lemak tidak pernah masuk ke saluran pipa utama.',
        },
      ],
      conclusion: 'Lakukan perawatan bilas air hangat ini seminggu sekali untuk mencegah penumpukan kerak lemak membandel.',
    },
  },
  {
    id: 4,
    category: 'septic',
    categoryLabel: 'Perawatan Septic Tank',
    title: 'Berapa Tahun Sekali Idealnya Melakukan Kuras Septic Tank Rumah?',
    excerpt: 'Standar dinas kesehatan menganjurkan pengurasan rutin setiap 2 hingga 3 tahun sekali untuk menjaga bakteri pengurai dan mencegah pencemaran air sumur.',
    readTime: '4 Menit Baca',
    date: '15 September 2026',
    image: articleImg4,
    fallbackImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'Banyak orang beranggapan bahwa septic tank yang baik adalah yang tidak pernah disedot selama belasan tahun. Padahal, tangki yang tidak pernah penuh seringkali menandakan kebocoran dinding tangki yang merembes ke air tanah.',
      sections: [
        {
          heading: 'Kalkulasi Kapasitas vs Jumlah Penghuni',
          body: 'Septic tank konvensional ukuran standar (1,5 - 2 meter kubik) untuk rumah tangga dengan 4-5 penghuni idealnya dikuras secara terjadwal:',
          bullets: [
            'Keluarga 2 - 3 orang: Kurang lebih 3 tahun sekali.',
            'Keluarga 4 - 6 orang: Idealnya 2 tahun sekali.',
            'Kos-kosan / Ruko komersial: Dianjurkan setiap 1 tahun hingga 1,5 tahun sekali.',
          ],
        },
        {
          heading: 'Bahaya Septic Tank Jarang Disedot',
          body: 'Lumpur tinja padat (sludge) yang mengendap lama di dasar tangki akan mengalami proses pemadatan (sedimentasi). Jika dibiarkan terlalu bertahun-tahun, lumpur mengeras seperti tanah liat dan menyumbat pori-pori resapan ke tanah, sehingga air limbah tidak bisa lagi terserap.',
        },
      ],
      conclusion: 'Jadwalkan penyedotan berkala dengan Mitra Bersih 24Jam untuk menjaga sanitasi rumah dan air tanah keluarga Anda tetap sehat.',
    },
  },
  {
    id: 5,
    category: 'septic',
    categoryLabel: 'Perawatan Septic Tank',
    title: 'Memahami Sistem Bak Kontrol, Resapan, dan Septic Tank Ramah Lingkungan',
    excerpt: 'Penataan sanitasi yang tepat di rumah tangga membantu mempermudah perawatan rutin dan menghemat jutaan rupiah biaya renovasi pipa di masa depan.',
    readTime: '5 Menit Baca',
    date: '8 September 2026',
    image: articleImg5,
    fallbackImage: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'Sistem sanitasi rumah tinggal tidak hanya terdiri dari kloset dan lubang galian. Tiga komponen utama wajib bekerja sinkron agar tidak timbul masalah mampet.',
      sections: [
        {
          heading: '1. Bak Kontrol (Inspection Chamber)',
          body: 'Bak kontrol berfungsi sebagai titik temu dan tempat pengecekan pipa pembuangan. Buat tutup bak kontrol yang mudah dibuka agar saat terjadi sumbatan, teknisi bisa langsung memasukkan spiral tanpa membongkar lantai.',
        },
        {
          heading: '2. Tangki Pembusukan (Septic Chamber)',
          body: 'Tempat kotoran padat diurai oleh bakteri anaerob. Jangan memasukkan bahan kimia pemutih atau disinfektan berlebihan ke kloset karena dapat mematikan bakteri pengurai alami.',
        },
        {
          heading: '3. Sumur Resapan dengan Lapisan Ijuk dan Kerikil',
          body: 'Limbah cair yang sudah terpisah dari endapan padat disaring melalui kerikil dan pasir sebelum meresap ke dalam tanah agar tidak menimbulkan bau dan ramah lingkungan.',
        },
      ],
      conclusion: 'Pastikan jarak antara septic tank atau resapan dengan sumur air bersih minimal 10 meter untuk mencegah kontaminasi bakteri E. Coli.',
    },
  },
  {
    id: 6,
    category: 'emergency',
    categoryLabel: 'Solusi Darurat',
    title: 'Pertolongan Pertama Saat Kloset WC Meluap Tiba-Tiba di Rumah',
    excerpt: 'Jangan panik dan hindari menekan tombol flush berulang kali! Ikuti langkah darurat teknisi ini untuk mencegah air kotor membanjiri lantai rumah Anda.',
    readTime: '3 Menit Baca',
    date: '1 September 2026',
    image: articleImg6,
    fallbackImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'Ketika air di mangkuk kloset mulai naik dan hampir tumpah, reaksi spontan kebanyakan orang adalah menekan tombol flush lagi. Hal tersebut justru membuat tangki kloset memompa lebih banyak air dan memperparah luapan!',
      sections: [
        {
          heading: '4 Langkah Pertolongan Pertama:',
          body: 'Ikuti prosedur tanggap darurat berikut:',
          bullets: [
            '1. Hentikan Flush: Jangan pernah menekan tombol siram lagi.',
            '2. Buka Tutup Tangki Kloset & Tutup Flapper: Angkat penutup keramik tangki atas dan tekan katup karet (flapper) di dasar tangki agar aliran air ke mangkuk kloset berhenti.',
            '3. Tutup Stop Kran Air Kloset: Putar katup stop kran (valve) yang berada di dinding belakang kloset searah jarum jam untuk memutus pasokan air tangki.',
            '4. Gunakan Plunger Karet Khusus Kloset: Pasang plunger dengan posisi menutupi lubang secara kedap, dorong dan tarik dengan ritme stabil untuk melepaskan sumbatan ringan.',
          ],
        },
      ],
      conclusion: 'Jika air tetap tidak surut setelah diplunging, sumbatan berada jauh di dalam pipa utama atau septic tank sudah penuh. Segera hubungi Mitra Bersih 24Jam di +62 857-1565-4183.',
    },
  },
];

export interface ServiceCategoryMeta {
  key: 'harga' | 'prosedur' | 'legalitas';
  label: string;
  fullTitle: string;
  icon: string;
  desc: string;
  badgeClass: string;
}

export const serviceCategoriesList: ServiceCategoryMeta[] = [
  {
    key: 'prosedur',
    label: 'Prosedur',
    fullTitle: 'Prosedur Pemesanan & Teknis Pengerjaan',
    icon: 'fas fa-clipboard-list',
    desc: 'Langkah pemesanan cepat via WhatsApp, armada tiba 15–30 menit, teknik vakum tanpa bongkar lantai, dan akses gang sempit.',
    badgeClass: 'faq-cat-prosedur',
  },
  {
    key: 'harga',
    label: 'Harga',
    fullTitle: 'Transparansi Harga & Biaya Layanan',
    icon: 'fas fa-tags',
    desc: 'Biaya pasti di awal, tanpa biaya siluman, bebas biaya selang panjang, dan opsi pembayaran tunai / transfer / QRIS.',
    badgeClass: 'faq-cat-harga',
  },
  {
    key: 'legalitas',
    label: 'Legalitas',
    fullTitle: 'Legalitas, Izin DLH & Garansi Resmi',
    icon: 'fas fa-shield-alt',
    desc: 'Izin resmi operasional DLH Kota Bekasi, pembuangan legal ke IPLT Sumur Batu, jaminan garansi kerja, dan dokumen SPK/Invoice resmi.',
    badgeClass: 'faq-cat-legalitas',
  },
];

const faqData: FAQItem[] = [
  // --- KATEGORI: HARGA ---
  {
    id: 1,
    category: 'harga',
    serviceGroup: 'harga',
    serviceGroupLabel: 'Harga',
    categoryLabel: 'Harga',
    badgeClass: 'faq-cat-harga',
    question: 'Berapa estimasi biaya jasa sedot WC dan pelancaran saluran di Mitra Bersih?',
    answer: 'Tarif kami sangat transparan dan kompetitif. Biaya ditentukan berdasarkan jenis layanan (sedot septic tank penuh, pelancaran WC mampet, atau sedot limbah STP), kapasitas tangki, serta tingkat kesulitan. Estimasi harga pasti akan kami informasikan di awal sebelum armada berangkat, tanpa ada biaya siluman atau biaya tersembunyi.',
  },
  {
    id: 2,
    category: 'harga',
    serviceGroup: 'harga',
    serviceGroupLabel: 'Harga',
    categoryLabel: 'Harga',
    badgeClass: 'faq-cat-harga',
    question: 'Apakah ada biaya tambahan untuk selang panjang atau pekerjaan malam hari?',
    answer: 'Tidak ada biaya tersembunyi. Kami menyediakan panjang selang standar hingga puluhan meter secara gratis yang dapat menjangkau perumahan padat atau gang sempit. Layanan darurat 24 jam di malam hari juga dilayani dengan tarif resmi yang disepakati bersama sejak awal konsultasi.',
  },
  {
    id: 3,
    category: 'harga',
    serviceGroup: 'harga',
    serviceGroupLabel: 'Harga',
    categoryLabel: 'Harga',
    badgeClass: 'faq-cat-harga',
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Pembayaran dilakukan setelah proses pengerjaan selesai dan Anda memastikan WC atau saluran pipa sudah mengalir lancar dan bersih kembali. Kami menerima pembayaran secara Tunai (Cash) langsung ke teknisi atau melalui Transfer Bank / QRIS.',
  },
  {
    id: 4,
    category: 'harga',
    serviceGroup: 'harga',
    serviceGroupLabel: 'Harga',
    categoryLabel: 'Harga',
    badgeClass: 'faq-cat-harga',
    question: 'Apakah ada kepastian harga sebelum teknisi memulai pengerjaan di lokasi?',
    answer: 'Pasti. Teknisi kami wajib mengonfirmasi ulang rincian biaya yang telah disepakati melalui WhatsApp/telepon sebelum selang diturunkan ke tangki. Jika terdapat ketidaksesuaian saat survei di lokasi dan Anda tidak setuju, Anda berhak membatalkan tanpa dikenakan biaya pinalti apa pun (survei dan konsultasi gratis).',
  },

  // --- KATEGORI: PROSEDUR ---
  {
    id: 5,
    category: 'prosedur',
    serviceGroup: 'prosedur',
    serviceGroupLabel: 'Prosedur',
    categoryLabel: 'Prosedur',
    badgeClass: 'faq-cat-prosedur',
    question: 'Bagaimana prosedur melakukan pemesanan dan konsultasi?',
    answer: 'Pemesanan sangat praktis! Anda cukup klik tombol WhatsApp atau hubungi telepon kami di +62 857-1565-4183. Informasikan keluhan yang dialami dan alamat lokasi Anda di Bekasi. Tim customer service kami siap melayani dan mengarahkan armada terdekat seketika.',
  },
  {
    id: 6,
    category: 'prosedur',
    serviceGroup: 'prosedur',
    serviceGroupLabel: 'Prosedur',
    categoryLabel: 'Prosedur',
    badgeClass: 'faq-cat-prosedur',
    question: 'Berapa lama waktu yang dibutuhkan armada hingga tiba di lokasi?',
    answer: 'Karena armada dan teknisi kami tersebar di berbagai posko kecamatan Kota Bekasi, rata-rata waktu tempuh armada ke lokasi adalah 15 hingga 30 menit setelah konfirmasi pemesanan, disesuaikan dengan kondisi lalu lintas jalan.',
  },
  {
    id: 7,
    category: 'prosedur',
    serviceGroup: 'prosedur',
    serviceGroupLabel: 'Prosedur',
    categoryLabel: 'Prosedur',
    badgeClass: 'faq-cat-prosedur',
    question: 'Bagaimana tahapan teknis penyedotan septic tank hingga tuntas?',
    answer: 'Prosedur dimulai dari pembukaan manhole secara hati-hati, pengecekan volume dan ketebalan lumpur, pemasangan selang vakum spiral bertekanan tinggi, pengenceran kerak lumpur padat dengan water jetting, penyedotan tuntas hingga ke dasar tangki, dan pengujian kelancaran siraman kloset. Area kerja dibersihkan kembali tanpa sisa kotoran atau bau.',
  },
  {
    id: 8,
    category: 'prosedur',
    serviceGroup: 'prosedur',
    serviceGroupLabel: 'Prosedur',
    categoryLabel: 'Prosedur',
    badgeClass: 'faq-cat-prosedur',
    question: 'Apakah proses pelancaran saluran mampet harus membongkar pipa atau keramik?',
    answer: 'Tidak perlu bongkar. Kami menggunakan mesin pelancar drain cleaner modern (teknologi spiral fleksibel & vakum hidro) yang mampu menghancurkan lemak, kerak, atau sumbatan tanpa perlu merusak kloset ataupun membongkar lantai keramik Anda.',
  },
  {
    id: 9,
    category: 'prosedur',
    serviceGroup: 'prosedur',
    serviceGroupLabel: 'Prosedur',
    categoryLabel: 'Prosedur',
    badgeClass: 'faq-cat-prosedur',
    question: 'Apakah bisa melayani rumah di dalam gang sempit yang tidak bisa dimasuki truk besar?',
    answer: 'Bisa sekali! Kami memiliki armada truk berukuran kompak serta selang penyedot bertekanan tinggi ekstra panjang yang mampu menjangkau hingga ke dalam lorong gang sempit tanpa mengganggu ketertiban jalan umum.',
  },
  {
    id: 10,
    category: 'prosedur',
    serviceGroup: 'prosedur',
    serviceGroupLabel: 'Prosedur',
    categoryLabel: 'Prosedur',
    badgeClass: 'faq-cat-prosedur',
    question: 'Wilayah mana saja yang dicakup oleh layanan Mitra Bersih?',
    answer: 'Kami melayani seluruh 12 kecamatan di Kota Bekasi (Bantargebang, Bekasi Barat, Bekasi Selatan, Bekasi Timur, Bekasi Utara, Jatiasih, Jatisampurna, Medan Satria, Mustikajaya, Pondok Gede, Pondok Melati, Rawalumbu) hingga wilayah perbatasan Kabupaten Bekasi, Cibubur, dan Jakarta Timur.',
  },
  {
    id: 11,
    category: 'prosedur',
    serviceGroup: 'prosedur',
    serviceGroupLabel: 'Prosedur',
    categoryLabel: 'Prosedur',
    badgeClass: 'faq-cat-prosedur',
    question: 'Apakah layanan tetap beroperasi pada malam hari, hari Minggu, atau hari libur nasional?',
    answer: 'Ya, layanan Mitra Bersih beroperasi penuh 24 Jam non-stop, 7 hari seminggu (24/7). Kami selalu menyiagakan teknisi piket untuk panggilan darurat kapan pun Anda membutuhkan, baik tengah malam, akhir pekan, maupun hari libur besar keagamaan.',
  },

  // --- KATEGORI: LEGALITAS ---
  {
    id: 12,
    category: 'legalitas',
    serviceGroup: 'legalitas',
    serviceGroupLabel: 'Legalitas',
    categoryLabel: 'Legalitas',
    badgeClass: 'faq-cat-legalitas',
    question: 'Apakah pengerjaan disertai dengan garansi resmi?',
    answer: 'Ya, semua pengerjaan sedot WC dan pelancaran saluran mampet dari Mitra Bersih dilengkapi dengan garansi kepuasan resmi. Jika timbul kendala pada saluran yang sama dalam masa garansi setelah pengerjaan, tim teknisi kami siap melakukan pengecekan dan perbaikan ulang hingga tuntas tanpa biaya tambahan.',
  },
  {
    id: 13,
    category: 'legalitas',
    serviceGroup: 'legalitas',
    serviceGroupLabel: 'Legalitas',
    categoryLabel: 'Legalitas',
    badgeClass: 'faq-cat-legalitas',
    question: 'Apakah Mitra Bersih memiliki izin resmi pembuangan limbah (AMDAL & Dinas Lingkungan Hidup)?',
    answer: 'Tentu. Kami beroperasi secara legal dengan izin resmi dari Dinas Lingkungan Hidup (DLH) Kota Bekasi. Seluruh limbah tinja dan limbah lemak STP dibuang langsung ke fasilitas resmi Instalasi Pengolahan Lumpur Tinja (IPLT) Sumur Batu, Kota Bekasi, tanpa mencemari sungai, drainase, atau lingkungan warga sekitar.',
  },
  {
    id: 14,
    category: 'legalitas',
    serviceGroup: 'legalitas',
    serviceGroupLabel: 'Legalitas',
    categoryLabel: 'Legalitas',
    badgeClass: 'faq-cat-legalitas',
    question: 'Apakah tersedia dokumen SPK, BAPP, Faktur, dan Kuitansi resmi untuk ruko, restoran, atau instansi?',
    answer: 'Tersedia lengkap. Kami melayani kebutuhan administrasi korporat dan komersial dengan menerbitkan Surat Perintah Kerja (SPK), Berita Acara Penyelesaian Pekerjaan (BAPP), Faktur/Invoice resmi dengan NPWP perusahaan, serta kuitansi stempel basah resmi untuk keperluan audit dan pembukuan bisnis Anda.',
  },
];

export interface SeniorTechnician {
  id: number;
  name: string;
  role: string;
  exp: string;
  specialty: string;
  avatar: string;
  avatarBg: string;
}

export const seniorTechniciansList: SeniorTechnician[] = [
  {
    id: 1,
    name: 'Pak Agus Prasetyo',
    role: 'Kepala Koordinator Teknisi',
    exp: '14 Tahun Pengalaman',
    specialty: 'Sistem Vakum Septic Tank & Kuras Total',
    avatar: 'A',
    avatarBg: '#075E54',
  },
  {
    id: 2,
    name: 'Pak Bambang Irawan',
    role: 'Senior Drain Cleaner Specialist',
    exp: '11 Tahun Pengalaman',
    specialty: 'Pelancaran Pipa Mampet Tanpa Bongkar',
    avatar: 'B',
    avatarBg: '#1E40AF',
  },
  {
    id: 3,
    name: 'Pak Dedi Mulyadi',
    role: 'Konsultan Sanitasi & STP Limbah',
    exp: '9 Tahun Pengalaman',
    specialty: 'Bak Kontrol, Resapan & IPAL Komersial',
    avatar: 'D',
    avatarBg: '#B45309',
  },
];

export interface ServiceZone {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  address: string;
  query: string;
  zoom: number;
  eta: string;
  armadaCount: string;
  tel: string;
  description: string;
  districts: string[];
}

export const bekasiServiceZones: ServiceZone[] = [
  {
    id: 'pusat',
    name: 'Pangkalan Pusat (Bekasi Selatan)',
    shortName: 'Pusat & Selatan',
    badge: 'Kantor & Pangkalan Utama',
    address: 'Jl. Jend. Ahmad Yani No. 88, Marga Jaya, Bekasi Selatan, Kota Bekasi 17141',
    query: 'Jl. Jenderal Ahmad Yani No.88, Marga Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17141',
    zoom: 15,
    eta: '10 - 20 Menit',
    armadaCount: '5 Unit Truk Tangki Siaga',
    tel: '+6285715654183',
    description: 'Pangkalan armada utama dan kantor koordinasi layanan 24 jam. Merespon cepat perkantoran, perumahan, ruko, dan pusat bisnis di koridor Ahmad Yani & Summarecon.',
    districts: ['Bekasi Selatan', 'Bekasi Barat', 'Rawalumbu', 'Pekayon Jaya'],
  },
  {
    id: 'timur',
    name: 'Posko Wilayah Timur & Utara',
    shortName: 'Timur & Utara',
    badge: 'Pos Reaksi Cepat',
    address: 'Jl. Ir. H. Juanda No. 120, Margahayu, Bekasi Timur, Kota Bekasi 17113',
    query: 'Jl. Ir. H. Juanda, Bekasi Timur, Kota Bekasi, Jawa Barat',
    zoom: 14,
    eta: '15 - 25 Menit',
    armadaCount: '3 Unit Truk Tangki Siaga',
    tel: '+6285715654183',
    description: 'Posko siaga untuk permukiman padat, perumahan Summarecon, Harapan Indah timur, kawasan industri, dan koridor Cut Mutia hingga Bulak Kapal.',
    districts: ['Bekasi Timur', 'Bekasi Utara', 'Mustikajaya', 'Bantargebang'],
  },
  {
    id: 'barat',
    name: 'Posko Wilayah Barat & Kranji',
    shortName: 'Barat & Kranji',
    badge: 'Pos Perbatasan DKI',
    address: 'Jl. Jend. Sudirman, Kranji / Bintara, Bekasi Barat, Kota Bekasi 17135',
    query: 'Kranji, Bekasi Barat, Kota Bekasi, Jawa Barat',
    zoom: 14,
    eta: '12 - 22 Menit',
    armadaCount: '2 Unit Truk Tangki Siaga',
    tel: '+6285715654183',
    description: 'Melayani area perbatasan Jakarta Timur, Kranji, Bintara, Pondok Kopi batas Bekasi, Harapan Baru, dan kawasan sentra industri Medan Satria.',
    districts: ['Bekasi Barat', 'Medan Satria', 'Bintara', 'Jakasampurna'],
  },
  {
    id: 'selatan',
    name: 'Posko Jatiasih & Pondok Gede',
    shortName: 'Jatiasih & Pd. Gede',
    badge: 'Armada Selang Panjang 100m',
    address: 'Jl. Raya Jatiasih No. 45 / Akses Gerbang Tol JORR, Jatiasih, Kota Bekasi 17423',
    query: 'Jl. Raya Jatiasih, Jatiasih, Kota Bekasi, Jawa Barat',
    zoom: 14,
    eta: '15 - 25 Menit',
    armadaCount: '2 Unit Tangki Vacuum Mini',
    tel: '+6285715654183',
    description: 'Armada khusus gang sempit & jalan perumahan klaster, dilengkapi selang spiral ekstra hingga 100 meter dan armada engkel mini siap masuk gang padat.',
    districts: ['Jatiasih', 'Pondok Gede', 'Pondok Melati', 'Jatisampurna'],
  },
  {
    id: 'all',
    name: 'Seluruh Wilayah Kota Bekasi',
    shortName: 'Seluruh Bekasi',
    badge: 'Cakupan Penuh 12 Kecamatan',
    address: 'Wilayah Layanan Resmi Kota Bekasi & Sekitarnya, Jawa Barat',
    query: 'Kota Bekasi, Jawa Barat',
    zoom: 12,
    eta: '15 - 30 Menit Rata-rata',
    armadaCount: '12 Unit Total Armada',
    tel: '+6285715654183',
    description: 'Jaringan operasional Mitra Bersih 24Jam mencakup seluruh 12 kecamatan di Kota Bekasi dan sekitarnya. Truk tangki terdekat akan diarahkan ke lokasi Anda secara otomatis.',
    districts: [
      'Bantargebang', 'Bekasi Barat', 'Bekasi Selatan', 'Bekasi Timur',
      'Bekasi Utara', 'Jatiasih', 'Jatisampurna', 'Medan Satria',
      'Mustikajaya', 'Pondok Gede', 'Pondok Melati', 'Rawalumbu'
    ],
  },
];

export interface BekasiDistrict {
  id: string;
  name: string;
  zoneId: string;
  eta: string;
  highlight: string;
}

export const bekasiDistrictsList: BekasiDistrict[] = [
  { id: 'bekasi-selatan', name: 'Bekasi Selatan', zoneId: 'pusat', eta: '10 - 15 Mnt', highlight: 'Pangkalan Pusat Ahmad Yani' },
  { id: 'bekasi-barat', name: 'Bekasi Barat', zoneId: 'barat', eta: '12 - 18 Mnt', highlight: 'Kranji & Bintara Siaga' },
  { id: 'bekasi-timur', name: 'Bekasi Timur', zoneId: 'timur', eta: '12 - 18 Mnt', highlight: 'Posko Juanda / Cut Mutia' },
  { id: 'bekasi-utara', name: 'Bekasi Utara', zoneId: 'timur', eta: '15 - 22 Mnt', highlight: 'Summarecon & Kaliabang' },
  { id: 'rawalumbu', name: 'Rawalumbu', zoneId: 'pusat', eta: '12 - 18 Mnt', highlight: 'Narogong & Kemang Pratama' },
  { id: 'jatiasih', name: 'Jatiasih', zoneId: 'selatan', eta: '12 - 18 Mnt', highlight: 'Akses Tol JORR Siaga' },
  { id: 'pondok-gede', name: 'Pondok Gede', zoneId: 'selatan', eta: '15 - 22 Mnt', highlight: 'Jatiwaringin & Hankam' },
  { id: 'medan-satria', name: 'Medan Satria', zoneId: 'barat', eta: '15 - 20 Mnt', highlight: 'Harapan Indah & Industri' },
  { id: 'mustikajaya', name: 'Mustikajaya', zoneId: 'timur', eta: '18 - 25 Mnt', highlight: 'Dukuh Zamrud & Grand Wisata' },
  { id: 'pondok-melati', name: 'Pondok Melati', zoneId: 'selatan', eta: '15 - 25 Mnt', highlight: 'Jatimurni & Jatirahayu' },
  { id: 'jatisampurna', name: 'Jatisampurna', zoneId: 'selatan', eta: '20 - 28 Mnt', highlight: 'Krangan & Transyogi' },
  { id: 'bantargebang', name: 'Bantargebang', zoneId: 'timur', eta: '20 - 28 Mnt', highlight: 'Jalan Raya Narogong' },
];

const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: 'https://z-cdn-media.chatglm.cn/files/8b35c692-dce0-460e-9c8c-12dc2dd28a67.jpg?auth_key=1891145358-528231c042254e76abb0a2a5a1e99a0b-0-6ba9fa9ff84c63ed8b7413f69005a108',
    fallbackImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
    title: 'Penyedotan Septic Tank',
    desc: 'Tim petugas membersihkan septic tank dengan truk sedot profesional.',
  },
  {
    id: 2,
    image: 'https://z-cdn-media.chatglm.cn/files/93764afb-0b78-41ec-9859-1723b7981014.jpg?auth_key=1891145358-e3036d2346f44ddab499d0ee91780c1a-0-4b5f27c73cf2fce784eeb806d23ef6e8',
    fallbackImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    title: 'Tim Teknisi Siaga',
    desc: 'Tiga teknisi berseragam lengkap bersiap melakukan penanganan pipa.',
  },
  {
    id: 3,
    image: 'https://z-cdn-media.chatglm.cn/files/33748952-6a43-47b0-920c-c6cbbceeb719.jpg?auth_key=1891145358-97889be3a24546a2a9f0271e61e6a9a9-0-52fcb6d86bb0c9f1115d1978a78abc83',
    fallbackImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80',
    title: 'Pelancaran Saluran',
    desc: 'Pengerjaan pelancaran saluran tersumbat di area pemukiman.',
  },
  {
    id: 4,
    image: 'https://z-cdn-media.chatglm.cn/files/c701d28f-9ce6-410f-9af1-5bdf6bd82fe4.jpg?auth_key=1891145358-f10d651607cc4ebcb600e88f06f3eda9-0-cadac15e64fade2d6e42565a9da55f4d',
    fallbackImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1000&q=80',
    title: 'Operasi Armada Sedot',
    desc: 'Petugas mengoperasikan pompa penyedot pada truk tangki kami.',
  },
  {
    id: 5,
    image: 'https://z-cdn-media.chatglm.cn/files/55d24ab3-1d3c-4736-beb5-0371dc813146.jpg?auth_key=1891145358-c43c6073058c4960a42f5ce7d7cbd58b-0-dc68fbb11a48f6e16eedbe80d17bb7bd',
    fallbackImage: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1000&q=80',
    title: 'Inspeksi Saluran',
    desc: 'Teknisi memeriksa kondisi saluran limbah di area perumahan.',
  },
  {
    id: 6,
    image: 'https://z-cdn-media.chatglm.cn/files/7efc89d8-0f13-443c-b203-82f00182f517.jpg?auth_key=1891145358-ac532b14e237478a9e2694802c0403b7-0-9e00006dc0a7880924b28ad916f7fb47',
    fallbackImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    title: 'Pembukaan Manhole',
    desc: 'Proses aman membuka tutup bak kontrol untuk inspeksi lebih lanjut.',
  },
  {
    id: 7,
    image: 'https://z-cdn-media.chatglm.cn/files/ea99f8ec-d5af-4248-ac08-f9e15af12faf.jpg?auth_key=1891145358-f34e05e963b846bfb3a011ad42d52dd8-0-41fecceb77c1fcf170cfb796fe654b60',
    fallbackImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    title: 'Operasi Selang Sedot',
    desc: 'Menjalankan selang penyedot limbah cair secara hati-hati dan terukur.',
  },
  {
    id: 8,
    image: 'https://z-cdn-media.chatglm.cn/files/dca59c1c-5058-4fc6-8a6a-b9eef25523d9.jpg?auth_key=1891145358-8db531af9f664f438a0ec864ebb08085-0-365027590c53c23da998bea53eecf486',
    fallbackImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80',
    title: 'Armada Mitra Bersih',
    desc: 'Truk penyedot kuning kami siaga di lokasi untuk mengerjakan tugas.',
  },
];

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  fallbackSrc?: string;
  showIconPlaceholder?: boolean;
}

function ImageWithSkeleton({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackSrc,
  showIconPlaceholder = true,
  loading = 'lazy',
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div className={`img-skeleton-container ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <div className="img-skeleton-shimmer" aria-hidden="true">
          <div className="img-skeleton-wave" />
          {showIconPlaceholder && (
            <div className="img-skeleton-icon">
              <i className="fas fa-image text-slate-400 text-lg"></i>
            </div>
          )}
        </div>
      )}
      <img
        src={hasError && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          if (!hasError && fallbackSrc && e.currentTarget.src !== fallbackSrc) {
            setHasError(true);
            e.currentTarget.src = fallbackSrc;
          } else {
            setIsLoaded(true);
          }
        }}
        className={`img-with-skeleton ${isLoaded ? 'loaded' : 'loading'} ${className}`}
        {...props}
      />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'harga' | 'prosedur' | 'legalitas'>('all');
  const [isGroupedFaqView, setIsGroupedFaqView] = useState(true);
  const [collapsedGroupKeys, setCollapsedGroupKeys] = useState<string[]>([]);
  const [selectedTipCategory, setSelectedTipCategory] = useState<'all' | 'septic' | 'pipe' | 'emergency'>('all');
  const [readingArticle, setReadingArticle] = useState<ArticleItem | null>(null);
  const [showOfferBanner, setShowOfferBanner] = useState(true);
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [copiedFaqId, setCopiedFaqId] = useState<number | null>(null);
  const [copiedArticleLink, setCopiedArticleLink] = useState(false);
  const [collapsedSearchIds, setCollapsedSearchIds] = useState<number[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [subscribedEmail, setSubscribedEmail] = useState('');

  // Timed Newsletter Popup State (45s trigger)
  const [showTimedNewsletterModal, setShowTimedNewsletterModal] = useState(false);
  const [timedNewsletterEmail, setTimedNewsletterEmail] = useState('');
  const [timedNewsletterStatus, setTimedNewsletterStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Dedicated 'Ask a Pro' Form State
  const [proQuestionName, setProQuestionName] = useState('');
  const [proQuestionEmail, setProQuestionEmail] = useState('');
  const [proQuestionPhone, setProQuestionPhone] = useState('');
  const [proQuestionCategory, setProQuestionCategory] = useState('Septic Tank Penuh / Mampet Berulang');
  const [proQuestionUrgency, setProQuestionUrgency] = useState<'normal' | 'important' | 'urgent'>('important');
  const [proQuestionLocation, setProQuestionLocation] = useState('Bekasi Selatan');
  const [proQuestionDetail, setProQuestionDetail] = useState('');
  const [proQuestionStatus, setProQuestionStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [proQuestionError, setProQuestionError] = useState('');
  const [proQuestionTicket, setProQuestionTicket] = useState<{
    id: string;
    name: string;
    email: string;
    category: string;
    urgencyLabel: string;
    location: string;
    question: string;
    submittedAt: string;
    estimatedReplyTime: string;
  } | null>(null);

  // Touch-Enabled Testimonial Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedReviewCategory, setSelectedReviewCategory] = useState<'all' | 'sedot_wc' | 'mampet' | 'stp' | 'darurat'>('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  // Responsive itemsPerView
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const filteredReviews = useMemo(() => {
    if (selectedReviewCategory === 'all') return customerTestimonialsData;
    return customerTestimonialsData.filter((r) => r.category === selectedReviewCategory);
  }, [selectedReviewCategory]);

  const maxCarouselIndex = Math.max(0, filteredReviews.length - itemsPerView);
  const safeCarouselIndex = Math.min(carouselIndex, maxCarouselIndex);

  const handlePrevReview = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxCarouselIndex));
  };

  const handleNextReview = () => {
    setCarouselIndex((prev) => (prev < maxCarouselIndex ? prev + 1 : 0));
  };

  const handleReviewCategoryChange = (cat: 'all' | 'sedot_wc' | 'mampet' | 'stp' | 'darurat') => {
    setSelectedReviewCategory(cat);
    setCarouselIndex(0);
    setDragOffset(0);
  };

  // Autoplay effect
  useEffect(() => {
    if (!isAutoPlaying || isDragging || maxCarouselIndex <= 0) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxCarouselIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging, maxCarouselIndex]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || dragStartX === null) return;
    const diff = e.touches[0].clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (dragOffset < -45) {
      handleNextReview();
    } else if (dragOffset > 45) {
      handlePrevReview();
    }
    setIsDragging(false);
    setDragStartX(null);
    setDragOffset(0);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset < -45) {
      handleNextReview();
    } else if (dragOffset > 45) {
      handlePrevReview();
    }
    setIsDragging(false);
    setDragStartX(null);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      if (dragOffset < -45) {
        handleNextReview();
      } else if (dragOffset > 45) {
        handlePrevReview();
      }
      setIsDragging(false);
      setDragStartX(null);
      setDragOffset(0);
    }
  };

  const handleDismissTimedNewsletter = (dontShowAgain = false) => {
    setShowTimedNewsletterModal(false);
    sessionStorage.setItem('mitra_newsletter_popup_dismissed', 'true');
    if (dontShowAgain) {
      localStorage.setItem('mitra_newsletter_subscribed', 'true');
    }
  };

  const handleSubscribeTimedNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!timedNewsletterEmail.trim() || !timedNewsletterEmail.includes('@')) return;
    setTimedNewsletterStatus('loading');
    setTimeout(() => {
      setTimedNewsletterStatus('success');
      localStorage.setItem('mitra_newsletter_subscribed', 'true');
      sessionStorage.setItem('mitra_newsletter_popup_dismissed', 'true');
      setTimeout(() => {
        setShowTimedNewsletterModal(false);
      }, 2500);
    }, 600);
  };

  // Print FAQ & Structured Data State
  const [showPrintFaqModal, setShowPrintFaqModal] = useState(false);
  const [printScope, setPrintScope] = useState<'current' | 'all'>('current');
  const [includeStructuredData, setIncludeStructuredData] = useState(true);
  const [copiedSchemaText, setCopiedSchemaText] = useState(false);

  const itemsToPrint = useMemo(() => {
    if (printScope === 'all') {
      return faqData;
    }
    const isSearching = faqSearchQuery.trim().length > 0;
    const q = faqSearchQuery.toLowerCase().trim();
    const list = faqData.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!isSearching) return matchesCategory;
      return (
        matchesCategory &&
        (item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q))
      );
    });
    return list.length > 0 ? list : faqData;
  }, [printScope, faqSearchQuery, selectedCategory]);

  const generateFaqSchema = (items: FAQItem[]) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  };

  const handlePrintFaq = () => {
    window.print();
  };

  const handleCopySchemaJson = () => {
    const schema = generateFaqSchema(itemsToPrint);
    const jsonStr = JSON.stringify(schema, null, 2);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(jsonStr).then(() => {
        setCopiedSchemaText(true);
        setTimeout(() => setCopiedSchemaText(false), 2500);
      });
    } else {
      setCopiedSchemaText(true);
      setTimeout(() => setCopiedSchemaText(false), 2500);
    }
  };

  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterStatus('loading');
    setTimeout(() => {
      setSubscribedEmail(newsletterEmail);
      setNewsletterStatus('success');
      setNewsletterEmail('');
    }, 600);
  };

  const handleSubmitProQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    setProQuestionError('');

    if (!proQuestionName.trim()) {
      setProQuestionError('Mohon masukkan nama lengkap Anda.');
      return;
    }
    if (!proQuestionEmail.trim() || !proQuestionEmail.includes('@') || !proQuestionEmail.includes('.')) {
      setProQuestionError('Mohon masukkan alamat email yang valid untuk menerima jawaban teknisi.');
      return;
    }
    if (proQuestionDetail.trim().length < 15) {
      setProQuestionError('Mohon jelaskan pertanyaan atau kendala teknis Anda minimal 15 karakter agar teknisi dapat menganalisa dengan akurat.');
      return;
    }

    setProQuestionStatus('loading');

    setTimeout(() => {
      const randomTicketNum = Math.floor(10000 + Math.random() * 90000);
      const ticketId = `PRO-MB${randomTicketNum}`;
      const replyTime = proQuestionUrgency === 'urgent' ? '< 60 Menit' : proQuestionUrgency === 'important' ? '< 2 Jam' : '< 4 Jam';
      const urgencyLabel = proQuestionUrgency === 'urgent' ? 'Darurat (Prioritas Utama)' : proQuestionUrgency === 'important' ? 'Penting (1-2 Jam)' : 'Standar (2-4 Jam)';

      const ticketData = {
        id: ticketId,
        name: proQuestionName.trim(),
        email: proQuestionEmail.trim(),
        category: proQuestionCategory,
        urgencyLabel,
        location: proQuestionLocation,
        question: proQuestionDetail.trim(),
        submittedAt: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        estimatedReplyTime: replyTime,
      };

      setProQuestionTicket(ticketData);
      setProQuestionStatus('success');

      try {
        const existing = JSON.parse(localStorage.getItem('mitra_pro_tickets') || '[]');
        localStorage.setItem('mitra_pro_tickets', JSON.stringify([ticketData, ...existing.slice(0, 4)]));
      } catch {
        // storage fallback
      }
    }, 700);
  };

  const handleResetProQuestion = () => {
    setProQuestionName('');
    setProQuestionEmail('');
    setProQuestionPhone('');
    setProQuestionCategory('Septic Tank Penuh / Mampet Berulang');
    setProQuestionUrgency('important');
    setProQuestionDetail('');
    setProQuestionStatus('idle');
    setProQuestionError('');
    setProQuestionTicket(null);
  };

  // Google Maps & Service Area Embed State
  const [activeMapZoneId, setActiveMapZoneId] = useState<string>('pusat');
  const [selectedDistrictName, setSelectedDistrictName] = useState<string | null>(null);
  const [copiedOfficeAddress, setCopiedOfficeAddress] = useState(false);
  const [districtSearchQuery, setDistrictSearchQuery] = useState('');

  const currentZone = useMemo(() => {
    return bekasiServiceZones.find((z) => z.id === activeMapZoneId) || bekasiServiceZones[0];
  }, [activeMapZoneId]);

  const activeMapQuery = useMemo(() => {
    if (selectedDistrictName) {
      return `Kecamatan ${selectedDistrictName}, Kota Bekasi, Jawa Barat`;
    }
    return currentZone.query;
  }, [selectedDistrictName, currentZone]);

  const activeMapZoom = useMemo(() => {
    if (selectedDistrictName) return 14;
    return currentZone.zoom;
  }, [selectedDistrictName, currentZone]);

  const activeMapTitle = useMemo(() => {
    if (selectedDistrictName) {
      const dist = bekasiDistrictsList.find((d) => d.name === selectedDistrictName);
      return `Kecamatan ${selectedDistrictName} (Estimasi: ${dist ? dist.eta : '15 - 25 Menit'})`;
    }
    return currentZone.name;
  }, [selectedDistrictName, currentZone]);

  const activeMapAddress = useMemo(() => {
    if (selectedDistrictName) {
      const dist = bekasiDistrictsList.find((d) => d.name === selectedDistrictName);
      return `Wilayah Layanan Kecamatan ${selectedDistrictName}, Kota Bekasi — Dilayani oleh ${currentZone.name} (${dist ? dist.highlight : 'Armada Terdekat'})`;
    }
    return currentZone.address;
  }, [selectedDistrictName, currentZone]);

  const handleCopyOfficeAddress = (textToCopy: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedOfficeAddress(true);
        setTimeout(() => setCopiedOfficeAddress(false), 2200);
      });
    } else {
      setCopiedOfficeAddress(true);
      setTimeout(() => setCopiedOfficeAddress(false), 2200);
    }
  };

  const filteredDistricts = useMemo(() => {
    if (!districtSearchQuery.trim()) return bekasiDistrictsList;
    const q = districtSearchQuery.toLowerCase().trim();
    return bekasiDistrictsList.filter(
      (d) => d.name.toLowerCase().includes(q) || d.highlight.toLowerCase().includes(q)
    );
  }, [districtSearchQuery]);

  const highlightFaqMatch = (text: string, query: string) => {
    if (!query || !query.trim()) return text;
    const q = query.trim();
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);
    if (parts.length <= 1) return text;
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="faq-search-highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const handleCopyFaq = (item: FAQItem) => {
    const textToCopy = `*FAQ Mitra Bersih 24Jam*\n\n*Tanya:* ${item.question}\n\n*Jawab:* ${item.answer}\n\nInfo selengkapnya: ${window.location.origin}#faq`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedFaqId(item.id);
        setTimeout(() => setCopiedFaqId(null), 2500);
      }).catch(() => {
        setCopiedFaqId(item.id);
        setTimeout(() => setCopiedFaqId(null), 2500);
      });
    } else {
      setCopiedFaqId(item.id);
      setTimeout(() => setCopiedFaqId(null), 2500);
    }
  };

  const handleCopyArticleLink = (article: ArticleItem) => {
    const url = `${window.location.origin}${window.location.pathname}#artikel-${article.id}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedArticleLink(true);
        setTimeout(() => setCopiedArticleLink(false), 2500);
      }).catch(() => {
        setCopiedArticleLink(true);
        setTimeout(() => setCopiedArticleLink(false), 2500);
      });
    } else {
      setCopiedArticleLink(true);
      setTimeout(() => setCopiedArticleLink(false), 2500);
    }
  };

  // Chatbot State
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'sedot_wc' | 'mampet' | 'stp' | 'darurat'>('sedot_wc');
  const [selectedComplaint, setSelectedComplaint] = useState<string>('Septic Tank Penuh & Air Kloset Tidak Turun');
  const [selectedKecamatan, setSelectedKecamatan] = useState<string>('Bekasi Barat');
  const [userAddressNote, setUserAddressNote] = useState<string>('');

  const complaintsByService = {
    sedot_wc: [
      'Septic Tank Penuh & Air Kloset Tidak Turun',
      'Kuras Total / Sedot Lumpur Mengendap',
      'Keluar Bau Busuk Meluap di Kamar Mandi',
      'Lokasi Rumah Masuk Gang Sempit',
    ],
    mampet: [
      'Kloset WC Mampet Tersumbat',
      'Wastafel Dapur Mampet Beku Lemak',
      'Saluran Kamar Mandi (Floor Drain) Menggenang',
      'Pipa Pembuangan Bak Kontrol / Talang Air',
    ],
    stp: [
      'Kuras STP Ruko / Restoran / Pabrik',
      'Bak Lemak Grease Trap Restoran Penuh',
      'Penyedotan Limbah Cair Hotel / Apartemen',
      'Perawatan Rutin Sistem STP Gedung',
    ],
    darurat: [
      'Air Kloset Meluap Butuh Datang Sekarang',
      'Pipa Pecah / Banjir Limbah Mendadak',
      'Layanan Malam Hari Siaga 24 Jam',
    ],
  };

  const kecamatanBekasiList = [
    'Bekasi Barat',
    'Bekasi Timur',
    'Bekasi Selatan',
    'Bekasi Utara',
    'Jatiasih',
    'Pondok Gede',
    'Rawalumbu',
    'Mustikajaya',
    'Medan Satria',
    'Jatisampurna',
    'Bantargebang',
    'Pondok Melati',
    'Wilayah Sekitarnya',
  ];

  const openChatbotWithService = (service: 'sedot_wc' | 'mampet' | 'stp' | 'darurat', defaultComplaint?: string) => {
    setSelectedService(service);
    if (defaultComplaint) {
      setSelectedComplaint(defaultComplaint);
    } else {
      setSelectedComplaint(complaintsByService[service][0]);
    }
    setChatbotOpen(true);
  };

  const getWhatsAppUrl = () => {
    const serviceTitle =
      selectedService === 'sedot_wc' ? 'Sedot WC / Kuras Septic Tank' :
      selectedService === 'mampet' ? 'Pelancaran Saluran Mampet' :
      selectedService === 'stp' ? 'Sedot Limbah STP & Lemak' :
      'Panggilan Darurat Saluran Meluap (24 Jam)';

    const notesPart = userAddressNote.trim() ? `\n📝 *Catatan Tambahan/Alamat:* ${userAddressNote.trim()}` : '';

    const text = `Halo Admin Mitra Bersih 24 Jam,
Saya ingin memesan layanan dengan detail berikut:

📋 *Jenis Layanan:* ${serviceTitle}
⚠️ *Keluhan Utama:* ${selectedComplaint}
📍 *Wilayah/Kecamatan:* ${selectedKecamatan}, Kota Bekasi${notesPart}
⏰ *Waktu Pengerjaan:* Sekarang / Secepatnya

Mohon info estimasi biaya dan waktu kedatangan armada terdekat ke lokasi saya. Terima kasih!`;

    return `https://wa.me/6285715654183?text=${encodeURIComponent(text)}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      const sections = ['home', 'layanan', 'tentang', 'galeri', 'kontak', 'faq', 'artikel'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImg) setLightboxImg(null);
        if (readingArticle) setReadingArticle(null);
        if (chatbotOpen) setChatbotOpen(false);
        if (showTimedNewsletterModal) handleDismissTimedNewsletter();
        if (showPrintFaqModal) setShowPrintFaqModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImg, readingArticle, chatbotOpen, showTimedNewsletterModal, showPrintFaqModal]);

  // Timed modal popup that invites users to subscribe after 45 seconds on page
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('mitra_newsletter_popup_dismissed') === 'true';
    const isSubscribed = localStorage.getItem('mitra_newsletter_subscribed') === 'true';
    if (isDismissed || isSubscribed) return;

    const timer = setTimeout(() => {
      const dismissedCheck = sessionStorage.getItem('mitra_newsletter_popup_dismissed') === 'true';
      const subscribedCheck = localStorage.getItem('mitra_newsletter_subscribed') === 'true';
      if (!dismissedCheck && !subscribedCheck) {
        setShowTimedNewsletterModal(true);
      }
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  // Deep-link support for Articles (#artikel-1, #artikel-2, etc.) and FAQ categories (#faq-prosedur, #faq-harga, #faq-legalitas)
  useEffect(() => {
    const checkHashForArticleAndFaq = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#artikel-')) {
        const idStr = hash.replace('#artikel-', '');
        const artId = parseInt(idStr, 10);
        if (!isNaN(artId)) {
          const matched = articlesData.find((a) => a.id === artId);
          if (matched) {
            setReadingArticle(matched);
          }
        }
      } else if (hash === '#faq-prosedur') {
        setSelectedCategory('prosedur');
        setTimeout(() => {
          document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === '#faq-harga') {
        setSelectedCategory('harga');
        setTimeout(() => {
          document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === '#faq-legalitas') {
        setSelectedCategory('legalitas');
        setTimeout(() => {
          document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    checkHashForArticleAndFaq();
    window.addEventListener('hashchange', checkHashForArticleAndFaq);
    return () => window.removeEventListener('hashchange', checkHashForArticleAndFaq);
  }, []);

  // Dynamic meta title, description, OpenGraph, Twitter, and Schema.org tags for opened articles
  useEffect(() => {
    const defaultTitle = 'Jasa Sedot WC Bekasi Profesional | Teknisi Berpengalaman';
    const defaultDescription =
      'Layanan sedot WC & kuras septic tank di Bekasi oleh teknisi berpengalaman. Armada lengkap, hasil bersih, harga jelas di awal. Konsultasi dan survei gratis.';
    const defaultImage =
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&h=630&q=85';
    const defaultUrl = 'https://jasasedotwcbekasi.web.id/';

    const updateMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const updateLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    if (readingArticle) {
      const pageTitle = `${readingArticle.title} – Tips Sanitasi Mitra Bersih 24Jam`;
      const pageDesc = readingArticle.excerpt;
      const articleImage = readingArticle.image || readingArticle.fallbackImage;
      const articleUrl = `${window.location.origin}${window.location.pathname}#artikel-${readingArticle.id}`;

      // Update URL hash for sharing without triggering jump
      if (window.location.hash !== `#artikel-${readingArticle.id}`) {
        window.history.replaceState(null, '', `#artikel-${readingArticle.id}`);
      }

      // 1. Dynamic Page Title
      document.title = pageTitle;

      // 2. Dynamic Meta Description
      updateMeta('name', 'description', pageDesc);

      // 3. OpenGraph Social Share Card Tags
      updateMeta('property', 'og:title', pageTitle);
      updateMeta('property', 'og:description', pageDesc);
      updateMeta('property', 'og:type', 'article');
      updateMeta('property', 'og:url', articleUrl);
      updateMeta('property', 'og:image', articleImage);

      // 4. Twitter / X Card Tags
      updateMeta('name', 'twitter:title', pageTitle);
      updateMeta('name', 'twitter:description', pageDesc);
      updateMeta('name', 'twitter:image', articleImage);

      // 5. Canonical Link
      updateLink('canonical', articleUrl);

      // 6. Schema.org Article Structured Data (JSON-LD)
      let scriptTag = document.getElementById('article-schema-ldjson') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'article-schema-ldjson';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': readingArticle.title,
        'description': readingArticle.excerpt,
        'image': [articleImage],
        'datePublished': '2026-09-01T08:00:00+07:00',
        'dateModified': '2026-10-05T08:00:00+07:00',
        'articleSection': readingArticle.categoryLabel,
        'author': {
          '@type': 'Organization',
          'name': 'Mitra Bersih 24Jam',
          'url': window.location.origin,
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Sedot WC Mitra Bersih 24Jam',
          'logo': {
            '@type': 'ImageObject',
            'url': defaultImage,
          },
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
      });
    } else {
      // Revert to Default Website Metadata
      document.title = defaultTitle;
      updateMeta('name', 'description', defaultDescription);
      updateMeta('property', 'og:title', defaultTitle);
      updateMeta('property', 'og:description', defaultDescription);
      updateMeta('property', 'og:type', 'website');
      updateMeta('property', 'og:url', defaultUrl);
      updateMeta('property', 'og:image', defaultImage);
      updateMeta('name', 'twitter:title', defaultTitle);
      updateMeta('name', 'twitter:description', defaultDescription);
      updateMeta('name', 'twitter:image', defaultImage);
      updateLink('canonical', defaultUrl);

      // Clean up injected Article JSON-LD
      const scriptTag = document.getElementById('article-schema-ldjson');
      if (scriptTag) {
        scriptTag.remove();
      }

      // If URL hash was an article hash, restore to tips section anchor
      if (window.location.hash.startsWith('#artikel-')) {
        window.history.replaceState(null, '', `${window.location.pathname}#tips`);
      }
    }

    return () => {
      const scriptTag = document.getElementById('article-schema-ldjson');
      if (scriptTag && !readingArticle) {
        scriptTag.remove();
      }
    };
  }, [readingArticle]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen text-[#111111] bg-white">
      {/* NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-custom">
          <div className="nav-inner">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="logo">
              <div className="logo-icon">
                <i className="fas fa-truck"></i>
              </div>
              <div className="logo-text">
                <strong>SEDOT WC</strong>
                <span>MITRA BERSIH 24JAM</span>
              </div>
            </a>

            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <li>
                <a
                  href="#home"
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className={activeSection === 'layanan' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo('layanan'); }}
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  className={activeSection === 'tentang' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo('tentang'); }}
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  className={activeSection === 'galeri' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo('galeri'); }}
                >
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className={activeSection === 'kontak' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo('kontak'); }}
                >
                  Kontak
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className={activeSection === 'faq' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#artikel"
                  className={activeSection === 'artikel' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo('artikel'); }}
                >
                  Tips & Edukasi
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/6285715654183?text=Halo%20Mitra%20Bersih,%20saya%20butuh%20layanan%20sedot%20WC"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dot"></span>
              <span>Layanan 24 Jam</span>
              <span className="phone-text">· +62 857-1565-4183</span>
            </a>

            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              id="hamburger"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* SPECIAL OFFER BANNER */}
      {showOfferBanner && (
        <div className="special-offer-bar">
          <div className="container-custom">
            <div className="special-offer-inner">
              <div className="special-offer-left">
                <span className="special-offer-badge">
                  <i className="fas fa-fire-alt mr-1"></i>
                  PROMO SPESIAL
                </span>
                <div className="special-offer-text">
                  <strong className="special-offer-highlight">DISKON 10% PELANGGAN PERTAMA:</strong>
                  <span> Paket hemat servis kuras septic tank + gratis cek kelancaran pipa saluran se-Bekasi!</span>
                </div>
                <span className="special-offer-code hidden sm:inline-flex">
                  Kode: <strong>BERSIH10</strong>
                </span>
              </div>

              <div className="special-offer-right">
                <button
                  type="button"
                  onClick={() => openChatbotWithService('sedot_wc', 'Klaim Diskon 10% Servis Pertama Septic Tank (Kode Promo: BERSIH10)')}
                  className="special-offer-claim-btn"
                >
                  <i className="fas fa-tags mr-1"></i>
                  <span>Klaim Promo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowOfferBanner(false)}
                  className="special-offer-close"
                  aria-label="Tutup Banner Promo"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className={`hero ${showOfferBanner ? 'has-banner' : ''}`} id="home">
        <span className="decoration bubble bubble-1"></span>
        <span className="decoration bubble bubble-2"></span>
        <span className="decoration bubble bubble-3"></span>
        <i className="fas fa-plus decoration cross-icon"></i>
        <span className="decoration triangle"></span>
        <span className="decoration diamond"></span>
        <span className="decoration circle-outline"></span>
        <span className="decoration dot-pattern"></span>

        <div className="container-custom w-full">
          {/* BREADCRUMB NAVIGATION */}
          <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="breadcrumb-item">
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
                  itemProp="item"
                  className="breadcrumb-link"
                >
                  <i className="fas fa-home breadcrumb-icon"></i>
                  <span itemProp="name">Beranda</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="breadcrumb-separator" aria-hidden="true">
                <i className="fas fa-chevron-right"></i>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="breadcrumb-item">
                <a
                  href="#kontak"
                  onClick={(e) => { e.preventDefault(); scrollTo('kontak'); }}
                  itemProp="item"
                  className="breadcrumb-link"
                >
                  <span itemProp="name">Jawa Barat</span>
                </a>
                <meta itemProp="position" content="2" />
              </li>
              <li className="breadcrumb-separator" aria-hidden="true">
                <i className="fas fa-chevron-right"></i>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="breadcrumb-item">
                <a
                  href="#kontak"
                  onClick={(e) => { e.preventDefault(); scrollTo('kontak'); }}
                  itemProp="item"
                  className="breadcrumb-link"
                >
                  <span itemProp="name">Kota Bekasi</span>
                </a>
                <meta itemProp="position" content="3" />
              </li>
              <li className="breadcrumb-separator" aria-hidden="true">
                <i className="fas fa-chevron-right"></i>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="breadcrumb-item active" aria-current="page">
                <span className="breadcrumb-active-dot"></span>
                <span itemProp="name">Sedot WC 24 Jam</span>
                <meta itemProp="position" content="4" />
              </li>
            </ol>
          </nav>

          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="dot"></span>
                Online Sekarang · Siap Datang Ke Lokasi Anda
              </div>
              <h1>
                SEDOT WC<br />MITRA BERSIH 24JAM
                <span className="highlight">
                  Layanan Cepat & Profesional 24 Jam – Solusi Tuntas Septic Tank & WC Mampet Anda!
                </span>
              </h1>
              <a
                href="https://wa.me/6285715654183?text=Halo%20Mitra%20Bersih,%20saya%20butuh%20bantuan%20sekarang"
                className="hero-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-phone-alt"></i>
                HUBUNGI KAMI SEKARANG · +62 857-1565-4183
              </a>
              <div className="hero-stats">
                <div className="stat">
                  <strong>24/7</strong>
                  <span>Layanan Siaga</span>
                </div>
                <div className="stat">
                  <strong>15+</strong>
                  <span>Tahun Pengalaman</span>
                </div>
                <div className="stat">
                  <strong>5000+</strong>
                  <span>Pelanggan Puas</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              {/* Floating Promo & 24 Jam Badge */}
              <button
                type="button"
                onClick={() => openChatbotWithService('sedot_wc', 'Klaim Promo Diskon 10% Layanan 24 Jam (Kode: BERSIH10)')}
                className="hero-floating-badge"
                aria-label="Klaim Promo 24 Jam Diskon 10%"
              >
                <div className="hero-floating-badge-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="hero-floating-badge-text">
                  <span className="hero-floating-badge-top">
                    <span className="pulse-dot"></span>
                    SIAGA 24 JAM NONSTOP
                  </span>
                  <strong className="hero-floating-badge-main">
                    PROMO HEMAT <span>DISKON 10%</span>
                  </strong>
                </div>
                <i className="fas fa-chevron-right text-xs text-[#FFD60A] ml-1"></i>
              </button>

              <div className="truck-card">
                {/* Truck Illustration SVG */}
                <svg className="truck-svg" viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
                  {/* Ground shadow */}
                  <ellipse cx="250" cy="320" rx="200" ry="12" fill="rgba(255,214,10,0.15)" />

                  {/* House Background */}
                  <g opacity="0.4">
                    <rect x="20" y="120" width="100" height="100" fill="#FFD60A" rx="4" />
                    <polygon points="20,120 70,80 120,120" fill="#FFD60A" />
                    <rect x="40" y="150" width="20" height="20" fill="#111111" opacity="0.6" />
                    <rect x="80" y="150" width="20" height="20" fill="#111111" opacity="0.6" />
                    <rect x="55" y="185" width="30" height="35" fill="#111111" opacity="0.6" />

                    <rect x="380" y="100" width="90" height="120" fill="#FFD60A" opacity="0.5" rx="4" />
                    <polygon points="380,100 425,70 470,100" fill="#FFD60A" opacity="0.5" />
                    <rect x="395" y="130" width="15" height="15" fill="#111111" opacity="0.4" />
                    <rect x="425" y="130" width="15" height="15" fill="#111111" opacity="0.4" />
                    <rect x="395" y="160" width="15" height="15" fill="#111111" opacity="0.4" />
                    <rect x="425" y="160" width="15" height="15" fill="#111111" opacity="0.4" />
                  </g>

                  {/* Truck Body Main Tank */}
                  <rect x="80" y="140" width="240" height="110" fill="#FFD60A" rx="20" stroke="#111111" strokeWidth="3" />

                  {/* Tank Details */}
                  <rect x="95" y="155" width="210" height="50" fill="rgba(17,17,17,0.1)" rx="8" />

                  {/* MITRA BERSIH Text */}
                  <text x="200" y="185" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="20" fontWeight="900" fill="#111111">
                    MITRA BERSIH
                  </text>
                  <text x="200" y="205" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="600" fill="#111111" opacity="0.7">
                    24 JAM SERVICE
                  </text>

                  {/* Flame/Drop Logo on Tank */}
                  <g transform="translate(200, 225)">
                    <circle cx="0" cy="0" r="14" fill="#111111" />
                    <path d="M -6,-2 Q -6,-8 0,-10 Q 6,-8 6,-2 Q 6,4 0,6 Q -6,4 -6,-2 Z" fill="#FFD60A" />
                  </g>

                  {/* Truck Cab */}
                  <rect x="320" y="170" width="100" height="80" fill="#111111" rx="12" />
                  <rect x="332" y="180" width="76" height="40" fill="#FFD60A" rx="6" />
                  <rect x="340" y="188" width="60" height="24" fill="rgba(17,17,17,0.3)" rx="3" />

                  {/* Cab Details */}
                  <rect x="335" y="225" width="20" height="20" fill="#FFD60A" rx="3" />
                  <text x="345" y="240" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="8" fontWeight="700" fill="#111111">
                    24J
                  </text>

                  {/* Headlight */}
                  <circle cx="415" cy="220" r="6" fill="#FFD60A" />
                  <circle cx="415" cy="220" r="3" fill="#FFFFFF" />

                  {/* Wheels */}
                  <circle cx="130" cy="260" r="24" fill="#111111" />
                  <circle cx="130" cy="260" r="12" fill="#FFD60A" />
                  <circle cx="130" cy="260" r="6" fill="#111111" />

                  <circle cx="220" cy="260" r="24" fill="#111111" />
                  <circle cx="220" cy="260" r="12" fill="#FFD60A" />
                  <circle cx="220" cy="260" r="6" fill="#111111" />

                  <circle cx="370" cy="260" r="24" fill="#111111" />
                  <circle cx="370" cy="260" r="12" fill="#FFD60A" />
                  <circle cx="370" cy="260" r="6" fill="#111111" />

                  {/* Hose from truck */}
                  <path d="M 90 230 Q 50 240 30 270" stroke="#111111" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <path d="M 90 230 Q 50 240 30 270" stroke="#FFD60A" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="6,4" />

                  {/* Worker 1 (left, holding hose) */}
                  <g transform="translate(30, 240)">
                    <rect x="-12" y="0" width="24" height="40" fill="#111111" rx="4" />
                    <rect x="-12" y="14" width="24" height="4" fill="#FFD60A" />
                    <circle cx="0" cy="-8" r="10" fill="#FFD60A" />
                    <path d="M -12 -10 Q -12 -22 0 -22 Q 12 -22 12 -10 L 12 -8 L -12 -8 Z" fill="#111111" />
                    <rect x="-18" y="6" width="12" height="6" fill="#FFD60A" rx="2" transform="rotate(20)" />
                    <rect x="-10" y="40" width="8" height="20" fill="#111111" />
                    <rect x="2" y="40" width="8" height="20" fill="#111111" />
                  </g>

                  {/* Worker 2 (right, holding hose) */}
                  <g transform="translate(450, 240)">
                    <rect x="-12" y="0" width="24" height="40" fill="#111111" rx="4" />
                    <rect x="-12" y="14" width="24" height="4" fill="#FFD60A" />
                    <circle cx="0" cy="-8" r="10" fill="#FFD60A" />
                    <path d="M -12 -10 Q -12 -22 0 -22 Q 12 -22 12 -10 L 12 -8 L -12 -8 Z" fill="#111111" />
                    <rect x="6" y="6" width="12" height="6" fill="#FFD60A" rx="2" transform="rotate(-20)" />
                    <rect x="-10" y="40" width="8" height="20" fill="#111111" />
                    <rect x="2" y="40" width="8" height="20" fill="#111111" />
                  </g>

                  {/* Sparkles/Clean indicators */}
                  <g opacity="0.8">
                    <g transform="translate(150, 100)">
                      <path d="M 0,-8 L 2,-2 L 8,0 L 2,2 L 0,8 L -2,2 L -8,0 L -2,-2 Z" fill="#FFD60A" />
                    </g>
                    <g transform="translate(280, 90)">
                      <path d="M 0,-6 L 1.5,-1.5 L 6,0 L 1.5,1.5 L 0,6 L -1.5,1.5 L -6,0 L -1.5,-1.5 Z" fill="#FFD60A" />
                    </g>
                    <g transform="translate(350, 130)">
                      <path d="M 0,-5 L 1,-1 L 5,0 L 1,1 L 0,5 L -1,1 L -5,0 L -1,-1 Z" fill="#FFD60A" />
                    </g>
                  </g>
                </svg>
              </div>

              <div className="hero-tags tag-1">
                <i className="fas fa-shield-alt"></i>
                <span>Bergaransi</span>
              </div>
              <div className="hero-tags tag-2">
                <i className="fas fa-bolt"></i>
                <span>Respon 15 Menit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C240,100 480,20 720,40 C960,60 1200,100 1440,60 L1440,120 L0,120 Z" fill="#F0F7FA" />
          </svg>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="layanan" id="layanan">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-badge">LAYANAN KAMI</span>
            <h2 className="section-title">Solusi Tuntas untuk<br />Setiap Masalah Saluran</h2>
            <p className="section-subtitle">
              Layanan profesional dengan armada modern dan tim berpengalaman untuk menangani semua kebutuhan saluran dan limbah Anda.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-truck-loading"></i>
              </div>
              <h3>Sedot WC Lengkap</h3>
              <p>
                Penyedotan septic tank & WC mampet dengan armada modern. Proses cepat, bersih, dan tanpa bau tidak sedap. Cocok untuk rumah, ruko, dan kantor.
              </p>
              <button
                type="button"
                onClick={() => openChatbotWithService('sedot_wc', 'Septic Tank Penuh & Air Kloset Tidak Turun')}
                className="service-link cursor-pointer border-none"
              >
                Pilih Layanan Ini <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-faucet"></i>
              </div>
              <h3>Pelancaran Saluran Mampet</h3>
              <p>
                Membersihkan saluran pipa dan wastafel yang tersumbat dengan teknologi modern. Atasi mampet tanpa bongkar, hemat biaya dan waktu Anda.
              </p>
              <button
                type="button"
                onClick={() => openChatbotWithService('mampet', 'Kloset WC Mampet Tersumbat')}
                className="service-link cursor-pointer border-none"
              >
                Pilih Layanan Ini <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Sedot Limbah STP</h3>
              <p>
                Penyedotan limbah STP untuk rumah, ruko, dan industri. Penanganan profesional dengan standar kebersihan dan keamanan lingkungan yang tinggi.
              </p>
              <button
                type="button"
                onClick={() => openChatbotWithService('stp', 'Kuras STP Ruko / Restoran / Pabrik')}
                className="service-link cursor-pointer border-none"
              >
                Pilih Layanan Ini <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us" id="tentang">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-badge">KEUNGGULAN</span>
            <h2 className="section-title">Mengapa Memilih Kami?</h2>
            <p className="section-subtitle">
              Kami berkomitmen memberikan layanan terbaik dengan keunggulan yang tidak akan Anda temukan di tempat lain.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="why-content">
                <h3>24/7 Tersedia</h3>
                <p>
                  Tim kami siap melayani Anda 24 jam penuh, 7 hari seminggu. Baik siang, malam, hari kerja, akhir pekan, atau hari libur — kami selalu siap datang ke lokasi Anda.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="why-content">
                <h3>Tim Ahli & Profesional</h3>
                <p>
                  Ditangani oleh tim berpengalaman dengan pelatihan khusus. Setiap petugas berseragam rapi, ramah, dan menjaga kebersihan lokasi kerja Anda.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-truck-moving"></i>
              </div>
              <div className="why-content">
                <h3>Armada Modern & Bersih</h3>
                <p>
                  Truk tangki modern dengan kapasitas besar dan sistem penyedot berteknologi tinggi. Semua kendaraan dirawat rutin dan selalu dalam kondisi bersih.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-tags"></i>
              </div>
              <div className="why-content">
                <h3>Harga Transparan</h3>
                <p>
                  Tidak ada biaya tersembunyi. Harga jelas di awal sebelum pekerjaan dimulai. Sesuai kapasitas dan jarak lokasi, dengan harga yang kompetitif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS SECTION */}
      <section className="trust-indicators-section">
        <div className="container-custom">
          <div className="trust-indicators-header">
            <span className="trust-pill-tag">
              <i className="fas fa-shield-alt text-[#FFD60A]"></i>
              <span>KREDIBILITAS &amp; LEGALITAS TERPERCAYA</span>
            </span>
            <h3 className="trust-indicators-title">
              Jaminan Layanan Bersertifikasi &amp; Izin Resmi
            </h3>
            <p className="trust-indicators-desc">
              Mitra Bersih beroperasi dengan legalitas resmi pemerintah daerah dan standar mutu kerja yang teruji demi keamanan sanitasi rumah serta lingkungan Anda.
            </p>
          </div>

          <div className="trust-indicators-grid">
            {/* Card 1: ISO Certified */}
            <div className="trust-indicator-card">
              <div className="trust-indicator-top">
                <div className="trust-indicator-icon-box iso">
                  <i className="fas fa-medal"></i>
                </div>
                <span className="trust-indicator-badge iso">TERVERIFIKASI</span>
              </div>
              <div className="trust-indicator-content">
                <h4>ISO Certified</h4>
                <p className="trust-indicator-subtitle">Standar Mutu &amp; K3 Sanitasi</p>
                <p className="trust-indicator-text">
                  Menerapkan sistem manajemen mutu dan keselamatan kerja bersertifikasi (ISO 9001 &amp; ISO 14001 Lingkungan) dalam setiap tahapan penyedotan dan pembersihan pipa.
                </p>
                <div className="trust-indicator-footer">
                  <i className="fas fa-check-circle text-amber-600 mr-1.5"></i>
                  <span>Standar Mutu Internasional</span>
                </div>
              </div>
            </div>

            {/* Card 2: Official Permit */}
            <div className="trust-indicator-card">
              <div className="trust-indicator-top">
                <div className="trust-indicator-icon-box permit">
                  <i className="fas fa-file-signature"></i>
                </div>
                <span className="trust-indicator-badge permit">RESMI PEMDA</span>
              </div>
              <div className="trust-indicator-content">
                <h4>Official Permit</h4>
                <p className="trust-indicator-subtitle">Izin Dinas Lingkungan Hidup</p>
                <p className="trust-indicator-text">
                  Memiliki izin operasional resmi DLH Kota Bekasi. Seluruh limbah tinja dan STP dibuang langsung ke Instalasi Pengolahan Lumpur Tinja (IPLT) legal tanpa mencemari lingkungan.
                </p>
                <div className="trust-indicator-footer">
                  <i className="fas fa-check-circle text-green-600 mr-1.5"></i>
                  <span>Legalitas &amp; AMDAL Terjamin</span>
                </div>
              </div>
            </div>

            {/* Card 3: 15+ Years Experience */}
            <div className="trust-indicator-card">
              <div className="trust-indicator-top">
                <div className="trust-indicator-icon-box experience">
                  <i className="fas fa-award"></i>
                </div>
                <span className="trust-indicator-badge experience">TERBUKTI</span>
              </div>
              <div className="trust-indicator-content">
                <h4>15+ Years Experience</h4>
                <p className="trust-indicator-subtitle">Ahli Sanitasi Sejak 2009</p>
                <p className="trust-indicator-text">
                  Lebih dari 15 tahun melayani ribuan rumah tangga, ruko, restoran, apartemen, dan kawasan industri di Kota Bekasi dengan rekam jejak kepuasan pelanggan hingga 98%.
                </p>
                <div className="trust-indicator-footer">
                  <i className="fas fa-check-circle text-indigo-600 mr-1.5"></i>
                  <span>12.500+ Pelanggan Terlayani</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / TESTIMONI */}
      <section className="trust">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-badge">TESTIMONI</span>
            <h2 className="section-title">Kepercayaan Pelanggan</h2>
            <p className="section-subtitle">
              Ribuan pelanggan telah mempercayai layanan kami. Berikut adalah beberapa keunggulan dan testimoni dari mereka.
            </p>
          </div>

          <div className="badges-row">
            <div className="badge-pill">
              <i className="fas fa-star"></i>
              <span>98% Kepuasan</span>
            </div>
            <div className="badge-pill">
              <i className="fas fa-bolt"></i>
              <span>Respon Cepat</span>
            </div>
            <div className="badge-pill">
              <i className="fas fa-shield-alt"></i>
              <span>Layanan Terjamin</span>
            </div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <i className="fas fa-quote-right quote-icon"></i>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Pelayanannya sangat cepat dan profesional. Saya telepon malam, kurang dari 30 menit langsung datang. WC saya yang mampet langsung beres. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">B</div>
                <div className="author-info">
                  <strong>Budi Santoso</strong>
                  <span>Pondok Gede, Bekasi</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <i className="fas fa-quote-right quote-icon"></i>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Harga transparan, tidak menaikkan harga di tengah pekerjaan. Petugasnya ramah dan bersih. Septic tank penuh langsung teratasi. Terima kasih Mitra Bersih!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div className="author-info">
                  <strong>Siti Rahayu</strong>
                  <span>Jatiasih, Bekasi</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <i className="fas fa-quote-right quote-icon"></i>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Sudah langganan untuk sedot limbah STP di ruko saya. Selalu tepat waktu, armada bersih, dan pelayanan ramah. Sangat membantu kelancaran usaha saya."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <strong>Ahmad Hidayat</strong>
                  <span>Bekasi Selatan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOUCH-ENABLED TESTIMONIAL CAROUSEL SECTION */}
      <section className="testimonial-carousel-section" id="ulasan-pelanggan" aria-label="Ulasan Lengkap Pelanggan Mitra Bersih">
        <div className="container-custom">
          {/* Section Header */}
          <div className="section-header">
            <span className="section-badge">
              <i className="fas fa-comments text-[#111111] mr-1.5"></i>
              ULASAN PELANGGAN BEKASI
            </span>
            <h2 className="section-title">Suara &amp; Pengalaman Nyata Pelanggan</h2>
            <p className="section-subtitle">
              Geser untuk membaca testimoni langsung dari warga, perumahan, pemilik ruko, dan pengelola bisnis di seluruh penjuru Kota Bekasi.
            </p>
          </div>

          {/* Social Proof Summary Bar */}
          <div className="carousel-summary-banner">
            <div className="carousel-summary-stat">
              <div className="flex items-center gap-1.5 text-amber-500 text-lg">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className="font-extrabold text-[#111111] ml-1 text-base">4.9 / 5.0</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">Berdasarkan 650+ Ulasan Google &amp; WA</span>
            </div>

            <div className="carousel-summary-divider hidden sm:block"></div>

            <div className="carousel-summary-stat">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                  <i className="fas fa-shield-alt"></i>
                </span>
                <span className="font-bold text-[#111111] text-sm">100% Ulasan Terverifikasi</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">Pelanggan Rumah Tangga &amp; Komersial</span>
            </div>

            <div className="carousel-summary-divider hidden md:block"></div>

            <div className="carousel-summary-stat hidden md:flex">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                  <i className="fas fa-bolt"></i>
                </span>
                <span className="font-bold text-[#111111] text-sm">Respon Armada 15–30 Menit</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">12 Kecamatan Kota Bekasi Siaga 24 Jam</span>
            </div>
          </div>

          {/* Interactive Filter Pills */}
          <div className="carousel-filter-bar">
            <div className="carousel-filter-group">
              <button
                type="button"
                onClick={() => handleReviewCategoryChange('all')}
                className={`carousel-filter-btn ${selectedReviewCategory === 'all' ? 'active' : ''}`}
              >
                <span>Semua Ulasan</span>
                <span className="filter-count">{customerTestimonialsData.length}</span>
              </button>
              <button
                type="button"
                onClick={() => handleReviewCategoryChange('sedot_wc')}
                className={`carousel-filter-btn ${selectedReviewCategory === 'sedot_wc' ? 'active' : ''}`}
              >
                <span>Sedot WC</span>
                <span className="filter-count">
                  {customerTestimonialsData.filter((r) => r.category === 'sedot_wc').length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleReviewCategoryChange('mampet')}
                className={`carousel-filter-btn ${selectedReviewCategory === 'mampet' ? 'active' : ''}`}
              >
                <span>Saluran Mampet</span>
                <span className="filter-count">
                  {customerTestimonialsData.filter((r) => r.category === 'mampet').length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleReviewCategoryChange('stp')}
                className={`carousel-filter-btn ${selectedReviewCategory === 'stp' ? 'active' : ''}`}
              >
                <span>Limbah STP / Ruko</span>
                <span className="filter-count">
                  {customerTestimonialsData.filter((r) => r.category === 'stp').length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleReviewCategoryChange('darurat')}
                className={`carousel-filter-btn ${selectedReviewCategory === 'darurat' ? 'active' : ''}`}
              >
                <span>Darurat 24 Jam</span>
                <span className="filter-count">
                  {customerTestimonialsData.filter((r) => r.category === 'darurat').length}
                </span>
              </button>
            </div>

            {/* Carousel Top Controls: Counter & Navigation Buttons */}
            <div className="carousel-top-controls">
              <span className="carousel-counter-text">
                <span className="font-bold text-[#111111]">
                  {Math.min(safeCarouselIndex + 1, filteredReviews.length)}
                </span>
                –
                <span className="font-bold text-[#111111]">
                  {Math.min(safeCarouselIndex + itemsPerView, filteredReviews.length)}
                </span>{' '}
                dari {filteredReviews.length} ulasan
              </span>

              <div className="carousel-arrows">
                <button
                  type="button"
                  onClick={handlePrevReview}
                  className="carousel-arrow-btn"
                  aria-label="Ulasan Sebelumnya"
                  title="Ulasan Sebelumnya (Geser Kiri)"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  onClick={handleNextReview}
                  className="carousel-arrow-btn"
                  aria-label="Ulasan Selanjutnya"
                  title="Ulasan Selanjutnya (Geser Kanan)"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Swipe Hint Indicator for Touch Screens */}
          <div className="carousel-touch-hint">
            <i className="fas fa-hand-pointer text-amber-500 animate-pulse"></i>
            <span>Geser kartu (swipe) ke kiri atau kanan untuk menjelajahi testimoni</span>
          </div>

          {/* Touch-Enabled Carousel Viewport */}
          <div
            className={`testimonial-carousel-viewport ${isDragging ? 'is-dragging' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="testimonial-carousel-track"
              style={{
                transform: `translateX(calc(-${safeCarouselIndex * (100 / itemsPerView)}% + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {filteredReviews.map((item) => (
                <div
                  key={item.id}
                  className="testimonial-carousel-slide"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="testimonial-card-interactive">
                    {/* Top Row: Category Pill & Verified Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`carousel-cat-tag ${item.category}`}>
                        {item.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1 text-[11.5px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <i className="fas fa-check-circle text-emerald-500"></i>
                        <span>Terverifikasi</span>
                      </div>
                    </div>

                    {/* Star Rating & Relative Time */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-1 text-[#FFD60A] text-sm">
                        {[...Array(item.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                        <span className="text-xs font-bold text-gray-800 ml-1">5.0</span>
                      </div>
                      <span className="text-[11.5px] text-gray-400 font-medium">
                        <i className="far fa-clock mr-1"></i>
                        {item.date}
                      </span>
                    </div>

                    {/* Review Headline */}
                    <h4 className="text-[15.5px] font-black text-[#111111] leading-snug mb-2.5">
                      "{item.headline}"
                    </h4>

                    {/* Review Text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {item.text}
                    </p>

                    {/* Highlight Badge */}
                    <div className="carousel-highlight-pill mb-4">
                      <i className={`fas ${item.highlightIcon} text-amber-500`}></i>
                      <span>{item.tagHighlight}</span>
                    </div>

                    {/* Author Profile */}
                    <div className="carousel-author-row">
                      <div
                        className="carousel-avatar"
                        style={{ backgroundColor: item.avatarColor }}
                      >
                        {item.avatarInitials}
                      </div>
                      <div className="carousel-author-details">
                        <strong className="text-sm font-extrabold text-[#111111] block">
                          {item.name}
                        </strong>
                        <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <i className="fas fa-map-marker-alt text-amber-500 text-[11px]"></i>
                          {item.roleOrLocation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Bottom Pagination Dots & Autoplay Toggle */}
          <div className="carousel-bottom-nav">
            <div className="carousel-dots-list">
              {[...Array(maxCarouselIndex + 1)].map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setCarouselIndex(idx);
                    setDragOffset(0);
                  }}
                  className={`carousel-dot-btn ${idx === safeCarouselIndex ? 'active' : ''}`}
                  aria-label={`Buka slide halaman ${idx + 1}`}
                ></button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="carousel-autoplay-btn"
                title={isAutoPlaying ? 'Jeda Putar Otomatis' : 'Mulai Putar Otomatis'}
                aria-label={isAutoPlaying ? 'Jeda Putar Otomatis' : 'Mulai Putar Otomatis'}
              >
                <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                <span className="text-xs font-semibold hidden sm:inline">
                  {isAutoPlaying ? 'Auto-Slide Aktif' : 'Auto-Slide Jeda'}
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Reassurance / Action Callout */}
          <div className="carousel-cta-box">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="font-extrabold text-base text-[#111111] block">
                  Butuh Bantuan Sedot WC atau Saluran Mampet Hari Ini?
                </span>
                <span className="text-xs sm:text-sm text-gray-600">
                  Konsultasikan keluhan Anda tanpa komitmen. Armada kami siap meluncur ke lokasi Anda di Bekasi dalam 15-30 menit.
                </span>
              </div>
              <button
                type="button"
                onClick={() => openChatbotWithService('sedot_wc', 'Septic Tank Penuh & Air Kloset Tidak Turun')}
                className="btn-primary whitespace-nowrap text-xs sm:text-sm px-5 py-2.5 rounded-full font-black shadow-md hover:scale-105 transition-transform flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                <span>Konsultasi &amp; Pesan Cepat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section className="galeri" id="galeri">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-badge">DOKUMENTASI</span>
            <h2 className="section-title">Galeri Aktivitas Kami</h2>
            <p className="section-subtitle">
              Bukti nyata pengerjaan tim profesional kami di lapangan dengan armada modern dan standar keselamatan kerja.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setLightboxImg({ src: item.image, title: item.title, desc: item.desc })}
              >
                <ImageWithSkeleton
                  src={item.image}
                  alt={item.title}
                  fallbackSrc={item.fallbackImage}
                  containerClassName="w-full h-full"
                />
                <div className="gallery-icon">
                  <i className="fas fa-expand"></i>
                </div>
                <div className="gallery-overlay">
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREA LAYANAN & GOOGLE MAPS EMBED */}
      <section className="area" id="kontak">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-badge">
              <i className="fas fa-map-marked-alt text-[#D97706] mr-1"></i> WILAYAH LAYANAN &amp; LOKASI KANTOR
            </span>
            <h2 className="section-title">Peta Area Layanan &amp; Pangkalan Armada di Bekasi</h2>
            <p className="section-subtitle">
              Visualisasi interaktif Google Maps untuk jangkauan operasional 24 jam dan lokasi pangkalan armada kami di Kota Bekasi. Estimasi tiba 10–30 menit ke seluruh 12 kecamatan.
            </p>
          </div>

          <div className="maps-dashboard-container">
            {/* Zone Switcher Bar */}
            <div className="maps-zone-nav" role="tablist" aria-label="Pilih Pangkalan atau Wilayah Layanan">
              {bekasiServiceZones.map((zone) => {
                const isActive = activeMapZoneId === zone.id && !selectedDistrictName;
                return (
                  <button
                    key={zone.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveMapZoneId(zone.id);
                      setSelectedDistrictName(null);
                    }}
                    className={`maps-zone-tab ${isActive ? 'active' : ''}`}
                  >
                    <i className={`fas ${zone.id === 'pusat' ? 'fa-building text-amber-500' : zone.id === 'all' ? 'fa-globe-asia text-emerald-500' : 'fa-truck-moving'}`}></i>
                    <span>{zone.shortName}</span>
                    <span className="maps-zone-tab-badge">{zone.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* 2-Column Main Layout: Maps Embed Card + District Coverage */}
            <div className="maps-main-grid">
              {/* Left Column: Google Maps Embed Card */}
              <div className="maps-embed-card">
                <div className="maps-embed-header">
                  <div className="maps-header-info">
                    <span className="maps-live-pill">
                      <span className="maps-pulsing-dot"></span>
                      Posko Siaga 24 Jam Non-Stop
                    </span>
                    <h3 className="maps-embed-title">
                      <i className="fas fa-map-pin text-[#FFD60A]"></i>
                      {activeMapTitle}
                    </h3>
                    <p className="maps-embed-address">
                      {activeMapAddress}
                    </p>
                  </div>

                  <div className="maps-header-actions">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeMapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="maps-btn-action primary"
                      title="Buka lokasi ini langsung di Google Maps"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>Buka di Google Maps</span>
                    </a>

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(activeMapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="maps-btn-action"
                      title="Dapatkan petunjuk arah navigasi"
                    >
                      <i className="fas fa-directions"></i>
                      <span>Petunjuk Rute</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopyOfficeAddress(activeMapAddress)}
                      className="maps-btn-action"
                      title="Salin alamat lengkap pangkalan"
                    >
                      <i className={`fas ${copiedOfficeAddress ? 'fa-check text-green-400' : 'fa-copy'}`}></i>
                      <span>{copiedOfficeAddress ? 'Tersalin!' : 'Salin Alamat'}</span>
                    </button>
                  </div>
                </div>

                {/* Responsive Google Maps iFrame */}
                <div className="maps-iframe-box">
                  <iframe
                    title="Google Maps Lokasi dan Wilayah Layanan Mitra Bersih 24Jam Kota Bekasi"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMapQuery)}&t=&z=${activeMapZoom}&ie=UTF8&iwloc=&output=embed`}
                    className="maps-iframe"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Floating Dispatch Beacon */}
                  <div className="maps-floating-badge">
                    <i className="fas fa-shield-alt"></i>
                    <div>
                      <strong>Armada Siaga: {currentZone.armadaCount}</strong>
                      <span>Estimasi Respon Cepat: {selectedDistrictName ? (bekasiDistrictsList.find(d => d.name === selectedDistrictName)?.eta || '15 - 25 Menit') : currentZone.eta}</span>
                    </div>
                  </div>
                </div>

                {/* Map Embed Footer Bar */}
                <div className="maps-embed-footer">
                  <div className="maps-footer-metrics">
                    <div className="maps-metric-item">
                      <i className="fas fa-clock text-amber-500"></i>
                      <span>Waktu Tempuh: <strong>{selectedDistrictName ? (bekasiDistrictsList.find(d => d.name === selectedDistrictName)?.eta || '15 - 25 Menit') : currentZone.eta}</strong></span>
                    </div>
                    <div className="maps-metric-item">
                      <i className="fas fa-truck text-[#075E54]"></i>
                      <span>Armada: <strong>{currentZone.armadaCount}</strong></span>
                    </div>
                    <div className="maps-metric-item">
                      <i className="fas fa-check-double text-blue-600"></i>
                      <span>Izin Resmi: <strong>DLH &amp; IPLT Sumur Batu</strong></span>
                    </div>
                  </div>

                  <div className="maps-footer-cta-btns">
                    <a
                      href={`https://wa.me/6285715654183?text=${encodeURIComponent(
                        `Halo Mitra Bersih 24Jam, saya ingin order layanan di area ${selectedDistrictName || currentZone.name}. Mohon info kedatangan armada terdekat.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="maps-btn-wa-call"
                    >
                      <i className="fab fa-whatsapp"></i> Chat WhatsApp
                    </a>
                    <a
                      href="tel:+6285715654183"
                      className="maps-btn-phone-call"
                    >
                      <i className="fas fa-phone-alt"></i> Hubungi Posko
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: District Finder & Interactive ETA Explorer */}
              <div className="maps-sidebar-card">
                <div className="maps-sidebar-header">
                  <span className="maps-sidebar-badge">
                    <i className="fas fa-check-circle"></i> Cakupan 12 Kecamatan Kota Bekasi
                  </span>
                  <h3 className="maps-sidebar-title">Cek Lokasi &amp; Waktu Tiba Armada</h3>
                  <p className="maps-sidebar-desc">
                    Pilih kecamatan tempat tinggal atau tempat usaha Anda di bawah untuk memusatkan peta dan memeriksa estimasi kedatangan armada terdekat.
                  </p>
                </div>

                {/* District Search Filter */}
                <div className="maps-district-filter-box">
                  <i className="fas fa-search maps-district-search-icon"></i>
                  <input
                    type="text"
                    value={districtSearchQuery}
                    onChange={(e) => setDistrictSearchQuery(e.target.value)}
                    placeholder="Ketik nama kecamatan di Bekasi..."
                    className="maps-district-input"
                    aria-label="Cari kecamatan di Bekasi"
                  />
                </div>

                {/* Selected District Focus Banner */}
                {selectedDistrictName && (
                  <div className="maps-selected-banner">
                    <div>
                      <strong>
                        <i className="fas fa-map-marker-alt text-amber-600 mr-1"></i>
                        Kecamatan {selectedDistrictName}
                      </strong>
                      <p>
                        Armada tangki terdekat siap meluncur (Estimasi {bekasiDistrictsList.find(d => d.name === selectedDistrictName)?.eta || '15 - 25 Menit'}).
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDistrictName(null);
                        setActiveMapZoneId('pusat');
                      }}
                      className="maps-btn-reset-selection"
                    >
                      <i className="fas fa-undo-alt mr-1"></i> Pangkalan Pusat
                    </button>
                  </div>
                )}

                {/* 12-District Interactive Grid */}
                <div className="maps-districts-grid">
                  {filteredDistricts.map((district) => {
                    const isDistrictSelected = selectedDistrictName === district.name;
                    return (
                      <button
                        key={district.id}
                        type="button"
                        onClick={() => {
                          setSelectedDistrictName(district.name);
                          setActiveMapZoneId(district.zoneId);
                        }}
                        className={`maps-district-chip ${isDistrictSelected ? 'active' : ''}`}
                      >
                        <div className="maps-chip-top">
                          <span className="maps-chip-name">{district.name}</span>
                          <span className="maps-chip-eta">{district.eta}</span>
                        </div>
                        <span className="maps-chip-highlight">
                          <i className="fas fa-location-arrow text-[10px] mr-1 opacity-70"></i>
                          {district.highlight}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Emergency & Gang Sempit Note */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
                  <i className="fas fa-info-circle text-amber-600 mt-0.5 text-sm flex-shrink-0"></i>
                  <div>
                    <strong className="block font-bold mb-0.5">Rumah di Dalam Gang Sempit?</strong>
                    Armada kami dilengkapi selang panjang fleksibel 50–100 meter. Bebas biaya tambahan selang untuk jarak normal!
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3 Feature Highlights */}
            <div className="maps-features-row">
              <div className="maps-feature-card">
                <div className="maps-feature-icon">
                  <i className="fas fa-route"></i>
                </div>
                <div className="maps-feature-info">
                  <h4>Selang Panjang 50–100m</h4>
                  <p>Truk parkir di jalan utama, selang spiral menjangkau septic tank hingga pelosok gang sempit tanpa mengganggu lalu lintas warga.</p>
                </div>
              </div>

              <div className="maps-feature-card">
                <div className="maps-feature-icon">
                  <i className="fas fa-file-contract"></i>
                </div>
                <div className="maps-feature-info">
                  <h4>Legalitas &amp; Izin Resmi IPLT</h4>
                  <p>Limbah tinja dibuang secara resmi ke Instalasi Pengolahan Lumpur Tinja (IPLT) Sumur Batu dengan rekomendasi Dinas Lingkungan Hidup.</p>
                </div>
              </div>

              <div className="maps-feature-card">
                <div className="maps-feature-icon">
                  <i className="fas fa-business-time"></i>
                </div>
                <div className="maps-feature-info">
                  <h4>Siaga 24 Jam &amp; Hari Libur</h4>
                  <p>Panggilan darurat tengah malam, hari Minggu, maupun hari libur nasional tetap dilayani dengan tarif transparan tanpa biaya siluman.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" id="faq">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-badge">TANYA JAWAB (FAQ)</span>
            <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
            <p className="section-subtitle">
              Jawaban lengkap seputar biaya transparan, proses pemesanan cepat 24 jam, dan jangkauan wilayah layanan kami di Kota Bekasi.
            </p>
          </div>

          {/* Quick Service Category Navigation Cards Deck */}
          <div className="faq-category-nav-deck">
            <div className="faq-category-nav-intro">
              <span>
                <i className="fas fa-layer-group text-[#D97706]"></i>
                Pilih Kategori Layanan untuk Filter Langsung:
              </span>
              {selectedCategory !== 'all' && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    window.location.hash = '#faq';
                  }}
                  className="faq-nav-show-all-btn"
                >
                  <i className="fas fa-undo-alt"></i> Tampilkan Semua Kategori ({faqData.length})
                </button>
              )}
            </div>

            <div className="faq-category-nav-grid">
              {serviceCategoriesList.map((cat) => {
                const isSelected = selectedCategory === cat.key;
                const count = faqData.filter((i) => i.category === cat.key).length;

                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => {
                      if (isSelected) {
                        setSelectedCategory('all');
                        window.location.hash = '#faq';
                      } else {
                        setSelectedCategory(cat.key);
                        window.location.hash = `#faq-${cat.key}`;
                      }
                      setCollapsedSearchIds([]);
                      if (!faqSearchQuery.trim()) {
                        const firstInCat = faqData.find((i) => i.category === cat.key);
                        if (firstInCat) setOpenFaqId(firstInCat.id);
                      }
                    }}
                    className={`faq-category-nav-card ${isSelected ? 'active' : ''}`}
                    aria-pressed={isSelected}
                  >
                    <div className="faq-cat-card-header">
                      <div className={`faq-cat-card-icon-wrap faq-cat-card-icon-${cat.key}`}>
                        <i className={cat.icon}></i>
                      </div>
                      <span className="faq-cat-card-badge">
                        {count} Tanya Jawab
                      </span>
                    </div>

                    <h3 className="faq-cat-card-title">{cat.fullTitle}</h3>
                    <p className="faq-cat-card-desc">{cat.desc}</p>

                    <div className="faq-cat-card-footer">
                      <span>
                        {isSelected ? '✓ Kategori Sedang Aktif' : `Filter ${cat.label}`}
                      </span>
                      <i className={`fas ${isSelected ? 'fa-check-circle text-black' : 'fa-arrow-right text-[#075E54]'}`}></i>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQ Search Input Field */}
          <div className="faq-search-wrapper">
            <div className="faq-search-box">
              <i className="fas fa-search faq-search-icon"></i>
              <input
                type="text"
                className="faq-search-input"
                placeholder="Ketik kata kunci untuk filter langsung... (misal: tarif, garansi, selang panjang, malam hari, cara pesan)"
                value={faqSearchQuery}
                onChange={(e) => {
                  setFaqSearchQuery(e.target.value);
                  setCollapsedSearchIds([]);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setFaqSearchQuery('');
                  }
                }}
                aria-label="Cari Pertanyaan FAQ"
              />
              {faqSearchQuery && (
                <button
                  type="button"
                  className="faq-search-clear"
                  onClick={() => {
                    setFaqSearchQuery('');
                    setCollapsedSearchIds([]);
                  }}
                  aria-label="Hapus kata kunci pencarian"
                  title="Hapus pencarian (Esc)"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>

            {/* Quick Keyword Suggestion Tags with Staggered Entrance */}
            <div className="faq-quick-tags">
              <span className="faq-quick-tag-label">
                <i className="fas fa-bolt text-[#D97706]"></i> Populer:
              </span>
              {[
                { label: 'Prosedur Pesan', query: 'Prosedur' },
                { label: 'Tarif & Biaya', query: 'Tarif' },
                { label: 'Garansi Resmi', query: 'Garansi' },
                { label: 'Selang Panjang', query: 'Selang Panjang' },
                { label: 'Malam Hari', query: 'Malam Hari' },
                { label: 'Gang Sempit', query: 'Gang Sempit' },
                { label: 'Izin DLH & IPLT', query: 'DLH' },
                { label: 'Metode Bayar', query: 'Metode Bayar' },
              ].map((tag, idx) => {
                const isActive = faqSearchQuery.toLowerCase() === tag.query.toLowerCase();
                return (
                  <button
                    key={tag.query}
                    type="button"
                    style={{ animationDelay: `${idx * 0.04}s` }}
                    className={`faq-quick-tag-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setFaqSearchQuery(isActive ? '' : tag.query);
                      setCollapsedSearchIds([]);
                    }}
                  >
                    {tag.label}
                  </button>
                );
              })}
            </div>

            {faqSearchQuery && (
              <div key={faqSearchQuery} className="faq-search-status">
                <span>
                  Menemukan <strong>{
                    faqData.filter((item) => {
                      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
                      const q = faqSearchQuery.toLowerCase().trim();
                      return matchesCategory && (
                        item.question.toLowerCase().includes(q) ||
                        item.answer.toLowerCase().includes(q) ||
                        item.categoryLabel.toLowerCase().includes(q)
                      );
                    }).length
                  }</strong> pertanyaan relevan secara <em>real-time</em> untuk "<strong>{faqSearchQuery}</strong>"
                  {selectedCategory !== 'all' && (() => {
                    const q = faqSearchQuery.toLowerCase().trim();
                    const totalAcrossAll = faqData.filter(
                      (item) =>
                        item.question.toLowerCase().includes(q) ||
                        item.answer.toLowerCase().includes(q) ||
                        item.categoryLabel.toLowerCase().includes(q)
                    ).length;
                    const inThisCat = faqData.filter((item) => {
                      const matchesCategory = item.category === selectedCategory;
                      return matchesCategory && (
                        item.question.toLowerCase().includes(q) ||
                        item.answer.toLowerCase().includes(q) ||
                        item.categoryLabel.toLowerCase().includes(q)
                      );
                    }).length;

                    if (totalAcrossAll > inThisCat) {
                      return (
                        <button
                          type="button"
                          onClick={() => setSelectedCategory('all')}
                          className="ml-2 font-bold text-[#075E54] underline hover:text-black cursor-pointer"
                        >
                          (Lihat {totalAcrossAll} di Semua Kategori)
                        </button>
                      );
                    }
                    return null;
                  })()}
                </span>
                <button
                  type="button"
                  onClick={() => { setFaqSearchQuery(''); setSelectedCategory('all'); setCollapsedSearchIds([]); }}
                  className="faq-search-reset-btn"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </div>

          {/* Category Tabs with Dynamic Real-time Counters, Grouping View Mode, & Print Action */}
          <div className="faq-toolbar-row">
            <div className="faq-categories">
              {([
                { key: 'all' as const, label: 'Semua', icon: 'fas fa-th-large' },
                ...serviceCategoriesList.map((c) => ({
                  key: c.key,
                  label: c.label,
                  icon: c.icon,
                })),
              ]).map((tab) => {
                const q = faqSearchQuery.toLowerCase().trim();
                const count = faqData.filter((item) => {
                  const matchesCategory = tab.key === 'all' || item.category === tab.key;
                  if (!q) return matchesCategory;
                  return matchesCategory && (
                    item.question.toLowerCase().includes(q) ||
                    item.answer.toLowerCase().includes(q) ||
                    item.categoryLabel.toLowerCase().includes(q)
                  );
                }).length;

                return (
                  <button
                    key={tab.key}
                    type="button"
                    className={`faq-cat-btn ${selectedCategory === tab.key ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCategory(tab.key);
                      setCollapsedSearchIds([]);
                      if (!faqSearchQuery.trim()) {
                        const firstInCat = faqData.find((i) => tab.key === 'all' || i.category === tab.key);
                        if (firstInCat) setOpenFaqId(firstInCat.id);
                      }
                    }}
                  >
                    {tab.icon && <i className={`${tab.icon} mr-1`}></i>}
                    <span>{tab.label}</span>
                    <span className="faq-cat-count">{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="faq-toolbar-actions">
              {/* Dynamic Grouping View Toggle */}
              <button
                type="button"
                onClick={() => setIsGroupedFaqView(!isGroupedFaqView)}
                className={`faq-view-toggle-btn ${isGroupedFaqView ? 'active' : ''}`}
                title={isGroupedFaqView ? 'Beralih ke mode daftar tunggal' : 'Beralih ke mode pengelompokan kategori layanan'}
              >
                <i className={`fas ${isGroupedFaqView ? 'fa-layer-group' : 'fa-list-ul'}`}></i>
                <span>{isGroupedFaqView ? 'Mode Grup Kategori' : 'Mode Daftar Tunggal'}</span>
              </button>

              {/* Print FAQ & Structured Data Button */}
              <button
                type="button"
                onClick={() => {
                  setPrintScope(faqSearchQuery.trim() || selectedCategory !== 'all' ? 'current' : 'all');
                  setShowPrintFaqModal(true);
                }}
                className="faq-print-btn"
                title="Cetak atau unduh versi print-friendly FAQ beserta referensi Schema.org JSON-LD"
                aria-label="Cetak Dokumen FAQ"
              >
                <i className="fas fa-print"></i>
                <span>Cetak Dokumen FAQ</span>
                <span className="faq-print-badge-mini">PDF &amp; Schema</span>
              </button>
            </div>
          </div>

          {/* Quick Jump Bar when in Grouped View with All Categories */}
          {isGroupedFaqView && selectedCategory === 'all' && (
            <div className="faq-group-jump-bar">
              <div className="faq-jump-pills-row">
                <span className="faq-jump-label">
                  <i className="fas fa-compass text-[#D97706]"></i> Lompat Cepat:
                </span>
                {serviceCategoriesList.map((cat) => {
                  const q = faqSearchQuery.toLowerCase().trim();
                  const count = faqData.filter((item) => {
                    if (item.category !== cat.key) return false;
                    if (!q) return true;
                    return (
                      item.question.toLowerCase().includes(q) ||
                      item.answer.toLowerCase().includes(q) ||
                      item.categoryLabel.toLowerCase().includes(q)
                    );
                  }).length;

                  return (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => {
                        const el = document.getElementById(`faq-group-${cat.key}`);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="faq-jump-pill"
                    >
                      <i className={`${cat.icon} text-xs`}></i>
                      <span>{cat.label}</span>
                      <span className="faq-jump-pill-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              <div className="faq-group-mass-controls">
                <button
                  type="button"
                  onClick={() => setCollapsedGroupKeys([])}
                  className="faq-mass-toggle-btn"
                  title="Buka seluruh grup kategori"
                >
                  <i className="fas fa-chevron-down mr-1"></i> Buka Semua Grup
                </button>
                <span className="text-gray-300">|</span>
                <button
                  type="button"
                  onClick={() => setCollapsedGroupKeys(serviceCategoriesList.map((c) => c.key))}
                  className="faq-mass-toggle-btn"
                  title="Tutup seluruh grup kategori"
                >
                  <i className="fas fa-chevron-up mr-1"></i> Tutup Semua Grup
                </button>
              </div>
            </div>
          )}

          {/* Category Spotlight Banner when Single Category is Selected */}
          {selectedCategory !== 'all' && (() => {
            const currentCatMeta = serviceCategoriesList.find((c) => c.key === selectedCategory);
            if (!currentCatMeta) return null;
            return (
              <div className="faq-category-banner">
                <div className="faq-cat-banner-left">
                  <div className="faq-cat-banner-icon">
                    <i className={currentCatMeta.icon}></i>
                  </div>
                  <div className="faq-cat-banner-info">
                    <h3>
                      <span>{currentCatMeta.fullTitle}</span>
                      <span className={`faq-category-badge ${currentCatMeta.badgeClass}`}>
                        {currentCatMeta.label}
                      </span>
                    </h3>
                    <p>{currentCatMeta.desc}</p>
                  </div>
                </div>
                <div className="faq-cat-banner-actions">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className="btn-see-all-cats"
                  >
                    <i className="fas fa-th-large"></i> Tampilkan Semua Kategori ({faqData.length})
                  </button>
                </div>
              </div>
            );
          })()}

          {/* FAQ Accordion List / Empty State */}
          {(() => {
            const isSearching = faqSearchQuery.trim().length > 0;
            const q = faqSearchQuery.toLowerCase().trim();

            const filteredList = faqData.filter((item) => {
              const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
              if (!isSearching) return matchesCategory;
              return matchesCategory && (
                item.question.toLowerCase().includes(q) ||
                item.answer.toLowerCase().includes(q) ||
                item.categoryLabel.toLowerCase().includes(q)
              );
            });

            if (filteredList.length === 0) {
              return (
                <div className="faq-empty-state">
                  <div className="faq-empty-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h4>Pertanyaan Tidak Ditemukan</h4>
                  <p>
                    Tidak ada pertanyaan FAQ yang cocok dengan kata kunci "<strong>{faqSearchQuery}</strong>" pada filter saat ini.
                  </p>
                  <div className="faq-empty-actions">
                    <button
                      type="button"
                      onClick={() => { setFaqSearchQuery(''); setSelectedCategory('all'); setCollapsedSearchIds([]); }}
                      className="btn-faq-reset"
                    >
                      <i className="fas fa-undo mr-1.5"></i> Tampilkan Semua FAQ
                    </button>
                    <a
                      href={`https://wa.me/6285715654183?text=Halo%20Mitra%20Bersih,%20saya%20ingin%20tanya%20terkait:%20${encodeURIComponent(faqSearchQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-faq-ask-wa"
                    >
                      <i className="fab fa-whatsapp mr-1.5"></i> Tanya Langsung via WhatsApp
                    </a>
                  </div>
                </div>
              );
            }

            // Helper to render an individual FAQ card without invalid nested button
            const renderFaqCard = (item: FAQItem) => {
              const isOpen = isSearching
                ? !collapsedSearchIds.includes(item.id)
                : openFaqId === item.id;

              const handleToggleItem = () => {
                if (isSearching) {
                  if (collapsedSearchIds.includes(item.id)) {
                    setCollapsedSearchIds(collapsedSearchIds.filter((id) => id !== item.id));
                  } else {
                    setCollapsedSearchIds([...collapsedSearchIds, item.id]);
                  }
                } else {
                  setOpenFaqId(isOpen ? null : item.id);
                }
              };

              return (
                <div key={`${selectedCategory}-${faqSearchQuery}-${item.id}`} className={`faq-card ${isOpen ? 'open' : ''}`}>
                  <div
                    className="faq-header"
                    role="button"
                    tabIndex={0}
                    onClick={handleToggleItem}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleToggleItem();
                      }
                    }}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-header-left">
                      <span className={`faq-category-badge ${item.badgeClass}`}>
                        {highlightFaqMatch(item.categoryLabel, faqSearchQuery)}
                      </span>
                      <span className="faq-question-text">
                        {highlightFaqMatch(item.question, faqSearchQuery)}
                      </span>
                    </div>
                    <div className="faq-header-actions">
                      <button
                        type="button"
                        className="faq-quick-share-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyFaq(item);
                        }}
                        title="Bagikan / Salin Pertanyaan & Jawaban"
                        aria-label={`Bagikan ${item.question}`}
                      >
                        <i className={`fas ${copiedFaqId === item.id ? 'fa-check text-green-600' : 'fa-share-alt'}`}></i>
                      </button>
                      <div className="faq-toggle-icon">
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  {isOpen && (
                    <div className="faq-body">
                      <p>{highlightFaqMatch(item.answer, faqSearchQuery)}</p>

                      {/* Share Options Bar */}
                      <div className="faq-footer-actions">
                        <span className="faq-share-label">
                          <i className="fas fa-share-alt"></i> Bagikan Jawaban:
                        </span>
                        <div className="faq-share-btns">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyFaq(item);
                            }}
                            className={`faq-share-btn ${copiedFaqId === item.id ? 'copied' : ''}`}
                            title="Salin Teks & Tautan Jawaban"
                          >
                            <i className={`fas ${copiedFaqId === item.id ? 'fa-check' : 'fa-link'}`}></i>
                            <span>{copiedFaqId === item.id ? 'Tersalin!' : 'Salin Tautan'}</span>
                          </button>

                          <a
                            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                              `*FAQ Mitra Bersih 24Jam*\n\n*Tanya:* ${item.question}\n\n*Jawab:* ${item.answer}\n\nInfo & Layanan 24 Jam: ${window.location.origin}#faq`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="faq-share-btn share-wa"
                            onClick={(e) => e.stopPropagation()}
                            title="Bagikan ke WhatsApp"
                          >
                            <i className="fab fa-whatsapp text-[#25D366]"></i>
                            <span>WhatsApp</span>
                          </a>

                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              `${window.location.origin}#faq`
                            )}&quote=${encodeURIComponent(`[FAQ Mitra Bersih 24Jam] ${item.question}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="faq-share-btn share-fb"
                            onClick={(e) => e.stopPropagation()}
                            title="Bagikan ke Facebook"
                          >
                            <i className="fab fa-facebook-f text-[#1877F2]"></i>
                            <span>Facebook</span>
                          </a>

                          <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                              `FAQ Mitra Bersih 24Jam: "${item.question}" - Jawaban lengkap:`
                            )}&url=${encodeURIComponent(`${window.location.origin}#faq`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="faq-share-btn share-twitter"
                            onClick={(e) => e.stopPropagation()}
                            title="Bagikan ke X / Twitter"
                          >
                            <i className="fab fa-x-twitter"></i>
                            <span>X</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            };

            // DYNAMIC GROUPED VIEW: Render groups when grouped view is enabled and 'all' is selected
            if (isGroupedFaqView && selectedCategory === 'all') {
              return (
                <div key={`${selectedCategory}-${faqSearchQuery}`} className="faq-groups-wrapper">
                  {serviceCategoriesList.map((cat) => {
                    const groupItems = filteredList.filter((item) => item.category === cat.key);
                    if (groupItems.length === 0) return null;
                    const isGroupCollapsed = collapsedGroupKeys.includes(cat.key);

                    return (
                      <div
                        id={`faq-group-${cat.key}`}
                        key={cat.key}
                        className={`faq-group-card ${isGroupCollapsed ? 'is-collapsed' : ''}`}
                      >
                        <div
                          className="faq-group-header"
                          onClick={() => {
                            setCollapsedGroupKeys((prev) =>
                              prev.includes(cat.key) ? prev.filter((k) => k !== cat.key) : [...prev, cat.key]
                            );
                          }}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setCollapsedGroupKeys((prev) =>
                                prev.includes(cat.key) ? prev.filter((k) => k !== cat.key) : [...prev, cat.key]
                              );
                            }
                          }}
                          aria-expanded={!isGroupCollapsed}
                        >
                          <div className="faq-group-meta-left">
                            <div className="faq-group-icon-circle">
                              <i className={cat.icon}></i>
                            </div>
                            <div className="faq-group-headings">
                              <div className="faq-group-title-row">
                                <h3 className="faq-group-title">{cat.fullTitle}</h3>
                                <span className={`faq-category-badge ${cat.badgeClass}`}>{cat.label}</span>
                                <span className="faq-group-count-badge">
                                  {groupItems.length} Tanya Jawab
                                </span>
                              </div>
                              <p className="faq-group-desc">{cat.desc}</p>
                            </div>
                          </div>
                          <div className="faq-group-controls">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCategory(cat.key);
                              }}
                              className="faq-group-filter-btn"
                              title={`Saring hanya kategori ${cat.label}`}
                            >
                              <i className="fas fa-filter"></i>
                              <span>Fokus {cat.label}</span>
                            </button>
                            <div className="faq-group-chevron-icon">
                              <i className="fas fa-chevron-up"></i>
                            </div>
                          </div>
                        </div>

                        {!isGroupCollapsed && (
                          <div className="faq-group-items-list">
                            {groupItems.map(renderFaqCard)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            }

            // FLAT LIST VIEW: When grouped mode is off or a specific category filter is active
            return (
              <div key={`${selectedCategory}-${faqSearchQuery}`} className="faq-list">
                {filteredList.map(renderFaqCard)}
              </div>
            );
          })()}

          {/* DEDICATED 'ASK A PRO' (TANYA TEKNISI SENIOR) SECTION */}
          <div id="ask-a-pro" className="ask-pro-section">
            <div className="ask-pro-header">
              <span className="ask-pro-badge">
                <i className="fas fa-user-tie"></i> ASK A PRO &bull; KONSULTASI TEKNIS SENIOR
              </span>
              <h3 className="ask-pro-title">
                Tanya Teknisi Senior Mitra Bersih
              </h3>
              <p className="ask-pro-subtitle">
                Kendala saluran pipa atau septic tank Anda belum terjawab pada daftar FAQ di atas? Ajukan pertanyaan teknis spesifik langsung kepada tim teknisi senior kami. Dapatkan analisis teknis tertulis dan rekomendasi solusi yang dikirim langsung ke alamat email Anda secara gratis.
              </p>

              {/* Trust Indicators */}
              <div className="ask-pro-trust-chips">
                <span className="ask-pro-trust-chip">
                  <i className="fas fa-bolt text-[#059669]"></i> Respon Email Cepat (&lt; 2 Jam Kerja)
                </span>
                <span className="ask-pro-trust-chip">
                  <i className="fas fa-check-circle text-[#059669]"></i> 100% Gratis &amp; Tanpa Biaya Konsultasi
                </span>
                <span className="ask-pro-trust-chip">
                  <i className="fas fa-award text-[#059669]"></i> Analisis Langsung oleh Teknisi 9–14 Thn Pengalaman
                </span>
              </div>

              {/* Senior Technicians Showcase */}
              <div className="ask-pro-experts-row">
                {seniorTechniciansList.map((expert) => (
                  <div key={expert.id} className="ask-pro-expert-card">
                    <div
                      className="ask-pro-expert-avatar"
                      style={{ backgroundColor: expert.avatarBg }}
                    >
                      {expert.avatar}
                    </div>
                    <div className="ask-pro-expert-meta">
                      <strong>{expert.name}</strong>
                      <span>{expert.role}</span>
                      <span className="expert-exp">
                        <i className="fas fa-certificate text-amber-500 mr-1"></i>
                        {expert.exp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ask-pro-body">
              {proQuestionStatus === 'success' && proQuestionTicket ? (
                <div className="ask-pro-success-card">
                  <div className="ask-pro-success-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="ask-pro-ticket-pill">
                    <i className="fas fa-ticket-alt text-amber-500"></i> No. Tiket: {proQuestionTicket.id}
                  </div>
                  <h4 className="ask-pro-success-title">Pertanyaan Berhasil Terkirim ke Teknisi Senior!</h4>
                  <p className="ask-pro-success-desc">
                    Terima kasih <strong>{proQuestionTicket.name}</strong>. Tim teknisi senior kami sedang meninjau pertanyaan teknis Anda dan akan mengirimkan analisa solusi tertulis ke <strong>{proQuestionTicket.email}</strong> dalam waktu estimasi <strong>{proQuestionTicket.estimatedReplyTime}</strong>.
                  </p>

                  <div className="ask-pro-summary-box">
                    <div className="ask-pro-summary-row">
                      <span className="ask-pro-summary-label">Topik Masalah:</span>
                      <span className="ask-pro-summary-value">{proQuestionTicket.category}</span>
                    </div>
                    <div className="ask-pro-summary-row">
                      <span className="ask-pro-summary-label">Wilayah Lokasi:</span>
                      <span className="ask-pro-summary-value">{proQuestionTicket.location}</span>
                    </div>
                    <div className="ask-pro-summary-row">
                      <span className="ask-pro-summary-label">Tingkat Urgensi:</span>
                      <span className="ask-pro-summary-value">{proQuestionTicket.urgencyLabel}</span>
                    </div>
                    <div className="ask-pro-summary-row">
                      <span className="ask-pro-summary-label">Waktu Pengajuan:</span>
                      <span className="ask-pro-summary-value">Hari ini, {proQuestionTicket.submittedAt} WIB</span>
                    </div>
                    <div className="ask-pro-summary-row">
                      <span className="ask-pro-summary-label">Pertanyaan Anda:</span>
                      <span className="ask-pro-summary-value italic">"{proQuestionTicket.question}"</span>
                    </div>
                  </div>

                  <div className="ask-pro-success-actions">
                    <button
                      type="button"
                      onClick={handleResetProQuestion}
                      className="btn-pro-another"
                    >
                      <i className="fas fa-edit mr-1.5"></i> Ajukan Pertanyaan Lain
                    </button>
                    <a
                      href={`https://wa.me/6285715654183?text=Halo%20Mitra%20Bersih,%20saya%20sudah%20mengirim%20pertanyaan%20teknis%20No%20Tiket%20${proQuestionTicket.id}%20terkait:%20${encodeURIComponent(proQuestionTicket.category)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pro-wa-backup"
                    >
                      <i className="fab fa-whatsapp"></i> Butuh Respon Darurat WhatsApp Sekarang
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitProQuestion} className="ask-pro-form-element">
                  {proQuestionError && (
                    <div className="ask-pro-error-alert" role="alert">
                      <i className="fas fa-exclamation-circle text-red-500"></i>
                      <span>{proQuestionError}</span>
                    </div>
                  )}

                  <div className="ask-pro-grid-2">
                    <div className="ask-pro-field">
                      <label className="ask-pro-label" htmlFor="pro-name">
                        <span>Nama Lengkap <span className="req">*</span></span>
                      </label>
                      <input
                        id="pro-name"
                        type="text"
                        className="ask-pro-input"
                        placeholder="Contoh: Budi Santoso"
                        value={proQuestionName}
                        onChange={(e) => setProQuestionName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="ask-pro-field">
                      <label className="ask-pro-label" htmlFor="pro-email">
                        <span>Alamat Email untuk Balasan <span className="req">*</span></span>
                        <span className="hint">Jawaban dikirim ke sini</span>
                      </label>
                      <input
                        id="pro-email"
                        type="email"
                        className="ask-pro-input"
                        placeholder="nama@email.com"
                        value={proQuestionEmail}
                        onChange={(e) => setProQuestionEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="ask-pro-grid-2">
                    <div className="ask-pro-field">
                      <label className="ask-pro-label" htmlFor="pro-phone">
                        <span>No. WhatsApp / Telepon</span>
                        <span className="hint">(Opsional untuk verifikasi cepat)</span>
                      </label>
                      <input
                        id="pro-phone"
                        type="tel"
                        className="ask-pro-input"
                        placeholder="0812-XXXX-XXXX"
                        value={proQuestionPhone}
                        onChange={(e) => setProQuestionPhone(e.target.value)}
                      />
                    </div>

                    <div className="ask-pro-field">
                      <label className="ask-pro-label" htmlFor="pro-location">
                        <span>Kecamatan / Lokasi di Bekasi <span className="req">*</span></span>
                      </label>
                      <select
                        id="pro-location"
                        className="ask-pro-select"
                        value={proQuestionLocation}
                        onChange={(e) => setProQuestionLocation(e.target.value)}
                      >
                        <option value="Bekasi Barat">Bekasi Barat</option>
                        <option value="Bekasi Selatan">Bekasi Selatan</option>
                        <option value="Bekasi Timur">Bekasi Timur</option>
                        <option value="Bekasi Utara">Bekasi Utara</option>
                        <option value="Jatiasih">Jatiasih</option>
                        <option value="Jatisampurna">Jatisampurna</option>
                        <option value="Medan Satria">Medan Satria</option>
                        <option value="Mustikajaya">Mustikajaya</option>
                        <option value="Pondok Gede">Pondok Gede</option>
                        <option value="Pondok Melati">Pondok Melati</option>
                        <option value="Rawalumbu">Rawalumbu</option>
                        <option value="Bantargebang">Bantargebang</option>
                        <option value="Kabupaten Bekasi & Sekitarnya">Kabupaten Bekasi & Sekitarnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="ask-pro-field">
                    <label className="ask-pro-label" htmlFor="pro-category">
                      <span>Kategori Kendala Teknis <span className="req">*</span></span>
                    </label>
                    <select
                      id="pro-category"
                      className="ask-pro-select"
                      value={proQuestionCategory}
                      onChange={(e) => setProQuestionCategory(e.target.value)}
                    >
                      <option value="Septic Tank Penuh / Mampet Berulang">Septic Tank Penuh / Mampet Berulang</option>
                      <option value="Saluran Pipa Air Kotor & Wastafel Mampet">Saluran Pipa Air Kotor & Wastafel Mampet</option>
                      <option value="Masalah Bau Menyengat & Bak Kontrol Meluap">Masalah Bau Menyengat & Bak Kontrol Meluap</option>
                      <option value="Instalasi Limbah STP / Grease Trap Komersial">Instalasi Limbah STP / Grease Trap Komersial</option>
                      <option value="Konsultasi Teknis Khusus Lainnya">Konsultasi Teknis Khusus Lainnya</option>
                    </select>
                  </div>

                  <div className="ask-pro-field">
                    <label className="ask-pro-label">
                      <span>Tingkat Urgensi Penanganan <span className="req">*</span></span>
                    </label>
                    <div className="ask-pro-urgency-row">
                      <button
                        type="button"
                        onClick={() => setProQuestionUrgency('normal')}
                        className={`ask-pro-urgency-btn ${proQuestionUrgency === 'normal' ? 'active' : ''}`}
                      >
                        <strong>Standar (Biasa)</strong>
                        <span>Balasan email 2–4 jam</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setProQuestionUrgency('important')}
                        className={`ask-pro-urgency-btn ${proQuestionUrgency === 'important' ? 'active' : ''}`}
                      >
                        <strong>Penting (Disarankan)</strong>
                        <span>Balasan email 1–2 jam</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setProQuestionUrgency('urgent')}
                        className={`ask-pro-urgency-btn ${proQuestionUrgency === 'urgent' ? 'active' : ''}`}
                      >
                        <strong>Darurat (Siaga)</strong>
                        <span>Balasan email &lt; 60 menit</span>
                      </button>
                    </div>
                  </div>

                  <div className="ask-pro-field">
                    <label className="ask-pro-label" htmlFor="pro-detail">
                      <span>Detail Pertanyaan / Gejala Kendala Teknis <span className="req">*</span></span>
                      <span className="hint">{proQuestionDetail.length} karakter (min. 15)</span>
                    </label>
                    <textarea
                      id="pro-detail"
                      className="ask-pro-textarea"
                      placeholder="Jelaskan kendala Anda selengkap mungkin (misal: Air kloset tidak kunjung surut saat disiram, sudah dicoba plunger tetapi tidak berhasil, lokasi rumah berada di dalam gang sempit, septic tank terakhir disedot 4 tahun lalu...)"
                      value={proQuestionDetail}
                      onChange={(e) => setProQuestionDetail(e.target.value)}
                      rows={4}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={proQuestionStatus === 'loading'}
                    className="ask-pro-submit-btn"
                  >
                    {proQuestionStatus === 'loading' ? (
                      <>
                        <i className="fas fa-circle-notch fa-spin"></i>
                        <span>Mengirim Pertanyaan ke Teknisi Senior...</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        <span>Kirim Pertanyaan ke Teknisi Senior (Dijawab via Email)</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Consultation CTA Banner */}
          <div className="faq-cta-banner">
            <div className="faq-cta-content">
              <h4>Masih Ada Pertanyaan atau <span>Butuh Penanganan Cepat?</span></h4>
              <p>
                Konsultasikan keluhan septic tank atau saluran mampet Anda secara gratis. Tim customer service dan teknisi siaga 24 jam siap merespon dan meluncur ke lokasi Anda.
              </p>
            </div>
            <div className="faq-cta-actions">
              <a
                href="https://wa.me/6285715654183?text=Halo%20Mitra%20Bersih,%20saya%20ingin%20konsultasi%20layanan%20sedot%20WC"
                className="faq-btn-wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                Chat WhatsApp
              </a>
              <a
                href="tel:+6285715654183"
                className="faq-btn-phone"
              >
                <i className="fas fa-phone-alt"></i>
                Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIKEL & TIPS SECTION */}
      <section className="tips-section" id="artikel">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-badge">EDUKASI & TIPS BERSIH</span>
            <h2 className="section-title">Artikel & Tips Seputar Saluran & Septic Tank</h2>
            <p className="section-subtitle">
              Panduan praktis dari teknisi ahli Mitra Bersih untuk menjaga kelancaran saluran pipa, mencegah WC mampet, dan merawat septic tank agar tahan lama.
            </p>
          </div>

          {/* Category Filter */}
          <div className="tips-categories">
            <button
              className={`tips-cat-btn ${selectedTipCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedTipCategory('all')}
            >
              Semua Tips
            </button>
            <button
              className={`tips-cat-btn ${selectedTipCategory === 'septic' ? 'active' : ''}`}
              onClick={() => setSelectedTipCategory('septic')}
            >
              <i className="fas fa-toilet mr-2"></i> Perawatan Septic Tank
            </button>
            <button
              className={`tips-cat-btn ${selectedTipCategory === 'pipe' ? 'active' : ''}`}
              onClick={() => setSelectedTipCategory('pipe')}
            >
              <i className="fas fa-faucet mr-2"></i> Cegah Pipa Mampet
            </button>
            <button
              className={`tips-cat-btn ${selectedTipCategory === 'emergency' ? 'active' : ''}`}
              onClick={() => setSelectedTipCategory('emergency')}
            >
              <i className="fas fa-exclamation-triangle mr-2"></i> Solusi Darurat
            </button>
          </div>

          {/* Tips Grid */}
          <div className="tips-grid">
            {articlesData
              .filter((item) => selectedTipCategory === 'all' || item.category === selectedTipCategory)
              .map((article) => (
                <article key={article.id} className="tip-card">
                  <div className="tip-card-img-wrapper">
                    <ImageWithSkeleton
                      src={article.image}
                      alt={article.title}
                      fallbackSrc={article.fallbackImage}
                      className="tip-card-img"
                      containerClassName="w-full h-full"
                    />
                    <span className="tip-badge">{article.categoryLabel}</span>
                    <span className="tip-read-time">
                      <i className="fas fa-clock"></i> {article.readTime}
                    </span>
                  </div>

                  <div className="tip-card-body">
                    <div className="tip-card-meta">
                      <span><i className="fas fa-calendar-alt mr-1"></i> {article.date}</span>
                      <span>•</span>
                      <span>Mitra Bersih</span>
                    </div>

                    <h3 className="tip-card-title">{article.title}</h3>
                    <p className="tip-card-excerpt">{article.excerpt}</p>

                    <button
                      className="tip-card-btn"
                      onClick={() => setReadingArticle(article)}
                    >
                      <span>Baca Tips Lengkap</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container-custom">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Informasi Kontak</h4>
              <div className="footer-contact-item">
                <i className="fas fa-phone-alt"></i>
                <div className="info">
                  <span>Telepon / WhatsApp</span>
                  <strong>+62 857-1565-4183</strong>
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="fab fa-whatsapp"></i>
                <div className="info">
                  <span>WhatsApp</span>
                  <strong>+62 857-1565-4183</strong>
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <span>Email</span>
                  <strong>info@mitraberih24.com</strong>
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <span>Alamat</span>
                  <strong>Kota Bekasi, Jawa Barat</strong>
                </div>
              </div>

              <div className="social-row">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/6285715654183" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Layanan</h4>
              <ul className="footer-links">
                <li>
                  <a href="#layanan" onClick={(e) => { e.preventDefault(); scrollTo('layanan'); }}>
                    <i className="fas fa-chevron-right"></i> Sedot WC Lengkap
                  </a>
                </li>
                <li>
                  <a href="#layanan" onClick={(e) => { e.preventDefault(); scrollTo('layanan'); }}>
                    <i className="fas fa-chevron-right"></i> Pelancaran Saluran Mampet
                  </a>
                </li>
                <li>
                  <a href="#layanan" onClick={(e) => { e.preventDefault(); scrollTo('layanan'); }}>
                    <i className="fas fa-chevron-right"></i> Sedot Limbah STP
                  </a>
                </li>
                <li>
                  <a href="#layanan" onClick={(e) => { e.preventDefault(); scrollTo('layanan'); }}>
                    <i className="fas fa-chevron-right"></i> Sedot Septic Tank
                  </a>
                </li>
                <li>
                  <a href="#layanan" onClick={(e) => { e.preventDefault(); scrollTo('layanan'); }}>
                    <i className="fas fa-chevron-right"></i> Perawatan Saluran Pipa
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Lainnya</h4>
              <ul className="footer-links">
                <li>
                  <a href="#tentang" onClick={(e) => { e.preventDefault(); scrollTo('tentang'); }}>
                    <i className="fas fa-chevron-right"></i> Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#galeri" onClick={(e) => { e.preventDefault(); scrollTo('galeri'); }}>
                    <i className="fas fa-chevron-right"></i> Galeri
                  </a>
                </li>
                <li>
                  <a href="#kontak" onClick={(e) => { e.preventDefault(); scrollTo('kontak'); }}>
                    <i className="fas fa-chevron-right"></i> Area Kontak
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>
                    <i className="fas fa-chevron-right"></i> Tanya Jawab (FAQ)
                  </a>
                </li>
                <li>
                  <a href="#artikel" onClick={(e) => { e.preventDefault(); scrollTo('artikel'); }}>
                    <i className="fas fa-chevron-right"></i> Artikel & Tips
                  </a>
                </li>
                <li>
                  <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
                    <i className="fas fa-chevron-right"></i> Beranda
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="brand">SEDOT WC MITRA BERSIH 24JAM</div>
            <div className="copyright">&copy; 2024 Mitra Bersih 24Jam. All Rights Reserved.</div>
          </div>
        </div>
      </footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop && !chatbotOpen ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Kembali ke atas halaman"
        title="Kembali ke Atas"
      >
        <i className="fas fa-arrow-up"></i>
        <span className="back-to-top-tooltip hidden sm:inline-block">Ke Atas</span>
      </button>

      {/* FLOATING WHATSAPP & CHATBOT WIDGET */}
      <div className="wa-widget-container">
        {!chatbotOpen && (
          <div className="wa-trigger-tooltip hidden sm:flex">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] inline-block animate-pulse"></span>
            <span>Pesan Cepat 24 Jam · Pilih Layanan</span>
          </div>
        )}

        <button
          className={`wa-trigger-btn ${chatbotOpen ? 'active' : ''}`}
          onClick={() => setChatbotOpen(!chatbotOpen)}
          aria-label="Buka Chatbot WhatsApp"
        >
          {chatbotOpen ? <i className="fas fa-times text-xl"></i> : <i className="fab fa-whatsapp"></i>}
          {!chatbotOpen && <span className="wa-trigger-badge">1</span>}
        </button>
      </div>

      {/* CHATBOT POPUP WINDOW */}
      {chatbotOpen && (
        <div className="wa-chatbot-box">
          {/* Header */}
          <div className="wa-chatbot-header">
            <div className="wa-chatbot-profile">
              <div className="wa-chatbot-avatar">
                <i className="fas fa-headset"></i>
                <span className="wa-online-dot"></span>
              </div>
              <div className="wa-chatbot-info">
                <strong>Mitra Bersih 24 Jam</strong>
                <span>Online · Respon Kilat &lt; 1 Menit</span>
              </div>
            </div>
            <button
              className="wa-close-btn"
              onClick={() => setChatbotOpen(false)}
              aria-label="Tutup Chat"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Body */}
          <div className="wa-chatbot-body">
            {/* Bot message 1 */}
            <div className="wa-bot-msg">
              <p>
                Halo Kak! 👋 Ada masalah septic tank atau saluran pipa mampet?
                <br />
                <strong>Pilih jenis layanan di bawah ini</strong> agar pesan WhatsApp terisi otomatis dengan detail keluhan Anda:
              </p>
              <span className="wa-bot-msg-time">Sekarang</span>
            </div>

            {/* Service selector */}
            <div className="wa-selection-box">
              <button
                type="button"
                className={`wa-service-btn ${selectedService === 'sedot_wc' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedService('sedot_wc');
                  setSelectedComplaint(complaintsByService.sedot_wc[0]);
                }}
              >
                <div className="wa-service-icon text-[#B45309]">
                  <i className="fas fa-truck-loading"></i>
                </div>
                <div className="wa-service-text">
                  <strong>Sedot WC &amp; Septic Tank</strong>
                  <span>Kuras bersih tuntas, anti bau, armada modern</span>
                </div>
              </button>

              <button
                type="button"
                className={`wa-service-btn ${selectedService === 'mampet' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedService('mampet');
                  setSelectedComplaint(complaintsByService.mampet[0]);
                }}
              >
                <div className="wa-service-icon text-[#0284C7]">
                  <i className="fas fa-faucet"></i>
                </div>
                <div className="wa-service-text">
                  <strong>Pelancaran Saluran Mampet</strong>
                  <span>Tanpa bongkar lantai, lancar seketika</span>
                </div>
              </button>

              <button
                type="button"
                className={`wa-service-btn ${selectedService === 'stp' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedService('stp');
                  setSelectedComplaint(complaintsByService.stp[0]);
                }}
              >
                <div className="wa-service-icon text-[#16A34A]">
                  <i className="fas fa-industry"></i>
                </div>
                <div className="wa-service-text">
                  <strong>Sedot Limbah STP &amp; Lemak</strong>
                  <span>Ruko, resto, hotel, pabrik &amp; industri</span>
                </div>
              </button>

              <button
                type="button"
                className={`wa-service-btn ${selectedService === 'darurat' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedService('darurat');
                  setSelectedComplaint(complaintsByService.darurat[0]);
                }}
              >
                <div className="wa-service-icon text-[#DC2626]">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="wa-service-text">
                  <strong>Panggilan Darurat (Urgent)</strong>
                  <span>Air meluap, butuh armada tiba 15-30 menit</span>
                </div>
              </button>
            </div>

            {/* Complaint Selector */}
            <div className="mt-1">
              <span className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                Pilih Detail Keluhan:
              </span>
              <div className="wa-detail-chips">
                {complaintsByService[selectedService].map((complaint, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`wa-chip-btn ${selectedComplaint === complaint ? 'active' : ''}`}
                    onClick={() => setSelectedComplaint(complaint)}
                  >
                    {complaint}
                  </button>
                ))}
              </div>
            </div>

            {/* Location selector */}
            <div className="wa-input-row">
              <label className="wa-input-label">Wilayah Kecamatan di Bekasi:</label>
              <select
                className="wa-input-field cursor-pointer font-medium"
                value={selectedKecamatan}
                onChange={(e) => setSelectedKecamatan(e.target.value)}
              >
                {kecamatanBekasiList.map((kec, idx) => (
                  <option key={idx} value={kec}>
                    {kec}
                  </option>
                ))}
              </select>
            </div>

            {/* Address / Note Input */}
            <div className="wa-input-row">
              <label className="wa-input-label">Detail Patokan / Alamat (Opsional):</label>
              <input
                type="text"
                className="wa-input-field"
                placeholder="Contoh: Masuk gang 20m, dekat masjid"
                value={userAddressNote}
                onChange={(e) => setUserAddressNote(e.target.value)}
              />
            </div>

            {/* Preview of auto-generated message */}
            <div>
              <span className="block text-[11px] font-bold text-gray-500 mb-1 uppercase tracking-wide">
                Pratinjau Pesan Otomatis:
              </span>
              <div className="wa-preview-card">
                <p className="font-semibold text-xs text-[#075E54] mb-1">
                  ✓ Pesan WhatsApp Terisi Otomatis:
                </p>
                <div className="text-[11.5px] text-gray-800 leading-tight space-y-1">
                  <div><strong>Layanan:</strong> {selectedService === 'sedot_wc' ? 'Sedot WC / Septic Tank' : selectedService === 'mampet' ? 'Saluran Mampet' : selectedService === 'stp' ? 'Limbah STP' : 'Panggilan Darurat Meluap'}</div>
                  <div><strong>Keluhan:</strong> {selectedComplaint}</div>
                  <div><strong>Lokasi:</strong> {selectedKecamatan}, Kota Bekasi</div>
                  {userAddressNote.trim() && <div><strong>Patokan:</strong> {userAddressNote.trim()}</div>}
                </div>
              </div>
            </div>

            {/* Action button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-send-action-btn"
              onClick={() => setChatbotOpen(false)}
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>Lanjut Kirim ke WhatsApp</span>
            </a>

            <div className="text-center pb-1">
              <a
                href="https://wa.me/6285715654183?text=Halo%20Mitra%20Bersih,%20saya%20butuh%20layanan%20sedot%20WC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11.5px] text-gray-500 hover:text-[#075E54] underline inline-block"
              >
                Atau chat langsung tanpa formulir &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE READING MODAL */}
      {readingArticle && (
        <div
          className="article-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setReadingArticle(null);
            }
          }}
        >
          <div className="article-modal-content">
            <button
              className="article-modal-close"
              aria-label="Tutup Artikel"
              onClick={() => setReadingArticle(null)}
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl">
              <ImageWithSkeleton
                src={readingArticle.image}
                alt={readingArticle.title}
                fallbackSrc={readingArticle.fallbackImage}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 pointer-events-none">
                <div>
                  <span className="bg-[#FFD60A] text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {readingArticle.categoryLabel}
                  </span>
                  <div className="text-gray-300 text-xs mt-2 flex items-center gap-3">
                    <span><i className="fas fa-calendar-alt mr-1"></i> {readingArticle.date}</span>
                    <span>•</span>
                    <span><i className="fas fa-clock mr-1"></i> {readingArticle.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="article-modal-header">
              <h2 className="text-2xl sm:text-3xl font-black text-[#111111] leading-tight">
                {readingArticle.title}
              </h2>

              {/* Dynamic Meta & Social Share Bar */}
              <div className="article-share-bar">
                <div className="article-meta-indicator">
                  <span className="meta-indicator-dot"></span>
                  <span className="text-xs font-bold text-gray-700">Meta SEO &amp; OpenGraph Aktif</span>
                </div>
                <div className="article-share-actions">
                  <button
                    type="button"
                    onClick={() => handleCopyArticleLink(readingArticle)}
                    className={`article-share-btn ${copiedArticleLink ? 'copied' : ''}`}
                    title="Salin Tautan Artikel Lengkap"
                  >
                    <i className={`fas ${copiedArticleLink ? 'fa-check text-green-600' : 'fa-link'}`}></i>
                    <span>{copiedArticleLink ? 'Tautan Tersalin!' : 'Salin Tautan'}</span>
                  </button>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      `*${readingArticle.title}*\n\n${readingArticle.excerpt}\n\nBaca artikel selengkapnya di: ${window.location.origin}${window.location.pathname}#artikel-${readingArticle.id}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-share-btn share-wa"
                    title="Bagikan ke WhatsApp"
                  >
                    <i className="fab fa-whatsapp text-[#25D366]"></i>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `${window.location.origin}${window.location.pathname}#artikel-${readingArticle.id}`
                    )}&quote=${encodeURIComponent(`${readingArticle.title} - ${readingArticle.excerpt}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-share-btn share-fb"
                    title="Bagikan ke Facebook"
                  >
                    <i className="fab fa-facebook-f text-[#1877F2]"></i>
                    <span>Facebook</span>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `${readingArticle.title} - Baca tips lengkap sanitasi di:`
                    )}&url=${encodeURIComponent(`${window.location.origin}${window.location.pathname}#artikel-${readingArticle.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-share-btn share-twitter"
                    title="Bagikan ke X / Twitter"
                  >
                    <i className="fab fa-x-twitter"></i>
                    <span>X</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="article-modal-body">
              <p className="text-base font-medium text-gray-700 leading-relaxed mb-4 italic border-l-4 border-[#FFD60A] pl-4 bg-yellow-50/50 py-2 rounded-r-lg">
                "{readingArticle.content.intro}"
              </p>

              {readingArticle.content.sections.map((section, idx) => (
                <div key={idx} className="mb-5">
                  <h4 className="text-lg font-bold text-[#111111] mb-2">{section.heading}</h4>
                  <p className="text-gray-600 mb-2 leading-relaxed">{section.body}</p>
                  {section.bullets && (
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-gray-800 font-semibold mb-4 leading-relaxed">
                  {readingArticle.content.conclusion}
                </p>

                <div className="article-modal-cta">
                  <div>
                    <strong className="block text-base text-[#111111]">Mengalami Masalah WC atau Saluran Serupa?</strong>
                    <span className="text-xs text-gray-600">Teknisi Mitra Bersih siap meluncur ke lokasi Anda di Bekasi dalam 15-30 menit.</span>
                  </div>
                  <a
                    href={`https://wa.me/6285715654183?text=Halo%20Mitra%20Bersih,%20saya%20membaca%20artikel%20"${encodeURIComponent(readingArticle.title)}"%20dan%20ingin%20konsultasi`}
                    className="faq-btn-wa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i> Konsultasi Sekarang
                  </a>
                </div>

                {/* Email Newsletter Subscription Section */}
                <div className="article-newsletter-box">
                  <div className="article-newsletter-header">
                    <div className="article-newsletter-icon">
                      <i className="fas fa-envelope-open-text"></i>
                    </div>
                    <div className="article-newsletter-text">
                      <h4>Langganan Tips Perawatan Sanitasi Bulanan</h4>
                      <p>
                        Dapatkan panduan praktis merawat septic tank, jadwal kuras berkala, dan cara mencegah saluran mampet langsung ke email Anda setiap bulan.
                      </p>
                    </div>
                  </div>

                  {newsletterStatus === 'success' ? (
                    <div className="article-newsletter-success">
                      <div className="article-newsletter-success-content">
                        <div className="article-newsletter-success-icon">
                          <i className="fas fa-check"></i>
                        </div>
                        <p>
                          Terima kasih! Email <strong>{subscribedEmail}</strong> berhasil terdaftar untuk menerima tips sanitasi bulanan Mitra Bersih.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setNewsletterStatus('idle')}
                        className="article-newsletter-reset-btn"
                      >
                        Daftar email lain
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribeNewsletter} className="article-newsletter-form">
                      <div className="article-newsletter-input-wrap">
                        <i className="fas fa-envelope article-newsletter-input-icon"></i>
                        <input
                          type="email"
                          required
                          className="article-newsletter-input"
                          placeholder="Masukkan email Anda (contoh: nama@email.com)"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          disabled={newsletterStatus === 'loading'}
                        />
                      </div>
                      <button
                        type="submit"
                        className="article-newsletter-btn"
                        disabled={newsletterStatus === 'loading'}
                      >
                        {newsletterStatus === 'loading' ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i>
                            <span>Mendaftar...</span>
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane"></i>
                            <span>Langganan Gratis</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}

                  <div className="article-newsletter-privacy">
                    <i className="fas fa-shield-alt text-[#22C55E]"></i>
                    <span>Privasi aman 100%. Kami tidak mengirim spam &amp; Anda dapat unsubscribe kapan saja.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div
          className="lightbox active"
          id="lightbox"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setLightboxImg(null);
            }
          }}
        >
          <button
            className="lightbox-close"
            id="lightboxClose"
            aria-label="Tutup"
            onClick={() => setLightboxImg(null)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="flex flex-col items-center max-w-4xl max-h-[90vh]">
            <ImageWithSkeleton
              src={lightboxImg.src}
              alt={lightboxImg.title}
              id="lightboxImage"
              className="max-h-[75vh] object-contain"
              containerClassName="max-h-[75vh] min-h-[300px] min-w-[300px] flex items-center justify-center rounded-xl overflow-hidden bg-black/40"
              loading="eager"
            />
            <div className="text-white text-center mt-3 bg-black/60 px-4 py-2 rounded-lg backdrop-blur-sm">
              <h4 className="font-bold text-lg text-[#FFD60A]">{lightboxImg.title}</h4>
              <p className="text-sm text-gray-200">{lightboxImg.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Link Copied Toast Notification */}
      {copiedFaqId && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[2500] bg-[#111111] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-[#FFD60A] text-sm font-bold animate-bounce">
          <span className="w-6 h-6 rounded-full bg-[#22C55E] text-white flex items-center justify-center text-xs">
            <i className="fas fa-check"></i>
          </span>
          <span>Tautan &amp; jawaban FAQ berhasil disalin!</span>
        </div>
      )}

      {/* Article Link Copied Toast Notification */}
      {copiedArticleLink && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[2600] bg-[#111111] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-[#FFD60A] text-sm font-bold animate-bounce">
          <span className="w-6 h-6 rounded-full bg-[#22C55E] text-white flex items-center justify-center text-xs">
            <i className="fas fa-check"></i>
          </span>
          <span>Tautan artikel &amp; meta preview berhasil disalin!</span>
        </div>
      )}

      {/* TIMED NON-INTRUSIVE NEWSLETTER POPUP (45s TRIGGER) */}
      {showTimedNewsletterModal && (
        <div
          className="timed-newsletter-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleDismissTimedNewsletter();
          }}
        >
          <div
            className="timed-newsletter-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="timed-nl-title"
          >
            <button
              className="timed-newsletter-close"
              onClick={() => handleDismissTimedNewsletter()}
              aria-label="Tutup Popup"
              title="Tutup (Esc)"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="timed-newsletter-badge">
              <i className="fas fa-sparkles text-[#FFD60A] mr-1.5"></i>
              BULETIN SANITASI BULANAN
            </div>

            <h3 id="timed-nl-title" className="timed-newsletter-title">
              Jaga Sanitasi &amp; Kloset Rumah Anda Tetap Bebas Mampet!
            </h3>

            <p className="timed-newsletter-desc">
              Dapatkan panduan rutin teknisi Mitra Bersih: jadwal sedot septic tank tepat waktu, trik darurat cegah pipa meluap, dan tips hemat perawatan saluran air rumah tangga di Bekasi.
            </p>

            {timedNewsletterStatus === 'success' ? (
              <div className="timed-newsletter-success">
                <div className="timed-newsletter-success-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <strong>Pendaftaran Berhasil!</strong>
                  <p>Terima kasih telah bergabung. Tips sanitasi bulanan akan segera mendarat di inbox email Anda.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribeTimedNewsletter} className="timed-newsletter-form">
                <div className="timed-newsletter-input-group">
                  <i className="fas fa-envelope timed-newsletter-input-icon"></i>
                  <input
                    type="email"
                    required
                    placeholder="Masukkan email Anda (contoh: nama@email.com)"
                    value={timedNewsletterEmail}
                    onChange={(e) => setTimedNewsletterEmail(e.target.value)}
                    className="timed-newsletter-input"
                    disabled={timedNewsletterStatus === 'loading'}
                  />
                </div>
                <button
                  type="submit"
                  className="timed-newsletter-submit-btn"
                  disabled={timedNewsletterStatus === 'loading'}
                >
                  {timedNewsletterStatus === 'loading' ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Langganan Gratis Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="timed-newsletter-footer">
              <div className="timed-newsletter-privacy">
                <i className="fas fa-shield-alt text-[#22C55E]"></i>
                <span>Privasi 100% terjaga. Unsubscribe kapan saja.</span>
              </div>
              <button
                type="button"
                onClick={() => handleDismissTimedNewsletter(true)}
                className="timed-newsletter-dismiss-btn"
              >
                Nanti Saja
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRINT FAQ & STRUCTURED DATA MODAL DIALOG */}
      {showPrintFaqModal && (
        <div
          className="print-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPrintFaqModal(false);
          }}
        >
          <div
            className="print-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="print-modal-title"
          >
            {/* Header / Toolbar (No Print) */}
            <div className="print-modal-header no-print">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFD60A] text-[#111111] flex items-center justify-center text-lg font-bold shadow-sm">
                  <i className="fas fa-print"></i>
                </div>
                <div>
                  <h3 id="print-modal-title" className="text-lg sm:text-xl font-black text-[#111111] leading-tight">
                    Cetak Dokumen FAQ &amp; Structured Data
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Format resmi siap cetak (A4/PDF) &amp; referensi teknis Schema.org FAQPage
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="print-modal-close"
                onClick={() => setShowPrintFaqModal(false)}
                aria-label="Tutup Pratinjau Cetak"
                title="Tutup (Esc)"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Print Configuration Controls (No Print) */}
            <div className="print-modal-controls no-print">
              {/* Scope Selector */}
              <div className="print-control-group">
                <label className="print-control-label">
                  <i className="fas fa-list-check text-gray-500 mr-1.5"></i> Cakupan Daftar FAQ:
                </label>
                <div className="print-scope-options">
                  <button
                    type="button"
                    onClick={() => setPrintScope('current')}
                    className={`print-scope-btn ${printScope === 'current' ? 'active' : ''}`}
                  >
                    <span>Filter Saat Ini</span>
                    <span className="scope-badge">
                      {faqData.filter((item) => {
                        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
                        const q = faqSearchQuery.toLowerCase().trim();
                        if (!q) return matchesCategory;
                        return (
                          matchesCategory &&
                          (item.question.toLowerCase().includes(q) ||
                            item.answer.toLowerCase().includes(q) ||
                            item.categoryLabel.toLowerCase().includes(q))
                        );
                      }).length} Tanya Jawab
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrintScope('all')}
                    className={`print-scope-btn ${printScope === 'all' ? 'active' : ''}`}
                  >
                    <span>Seluruh FAQ Resmi</span>
                    <span className="scope-badge">{faqData.length} Tanya Jawab</span>
                  </button>
                </div>
              </div>

              {/* Options Checkboxes & Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-gray-200">
                <label className="print-checkbox-label">
                  <input
                    type="checkbox"
                    checked={includeStructuredData}
                    onChange={(e) => setIncludeStructuredData(e.target.checked)}
                    className="print-checkbox"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    Sertakan Referensi Structured Data (Schema.org / JSON-LD)
                  </span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopySchemaJson}
                    className={`btn-secondary-print ${copiedSchemaText ? 'copied' : ''}`}
                    title="Salin kode Schema.org JSON-LD ke papan klip"
                  >
                    <i className={`fas ${copiedSchemaText ? 'fa-check text-green-600' : 'fa-code'}`}></i>
                    <span>{copiedSchemaText ? 'JSON-LD Tersalin!' : 'Salin JSON-LD'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePrintFaq}
                    className="btn-primary-print"
                    title="Buka dialog cetak browser atau simpan ke format PDF"
                  >
                    <i className="fas fa-print"></i>
                    <span>Cetak Sekarang (Print / PDF)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Live Paper Document Preview */}
            <div className="print-modal-preview-scroll">
              <div id="printable-faq-document" className="printable-faq-sheet">
                {/* Official Letterhead Header */}
                <div className="print-letterhead">
                  <div className="print-brand-row">
                    <div className="print-brand-info">
                      <div className="print-badge-kicker">DOKUMEN RESMI PELAYANAN SANITASI</div>
                      <h1 className="print-brand-name">SEDOT WC MITRA BERSIH 24 JAM BEKASI</h1>
                      <p className="print-brand-tagline">
                        Layanan Resmi Sedot WC, Kuras Septic Tank, Pelancaran Saluran Mampet &amp; Pengolahan Limbah STP
                      </p>
                    </div>
                    <div className="print-badge-box">
                      <span className="print-badge-verified">RESMI &amp; TERVERIFIKASI</span>
                      <span className="print-badge-sub">STANDAR K3 &amp; IZIN PEMDA</span>
                    </div>
                  </div>

                  <div className="print-meta-grid">
                    <div>
                      <span className="meta-label">Nomor Dokumen:</span>
                      <strong>MB24/FAQ-DOC/{new Date().getFullYear()}</strong>
                    </div>
                    <div>
                      <span className="meta-label">Tanggal Cetak:</span>
                      <strong>
                        {new Intl.DateTimeFormat('id-ID', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }).format(new Date())}
                      </strong>
                    </div>
                    <div>
                      <span className="meta-label">Layanan Siaga 24 Jam:</span>
                      <strong>+62 857-1565-4183 (WhatsApp / Telp)</strong>
                    </div>
                    <div>
                      <span className="meta-label">Website Resmi:</span>
                      <strong>https://jasasedotwcbekasi.web.id/</strong>
                    </div>
                    <div>
                      <span className="meta-label">Cakupan Wilayah:</span>
                      <strong>12 Kecamatan Kota Bekasi &amp; Sekitarnya</strong>
                    </div>
                    <div>
                      <span className="meta-label">Jumlah Pertanyaan:</span>
                      <strong>
                        {itemsToPrint.length} Tanya Jawab (
                        {printScope === 'all' ? 'Seluruh FAQ' : 'Daftar Terfilter'})
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="print-divider"></div>

                {/* FAQ Questions & Answers */}
                <div className="print-section-heading">
                  <h2>DAFTAR TANYA JAWAB (FAQ) &amp; TRANSPARANSI BIAYA</h2>
                  <p>
                    Berikut adalah komitmen panduan pelayanan, transparansi harga di awal, dan jaminan pengerjaan bersih dari teknisi Mitra Bersih 24 Jam.
                  </p>
                </div>

                <div className="print-faq-items-list">
                  {itemsToPrint.map((item, idx) => (
                    <div key={item.id} className="print-faq-entry">
                      <div className="print-q-header">
                        <span className="print-q-badge">Q{idx + 1}</span>
                        <span className="print-cat-indicator">[{item.categoryLabel}]</span>
                        <h3 className="print-q-title">{item.question}</h3>
                      </div>
                      <div className="print-a-body">
                        <span className="print-a-tag">Jawaban:</span>
                        <p className="print-a-text">{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Structured Data Reference Section */}
                {includeStructuredData && (
                  <div className="print-schema-container">
                    <div className="print-schema-header">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                        <h3 className="print-schema-title">
                          REFERENSI STRUCTURED DATA (Schema.org / JSON-LD FAQPage)
                        </h3>
                      </div>
                      <span className="print-schema-badge">Google Rich Snippets Ready</span>
                    </div>
                    <p className="print-schema-desc">
                      Struktur data resmi berstandar Schema.org FAQPage yang disematkan dalam markup aplikasi untuk memungkinkan pengindeksan snippet tanya-jawab interaktif pada mesin pencari Google:
                    </p>
                    <pre className="print-schema-codeblock">
                      <code>{JSON.stringify(generateFaqSchema(itemsToPrint), null, 2)}</code>
                    </pre>
                  </div>
                )}

                {/* Document Legal & Footer Notice */}
                <div className="print-doc-footer">
                  <div className="print-footer-brand">
                    <strong>SEDOT WC MITRA BERSIH 24 JAM BEKASI</strong>
                    <span>
                      Solusi Sanitasi Terpercaya · Armada Bersih · Hasil Tuntas Tanpa Bau · Harga Transparan di Awal
                    </span>
                  </div>
                  <div className="print-footer-legal">
                    <p>
                      Dokumen ini dicetak sebagai referensi resmi pelanggan. Informasi harga dan spesifikasi teknis pengerjaan dijamin berlaku sesuai perjanjian awal pemesanan tanpa biaya siluman.
                    </p>
                    <p className="print-footer-copy">
                      &copy; 2024–{new Date().getFullYear()} Mitra Bersih 24Jam Kota Bekasi. Hak cipta dilindungi undang-undang.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Modal Footer (No Print) */}
            <div className="print-modal-bottom-bar no-print">
              <span className="text-xs text-gray-500 flex items-center gap-1.5">
                <i className="fas fa-info-circle text-blue-500"></i>
                Tip: Anda dapat memilih opsi "Save as PDF" / "Simpan sebagai PDF" pada jendela cetak browser.
              </span>
              <button
                type="button"
                onClick={() => setShowPrintFaqModal(false)}
                className="btn-cancel-print"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
