# Passport Alliance Website

Official root-domain website for `passportalliance.org`.

## Purpose

This site introduces APIS v2.1 (Agent Passport Issuance Standard), explains Passport Alliance governance, issuer/developer/verifier paths, and routes users to full docs at `https://docs.passportalliance.org`.

Current canonical publication:

- **Title:** Passport Alliance Specification (APIS v2.1): Agent Passport Issuance Standard
- **DOI:** https://doi.org/10.5281/zenodo.21042004
- **Concept DOI:** https://doi.org/10.5281/zenodo.18820876
- **Published:** June 29, 2026
- **Status:** Version 2.1 — Canonical — Supersedes APIS v2.0

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployment target: Vercel

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Configure local env:
```bash
cp .env.example .env.local
```

3. Start dev server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
npm run start
```

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_DOCS_URL` | Docs site base URL | `https://docs.passportalliance.org` |
| `NEXT_PUBLIC_GITHUB_URL` | Passport Alliance GitHub org URL | `https://github.com/passportalliance` |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Optional contact form endpoint | empty |

## Deployment (Vercel)

- Import this repository in Vercel.
- Set environment variables (at least `NEXT_PUBLIC_DOCS_URL`).
- Deploy to `passportalliance.org`.

## Stewardship and Contact

- Stewarded by AetherPro Technologies
- Founder/CEO/CTO: Cory Gibson
- Contributor and partnership inquiries: `partnerships@aetherpro.tech`
- Issuer onboarding and operations: `operations@aetherpro.us`

## Repository Hygiene

This repo intentionally does **not** track:

- `node_modules/`
- `.next/`
- `out/`
- local `.env*` files

See `.gitignore` for full rules.

## License

Licensed under Apache License 2.0. See `LICENSE`.

## Trademark Notice

`Passport` and `Passport Alliance` names and logos are trademarks of Passport Alliance. The Apache-2.0 license does not grant trademark rights.
