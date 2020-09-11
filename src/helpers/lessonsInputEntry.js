const { By, Key, until } = require('selenium-webdriver');
/**
 * 
 * @param {string} driver - Pass Selenium Webdriver object here
 */
async function lessonsInputEntry(driver) {
    await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Search']")), 9000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('123', Key.RETURN);
    await driver.sleep(9000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('ABC123!', Key.RETURN);
    await driver.sleep(9000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('Resources', Key.RETURN);
    await driver.sleep(9000);
}
module.exports = { lessonsInputEntry };