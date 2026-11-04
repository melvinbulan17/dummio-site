import { expect, test } from "@playwright/test";

test("shows the headline and links the store listings", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: "Stop typing test data." }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Add to Chrome" }).first(),
  ).toHaveAttribute("href", /chromewebstore\.google\.com\/detail\/dummio\//);
  await expect(
    page.getByRole("link", { name: "Add to Firefox" }).first(),
  ).toHaveAttribute("href", /addons\.mozilla\.org\/.*\/addon\/dummio\/$/);
});

test("runs the fill demo and fills again with a new person", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByText("Dela Cruz")).toBeVisible();
  await page.getByRole("button", { name: "Fill again" }).click();
  await expect(page.getByText("Whitfield", { exact: true })).toBeVisible();
});

test("never scrolls sideways", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
});

test("keeps the extension's privacy policy on the site", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Read its privacy policy" }).click();
  await expect(page).toHaveURL(/\/privacy#extension$/);
  await expect(
    page.getByRole("heading", { name: "What it stores" }),
  ).toBeVisible();
  await expect(page.locator('a[href*="PRIVACY.md"]')).toHaveCount(0);
});

test("a nav link scrolls to its section every time", async ({ page }) => {
  await page.goto("/");
  const howItWorks = page
    .getByRole("navigation", { name: "Main" })
    .getByRole("link", { name: "How it works" });

  for (let click = 0; click < 2; click++) {
    await howItWorks.click();
    await expect(page).toHaveURL(/#how$/);
    await expect
      .poll(() =>
        page.evaluate(() =>
          Math.abs(
            Math.round(
              document.getElementById("how")!.getBoundingClientRect().top,
            ),
          ),
        ),
      )
      .toBeLessThan(5);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeLessThan(5);
  }
});

test("both coffee links go straight to Ko-fi in a new tab", async ({
  page,
}) => {
  await page.goto("/");
  const coffeeLinks = page.getByRole("link", { name: "Buy me a coffee" });
  await expect(coffeeLinks).toHaveCount(2);
  for (const link of await coffeeLinks.all()) {
    await expect(link).toHaveAttribute("href", "https://ko-fi.com/mbulandev");
    await expect(link).toHaveAttribute("target", "_blank");
  }
});

test("the nav has no install button", async ({ page }) => {
  await page.goto("/");
  await expect(
    page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name: "Install" }),
  ).toHaveCount(0);
});

test("nav links work from the privacy page", async ({ page }) => {
  await page.goto("/privacy");
  await page
    .getByRole("navigation", { name: "Main" })
    .getByRole("link", { name: "FAQ" })
    .click();
  await expect(page).toHaveURL(/\/#faq$/);
  await expect(page.getByRole("heading", { name: "FAQ" })).toBeVisible();
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
  await expect(page).toHaveTitle("Dummio | Test Data Generator");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Chrome and Firefox/,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
  const schemas = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent()) ??
      "[]",
  );
  expect(schemas[0]).toMatchObject({ "@type": "WebSite", name: "Dummio" });
  expect(schemas[1]).toMatchObject({ "@type": "SoftwareApplication" });
});

test("serves the site icon", async ({ page, request }) => {
  await page.goto("/");
  const icon = await page.locator('link[rel="icon"]').getAttribute("href");
  const response = await request.get(icon ?? "");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toBe("image/png");
});

test("shows a helpful page for a missing address", async ({ page }) => {
  const response = await page.goto("/nope");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "This page doesn't exist.",
  );
});
