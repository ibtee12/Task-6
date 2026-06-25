import { useState } from 'react'

const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ', 'Login']

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tight text-violet-600">
          DigiTools
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-violet-600"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Cart icon with count badge */}
          <button
            type="button"
            aria-label="Cart"
            className="relative text-slate-600 transition-colors hover:text-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-600 px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Get Started button (desktop) */}
          <a
            href="#get-started"
            className="hidden rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700 sm:inline-block"
          >
            Get Started
          </a>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-slate-700 lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? 'M6 18 18 6M6 6l12 12'
                    : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="space-y-1 border-t border-slate-100 px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-violet-600"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#get-started"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-full bg-violet-600 px-5 py-2 text-center text-sm font-semibold text-white sm:hidden"
            >
              Get Started
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Navbar
