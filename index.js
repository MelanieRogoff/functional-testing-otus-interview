const { Builder, By, Key, until } = require('selenium-webdriver');

// SECTION 1: Assessment Check 
(async function assessment() {
    let driver = await new Builder().forBrowser('chrome').build();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try {
        console.log('---Setting up the test, beginning by logging in with pre-determined user--- \n')
        await driver.get('https://my.otus.com/login');
        await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='email']")), 20000);
        await driver.findElement(By.xpath("//input[@placeholder='email']")).sendKeys('mgrogoff@gmail.com', Key.RETURN);
        await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('M1a2z3e4h5?', Key.RETURN);
        console.log('---Now we are on the Assessment page, starting by clicking the navigation bar item tied to Assessments. Running the click event 3x in a row to test the navbar item button click event--- \n')
        
        const assignmentIconPath = "//li[6]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']";
       
        await driver.wait(until.elementLocated(By.xpath(assignmentIconPath)), 20000);
        
        const button = await driver.findElement(By.xpath(assignmentIconPath));

        button.click(); //1st click
        await sleep(1000);
        button.click(); //2nd click
        await sleep(1000);
        button.click(); //3rd click
        await sleep(1000);

        console.log('---We are still on the Assessment page, but now we are clicking on each field item to see what happens--- \n')
      //Click each field item
    }
    catch(err) {
        console.log('----ERROR--- \n');
        console.log(err.message);
    }

    finally {
      await driver.quit();
    }
})();


//STEP 2: 