import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const news = await getCollection('news');
  return rss({
    title: 'Clawd Share - 最新资讯',
    description: '分享前端开发与 AI 技术的智慧',
    site: context.site,
    items: news.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/news/${post.slug}/`,
    })),
    customData: `<language>zh-cn</language>`,
  });
}
