const { By, until } = require('selenium-webdriver');
const { multiClick } = require('../helpers/multiclick');

async function dropdown(driver) {
    await driver.wait(until.elementLocated(By.xpath("//div[@class='dropdown-option ng-star-inserted']//span[contains(text(),'Resource')]")), 2000);
    const resourceDropdown = await driver.findElement(By.xpath("//div[@class='dropdown-option ng-star-inserted']//span[contains(text(),'Resource')]"));
    await driver.sleep(2000);
    await multiClick(driver, resourceDropdown, 1);
}

module.exports = { dropdown };