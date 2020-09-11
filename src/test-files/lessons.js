const { By, until } = require('selenium-webdriver');
const { login } = require('../helpers/login');
const { multiClick } = require('../helpers/multiclick');
const { getDriver } = require('../helpers/getDriver');
const { saveExitLessons } = require('../helpers/saveExitLessons');
const { lessonsInputEntry } = require('../helpers/lessonsInputEntry');
const { dropdownClick } = require('../helpers/dropdownClick');

/**
 * Description: lessons() tests the Lessons section of the coding challenge.
 * @param {string} browserName - (ie: Firefox, Chrome)
 */
async function lessons(browserName) {
    let driver = await getDriver(browserName);

    try {
        console.log('---Begin by logging in with pre-determined user--- \n');
            await login(driver);
            await driver.sleep(6000);

        console.log('---Click the navbar item tied to Lessons 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//li[4]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']")), 29000);
            const lessonsBtn = await driver.findElement(By.xpath("//li[4]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']"));
            await multiClick(driver, lessonsBtn);

        console.log('---Click on the Lesson Title field row item--- \n');
            await driver.wait(until.elementLocated(By.xpath("//td[@class='first-table-data ng-star-inserted']")), 2000);
            const lessonTitle = await driver.findElement(By.xpath("//td[@class='first-table-data ng-star-inserted']"));
            await multiClick(driver, lessonTitle, 1);
            
        console.log('---Click on the OTUS SDET Tech Challenge - Student section--- \n');
            await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(),'Otus SDET Tech Challenge - Student Profile.pdf')]")), 5000);
            const otusClick = await driver.findElement(By.xpath("//h3[contains(text(),'Otus SDET Tech Challenge - Student Profile.pdf')]"));
            await multiClick(driver, otusClick, 1);

        console.log('---Click the Open Google Drive button--- \n');
            await driver.wait(until.elementLocated(By.xpath("//a[@class='ng-star-inserted']")), 5000);
            const googleDriveClick = await driver.findElement(By.xpath("//a[@class='ng-star-inserted']"));
            await multiClick(driver, googleDriveClick, 1);
    
        console.log('---Close the new PDF window and revert back to the Otus page--- \n');
            const originalWindow = await driver.getWindowHandle(); 
            await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 10000); 
            const windows = await driver.getAllWindowHandles();
            
            windows.forEach(async handle => { 
                if (handle !== originalWindow) {
                    await driver.switchTo().window(handle);
                }
            });

            await driver.wait(until.urlContains('https://drive.google.com/'), 8000); 
            await driver.close(); 
            await driver.switchTo().window(originalWindow);

        console.log('---Close the modal--- \n');
            await driver.wait(until.elementLocated(By.xpath("//span[@class='ot-modal-header-actions']//button")), 6000);
            const closeModal = await driver.findElement(By.xpath("//span[@class='ot-modal-header-actions']//button"));
            await multiClick(driver, closeModal, 1);

        console.log('---Click Save and Exit button to go back to main Lessons page--- \n');
            saveExitLessons(driver);

        console.log('---Click the Due Date field item in the Lessons table--- \n');
            await driver.wait(until.elementLocated(By.xpath("//td[@class='second-table-data']")), 9000);
            const dueBtn = await driver.findElement(By.xpath("//td[@class='second-table-data']"));
            await multiClick(driver, dueBtn, 1);

        console.log('---Click Save and Exit button to go back to main Lessons page--- \n');
            saveExitLessons(driver);

        console.log('---Click In Progress button in the Lessons table Status field item--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@id='otus-status-text']")), 8000);
            const inProgress = await driver.findElement(By.xpath("//div[@id='otus-status-text']"));
            await multiClick(driver, inProgress, 1);

        console.log('---Click Save and Exit button to go back to main Lessons page--- \n');
            saveExitLessons(driver);
            await driver.sleep(7000);

        console.log('---Enter 3 different inputs into the search box in the main Lessons page--- \n');
            lessonsInputEntry(driver);
            await driver.sleep(8000);
        
        // console.log('---Click on the dropdown icon. Then, click on the first dropdown item. Finally, click on the second dropdown item.--- \n');
        //     const path = "//i[@class='fa fa-chevron-down ng-star-inserted']"; 
        //     const path1 = "//li[1]//div[1]"; 
        //     const path2 = "//p[contains(text(),'QA Tech Challenge')]"; //if fails, try:  //li[2]//div[1]
        //     await dropdownClick(driver, path, path1, path2);
        //     await driver.sleep(7000);

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

module.exports = { lessons }