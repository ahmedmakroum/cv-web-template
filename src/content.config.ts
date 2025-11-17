import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    author: z.string().default('Your Name'),
    readTime: z.string(),
    categories: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    githubUrl: z.string().optional(),
    liveDemo: z.string().optional(),
    liveUrl: z.string().optional(),
    category: z.string().optional(),
    featured: z.boolean().default(false),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    status: z.enum(['In Progress', 'Completed', 'Archived']).default('Completed'),
    client: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      publishTime: z.string().optional(),
      tags: z.array(z.string()),
      image: z.string().optional(),
      author: z.string().default('Your Name'),
      readTime: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
