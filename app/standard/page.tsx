import { config } from '@/lib/config'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import LinkCard from '@/components/LinkCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The APIS Standard',
  description: 'Agent Principal Identity Standard (APIS) - An open standard for verifiable AI agent identity, scoped authorization, and full accountability.',
}

export default function StandardPage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">The APIS Standard</h1>
          <p className="text-xl text-pa-light-muted">
            Agent Principal Identity Standard (APIS) defines a framework for verifiable identity, scoped authorization, and accountability for AI agents.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-4">What is APIS?</h2>
          <p className="text-pa-light-muted mb-6">
            APIS (Agent Principal Identity Standard) is an open standard designed specifically for autonomous AI agents. While existing identity standards like OAuth and OpenID Connect were built for human users, APIS addresses the unique requirements of machine-to-machine and agentic interactions.
          </p>

          <h3 className="text-lg font-semibold text-pa-light mb-3">What APIS Is</h3>
          <ul className="list-disc list-inside text-pa-light-muted mb-6 space-y-2">
            <li>A standard for verifiable credentials tied to agent identity</li>
            <li>A framework for explicit authorization scopes and mandates</li>
            <li>A revocation mechanism for immediate trust termination</li>
            <li>A delegation chain linking agents back to authorizing principals</li>
          </ul>

          <h3 className="text-lg font-semibold text-pa-light mb-3">What APIS Is Not</h3>
          <ul className="list-disc list-inside text-pa-light-muted mb-6 space-y-2">
            <li>Not an authentication protocol for human users</li>
            <li>Not a replacement for OAuth 2.0 or OpenID Connect</li>
            <li>Not a blockchain or specific cryptocurrency technology</li>
            <li>Not a proprietary vendor solution</li>
          </ul>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary pt-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Core Components</h2>
          <div className="space-y-6">
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-2">Credentials</h3>
              <p className="text-pa-light-muted text-sm">
                Verifiable credentials issued by recognized authorities that establish agent identity. Credentials are cryptographically signed and include the agent&apos;s public key, issuer information, and validity period.
              </p>
            </div>
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-2">Mandates</h3>
              <p className="text-pa-light-muted text-sm">
                Explicit authorization documents that define the scope of an agent&apos;s authority. Mandates specify what actions an agent can take, on behalf of whom, and under what conditions.
              </p>
            </div>
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-2">Signatures</h3>
              <p className="text-pa-light-muted text-sm">
                Cryptographic signatures that bind credentials and mandates together, ensuring non-repudiation and enabling verifiers to validate the entire trust chain.
              </p>
            </div>
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-2">Revocation</h3>
              <p className="text-pa-light-muted text-sm">
                A mechanism for issuers to revoke credentials before their expiration, enabling immediate termination of agent authority when needed for security or operational reasons.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Explore the Documentation</h2>
          <div className="grid gap-4">
            <LinkCard
              title="Credential Specification"
              description="Detailed specification for credential structure, issuance, and verification."
              href={`${config.docsUrl}/spec/agent-passport/`}
              external
            />
            <LinkCard
              title="Mandate Format"
              description="How to structure authorization mandates with explicit scopes and conditions."
              href={`${config.docsUrl}/spec/mandates/`}
              external
            />
            <LinkCard
              title="Issuer Requirements"
              description="Requirements and governance for organizations issuing APIS credentials."
              href={`${config.docsUrl}/issuers/requirements/`}
              external
            />
            <LinkCard
              title="API Reference"
              description="Technical API documentation for implementing APIS in your systems."
              href={`${config.docsUrl}/developers/sdk/`}
              external
            />
          </div>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-pa-light mb-4">Read the Full Specification</h2>
          <p className="text-pa-light-muted mb-8">
            Access the complete APIS specification with technical details, examples, and implementation guidance.
          </p>
          <CTA href={config.docsUrl} variant="primary" external>
            View Full Documentation
          </CTA>
        </div>
      </Section>
    </>
  )
}
