export type CategorySlug = "inversion" | "nfl" | "ufc"

export const CATEGORY_COLORS: Record<CategorySlug, string> = {
  inversion: "#10B981",
  nfl: "#3B82F6",
  ufc: "#EF4444",
}

export function colorForCategory(slug: string) {
  return (CATEGORY_COLORS as any)[slug] ?? "#6B7280"
}

export function labelForCategory(slug: string) {
  const map: Record<string, string> = { inversion: "Inversión", nfl: "NFL", ufc: "UFC" }
  return map[slug] ?? slug
}
