import { getCollection, type CollectionEntry } from 'astro:content';

export async function getSortedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
