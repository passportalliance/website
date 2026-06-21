// AUTO-GENERATED. EXACT signed payload bytes for the issuer delegation.
// The Ed25519 signature in apis-issuer-delegation.json is over THIS file's bytes verbatim.
const signedPayload = "{\n  \"type\": \"APIS_ISSUER_DELEGATION\",\n  \"version\": \"2.0\",\n  \"issuer_key_id\": \"apis-realm-issuer-2026-05-09\",\n  \"root_key_id\": \"apis-root-v1.0-202602\",\n  \"root_public_jwk_url\": \"https://passportalliance.org/.well-known/alliance-root.jwk\",\n  \"realm\": \"syndicate\",\n  \"issuer_public_key_pem_sha256\": \"da9458729b04223f01de9045d9593612db22a7fa21cb1c9c1a7f05a47609649a\",\n  \"issuer_csr_sha256\": \"0daf8cd92cedaa998e965a2fdfd809f862750a351c3c48179b2f18c1920d3665\",\n  \"not_before\": \"2026-05-09T23:07:54Z\",\n  \"not_after\": \"2027-05-09T23:08:01Z\",\n  \"allowed_alg\": \"ES256\",\n  \"allowed_use\": \"agent-passport-signing\"\n}\n"

export const dynamic = 'force-static'

export function GET() {
  return new Response(signedPayload, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  })
}
