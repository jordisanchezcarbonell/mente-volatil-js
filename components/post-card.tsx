import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CategoryBadge } from "./category-badge"

export type PostCardData = {
  slug: string
  title: string
  excerpt: string
  categories: string[]
  coverImage?: string
  date?: string
}

export function PostCard({ post }: { post: PostCardData }) {
  return (
    <Link href={`/post/${post.slug}`} className="block">
      <Card className="h-full border border-gray-200 transition-shadow hover:shadow-sm">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg bg-gray-50">
          <Image
            src={post.coverImage ?? "/placeholder.svg?height=360&width=640&query=cover%20image%20for%20post"}
            alt={post.title}
            width={640}
            height={360}
            className="h-full w-full object-cover"
          />
        </div>
        <CardHeader className="space-y-2">
          <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
          <div className="flex flex-wrap gap-1.5">
            {post.categories?.map((c) => (
              <CategoryBadge key={c} slug={c} />
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
