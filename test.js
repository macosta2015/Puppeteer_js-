const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false, // Launch Chrome with visible browser window
            userDataDir: '/Users/marioacosta/Library/Application Support/Google/Chrome/Profile 1' // Path to your user data directory
        });

        const pages = await browser.pages(); // Get all open pages (tabs)

        // Open a new tab
        const newPage = await browser.newPage();

        // Navigate the new tab to a URL
        await newPage.goto('https://cad.onshape.com/documents?resourceType=resourcecompanyowner&nodeId=65efc5e06e5bec02f57742fe', { waitUntil: 'networkidle0', timeout: 0 });

        // You can add further interactions here

        // Wait for 10 seconds before closing the browser
        await new Promise(resolve => setTimeout(resolve, 10000));

        // Close the browser
        await browser.close();
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();


