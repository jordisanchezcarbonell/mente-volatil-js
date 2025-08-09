import { getCategoryMeta } from "@/lib/categories"
import { cn } from "@/lib/utils"

export function CategoryBadge({ slug, className }: { slug: string; className?: string }) {
  const meta = getCategoryMeta(slug)
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-white ring-1 ring-black/5",
        className,
      )}
      style={{ backgroundColor: meta.color }}
    >
      {meta.label}
    </span>
  )
}
