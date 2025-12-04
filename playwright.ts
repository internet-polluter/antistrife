import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Go to Google
  await page.goto("https://google.com");

  // Type in the search box
  await page.fill('input[name="q"]', "hello world");
  // Keep browser open for 10 seconds
  await page.waitForTimeout(10000);

  await browser.close();
}

main();
