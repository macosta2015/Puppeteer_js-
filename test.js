const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false }); // Launch Chrome with visible browser window
        const page = await browser.newPage();

        // Navigate to Google
        const navigationPromise = page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 0 });
        await page.goto('https://cad.onshape.com/documents?resourceType=resourcecompanyowner&nodeId=65efc5e06e5bec02f57742fe', { waitUntil: 'networkidle0', timeout: 0 });
        await navigationPromise;

        // You can add further interactions here, such as searching for something on Google
        // For example, searching for "Puppeteer tutorial"
        await page.type('input[name="q"]', 'Puppeteer tutorial'); // Type the search query
        await page.keyboard.press('Enter'); // Press the Enter key

        // Wait for search results to load
        await page.waitForSelector('#search');

        // Capture a screenshot of the search results page
        await page.screenshot({ path: 'google_search_results.png' });

        // Close the browser
        await browser.close();
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
