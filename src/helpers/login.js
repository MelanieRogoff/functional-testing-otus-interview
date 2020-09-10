const { By, Key, until } = require('selenium-webdriver');

/**
 * 
 * @param {string} driver - Pass Selenium Webdriver object here
 */
async function login(driver) {
    await driver.get('https://my.otus.com/login'); 
    await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='email']")), 9000);
    await driver.findElement(By.xpath("//input[@placeholder='email']")).sendKeys('mgrogoff@gmail.com', Key.RETURN);
    await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('M1a2z3e4h5?', Key.RETURN);
}

module.exports = { login };