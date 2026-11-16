"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  CalendarDays,
  Clock,
  MapPin,
  MapPinned,
  MessageCircle,
  Navigation,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  getGoogleMapsLink,
  getWhatsAppLink,
  pickupLocations,
  pickupRegions,
} from "@/data/pickupLocations";
import { cn } from "@/lib/cn";

const LeafletMapInner = dynamic(() => import("@/components/LeafletMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-50 text-sm text-slate-500">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-600" />
      Memuat peta interaktif…
    </div>
  ),
});

export default function PickupMap() {
  const [activeRegion, setActiveRegion] = useState("Semua");
  const [selectedId, setSelectedId] = useState<string | null>(
    pickupLocations[0]?.id ?? null,
  );

  const filteredLocations = useMemo(() => {
    if (activeRegion === "Semua") return pickupLocations;

    return pickupLocations.filter(
      (location) => location.wilayahKecamatan === activeRegion,
    );
  }, [activeRegion]);

  useEffect(() => {
    if (filteredLocations.length === 0) {
      setSelectedId(null);
      return;
    }

    const stillVisible = filteredLocations.some(
      (location) => location.id === selectedId,
    );

    if (!stillVisible) {
      setSelectedId(filteredLocations[0].id);
    }
  }, [filteredLocations, selectedId]);

  return (
    <section
      id="titik-penjemputan"
      className="scroll-mt-24 bg-slate-50/70 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Titik Penjemputan"
          title="Temukan titik setor terdekat di Sukabumi"
          description="Pilih kecamatan, klik kartu lokasi, lalu peta akan mengarah ke titik tersebut. Hubungi koordinator lewat WhatsApp sebelum datang untuk memastikan jadwal."
        />

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveRegion("Semua")}
              aria-pressed={activeRegion === "Semua"}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                activeRegion === "Semua"
                  ? "border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:text-emerald-700",
              )}
            >
              Semua wilayah
              <span
                className={cn(
                  "rounded-full px-1.5 text-[11px] font-bold",
                  activeRegion === "Semua"
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500",
                )}
              >
                {pickupLocations.length}
              </span>
            </button>

            {pickupRegions.map((region) => {
              const count = pickupLocations.filter(
                (location) => location.wilayahKecamatan === region,
              ).length;
              const isActive = activeRegion === region;

              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                    isActive
                      ? "border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                      : "border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:text-emerald-700",
                  )}
                >
                  {region}
                  <span
                    className={cn(
                      "rounded-full px-1.5 text-[11px] font-bold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <MapPinned className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            {filteredLocations.length} titik · {pickupRegions.length} kecamatan
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="order-2 space-y-3 lg:order-1 lg:max-h-[600px] lg:overflow-y-auto lg:pr-2">
            {filteredLocations.map((location) => {
              const isSelected = location.id === selectedId;

              return (
                <article
                  key={location.id}
                  className={cn(
                    "rounded-2xl border bg-white p-5 transition-all",
                    isSelected
                      ? "border-emerald-400 shadow-lg shadow-emerald-900/5 ring-1 ring-emerald-300"
                      : "border-slate-100 shadow-sm hover:border-emerald-200",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold leading-snug text-slate-900">
                        {location.namaTitik}
                      </h3>
                      <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500">
                        <MapPin
                          className="h-3.5 w-3.5 text-emerald-600"
                          aria-hidden="true"
                        />
                        Kec. {location.wilayahKecamatan}
                      </p>
                    </div>

                    {isSelected ? (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        Dipilih
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    {location.alamatLengkap}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {location.jadwalPenjemputan}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {location.jenisSampahDiterima.map((jenis) => (
                      <span
                        key={jenis}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                      >
                        {jenis}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setSelectedId(location.id)}
                      aria-pressed={isSelected}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      Lihat di peta
                    </button>

                    <a
                      href={getGoogleMapsLink(location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                    >
                      <Navigation className="h-4 w-4" aria-hidden="true" />
                      Arahkan via Google Maps
                    </a>

                    <a
                      href={getWhatsAppLink(location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Hubungi Koordinator (WA)
                    </a>
                  </div>
                </article>
              );
            })}

            <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/50 p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Butuh jadwal penjemputan khusus?
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-emerald-900/70">
                Ajukan penjemputan minimal satu hari sebelumnya. Minimal 5 kg
                untuk sampah anorganik terpilah atau 3 liter untuk minyak
                jelantah. Hubungi koordinator titik terdekat untuk konfirmasi.
              </p>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/5 lg:order-2 lg:sticky lg:top-24">
            <div className="relative isolate z-0 h-[400px] w-full overflow-hidden rounded-[1.6rem] sm:h-[480px] lg:h-[600px]">
              <LeafletMapInner
                locations={filteredLocations}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            </div>
            <p className="px-3 py-2 text-[11px] text-slate-400">
              Peta © OpenStreetMap contributors. Klik marker untuk memilih
              titik, atau gunakan daftar lokasi di samping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
