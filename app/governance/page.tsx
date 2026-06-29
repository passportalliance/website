import { config } from '@/lib/config'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import LinkCard from '@/components/LinkCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Governance',
  description: 'Learn about the APIS v2.1 governance model, issuer-registry signing, and the transparent standards process.',
}

export default function GovernancePage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">Governance</h1>
          <p className="text-xl text-pa-light-muted">
            APIS governance keeps the standard open, explicit, and accountable as publication, issuer recognition, and verification surfaces evolve.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Governance Model</h2>
          <p className="text-pa-light-muted mb-6">
            APIS is governed through a transparent, multi-stakeholder process that ensures the standard serves the broader ecosystem while maintaining technical integrity.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-3">Technical Steering Committee</h3>
              <p className="text-pa-light-muted text-sm">
                A technical committee responsible for the day-to-day development of the standard, reviewing proposals, and maintaining specification quality.
              </p>
            </div>

            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-3">Governance Board</h3>
              <p className="text-pa-light-muted text-sm">
                Representatives from issuer organizations, industry stakeholders, and independent experts who provide strategic direction and policy oversight.
              </p>
            </div>

            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-3">Working Groups</h3>
              <p className="text-pa-light-muted text-sm">
                Time-limited groups focused on specific topics such as security, privacy, interoperability, or sector-specific extensions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Registry Signing</h2>
          <p className="text-pa-light-muted mb-6">
            The APIS issuer-registry layer is a critical trust surface for status publication and verification. It is designed around distributed signing, auditable publication, and clear separation between canonical issuer records and adjacent public reference surfaces.
          </p>

          <div className="grid gap-4">
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Multi-Signature Authority</h3>
              <p className="text-pa-light-muted text-sm">
                Critical registry updates can require signatures from multiple authorized signers, reducing single points of failure.
              </p>
            </div>
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Transparent Operations</h3>
              <p className="text-pa-light-muted text-sm">
                Registry and publication operations are designed to be logged and auditable, supporting accountability without overstating current automation.
              </p>
            </div>
            <div className="p-4 bg-pa-bg border border-pa-border rounded-lg">
              <h3 className="font-semibold text-pa-light mb-2">Distributed Trust</h3>
              <p className="text-pa-light-muted text-sm">
                Signing authority and stewardship can be distributed across multiple independent parties as the ecosystem matures.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Standards Process</h2>
          <p className="text-pa-light-muted mb-6">
            APIS evolves through a transparent, community-driven process.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-pa-blue font-semibold">1</div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Proposal</h3>
                <p className="text-pa-light-muted text-sm">Anyone can submit a proposal for new features or changes to the standard.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-pa-blue font-semibold">2</div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Discussion</h3>
                <p className="text-pa-light-muted text-sm">Proposals are discussed publicly, with input from stakeholders.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-pa-blue font-semibold">3</div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Review</h3>
                <p className="text-pa-light-muted text-sm">The technical committee reviews proposals for technical merit and ecosystem impact.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-pa-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-pa-blue font-semibold">4</div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Approval</h3>
                <p className="text-pa-light-muted text-sm">Approved proposals are incorporated into the specification through versioning.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Governance Resources</h2>
          <div className="grid gap-4">
            <LinkCard
              title="Governance Charter"
              description="The founding document outlining governance structure and procedures."
              href={`${config.docsUrl}/governance/overview/`}
              external
            />
            <LinkCard
              title="RFC Process"
              description="How proposals are submitted, reviewed, and adopted."
              href={`${config.docsUrl}/governance/process/`}
              external
            />
            <LinkCard
              title="Agent Registry Surface"
              description="See how public verification records and reference proofs are presented today."
              href={`${config.docsUrl}/registry/`}
              external
            />
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-pa-light mb-4">Participate in Governance</h2>
          <p className="text-pa-light-muted mb-8">
            Join the governance process to help shape the future of agent identity standards.
          </p>
          <CTA href="/contact" variant="primary">
            Get Involved
          </CTA>
        </div>
      </Section>
    </>
  )
}
