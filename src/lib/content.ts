import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;
export type Note = CollectionEntry<'notes'>;
export type CTF = CollectionEntry<'ctfs'>;
export type Writeup = CollectionEntry<'writeups'>;

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

export async function getAllCTFs(): Promise<CTF[]> {
  const ctfs = await getCollection('ctfs', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
  return ctfs.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getAllWriteups(): Promise<Writeup[]> {
  const writeups = await getCollection('writeups', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
  return writeups.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getWriteupsByCTF(ctfSlug: string): Promise<Writeup[]> {
  const writeups = await getAllWriteups();
  return writeups.filter((writeup) => writeup.data.ctfSlug === ctfSlug);
}

export function groupWriteupsByCategory(writeups: Writeup[]): Map<string, Writeup[]> {
  const grouped = new Map<string, Writeup[]>();
  
  writeups.forEach((writeup) => {
    const category = writeup.data.category;
    if (!grouped.has(category)) {
      grouped.set(category, []);
    }
    grouped.get(category)!.push(writeup);
  });
  
  return grouped;
}
