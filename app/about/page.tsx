import Section from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the Passport Alliance mission to establish identity and authorization standards for AI agents.',
}

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">About Passport Alliance</h1>
          <p className="text-xl text-pa-light-muted">
            Building the foundation for trustworthy AI agent identity.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Our Mission</h2>
          <p className="text-pa-light-muted mb-6">
            The Passport Alliance is dedicated to creating and maintaining open standards for AI agent identity, authorization, and accountability. We believe that as autonomous agents become more prevalent in enterprise and public-sector operations, there must be a standardized framework for establishing trust.
          </p>
          <p className="text-pa-light-muted mb-6">
            Our work is driven by the recognition that current identity standards were designed for human users. AI agents require a different approach—one that addresses the unique challenges of machine-to-machine interaction, delegation, and automated decision-making.
          </p>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">What We Do</h2>
          <div className="space-y-4">
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Develop Open Standards</h3>
              <p className="text-pa-light-muted text-sm">
                Create and maintain the APIS specification—an open, royalty-free standard for agent identity and authorization that anyone can implement.
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
            The Passport Alliance is in early stages. Our current focus:
          </p>

          <div className="relative border-l border-pa-border ml-4 space-y-8">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-3 h-3 bg-pa-blue rounded-full -translate-x-1.5"></div>
              <h3 className="font-semibold text-pa-light">Phase 1: Foundation</h3>
              <p className="text-pa-light-muted text-sm mt-1">Core specification development and reference implementation</p>
              <span className="text-xs text-pa-teal">Current</span>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-3 h-3 bg-pa-border rounded-full -translate-x-1.5"></div>
              <h3 className="font-semibold text-pa-light">Phase 2: Ecosystem Growth</h3>
              <p className="text-pa-light-muted text-sm mt-1">Issuer onboarding, SDK development, and documentation</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-3 h-3 bg-pa-border rounded-full -translate-x-1.5"></div>
              <h3 className="font-semibold text-pa-light">Phase 3: Production Ready</h3>
              <p className="text-pa-light-muted text-sm mt-1">Security audits, compliance frameworks, and interoperability testing</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-3 h-3 bg-pa-border rounded-full -translate-x-1.5"></div>
              <h3 className="font-semibold text-pa-light">Phase 4: Industry Adoption</h3>
              <p className="text-pa-light-muted text-sm mt-1">Broad deployment across enterprise and public-sector use cases</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
