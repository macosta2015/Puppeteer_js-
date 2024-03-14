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
            const thirdButton = document.querySelectorAll('.documents-filter-icon')[2];
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });

        console.log('Waiting for 2 seconds after scrolling...');
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Clicking on the third element...');
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.documents-filter-icon')[2];
            if (thirdButton) {
                thirdButton.click();
            } else {
                console.error('Third button not found.');
            }
        });

        console.log('Waiting for 2 seconds after selecting the "Created By Me"...');
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Clicking on the "Scale Sketch Example - Copy" element...');
        await newPage.evaluate(() => {
            const documentNameElement = document.querySelector('span[aria-label="Document name: Scale Sketch Example - Copy"][ng-bind-html="document.resultHighlight"]');
            if (documentNameElement) {
                documentNameElement.click();
            } else {
                console.error('Element with text "Scale Sketch Example - Copy" not found.');
            }
        });

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



// const puppeteer = require('puppeteer');

// (async () => {
//     try {
//         console.log('Launching browser...');
//         const browser = await puppeteer.launch({
//             headless: false, // Launch Chrome with visible browser window
//             userDataDir: '/Users/marioacosta/Library/Application Support/Google/Chrome/Profile 1' // Path to your user data directory
//         });

//         console.log('Opening new page...');
//         const newPage = await browser.newPage();

//         console.log('Navigating to the URL...');
//         await newPage.goto('https://cad.onshape.com/documents?resourceType=resourcecompanyowner&nodeId=65efc5e06e5bec02f57742fe', { waitUntil: 'networkidle0', timeout: 0 });

//         console.log('Filling out form fields...');
//         await newPage.type('input[name="email"].form-control', 'macosta1297@gmail.com');
//         await newPage.type('input[name="password"].form-control', 'ElonMusk2050');

//         console.log('Clicking on the submit button...');
//         await newPage.click('button.btn.btn-primary.os-signin-button');

//         // Wait for navigation to complete
//         console.log('Waiting for navigation...');
//         // await newPage.waitForNavigation({ waitUntil: 'networkidle0' });

//         console.log('Waiting for 10 seconds after navigation...');
//         await new Promise(resolve => setTimeout(resolve, 10000));

//         console.log('Scrolling to the element...');
//         await newPage.evaluate(() => {
//             const buttons = document.querySelectorAll('.documents-filter-icon');
//             if (buttons.length > 0) {
//                 buttons.forEach(button => {
//                     button.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
//                 });
//             } else {
//                 console.error('Buttons not found.');
//             }
//         });

//         console.log('Waiting for the elements to become clickable...');
//         const buttons = await newPage.$$('.documents-filter-icon');
//         for (const button of buttons) {
//             await button.click();
//         }

//         console.log('Taking a screenshot...');
//         await newPage.screenshot({ path: 'form_submission.png' });

//         console.log('Waiting for 10 seconds after navigation...');
//         await new Promise(resolve => setTimeout(resolve, 10000));

//         console.log('Closing the browser...');
//         await browser.close();

//         console.log('Script completed successfully.');
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// })();




