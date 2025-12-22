import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;
export type Note = CollectionEntry<'notes'>;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getAllNotes(): Promise<Note[]> {
  const notes = await getCollection('notes', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getAllTags(): Promise<Map<string, number>> {
  const [posts, notes] = await Promise.all([getAllBlogPosts(), getAllNotes()]);
  const tagCounts = new Map<string, number>();
  
  [...posts, ...notes].forEach((item) => {
    item.data.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });
  
  return tagCounts;
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.data.tags.includes(tag));
}

export async function getNotesByTag(tag: string): Promise<Note[]> {
  const notes = await getAllNotes();
  return notes.filter((note) => note.data.tags.includes(tag));
}

export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit = 3): BlogPost[] {
  const currentTags = new Set(currentPost.data.tags);
  
  return allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const commonTags = post.data.tags.filter((tag) => currentTags.has(tag)).length;
      return { post, commonTags };
    })
    .filter(({ commonTags }) => commonTags > 0)
    .sort((a, b) => b.commonTags - a.commonTags)
    .slice(0, limit)
    .map(({ post }) => post);
}
