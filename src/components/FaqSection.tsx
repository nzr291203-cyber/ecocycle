"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-slate-50/70 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Pertanyaan yang sering diajukan"
              description="Belum menemukan jawaban? Hubungi koordinator EcoCycle dan tim mitra akan membantu menjelaskan alur setor atau penjemputan."
            />

            <div className="mt-6 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm">
              <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Sparkles className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                Masih bingung mulai dari mana?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                Ceritakan kondisi sampahmu, kami bantu pilih titik dan jadwal
                yang paling sesuai.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  "Halo EcoCycle, saya ingin bertanya tentang cara memilah sampah dan jadwal penjemputan.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Tanya lewat WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              const panelId = `faq-panel-${faq.id}`;
              const buttonId = `faq-button-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-colors",
                    isOpen
                      ? "border-emerald-200 shadow-lg shadow-emerald-900/5"
                      : "border-slate-100 shadow-sm hover:border-emerald-200",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-sm font-bold leading-snug text-slate-900 sm:text-base">
                        {faq.pertanyaan}
                      </span>
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all",
                          isOpen
                            ? "rotate-180 bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-500",
                        )}
                      >
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">
                        {faq.jawaban}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
