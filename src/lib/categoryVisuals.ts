import {
  Cpu,
  Droplets,
  GlassWater,
  Leaf,
  Newspaper,
  Package,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const categoryIcons: Record<string, LucideIcon> = {
  plastik: Package,
  kertas: Newspaper,
  logam: Wrench,
  elektronik: Cpu,
  kaca: GlassWater,
  "minyak-jelantah": Droplets,
  organik: Leaf,
};

export const categoryAccent: Record<string, string> = {
  plastik: "bg-sky-50 text-sky-600",
  kertas: "bg-amber-50 text-amber-600",
  logam: "bg-slate-100 text-slate-600",
  elektronik: "bg-violet-50 text-violet-600",
  kaca: "bg-cyan-50 text-cyan-600",
  "minyak-jelantah": "bg-orange-50 text-orange-600",
  organik: "bg-lime-50 text-lime-600",
};
