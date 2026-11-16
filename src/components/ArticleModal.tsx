"use client";

import { useEffect, useId, useRef } from "react";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock,
  Info,
  Lightbulb,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  formatArticleDate,
  type Article,
  type ArticleBlock,
} from "@/data/articles";
import { cn } from "@/lib/cn";

const calloutStyles: Record<
  "info" | "tip" | "warning",
  { wrapper: string; icon: LucideIcon; iconColor: string }
> = {
  info: {
    wrapper: "border-sky-100 bg-sky-50 text-sky-950",
    icon: Info,
    iconColor: "text-sky-600",
  },
  tip: {
    wrapper: "border-emerald-100 bg-emerald-50 text-emerald-950",
    icon: Lightbulb,
    iconColor: "text-emerald-600",
  },
  warning: {
    wrapper: "border-amber-100 bg-amber-50 text-amber-950",
    icon: AlertTriangle,
    iconColor: "text-amber-600",
  },
};

function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h3
              key={index}
              className="pt-2 text-lg font-bold tracking-tight text-slate-900"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-sm leading-relaxed text-slate-600">
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";

          return (
            <ListTag
              key={index}
              className={cn(
                "space-y-2 pl-5 text-sm leading-relaxed text-slate-600",
                block.ordered ? "list-decimal" : "list-disc",
              )}
            >
              {block.items.map((item) => (
                <li key={item} className="pl-1 marker:text-emerald-500">
                  {item}
                </li>
              ))}
            </ListTag>
          );
        }

        const style = calloutStyles[block.tone];
        const Icon = style.icon;

        return (
          <div
            key={index}
            className={cn("rounded-2xl border p-4", style.wrapper)}
          >
            <p className="flex items-center gap-2 text-sm font-bold">
              <Icon
                className={cn("h-4 w-4 shrink-0", style.iconColor)}
                aria-hidden="true"
              />
              {block.title}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed opacity-90">
              {block.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

type ArticleModalProps = {
  article: Article;
  onClose: () => void;
};

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92dvh] w-full max-w-3xl animate-fade-up flex-col overflow-hidden rounded-t-[2rem] bg-white shadow-2xl sm:max-h-[86vh] sm:rounded-[2rem]"
      >
        <div className="relative border-b border-slate-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 sm:p-8">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup artikel"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-800"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            {article.kategori}
          </span>

          <h2
            id={titleId}
            className="mt-3 pr-10 text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl"
          >
            {article.judul}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {article.ringkasan}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formatArticleDate(article.tanggal)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {article.estimasiBaca}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" aria-hidden="true" />
              {article.penulis}
            </span>
          </div>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
          <ArticleBody blocks={article.isi} />

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-slate-500">
              Punya pertanyaan lain seputar topik ini? Sampaikan lewat menu FAQ
              atau hubungi koordinator titik mitra terdekat.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Tutup artikel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
