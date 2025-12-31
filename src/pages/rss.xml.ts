import rss from '@astrojs/rss';
import { getAllBlogPosts } from '../lib/content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getAllBlogPosts();
  
  if (!context.site) {
    throw new Error('site configuration is required for RSS feed generation');
  }
  
  return rss({
    title: 'byteco.dev Blog',
    description: 'Articles about web development, programming, and technology',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
