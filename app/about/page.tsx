import Section from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Passport Alliance, the open standards initiative and governing body behind APIS v2.1.',
}

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">About Passport Alliance</h1>
          <p className="text-xl text-pa-light-muted">
            The open standards initiative and governing body behind APIS v2.1.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Our Mission</h2>
          <p className="text-pa-light-muted mb-6">
            Passport Alliance creates and maintains open standards for AI agent identity, authorization, trust-tier signaling, public verification, and accountability. Its current canonical standard is APIS v2.1, published June 29, 2026.
          </p>
          <p className="text-pa-light-muted mb-6">
            Our work is driven by the recognition that current identity standards were designed for human users and conventional services. Autonomous agents require a framework for principal authority, mandates, delegates, Agent Passport Profiles, Agent Passports, signed actions, proof artifacts, and rapid revocation.
          </p>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Stewardship</h2>
          <div className="p-6 bg-pa-bg border border-pa-border rounded-lg mb-8">
            <p className="text-pa-light-muted mb-4">
              Passport Alliance was created by <strong className="text-pa-light">Cory Gibson</strong>, Founder, CEO, and CTO of{' '}
              <strong className="text-pa-light">AetherPro Technologies</strong>.
            </p>
            <p className="text-pa-light-muted mb-0">
              Cory created the early Passport work and Legal-Based Access Control (LBAC) framework that informed APIS. Passport Alliance now presents APIS v2.1 as a standards-oriented trust framework for broader issuer, developer, verifier, and registry participation.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-pa-light mb-6">What We Do</h2>
          <div className="space-y-4">
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Develop Open Standards</h3>
              <p className="text-pa-light-muted text-sm">
                Create and maintain APIS, an open standard for Agent Passport issuance, realm-scoped DIDs, mandates, hardware trust anchors, and verification.
              </p>
            </div>
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Provide Reference Implementation</h3>
              <p className="text-pa-light-muted text-sm">
                Develop and maintain Passport, an open-source implementation demonstrating how to build systems conforming to APIS.
              </p>
            </div>
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Build Ecosystem</h3>
              <p className="text-pa-light-muted text-sm">
                Foster an ecosystem of issuers, developers, and verifiers working together to establish agent identity as critical infrastructure.
              </p>
            </div>
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Govern Responsibly</h3>
              <p className="text-pa-light-muted text-sm">
                Maintain transparent governance that ensures the standard remains open, secure, and responsive to stakeholder needs.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Positioning</h2>
          <p className="text-pa-light-muted mb-6">
            The Passport Alliance operates at the intersection of standards bodies and infrastructure providers. We are:
          </p>
          <ul className="list-disc list-inside text-pa-light-muted space-y-2 mb-6">
            <li><strong>Standards-focused:</strong> We develop open specifications, not proprietary products</li>
            <li><strong>Implementation-agnostic:</strong> Any organization can build APIS-compatible systems</li>
            <li><strong>Community-driven:</strong> Our governance includes diverse stakeholder representation</li>
            <li><strong>Security-conscious:</strong> We prioritize security and privacy in every design decision</li>
          </ul>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Roadmap</h2>
          <p className="text-pa-light-muted mb-6">
            APIS v2.1 is the current canonical publication. Our current focus:
          </p>

          <div className="relative border-l border-pa-border ml-4 space-y-8">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-3 h-3 bg-pa-blue rounded-full -translate-x-1.5"></div>
              <h3 className="font-semibold text-pa-light">APIS v2.1 Publication</h3>
              <p className="text-pa-light-muted text-sm mt-1">Canonical specification published with DOI, v2.0 supersession, and reference proof support</p>
              <span className="text-xs text-pa-teal">Published June 29, 2026</span>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-3 h-3 bg-pa-border rounded-full -translate-x-1.5"></div>
              <h3 className="font-semibold text-pa-light">Issuer and Registry Surface</h3>
              <p className="text-pa-light-muted text-sm mt-1">Realm Issuer onboarding, SDK development, profile publication, and public registry growth</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-3 h-3 bg-pa-border rounded-full -translate-x-1.5"></div>
              <h3 className="font-semibold text-pa-light">Compliance Alignment</h3>
              <p className="text-pa-light-muted text-sm mt-1">Security audits, CMMC Level 2 / NIST SP 800-171 alignment, and interoperability testing</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-3 h-3 bg-pa-border rounded-full -translate-x-1.5"></div>
              <h3 className="font-semibold text-pa-light">Reference Proofs and Adoption</h3>
              <p className="text-pa-light-muted text-sm mt-1">Herman-style public reference proofs, broader deployment, and enterprise/public-sector adoption</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
