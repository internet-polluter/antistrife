import { chromium } from "playwright";

async function main() {
  console.log("Script starting...");
  const browser = await chromium.launch({ headless: false });
  console.log("Browser launched");
  const page = await browser.newPage();
  console.log("Page created");

  await page.goto("https://google.com");
  console.log("Navigated to Google");
  await page.fill('input[name="q"]', "hello world");
  console.log("Text typed");
  await page.waitForTimeout(10000);

  await browser.close();
  console.log("Done");
}

main();
