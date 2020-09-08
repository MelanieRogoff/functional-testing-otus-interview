/**
 * 
 * @param {Object} driver - Pass Selenium Webdriver object here
 * @param {Object} element  - Element that user interacts with (ie: button, row, field)
 */
async function multiClick(driver, element, clickAmount=3, ms=1000) {
    for (i = 0; i < clickAmount; i++ ) { 
        await element.click();
        await driver.sleep(ms);
    }
}

module.exports = { multiClick }; 