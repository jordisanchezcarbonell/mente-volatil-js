import Link from "next/link"
import Image from "next/image"
import { CategoryTag } from "./category-tag"

export type Featured = {
  slug: string
  title: string
  excerpt: string
  coverImage?: string
  categories: string[]
}

export function FeaturedHero({ post }: { post: Featured }) {
  return (
    <section className="space-y-4">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-50">
        <Image
          src={post.coverImage ?? "/placeholder.svg?height=720&width=1280&query=featured%20cover%20image"}
          alt={post.title}
          width={1280}
          height={720}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {post.categories?.map((c) => (
            <CategoryTag key={c} slug={c} />
          ))}
        </div>
        <h1 className="font-serif text-3xl leading-tight md:text-5xl">{post.title}</h1>
        <p className="text-gray-700 text-base md:text-lg">{post.excerpt}</p>
        <Link href={`/post/${post.slug}`} className="text-gray-900 underline underline-offset-4">
          Leer más
        </Link>
      </div>
    </section>
  )
}
