import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['学术前沿', '产业界', '开源社区', '财经信息']),
    summary: z.string().optional(),
  }),
});

const tutorials = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
  }),
});

export const collections = { news, tutorials, research };
