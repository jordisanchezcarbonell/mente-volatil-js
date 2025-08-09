// Sin CMS: todo desde mock-data
import {
  MOCK_POSTS,
  MOCK_RECAPS,
  MOCK_SETTINGS,
  type Post as MockPost,
  type Recap as MockRecap,
  type Settings as MockSettings,
} from "./mock-data"

export type Post = MockPost
export type Recap = MockRecap
export type Settings = MockSettings

export async function fetchSettings(): Promise<Settings> {
  return MOCK_SETTINGS
}
export async function fetchFeaturedPost(): Promise<Post | null> {
  return MOCK_POSTS.find((p) => p.featured) ?? MOCK_POSTS[0] ?? null
}
export async function fetchRecentPosts(limit = 10): Promise<Post[]> {
  return MOCK_POSTS.filter((p) => !p.featured).slice(0, limit)
}
export async function fetchPostsByCategory(category: string): Promise<Post[]> {
  return MOCK_POSTS.filter((p) => p.categories.includes(category as any))
}
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  return MOCK_POSTS.find((p) => p.slug === slug) ?? null
}
export async function fetchRecaps(): Promise<Recap[]> {
  return MOCK_RECAPS
}
export async function fetchRecapBySlug(slug: string): Promise<Recap | null> {
  return MOCK_RECAPS.find((d) => d.slug === slug) ?? null
}
