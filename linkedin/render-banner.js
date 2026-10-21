// Renders cover-banner.html to cover-banner.png at 1584x396.
// Drop logo files into linkedin/logos/ named <data-logo>.png or .svg
// (keystone, amazon, cognizant, iit-roorkee, thapar) to replace the text wordmarks.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const dir = __dirname;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1584, height: 396 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(dir, 'cover-banner.html'));
  const logos = {};
  for (const f of fs.existsSync(path.join(dir, 'logos')) ? fs.readdirSync(path.join(dir, 'logos')) : []) {
    const m = f.match(/^(.+)\.(png|svg|jpg|jpeg)$/i);
    if (m) logos[m[1]] = 'file://' + path.join(dir, 'logos', f);
  }
  await page.evaluate((logos) => {
    document.querySelectorAll('.org[data-logo]').forEach((el) => {
      const src = logos[el.dataset.logo];
      if (src) el.innerHTML = `<img src="${src}" alt="${el.textContent}">`;
    });
  }, logos);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(dir, 'cover-banner.png') });
  await browser.close();
  console.log('Wrote', path.join(dir, 'cover-banner.png'), 'logos used:', Object.keys(logos).join(', ') || 'none');
})();
