const { Builder, By, Key, until } = require('selenium-webdriver');

// SECTION 2: My Bookshelf Check 
(async function bookshelf() {
    let driver = await new Builder().forBrowser('chrome').build();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try {
    //Login Setup
        console.log('---Begin by logging in with pre-determined user--- \n');
            await driver.get('https://my.otus.com/login');
            await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='email']")), 29000);
            await driver.findElement(By.xpath("//input[@placeholder='email']")).sendKeys('mgrogoff@gmail.com', Key.RETURN);
            await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('M1a2z3e4h5?', Key.RETURN);

        console.log('---Click the navbar item tied to My Bookshelf 3 times--- \n');
        
            const bookshelfIconPath = "//li[5]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]";

            await driver.wait(until.elementLocated(By.xpath(bookshelfIconPath)), 29000);
            const button = await driver.findElement(By.xpath(bookshelfIconPath));
            button.click(); //1st click
            await sleep(1600);
            button.click(); //2nd click
            await sleep(1600);
            button.click(); //3rd click
            await sleep(1600);

        console.log('---Click into the search box and input various numeric and character combinations.--- \n');

        await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Search']")), 9000);

        await driver.findElement(By.xpath( "//input[@placeholder='Search']")).sendKeys('12345', Key.RETURN);

        await driver.wait(until.elementLocated(By.xpath( "//input[@placeholder='Search']")), 98000);

        await driver.findElement(By.xpath( "//input[@placeholder='Search']")).sendKeys('ABCD', Key.RETURN);
        sleep(56000);

        await driver.wait(until.elementLocated(By.xpath( "//input[@placeholder='Search']")), 98000);

        await driver.findElement(By.xpath( "//input[@placeholder='Search']")).sendKeys('ABC123', Key.RETURN);
        sleep(56000);

        await driver.wait(until.elementLocated(By.xpath( "//input[@placeholder='Search']")), 98000);

        await driver.findElement(By.xpath( "//input[@placeholder='Search']")).sendKeys('a!b!c!123', Key.RETURN);
        sleep(56000);

        console.log('--NEXT--')
        
    }
    catch(err) {
        console.log('----ERROR--- \n');
        console.log(err.message);
    }
    finally {
      await driver.quit();
    }
})();