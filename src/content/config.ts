import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    thumbnail: z.string(),
    readingTime: z.string(),
  }),
});

export const collections = { blog };
