import Link from "next/link"
import { fetchRecaps } from "@/lib/data"
import { formatDate } from "@/lib/format-date"

export const revalidate = 3600

export default async function RecapListPage() {
  const recaps = await fetchRecaps()

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl">Resumen Dominical</h1>
        <p className="text-gray-600">Cada domingo: Inversión, NFL, UFC y algo extra.</p>
      </header>

      <section className="divide-y">
        {recaps.map((r) => (
          <div key={r.id} className="border-t">
            <article className="py-5">
              <h3 className="font-serif text-xl">
                <Link href={`/resumen-domingo/${r.slug}`} className="hover:underline">
                  {r.title}
                </Link>
              </h3>
              <p className="text-xs text-gray-500">{r.date ? formatDate(r.date) : null}</p>
            </article>
          </div>
        ))}
      </section>
    </div>
  )
}
