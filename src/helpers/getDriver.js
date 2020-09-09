
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const { Builder } = require('selenium-webdriver');

async function getDriver(browserName) {

    const screen = {
        width: 1999,
        height: 808
    }

    const headlessVar = process.env.HEADLESS; 
    let driver; 

    if (headlessVar === 'true') {
        driver = await new Builder()
            .forBrowser(browserName)
            .setChromeOptions(new chrome.Options().headless().windowSize(screen)) 
            .setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
            .build();
    } else {
        driver = await new Builder().forBrowser(browserName).build();
    }
    return driver;
}
module.exports = { getDriver };