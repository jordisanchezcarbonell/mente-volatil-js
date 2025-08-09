import { fetchFeaturedPost, fetchRecentPosts } from '@/lib/data';
import { FeaturedHero } from '@/components/featured-hero';
import { PostListItem } from '@/components/post-list-item';

export default async function HomePage() {
  const featured = await fetchFeaturedPost();
  const recent = await fetchRecentPosts(12);
  console.log('featured', featured);
  return (
    <div className='space-y-10'>
      {featured ? (
        <FeaturedHero
          post={{
            slug: featured.slug,
            title: featured.title,
            excerpt: featured.excerpt,
            coverImage: featured.coverImage,
            categories: featured.categories,
          }}
        />
      ) : null}

      <section aria-label='Artículos recientes' className='divide-y'>
        {recent.map((p) => (
          <div key={p.id} className='border-t'>
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
  );
}
