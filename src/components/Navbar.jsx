import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/#projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
]

function navClass({ isActive }) {
  return [
    'relative px-3 py-1.5 text-sm font-medium transition-colors',
    isActive
      ? 'text-accent'
      : 'text-text-secondary hover:text-text',
  ].join(' ')
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-border bg-surface/80 px-5 py-2.5 backdrop-blur-xl">
          <NavLink to="/" className="font-mono text-sm font-semibold tracking-tight text-accent">
            {'<GY />'}
          </NavLink>

          {/* Desktop */}
          <nav className="hidden items-center gap-1 sm:flex">
            {links.map((link) =>
              link.to.includes('#') ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-text sm:hidden"
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-surface/95 p-3 backdrop-blur-xl sm:hidden">
            {links.map((link) =>
              link.to.includes('#') ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-card hover:text-text"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive ? 'bg-accent-dim text-accent' : 'text-text-secondary hover:bg-card hover:text-text'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
