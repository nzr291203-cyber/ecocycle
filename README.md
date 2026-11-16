# EcoCycle

Platform informasi publik untuk pengelolaan sampah, edukasi daur ulang, dan direktori titik penjemputan sampah di Kabupaten Sukabumi. Dibangun dengan Next.js (App Router), TypeScript, Tailwind CSS, Lucide Icons, dan React Leaflet.

Tidak ada sistem login, tidak ada referensi aplikasi mobile, dan seluruh konten ditulis dalam Bahasa Indonesia untuk pembaca umum.

## Fitur

- **Panduan Pilah interaktif** — 7 kategori sampah (plastik, kertas & kardus, logam & kaleng, e-waste, kaca, minyak jelantah, organik) lengkap dengan kode simbol, barang diterima/ditolak, langkah persiapan, estimasi harga, dan faktor emisi.
- **Kalkulator Dampak** — atur berat sampah per kategori lewat slider atau input angka, lalu lihat estimasi nilai ekonomi, kg CO₂ yang dicegah, dan setara pohon per tahun secara real-time.
- **Peta titik penjemputan** — Leaflet + OpenStreetMap, filter kecamatan, kartu lokasi yang dapat difokuskan ke marker, tombol WhatsApp koordinator, dan petunjuk arah Google Maps.
- **Edukasi** — 3 artikel lengkap yang terbuka dalam dialog, dengan estimasi waktu baca dan tanggal terbit.
- **FAQ accordion** — 7 pertanyaan umum seputar pemilahan, minimal berat, alur setor, biaya, sampah B3, dan wilayah layanan.
- **Ramah SEO & deploy** — metadata Open Graph, `robots.txt`, `sitemap.xml`, ikon situs, desain responsif, dan aksesibilitas dasar (label, `aria-*`, skip link, dukungan `prefers-reduced-motion`).

## Menjalankan secara lokal

Prasyarat: Node.js 20.9 atau lebih baru.

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

Perintah lain:

```bash
npm run typecheck   # pemeriksaan TypeScript tanpa emit
npm run build       # build produksi
npm run start       # jalankan hasil build
```

## Struktur proyek

```text
src/
├─ app/
│  ├─ layout.tsx        # metadata, font, viewport
│  ├─ page.tsx          # komposisi seluruh seksi
│  ├─ globals.css       # Tailwind v4 + penyesuaian Leaflet
│  ├─ icon.svg          # favicon
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ Navbar.tsx
│  ├─ HeroSection.tsx
│  ├─ SortingGuide.tsx
│  ├─ ImpactCalculator.tsx
│  ├─ HowItWorks.tsx
│  ├─ PickupMap.tsx        # wrapper client + dynamic import
│  ├─ LeafletMapInner.tsx  # komponen peta (client only)
│  ├─ EducationGrid.tsx
│  ├─ ArticleModal.tsx
│  ├─ FaqSection.tsx
│  └─ Footer.tsx
├─ data/
│  ├─ wasteCategories.ts
│  ├─ pickupLocations.ts
│  ├─ articles.ts
│  └─ faqs.ts
└─ lib/
   ├─ format.ts          # format Rupiah/angka + asumsi pohon
   ├─ site.ts            # identitas situs, statistik, tautan nav
   ├─ categoryVisuals.ts # ikon & warna per kategori
   └─ cn.ts
```

## Menyesuaikan data

- **Kategori sampah** — `src/data/wasteCategories.ts`. Setiap entri memuat `id`, `nama`, `deskripsiSingkat`, `kodeSimbol`, `diterima`, `ditolak`, `caraPersiapan`, `estimasiHargaPerKg`, dan `faktorEmisiCO2PerKg`.
- **Titik penjemputan** — `src/data/pickupLocations.ts`. Ganti koordinat, alamat, jadwal, jenis sampah, dan nomor WhatsApp (format `62...`, tanpa tanda plus). Filter kecamatan dibuat otomatis dari data.
- **Artikel** — `src/data/articles.ts`. Isi artikel memakai blok `heading`, `paragraph`, `list`, dan `callout`, sehingga mudah disusun tanpa parser markdown.
- **FAQ** — `src/data/faqs.ts`.
- **Identitas situs & statistik hero** — `src/lib/site.ts`. Sesuaikan `NEXT_PUBLIC_SITE_URL` saat deploy agar metadata dan sitemap memakai domain final.

> Seluruh angka harga, emisi, statistik komunitas, nomor WhatsApp, dan jadwal pada proyek ini adalah **data dummy untuk keperluan demonstrasi**. Ganti dengan data mitra yang terverifikasi sebelum digunakan publik.

## Deploy ke Vercel

1. Unggah repositori ini ke GitHub/GitLab/Bitbucket.
2. Di Vercel, pilih **Add New → Project**, lalu impor repositori.
3. Framework terdeteksi otomatis sebagai Next.js. Biarkan build command `next build` dan output default.
4. (Opsional) Tambahkan environment variable `NEXT_PUBLIC_SITE_URL` dengan domain produksi, lalu deploy.

Tidak ada environment variable wajib dan tidak ada konfigurasi server khusus. Peta memakai tile OpenStreetMap publik; untuk trafik tinggi, pertimbangkan penyedia tile berlangganan.
