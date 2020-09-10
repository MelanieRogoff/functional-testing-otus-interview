const { By, Key } = require('selenium-webdriver');
/**
 * 
 * @param {string} driver - (ie: Chrome, Firefox) 
 */
async function inputEntry(driver) {
    await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('123', Key.RETURN);
    await driver.sleep(4000);
    await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('ABC123!', Key.RETURN);
    await driver.sleep(4000);
    await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('Resources', Key.RETURN);
}
module.exports = { inputEntry };