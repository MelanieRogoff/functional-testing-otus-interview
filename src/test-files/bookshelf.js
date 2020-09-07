const { Builder, By, Key, until } = require('selenium-webdriver');

// SECTION 2: My Bookshelf Check 
(async function bookshelf() {
    let driver = await new Builder().forBrowser('chrome').build();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try {
    //Section 2, Step b: Login
        console.log('---Begin by logging in with pre-determined user--- \n');
            await driver.get('https://my.otus.com/login');
            await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='email']")), 29000);
            await driver.findElement(By.xpath("//input[@placeholder='email']")).sendKeys('mgrogoff@gmail.com', Key.RETURN);
            await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('M1a2z3e4h5?', Key.RETURN);

        console.log('---Click the navbar item tied to My Bookshelf 3 times--- \n');
        
        //Section 2, Step f (c-e are not needed in the test):
            const bookshelfIconPath = "//li[5]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]";

            await driver.wait(until.elementLocated(By.xpath(bookshelfIconPath)), 4000);
            const button = await driver.findElement(By.xpath(bookshelfIconPath));
            button.click(); //1st click
            await sleep(2000);
            button.click(); //2nd click
            await sleep(2000);
            button.click(); //3rd click
            await sleep(2000);
        
    //SECTION 2, STEP g.ii: 
        //Click on the Shared With Me sub-navigation item 3 times

        console.log('---Click the Shared With Me sub-navigation item 3 times--- \n');

            const sharedLink = "//div[@class='navbar secondary-nav ng-star-inserted']//li[1]//a[1]";

            await driver.wait(until.elementLocated(By.xpath(sharedLink)), 5000);

            const shareBtn = await driver.findElement(By.xpath(sharedLink));
            shareBtn.click();
            await sleep(2000); //1st Click
            shareBtn.click();
            await sleep(2000); //2nd Click
            shareBtn.click();
            await sleep(2000); //3rd Click


    //Section 2, Step g.ii.2:
        //Create information to populate the Shared With Me rows with
        //ACTUALLY, DO THIS INSTEAD: CLICK ON THE ROW ONCE

        console.log('---Click on the row inside the Shared With Me table--- \n');

            const rowLink = "//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']";
            await driver.wait(until.elementLocated(By.xpath(rowLink)), 4000);

            const rowClicker = await driver.findElement(By.xpath(rowLink));
            rowClicker.click();
            await sleep(2000); 

    //Section 2, Step g.ii.3:
        //Click the row in several places 3x each to see what happens
        //ACTUALLY, DO THIS INSTEAD: CLICK IN THE DROPDOWN AREA
        
        console.log('---Click on the dropdown icon--- \n');

            const dropLink = "//i[@class='fa fa-search ng-star-inserted']";
            await driver.wait(until.elementLocated(By.xpath(dropLink)), 4000);

            const dropIcon = await driver.findElement(By.xpath(dropLink));
            dropIcon.click();
            await sleep(2000); 
            
        //Click on the first dropdown item:
        console.log('---Click on the first dropdown item--- \n');

            const drop1Link = "//div[@id='otus-search-dropdown']//li[@class='ng-star-inserted']";
            await driver.wait(until.elementsLocated(By.xpath(drop1Link)), 4000);

            const drop1 = await driver.findElement(By.xpath(drop1Link));
            drop1.click();
            await sleep(1000);

        //Click the second dropdown item:
        console.log('---Click the second dropdown item--- \n');

            dropIcon.click();
            sleep(3000);

            await driver.wait(until.elementsLocated(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted")), 4000);

            const drop2 = await driver.findElement(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted"));
            drop2.click();
            sleep(1000);


        //Section 2, Steps g.ii.4-5: 
            //Check for responsiveness & cross-browser compatibility

        //Section 2, Step g.iii:
            //Click on the My Bookshelf sub-nav item 3x
            

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

            //Check responsiveness/cross-brower compatibility



        // console.log('---Click into the search box and input various numeric and character combinations.--- \n');

        // await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Search']")), 9000);

        // await driver.findElement(By.xpath( "//input[@placeholder='Search']")).sendKeys('12345', Key.RETURN);

        // await driver.wait(until.elementLocated(By.xpath( "//input[@placeholder='Search']")), 98000);

        // await driver.findElement(By.xpath( "//input[@placeholder='Search']")).sendKeys('ABCD', Key.RETURN);
        // sleep(56000);

        // await driver.wait(until.elementLocated(By.xpath( "//input[@placeholder='Search']")), 98000);

        // await driver.findElement(By.xpath( "//input[@placeholder='Search']")).sendKeys('ABC123', Key.RETURN);
        // sleep(56000);

        // await driver.wait(until.elementLocated(By.xpath( "//input[@placeholder='Search']")), 98000);

        // await driver.findElement(By.xpath( "//input[@placeholder='Search']")).sendKeys('a!b!c!123', Key.RETURN);
        // sleep(56000);

        // console.log('--NEXT--')
        
    }
    catch(err) {
        console.log('----ERROR--- \n');
        console.log(err.message);
    }
    finally {
      await driver.quit();
    }
})();