/**
 * Build-time link validator between worklogs and projects.
 *
 * The canonical key linking a worklog to a project is the GitHub full repo name
 * (`owner/repo`). This script fails the build when a link is wrong, so a
 * mismatch is loud instead of silently dropping the "Related Work Logs" section.
 *
 * Rules (see docs/worklog-project-linking-spec.md):
 *  1. Every worklog `github_repos` entry must resolve to a known project:
 *     a published work (via its `github_repos`) or a `repos` registry entry
 *     in `.claude/project-mapping.json`.
 *  2. Every work `github_repos` entry must be claimed by exactly one work.
 *  3. A repo that resolves only to a registry project (e.g. behavora) is valid —
 *     it simply doesn't appear on any work page until a work is published.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import yaml from 'js-yaml'

const ROOT = process.cwd()

function parseFrontmatter(filePath) {
	const raw = readFileSync(filePath, 'utf8')
	if (!raw.startsWith('---')) return {}
	const end = raw.indexOf('\n---', 3)
	if (end === -1) return {}
	try {
		return yaml.load(raw.slice(3, end).trim()) ?? {}
	} catch (err) {
		return { __parseError: String(err) }
	}
}

function normalizeRepo(repo) {
	return String(repo)
		.trim()
		.toLowerCase()
		.replace(/\.git$/, '')
}

const REPO_REGEX = /^[^/]+\/[^/]+$/
const errors = []

// Registry for projects without a published work yet
const registry = JSON.parse(readFileSync(join(ROOT, '.claude/project-mapping.json'), 'utf8'))
const registryRepos = new Set(Object.keys(registry.repos ?? {}).map(normalizeRepo))

// Collect works' github_repos and check for ambiguity
const worksDir = join(ROOT, 'src/content/works')
const workRepos = new Map() // normalized repo -> work id
for (const file of readdirSync(worksDir)) {
	if (!file.endsWith('.md')) continue
	const id = file.replace(/\.md$/, '')
	const fm = parseFrontmatter(join(worksDir, file))
	if (fm.__parseError) {
		errors.push(`Works ${file}: frontmatter parse error: ${fm.__parseError}`)
		continue
	}
	for (const repo of fm.github_repos ?? []) {
		const normalized = normalizeRepo(repo)
		if (!REPO_REGEX.test(normalized)) {
			errors.push(`Works ${file}: '${repo}' is not a valid owner/repo`)
			continue
		}
		if (workRepos.has(normalized) && workRepos.get(normalized) !== id) {
			errors.push(
				`Ambiguous repo '${repo}' claimed by works: ${workRepos.get(normalized)} and ${id}`
			)
		} else {
			workRepos.set(normalized, id)
		}
	}
}

// Validate every worklog repo resolves to a known project
const worklogsDir = join(ROOT, 'src/content/worklogs')
for (const file of readdirSync(worklogsDir)) {
	if (!file.endsWith('.md')) continue
	const id = file.replace(/\.md$/, '')
	const fm = parseFrontmatter(join(worklogsDir, file))
	if (fm.__parseError) {
		errors.push(`Worklog ${file}: frontmatter parse error: ${fm.__parseError}`)
		continue
	}
	const repos = fm.github_repos ?? []
	if (!Array.isArray(repos)) {
		errors.push(`Worklog ${file}: github_repos must be an array`)
		continue
	}
	for (const repo of repos) {
		const normalized = normalizeRepo(repo)
		if (!REPO_REGEX.test(normalized)) {
			errors.push(`Worklog ${file}: '${repo}' is not a valid owner/repo`)
			continue
		}
		const known = workRepos.has(normalized) || registryRepos.has(normalized)
		if (!known) {
			errors.push(
				`Worklog ${file}: repo '${repo}' does not resolve to any work or registry project`
			)
		}
	}
}

if (errors.length > 0) {
	console.error('✖ Worklog-project link validation failed:')
	for (const e of errors) console.error(`  - ${e}`)
	process.exit(1)
}

console.log('✓ Worklog-project links valid')
