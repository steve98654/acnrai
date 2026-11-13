# acnr.ai: Responsible AI, operationalised

Minimal static Astro site for the Accenture and Faculty responsible AI offer
(current state assessment, governance, red teaming). It follows the structure and
theme of the LaTeX decks: black pages with a faint grid, Accenture purple `#A100FF`
chevron, Latin Modern Sans / Mono, and the five-section flow
(GAO partnerships, assess, govern, implement, next steps).

```sh
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Editing

- All copy lives in `site/src/data/site.ts`. Partner order is always Google, Anthropic, OpenAI (GAO).
- `PRC_FULL` is a working assumption ("Policy, Risk & Controls"); change it there.
- `DRAFT = true` adds `noindex` and a draft mark. Set it to `false` at launch.
- Contacts in the closing section are placeholders.

Fonts: Latin Modern (GUST Font License), self-hosted in `public/fonts/`.
Partner marks: monochrome Simple Icons (Google, Anthropic) and the deck's OpenAI mark.

## Password

The whole site sits behind a password gate (`functions/_middleware.js`, a Cloudflare Pages Function).
Set `SITE_PASSWORD` as an encrypted secret in Cloudflare: Pages project, Settings, Variables and Secrets,
for Production (and Preview if wanted), then redeploy. Until it is set the site shows a locked page.
Visitors stay signed in for 30 days; changing the password signs everyone out; `/logout` signs out.
