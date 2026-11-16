import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  Clock,
  Globe,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Recycle,
} from "lucide-react";
import { wasteCategories } from "@/data/wasteCategories";
import { navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-white sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                Mulai hari ini
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                Siap mengubah sampah rumahmu jadi dampak nyata?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-emerald-100">
                Mulai dari satu kantong plastik bersih dan satu ember kompos.
                Setiap kilogram yang dipilah mengurangi beban tempat pembuangan
                akhir.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                href="#titik-penjemputan"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-800 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Cek Titik Jemput
              </Link>
              <Link
                href="#panduan-pilah"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Recycle className="h-4 w-4" aria-hidden="true" />
                Baca Panduan
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.1fr]">
          <div>
            <Link href="#beranda" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Eco<span className="text-emerald-400">Cycle</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Platform informasi pengelolaan sampah, edukasi daur ulang, dan
              direktori titik penjemputan mitra di Kabupaten Sukabumi. Gratis,
              terbuka, dan tanpa akun.
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Kirim email ke EcoCycle"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi EcoCycle lewat WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Informasi peta OpenStreetMap"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Jelajahi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#beranda"
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  Beranda
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Kategori Sampah
            </h3>
            <ul className="mt-4 space-y-2.5">
              {wasteCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href="#panduan-pilah"
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {category.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Kontak &amp; Layanan
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-emerald-400"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-emerald-400"
                >
                  Koordinator WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                <span>{siteConfig.operationalHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs text-slate-500">
              © {year} EcoCycle. Dibuat untuk edukasi publik tentang pengelolaan
              sampah.
            </p>
            <p className="text-xs text-slate-500">
              Harga, faktor emisi, dan angka dampak bersifat estimasi edukatif,
              bukan penawaran resmi.
            </p>
          </div>

          <Link
            href="#beranda"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400 sm:self-auto"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            Kembali ke atas
          </Link>
        </div>
      </div>
    </footer>
  );
}
