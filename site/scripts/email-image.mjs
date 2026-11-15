// Render an email address as a transparent PNG so it is not in the page text.
// Usage: node scripts/email-image.mjs <address> <out.png>   (needs Playwright)
import { createRequire } from 'module';
import { readFileSync } from 'fs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [addr, out] = process.argv.slice(2);
if (!addr || !out) throw new Error('usage: node scripts/email-image.mjs <address> <out.png>');

const font = 'data:font/woff;base64,' + readFileSync('public/fonts/lm-sans-regular.woff').toString('base64');
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 3 });
await page.setContent(`<style>
  @font-face { font-family: 'LM Sans'; src: url('${font}') format('woff'); }
  body { margin: 0; background: transparent; }
  span { display: inline-block; font: 18px/24px 'LM Sans', sans-serif; color: #a1a1aa; padding: 0 1px; }
</style><span id="e"></span>`);
await page.evaluate((a) => { document.getElementById('e').textContent = a; }, addr);
await page.evaluate(() => document.fonts.load("18px 'LM Sans'"));
if (!(await page.evaluate(() => document.fonts.check("18px 'LM Sans'")))) throw new Error('LM Sans did not load');
const box = await page.locator('#e').boundingBox();
await page.locator('#e').screenshot({ path: out, omitBackground: true });
console.log(`${out}: ${Math.round(box.width)}x${Math.round(box.height)} CSS px`);
await browser.close();
