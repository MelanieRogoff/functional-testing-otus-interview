const { By, Key, until } = require('selenium-webdriver');
const { multiClick } = require('./multiclick');

/**
 * 
 * @param {string} driver - (ie: Chrome, Firefox) 
 */
async function folderNames(driver) {

    await driver.wait(until.elementLocated(By.xpath("//i[@class='fas fa-folder']")), 3000);
    const folderBtn = await driver.findElement(By.xpath("//i[@class='fas fa-folder']"));
    await multiClick(driver, folderBtn, 1); //Click on the folder 

    await driver.findElement(By.xpath("//input[@placeholder='Folder's Name...']")).sendKeys('123', Key.RETURN);
    await driver.sleep(4000);
    const done = await driver.findElement(By.xpath("//div[@class='reveal otus-modal modal-fixed-textview otus-modal-top otus-modal-top-radius']//div[@class='nav-right']//button[@class='btn btn-light small-size ng-star-inserted']"));
    await multiClick(driver, done, 1); //First entry

    await driver.wait(until.elementLocated(By.xpath("//i[@class='fas fa-folder']")), 3000);
    await multiClick(driver, folderBtn, 1); //click folder again

    await driver.findElement(By.xpath("//input[@placeholder='Folder's Name...']")).sendKeys('ABC123', Key.RETURN);
    await driver.sleep(4000);
    const done = await driver.findElement(By.xpath("//div[@class='reveal otus-modal modal-fixed-textview otus-modal-top otus-modal-top-radius']//div[@class='nav-right']//button[@class='btn btn-light small-size ng-star-inserted']"));
    await multiClick(driver, done, 1); //Second entry

    await driver.wait(until.elementLocated(By.xpath("//i[@class='fas fa-folder']")), 3000);
    await multiClick(driver, folderBtn, 1); //final folder click

    await driver.findElement(By.xpath("//input[@placeholder='Folder's Name...']")).sendKeys('ABC123!?', Key.RETURN);
    await driver.sleep(4000);
    const done = await driver.findElement(By.xpath("//div[@class='reveal otus-modal modal-fixed-textview otus-modal-top otus-modal-top-radius']//div[@class='nav-right']//button[@class='btn btn-light small-size ng-star-inserted']"));
    await multiClick(driver, done, 1); //Final entry
}
module.exports = { folderNames };