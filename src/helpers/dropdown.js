const { By, until } = require('selenium-webdriver');
const { multiClick } = require('../helpers/multiclick');
/**
 * @param {string} driver - Pass Selenium Webdriver object here
 */
async function dropdown(driver) {
    await driver.wait(until.elementLocated(By.xpath("//div[@id='outerWrapper']//div[@class='ui-overlaypanel-content']//div[1]//span[1]")), 8000);
    const resourceDropdown = await driver.findElement(By.xpath(" //div[@id='outerWrapper']//div[@class='ui-overlaypanel-content']//div[1]//span[1]"));
    await driver.sleep(2000);
    await multiClick(driver, resourceDropdown, 1);
}

module.exports = { dropdown };