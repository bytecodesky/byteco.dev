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
