import { parseFrontmatter } from './frontmatter'

const files = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

function parseDate(value) {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

export function formatDate(value) {
  const date = parseDate(value)
  if (!date) return value ?? ''
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function getPosts() {
  return Object.entries(files)
    .map(([path, source]) => {
      const { data, content } = parseFrontmatter(source)
      const slug = slugFromPath(path)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        draft: Boolean(data.draft) || slug.startsWith('_'),
        content,
      }
    })
    .filter((post) => !post.draft)
    .sort((a, b) => {
      const left = parseDate(a.date)?.getTime() ?? 0
      const right = parseDate(b.date)?.getTime() ?? 0
      return right - left
    })
}

export function getPost(slug) {
  return getPosts().find((post) => post.slug === slug) ?? null
}
