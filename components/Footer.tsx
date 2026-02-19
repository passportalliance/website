import Link from 'next/link'
import { config, navigation } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-pa-bg-secondary border-t border-pa-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/brand/passport-alliance-mark.svg"
                alt=""
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="font-semibold text-lg text-pa-light">Passport Alliance</span>
            </Link>
            <p className="text-pa-light-muted text-sm mb-6 max-w-xs">
              The Identity Standard for AI Agents. An open standard for verifiable identity, scoped authorization, and full accountability.
            </p>
            <div className="flex gap-4">
              {config.githubUrl && (
                <a
                  href={config.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pa-light-muted hover:text-pa-light transition-colors"
                  aria-label="GitHub"
                >
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="font-semibold text-pa-light mb-4">Standard</h3>
            <ul className="space-y-2">
              <li><Link href="/standard" className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">Overview</Link></li>
              <li><Link href="/developers" className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">For Developers</Link></li>
              <li><Link href={config.docsUrl} className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">Full Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-pa-light mb-4">Ecosystem</h3>
            <ul className="space-y-2">
              <li><Link href="/issuers" className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">Issuers</Link></li>
              <li><Link href="/reference-implementation" className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">Reference Implementation</Link></li>
              <li><Link href="/governance" className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">Governance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-pa-light mb-4">Organization</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-pa-light-muted hover:text-pa-light transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pa-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-pa-light-muted">
            &copy; {new Date().getFullYear()} Passport Alliance. All rights reserved.
          </p>
          <p className="text-sm text-pa-light-muted">
            Open standard in development with reference implementation.
          </p>
        </div>
      </div>
    </footer>
  )
}
