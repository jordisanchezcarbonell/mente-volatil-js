import { fetchFeaturedPost, fetchRecentPosts, fetchRecaps } from "@/lib/data"

export async function GET(request: Request) {
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || new URL(request.url).origin.replace(/\/$/, "")

  const [featured, recent, recaps] = await Promise.all([fetchFeaturedPost(), fetchRecentPosts(50), fetchRecaps()])

  const urls = new Set<string>()
  const push = (path: string) => urls.add(`${origin}${path}`)

  push("/")
  push("/categoria/inversion")
  push("/categoria/nfl")
  push("/categoria/ufc")
  push("/resumen-domingo")
  push("/acerca")

  if (featured) push(`/post/${featured.slug}`)
  recent.forEach((p) => push(`/post/${p.slug}`))
  recaps.forEach((r) => push(`/resumen-domingo/${r.slug}`))

  const now = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(urls)
  .map(
    (loc) => `<url>
  <loc>${loc}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>${loc.endsWith("/") ? "0.8" : "0.6"}</priority>
</url>`,
  )
  .join("\n")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
