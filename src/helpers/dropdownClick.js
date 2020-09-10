
const { By, until } = require('selenium-webdriver');
const { multiClick } = require('./multiclick');
/**
 * @param {string} driver - Pass Selenium Webdriver object here
 */
async function dropdownClick(driver, path, path1, path2) {
    //Click on the dropdown icon
        await driver.wait(until.elementLocated(By.xpath(path)), 9000);
        const dropIcon = await driver.findElement(By.xpath(path));
        await multiClick(driver, dropIcon, 1);
    
    //Click on the first dropdown item
        await driver.sleep(4000);
        await driver.wait(until.elementsLocated(By.xpath(path1)), 9000);
        const drop1 = await driver.findElement(By.xpath(path1));
        await multiClick(driver, drop1, 1, 2000);

    //Click on the second dropdown item
        await multiClick(driver, dropIcon, 1, 2000);
        await driver.wait(until.elementsLocated(By.css(path2)), 4000);
        const drop2 = await driver.findElement(By.css(path2));
        await multiClick(driver, drop2, 1);
        await driver.sleep(5000);
}

module.exports = { dropdownClick };
