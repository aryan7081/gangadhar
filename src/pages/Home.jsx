import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRightIcon, SocialIcon } from '../components/Icons'
import { site } from '../data/site'
import { formatDate, getPosts } from '../lib/posts'

function StatusDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
    </span>
  )
}

export function Home() {
  const posts = getPosts().slice(0, 3)

  useEffect(() => {
    document.title = site.name
    if (window.location.hash) {
      setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <div className="mx-auto max-w-5xl px-6">

      {/* ── Hero ── */}
      <section className="flex flex-col justify-center pb-20 pt-16 sm:pt-24">
        <div className="flex items-center gap-2.5 text-sm text-text-secondary">
          <StatusDot />
          <span>Available for opportunities</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-heading sm:text-6xl">
          Hi, I&apos;m{' '}
          <span className="text-accent">Gangadhar</span>
        </h1>

        <p className="mt-4 max-w-lg text-lg text-text-secondary sm:text-xl">
          {site.tagline}
        </p>

        <div className="mt-8 flex items-center gap-4">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-text-secondary transition-all hover:border-border-hover hover:text-accent"
              aria-label={s.label}
            >
              <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="grid grid-cols-2 gap-4 pb-20 sm:grid-cols-4">
        {site.highlights.map((h) => (
          <div
            key={h.label}
            className="rounded-xl border border-border bg-card p-5 text-center"
          >
            <p className="font-mono text-2xl font-bold text-accent">{h.value}</p>
            <p className="mt-1 text-xs text-text-secondary">{h.label}</p>
          </div>
        ))}
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="scroll-mt-24 pb-20">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-text-secondary">
          Experience
        </h2>
        <div className="space-y-4">
          {site.experience.map((job) => (
            <div
              key={`${job.org}-${job.role}`}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-border-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-heading">{job.role}</h3>
                  <p className="text-sm text-accent">{job.org}</p>
                </div>
                <span className="rounded-full border border-border px-3 py-0.5 font-mono text-xs text-text-secondary">
                  {job.dates}
                </span>
              </div>
              <p className="mt-3 text-sm text-text-secondary">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="scroll-mt-24 pb-20">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-text-secondary">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-border-hover"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-dim font-mono text-sm font-bold text-accent">
                  {project.title[0]}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-secondary transition-colors hover:text-accent"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
              <h3 className="mt-4 font-semibold text-heading">{project.title}</h3>
              <p className="text-xs text-accent">{project.subtitle}</p>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="pb-20">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-text-secondary">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Blog preview ── */}
      {posts.length > 0 && (
        <section className="pb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
              Recent Posts
            </h2>
            <Link
              to="/blog"
              className="font-mono text-xs text-accent transition-colors hover:text-accent/80"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-border-hover"
              >
                <div>
                  <h3 className="font-semibold text-heading transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="mt-0.5 text-sm text-text-secondary">{post.description}</p>
                  )}
                </div>
                <time className="hidden shrink-0 font-mono text-xs text-text-secondary sm:block">
                  {formatDate(post.date)}
                </time>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
