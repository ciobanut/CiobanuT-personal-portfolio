import { getCollection, type CollectionEntry } from 'astro:content'

export const PAGE_SIZE = 30

/** Parse a worklog `pubDate` ('DD-MM-YYYY') into a local Date (no timezone shift). */
function parseDate(value: string): Date {
	const [d, m, y] = value.split('-').map(Number)
	return new Date(y, m - 1, d)
}

/** Sort worklog entries newest-first by their `pubDate`. */
export function sortWorklogsDesc(
	entries: CollectionEntry<'worklogs'>[]
): CollectionEntry<'worklogs'>[] {
	return [...entries].sort(
		(a, b) => parseDate(b.data.pubDate).getTime() - parseDate(a.data.pubDate).getTime()
	)
}

/** Fetch all worklogs, sorted newest-first. */
export async function getSortedWorklogs(): Promise<CollectionEntry<'worklogs'>[]> {
	return sortWorklogsDesc(await getCollection('worklogs'))
}
