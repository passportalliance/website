const allianceRootJwk = {
  crv: 'Ed25519',
  kid: 'apis-root-v1.0-202602',
  kty: 'OKP',
  x: 'SNbXcT_ledLuO-SZI4cq01wpTbYznpMsdfSdX3eTNJQ',
  use: 'sig',
  alg: 'EdDSA',
}

export const dynamic = 'force-static'

export function GET() {
  return Response.json(allianceRootJwk, {
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  })
}
