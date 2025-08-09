import { colorForCategory, labelForCategory } from "@/lib/category-colors"
import { cn } from "@/lib/utils"

export function CategoryTag({ slug, className }: { slug: string; className?: string }) {
  const color = colorForCategory(slug)
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] uppercase tracking-wide",
        className,
      )}
      style={{ borderColor: color, color }}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {labelForCategory(slug)}
    </span>
  )
}
