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
           
            rowClicker.click();
                   
        console.log('---Click on the dropdown icon--- \n');

            await driver.sleep(2000); 

            await driver.wait(until.elementLocated(By.xpath("//i[@class='fa fa-search ng-star-inserted']")), 6000);

            const dropIcon = await driver.findElement(By.xpath("//i[@class='fa fa-search ng-star-inserted']"));

            multiClick(driver, dropIcon, 1);
            
        console.log('---Click on the first dropdown item--- \n');

            await driver.sleep(4000);

            await driver.wait(until.elementsLocated(By.xpath("//div[@id='otus-search-dropdown']//li[@class='ng-star-inserted']")), 6000);

            const drop1 = await driver.findElement(By.xpath("//div[@id='otus-search-dropdown']//li[@class='ng-star-inserted']"));

            multiClick(driver, drop1, 1, 1000);

        console.log('---Click the second dropdown item--- \n');
            await driver.sleep(4000);
           
            dropIcon.click();
           
            await driver.sleep(3000);

            await driver.wait(until.elementsLocated(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted")), 4000);

            const drop2 = await driver.findElement(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted"));

            multiClick(driver, drop2, 1);

        console.log('---Enter numeric, special character, and regular character values into the input box--- \n');

            await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('123', Key.RETURN);

            await driver.sleep(4000);

            await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('ABC123!', Key.RETURN);

            await driver.sleep(4000);

            await driver.findElement(By.xpath("//div[@class='my-bookshelf__header__container2']//input[@placeholder='Search']")).sendKeys('Resources', Key.RETURN);

        console.log('---Click on the row item once more in order to trigger the sub-navigation panel--- \n');

            await driver.wait(until.elementLocated(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']")), 4000);

            rowClicker.click();
            
            await driver.sleep(4000);

        console.log('---Click on the My Bookshelf sub-navigation item 3 times--- \n');
        //ERRORS STARTED HERE
            await driver.wait(until.elementLocated(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[2]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]")), 4000);

            const bookSubNav = await driver.findElement(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[2]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]"));

            multiClick(driver, bookSubNav);
                
        //Section 2, Step g.iii.2:
            // Click the + button and add a Resource
                //Click through each Resource Type, go thru process for each, ensure each type is getting registered/displayed properly

                //Click each button tied to each resource type during previous step

                //Restart process of adding Resource type by creating multiples of same Resource type with similar, different, identical names/files

        //Section 2, Step g.iii.3:
            //Click the + button and add a FOLDER
                //Create a folder name with the following combos:
                    //12345
                    //ABC123
                    //AB12!?
            
                //Click Cancel
            //Click the + button again and this time actually submit the Folder
            //Click thru the table of resources to see what happens now that folder was added

        //Section 2, Step g.iv:
            //Click My Drive 3 times
                //Click each field that appears upon clicking My Drive
            
            //Click the Shared with Me tab
                //If rows=empty, create test data and check functionality


        // console.log('---Click into the search box and input various numeric and character combinations.--- \n');

        
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