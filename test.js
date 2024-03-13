// const puppeteer = require('puppeteer');

// (async () => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: false, // Launch Chrome with visible browser window
//             userDataDir: '/Users/marioacosta/Library/Application Support/Google/Chrome/Profile 1' // Path to your user data directory
//         });

//         const pages = await browser.pages(); // Get all open pages (tabs)

//         // Open a new tab
//         const newPage = await browser.newPage();

//         // Navigate the new tab to a URL
//         await newPage.goto('https://cad.onshape.com/documents?resourceType=resourcecompanyowner&nodeId=65efc5e06e5bec02f57742fe', { waitUntil: 'networkidle0', timeout: 0 });

//         // Fill out the form fields
//         await newPage.type('input[name="email"].form-control', 'macosta1297@gmail.com');
//         await newPage.type('input[name="password"].form-control', 'ElonMusk2050');

//         // Click on the submit button
//         await newPage.click('button.btn.btn-primary.os-signin-button');
//         await new Promise(resolve => setTimeout(resolve, 5000));

//         // Optionally, you can wait for navigation to complete
//         await newPage.waitForNavigation();

//         // Add a timer to wait for 10 seconds after clicking the submit button
//         await new Promise(resolve => setTimeout(resolve, 10000));

//         // Click on the filter button
//         await newPage.click('.documents-filter-icon');

//         // Take a screenshot to verify the form submission
//         await newPage.screenshot({ path: 'form_submission.png' });

//         // Close the browser
//         await browser.close();
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// })();

const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({
            headless: false, // Launch Chrome with visible browser window
            userDataDir: '/Users/marioacosta/Library/Application Support/Google/Chrome/Profile 1' // Path to your user data directory
        });

        console.log('Opening new page...');
        const newPage = await browser.newPage();

        console.log('Navigating to the URL...');
        await newPage.goto('https://cad.onshape.com/documents?resourceType=resourcecompanyowner&nodeId=65efc5e06e5bec02f57742fe', { waitUntil: 'networkidle0', timeout: 0 });

        console.log('Filling out form fields...');
        await newPage.type('input[name="email"].form-control', 'macosta1297@gmail.com');
        await newPage.type('input[name="password"].form-control', 'ElonMusk2050');

        console.log('Clicking on the submit button...');
        await newPage.click('button.btn.btn-primary.os-signin-button');

        // Wait for navigation to complete
        console.log('Waiting for navigation...');
        // await newPage.waitForNavigation({ waitUntil: 'networkidle0' });

        console.log('Waiting for 10 seconds after navigation...');
        await new Promise(resolve => setTimeout(resolve, 10000));

        console.log('Scrolling to the element...');
        await newPage.evaluate(() => {
            const button = document.querySelector('.documents-filter-icon');
            if (button) {
                button.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Button not found.');
            }
        });

        console.log('Waiting for 2 seconds after scrolling...');
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Clicking on the element...');
        await newPage.click('.documents-filter-icon');

        console.log('Taking a screenshot...');
        await newPage.screenshot({ path: 'form_submission.png' });

        console.log('Waiting for 10 seconds after navigation...');
        await new Promise(resolve => setTimeout(resolve, 10000));

        console.log('Closing the browser...');
        await browser.close();

        console.log('Script completed successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
