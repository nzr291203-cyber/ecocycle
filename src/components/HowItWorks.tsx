import {
  Droplets,
  ListChecks,
  TrendingUp,
  Truck,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: ListChecks,
    title: "Pilah di rumah",
    description:
      "Pisahkan organik, anorganik bernilai, residu, dan sampah khusus seperti baterai atau minyak jelantah.",
  },
  {
    icon: Droplets,
    title: "Bersihkan & keringkan",
    description:
      "Bilas sisa makanan, keringkan bahan daur ulang, dan bungkus pecahan kaca dengan aman agar petugas terlindungi.",
  },
  {
    icon: Truck,
    title: "Setor atau jadwalkan jemput",
    description:
      "Datang ke titik mitra sesuai jadwal, atau ajukan penjemputan lewat WhatsApp minimal satu hari sebelumnya.",
  },
  {
    icon: TrendingUp,
    title: "Catat nilai & dampaknya",
    description:
      "Sampah ditimbang, dicatat, dan diberi insentif. Dampak emisi yang dicegah bisa kamu pantau lewat kalkulator.",
  },
];

export default function HowItWorks() {
  return (
    <section id="alur-setor" className="scroll-mt-24 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Alur Setor"
            title="Empat langkah dari dapur sampai didaur ulang"
            description="Alurnya sederhana dan bisa dimulai tanpa peralatan khusus. Yang paling penting adalah konsistensi memilah sejak dari sumbernya."
            className="max-w-2xl"
          />
          <p className="shrink-0 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">
            Rata-rata 5 kg sampah terpilah
            <br className="hidden sm:block" /> sudah bisa dijemput ke rumah.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5"
            >
              <span className="absolute right-5 top-4 text-4xl font-extrabold text-slate-100 transition-colors group-hover:text-emerald-100">
                0{index + 1}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                <step.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
