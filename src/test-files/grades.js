const { Builder, By, Key, until } = require('selenium-webdriver');

// SECTION 5: Gradebook Check 
(async function grades() {
    let driver = await new Builder().forBrowser('chrome').build();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try {
    //Login Setup
        //Section 5, Step b: Login
        console.log('---Begin by logging in with pre-determined user--- \n');
            await driver.get('https://my.otus.com/login');
            await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='email']")), 29000);
            await driver.findElement(By.xpath("//input[@placeholder='email']")).sendKeys('mgrogoff@gmail.com', Key.RETURN);
            await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('M1a2z3e4h5?', Key.RETURN);

        console.log('---Click the navbar item tied to My Bookshelf 3 times--- \n');
         //Section 5, Step f (c-e are not needed in the test):
            //Click on the icon associated w/Gradebook 3x

        //Section 5, Step h (no need for step g here):
            //Click through each field item and icon

        //Section 4, step i: 
            //Click through each field in the newly created table

        //Section 5, step j: 
            //Click through each item under 'Standards' tab (originally in Points tab so the only change is going to 'Standards' tab instead)

        //Section 5, step k: 
             //Type '123', 'Hi!', 'Hi123' into the input box and click the 3 dots
    
        //Section 5, step l: 
            //Test for responsiveness/cross-browser compatibility

    }
    catch(err) {
        console.log('----ERROR--- \n');
        console.log(err.message);
    }
    finally {
      await driver.quit();
    }
})();