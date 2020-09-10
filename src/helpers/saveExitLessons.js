
const { By, until } = require('selenium-webdriver');
const { multiClick } = require('./multiclick');
/**
 * @param {string} driver - Pass Selenium Webdriver object here
 */
async function saveExitLessons(driver) {
    await driver.wait(until.elementLocated(By.xpath("//button[@class='otus-button dark ng-star-inserted']")), 7000);
    const saveExit = await driver.findElement(By.xpath("//button[@class='otus-button dark ng-star-inserted']"));
    await multiClick(driver, saveExit, 1);
}

module.exports = { saveExitLessons };
