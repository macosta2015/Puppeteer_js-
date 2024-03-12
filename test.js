const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to Google
    await page.goto('https://www.google.com');

    // You can add further interactions here, such as searching for something on Google

    // Close the browser
    await browser.close();
})();
