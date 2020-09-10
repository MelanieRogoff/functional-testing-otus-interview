
const { By, until } = require('selenium-webdriver');
const { multiClick } = require('./multiclick');

/**
 * @param {string} path - (ie: "///div[@class='ellipses-button']") 
 */
async function addResource(driver) {
    await driver.wait(until.elementLocated(By.xpath("//div[@class='ellipses-button']")), 3000);
    const addResource = await driver.findElement(By.xpath("//div[@class='ellipses-button']"));
    await driver.sleep(6000);
    await multiClick(driver, addResource, 1);
}

module.exports = { addResource };
