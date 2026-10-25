import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.string(),
    type: z.enum(["Research", "Academic", "Industry", "Thesis"]),
    cover: z.object({ src: z.string().optional(), alt: z.string() }).optional(),
    facts: z
      .array(z.object({ label: z.string(), value: z.union([z.string(), z.array(z.string())]) }))
      .default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    figures: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    gallery: z
      .array(
        z.object({
          title: z.string(),
          text: z.string().optional(),
          images: z.array(z.object({ src: z.string().optional(), caption: z.string() })),
        })
      )
      .default([]),
  }),
});

export const collections = { projects };