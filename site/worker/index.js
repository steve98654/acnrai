// Cloudflare Workers (static assets): run the password gate before serving
// any file from dist/. run_worker_first in wrangler.jsonc makes this run for
// every request, including ones that match a static file.
//
// HTTPS: any plain http:// request on a real hostname is redirected to
// https:// (301), and every response carries security headers, including
// HSTS so browsers go straight to HTTPS next time. Local dev (localhost) is
// left alone. Cloudflare issues and renews the certificate for the custom
// domain automatically.
import { gate } from '../gate/gate.js';

const HSTS = 'max-age=15552000'; // 180 days; no includeSubDomains or preload
const SECURITY_HEADERS = {
  'Strict-Transport-Security': HSTS,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

function isLocal(hostname) {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.localhost');
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === 'http:' && !isLocal(url.hostname)) {
      url.protocol = 'https:';
      return new Response(null, { status: 301, headers: { Location: url.toString(), ...SECURITY_HEADERS } });
    }
    const res = await gate(request, env, () => env.ASSETS.fetch(request));
    const out = new Response(res.body, res);
    for (const [k, v] of Object.entries(SECURITY_HEADERS)) out.headers.set(k, v);
    return out;
  },
};
