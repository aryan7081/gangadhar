import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function NotFound() {
  useEffect(() => {
    document.title = '404 — Gangadhar Yadav'
  }, [])

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-mono text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-xl font-semibold text-heading">Page not found</h1>
      <p className="mt-2 text-text-secondary">The page you are looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-8 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
      >
        Go home
      </Link>
    </div>
  )
}
