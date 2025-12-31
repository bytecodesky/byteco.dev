import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
  }),
});

const ctfs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    platform: z.string().optional(),
    description: z.string(),
    ctfSlug: z.string(),
    draft: z.boolean().default(false),
  }),
});

const writeups = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    ctf: z.string(),
    ctfSlug: z.string(),
    category: z.enum(['web', 'pwn', 'crypto', 'rev', 'forensics', 'misc']),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    points: z.number().optional(),
    draft: z.boolean().default(false),
    summary: z.string(),
  }),
});

export const collections = { blog, notes, ctfs, writeups };
