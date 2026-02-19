'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navigation, config } from '@/lib/config'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pa-bg/95 backdrop-blur-sm border-b border-pa-border">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Passport Alliance Home">
          <img
            src="/brand/passport-alliance-mark.svg"
            alt=""
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <span className="font-semibold text-lg text-pa-light">Passport Alliance</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-pa-light-muted hover:text-pa-light transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={config.docsUrl}
            className="text-pa-light-muted hover:text-pa-light transition-colors text-sm font-medium"
          >
            Docs
          </Link>
          <Link
            href={config.docsUrl}
            className="btn btn-primary text-sm"
          >
            Read APIS Docs
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-pa-light-muted hover:text-pa-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-pa-bg-secondary border-t border-pa-border"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-pa-light-muted hover:text-pa-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-pa-border my-2" />
            <Link
              href={config.docsUrl}
              className="text-pa-light-muted hover:text-pa-light transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href={config.docsUrl}
              className="btn btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Read APIS Docs
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
