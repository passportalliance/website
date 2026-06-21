// AUTO-GENERATED from the APIS key-ceremony artifacts. Public trust material — safe to serve.
const apisIssuerDelegation = {
  "payload": {
    "allowed_alg": "ES256",
    "allowed_use": "agent-passport-signing",
    "issuer_csr_sha256": "0daf8cd92cedaa998e965a2fdfd809f862750a351c3c48179b2f18c1920d3665",
    "issuer_key_id": "apis-realm-issuer-2026-05-09",
    "issuer_public_key_pem_sha256": "da9458729b04223f01de9045d9593612db22a7fa21cb1c9c1a7f05a47609649a",
    "not_after": "2027-05-09T23:08:01Z",
    "not_before": "2026-05-09T23:07:54Z",
    "realm": "syndicate",
    "root_key_id": "apis-root-v1.0-202602",
    "root_public_jwk_url": "https://passportalliance.org/.well-known/alliance-root.jwk",
    "type": "APIS_ISSUER_DELEGATION",
    "version": "2.0"
  },
  "payload_sha256": "82fdd911d6b69865bf5384a5569d3efd859fbb96bed98376d964be2ecc83c29e",
  "root_key_id": "apis-root-v1.0-202602",
  "root_public_jwk_url": "https://passportalliance.org/.well-known/alliance-root.jwk",
  "signature": "tx5hpMFTY3yumNCdqkOlWpfhUBDdRaX7IfOGY2GRPphpGA1F-hQTTpO7FRvitXF7PeluVKH6jHIaSVZcpChGDA",
  "signature_alg": "EdDSA",
  "signature_format": "raw-ed25519-base64url",
  "signed_payload_file": "apis-issuer-delegation-payload.json",
  "type": "APIS_ISSUER_DELEGATION_SIGNATURE",
  "version": "2.0"
} as const

export const dynamic = 'force-static'

export function GET() {
  return Response.json(apisIssuerDelegation, {
    headers: { 'Cache-Control': 'public, max-age=300, s-maxage=300' },
  })
}
