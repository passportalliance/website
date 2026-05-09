import Link from 'next/link'
import { config } from '@/lib/config'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Passport Alliance | The Identity Standard for AI Agents',
  description: 'The open standards initiative and governing body behind APIS v2.0: verifiable identity, scoped authorization, and accountable AI agent operation.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pa-light mb-6">
            Open Standards for <span className="text-gradient">Verifiable AI Agent Identity</span>
          </h1>
          <p className="text-xl text-pa-light-muted mb-10 max-w-2xl mx-auto">
            Passport Alliance governs APIS v2.0, the Agent Passport Issuance Standard for agent legal identity,
            hardware trust anchors, and interoperable delegation across organizations and frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href={config.docsUrl} variant="primary" external>
              Read Documentation
            </CTA>
            <CTA href="/issuers" variant="secondary">
              Become an Issuer
            </CTA>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="bg-pa-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-8">The Core Questions</h2>
          <p className="text-pa-light-muted text-center mb-10">
            When you interact with an autonomous agent, you need answers to fundamental questions:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <div className="w-10 h-10 bg-pa-blue/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-pa-blue font-bold">1</span>
              </div>
              <h3 className="font-semibold text-pa-light mb-2">Who is the agent?</h3>
              <p className="text-sm text-pa-light-muted">
                Verifiable identity proving the agent is who it claims to be, issued by a trusted authority.
              </p>
            </div>
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <div className="w-10 h-10 bg-pa-blue/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-pa-blue font-bold">2</span>
              </div>
              <h3 className="font-semibold text-pa-light mb-2">Who authorized it?</h3>
              <p className="text-sm text-pa-light-muted">
                Clear delegation chain showing the principal (human or organization) that authorized the agent&apos;s actions.
              </p>
            </div>
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <div className="w-10 h-10 bg-pa-blue/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-pa-blue font-bold">3</span>
              </div>
              <h3 className="font-semibold text-pa-light mb-2">What can it do?</h3>
              <p className="text-sm text-pa-light-muted">
                Explicit scope defining the boundaries of the agent&apos;s authority and permitted actions.
              </p>
            </div>
            <div className="p-6 bg-pa-bg border border-pa-border rounded-lg">
              <div className="w-10 h-10 bg-pa-blue/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-pa-blue font-bold">4</span>
              </div>
              <h3 className="font-semibold text-pa-light mb-2">Can we revoke it?</h3>
              <p className="text-sm text-pa-light-muted">
                Revocable credentials enabling immediate termination of agent authority when needed.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Three Pillars Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">Three Pillars of Trust</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            APIS v2.0 establishes a foundation for agent identity, authorization, hardware-rooted trust, and revocation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pa-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pa-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pa-light mb-3">Identity</h3>
              <p className="text-pa-light-muted text-sm">
                Realm-scoped DIDs and Agent Passports that bind an agent key to an issuer, principal, mandate, and trust tier.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pa-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pa-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pa-light mb-3">Authorization</h3>
              <p className="text-pa-light-muted text-sm">
                Principal-signed mandates that define what an agent is permitted to do, on whose behalf, and under what constraints.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pa-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pa-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pa-light mb-3">Accountability</h3>
              <p className="text-pa-light-muted text-sm">
                Signed agent actions, public verification, and revocation by nonce increment for trust enforcement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-pa-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">How It Works</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            A trust chain from Realm Issuers to principals, mandates, delegates, and machine trust anchors.
          </p>
          <div className="relative">
            {/* Trust Chain Flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Issuer */}
              <div className="p-6 bg-pa-bg border border-pa-border rounded-lg text-center min-w-[180px]">
                <div className="w-12 h-12 bg-pa-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-pa-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-pa-light">Realm Issuer</h3>
                <p className="text-xs text-pa-light-muted mt-1">Issues passports</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-pa-teal">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="md:hidden text-pa-teal rotate-90">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Principal */}
              <div className="p-6 bg-pa-bg border border-pa-border rounded-lg text-center min-w-[180px]">
                <div className="w-12 h-12 bg-pa-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-pa-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-pa-light">Principal</h3>
                <p className="text-xs text-pa-light-muted mt-1">Authorizes agents</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-pa-teal">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="md:hidden text-pa-teal rotate-90">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Delegate */}
              <div className="p-6 bg-pa-bg border border-pa-border rounded-lg text-center min-w-[180px]">
                <div className="w-12 h-12 bg-pa-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-pa-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-pa-light">Delegate</h3>
                <p className="text-xs text-pa-light-muted mt-1">Signs authorized actions</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Now Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-4">Why Now?</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            Enterprise and public-sector risk demands standardized agent identity
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-pa-blue/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-pa-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Autonomous agents are proliferating</h3>
                <p className="text-pa-light-muted text-sm">
                  Organizations are deploying AI agents for increasingly sensitive operations, from financial transactions to data access.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-pa-blue/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-pa-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">Regulatory pressure is increasing</h3>
                <p className="text-pa-light-muted text-sm">
                  Compliance frameworks increasingly require demonstrable control and auditability of automated systems.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-pa-blue/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-pa-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-pa-light mb-1">No existing standard addresses this</h3>
                <p className="text-pa-light-muted text-sm">
                  Current identity standards were designed for humans and services, not autonomous delegated agents. APIS v2.0 fills this gap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Ecosystem Section */}
      <Section className="bg-pa-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">Built for the Ecosystem</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            Three roles working together within the APIS framework
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/issuers" className="p-6 bg-pa-bg border border-pa-border rounded-lg hover:border-pa-blue transition-colors group">
              <h3 className="font-semibold text-pa-light mb-2 group-hover:text-pa-blue transition-colors">Issuers</h3>
              <p className="text-sm text-pa-light-muted mb-4">
                Trusted authorities that issue verifiable credentials to principals and agents.
              </p>
              <span className="text-pa-blue text-sm font-medium group-hover:underline">Learn about issuing &rarr;</span>
            </Link>
            <Link href="/developers" className="p-6 bg-pa-bg border border-pa-border rounded-lg hover:border-pa-blue transition-colors group">
              <h3 className="font-semibold text-pa-light mb-2 group-hover:text-pa-blue transition-colors">Developers</h3>
              <p className="text-sm text-pa-light-muted mb-4">
                Build agent systems that implement APIS for identity and authorization.
              </p>
              <span className="text-pa-blue text-sm font-medium group-hover:underline">Start building &rarr;</span>
            </Link>
            <Link href="/standard" className="p-6 bg-pa-bg border border-pa-border rounded-lg hover:border-pa-blue transition-colors group">
              <h3 className="font-semibold text-pa-light mb-2 group-hover:text-pa-blue transition-colors">Verifiers</h3>
              <p className="text-sm text-pa-light-muted mb-4">
                Systems that validate credentials and enforce authorization policies.
              </p>
              <span className="text-pa-blue text-sm font-medium group-hover:underline">Understand the standard &rarr;</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-pa-light mb-4">Ready to get started?</h2>
          <p className="text-pa-light-muted mb-8">
            Join the effort to establish identity and authorization standards for AI agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href={config.docsUrl} variant="primary" external>
              Read the Documentation
            </CTA>
            <CTA href="/contact" variant="secondary">
              Contact Us
            </CTA>
          </div>
        </div>
      </Section>
    </>
  )
}
