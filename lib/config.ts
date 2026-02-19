const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://docs.passportalliance.org'
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com/passportalliance'
const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? null

export const config = {
  docsUrl,
  githubUrl,
  contactEndpoint,
}

export const navigation = {
  items: [
    { label: 'Standard', href: '/standard' },
    { label: 'Issuers', href: '/issuers' },
    { label: 'Developers', href: '/developers' },
    { label: 'Reference Implementation', href: '/reference-implementation' },
    { label: 'Governance', href: '/governance' },
    { label: 'About', href: '/about' },
  ],
  cta: {
    label: 'Read APIS Docs',
    href: docsUrl,
  },
  docs: {
    label: 'Docs',
    href: docsUrl,
  },
}
