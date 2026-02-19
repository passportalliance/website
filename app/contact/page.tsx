'use client'

import { useState, FormEvent } from 'react'
import Section from '@/components/Section'
import { config } from '@/lib/config'

export default function ContactPage() {
  const partnershipsEmail = 'partnerships@aetherpro.tech'
  const operationsEmail = 'operations@aetherpro.us'

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    if (config.contactEndpoint) {
      try {
        const response = await fetch(config.contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setFormState('success')
        } else {
          setFormState('error')
        }
      } catch {
        setFormState('error')
      }
    } else {
      // No endpoint configured - show error
      setFormState('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Section className="pt-20 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-pa-light mb-6">Contact Us</h1>
          <p className="text-xl text-pa-light-muted">
            Get in touch with Passport Alliance for issuer onboarding, community contribution, partnerships, and operations.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-xl">
          {formState === 'success' ? (
            <div className="p-6 bg-pa-teal/10 border border-pa-teal/30 rounded-lg text-center">
              <svg className="w-12 h-12 text-pa-teal mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-semibold text-pa-light mb-2">Message Sent</h2>
              <p className="text-pa-light-muted">
                Thank you for reaching out. We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-pa-light mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-pa-bg-secondary border border-pa-border rounded-lg text-pa-light focus:border-pa-blue focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-pa-light mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-pa-bg-secondary border border-pa-border rounded-lg text-pa-light focus:border-pa-blue focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-pa-light mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-pa-bg-secondary border border-pa-border rounded-lg text-pa-light focus:border-pa-blue focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-pa-light mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-pa-bg-secondary border border-pa-border rounded-lg text-pa-light focus:border-pa-blue focus:outline-none"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="issuer">Becoming an Issuer</option>
                  <option value="developer">Developer Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="security">Security Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-pa-light mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-pa-bg-secondary border border-pa-border rounded-lg text-pa-light focus:border-pa-blue focus:outline-none resize-none"
                />
              </div>

              {formState === 'error' && !config.contactEndpoint && (
                <div className="p-4 bg-pa-blue/10 border border-pa-blue/30 rounded-lg">
                  <p className="text-pa-light text-sm">
                    <strong>Contact form not configured.</strong> To enable the contact form, set the <code>NEXT_PUBLIC_CONTACT_ENDPOINT</code> environment variable.
                  </p>
                  <p className="text-pa-light-muted text-sm mt-2">
                    You can reach us directly at{' '}
                    <a href={`mailto:${operationsEmail}`} className="text-pa-blue hover:underline">{operationsEmail}</a>{' '}
                    or{' '}
                    <a href={`mailto:${partnershipsEmail}`} className="text-pa-blue hover:underline">{partnershipsEmail}</a>.
                  </p>
                </div>
              )}

              {formState === 'error' && config.contactEndpoint && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="btn btn-primary w-full disabled:opacity-50"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </Section>

      {!config.contactEndpoint && (
        <Section className="pt-0">
          <div className="max-w-xl">
            <div className="p-6 bg-pa-bg-secondary border border-pa-border rounded-lg">
              <h2 className="text-lg font-semibold text-pa-light mb-4">Direct Contact Channels</h2>
              <p className="text-pa-light-muted text-sm mb-4">
                Passport Alliance is stewarded by Cory Gibson (Founder, CEO, and CTO of AetherPro Technologies). Use the channels below for now while Passport Alliance domain mailboxes are being set up.
              </p>
              <ul className="space-y-3 text-pa-light-muted text-sm">
                <li>
                  <strong>Issuer onboarding and operations:</strong>{' '}
                  <a href={`mailto:${operationsEmail}`} className="text-pa-blue hover:underline">
                    {operationsEmail}
                  </a>
                </li>
                <li>
                  <strong>Partnerships and ecosystem collaboration:</strong>{' '}
                  <a href={`mailto:${partnershipsEmail}`} className="text-pa-blue hover:underline">
                    {partnershipsEmail}
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a href={config.githubUrl} target="_blank" rel="noopener noreferrer" className="text-pa-blue hover:underline">
                    {config.githubUrl}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Section>
      )}
    </>
  )
}
