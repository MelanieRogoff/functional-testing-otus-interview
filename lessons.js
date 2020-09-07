const { Builder, By, Key, until } = require('selenium-webdriver');

// SECTION 4: Lessons Check 
(async function lessons() {
    let driver = await new Builder().forBrowser('chrome').build();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try {
    //Login Setup
        //Section 4, Step b: Login
        console.log('---Begin by logging in with pre-determined user--- \n');
            await driver.get('https://my.otus.com/login');
            await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='email']")), 29000);
            await driver.findElement(By.xpath("//input[@placeholder='email']")).sendKeys('mgrogoff@gmail.com', Key.RETURN);
            await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('M1a2z3e4h5?', Key.RETURN);

        console.log('---Click the navbar item tied to My Bookshelf 3 times--- \n');
         //Section 4, Step f (c-e are not needed in the test):
            //Click on the icon associated w/Lessons 3x

        //Section 4, Step h (no need for step g here):
            //Type '123', 'Hi!', 'Hi123' into the input box
            //Click through each item in the dropdown box

        //Section 4, step i: 
            //Click through each field in the Lessons table 

        //Section 4, step j: 
            //Click through all of the lesson details, view potential modals, click available buttons

        //Section 4, step k: 
            //Click the due date and status fields
    
        //Section 4, step l: 
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