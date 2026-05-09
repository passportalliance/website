import { config } from '@/lib/config'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import LinkCard from '@/components/LinkCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Developers',
  description: 'Build with APIS v2.0: provision Agent Passports, verify signed actions, enforce mandates, and check revocation.',
}

export default function DevelopersPage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">For Developers</h1>
          <p className="text-xl text-pa-light-muted">
            Build agent systems that implement APIS v2.0 for identity, authorization, trust-tier signaling, and accountability.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Quick Integration Path</h2>
          <p className="text-pa-light-muted mb-8">
            Get started with APIS v2.0 integration in four steps.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center text-pa-blue font-semibold">1</span>
                <h3 className="text-lg font-semibold text-pa-light">Choose Your Role</h3>
              </div>
              <p className="text-pa-light-muted text-sm">
                Determine whether your system will act as an issuer, principal, delegate, or verifier.
              </p>
            </div>

            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center text-pa-blue font-semibold">2</span>
                <h3 className="text-lg font-semibold text-pa-light">Integrate SDK</h3>
              </div>
              <p className="text-pa-light-muted text-sm">
                Use APIS-APP or SDK tooling to perform passport-init provisioning, credential validation, and verification.
              </p>
            </div>

            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center text-pa-blue font-semibold">3</span>
                <h3 className="text-lg font-semibold text-pa-light">Implement Flows</h3>
              </div>
              <p className="text-pa-light-muted text-sm">
                Follow passport-init, passport-renew, passport-revoke, mandate creation, signature verification, and revocation flows.
              </p>
            </div>

            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center text-pa-blue font-semibold">4</span>
                <h3 className="text-lg font-semibold text-pa-light">Test and Deploy</h3>
              </div>
              <p className="text-pa-light-muted text-sm">
                Use the test registry to validate your implementation before deploying to production.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Core Concepts</h2>
          <div className="grid gap-4">
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Credentials</h3>
              <p className="text-pa-light-muted text-sm">
                Agent Passports and Machine Passports are signed credentials that establish agent and machine identity.
              </p>
            </div>
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Mandates</h3>
              <p className="text-pa-light-muted text-sm">
                Authorization documents that specify what an agent can do, including scope and constraints.
              </p>
            </div>
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Signatures</h3>
              <p className="text-pa-light-muted text-sm">
                Cryptographic proofs that bind credentials and mandates, enabling verification.
              </p>
            </div>
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Registry</h3>
              <p className="text-pa-light-muted text-sm">
                Public infrastructure for credential status checking and revocation verification.
              </p>
            </div>
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Trust Tiers</h3>
              <p className="text-pa-light-muted text-sm">
                Verifiers can require Tier 1 physical TPM, Tier 2 vTPM, Tier 2.5 DNSSEC, Tier 3 software HSM, or Tier 4 development keys.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Explore the Resources</h2>
          <div className="grid gap-4">
            <LinkCard
              title="Quickstart Guide"
              description="Get up and running with APIS in under 10 minutes."
              href={`${config.docsUrl}/developers/quickstart/`}
              external
            />
            <LinkCard
              title="API Reference"
              description="Complete API documentation with examples."
              href={`${config.docsUrl}/developers/sdk/`}
              external
            />
            <LinkCard
              title="SDK Documentation"
              description="Language-specific SDK guides and references."
              href={`${config.docsUrl}/developers/sdk/`}
              external
            />
          </div>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-pa-light mb-4">Start Building</h2>
          <p className="text-pa-light-muted mb-8">
            Ready to integrate APIS into your agent system? Jump into the documentation.
          </p>
          <CTA href={config.docsUrl} variant="primary" external>
            View Developer Documentation
          </CTA>
        </div>
      </Section>
    </>
  )
}
