import React, { useState, useEffect } from 'react';

import articleImg1 from './assets/images/septic_tank_inspection_1791207275527.jpg';
import articleImg2 from './assets/images/bathroom_toilet_care_1791207290292.jpg';
import articleImg3 from './assets/images/kitchen_sink_drain_1791207304577.jpg';
import articleImg4 from './assets/images/vacuum_truck_service_1791207318875.jpg';
import articleImg5 from './assets/images/inspection_chamber_drain_1791207332865.jpg';
import articleImg6 from './assets/images/toilet_plunger_emergency_1791207348420.jpg';

interface GalleryItem {
  id: number;
  image: string;
  fallbackImage: string;
  title: string;
  desc: string;
}

interface FAQItem {
  id: number;
  category: 'pricing' | 'booking' | 'coverage';
  categoryLabel: string;
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

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'pricing',
    categoryLabel: 'Pricing',
    badgeClass: 'faq-cat-pricing',
    question: 'Berapa estimasi biaya jasa sedot WC dan pelancaran saluran di Mitra Bersih?',
    answer: 'Tarif kami sangat transparan dan kompetitif. Biaya ditentukan berdasarkan jenis layanan (sedot septic tank penuh, pelancaran WC mampet, atau sedot limbah STP), kapasitas tangki, serta tingkat kesulitan. Estimasi harga pasti akan kami informasikan di awal sebelum armada berangkat, tanpa ada biaya siluman atau biaya tersembunyi.',
  },
  {
    id: 2,
    category: 'pricing',
    categoryLabel: 'Pricing',
    badgeClass: 'faq-cat-pricing',
    question: 'Apakah ada biaya tambahan untuk selang panjang atau pekerjaan malam hari?',
    answer: 'Tidak ada biaya tersembunyi. Kami menyediakan panjang selang standar hingga puluhan meter secara gratis yang dapat menjangkau perumahan padat atau gang sempit. Layanan darurat 24 jam di malam hari juga dilayani dengan tarif resmi yang disepakati bersama sejak awal konsultasi.',
  },
  {
    id: 3,
    category: 'pricing',
    categoryLabel: 'Pricing',
    badgeClass: 'faq-cat-pricing',
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Pembayaran dilakukan setelah proses pengerjaan selesai dan Anda memastikan WC atau saluran pipa sudah mengalir lancar dan bersih kembali. Kami menerima pembayaran secara Tunai (Cash) langsung ke teknisi atau melalui Transfer Bank / QRIS.',
  },
  {
    id: 4,
    category: 'booking',
    categoryLabel: 'Booking',
    badgeClass: 'faq-cat-booking',
    question: 'Bagaimana cara melakukan pemesanan dan konsultasi?',
    answer: 'Pemesanan sangat praktis! Anda cukup klik tombol WhatsApp atau hubungi telepon kami di +62 857-1565-4183. Informasikan keluhan yang dialami dan alamat lokasi Anda di Bekasi. Tim customer service kami siap melayani dan mengarahkan armada terdekat seketika.',
  },
  {
    id: 5,
    category: 'booking',
    categoryLabel: 'Booking',
    badgeClass: 'faq-cat-booking',
    question: 'Berapa lama waktu yang dibutuhkan armada hingga tiba di lokasi?',
    answer: 'Karena armada dan teknisi kami tersebar di berbagai posko kecamatan Kota Bekasi, rata-rata waktu tempuh armada ke lokasi adalah 15 hingga 30 menit setelah konfirmasi pemesanan, disesuaikan dengan kondisi jalan.',
  },
  {
    id: 6,
    category: 'booking',
    categoryLabel: 'Booking',
    badgeClass: 'faq-cat-booking',
    question: 'Apakah layanan tetap buka pada hari Minggu atau hari libur nasional?',
    answer: 'Ya, layanan Mitra Bersih beroperasi penuh 24 Jam non-stop, 7 hari seminggu (24/7). Kami tetap melayani panggilan darurat kapan pun Anda membutuhkan, baik siang, malam, akhir pekan, maupun hari libur besar.',
  },
  {
    id: 7,
    category: 'coverage',
    categoryLabel: 'Coverage',
    badgeClass: 'faq-cat-coverage',
    question: 'Wilayah mana saja yang dicakup oleh layanan Mitra Bersih?',
    answer: 'Kami melayani seluruh 12 kecamatan di Kota Bekasi (Bantargebang, Bekasi Barat, Bekasi Selatan, Bekasi Timur, Bekasi Utara, Jatiasih, Jatisampurna, Medan Satria, Mustikajaya, Pondok Gede, Pondok Melati, Rawalumbu) hingga wilayah perbatasan Kabupaten Bekasi, Cibubur, dan Jakarta Timur.',
  },
  {
    id: 8,
    category: 'coverage',
    categoryLabel: 'Coverage',
    badgeClass: 'faq-cat-coverage',
    question: 'Apakah bisa melayani rumah di dalam gang sempit yang tidak bisa dimasuki truk besar?',
    answer: 'Bisa sekali! Kami memiliki armada truk berukuran kompak serta selang penyedot bertekanan tinggi ekstra panjang yang mampu menjangkau hingga ke dalam lorong gang sempit tanpa mengganggu ketertiban jalan umum.',
  },
  {
    id: 9,
    category: 'coverage',
    categoryLabel: 'Coverage',
    badgeClass: 'faq-cat-coverage',
    question: 'Apakah proses pelancaran saluran mampet harus membongkar pipa atau keramik?',
    answer: 'Tidak perlu bongkar. Kami menggunakan mesin pelancar drain cleaner modern (teknologi spiral fleksibel & vakum hidro) yang mampu menghancurkan lemak, kerak, atau sumbatan tanpa perlu merusak kloset ataupun membongkar lantai keramik Anda.',
  },
  {
    id: 10,
    category: 'coverage',
    categoryLabel: 'Coverage',
    badgeClass: 'faq-cat-coverage',
    question: 'Apakah pengerjaan disertai dengan garansi?',
    answer: 'Ya, semua pengerjaan sedot WC dan pelancaran saluran mampet dari Mitra Bersih dilengkapi dengan garansi kepuasan. Jika timbul kendala pada saluran yang sama setelah pengerjaan, tim kami siap melakukan pengecekan ulang hingga tuntas.',
  },
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pricing' | 'booking' | 'coverage'>('all');
  const [selectedTipCategory, setSelectedTipCategory] = useState<'all' | 'septic' | 'pipe' | 'emergency'>('all');
  const [readingArticle, setReadingArticle] = useState<ArticleItem | null>(null);
  const [showOfferBanner, setShowOfferBanner] = useState(true);
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [copiedFaqId, setCopiedFaqId] = useState<number | null>(null);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImg) setLightboxImg(null);
        if (readingArticle) setReadingArticle(null);
        if (chatbotOpen) setChatbotOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImg, readingArticle, chatbotOpen]);

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
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== item.fallbackImage) {
                      target.src = item.fallbackImage;
                    }
                  }}
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

      {/* AREA LAYANAN */}
      <section className="area" id="kontak">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-badge">WILAYAH LAYANAN</span>
            <h2 className="section-title">Area Layanan Kami</h2>
            <p className="section-subtitle">
              Kami melayani seluruh wilayah Kota Bekasi dan sekitarnya dengan respon cepat.
            </p>
          </div>

          <div className="area-content">
            <div className="area-illustration">
              <i className="fas fa-map-marked-alt icon-big"></i>
              <h3>Kota Bekasi & Sekitarnya</h3>
              <p>Cakupan area layanan kami meliputi seluruh kecamatan di Kota Bekasi dengan waktu tempuh tercepat.</p>
            </div>

            <div className="area-list">
              <div className="area-item"><i className="fas fa-check-circle"></i> Bantargebang</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Bekasi Barat</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Bekasi Selatan</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Bekasi Timur</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Bekasi Utara</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Jatiasih</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Jatisampurna</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Medan Satria</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Mustikajaya</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Pondok Gede</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Pondok Melati</div>
              <div className="area-item"><i className="fas fa-check-circle"></i> Rawalumbu</div>
              <div className="area-more">
                <i className="fas fa-location-arrow"></i> Dan kecamatan sekitarnya
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

          {/* FAQ Search Input Field */}
          <div className="faq-search-wrapper">
            <div className="faq-search-box">
              <i className="fas fa-search faq-search-icon"></i>
              <input
                type="text"
                className="faq-search-input"
                placeholder="Cari pertanyaan... (misal: tarif, garansi, selang panjang, malam hari, cara pesan)"
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                aria-label="Cari Pertanyaan FAQ"
              />
              {faqSearchQuery && (
                <button
                  type="button"
                  className="faq-search-clear"
                  onClick={() => setFaqSearchQuery('')}
                  aria-label="Hapus kata kunci pencarian"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>

            {faqSearchQuery && (
              <div className="faq-search-status">
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
                  }</strong> pertanyaan untuk "<em>{faqSearchQuery}</em>"
                </span>
                <button
                  type="button"
                  onClick={() => { setFaqSearchQuery(''); setSelectedCategory('all'); }}
                  className="faq-search-reset-btn"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </div>

          {/* Category Tabs */}
          <div className="faq-categories">
            <button
              className={`faq-cat-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory('all');
                setOpenFaqId(1);
              }}
            >
              <span>Semua</span>
              <span className="faq-cat-count">{faqData.length}</span>
            </button>
            <button
              className={`faq-cat-btn ${selectedCategory === 'pricing' ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory('pricing');
                setOpenFaqId(1);
              }}
            >
              <i className="fas fa-tags mr-1"></i>
              <span>Pricing</span>
              <span className="faq-cat-count">
                {faqData.filter((i) => i.category === 'pricing').length}
              </span>
            </button>
            <button
              className={`faq-cat-btn ${selectedCategory === 'booking' ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory('booking');
                setOpenFaqId(4);
              }}
            >
              <i className="fas fa-calendar-check mr-1"></i>
              <span>Booking</span>
              <span className="faq-cat-count">
                {faqData.filter((i) => i.category === 'booking').length}
              </span>
            </button>
            <button
              className={`faq-cat-btn ${selectedCategory === 'coverage' ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory('coverage');
                setOpenFaqId(7);
              }}
            >
              <i className="fas fa-map-marker-alt mr-1"></i>
              <span>Coverage</span>
              <span className="faq-cat-count">
                {faqData.filter((i) => i.category === 'coverage').length}
              </span>
            </button>
          </div>

          {/* FAQ Accordion List / Empty State */}
          {(() => {
            const filteredList = faqData.filter((item) => {
              const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
              if (!faqSearchQuery.trim()) return matchesCategory;
              const q = faqSearchQuery.toLowerCase().trim();
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
                      onClick={() => { setFaqSearchQuery(''); setSelectedCategory('all'); }}
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

            return (
              <div className="faq-list">
                {filteredList.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div key={item.id} className={`faq-card ${isOpen ? 'open' : ''}`}>
                      <button
                        className="faq-header"
                        onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                        aria-expanded={isOpen}
                      >
                        <div className="faq-header-left">
                          <span className={`faq-category-badge ${item.badgeClass}`}>
                            {item.categoryLabel}
                          </span>
                          <span className="faq-question-text">{item.question}</span>
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
                      </button>
                      {isOpen && (
                        <div className="faq-body">
                          <p>{item.answer}</p>

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
                })}
              </div>
            );
          })()}

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
                    <img
                      src={article.image}
                      alt={article.title}
                      className="tip-card-img"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== article.fallbackImage) {
                          target.src = article.fallbackImage;
                        }
                      }}
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
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== readingArticle.fallbackImage) {
                    target.src = readingArticle.fallbackImage;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
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
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              id="lightboxImage"
              className="max-h-[75vh]"
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
    </div>
  );
}
