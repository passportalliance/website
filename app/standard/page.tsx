import { config } from '@/lib/config'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import LinkCard from '@/components/LinkCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'APIS v2.0 Standard',
  description: 'Agent Passport Issuance Standard (APIS v2.0) - the canonical standard for verifiable AI agent identity, hardware trust anchors, and delegation.',
}

export default function StandardPage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">APIS v2.0 Standard</h1>
          <p className="text-xl text-pa-light-muted">
            The Agent Passport Issuance Standard defines verifiable agent legal identity, realm-scoped DIDs, hardware trust anchors, mandates, and revocation.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-4">What is APIS?</h2>
          <p className="text-pa-light-muted mb-6">
            APIS v2.0 is the current canonical Passport Alliance standard for autonomous AI agents. It supersedes APIS v1.0 and adds Machine Passports, TPM 2.0 and vTPM trust anchors, DNSSEC-anchored identity, software trust tiers, and APIS-APP automated provisioning.
          </p>

          <h3 className="text-lg font-semibold text-pa-light mb-3">What APIS Is</h3>
          <ul className="list-disc list-inside text-pa-light-muted mb-6 space-y-2">
            <li>A standard for verifiable credentials tied to agent identity</li>
            <li>A framework for explicit authorization scopes and mandates</li>
            <li>A revocation mechanism based on status checks and monotonic nonce increments</li>
            <li>A delegation chain linking agents back to authorizing principals</li>
            <li>A trust-tier model spanning physical TPM, virtual TPM, DNSSEC, software HSM, and development keys</li>
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
                Agent Passports and Machine Passports issued by recognized Realm Issuers. Passports bind keys, principals, mandates, DIDs, trust tiers, issuer metadata, and validity periods.
              </p>
            </div>
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-2">Mandates</h3>
              <p className="text-pa-light-muted text-sm">
                Principal-signed authorization documents that define the delegate relationship, permitted actions, authority boundaries, and operating conditions.
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
                Issuer status endpoints and nonce increments allow verifiers to reject stale credentials or signed actions immediately after suspension or revocation.
              </p>
            </div>
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-2">Hardware Trust Anchors</h3>
              <p className="text-pa-light-muted text-sm">
                APIS v2.0 records the strength of the underlying key custody environment, from Tier 1 physical TPM 2.0 to Tier 4 development keys.
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
            Access the canonical APIS v2.0 publication and implementation guidance.
          </p>
          <CTA href="https://doi.org/10.5281/zenodo.18820877" variant="primary" external>
            View DOI Publication
          </CTA>
        </div>
      </Section>
    </>
  )
}
