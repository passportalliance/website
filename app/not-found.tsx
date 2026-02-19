import Link from 'next/link'
import Section from '@/components/Section'
import CTA from '@/components/CTA'

export default function NotFound() {
  return (
    <Section className="pt-32 pb-20">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-pa-light mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-pa-light mb-4">Page Not Found</h2>
        <p className="text-pa-light-muted mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTA href="/" variant="primary">
            Go Home
          </CTA>
          <CTA href="/contact" variant="secondary">
            Contact Us
          </CTA>
        </div>
      </div>
    </Section>
  )
}
