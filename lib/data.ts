import groq from 'groq';
import { sanityClient, sanityConfigured } from './sanity';
import {
  MOCK_POSTS,
  MOCK_RECAPS,
  MOCK_SETTINGS,
  type Post as MockPost,
  type Recap as MockRecap,
  type Settings as MockSettings,
} from './mock-data';

export type Post = MockPost;
export type Recap = MockRecap;
export type Settings = MockSettings;

export async function fetchSettings(): Promise<Settings> {
  if (!sanityConfigured() || !sanityClient) return MOCK_SETTINGS;
  const data = await sanityClient.fetch(
    groq`*[_type == "settings"][0]{ siteTitle, description, accent }`
  );
  return data ?? MOCK_SETTINGS;
}

export async function fetchFeaturedPost(): Promise<Post | null> {
  console.log('Fetching featured post...');

  if (!sanityConfigured() || !sanityClient) {
    return MOCK_POSTS.find((p) => p.featured) ?? MOCK_POSTS[0] ?? null;
  }
  console.log('Fetching from Sanity...');
  const data = await sanityClient.fetch(
    groq`*[_type == "post" && featured == true] | order(date desc)[0]{
      "id": _id,
      "slug": slug.current,
      title,
      excerpt,
      "date": coalesce(date, _updatedAt),
      "coverImage": coalesce(coverImage.asset->url, ""),
      "author": { "id": author->_id, "name": author->name, "slug": author->slug.current },
      "categories": categories[]->slug.current,
      "contentHtml": "",
      featured
    }`
  );
  return data ?? null;
}

export async function fetchRecentPosts(limit = 10): Promise<Post[]> {
  if (!sanityConfigured() || !sanityClient) {
    return MOCK_POSTS.filter((p) => !p.featured).slice(0, limit);
  }
  const data = await sanityClient.fetch(
    groq`*[_type == "post"] | order(date desc){
      "id": _id,
      "slug": slug.current,
      title,
      excerpt,
      "date": coalesce(date, _updatedAt),
      "coverImage": coalesce(coverImage.asset->url, ""),
      "author": { "id": author->_id, "name": author->name, "slug": author->slug.current },
      "categories": categories[]->slug.current,
      "contentHtml": "",
      featured
    }`
  );
  return data.filter((p: any) => !p.featured).slice(0, limit);
}

export async function fetchPostsByCategory(category: string): Promise<Post[]> {
  if (!sanityConfigured() || !sanityClient) {
    return MOCK_POSTS.filter((p) => p.categories.includes(category as any));
  }
  const data = await sanityClient.fetch(
    groq`*[_type == "post" && $cat in categories[]->slug.current] | order(date desc){
      "id": _id,
      "slug": slug.current,
      title,
      excerpt,
      "date": coalesce(date, _updatedAt),
      "coverImage": coalesce(coverImage.asset->url, ""),
      "author": { "id": author->_id, "name": author->name, "slug": author->slug.current },
      "categories": categories[]->slug.current,
      "contentHtml": "",
      featured
    }`,
    { cat: category }
  );
  return data;
}

export async function fetchPostBySlug(slug: string): Promise<any | null> {
  if (!sanityConfigured() || !sanityClient) {
    return MOCK_POSTS.find((p) => p.slug === slug) ?? null;
  }
  const data = await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      "id": _id,
      "slug": slug.current,
      title,
      excerpt,
      "date": coalesce(date, _updatedAt),
      "coverImage": coalesce(coverImage.asset->url, ""),
      "author": { "id": author->_id, "name": author->name, "slug": author->slug.current },
      "categories": categories[]->slug.current,
      content
    }`,
    { slug }
  );
  return data ?? null;
}

export async function fetchRecaps(): Promise<Recap[]> {
  if (!sanityConfigured() || !sanityClient) return MOCK_RECAPS;
  const data = await sanityClient.fetch(
    groq`*[_type == "recap"] | order(weekOf desc){
      "id": _id,
      "slug": slug.current,
      title,
      "date": weekOf,
      "marketsHtml": "",
      "nflHtml": "",
      "ufcHtml": "",
      "extrasHtml": ""
    }`
  );
  return data;
}

export async function fetchRecapBySlug(slug: string): Promise<any | null> {
  if (!sanityConfigured() || !sanityClient) {
    return MOCK_RECAPS.find((d) => d.slug === slug) ?? null;
  }
  const data = await sanityClient.fetch(
    groq`*[_type == "recap" && slug.current == $slug][0]{
      "id": _id,
      "slug": slug.current,
      title,
      "date": weekOf,
      markets,
      nfl,
      ufc,
      extras
    }`,
    { slug }
  );
  return data ?? null;
}
