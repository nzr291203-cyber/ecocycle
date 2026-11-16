import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
