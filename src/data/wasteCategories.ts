export type WasteCategory = {
  id: string;
  nama: string;
  deskripsiSingkat: string;
  kodeSimbol: string;
  diterima: string[];
  ditolak: string[];
  caraPersiapan: string[];
  /** Estimasi harga pengepul mitra dalam Rupiah per kilogram. */
  estimasiHargaPerKg: number;
  /** Estimasi emisi CO2 yang dicegah dalam kg per kg sampah yang didaur ulang. */
  faktorEmisiCO2PerKg: number;
};

export const wasteCategories: WasteCategory[] = [
  {
    id: "plastik",
    nama: "Plastik",
    deskripsiSingkat:
      "Botol minuman, wadah makanan, dan kemasan rumah tangga yang masih bersih bisa dicuci lalu didaur ulang menjadi serat plastik, paving block, atau produk baru.",
    kodeSimbol: "PET 1 · HDPE 2 · PP 5",
    diterima: [
      "Botol air mineral bening (PET 1)",
      "Botol sabun, sampo, dan deterjen (HDPE 2)",
      "Wadah makanan, tutup botol, dan ember kecil (PP 5)",
      "Gelas plastik bersih tanpa sisa minuman",
      "Kantong plastik tebal yang sudah dicuci dan dikeringkan",
    ],
    ditolak: [
      "Plastik kresek hitam yang bercampur sisa makanan",
      "Styrofoam dan kemasan makanan instan (EPS 6)",
      "Sachet berlaminasi, misalnya sachet kopi atau bumbu",
      "Botol yang masih berisi cairan atau minyak",
      "Pipa PVC bekas dan plastik keras bercampur semen",
    ],
    caraPersiapan: [
      "Kosongkan sisa makanan atau minuman, lalu bilas sebentar dengan air.",
      "Lepaskan tutup dan label, simpan terpisah agar mudah didaur ulang.",
      "Keringkan di tempat terbuka supaya tidak berjamur dan tidak berbau.",
      "Remas botol untuk menghemat ruang, lalu masukkan ke kantong khusus plastik.",
    ],
    estimasiHargaPerKg: 2500,
    faktorEmisiCO2PerKg: 1.8,
  },
  {
    id: "kertas",
    nama: "Kertas & Kardus",
    deskripsiSingkat:
      "Kardus paket, kertas HVS bekas, koran, dan majalah termasuk sampah yang paling mudah didaur ulang selama tetap kering dan tidak berminyak.",
    kodeSimbol: "PAP 20 · PAP 21 · PAP 22",
    diterima: [
      "Kardus paket dan kardus makanan yang sudah dibersihkan",
      "Kertas HVS bekas cetak, buku tulis, dan brosur",
      "Koran, majalah, dan tabloid",
      "Karton duplek dan kemasan obat yang tidak berlaminasi",
      "Amplas bekas pakai yang masih kering (jumlah kecil)",
    ],
    ditolak: [
      "Tisu, tisu basah, dan pembalut sekali pakai",
      "Kertas minyak, kertas nasi, dan kertas pembungkus makanan berminyak",
      "Kertas foto dan kertas stiker berlapis plastik",
      "Kardus basah, berjamur, atau bercampur sampah organik",
      "Kertas arsip berisi data pribadi yang belum dihancurkan",
    ],
    caraPersiapan: [
      "Lepaskan selotip, staples, dan plastik pembungkus dari kardus.",
      "Lipat atau pipihkan kardus agar tidak memakan banyak ruang.",
      "Pastikan kertas benar-benar kering dan tidak berbau apek.",
      "Ikat rapi per jenis (kardus, HVS, koran) supaya mudah ditimbang.",
    ],
    estimasiHargaPerKg: 1800,
    faktorEmisiCO2PerKg: 1.1,
  },
  {
    id: "logam",
    nama: "Logam & Kaleng",
    deskripsiSingkat:
      "Kaleng minuman, kaleng susu, dan potongan besi memiliki nilai jual tinggi karena bisa dilebur ulang berkali-kali tanpa kehilangan kualitas.",
    kodeSimbol: "ALU 41 · STEEL 40",
    diterima: [
      "Kaleng minuman aluminium dan kaleng bir",
      "Kaleng susu, sarden, dan makanan olahan",
      "Tutup botol logam dan tutup toples",
      "Panci, wajan aluminium, dan sendok logam bekas",
      "Paku, baut, serta potongan besi kecil yang tidak tajam",
    ],
    ditolak: [
      "Kaleng aerosol bertekanan seperti cat semprot atau obat nyamuk",
      "Kaleng cat atau thinner yang masih berisi sisa cairan",
      "Logam yang menempel pada beton, kaca, atau plastik",
      "Benda tajam tanpa pelindung, misalnya silet dan jarum",
      "Baterai dan perangkat elektronik (masuk kategori e-waste)",
    ],
    caraPersiapan: [
      "Bilas kaleng hingga tidak ada sisa makanan atau minuman.",
      "Keringkan kaleng untuk mencegah karat sebelum ditimbang.",
      "Pisahkan aluminium dan besi; aluminium tidak menempel pada magnet.",
      "Bungkus bagian tajam dengan kardus tebal dan beri label peringatan.",
    ],
    estimasiHargaPerKg: 8000,
    faktorEmisiCO2PerKg: 8.5,
  },
  {
    id: "elektronik",
    nama: "Elektronik / E-Waste",
    deskripsiSingkat:
      "Charger, kabel, ponsel lama, dan perangkat elektronik rumah tangga mengandung logam berharga sekaligus bahan berbahaya yang wajib ditangani khusus.",
    kodeSimbol: "WEEE · E-Waste",
    diterima: [
      "Ponsel, tablet, dan charger yang sudah tidak dipakai",
      "Kabel, adaptor, mouse, dan keyboard bekas",
      "Laptop, monitor kecil, dan printer rumah tangga",
      "Setrika, rice cooker, dan blender yang sudah rusak",
      "Baterai kecil (alkaline) dan lampu LED yang sudah mati",
    ],
    ditolak: [
      "Baterai lithium yang menggembung atau bocor (serahkan ke petugas B3)",
      "Kulkas, AC, dan mesin cuci (butuh penjemputan khusus)",
      "TV tabung yang sudah pecah atau bocor",
      "Peralatan medis dan perangkat dengan bahan radioaktif",
      "Perangkat yang masih menyala atau tersambung ke listrik",
    ],
    caraPersiapan: [
      "Cadangkan data lalu lakukan reset pabrik sebelum perangkat diserahkan.",
      "Jangan membongkar baterai atau perangkat sendiri di rumah.",
      "Simpan baterai terpisah dan tutup kutubnya dengan plester.",
      "Masukkan perangkat ke wadah anti-benturan, lalu serahkan ke titik mitra.",
    ],
    estimasiHargaPerKg: 12000,
    faktorEmisiCO2PerKg: 5.2,
  },
  {
    id: "kaca",
    nama: "Kaca",
    deskripsiSingkat:
      "Botol kaca dan toples dapat dilebur ulang tanpa penurunan kualitas. Jenis kaca lembaran seperti cermin dan kaca jendela perlu penanganan berbeda.",
    kodeSimbol: "GL 70 · GL 71 · GL 72",
    diterima: [
      "Botol kaca bening, hijau, dan cokelat",
      "Botol kecap, sirup, dan saus",
      "Toples selai dan wadah kaca makanan",
      "Botol parfum kaca tanpa isi",
      "Pecahan kaca yang sudah dibungkus dengan aman",
    ],
    ditolak: [
      "Cermin dan kaca jendela (kaca lembaran)",
      "Lampu neon, bohlam, dan lampu pijar",
      "Gelas minum, tembikar, dan keramik",
      "Kaca pyrex dan kaca oven tahan panas",
      "Pecahan kaca tanpa pelindung atau wadah tertutup",
    ],
    caraPersiapan: [
      "Bilas botol dan lepaskan tutup logam atau plastiknya.",
      "Pisahkan kaca bening, hijau, dan cokelat bila memungkinkan.",
      "Bungkus pecahan kaca dengan kardus tebal dan tulis label “KACA”.",
      "Jangan mencampur kaca dengan sampah lain agar tidak melukai petugas.",
    ],
    estimasiHargaPerKg: 700,
    faktorEmisiCO2PerKg: 0.6,
  },
  {
    id: "minyak-jelantah",
    nama: "Minyak Jelantah",
    deskripsiSingkat:
      "Minyak goreng bekas rumah tangga dapat diolah menjadi biodiesel dan sabun. Jangan pernah membuangnya ke saluran air karena mencemari tanah dan sungai.",
    kodeSimbol: "UCO · Used Cooking Oil",
    diterima: [
      "Minyak goreng bekas pakai rumah tangga",
      "Minyak bekas dari warung, katering, dan restoran",
      "Lemak ayam atau sapi cair yang sudah disaring",
      "Minyak bekas yang masih jernih dengan sedikit endapan",
    ],
    ditolak: [
      "Minyak yang tercampur air, sabun, atau deterjen",
      "Oli kendaraan, oli mesin, dan cairan pelumas",
      "Minyak yang sudah berbau sangat tengik dan berlendir parah",
      "Minyak bercampur sisa gorengan dalam jumlah banyak",
      "Minyak dalam kemasan plastik tipis yang mudah bocor",
    ],
    caraPersiapan: [
      "Saring minyak dari kerak dan sisa makanan menggunakan kain bersih.",
      "Tuang ke jeriken atau botol kering; pastikan tidak ada air di dalamnya.",
      "Tutup rapat dan simpan di tempat sejuk, jauh dari sinar matahari langsung.",
      "Catat perkiraan volume agar mudah dilaporkan saat penyerahan.",
    ],
    estimasiHargaPerKg: 6000,
    faktorEmisiCO2PerKg: 2.4,
  },
  {
    id: "organik",
    nama: "Organik / Kompos",
    deskripsiSingkat:
      "Sisa sayur, buah, dan daun kering menyumbang porsi terbesar sampah rumah tangga. Dengan komposter sederhana, sampah ini berubah menjadi pupuk yang menyuburkan tanaman.",
    kodeSimbol: "Organik · KOMPOS",
    diterima: [
      "Sisa sayur, buah, dan kulit buah",
      "Ampas kopi, ampas teh, dan teh celup kering",
      "Daun kering, rumput, dan ranting kecil",
      "Sisa nasi, roti, dan makanan tanpa kuah",
      "Cangkang telur yang sudah dicuci",
    ],
    ditolak: [
      "Daging, ikan, dan tulang dalam jumlah besar",
      "Kotoran hewan peliharaan dan popok sekali pakai",
      "Minyak goreng atau kuah bersantan dalam jumlah banyak",
      "Sampah organik yang sudah tercampur plastik atau kaca",
      "Tanaman sakit, berjamur, atau terkena pestisida",
    ],
    caraPersiapan: [
      "Pisahkan sisa organik dari plastik, kertas, dan kemasan lainnya.",
      "Tiriskan air dan potong menjadi bagian kecil agar cepat terurai.",
      "Simpan di wadah tertutup atau komposter agar tidak mendatangkan lalat.",
      "Tambahkan bahan kering seperti daun atau sekam setiap kali mengisi.",
    ],
    estimasiHargaPerKg: 1000,
    faktorEmisiCO2PerKg: 0.5,
  },
];

export const wasteCategoryMap = new Map(
  wasteCategories.map((category) => [category.id, category]),
);
