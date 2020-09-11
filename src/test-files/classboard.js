const { By, Key, until } = require('selenium-webdriver');
const { login } = require('../helpers/login');
const { multiClick } = require('../helpers/multiclick');
const { getDriver } = require('../helpers/getDriver');

/**
 * Description: classboard() tests the Classboard section of the coding challenge.
 * @param {string} browserName - (ie: Firefox, Chrome)
 */
async function classboard(browserName) {
    let driver = await getDriver(browserName);

    try {
        console.log('---Begin by logging in with pre-determined user--- \n');
            await login(driver);

        console.log('---Click the navbar item tied to Classes 4 times--- \n');
            await driver.sleep(8000);
            await driver.wait(until.elementLocated(By.xpath("//span[contains(text(),'Classes')]")), 19000);
            const classesBtn = await driver.findElement(By.xpath("//span[contains(text(),'Classes')]"));
            await multiClick(driver, classesBtn, 4, 8000);

        console.log('---Press the negative icon--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='class-card__recognition__negative']")), 9000);
            const negative = await driver.findElement(By.xpath("//div[@class='class-card__recognition__negative']"));
            await multiClick(driver, negative, 1);
            await driver.sleep(9000);

        console.log('---Click the back button, as there are no options to sort through in the database --- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='student-recognition__header__options']//button[@class='otus-button icon-button dark ng-star-inserted']")), 9000);
            const backBtn = await driver.findElement(By.xpath("//div[@class='student-recognition__header__options']//button[@class='otus-button icon-button dark ng-star-inserted']"));
            await multiClick(driver, backBtn, 1);

        console.log('---Click the navbar item tied to Classes--- \n');
            await driver.sleep(6000);
            await driver.wait(until.elementLocated(By.xpath("//span[contains(text(),'Classes')]")), 9000);
            await multiClick(driver, classesBtn, 1);

        console.log('---Click on the QA Tech Challenge title--- \n');
            await driver.sleep(6000);
            await driver.wait(until.elementLocated(By.xpath("//span[@class='ng-star-inserted']")), 2000);
            const qaTech = await driver.findElement(By.xpath("//span[@class='ng-star-inserted']"));
            await multiClick(driver, qaTech, 1);
        
        console.log('---Click on the Load More button--- \n');
            await driver.sleep(5000);
            await driver.wait(until.elementLocated(By.xpath("//div[@class='ot-class-board__load-more-button ng-star-inserted']//button")), 9000);
            const loadMore = await driver.findElement(By.xpath("//div[@class='ot-class-board__load-more-button ng-star-inserted']//button"));
            await multiClick(driver, loadMore, 1);
        
        console.log('---Click on the Welcome paragraph--- \n');
            await driver.sleep(6000);
            await driver.wait(until.elementLocated(By.xpath("//div[@class='ot-post-summary__post-body']")), 6000);
            const welcome = await driver.findElement(By.xpath("//div[@class='ot-post-summary__post-body']"));
            await multiClick(driver, welcome, 1);

        console.log('---Click the Comment button--- \n');
            await driver.sleep(9000);
            await driver.wait(until.elementLocated(By.xpath("//button[@class='ng-star-inserted']")), 5000);
            const comment = await driver.findElement(By.xpath("//button[@class='ng-star-inserted']"));
            await multiClick(driver, comment, 1);
            await driver.sleep(4000);

        console.log('---Type in a comment---');
            await driver.sleep(5000);
            await driver.findElement(By.xpath("//textarea[@placeholder='Start typing comment here...']")).sendKeys('This is a note', Key.RETURN);
            
        console.log('---Click the Close button - not saving for this test--- \n');
            await driver.sleep(9000);
            await driver.wait(until.elementLocated(By.xpath("//span[@class='ot-modal-header-actions']//button")), 4000);
            const closeCommentBtn = await driver.findElement(By.xpath("//span[@class='ot-modal-header-actions']//button"));
            await multiClick(driver, closeCommentBtn, 1);
            await driver.sleep(7000);

        console.log('---Click the back arrow--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//div[@class='ot-page-header-nav']//button")), 5000);
            const backArrow = await driver.findElement(By.xpath("//div[@class='ot-page-header-nav']//button"));
            await multiClick(driver, backArrow, 1);

        console.log('---Click the navbar item tied to Classes--- \n');
            await driver.sleep(6000);
            await driver.wait(until.elementLocated(By.xpath("//li[2]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]")), 9000);
            const classNav = await driver.findElement(By.xpath("//li[2]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]"));
            await multiClick(driver, classNav, 1);

        console.log('---Click anywhere on the screen in order to expand the view so that the positive icon can be pressed --- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='student-classes__container']")), 9000);
            const expander = await driver.findElement(By.xpath("//div[@class='student-classes__container']"));
            await multiClick(driver, expander, 1);

        console.log('---Press the positive icon--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='class-card__recognition__positive']")), 9000);
            const positive = await driver.findElement(By.xpath("//div[@class='class-card__recognition__positive']"));
            await multiClick(driver, positive, 1);

        console.log('---Click the back button, as there are no options to sort through in the database --- \n');
            await driver.wait(until.elementLocated(By.xpath("//span[contains(text(),'Back')]")), 9000);
            const newBack = await driver.findElement(By.xpath("//span[contains(text(),'Back')]"));
            await multiClick(driver, newBack, 1);

        console.log('---Click the navbar item tied to Classes one more time--- \n');
            await driver.sleep(9000);
            await driver.wait(until.elementLocated(By.xpath("//li[2]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]")), 19000);
            await multiClick(driver, classNav, 1);

        console.log('---Test is complete--- \n');
    }
    catch(err) {
        console.log('----ERROR--- \n');
        console.log(err.message);
    }
    finally {
      await driver.quit();
    }
}

module.exports = { classboard }