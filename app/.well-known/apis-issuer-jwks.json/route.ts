// AUTO-GENERATED from the APIS key-ceremony artifacts. Public trust material — safe to serve.
const apisIssuerJwks = {
  "keys": [
    {
      "kty": "EC",
      "crv": "P-256",
      "x": "oTtoyTuMovHCQvzd8989tybIaRDhQH7_-gJsvO3EEhA",
      "y": "1AM9wLTrGr4BF_ExC0RNTQflcgBV3rkFNjBz3GbLPfk",
      "use": "sig",
      "alg": "ES256",
      "kid": "apis-realm-issuer-2026-05-09"
    }
  ]
} as const

export const dynamic = 'force-static'

export function GET() {
  return Response.json(apisIssuerJwks, {
    headers: { 'Cache-Control': 'public, max-age=300, s-maxage=300' },
  })
}
