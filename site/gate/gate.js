// Password gate for the whole site. Runs on Cloudflare Workers (static assets)
// and on Cloudflare Pages Functions.
//
// Set SITE_PASSWORD in Cloudflare as a runtime secret: Worker (or Pages
// project) > Settings > Variables and Secrets. Not a build variable.
// The password is never stored in the repo. If it is not set, the site stays
// locked and says so, so nothing is ever served open by accident.
//
// After a correct password, a signed cookie keeps the visitor signed in for
// 30 days. Changing SITE_PASSWORD signs everyone out. /logout clears the cookie.

// Switch: false serves the site openly. Set to true to turn the password back on.
export const PASSWORD_ENABLED = false;

const COOKIE = 'acnr_auth';
const MAX_AGE = 60 * 60 * 24 * 30;
const PUBLIC = [/^\/fonts\//, /^\/favicon\.svg$/];

async function sign(secret, value) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function readCookie(request, name) {
  const header = request.headers.get('Cookie') || '';
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return v.join('=');
  }
  return '';
}

function safeNext(value) {
  return typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') ? value : '/';
}

function page(message, next, status) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>Sign in | Accenture and Faculty</title><link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
@font-face{font-family:'LM Sans DC';src:url('/fonts/lm-sans-demicond.woff') format('woff');font-weight:600}
@font-face{font-family:'LM Sans';src:url('/fonts/lm-sans-regular.woff') format('woff')}
@font-face{font-family:'LM Mono';src:url('/fonts/lm-mono-regular.woff') format('woff')}
*{box-sizing:border-box}html,body{height:100%}
body{margin:0;background:#09090b;color:#fff;font-family:'LM Sans',system-ui,sans-serif;display:flex;align-items:center;
background-image:linear-gradient(#1c1c21 1px,transparent 1px),linear-gradient(90deg,#1c1c21 1px,transparent 1px);background-size:40px 40px;overflow:hidden}
.chev{position:fixed;right:6vw;bottom:10vh;height:46vh;fill:#a100ff}
main{position:relative;width:100%;max-width:560px;padding:0 clamp(16px,6vw,72px)}
.k{font-family:'LM Mono',monospace;font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:#a1a1aa}
.k b{color:#a100ff;font-weight:400}
h1{font-family:'LM Sans DC',sans-serif;font-weight:600;font-size:clamp(40px,7vw,64px);line-height:1.02;margin:28px 0 32px}
form{display:flex;flex-wrap:wrap;gap:12px}
input{flex:1 1 220px;height:52px;padding:0 16px;background:#141418;border:1.5px solid #3f3f46;color:#fff;font:inherit;font-size:17px;outline:none}
input:focus{border-color:#a100ff}
button{height:52px;padding:0 26px;background:#a100ff;border:0;color:#fff;font-family:'LM Mono',monospace;font-size:13px;letter-spacing:.2em;text-transform:uppercase;cursor:pointer}
button:hover{background:#fff;color:#000}
.m{min-height:24px;margin-top:16px;color:#c27bff;font-size:15px}
@media (max-width:760px){.chev{opacity:.3;right:-40px}}
</style></head><body>
<svg class="chev" viewBox="0 0 62 100" aria-hidden="true"><path d="M0 0 L62 50 L0 100 L0 79.5 L36.5 50 L0 20.5 Z"/></svg>
<main><p class="k">Accenture <b>&gt;</b> Faculty / Private preview</p>
<h1>Responsible AI,<br>operationalised.</h1>
<form method="post" action="/__login"><input type="hidden" name="next" value="${next.replace(/"/g, '&quot;')}">
<input type="password" name="password" placeholder="Password" aria-label="Password" autocomplete="current-password" autofocus required>
<button type="submit">Enter</button></form>
<p class="m" role="status">${message}</p></main></body></html>`;
  return new Response(html, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
  });
}

// Shared by the Workers entry (worker/index.js) and the Pages middleware
// (functions/_middleware.js). `next` returns the static file response.
export async function gate(request, env, next) {
  if (!PASSWORD_ENABLED) return next();
  const url = new URL(request.url);
  const secret = env.SITE_PASSWORD;

  if (PUBLIC.some((re) => re.test(url.pathname))) return next();

  if (!secret) {
    // Names only, never values: shows whether the secret reached the running site.
    const names = Object.keys(env || {}).filter((k) => /^[A-Z0-9_]+$/i.test(k)).sort();
    const seen = names.length ? names.join(', ') : 'none';
    return page(
      `This site is locked. Its password has not been set up yet.<br><br>` +
        `<span style="color:#a1a1aa;font-size:13px">SITE_PASSWORD is not visible to the running site. ` +
        `Settings this site can see: ${seen}. Add SITE_PASSWORD as a Secret under the Worker's Settings, ` +
        `Variables and Secrets (not under Build), then deploy.</span>`,
      '/',
      503,
    );
  }

  const token = await sign(secret, 'acnr.ai:v1');
  const cookieBase = `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;

  if (url.pathname === '/logout') {
    return new Response(null, { status: 303, headers: { Location: '/', 'Set-Cookie': cookieBase } });
  }

  if (url.pathname === '/__login' && request.method === 'POST') {
    const form = await request.formData();
    const target = safeNext(form.get('next'));
    const given = await sign(secret, String(form.get('password') || ''));
    const expected = await sign(secret, secret);
    if (safeEqual(given, expected)) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: target,
          'Set-Cookie': `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${MAX_AGE}`,
        },
      });
    }
    return page('That password is not right. Try again.', target, 401);
  }

  if (safeEqual(readCookie(request, COOKIE), token)) {
    const res = await next();
    const out = new Response(res.body, res);
    out.headers.set('Cache-Control', 'private, no-store');
    out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return out;
  }

  return page('', safeNext(url.pathname + url.search), 401);
}
