import { test, expect } from "@playwright/test";
import projects from "../src/data/projects.json" with { type: "json" };

// Catch crashes and missing assets as well as missing page content.
test.beforeEach(async ({ page }) => {
  page.on("pageerror", (error) => {
    throw error;
  });
  page.on("response", (response) => {
    if (new URL(response.url()).origin === "http://127.0.0.1:4173") {
      expect(response.status(), response.url()).toBeLessThan(400);
    }
  });
});

for (const [path, heading, title] of [
  ["/", "Tom Zmyslo", "Software Engineer - Tom Zmyslo"],
  ["/brewing", "Brewing", "Brewing - Tom Zmyslo"],
  ["/projects", "Professional Projects", "Projects - Tom Zmyslo"],
  ["/resume", "Résumé", "Resume - Tom Zmyslo"],
]) {
  test(`loads ${path} directly`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1, name: heading, exact: true })).toBeVisible();
    await expect(page).toHaveTitle(title);
    await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
  });
}

test("navigates from home through the main navigation", async ({ page }) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Main navigation" });
  for (const [name, path, heading] of [
    ["Projects", "/projects", "Professional Projects"],
    ["Brewing", "/brewing", "Brewing"],
    ["Resume", "/resume", "Résumé"],
  ]) {
    await navigation.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(path);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    await expect(navigation.getByRole("link", { name, exact: true })).toHaveAttribute(
      "aria-current",
      "page",
    );
  }
});

for (const project of projects) {
  test(`opens and reloads project: ${project.name}`, async ({ page }) => {
    await page.goto("/projects");
    await page
      .getByRole("link")
      .filter({ has: page.getByRole("heading", { name: project.name, exact: true }) })
      .click();
    await expect(page).toHaveURL(`/projects/${project.slug}`);
    await expect(
      page.getByRole("heading", { level: 1, name: project.name, exact: true }),
    ).toBeVisible();
    await page.reload();
    await expect(page).toHaveTitle(`${project.name} - Tom Zmyslo`);
    await expect(page.getByRole("heading", { name: "Overview", exact: true })).toBeVisible();
    await page.getByRole("link", { name: "All projects", exact: true }).click();
    await expect(page).toHaveURL("/projects");
  });
}

for (const path of ["/missing-page", "/projects/missing-project"]) {
  test(`recovers from ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
    await expect(page).toHaveTitle("Page Not Found - Tom Zmyslo");
    await page.getByRole("link", { name: "Back to home" }).click();
    await expect(page).toHaveURL("/");
    await expect(page.getByRole("heading", { level: 1, name: "Tom Zmyslo" })).toBeVisible();
  });
}

test("serves a real résumé PDF", async ({ page, request }) => {
  await page.goto("/resume");
  const link = page.getByRole("link", { name: "Download PDF" });
  await expect(link).toHaveAttribute("download", "");
  const response = await request.get(await link.getAttribute("href"));
  expect(response.ok()).toBeTruthy();
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

test("keyboard users can skip navigation on every main page", async ({ page }) => {
  for (const path of ["/", "/projects", "/brewing", "/resume", "/missing-page"]) {
    await page.goto(path);
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("main")).toBeFocused();
  }
});

test("pages fit a narrow mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  for (const path of [
    "/",
    "/projects",
    "/brewing",
    "/resume",
    ...projects.map((p) => `/projects/${p.slug}`),
  ]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.locator("html").evaluate((element) => element.scrollWidth),
    ).toBeLessThanOrEqual(320);
  }
});
