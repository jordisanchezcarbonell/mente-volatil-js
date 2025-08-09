export type CategorySlug = "inversion" | "nfl" | "ufc"

export const CATEGORY_META: Record<CategorySlug, { label: string; color: string }> = {
  inversion: { label: "Inversión", color: "#10B981" },
  nfl: { label: "NFL", color: "#3B82F6" },
  ufc: { label: "UFC", color: "#EF4444" },
}

export function getCategoryMeta(slug: string) {
  const key = slug as CategorySlug
  return CATEGORY_META[key] ?? { label: slug, color: "#6B7280" }
}
