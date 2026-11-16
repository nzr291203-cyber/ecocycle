"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  Info,
  Package,
  RotateCcw,
  Sparkles,
  TreePine,
  Wallet,
  Wind,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { wasteCategories } from "@/data/wasteCategories";
import { categoryIcons } from "@/lib/categoryVisuals";
import {
  CO2_PER_TREE_PER_YEAR_KG,
  formatNumber,
  formatRupiah,
  treeEquivalent,
} from "@/lib/format";
import { cn } from "@/lib/cn";

const emptyWeights: Record<string, number> = Object.fromEntries(
  wasteCategories.map((category) => [category.id, 0]),
);

const contohRumahTangga: Record<string, number> = {
  plastik: 3,
  kertas: 2,
  logam: 1,
  elektronik: 0.5,
  kaca: 1,
  "minyak-jelantah": 1.5,
  organik: 4,
};

function clampWeight(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.min(500, Math.max(0, Math.round(value * 2) / 2));
}

export default function ImpactCalculator() {
  const [weights, setWeights] = useState<Record<string, number>>(emptyWeights);

  const rows = useMemo(
    () =>
      wasteCategories.map((category) => {
        const weight = weights[category.id] ?? 0;

        return {
          ...category,
          weight,
          value: weight * category.estimasiHargaPerKg,
          co2: weight * category.faktorEmisiCO2PerKg,
        };
      }),
    [weights],
  );

  const totals = useMemo(
    () =>
      rows.reduce(
        (accumulator, row) => ({
          weight: accumulator.weight + row.weight,
          value: accumulator.value + row.value,
          co2: accumulator.co2 + row.co2,
        }),
        { weight: 0, value: 0, co2: 0 },
      ),
    [rows],
  );

  const activeRows = rows.filter((row) => row.weight > 0);
  const trees = treeEquivalent(totals.co2);

  const updateWeight = (id: string, nextValue: number) => {
    setWeights((current) => ({
      ...current,
      [id]: clampWeight(nextValue),
    }));
  };

  return (
    <section id="kalkulator-dampak" className="scroll-mt-24 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kalkulator Dampak"
          title="Hitung nilai dan dampak sampahmu"
          description="Perkirakan berat sampah yang biasa kamu kumpulkan setiap minggu, lalu lihat estimasi nilai ekonomi dan emisi CO₂ yang bisa dicegah."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                <Calculator
                  className="h-5 w-5 text-emerald-600"
                  aria-hidden="true"
                />
                Atur estimasi berat
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setWeights({ ...emptyWeights, ...contohRumahTangga })
                  }
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Isi contoh
                </button>
                <button
                  type="button"
                  onClick={() => setWeights(emptyWeights)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-800"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  Reset
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {rows.map((row) => {
                const Icon = categoryIcons[row.id] ?? Package;
                const inputId = `berat-${row.id}`;

                return (
                  <div
                    key={row.id}
                    className={cn(
                      "rounded-2xl border p-4 transition-colors",
                      row.weight > 0
                        ? "border-emerald-200 bg-emerald-50/40"
                        : "border-slate-100 bg-white",
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <label
                        htmlFor={inputId}
                        className="flex items-center gap-2.5 text-sm font-semibold text-slate-800"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-emerald-600">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {row.nama}
                        <span className="hidden text-xs font-normal text-slate-400 sm:inline">
                          {formatRupiah(row.estimasiHargaPerKg)}/kg
                        </span>
                      </label>

                      <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2 py-1.5 focus-within:border-emerald-400">
                        <input
                          id={inputId}
                          type="number"
                          min={0}
                          max={500}
                          step={0.5}
                          value={row.weight}
                          onChange={(event) =>
                            updateWeight(row.id, Number(event.target.value))
                          }
                          className="w-14 bg-transparent text-right text-sm font-bold text-slate-800 outline-none"
                        />
                        <span className="text-xs font-medium text-slate-400">
                          kg
                        </span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min={0}
                      max={50}
                      step={0.5}
                      value={Math.min(row.weight, 50)}
                      onChange={(event) =>
                        updateWeight(row.id, Number(event.target.value))
                      }
                      aria-label={`Estimasi berat ${row.nama} dalam kilogram`}
                      className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-100 accent-emerald-600"
                    />
                  </div>
                );
              })}
            </div>

            <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                aria-hidden="true"
              />
              Gunakan angka perkiraan. Slider cepat hingga 50 kg per kategori;
              isi manual bila beratnya lebih besar.
            </p>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[2rem] bg-emerald-700 p-6 text-white shadow-2xl shadow-emerald-900/20 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/30 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-emerald-900/40 blur-2xl"
              />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                  Ringkasan dampak
                </p>
                <p className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-extrabold leading-none sm:text-5xl">
                    {formatNumber(totals.weight)}
                  </span>
                  <span className="pb-1 text-sm font-semibold text-emerald-200">
                    kg terkumpul
                  </span>
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
                      <Wallet className="h-3.5 w-3.5" aria-hidden="true" />
                      Nilai ekonomi
                    </p>
                    <p className="mt-2 text-lg font-extrabold leading-tight sm:text-xl">
                      {formatRupiah(totals.value)}
                    </p>
                    <p className="mt-1 text-[11px] text-emerald-200">
                      estimasi insentif
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
                      <Wind className="h-3.5 w-3.5" aria-hidden="true" />
                      CO₂ dicegah
                    </p>
                    <p className="mt-2 text-lg font-extrabold leading-tight sm:text-xl">
                      {formatNumber(totals.co2)} kg
                    </p>
                    <p className="mt-1 text-[11px] text-emerald-200">
                      dari penimbunan
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 rounded-2xl bg-emerald-800/70 p-4 ring-1 ring-emerald-500/30">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/25">
                    <TreePine className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-tight">
                      Setara {formatNumber(trees)} pohon dewasa
                    </p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-emerald-200">
                      kemampuan menyerap CO₂ selama satu tahun
                    </p>
                  </div>
                </div>

                {activeRows.length > 0 ? (
                  <div className="mt-6 space-y-2.5 border-t border-white/15 pt-5">
                    {activeRows.map((row) => (
                      <div
                        key={row.id}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="text-emerald-100">
                          {row.nama}{" "}
                          <span className="text-emerald-300">
                            · {formatNumber(row.weight)} kg
                          </span>
                        </span>
                        <span className="font-semibold text-white">
                          {formatRupiah(row.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-relaxed text-emerald-100">
                    Geser slider atau isi berat sampah untuk melihat perhitungan
                    real-time di sini.
                  </p>
                )}

                <p className="mt-6 text-[11px] leading-relaxed text-emerald-200">
                  Perhitungan memakai asumsi {CO2_PER_TREE_PER_YEAR_KG} kg CO₂
                  diserap satu pohon dewasa per tahun. Angka bersifat estimasi
                  untuk edukasi, bukan nilai transaksi resmi.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
