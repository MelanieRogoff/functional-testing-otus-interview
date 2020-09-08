/**
 * 
 * @param {Object} driver - Pass Selenium Webdriver object here
 * @param {Object} open  - Open Element that user interacts with (ie: button, row, field)
 * @param {Object} close  - Close icon button 
 */
async function openClose(driver, open, close, clickAmount=3, ms=1000) {
    for (i = 0; i < clickAmount; i++ ) { 
        await open.click();
        await driver.sleep(ms);
        await close.click();
        await driver.sleep(ms);
    }
}

module.exports = { openClose }; 