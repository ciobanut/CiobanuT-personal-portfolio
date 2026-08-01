import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const works = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/works',
		generateId: ({ entry }) => entry.replace(/\.\w+$/, '')
	}),
	schema: z.object({
		title: z.string(),
		isDraft: z.boolean().default(false),
		pubDate: z.string().transform((str) => new Date(str)),
		year: z.number(),
		description: z.string(),
		client: z.object({
			name: z.string(),
			logo: z.string()
		}),
		business_niche: z.string(),
		deadline: z.string(),
		image: z
			.object({
				src: z.string(),
				alt: z.string().optional(),
				caption: z.string().optional()
			})
			.optional(),
		stacks: z.array(z.string()),
		languages: z.array(z.string()).optional(),
		review: z
			.object({
				author: z.string().optional(),
				avatar: z.string().optional(),
				message: z.string().optional()
			})
			.optional()
	})
})

const worklogs = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/worklogs',
		generateId: ({ entry }) => entry.replace(/\.\w+$/, '')
	}),
	schema: z.object({
		title: z.string(),
		pubDate: z.string(),
		description: z.string().optional(),
		stack: z.array(z.string()).optional(),
		project: z.string().optional()
	})
})

const blog = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/blog',
		generateId: ({ entry }) => entry.replace(/\.\w+$/, '')
	}),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		isDraft: z.boolean().default(false),
		pubDate: z.string().transform((str) => {
			const [d, m, y] = str.split('-')
			return new Date(Number(y), Number(m) - 1, Number(d))
		}),
		image: z
			.object({
				src: z.string(),
				alt: z.string().optional()
			})
			.optional(),
		tags: z.array(z.string()).optional()
	})
})

export const collections = { works, worklogs, blog }
