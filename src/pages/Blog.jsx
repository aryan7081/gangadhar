import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formatDate, getPosts } from '../lib/posts'

export function Blog() {
  const posts = getPosts()

  useEffect(() => {
    document.title = 'Blog — Gangadhar Yadav'
  }, [])

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">Blog</h1>
      <p className="mt-3 text-text-secondary">
        Notes on engineering, systems, and things I learn along the way.
      </p>

      {posts.length === 0 ? (
        <p className="mt-16 text-text-secondary">No posts yet.</p>
      ) : (
        <div className="mt-12 space-y-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-border-hover sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold text-heading transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-1 text-sm text-text-secondary">{post.description}</p>
                )}
                {post.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <time className="mt-3 shrink-0 font-mono text-xs text-text-secondary sm:mt-0 sm:ml-6">
                {formatDate(post.date)}
              </time>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
