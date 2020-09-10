const { By, Key, until } = require('selenium-webdriver');
const { login } = require('../helpers/login');
const { multiClick } = require('../helpers/multiclick');
const { getDriver } = require('../helpers/getDriver');
const { inputEntry } = require('../helpers/inputEntry');
const { addResource } = require('../helpers/addResource');
const { threeDotClick } = require('../helpers/threeDotClick');

/**
 * Description: assessment() is exported so that it can be called in the drivers.js file along with all other test functions
 * @param {string} browserName - (ie: Firefox, Chrome)
 */
async function bookshelf(browserName) {
    let driver = await getDriver(browserName);

    try {
        console.log('---Begin by logging in with pre-determined user--- \n');
            await login(driver);

        console.log('---Click the navbar item tied to My Bookshelf 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//li[5]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]")), 20000);
            const bookButton = await driver.findElement(By.xpath("//li[5]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]"));
            await multiClick(driver, bookButton);

        console.log('---Click on the Resource table in order to access the sub-navigation panel--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']")), 2000);
            const resourceRow = await driver.findElement(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']"));
            await multiClick(driver, resourceRow, 1);
            
        console.log('---Click the Shared With Me sub-navigation item 3 times--- \n');
            await driver.sleep(5000);
            await driver.wait(until.elementLocated(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[1]//a[1]//ot-icon[1]")), 2000);
            const shareBtn = await driver.findElement(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[1]//a[1]//ot-icon[1]"));
            await multiClick(driver, shareBtn, 3, 3000);

        console.log('---Click on the row inside the Shared With Me table once--- \n');
            await driver.sleep(3000);
            await driver.wait(until.elementLocated(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']")), 4000);
            const rowClicker = await driver.findElement(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']"));
            await rowClicker.click();
                   
        console.log('---Click on the dropdown icon--- \n');
            await driver.sleep(2000); 
            await driver.wait(until.elementLocated(By.xpath("//i[@class='fa fa-search ng-star-inserted']")), 6000);
            const dropIcon = await driver.findElement(By.xpath("//i[@class='fa fa-search ng-star-inserted']"));
            await multiClick(driver, dropIcon, 1);
            
        console.log('---Click on the first dropdown item--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementsLocated(By.xpath("//div[@id='otus-search-dropdown']//li[@class='ng-star-inserted']")), 6000);
            const drop1 = await driver.findElement(By.xpath("//div[@id='otus-search-dropdown']//li[@class='ng-star-inserted']"));
            await multiClick(driver, drop1, 1, 1000);

        console.log('---Click the second dropdown item--- \n');
            await driver.sleep(4000);
            await multiClick(driver, dropIcon, 1, 3000);
            await driver.wait(until.elementsLocated(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted")), 4000);
            const drop2 = await driver.findElement(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted"));
           await multiClick(driver, drop2, 1);

        console.log('---Enter numeric, special character, and regular character values into the input box--- \n');
            await inputEntry(driver);
    
        console.log('---Click on the row item once more in order to trigger the sub-navigation panel--- \n');
            await driver.wait(until.elementLocated(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']")), 4000);
            await rowClicker.click();
            
        console.log('---Click on the My Bookshelf sub-navigation item 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[2]")), 2000);
            const bookSubNav = await driver.findElement(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[2]"));
            await driver.sleep(2000);
            await multiClick(driver, bookSubNav);
                
        console.log('--Click on the first table row in My Bookshelf--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']")), 6000);
            const bookRow = await driver.findElement(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']"));
            await multiClick(driver, bookRow, 1);

        console.log('---Click on the link in the modal--- \n');
            await driver.sleep(8000);
            const modalLink = await driver.findElement(By.xpath("//a[@class='tile-attachment-external-file-link']"));
            await multiClick(driver, modalLink, 1);

        console.log('---Close the new PDF window and revert back to the Otus page--- \n');
            const originalWindow = await driver.getWindowHandle(); //storing ID of the original window here
            await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 10000); //grabbing the new tab
            const windows = await driver.getAllWindowHandles();
            
            windows.forEach(async handle => { //looping through to find the new window handle
                if (handle !== originalWindow) {
                    await driver.switchTo().window(handle);
                }
            });

            await driver.wait(until.urlContains('blob:https://my.otus.com/'), 10000); 
            await driver.close(); 
            await driver.switchTo().window(originalWindow);

        console.log('---Close the modal--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='reveal otus-modal modal-fixed-medium otus-modal-top-radius']//button[@class='btn btn-light small-size ng-star-inserted'][contains(text(),'Close')]")), 3000);
            const closeBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-modal modal-fixed-medium otus-modal-top-radius']//button[@class='btn btn-light small-size ng-star-inserted'][contains(text(),'Close')]"));
            await driver.sleep(2000);
            await multiClick(driver, closeBtn, 1);

        console.log('---Enter numeric, special character, and regular character values into the input box--- \n');
            await inputEntry(driver);

        console.log('---Click the + button to add a Resource--- \n');
            await addResource(driver);
        
        console.log('---Click on the Resource dropdown line item --- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@id='outerWrapper']//div[@class='ui-overlaypanel-content']//div[1]//span[1]")), 8000);
            const resourceDropdown = await driver.findElement(By.xpath(" //div[@id='outerWrapper']//div[@class='ui-overlaypanel-content']//div[1]//span[1]"));
            await multiClick(driver, resourceDropdown, 1, 2000);
        
        console.log('---Click Google Drive button; do not log in for this test --- \n');
            await driver.wait(until.elementLocated(By.xpath("//body[1]/div[5]/div[1]/div[1]/ot-drag-drop-area[1]/div[1]/ot-attach-wrapper[1]/div[1]/div[1]/div[1]/div[7]")), 2000);
            const googleDrive = await driver.findElement(By.xpath("//body[1]/div[5]/div[1]/div[1]/ot-drag-drop-area[1]/div[1]/ot-attach-wrapper[1]/div[1]/div[1]/div[1]/div[7]"));
            await multiClick(driver, googleDrive, 1);

        console.log('---Click on the 3 dots in the Resource table--- \n');
        //LEFT OFF HERE -- ERRORS
            await threeDotClick(driver);

        console.log('---Click Share, then click Cancel --- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@id='outerWrapper']//div[@class='ui-overlaypanel-content']//div[1]//span[1]")), 2000);
            const share = await driver.findElement(By.xpath("//div[@id='outerWrapper']//div[@class='ui-overlaypanel-content']//div[1]//span[1]"));
            await multiClick(driver, share, 1);
            const cancelBtn = await driver.findElement(By.xpath("//div[4]//div[1]//div[1]//div[1]//button[1]"));
            await multiClick(driver, cancelBtn, 1);

        console.log('---Click on the 3 dots in the Resource table again--- \n');
            await threeDotClick(driver);

        console.log('---Click Edit, then click the close button--- \n');
            const editBtn = await driver.findElement(By.xpath("//div[@class='my-bookshelf__resources']//div[2]//span[1]"));
            await multiClick(driver, editBtn, 1);
            const closeEditBtn = await driver.findElement(By.xpath("//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']"));
            await multiClick(driver, closeEditBtn, 1);

        console.log('---Click on the 3 dots in the Resource table again and click Move--- \n');
            await threeDotClick(driver);
            const moveBtn = await driver.findElement(By.xpath("//div[@id='outerWrapper']//div[3]//span[1]"));
            await multiClick(driver, moveBtn, 1);

        console.log('---Click Done--- \n');
            const doneBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-modal modal-fixed-medium otus-modal-top-radius']//div[@class='nav-right']//button[@class='btn btn-light small-size ng-star-inserted']"));
            await multiClick(driver, doneBtn, 1);
        
        console.log('---Close the notification window--- \n');
            const notify = await driver.findElement(By.xpath("//div[@class='close-button ng-star-inserted']"));
            await multiClick(driver, notify, 1);

        console.log('---Click cancel--- \n');
            const canceler = await driver.findElement(By.xpath("//div[19]//div[1]//div[1]//div[1]//button[1]"));
            await multiClick(driver, canceler, 1);

        console.log('---Final step for this page - Click on the three dots, click Delete and cancel the deletion--- \n');
            await threeDotClick(driver);
            const deleteBtn = await driver.findElement(By.xpath("//div[@id='outerWrapper']//div[4]//span[1]"))
            await multiClick(driver, deleteBtn, 1);
            await driver.sleep(4000);
            const cancelDelete = await driver.findElement(By.xpath("//button[@class='button confirm-alert-button ng-star-inserted']"));
            await multiClick(driver, cancelDelete, 1);

        console.log('---Click on Google Drive sub-navigation panel 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[3]//a[1]//span[1]")), 4000);
            const googleDriveBtn = await driver.findElement(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[3]//a[1]//span[1]"));
            await multiClick(driver, googleDriveBtn);
            await driver.sleep(4000);

        console.log('---Click on the first row in the table in Google Drive view--- \n');
            await driver.wait(until.elementLocated(By.xpath("//tr[@class='ng-star-inserted']")), 8000);
            const googleRow = await driver.findElement(By.xpath("//tr[@class='ng-star-inserted']"));
            await multiClick(driver, googleRow, 1);

        console.log('---Enter 123, AB12, AB12!? in the search box and press enter--- \n');
            await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('123', Key.RETURN);
            await driver.sleep(4000);
            await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('AB12', Key.RETURN);
            await driver.sleep(4000);
            await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('AB12!?', Key.RETURN);
            await driver.sleep(4000);

        console.log('---Click on the Shared with Me tab within the page--- \n');
            await driver.wait(until.elementLocated(By.xpath("//button[@class='otus-button-group dark ng-star-inserted']")), 5000);
            const sharedTab = await driver.findElement(By.xpath("//button[@class='otus-button-group dark ng-star-inserted']")); 
            await multiClick(driver, sharedTab, 1);
            
        console.log('---Click on the first row in the table in Shared with Me view--- \n');
            const firstSharedRow = await driver.findElement(By.xpath("//tr[@class='ng-star-inserted']"));
            await multiClick(driver, firstSharedRow, 1);

        console.log('---FINAL STEP: Click on the Google Drive tab--- \n');
            const driveTab = await driver.findElement(By.xpath('//button[contains(text(), "My Drive")]'));
            await multiClick(driver, driveTab, 1);

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

module.exports = { bookshelf }