import Section from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Passport Alliance website.',
}

export default function PrivacyPage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">Privacy Policy</h1>
          <p className="text-pa-light-muted mb-4">
            <em>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</em>
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <div className="p-4 bg-pa-blue/10 border border-pa-blue/30 rounded-lg mb-8">
            <p className="text-pa-light text-sm">
              <strong>Notice:</strong> This is a placeholder privacy policy. It requires review and completion by legal counsel before production use.
            </p>
          </div>

          <h2 className="text-xl font-bold text-pa-light mb-4">Information We Collect</h2>
          <p className="text-pa-light-muted mb-6">
            This section to be completed with detailed information about data collection practices.
          </p>

          <h2 className="text-xl font-bold text-pa-light mb-4">How We Use Information</h2>
          <p className="text-pa-light-muted mb-6">
            This section to be completed with detailed information about data usage.
          </p>

          <h2 className="text-xl font-bold text-pa-light mb-4">Data Sharing</h2>
          <p className="text-pa-light-muted mb-6">
            This section to be completed with detailed information about data sharing practices.
          </p>

          <h2 className="text-xl font-bold text-pa-light mb-4">Security</h2>
          <p className="text-pa-light-muted mb-6">
            This section to be completed with security practice details.
          </p>

          <h2 className="text-xl font-bold text-pa-light mb-4">Contact Us</h2>
          <p className="text-pa-light-muted mb-6">
            For privacy-related inquiries, please contact us at: operations@aetherpro.us
          </p>
        </div>
      </Section>
    </>
  )
}
