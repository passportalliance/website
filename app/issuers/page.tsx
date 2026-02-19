import { config } from '@/lib/config'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become an Issuer',
  description: 'Learn about becoming an APIS credential issuer, including tier requirements, compliance expectations, and the path to recognition.',
}

export default function IssuersPage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">Become an Issuer</h1>
          <p className="text-xl text-pa-light-muted">
            Issuers are trusted authorities that issue verifiable credentials to principals and agents within the APIS framework.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Issuer Tier Model</h2>
          <p className="text-pa-light-muted mb-8">
            APIS defines a tiered model for issuers based on their trust level and verification requirements.
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-pa-teal/20 text-pa-teal text-sm font-semibold rounded">Tier 1</span>
                <h3 className="text-lg font-semibold text-pa-light">Foundational Issuers</h3>
              </div>
              <p className="text-pa-light-muted text-sm mb-4">
                Organizations that issue credentials to principals (humans or organizations) who then authorize agents. Requires basic identity verification.
              </p>
              <ul className="text-sm text-pa-light-muted space-y-1">
                <li>• Basic organizational verification</li>
                <li>• Standard credential issuance</li>
                <li>• Registry participation</li>
              </ul>
            </div>

            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-pa-blue/20 text-pa-blue text-sm font-semibold rounded">Tier 2</span>
                <h3 className="text-lg font-semibold text-pa-light">Accredited Issuers</h3>
              </div>
              <p className="text-pa-light-muted text-sm mb-4">
                Organizations with enhanced verification processes and compliance frameworks. May issue credentials for higher-risk use cases.
              </p>
              <ul className="text-sm text-pa-light-muted space-y-1">
                <li>• Enhanced due diligence</li>
                <li>• Compliance certification</li>
                <li>• Higher credential limits</li>
              </ul>
            </div>

            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-pa-blue/20 text-pa-blue text-sm font-semibold rounded">Tier 3</span>
                <h3 className="text-lg font-semibold text-pa-light">Root Issuers</h3>
              </div>
              <p className="text-pa-light-muted text-sm mb-4">
                Highly trusted organizations that can issue credentials to other issuers. Typically government agencies, major financial institutions, or equivalent entities.
              </p>
              <ul className="text-sm text-pa-light-muted space-y-1">
                <li>• Maximum trust level</li>
                <li>• Can issue sub-issuer credentials</li>
                <li>• Subject to strict governance</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Requirements Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-pa-light mb-3">Technical Requirements</h3>
              <ul className="text-pa-light-muted text-sm space-y-2">
                <li>• Secure key management infrastructure</li>
                <li>• Credential issuance API</li>
                <li>• Revocation registry management</li>
                <li>• Logging and audit capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pa-light mb-3">Governance Requirements</h3>
              <ul className="text-pa-light-muted text-sm space-y-2">
                <li>• Legal entity verification</li>
                <li>• Identity verification procedures</li>
                <li>• Compliance framework adherence</li>
                <li>• Incident response processes</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Path to Recognition</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-pa-blue font-semibold">1</div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Apply</h3>
                <p className="text-pa-light-muted text-sm">Submit an issuer application demonstrating your organization&apos;s capabilities and compliance readiness.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-pa-blue font-semibold">2</div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Verify</h3>
                <p className="text-pa-light-muted text-sm">Complete the verification process including technical assessment and governance review.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-pa-blue font-semibold">3</div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Onboard</h3>
                <p className="text-pa-light-muted text-sm">Integrate with the APIS registry and begin issuing credentials according to the standard.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-pa-blue font-semibold">4</div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Maintain</h3>
                <p className="text-pa-light-muted text-sm">Maintain compliance and participate in ongoing governance activities.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-pa-light mb-4">Interested in Becoming an Issuer?</h2>
          <p className="text-pa-light-muted mb-8">
            Contact us to discuss your organization&apos;s eligibility and the onboarding process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href="/contact" variant="primary">
              Contact Us
            </CTA>
            <CTA href={`${config.docsUrl}/issuers/overview/`} variant="secondary" external>
              Read Issuer Documentation
            </CTA>
          </div>
        </div>
      </Section>
    </>
  )
}
