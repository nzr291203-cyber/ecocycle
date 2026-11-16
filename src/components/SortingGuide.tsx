"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Info,
  Package,
  Sparkles,
  Wallet,
  Wind,
  XCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { wasteCategories } from "@/data/wasteCategories";
import { formatNumber, formatRupiah } from "@/lib/format";
import { categoryAccent, categoryIcons } from "@/lib/categoryVisuals";
import { cn } from "@/lib/cn";

export default function SortingGuide() {
  const [activeId, setActiveId] = useState(wasteCategories[0].id);

  const activeCategory = useMemo(
    () =>
      wasteCategories.find((category) => category.id === activeId) ??
      wasteCategories[0],
    [activeId],
  );

  const ActiveIcon = categoryIcons[activeCategory.id] ?? Package;

  return (
    <section
      id="panduan-pilah"
      className="scroll-mt-24 bg-slate-50/70 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Panduan Pilah"
          title="Kenali tujuh jenis sampah sebelum memilah"
          description="Pilih kategori untuk melihat benda apa saja yang diterima, yang harus ditolak, dan langkah persiapan sebelum sampah dibawa ke titik mitra."
        />

        <div
          role="tablist"
          aria-label="Kategori sampah"
          className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {wasteCategories.map((category) => {
            const Icon = categoryIcons[category.id] ?? Package;
            const isActive = category.id === activeCategory.id;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                onClick={() => setActiveId(category.id)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all",
                  isActive
                    ? "border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:text-emerald-700",
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {category.nama}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
          className="mt-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-900/5"
        >
          <div
            key={activeCategory.id}
            className="animate-fade-up border-b border-slate-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 sm:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
                    categoryAccent[activeCategory.id] ??
                      "bg-emerald-50 text-emerald-600",
                  )}
                >
                  <ActiveIcon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                      {activeCategory.nama}
                    </h3>
                    <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      {activeCategory.kodeSimbol}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                    {activeCategory.deskripsiSingkat}
                  </p>
                </div>
              </div>

              <div className="grid shrink-0 grid-cols-2 gap-3">
                <div className="rounded-2xl border border-emerald-100 bg-white px-4 py-3">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    <Wallet className="h-3.5 w-3.5" aria-hidden="true" />
                    Estimasi harga
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-emerald-700">
                    {formatRupiah(activeCategory.estimasiHargaPerKg)}
                    <span className="text-xs font-semibold text-slate-500">
                      /kg
                    </span>
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    <Wind className="h-3.5 w-3.5" aria-hidden="true" />
                    Emisi dicegah
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-sky-700">
                    {formatNumber(activeCategory.faktorEmisiCO2PerKg)}
                    <span className="text-xs font-semibold text-slate-500">
                      {" "}
                      kg CO₂/kg
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-800">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                Yang Diterima
              </h4>
              <ul className="mt-4 space-y-3">
                {activeCategory.diterima.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-emerald-950/80"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-rose-100 bg-rose-50/70 p-6">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rose-800">
                <XCircle className="h-5 w-5" aria-hidden="true" />
                Yang Ditolak
              </h4>
              <ul className="mt-4 space-y-3">
                {activeCategory.ditolak.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-rose-950/80"
                  >
                    <XCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-rose-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 bg-slate-50/60 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Cara persiapan sebelum disetor
              </h4>
            </div>

            <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {activeCategory.caraPersiapan.map((step, index) => (
                <li
                  key={step}
                  className="relative rounded-2xl border border-slate-100 bg-white p-4 text-sm leading-relaxed text-slate-600"
                >
                  <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <p className="mt-6 flex items-start gap-2 rounded-2xl bg-white p-4 text-xs leading-relaxed text-slate-500 ring-1 ring-slate-100">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                aria-hidden="true"
              />
              Harga dan faktor emisi di atas adalah estimasi edukatif berdasarkan
              rata-rata pengepul mitra. Nilai aktual dapat berbeda tergantung
              kualitas bahan, kondisi pasar, dan kebijakan masing-masing titik
              penjemputan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
