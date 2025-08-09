import type React from "react"
import { notFound } from "next/navigation"
import { fetchRecapBySlug } from "@/lib/data"
import { PortableText } from "@portabletext/react"
import { formatDate } from "@/lib/format-date"

export const revalidate = 3600

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="font-serif text-2xl">{title}</h2>
      <div className="prose prose-lg prose-gray max-w-none prose-headings:font-serif prose-img:rounded-lg">
        {children}
      </div>
    </section>
  )
}

export default async function RecapDetailPage({ params }: { params: { slug: string } }) {
  const recap = await fetchRecapBySlug(params.slug)
  if (!recap) notFound()
  const isSanity = "markets" in recap

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl md:text-5xl leading-tight">{recap.title}</h1>
        <p className="text-sm text-gray-600">{recap.date ? formatDate(recap.date) : null}</p>
      </header>

      <p className="text-gray-800">
        Hola — aquí tienes tu Resumen Dominical. Un vistazo claro y directo a la semana: mercados, NFL, UFC y algo
        extra.
      </p>

      <div className="grid grid-cols-1 gap-8">
        <Section title="Inversión">
          {isSanity ? (
            <PortableText value={recap.markets} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: recap.marketsHtml }} />
          )}
        </Section>
        <Section title="NFL">
          {isSanity ? <PortableText value={recap.nfl} /> : <div dangerouslySetInnerHTML={{ __html: recap.nflHtml }} />}
        </Section>
        <Section title="UFC">
          {isSanity ? <PortableText value={recap.ufc} /> : <div dangerouslySetInnerHTML={{ __html: recap.ufcHtml }} />}
        </Section>
        <Section title="Extra">
          {isSanity ? (
            <PortableText value={recap.extras} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: recap.extrasHtml }} />
          )}
        </Section>
      </div>
    </article>
  )
}
