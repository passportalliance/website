import { config } from '@/lib/config'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import LinkCard from '@/components/LinkCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reference Implementation',
  description: 'Passport is the APIS reference implementation - an open-source system for credential issuance, verification, and revocation.',
}

export default function ReferenceImplementationPage() {
  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">Passport: Reference Implementation</h1>
          <p className="text-xl text-pa-light-muted">
            Passport is the open-source reference implementation of the APIS standard, demonstrating how to build systems that issue, verify, and manage agent credentials.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Understanding the Relationship</h2>
          <p className="text-pa-light-muted mb-6">
            It is important to understand the distinction between the open standard and its implementation:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-3">APIS (The Standard)</h3>
              <p className="text-pa-light-muted text-sm">
                The open standard that defines how credentials work, what fields they contain, and how verification should occur. APIS is specification, not software.
              </p>
            </div>
            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <h3 className="text-lg font-semibold text-pa-light mb-3">Passport (The Implementation)</h3>
              <p className="text-pa-light-muted text-sm">
                An open-source implementation that demonstrates how to build systems conforming to APIS. It is one possible implementation, not the only one.
              </p>
            </div>
          </div>

          <div className="p-4 bg-pa-blue/10 border border-pa-blue/30 rounded-lg">
            <p className="text-pa-light text-sm">
              <strong>Note:</strong> Organizations can build their own implementations of APIS. Passport serves as a reference and starting point, but the standard is designed to be implemented by anyone.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Current Status</h2>
          <p className="text-pa-light-muted mb-6">
            Passport is under active development. The current version provides core functionality for credential operations.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-pa-teal/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-pa-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-pa-light">Credential Issuance</h3>
                <p className="text-pa-light-muted text-sm">Issue credentials with cryptographic signatures</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-pa-teal/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-pa-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-pa-light">Credential Verification</h3>
                <p className="text-pa-light-muted text-sm">Verify credential authenticity and validity</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-pa-teal/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-pa-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-pa-light">Revocation Checking</h3>
                <p className="text-pa-light-muted text-sm">Check credential status against revocation registry</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-pa-blue/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-pa-light-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-pa-light">Mandate Management</h3>
                <p className="text-pa-light-muted text-sm">Advanced mandate features (planned)</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-pa-light mb-6">Resources</h2>
          <div className="grid gap-4">
            <LinkCard
              title="GitHub Repository"
              description="Source code, issues, and contribution guidelines for Passport."
              href={`${config.githubUrl}/passport`}
              external
            />
            <LinkCard
              title="Implementation Guide"
              description="Technical documentation for deploying and using Passport."
              href={`${config.docsUrl}/developers/examples/`}
              external
            />
            <LinkCard
              title="API Documentation"
              description="REST API reference for credential operations."
              href={`${config.docsUrl}/developers/sdk/`}
              external
            />
          </div>
        </div>
      </Section>

      <Section className="bg-pa-bg-secondary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-pa-light mb-4">Get Started with Passport</h2>
          <p className="text-pa-light-muted mb-8">
            Explore the reference implementation to understand how APIS works in practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href={`${config.githubUrl}/passport`} variant="primary" external>
              View on GitHub
            </CTA>
            <CTA href={config.docsUrl} variant="secondary" external>
              Read Documentation
            </CTA>
          </div>
        </div>
      </Section>
    </>
  )
}
