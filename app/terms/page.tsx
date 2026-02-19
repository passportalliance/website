import Section from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for the Passport Alliance website.',
}

export default function TermsPage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">Terms of Service</h1>
          <p className="text-pa-light-muted mb-4">
            <em>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</em>
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <div className="p-4 bg-pa-blue/10 border border-pa-blue/30 rounded-lg mb-8">
            <p className="text-pa-light text-sm">
              <strong>Notice:</strong> This is a placeholder terms of service. It requires review and completion by legal counsel before production use.
            </p>
          </div>

          <h2 className="text-xl font-bold text-pa-light mb-4">Acceptance of Terms</h2>
          <p className="text-pa-light-muted mb-6">
            This section to be completed with terms of service acceptance details.
          </p>

          <h2 className="text-xl font-bold text-pa-light mb-4">Use of the Website</h2>
          <p className="text-pa-light-muted mb-6">
            This section to be completed with acceptable use details.
          </p>

          <h2 className="text-xl font-bold text-pa-light mb-4">Intellectual Property</h2>
          <p className="text-pa-light-muted mb-6">
            This section to be completed with IP-related details.
          </p>

          <h2 className="text-xl font-bold text-pa-light mb-4">Disclaimer</h2>
          <p className="text-pa-light-muted mb-6">
            This section to be completed with disclaimer details.
          </p>

          <h2 className="text-xl font-bold text-pa-light mb-4">Limitation of Liability</h2>
          <p className="text-pa-light-muted mb-6">
            This section to be completed with liability limitation details.
          </p>

          <h2 className="text-xl font-bold text-pa-light mb-4">Contact Us</h2>
          <p className="text-pa-light-muted mb-6">
            For terms-related inquiries, please contact us at: operations@aetherpro.us
          </p>
        </div>
      </Section>
    </>
  )
}
