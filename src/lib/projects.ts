import { getCollection, type CollectionEntry } from 'astro:content'
import projectMapping from '../../.claude/project-mapping.json'

interface ProjectMapping {
	description?: string
	mappings: Record<string, string>
	/** GitHub full repo name (`owner/repo`) → project slug, for projects without a published work yet */
	repos?: Record<string, string>
	/** Project slug → user-friendly display name */
	display_names?: Record<string, string>
	rules?: string[]
}

const mapping = projectMapping as ProjectMapping

/** Normalize a GitHub full repo name for comparison (trim, lowercase, strip `.git`). */
export function normalizeRepo(repo: string): string {
	return repo
		.trim()
		.toLowerCase()
		.replace(/\.git$/, '')
}

// Registry of GitHub repos → project slug, keyed by normalized repo name.
// Only contains projects that have no published work in `src/content/works/` yet.
const registryRepos = new Map<string, string>()
for (const [repo, slug] of Object.entries(mapping.repos ?? {})) {
	registryRepos.set(normalizeRepo(repo), slug)
}

let worksPromise: Promise<CollectionEntry<'works'>[]> | null = null

function getWorks(): Promise<CollectionEntry<'works'>[]> {
	worksPromise ??= getCollection('works')
	return worksPromise
}

export interface ProjectRef {
	slug: string
	displayName: string
	/** Link to the work page — only when the project has a published work */
	href?: string
}

/**
 * Resolve a GitHub repo (`owner/repo`) to a project.
 * Prefers a published work (from its `github_repos`), then falls back to the registry.
 */
export async function resolveRepo(repo: string): Promise<ProjectRef | undefined> {
	const normalized = normalizeRepo(repo)

	for (const work of await getWorks()) {
		if ((work.data.github_repos ?? []).some((r) => normalizeRepo(r) === normalized)) {
			return { slug: work.id, displayName: work.data.title, href: `/works/${work.id}` }
		}
	}

	const slug = registryRepos.get(normalized)
	if (slug) {
		return { slug, displayName: mapping.display_names?.[slug] ?? slug }
	}

	return undefined
}

/** Humanize a raw repo name as a last-resort display name (e.g. `journey-predictor-api` → "Journey Predictor Api"). */
export function humanizeRepo(repo: string): string {
	const name = repo.split('/').pop() ?? repo
	return name.replace(/[-_.]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Best-effort user-friendly display name for a repo — never throws. */
export async function displayNameForRepo(repo: string): Promise<string> {
	const resolved = await resolveRepo(repo)
	return resolved?.displayName ?? humanizeRepo(repo)
}

/** Resolve every repo of a worklog to its project(s). */
export async function resolveWorklogProjects(repos: string[] = []): Promise<ProjectRef[]> {
	const resolved = await Promise.all(repos.map((r) => resolveRepo(r)))
	return resolved.filter((p): p is ProjectRef => Boolean(p))
}
