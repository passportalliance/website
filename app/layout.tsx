import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Passport Alliance | The Identity Standard for AI Agents',
    template: '%s | Passport Alliance',
  },
  description: 'Passport Alliance is an open standard for verifiable AI agent identity, scoped authorization, and full accountability. Identity, Authorization, Accountability.',
  keywords: ['AI identity', 'agent authorization', 'verifiable credentials', 'digital identity', 'AI agents', 'delegation', 'PPAF'],
  authors: [{ name: 'Passport Alliance' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://passportalliance.org',
    siteName: 'Passport Alliance',
    title: 'Passport Alliance | The Identity Standard for AI Agents',
    description: 'An open standard for verifiable AI agent identity, scoped authorization, and full accountability.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passport Alliance | The Identity Standard for AI Agents',
    description: 'An open standard for verifiable AI agent identity, scoped authorization, and full accountability.',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://passportalliance.org" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
