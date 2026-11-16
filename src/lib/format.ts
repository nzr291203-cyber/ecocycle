export const CO2_PER_TREE_PER_YEAR_KG = 21;

const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("id-ID", {
  maximumFractionDigits: 1,
});

export function formatRupiah(value: number): string {
  return rupiahFormatter.format(value);
}

export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

export function formatWeight(value: number): string {
  return `${numberFormatter.format(value)} kg`;
}

export function formatCo2(value: number): string {
  return `${numberFormatter.format(value)} kg CO₂`;
}

export function treeEquivalent(co2Kg: number): number {
  return co2Kg / CO2_PER_TREE_PER_YEAR_KG;
}
