export type Faq = {
  id: string;
  pertanyaan: string;
  jawaban: string;
};

export const faqs: Faq[] = [
  {
    id: "apa-itu-ecocycle",
    pertanyaan: "Apa itu EcoCycle dan siapa yang bisa menggunakannya?",
    jawaban:
      "EcoCycle adalah platform informasi publik yang membantu warga memahami cara memilah sampah, menghitung dampak lingkungan dari kebiasaan mendaur ulang, dan menemukan titik penjemputan mitra terdekat. Semua informasi di sini gratis dan bisa diakses tanpa membuat akun, baik untuk rumah tangga, sekolah, komunitas, maupun pelaku usaha kecil.",
  },
  {
    id: "cara-milah-satu-tempat-sampah",
    pertanyaan:
      "Bagaimana cara memilah kalau di rumah hanya tersedia satu tempat sampah?",
    jawaban:
      "Tidak perlu langsung menyediakan banyak wadah. Mulailah dengan memisahkan sampah organik dan anorganik menggunakan dua kantong atau ember bekas yang diberi label. Sampah khusus seperti baterai, lampu, dan minyak jelantah disimpan di wadah kecil tertutup. Setelah terbiasa, barulah tambahkan wadah untuk kertas, logam, dan kaca.",
  },
  {
    id: "minimal-berat-penjemputan",
    pertanyaan: "Apakah ada syarat minimal berat untuk penjemputan sampah?",
    jawaban:
      "Untuk penjemputan ke rumah, mitra EcoCycle umumnya menerapkan minimal 5 kg untuk sampah anorganik campuran yang sudah dipilah, atau minimal 3 liter untuk minyak jelantah. Jika jumlahnya belum mencukupi, sampah bisa disetor langsung ke titik mitra pada jadwal yang tertera tanpa batas minimal. Ketentuan dapat berbeda di setiap titik, jadi sebaiknya konfirmasi lewat WhatsApp sebelum menjadwalkan penjemputan.",
  },
  {
    id: "alur-penyetoran",
    pertanyaan: "Bagaimana alur penyetoran sampah di titik mitra?",
    jawaban:
      "Alurnya sederhana: pilah sampah di rumah, pastikan sudah bersih dan kering, lalu datang ke titik mitra pada jadwal yang tersedia. Petugas akan menimbang dan memeriksa kualitas sampah. Setelah sesuai, sampah dicatat, ditimbang, dan kamu akan menerima bukti setoran beserta nilai insentif sesuai harga yang berlaku. Untuk penjemputan, ajukan jadwal melalui WhatsApp koordinator minimal satu hari sebelumnya.",
  },
  {
    id: "biaya-layanan",
    pertanyaan: "Apakah layanan penjemputan dan penyetoran ini berbayar?",
    jawaban:
      "Penyetoran langsung ke titik mitra tidak dikenakan biaya. Beberapa mitra menerapkan biaya transportasi untuk penjemputan ke rumah, terutama jika jarak tempuh jauh atau volume sampah besar. Biaya tersebut akan diinformasikan oleh koordinator sebelum penjemputan dilakukan, sehingga kamu bisa memutuskan dengan jelas tanpa biaya tersembunyi.",
  },
  {
    id: "sampah-b3",
    pertanyaan:
      "Bagaimana menangani sampah B3 seperti baterai, lampu, dan obat kedaluwarsa?",
    jawaban:
      "Sampah bahan berbahaya dan beracun tidak boleh dicampur dengan sampah rumah tangga. Simpan baterai di wadah plastik atau logam dengan kutub yang sudah ditutup plester, bungkus lampu bekas dengan kertas tebal agar tidak pecah, dan pisahkan obat kedaluwarsa dari kemasannya. Serahkan ke titik mitra yang menerima e-waste atau ke fasilitas pengelolaan B3 terdekat. Untuk baterai yang menggembung, jauhkan dari bahan mudah terbakar dan hubungi petugas sebelum diserahkan.",
  },
  {
    id: "wilayah-layanan",
    pertanyaan: "Wilayah mana saja yang dilayani titik penjemputan EcoCycle?",
    jawaban:
      "Saat ini titik mitra EcoCycle tersebar di Kabupaten Sukabumi, meliputi Kecamatan Cisaat, Cibadak, Sukaraja, dan Kadudampit. Setiap titik memiliki jadwal dan jenis sampah yang berbeda. Gunakan filter wilayah pada peta titik penjemputan untuk melihat pilihan terdekat, lalu hubungi koordinator untuk memastikan jadwal sebelum datang.",
  },
];
