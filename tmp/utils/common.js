// common browser operation

/**
 * Switch the current page to the latest.
 * @param {puppeteer.Browser} browser - Browser instance launched via puppeteer.
 * @return {puppeteer.Page} Latest open page.
 */
async function switch_to_latest_tab(browser) {
  let pages = await browser.pages();
  console.log('📃 ', pages.length);
  page = pages[pages.length - 1];
  await page.bringToFront();
  return page;
}

/**
 * Set the width and height of viewport.
 * 
 * Note: width and height must be greater than the default,
 * otherwise an exception is thrown.
 * @param {puppeteer.Page} page - The current page.
 * @param {number} width - Width of the viewport.
 * @param {number} height - Height of the viewport.
 */
async function setViewport(page, width, height) {
  if (width < 800 || height < 600) {
    throw 'viewport size error';
  }
  await page.setViewport({
    width: width,
    height: height
  });
}

/**
 * Refresh the page.
 * @param {puppeteer.Page} page - The current page.
 */
async function refresh(page) {
  await page.evaluate(() => {
    location.reload(true);
  });
}

module.exports = {
  switch_to_latest_tab,
  setViewport,
  refresh,
}