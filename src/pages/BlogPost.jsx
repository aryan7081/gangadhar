import { useEffect } from 'react'
import Markdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { ArrowLeftIcon } from '../components/Icons'
import { formatDate, getPost } from '../lib/posts'
import { NotFound } from './NotFound'

export function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  useEffect(() => {
    if (post) document.title = `${post.title} — Gangadhar Yadav`
  }, [post])

  if (!post) return <NotFound />

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
      >
        <ArrowLeftIcon className="h-3.5 w-3.5" />
        Back to blog
      </Link>

      <header className="mt-8">
        <time className="font-mono text-xs text-text-secondary" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-heading sm:text-4xl">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose-post mt-12">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </div>
    </article>
  )
}
