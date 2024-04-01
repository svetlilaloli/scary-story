const { test, expect } = require('@playwright/test');
const exp = require('constants');

test.describe.configure({ mode: "serial" });

const baseUrl = 'http://127.0.0.1:5500';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Verify background image', async ({ page }) => {
    const body = page.locator('body');
    await expect(locator).toHaveCSS('background-image', `url("${baseUrl}/style/images/fantasyStoriesNewImage.png")`);
});

test('Verify section icons', async ({ page }) => {
    const icon1 = page.locator('#main > div.form-wrapper > form > div:nth-child(1) > span');
    const icon2 = page.locator('#main > div.form-wrapper > form > div:nth-child(3) > span');

    await expect(icon1).toContainText('☙');
    await expect(icon2).toContainText('☙');
});

test('Verify genre dropdown', async ({ page }) => {
    let monsters = await page.locator('#genre').selectOption('Monsters');
    
    expect(monsters).toContain('Monsters');
});