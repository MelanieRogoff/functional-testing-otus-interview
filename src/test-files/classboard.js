const { Builder, By, Key, until } = require('selenium-webdriver');

// SECTION 3: Class Board Check 
(async function classboard() {
    let driver = await new Builder().forBrowser('chrome').build();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try {
    //Login Setup
        //Section 3, Step b: Login
        console.log('---Begin by logging in with pre-determined user--- \n');
            await driver.get('https://my.otus.com/login');
            await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='email']")), 29000);
            await driver.findElement(By.xpath("//input[@placeholder='email']")).sendKeys('mgrogoff@gmail.com', Key.RETURN);
            await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('M1a2z3e4h5?', Key.RETURN);

        console.log('---Click the navbar item tied to My Bookshelf 3 times--- \n');
         //Section 3, Step f (c-e are not needed in the test):
            //Click on the icon associated w/Class 3x

        
        //Section 3, Step h (no need for step g here):
            //Click each field item. Expect a welcome message, a 'Load More' button, a comment icon and paperclip icon

            //Click on 'Load More'

            //Click the comment icon & paperclip icon

        //Section 3, step i:
            //Enter '1234', 'ABC123', 'AB12!' into the search box
            //Click it and see what happens

        //Section 3, step j:
            //Click the + and - icons underneath the 'Teacher' field
                //Sort recognitions by newest first and oldest first
                //Sort by positive, then negative, then all
                //Click 'Back' button
        
        //Section 3, step k: 
            //Click 'Join Class'
                //Enter a class code that's valid
                //Enter '12345' class code
                //Enter Hello class code
                //Enter Hello123! class code
                //Enter Hello1 class code
            
            //Click save for each entry 

        //Section 3, step l: 
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