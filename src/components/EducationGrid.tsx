"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Cpu,
  Leaf,
  Recycle,
  type LucideIcon,
} from "lucide-react";
import ArticleModal from "@/components/ArticleModal";
import SectionHeading from "@/components/SectionHeading";
import {
  articles,
  formatArticleDate,
  type Article,
} from "@/data/articles";
import { cn } from "@/lib/cn";

const articleIcons: Record<string, LucideIcon> = {
  "Panduan Pemilahan": Recycle,
  "Kompos & Organik": Leaf,
  "E-Waste": Cpu,
};

const articleGradients: Record<string, string> = {
  "Panduan Pemilahan": "from-emerald-500 to-teal-600",
  "Kompos & Organik": "from-lime-500 to-emerald-600",
  "E-Waste": "from-violet-500 to-indigo-600",
};

export default function EducationGrid() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="edukasi" className="scroll-mt-24 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Edukasi"
          title="Belajar dulu, berubah pelan-pelan"
          description="Tiga panduan pilihan untuk membantumu memulai kebiasaan memilah, mengolah sisa dapur, dan menangani sampah elektronik dengan aman."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const Icon = articleIcons[article.kategori] ?? Recycle;
            const gradient =
              articleGradients[article.kategori] ?? "from-emerald-500 to-teal-600";

            return (
              <button
                key={article.id}
                type="button"
                onClick={() => setSelectedArticle(article)}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <div
                  className={cn(
                    "relative flex h-36 items-end justify-between bg-gradient-to-br p-5",
                    gradient,
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:18px_18px]"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="relative rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                    {article.estimasiBaca}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-700">
                    {article.kategori}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-700">
                    {article.judul}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {article.ringkasan}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatArticleDate(article.tanggal)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                      Baca artikel
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          Artikel baru ditambahkan secara berkala. Semua materi edukatif dan
          bebas diakses tanpa akun.
        </p>
      </div>

      {selectedArticle ? (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      ) : null}
    </section>
  );
}
