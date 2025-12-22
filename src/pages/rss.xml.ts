import rss from '@astrojs/rss';
import { getAllBlogPosts } from '../lib/content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getAllBlogPosts();
  
  return rss({
    title: 'byteco.dev Blog',
    description: 'Articles about web development, programming, and technology',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
