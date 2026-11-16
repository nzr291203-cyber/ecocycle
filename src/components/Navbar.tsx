"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Leaf, MapPin, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-emerald-100/80 bg-white/90 shadow-sm backdrop-blur-lg"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm",
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <Link
          href="#beranda"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center gap-2.5 rounded-2xl py-2"
          aria-label="EcoCycle, kembali ke beranda"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/25">
            <Leaf className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              Eco<span className="text-emerald-600">Cycle</span>
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-wide text-slate-500">
              Pilah dari rumah
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#titik-penjemputan"
            className="hidden items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-700 sm:inline-flex"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Cek Titik Jemput
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-emerald-200 hover:text-emerald-700 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="menu-mobile"
        className={cn(
          "overflow-hidden border-t border-emerald-100/70 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                activeHash === link.href
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700",
              )}
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ))}
          <Link
            href="#titik-penjemputan"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Cek Titik Jemput
          </Link>
        </div>
      </div>
    </header>
  );
}
