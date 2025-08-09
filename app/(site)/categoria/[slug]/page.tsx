import { notFound } from "next/navigation"
import { fetchPostsByCategory } from "@/lib/data"
import { PostListItem } from "@/components/post-list-item"
import { labelForCategory } from "@/lib/category-colors"

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const posts = await fetchPostsByCategory(params.slug)
  if (!posts.length) notFound()

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl">{labelForCategory(params.slug)}</h1>
        <p className="text-gray-600">Artículos en {labelForCategory(params.slug)}.</p>
      </header>

      <section className="divide-y">
        {posts.map((p) => (
          <div key={p.id} className="border-t">
            <PostListItem
              post={{
                slug: p.slug,
                title: p.title,
                excerpt: p.excerpt,
                coverImage: p.coverImage,
                categories: p.categories,
                date: p.date,
                author: { name: p.author.name },
              }}
            />
          </div>
        ))}
      </section>
    </div>
  )
}
