import { getCollection, type CollectionEntry } from 'astro:content';

export async function getSortedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPostsByTema(
  tema: string,
): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', post => {
    const temaData = post.data.tema;
    if (Array.isArray(temaData)) {
      return temaData.map(t => t.toLowerCase()).includes(tema.toLowerCase());
    }
    return temaData?.toLowerCase() === tema.toLowerCase();
  });
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
