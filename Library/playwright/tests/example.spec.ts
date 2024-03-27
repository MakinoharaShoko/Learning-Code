import {test, expect} from '@playwright/test';

test('playwright test', async ({page}) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test('baidu index', async ({page}) => {
  await page.goto('https://www.baidu.com/');
  const tags = page.locator('.mnav');
  const allText = await tags.allInnerTexts();
  let isPass = false;
  allText.map(async e => {
    if (e.match(/视频/))
      isPass = true;
  });
  await expect(isPass).toBe(true);
});

test('baidu search', async ({page}) => {
  await page.goto('https://www.baidu.com/');
  await page.locator('#kw').fill('谷歌');
  await page.locator('#su').click();
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  })
  const result = await page.locator('a');
  const allText = await result.allInnerTexts();
  let isPass = false;
  allText.map(async e => {
    if (e.match(/Google/))
      isPass = true;
  });
  await expect(isPass).toBe(true);
});

test('baidu search 2 ', async ({page}) => {
  await page.goto('https://www.baidu.com/');
  await page.locator('#kw').fill('机票');
  await page.locator('#su').click();
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  })
  const result = await page.locator('a');
  const allText = await result.allInnerTexts();
  let isPass = true;
  allText.map(async e => {
    if (e.match(/火车票/))
      isPass = false;
  });
  await expect(isPass).toBe(true);
});
