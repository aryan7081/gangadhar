import { site } from '../data/site'
import { SocialIcon } from './Icons'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              className="text-text-secondary transition-colors hover:text-accent"
              aria-label={s.label}
            >
              <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
