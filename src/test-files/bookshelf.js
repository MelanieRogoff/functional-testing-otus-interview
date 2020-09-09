const { By, Key, until } = require('selenium-webdriver');
const { login } = require('../helpers/login');
const { multiClick } = require('../helpers/multiclick');
const { openClose } = require('../helpers/openclose');
const { getDriver } = require('../helpers/getDriver');

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
                   
        // console.log('---Click on the dropdown icon--- \n');
        //     await driver.sleep(2000); 
        //     await driver.wait(until.elementLocated(By.xpath("//i[@class='fa fa-search ng-star-inserted']")), 6000);
        //     const dropIcon = await driver.findElement(By.xpath("//i[@class='fa fa-search ng-star-inserted']"));
        //     await multiClick(driver, dropIcon, 1);
            
        // console.log('---Click on the first dropdown item--- \n');
        //     await driver.sleep(4000);
        //     await driver.wait(until.elementsLocated(By.xpath("//div[@id='otus-search-dropdown']//li[@class='ng-star-inserted']")), 6000);
        //     const drop1 = await driver.findElement(By.xpath("//div[@id='otus-search-dropdown']//li[@class='ng-star-inserted']"));
        //     await multiClick(driver, drop1, 1, 1000);

        // console.log('---Click the second dropdown item--- \n');
        //     await driver.sleep(4000);
        //     await dropIcon.click();
        //     await driver.sleep(3000);
        //     await driver.wait(until.elementsLocated(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted")), 4000);
        //     const drop2 = await driver.findElement(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted"));
        //    await multiClick(driver, drop2, 1);

        // console.log('---Enter numeric, special character, and regular character values into the input box--- \n');
        //     await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('123', Key.RETURN);
        //     await driver.sleep(4000);
        //     await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('ABC123!', Key.RETURN);
        //     await driver.sleep(4000);
        //     await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('Resources', Key.RETURN);

        console.log('---Click on the row item once more in order to trigger the sub-navigation panel--- \n');
            await driver.wait(until.elementLocated(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']")), 4000);
            await rowClicker.click();
            
        console.log('---Click on the My Bookshelf sub-navigation item 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[2]")), 2000);
            const bookSubNav = await driver.findElement(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[2]"));
            await driver.sleep(4000);
            await multiClick(driver, bookSubNav);
                
        console.log('--Click on the first table row in My Bookshelf--- \n');
            await driver.wait(until.elementLocated(By.xpath("//td[@class='bookshelf-table__column1']")), 2000);
            const bookRow = await driver.findElement(By.xpath("//td[@class='bookshelf-table__column1']"));
            await driver.sleep(4000);
            await multiClick(driver, bookRow, 1);

        console.log('---Click on the link in the modal--- \n');
            await driver.wait(until.elementLocated(By.xpath("//a[@class='tile-attachment-external-file-link']")), 2000);
            const modalLink = await driver.findElement(By.xpath("//a[@class='tile-attachment-external-file-link']"));
            await driver.sleep(5000);
            await multiClick(driver, modalLink, 1);

        console.log('---Close the new PDF window and revert back to the Otus page--- \n');
    //LEFT OFF HERE 
            driver.manage().window().maximize(); 
            const mainWindow = driver.get("https://my.otus.com/bookshelf/my-bookshelf");
            // driver.getWindowHandle();            
            driver.switchTo().window(mainWindow);

        console.log('---Close the modal--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='reveal otus-modal modal-fixed-medium otus-modal-top-radius']//button[@class='btn btn-light small-size ng-star-inserted'][contains(text(),'Close')]")), 3000);
            const closeBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-modal modal-fixed-medium otus-modal-top-radius']//button[@class='btn btn-light small-size ng-star-inserted'][contains(text(),'Close')]"));
            await driver.sleep(2000);
            await multiClick(driver, closeBtn, 1);

        console.log('---Enter numeric, special character, and regular character values into the input box--- \n');
            await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('123', Key.RETURN);
            await driver.sleep(4000);
            await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('ABC123!', Key.RETURN);
            await driver.sleep(4000);
            await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('Resources', Key.RETURN);
        
        console.log('---Click the + button to add a Resource--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='ellipses-button']")), 3000);
            const addResource = await driver.findElement(By.xpath("//div[@class='ellipses-button']"));
            await driver.sleep(6000);
            await multiClick(driver, addResource, 1);

        console.log('---Click on the Resource dropdown line item --- \n');
            

        console.log('---Click on the upload resource type--- \n');

        console.log('---Click back button - not uploading for now --- \n');

        console.log('---Click attachment button, enter www.google.com as the link, Google as the link name, and press Save --- \n');

        console.log('---Click add photo button and click back button--- \n');

        console.log('---Click add video button and click back button--- \n');

        console.log('---Click add Youtube button and click back button--- \n');

        console.log('---Click add audio button and click back button--- \n');

        console.log('---Click add audio button and click back button--- \n');

        console.log('---Click Google Drive button--- \n');

        console.log('---Click add from OneDrive button and click back button--- \n');

        console.log('---Click add page button and click back button--- \n');

        console.log('---Click close button on resource type modal--- \n');

        console.log('---Click add resource button again and this time click Folder--- \n');

        console.log('---Input 123, ABC123, and AB12!? folder names click Done for each--- \n');

        console.log('---Click add resource button once more and click Folder--- \n');
        
        console.log('---Click Cancel--- \n');

        console.log('---Click on the 3 dots in the Resource table--- \n');

        console.log('---Click Share, then click Cancel --- \n');

        console.log('---Click on the 3 dots in the Resource table again--- \n');

        console.log('---Click Edit, then click the close button--- \n');

        console.log('---Click on the 3 dots in the Resource table again and click Move--- \n');

        console.log('---Click cancel--- \n');

        console.log('---Click on Google Drive sub-navigation panel 3 times--- \n');

        console.log('---Click on the first row in the table in Google Drive view--- \n');

        console.log('---Enter 123, AB12, AB12!? in the search box and press enter--- \n');

        console.log('---Click on the Shared with Me tab within the page--- \n');

        console.log('---Click on the first row in the table in Shared with Me view--- \n');

        console.log('---Click on the Google Drive tab--- \n');

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