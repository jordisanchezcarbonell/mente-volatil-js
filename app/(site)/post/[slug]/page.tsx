import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { fetchPostBySlug } from "@/lib/data"
import { CategoryTag } from "@/components/category-tag"
import { PortableText } from "@portabletext/react"
import { formatDate } from "@/lib/format-date"
import { estimateReadingTime, extractPlainText } from "@/lib/reading-time"
import { ShareBar } from "@/components/share-bar"
import { NewsletterSignup } from "@/components/newsletter-signup"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchPostBySlug(params.slug)
  if (!post) return {}
  const title = `${post.title} — MenteVolátil`
  const description = post.excerpt ?? "Artículo de MenteVolátil"
  const image = ("coverImage" in post && post.coverImage) || "/placeholder.svg?height=630&width=1200"
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

export default async function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = await fetchPostBySlug(params.slug)
  if (!post) notFound()

  const categories: string[] = "categories" in post ? (post.categories as string[]) : []
  const authorName = "author" in post ? post.author?.name : "MenteVolátil"

  const plainText =
    "content" in post && post.content
      ? extractPlainText((post as any).content)
      : (post as any).contentHtml
        ? String((post as any).contentHtml).replace(/<[^>]+>/g, " ")
        : String(post.excerpt || "")
  const readingMinutes = estimateReadingTime(plainText)
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "")
  const shareUrl = `${base}/post/${params.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: authorName },
    image: "coverImage" in post && post.coverImage ? [post.coverImage] : undefined,
    articleSection: categories,
    inLanguage: "es-ES",
  }

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="font-serif text-3xl md:text-5xl leading-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <span>{post.date ? formatDate(post.date) : null}</span>
          <span>{"\u2022"}</span>
          <span>Por {authorName}</span>
          <span>{"\u2022"}</span>
          <span>{readingMinutes} min de lectura</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <CategoryTag key={c} slug={c} />
          ))}
        </div>
      </header>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {"coverImage" in post && post.coverImage ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={post.coverImage || "/placeholder.svg?height=720&width=1280&query=cover%20image"}
            alt={post.title}
            width={1280}
            height={720}
            className="h-full w-full object-cover"
            priority={true}
          />
        </div>
      ) : null}

      <div className="prose prose-lg prose-gray max-w-none prose-headings:font-serif prose-img:rounded-lg prose-a:underline-offset-2 hover:prose-a:text-gray-900">
        {"content" in post && post.content ? (
          <PortableText value={(post as any).content} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: (post as any).contentHtml }} />
        )}
      </div>
      <ShareBar title={post.title} url={shareUrl} />
      <div className="pt-6">
        <NewsletterSignup />
      </div>
    </article>
  )
}
