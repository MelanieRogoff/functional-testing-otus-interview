
const { By, until } = require('selenium-webdriver');
const { multiClick } = require('./multiclick');
/**
 * 
 * @param {string} driver - Pass Selenium Webdriver object here
 */
async function threeDotClick(driver) {
    await driver.wait(until.elementLocated(By.xpath("//td[@class='bookshelf-table__column2 ng-star-inserted']")), 5000);
    const threeDots = await driver.findElement(By.xpath("//td[@class='bookshelf-table__column2 ng-star-inserted']"));
    await multiClick(driver, threeDots, 1);
}
module.exports = { threeDotClick };
