const { By, Key } = require('selenium-webdriver');
/**
 * 
 * @param {string} driver - Pass Selenium Webdriver object here
 */
async function lessonsInputEntry(driver) {
    await driver.findElement(By.xpath("//div[@class='otus-input-search']")).sendKeys('123', Key.RETURN);
    await driver.sleep(9000);
    await driver.findElement(By.xpath("//div[@class='otus-input-search']")).sendKeys('ABC123!', Key.RETURN);
    await driver.sleep(9000);
    await driver.findElement(By.xpath("//div[@class='otus-input-search']")).sendKeys('Resources', Key.RETURN);
    await driver.sleep(9000);
}
module.exports = { lessonsInputEntry };