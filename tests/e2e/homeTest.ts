import { expect, test } from "@playwright/test";

test("shows the headline and links the real downloads", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: "Stop typing test data." }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Download for Chrome" }).first(),
  ).toHaveAttribute("href", /releases\/latest\/download\/dummio-chrome\.zip$/);
  await expect(
    page.getByRole("link", { name: "Download for Firefox" }).first(),
  ).toHaveAttribute("href", /releases\/latest\/download\/dummio-firefox\.zip$/);
});

test("runs the fill demo and fills again with a new person", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByText("Dela Cruz")).toBeVisible();
  await page.getByRole("button", { name: "Fill again" }).click();
  await expect(page.getByText("Whitfield")).toBeVisible();
});

test("never scrolls sideways", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
});

test("the coffee link jumps to the support section", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Buy me a coffee" }).first().click();
  await expect(page).toHaveURL(/#support$/);
  await expect(
    page.getByRole("link", { name: "Buy me a coffee" }).last(),
  ).toHaveAttribute("href", "https://ko-fi.com/mbulandev");
});

test("makes no request to Google before a choice", async ({ page }) => {
  const googleRequests: string[] = [];
  page.on("request", (request) => {
    if (/google-analytics|googletagmanager/.test(request.url())) {
      googleRequests.push(request.url());
    }
  });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  expect(googleRequests).toEqual([]);
});

test("serves the search and sharing files", async ({ request }) => {
  for (const path of ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest"]) {
    expect((await request.get(path)).status()).toBe(200);
  }
});

test("has search and sharing tags", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/realistic test data/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Chrome and Firefox/,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(
    1,
  );
});

test("shows a helpful page for a missing address", async ({ page }) => {
  const response = await page.goto("/nope");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "This page doesn't exist.",
  );
});
