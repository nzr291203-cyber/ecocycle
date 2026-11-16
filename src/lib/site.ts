export const siteConfig = {
  name: "EcoCycle",
  tagline: "Pilah dari rumah, ubah jadi dampak",
  description:
    "EcoCycle adalah pusat informasi pengelolaan sampah, edukasi daur ulang, dan direktori titik penjemputan sampah di Kabupaten Sukabumi.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecocycle.vercel.app",
  email: "halo@ecocycle.id",
  whatsapp: "6281200000000",
  address: "Jl. Raya Cisaat No. 12, Kec. Cisaat, Kab. Sukabumi, Jawa Barat",
  operationalHours: "Senin - Sabtu, 08.00 - 16.00 WIB",
};

export const impactStats = [
  {
    id: "sampah",
    label: "Total Sampah Terkelola",
    value: "128.540 kg",
    caption: "Dari rumah tangga dan mitra bank sampah",
  },
  {
    id: "emisi",
    label: "Emisi CO₂ Dicegah",
    value: "76.240 kg",
    caption: "Setara kemampuan serap 3.630 pohon per tahun",
  },
  {
    id: "mitra",
    label: "Titik Mitra Aktif",
    value: "6 titik",
    caption: "Tersebar di 4 kecamatan di Kabupaten Sukabumi",
  },
] as const;

export const navLinks = [
  { label: "Panduan Pilah", href: "#panduan-pilah" },
  { label: "Kalkulator Dampak", href: "#kalkulator-dampak" },
  { label: "Titik Penjemputan", href: "#titik-penjemputan" },
  { label: "Edukasi", href: "#edukasi" },
  { label: "FAQ", href: "#faq" },
] as const;
