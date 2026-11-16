export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | {
      type: "callout";
      tone: "info" | "tip" | "warning";
      title: string;
      text: string;
    };

export type Article = {
  id: string;
  judul: string;
  kategori: string;
  ringkasan: string;
  estimasiBaca: string;
  /** Tanggal terbit dalam format ISO (YYYY-MM-DD). */
  tanggal: string;
  penulis: string;
  isi: ArticleBlock[];
};

export const articles: Article[] = [
  {
    id: "panduan-memilah-sampah-rumah-tangga",
    judul: "Memilah Sampah Rumah Tangga: Panduan Praktis untuk Pemula",
    kategori: "Panduan Pemilahan",
    ringkasan:
      "Mulai dari empat wadah sederhana di dapur, kamu sudah bisa memisahkan sampah yang bernilai, sampah organik, dan residu. Ini langkahnya.",
    estimasiBaca: "6 menit baca",
    tanggal: "2026-10-28",
    penulis: "Tim Edukasi EcoCycle",
    isi: [
      {
        type: "paragraph",
        text: "Memilah sampah sering terdengar rumit, padahal intinya hanya satu: memisahkan benda berdasarkan cara pengolahannya. Ketika sampah sudah tercampur, nilai jualnya hilang dan biaya pengolahannya naik. Sebaliknya, sampah yang dipilah sejak dari dapur bisa menjadi bahan baku baru, pupuk, atau tambahan penghasilan keluarga.",
      },
      {
        type: "heading",
        text: "Mengapa memilah dari rumah itu penting",
      },
      {
        type: "paragraph",
        text: "Rata-rata satu orang di Indonesia menghasilkan sekitar 0,7 kilogram sampah setiap hari. Untuk keluarga empat orang, jumlahnya bisa mencapai hampir 3 kilogram per hari atau lebih dari 80 kilogram per bulan. Tanpa pemilahan, seluruh sampah itu berakhir di tempat pemrosesan akhir yang kapasitasnya semakin penuh.",
      },
      {
        type: "list",
        items: [
          "Sampah anorganik yang bersih dapat dijual ke bank sampah sehingga punya nilai ekonomi.",
          "Sampah organik bisa diolah menjadi kompos dan tidak menghasilkan gas metana di TPA.",
          "Sampah berbahaya seperti baterai dan lampu tidak mencemari tanah dan air.",
          "Petugas pengangkut sampah lebih aman karena tidak lagi menemukan pecahan kaca atau benda tajam bercampur sampah lain.",
        ],
      },
      {
        type: "heading",
        text: "Siapkan empat wadah sederhana",
      },
      {
        type: "paragraph",
        text: "Tidak perlu membeli tempat sampah mahal. Ember bekas, kardus, atau karung bisa dipakai asalkan diberi label yang jelas dan mudah dijangkau. Mulailah dengan empat wadah berikut.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Wadah hijau untuk sampah organik: sisa sayur, kulit buah, ampas kopi, dan daun kering.",
          "Wadah biru untuk anorganik bernilai: botol plastik, kardus, kaleng, dan kaca.",
          "Wadah kuning atau merah untuk residu: tisu bekas, sachet, styrofoam, dan puntung rokok.",
          "Wadah kecil tertutup untuk sampah khusus: baterai, lampu, obat kedaluwarsa, dan minyak jelantah.",
        ],
      },
      {
        type: "paragraph",
        text: "Letakkan wadah di tempat yang sering dilalui, misalnya dekat tempat cuci piring. Semakin dekat wadah dengan sumber sampah, semakin besar peluang kebiasaan ini bertahan.",
      },
      {
        type: "heading",
        text: "Aturan tiga detik sebelum membuang",
      },
      {
        type: "paragraph",
        text: "Sebelum menjatuhkan sesuatu ke tempat sampah, berhenti sebentar dan ajukan tiga pertanyaan: apakah benda ini masih bisa dipakai, apakah bisa didaur ulang, dan apakah berbahaya jika dibuang sembarangan. Tiga detik ini cukup untuk mencegah sampah tercampur.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cuci, keringkan, baru simpan",
        text: "Botol dan kaleng yang masih berisi sisa makanan akan mengundang lalat dan membuat kantong penyimpanan berbau. Bilas sebentar, keringkan, lalu simpan di tempat teduh sampai jadwal setor berikutnya.",
      },
      {
        type: "heading",
        text: "Kesalahan yang paling sering terjadi",
      },
      {
        type: "list",
        items: [
          "Mencampur kaca pecah dengan sampah lain tanpa dibungkus, sehingga melukai petugas.",
          "Memasukkan tisu dan sachet ke wadah anorganik karena dianggap “plastik tipis”.",
          "Menyimpan kardus dalam keadaan basah sampai berjamur sehingga tidak diterima pengepul.",
          "Membuang minyak jelantah ke wastafel karena dianggap cair dan mudah hilang.",
          "Menunda memilah sampai akhir minggu, sehingga tumpukan sampah sudah bercampur dan sulit dipisahkan.",
        ],
      },
      {
        type: "heading",
        text: "Mulai kecil, konsisten lebih penting",
      },
      {
        type: "paragraph",
        text: "Tidak semua orang perlu langsung memilah tujuh kategori. Pilih dua yang paling mudah, misalnya plastik dan organik, lalu jalankan selama dua minggu. Setelah terbiasa, tambahkan kategori lain satu per satu. Perubahan kecil yang konsisten jauh lebih berdampak daripada rencana besar yang berhenti di tengah jalan.",
      },
      {
        type: "paragraph",
        text: "Gunakan panduan pilah di halaman ini untuk memeriksa apakah suatu benda termasuk diterima atau ditolak. Jika masih ragu, simpan dulu di wadah residu dan tanyakan kepada koordinator titik mitra terdekat.",
      },
    ],
  },
  {
    id: "kompos-dan-eco-enzyme-dari-sisa-dapur",
    judul: "Dari Sisa Dapur Jadi Pupuk: Cara Membuat Kompos dan Eco-Enzyme",
    kategori: "Kompos & Organik",
    ringkasan:
      "Hampir separuh sampah rumah tangga adalah sisa organik. Dengan ember tumpuk dan sedikit kesabaran, sisa dapur bisa berubah menjadi pupuk dan cairan pembersih alami.",
    estimasiBaca: "7 menit baca",
    tanggal: "2026-11-05",
    penulis: "Tim Edukasi EcoCycle",
    isi: [
      {
        type: "paragraph",
        text: "Sampah organik yang menumpuk di tempat pembuangan akhir terurai tanpa oksigen dan menghasilkan gas metana, salah satu gas rumah kaca paling kuat. Padahal, di rumah, bahan yang sama bisa diolah menjadi kompos yang menyuburkan tanaman atau eco-enzyme yang berguna untuk membersihkan rumah.",
      },
      {
        type: "heading",
        text: "Kompos atau eco-enzyme?",
      },
      {
        type: "paragraph",
        text: "Kompos adalah hasil penguraian bahan organik padat menjadi pupuk. Prosesnya membutuhkan oksigen dan biasanya berlangsung empat sampai delapan minggu. Eco-enzyme adalah hasil fermentasi sisa buah dan sayur dengan gula dan air selama sekitar tiga bulan, menghasilkan cairan asam yang bisa dipakai sebagai pembersih lantai, pupuk cair, atau penjernih air.",
      },
      {
        type: "list",
        items: [
          "Pilih kompos jika kamu punya lahan, pot tanaman, atau kebun kecil dan ingin mengurangi sampah organik harian.",
          "Pilih eco-enzyme jika kamu rutin menghasilkan kulit buah dan ingin hasil cair yang mudah disimpan.",
          "Keduanya bisa dijalankan bersamaan; bahan berair seperti kulit buah untuk eco-enzyme, sisanya untuk kompos.",
        ],
      },
      {
        type: "heading",
        text: "Membuat kompos dengan ember tumpuk",
      },
      {
        type: "paragraph",
        text: "Metode ember tumpuk cocok untuk rumah dengan lahan terbatas. Siapkan dua ember berukuran sama, keran kecil, dan penutup. Lubangi dasar ember atas, lalu susun di atas ember bawah yang diberi keran untuk menampung air lindi.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Lubangi dasar ember atas dan bagian bawah ember bawah untuk sirkulasi udara.",
          "Masukkan lapisan bahan kering setebal 5 cm: daun kering, sekam, atau serbuk kayu.",
          "Tambahkan sisa sayur dan buah yang sudah dipotong kecil, lalu tutup lagi dengan bahan kering.",
          "Aduk setiap tiga hari agar udara masuk dan tumpukan tidak padat.",
          "Panen kompos setelah 4-8 minggu, ditandai warna gelap, tekstur remah, dan bau seperti tanah.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Jaga rasio bahan hijau dan cokelat",
        text: "Bahan hijau (sisa sayur, buah, rumput segar) menyediakan nitrogen, sedangkan bahan cokelat (daun kering, sekam, kardus tanpa tinta) menyediakan karbon. Perbandingan kasar 1:3 sudah cukup. Jika tumpukan berbau asam atau basah, tambahkan bahan kering.",
      },
      {
        type: "heading",
        text: "Membuat eco-enzyme 1:3:10",
      },
      {
        type: "paragraph",
        text: "Rasio yang umum dipakai adalah 1 bagian gula merah atau molase, 3 bagian sisa buah dan sayur, dan 10 bagian air. Gunakan wadah plastik bermulut lebar, jangan wadah kaca tertutup rapat karena gas fermentasi bisa membuatnya pecah.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Larutkan gula ke dalam air, lalu masukkan potongan kulit buah dan sayur.",
          "Tutup wadah tanpa mengunci rapat, atau longgarkan tutupnya setiap hari untuk membuang gas.",
          "Simpan di tempat sejuk dan terhindar dari sinar matahari langsung selama tiga bulan.",
          "Aduk atau tekan bahan agar terendam, lalu saring cairan setelah 90 hari.",
          "Simpan cairan dalam botol tertutup; ampasnya bisa dipakai sebagai pupuk atau starter kompos.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Yang tidak boleh masuk",
        text: "Hindari daging, ikan, tulang, kotoran hewan, dan minyak dalam jumlah banyak untuk kompos rumahan. Untuk eco-enzyme, jangan gunakan sisa makanan berminyak atau tumbuhan berjamur karena bisa mengganggu proses fermentasi.",
      },
      {
        type: "heading",
        text: "Tanda kompos gagal dan cara memperbaikinya",
      },
      {
        type: "list",
        items: [
          "Berbau busuk seperti telur: terlalu basah dan minim udara. Aduk dan tambahkan bahan kering.",
          "Tidak panas dan tidak berubah: tumpukan terlalu kecil atau kekurangan bahan hijau.",
          "Dikunjungi lalat: bahan hewani atau makanan manis masih terbuka. Tutup lebih rapat dan kubur bahan di tengah.",
          "Berkulat putih: ini jamur pengurai yang normal, cukup aduk agar merata.",
        ],
      },
      {
        type: "paragraph",
        text: "Mulailah dari wadah kecil di dapur. Jika satu ember berhasil, tambahkan ember kedua. Dalam sebulan, kamu bisa mengurangi puluhan kilogram sampah organik sekaligus mendapatkan pupuk untuk tanaman di rumah.",
      },
    ],
  },
  {
    id: "bahaya-e-waste-yang-sering-terlewat",
    judul: "Bahaya E-Waste yang Sering Terlewat: dari Charger Bekas hingga Baterai Menggembung",
    kategori: "E-Waste",
    ringkasan:
      "Kabel, ponsel lama, dan baterai menyimpan logam berharga sekaligus bahan beracun. Salah membuang e-waste bisa mencemari tanah dan membahayakan petugas.",
    estimasiBaca: "5 menit baca",
    tanggal: "2026-11-12",
    penulis: "Tim Edukasi EcoCycle",
    isi: [
      {
        type: "paragraph",
        text: "Elektronik yang rusak sering disimpan bertahun-tahun di gudang karena sayang dibuang, lalu akhirnya berakhir di tempat sampah biasa. Padahal, e-waste atau sampah elektronik tidak boleh diperlakukan seperti sampah rumah tangga. Di dalamnya terdapat logam berharga, tetapi juga bahan berbahaya yang bisa mencemari lingkungan.",
      },
      {
        type: "heading",
        text: "Bahan berbahaya di dalam e-waste",
      },
      {
        type: "list",
        items: [
          "Timbal pada papan sirkuit dan solder lama dapat merusak sistem saraf, terutama pada anak.",
          "Merkuri pada lampu neon dan layar lama bersifat neurotoksik dan mudah menguap.",
          "Kadmium pada baterai dan komponen lama dapat merusak ginjal dalam paparan jangka panjang.",
          "Litium pada baterai ponsel dan laptop sangat reaktif dan dapat terbakar bila rusak.",
          "Zat penghambat api bromin pada plastik elektronik sulit terurai dan dapat menumpuk di tubuh.",
        ],
      },
      {
        type: "heading",
        text: "Apa yang terjadi jika dibuang sembarangan",
      },
      {
        type: "paragraph",
        text: "Baterai dan papan sirkuit yang terurai di tempat pembuangan dapat melepaskan logam berat ke air tanah. Ketika sampah elektronik dibakar untuk mengambil logamnya, asap yang dihasilkan mengandung dioksin dan partikel halus yang berbahaya bagi pernapasan warga di sekitar lokasi pembakaran.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Baterai menggembung jangan ditekan",
        text: "Baterai lithium yang menggembung, bocor, atau berbau manis berisiko terbakar. Jangan menusuk, menekan, atau mencharge ulang. Simpan di wadah logam atau kaca yang tidak mudah terbakar, jauhkan dari bahan mudah terbakar, lalu serahkan ke petugas pengelola limbah B3.",
      },
      {
        type: "heading",
        text: "Amankan data sebelum menyerahkan perangkat",
      },
      {
        type: "paragraph",
        text: "Perangkat yang masih menyala menyimpan akun, foto, dan dokumen pribadi. Sebelum diserahkan, cadangkan data yang diperlukan, lakukan reset pabrik, lalu keluarkan kartu SIM dan kartu memori. Untuk perangkat yang tidak bisa menyala, tanyakan kepada petugas apakah ada prosedur penghancuran media penyimpanan.",
      },
      {
        type: "heading",
        text: "Alur serah terima yang benar",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Kumpulkan perangkat elektronik yang tidak terpakai dalam satu kardus, terpisah dari sampah lain.",
          "Pisahkan baterai dan lampu, lalu tutup kutub baterai dengan plester.",
          "Catat jumlah dan jenis perangkat untuk memudahkan pendataan di titik mitra.",
          "Serahkan ke titik pengumpulan e-waste pada jadwal yang tersedia, atau hubungi koordinator untuk penjemputan.",
          "Minta bukti serah terima agar perangkat dipastikan masuk jalur daur ulang resmi.",
        ],
      },
      {
        type: "heading",
        text: "Mulai dari satu laci",
      },
      {
        type: "paragraph",
        text: "Coba periksa laci atau kotak penyimpanan elektronik di rumah. Charger tanpa pasangan, kabel yang sudah terkelupas, dan ponsel lama yang tidak lagi dipakai bisa langsung dipisahkan. Satu kotak kecil per bulan sudah cukup untuk mencegah e-waste menumpuk dan berisiko di rumah.",
      },
    ],
  },
];

export const articleCategories = Array.from(
  new Set(articles.map((article) => article.kategori)),
);

export function formatArticleDate(isoDate: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00`));
}
