import Image from 'next/image';
import Link from 'next/link';
import { CategoryTag } from './category-tag';
import { formatDate } from '@/lib/format-date';

export type PostListItemData = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  categories: string[];
  date?: string;
  author?: { name: string };
};

export function PostListItem({ post }: { post: PostListItemData }) {
  console.log('post.coverImage', post.coverImage);
  const cover = post.coverImage?.trim();
  return (
    <article className='py-6 flex gap-4'>
      <Link
        href={`/post/${post.slug}`}
        className='relative block h-24 w-40 flex-shrink-0 overflow-hidden rounded bg-gray-50'
      >
        <Image
          src={
            cover ||
            '/placeholder.svg?height=160&width=256&query=post%20thumbnail'
          }
          alt={post.title}
          width={256}
          height={160}
          className='h-full w-full object-cover'
        />
      </Link>
      <div className='min-w-0 flex-1'>
        <div className='flex flex-wrap gap-2'>
          {post.categories?.map((c) => (
            <CategoryTag key={c} slug={c} />
          ))}
        </div>
        <h3 className='font-serif text-xl leading-snug mt-1'>
          <Link href={`/post/${post.slug}`} className='hover:underline'>
            {post.title}
          </Link>
        </h3>
        <p className='text-sm text-gray-700 line-clamp-2'>{post.excerpt}</p>
        <div className='mt-1 text-xs text-gray-500'>
          {post.date ? <span>{formatDate(post.date)}</span> : null}{' '}
          {post.author?.name ? (
            <span>
              {'\u2022'} {post.author.name}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
