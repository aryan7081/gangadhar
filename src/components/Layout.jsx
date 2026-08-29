import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-3 focus:py-2 focus:text-accent"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content" className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
