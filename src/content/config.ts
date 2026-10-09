import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // 可选字段
    description: z.string().optional(),
  }),
});

export const collections = {
  writing,
};
