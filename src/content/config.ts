import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['学术前沿', '产业界', '开源社区', '财经信息']),
    summary: z.string().optional(),
    sourceUrl: z.string().url('链接到原始文章的 URL'),
    sourceName: z.string().optional(), // 来源名称，如 "OpenAI 官方博客"
    author: z.string().optional(), // 作者
    readTime: z.string().optional(), // 阅读时间，如 "5 分钟"
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
