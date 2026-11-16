import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Leaf,
  MapPin,
  MapPinned,
  Package,
  Recycle,
  Sparkles,
  Trees,
  Wind,
} from "lucide-react";
import { impactStats } from "@/lib/site";

const statIcons = {
  sampah: Recycle,
  emisi: Wind,
  mitra: MapPinned,
} as const;

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden scroll-mt-24 pb-16 pt-28 lg:pb-24 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute -left-24 top-48 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 sm:text-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Gerakan Pilah Sampah dari Rumah
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Sampahmu bukan akhir cerita, tapi awal{" "}
            <span className="relative inline-block text-emerald-600">
              dampak nyata
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-emerald-300"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C40 3 90 2 198 6"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            EcoCycle membantumu memahami cara memilah sampah, menghitung nilai
            ekonomi dan emisi yang bisa dicegah, serta menemukan titik
            penjemputan mitra terdekat di Kabupaten Sukabumi. Semua panduan bisa
            diakses gratis, tanpa perlu membuat akun.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#panduan-pilah"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-600/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 sm:text-base"
            >
              <Recycle className="h-5 w-5" aria-hidden="true" />
              Pelajari Cara Pilah
            </Link>
            <Link
              href="#titik-penjemputan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 sm:text-base"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Lihat Jadwal &amp; Titik Jemput
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
            {[
              "Gratis diakses",
              "Tanpa akun",
              "6 titik mitra aktif",
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle2
                  className="h-4 w-4 text-emerald-600"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square w-full rounded-[2.5rem] bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-6 ring-1 ring-emerald-100">
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-full border border-dashed border-emerald-300/70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_1px_1px,rgba(5,150,105,0.18)_1px,transparent_0)] [background-size:22px_22px] opacity-40"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl shadow-emerald-900/10 ring-[10px] ring-white/60 sm:h-40 sm:w-40">
                <Recycle
                  className="h-16 w-16 text-emerald-600 sm:h-20 sm:w-20"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="absolute left-0 top-6 flex animate-float items-center gap-2 rounded-2xl border border-emerald-100 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-emerald-900/5 backdrop-blur sm:left-2 sm:top-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Package className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-medium text-slate-500">
                  Plastik
                </span>
                <span className="block text-xs font-bold text-slate-800">
                  PET 1 · HDPE 2
                </span>
              </span>
            </div>

            <div className="absolute right-0 top-1/3 flex animate-float-slow items-center gap-2 rounded-2xl border border-emerald-100 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-emerald-900/5 backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Cpu className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-medium text-slate-500">
                  E-Waste
                </span>
                <span className="block text-xs font-bold text-slate-800">
                  Serah terpisah
                </span>
              </span>
            </div>

            <div className="absolute bottom-24 left-0 flex items-center gap-2 rounded-2xl border border-emerald-100 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-emerald-900/5 backdrop-blur sm:bottom-28 sm:left-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-50 text-lime-600">
                <Leaf className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-medium text-slate-500">
                  Organik
                </span>
                <span className="block text-xs font-bold text-slate-800">
                  Jadi kompos
                </span>
              </span>
            </div>

            <div className="absolute bottom-6 right-2 flex items-center gap-2 rounded-2xl bg-emerald-700 px-4 py-3 text-white shadow-xl shadow-emerald-900/20 sm:right-6">
              <Trees className="h-5 w-5" aria-hidden="true" />
              <span className="text-left">
                <span className="block text-[11px] text-emerald-100">
                  Setiap 21 kg CO₂
                </span>
                <span className="block text-xs font-bold">
                  = 1 pohon dewasa/tahun
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid gap-4 sm:grid-cols-3">
          {impactStats.map((stat) => {
            const Icon = statIcons[stat.id];

            return (
              <div
                key={stat.id}
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <dt className="text-sm font-semibold text-slate-500">
                    {stat.label}
                  </dt>
                </div>
                <dd className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </dd>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {stat.caption}
                </p>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
