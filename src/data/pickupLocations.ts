export type PickupLocation = {
  id: string;
  namaTitik: string;
  wilayahKecamatan: string;
  alamatLengkap: string;
  /** [latitude, longitude] */
  koordinat: [number, number];
  jadwalPenjemputan: string;
  jenisSampahDiterima: string[];
  /** Format internasional tanpa tanda plus, contoh: 62812xxxxxxx */
  nomorWhatsApp: string;
};

export const pickupLocations: PickupLocation[] = [
  {
    id: "bank-sampah-induk-cisaat",
    namaTitik: "Bank Sampah Induk Cisaat",
    wilayahKecamatan: "Cisaat",
    alamatLengkap:
      "Jl. Raya Cisaat No. 12, Desa Cisaat, Kec. Cisaat, Kab. Sukabumi",
    koordinat: [-6.9147, 106.8832],
    jadwalPenjemputan: "Setiap Rabu & Sabtu, 08.00 - 12.00 WIB",
    jenisSampahDiterima: [
      "Plastik",
      "Kertas & Kardus",
      "Logam & Kaleng",
      "Kaca",
    ],
    nomorWhatsApp: "6281200000001",
  },
  {
    id: "tps3r-cibolang",
    namaTitik: "TPS3R Cibolang",
    wilayahKecamatan: "Cisaat",
    alamatLengkap:
      "Jl. Cibolang No. 45, Desa Cibolang Kaler, Kec. Cisaat, Kab. Sukabumi",
    koordinat: [-6.8938, 106.893],
    jadwalPenjemputan: "Setiap Senin & Kamis, 07.30 - 11.30 WIB",
    jenisSampahDiterima: ["Organik / Kompos", "Kertas & Kardus", "Plastik"],
    nomorWhatsApp: "6281200000002",
  },
  {
    id: "bank-sampah-cibaraja",
    namaTitik: "Bank Sampah Cibaraja",
    wilayahKecamatan: "Cisaat",
    alamatLengkap:
      "Jl. Cibaraja No. 8, Desa Cibaraja, Kec. Cisaat, Kab. Sukabumi",
    koordinat: [-6.927, 106.8698],
    jadwalPenjemputan: "Setiap Sabtu, 08.00 - 13.00 WIB",
    jenisSampahDiterima: [
      "Plastik",
      "Minyak Jelantah",
      "Elektronik / E-Waste",
      "Kaca",
    ],
    nomorWhatsApp: "6281200000003",
  },
  {
    id: "bank-sampah-mitra-cibadak",
    namaTitik: "Bank Sampah Mitra Cibadak",
    wilayahKecamatan: "Cibadak",
    alamatLengkap:
      "Jl. Siliwangi No. 21, Kel. Cibadak, Kec. Cibadak, Kab. Sukabumi",
    koordinat: [-6.892, 106.783],
    jadwalPenjemputan: "Setiap Selasa & Jumat, 09.00 - 14.00 WIB",
    jenisSampahDiterima: [
      "Kertas & Kardus",
      "Logam & Kaleng",
      "Plastik",
      "Minyak Jelantah",
    ],
    nomorWhatsApp: "6281200000004",
  },
  {
    id: "tps3r-sukaraja",
    namaTitik: "TPS3R Sukaraja",
    wilayahKecamatan: "Sukaraja",
    alamatLengkap:
      "Jl. Cimuncang No. 5, Desa Sukaraja, Kec. Sukaraja, Kab. Sukabumi",
    koordinat: [-6.918, 106.956],
    jadwalPenjemputan: "Setiap Rabu, 08.00 - 12.00 WIB",
    jenisSampahDiterima: ["Organik / Kompos", "Kertas & Kardus", "Kaca"],
    nomorWhatsApp: "6281200000005",
  },
  {
    id: "kompos-center-kadudampit",
    namaTitik: "Kompos Center Kadudampit",
    wilayahKecamatan: "Kadudampit",
    alamatLengkap:
      "Jl. Kadudampit No. 3, Desa Kadudampit, Kec. Kadudampit, Kab. Sukabumi",
    koordinat: [-6.87, 106.901],
    jadwalPenjemputan: "Setiap Minggu, 07.00 - 11.00 WIB",
    jenisSampahDiterima: [
      "Organik / Kompos",
      "Minyak Jelantah",
      "Kertas & Kardus",
    ],
    nomorWhatsApp: "6281200000006",
  },
];

export const pickupRegions = Array.from(
  new Set(pickupLocations.map((location) => location.wilayahKecamatan)),
);

export function getWhatsAppLink(location: PickupLocation): string {
  const pesan = encodeURIComponent(
    `Halo, saya menemukan EcoCycle dan ingin bertanya tentang penjemputan sampah di ${location.namaTitik} (${location.wilayahKecamatan}). Apakah jadwal ${location.jadwalPenjemputan} masih berlaku?`,
  );

  return `https://wa.me/${location.nomorWhatsApp}?text=${pesan}`;
}

export function getGoogleMapsLink(location: PickupLocation): string {
  const [lat, lng] = location.koordinat;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
