import { defineCollection, z } from 'astro:content';

const stories = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  stories,
};