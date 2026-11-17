// Renders proposals/three-pager/three-pager.html to the PDF and page previews
// served by /threepager. Run from site/: node scripts/render-three-pager.mjs
// Needs Playwright with Chromium (NODE_PATH pointing at a global install is fine).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = pathToFileURL(path.join(root, 'proposals/three-pager/three-pager.html')).href;
const out = path.join(root, 'public/threepager');
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 2 });
await page.goto(src, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const ok = await page.evaluate(() => ['400 12px "LM Sans"', '600 12px "LM Sans DC"', '12px "LM Mono"'].every((f) => document.fonts.check(f)));
if (!ok) throw new Error('Latin Modern fonts did not load');
await page.pdf({ path: path.join(out, 'ACN_RAI_Three-Pager.pdf'), format: 'Letter', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
const pages = await page.$$('.page');
for (let i = 0; i < pages.length; i++) await pages[i].screenshot({ path: path.join(out, `page-${i + 1}.png`) });
await browser.close();
console.log(`wrote PDF and ${pages.length} previews to public/threepager/`);
