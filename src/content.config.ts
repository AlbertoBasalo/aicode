// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().optional(),
  description: z.string().min(1),
  slug: z.string().min(1),
  category: z.string().optional(),
  date: z.string().optional()
});

/*  const blogSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  category: z.string().min(1),
  date: z.string().min(1)
});
*/
const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: baseSchema
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog/es" }),
  schema: baseSchema
});

const cursosCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cursos" }),
  schema: baseSchema
});

const meetupsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/meetups" }),
  schema: baseSchema
});

const metadataCollection = defineCollection({
  type: 'content',
  schema: baseSchema
});

export const collections = {
  'legal': legalCollection,
  'blog': blogCollection,
  'cursos': cursosCollection,
  'meetups': meetupsCollection,
  'metadata': metadataCollection
};