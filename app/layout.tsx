import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Passport Alliance | APIS v2.1 Agent Identity Standard',
    template: '%s | Passport Alliance',
  },
  description: 'Passport Alliance governs APIS v2.1, the open Agent Passport Issuance Standard for verifiable AI agent identity, mandates, trust anchors, profiles, and revocation.',
  keywords: ['APIS v2.1', 'Agent Passport Issuance Standard', 'AI identity', 'agent authorization', 'verifiable credentials', 'AI agents', 'delegation', 'Passport Alliance'],
  authors: [{ name: 'Passport Alliance' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://passportalliance.org',
    siteName: 'Passport Alliance',
    title: 'Passport Alliance | APIS v2.1 Agent Identity Standard',
    description: 'The open standards initiative and governing body behind APIS v2.1.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passport Alliance | APIS v2.1 Agent Identity Standard',
    description: 'The open standards initiative and governing body behind APIS v2.1.',
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
