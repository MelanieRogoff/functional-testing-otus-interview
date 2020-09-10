const { By, Key, until } = require('selenium-webdriver');
const { login } = require('../helpers/login');
const { multiClick } = require('../helpers/multiclick');
const { openClose } = require('../helpers/openclose');
const { getDriver } = require('../helpers/getDriver');

/**
 * Description: assessment() is exported so that it can be called in the drivers.js file along with all other test functions
 * @param {string} browserName - (ie: Firefox, Chrome)
 */
async function assessment(browserName) {

    let driver = await getDriver(browserName);

    try {
        console.log('---Begin by logging in with pre-determined user--- \n');
            await login(driver);
           
        console.log('---Click the Assessments navigation bar item 3 times to test its click event--- \n');
            await driver.wait(until.elementLocated(By.xpath("//li[6]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']")), 20000);
            const button = await driver.findElement(By.xpath("//li[6]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']"));
            await multiClick(driver, button);

        console.log('---Step 1.i part 2: Click the first field item under the Title column 3 times--- \n');
            const firstTitleElemBtn = await driver.findElement(By.xpath("//td[contains(text(),'Tech Challenge - Student Profile')]"));
            const closeBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]"), 2000); 
            await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Tech Challenge - Student Profile')]")), 10000);
            await openClose(driver, firstTitleElemBtn, closeBtn); 

        console.log('---Step 1.i, part 3: Click through the second field under Title 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Tech Challenge - Integration Test Automation')]")), 2000);
            const openSecondBtn = await driver.findElement(By.xpath("//td[contains(text(),'Tech Challenge - Integration Test Automation')]"));
            const closeSecondBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']"), 3000);
            await openClose(driver, openSecondBtn, closeSecondBtn, 3, 4000); 

        console.log('---Click the second field once more---\n');
           await multiClick(driver, openSecondBtn, 1, 4000);

        console.log('--This time, click the Start button-');
            const startBtn = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
            await multiClick(driver, startBtn, 1, 2000);

        console.log('---Type a word into the text area. Click the Save and Exit button. Do not click Submit due to the scope of this assignment.');
            await driver.sleep(3000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Lesson', Key.RETURN);
            const saveExitBtn = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 4000);
            await saveExitBtn.click();

        console.log('---The Save and Exit button has been clicked. Click No button--- \n');
            const noBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
            await multiClick(driver, noBtn, 1);
            await driver.sleep(6000);
            
        console.log('---Type a word into the textarea, click Save and Exit button, then click the Yes button--- \n');
            await driver.findElement(By.tagName("textarea")).sendKeys('Save', Key.RETURN);
            await driver.sleep(1000);
            await saveExitBtn.click();
            const yesBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
            await yesBtn.click();
            
        console.log('---Step 1.i, part 4: Click through the third field under the Title column 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Tech Challenge - Functional Test Automation')]")), 20000);
            const thirdTitleElemBtn = await driver.findElement(By.xpath("//td[contains(text(),'Tech Challenge - Functional Test Automation')]"));
            const closeThirdBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']"), 3000);
            await openClose(driver, thirdTitleElemBtn, closeThirdBtn); 

        console.log('---Click the third field once more and press the Start button---\n');
            await thirdTitleElemBtn.click();
            await driver.sleep(3000);
            const startBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
            await startBtn2.click();

        console.log('---Type a word into the text area. Click Save and Exit button only.---\n');
            await driver.sleep(6000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Notes', Key.RETURN);  
            const saveExitBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 2000);       
            await saveExitBtn2.click();
            
        console.log('---The Save and Exit button has been clicked --- \n');
            await driver.sleep(4000);
            const noBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 5000);
            await noBtn2.click();

        console.log('---Enter a word into the text area--- \n');
            await driver.sleep(4000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Element', Key.RETURN);     
            await saveExitBtn2.click();
            await driver.sleep(1000);

        console.log('---Click the Yes button--- \n');
            const yesBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
            await yesBtn2.click();
            
        console.log('---All three fields have been checked under Title column--- \n');

        console.log('---Step 1.i, part 5a: Click through the first due date field item 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//tr[1]//td[3]")), 2000);
            const firstDueBtn = await driver.findElement(By.xpath("//tr[1]//td[3]"));
            const closeFirstDueBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']"), 2000);
            await openClose(driver, firstDueBtn, closeFirstDueBtn);
            
        console.log('---Step 1.i, part 5b: Click through the second due date field item 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//tr[2]//td[3]")), 8000);
            const secondDueBtn = await driver.findElement(By.xpath("//tr[2]//td[3]"));
            const closeSecondDueBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']"), 7000);
            await openClose(driver, secondDueBtn, closeSecondDueBtn);

        console.log('---Click the field once more in order to press the Start button---\n');
            await driver.sleep(5000);
            await secondDueBtn.click();
            const startBtn3 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 9000);
            await driver.sleep(2000);
            await startBtn3.click();

        console.log('---Type a word into the text area. Click Save and Exit button.---\n');
            await driver.sleep(4000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Due', Key.RETURN);
            const saveExitBtn3 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 8000);
            await saveExitBtn3.click();

        console.log('---The Save and Exit button has been clicked --- \n');
            const noBtn3 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 8000);
            await noBtn3.click();
            await driver.sleep(4000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Enter text here', Key.RETURN);
            await saveExitBtn3.click();
            await driver.sleep(4000);

        console.log('---Click the Yes button--- \n');
            const yesBtn3 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 8000);
            await yesBtn3.click();

        console.log('---Step 1.i, part 5c: Click through the third due date field item 3 times--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//tr[3]//td[3]")), 6000);
            const thirdDueBtn = await driver.findElement(By.xpath("//tr[3]//td[3]"));   
            const closeThirdDueBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']"), 5000);
            await openClose(driver, thirdDueBtn, closeThirdDueBtn);

        console.log('---Click the field once more so that the Start button can be pressed---\n');
            await driver.sleep(5000);
            const startBtn4 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 9000);
            await thirdDueBtn.click();
            await driver.sleep(4000);
            await startBtn4.click(); 
            
        console.log('---Type a word into the text area. Click Save and Exit button.---\n');
            await driver.sleep(4000);
            const saveExitBtn4 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 6000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Due', Key.RETURN);
            await saveExitBtn4.click(); 
            await driver.sleep(4000);

        console.log('---The Save and Exit button has been clicked --- \n');
            const noBtn4 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 6000);
            await noBtn4.click();
            await driver.findElement(By.tagName("textarea")).sendKeys('Enter text here', Key.RETURN);
            await saveExitBtn4.click();

        console.log('---Click the Yes button--- \n');
            const yesBtn4 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 6000);
            await yesBtn4.click();
            
        console.log('---All three fields have been checked under Due Date column--- \n');

        console.log('---Step 1.i, part 6a: Click through the first Points field item 3 times--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//tr[1]//td[4]")), 6000);
            const pt1Btn = await driver.findElement(By.xpath("//tr[1]//td[4]"));        
            const closePt1Btn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]"), 4000);
            await openClose(driver, pt1Btn, closePt1Btn);

        console.log('---Step 1.i, part 6b: Click through the second Points field item 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//tr[2]//td[4]")), 6000);
            const pt2Btn = await driver.findElement(By.xpath("//tr[2]//td[4]"));        
            const closePt2Btn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]"), 5000);
            await openClose(driver, pt2Btn, closePt2Btn);

        console.log('---Click the second Points field once more and press the Start button---\n');
            await driver.sleep(4000);
            await pt2Btn.click();
            await driver.sleep(4000);
            const startPtBtn = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 5000);
            await startPtBtn.click();
            
        console.log('---Type a word into the text area. Click Save and Exit button.---\n');
            await driver.sleep(5000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Points', Key.RETURN);
            const savePtBtn = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
            await savePtBtn.click();
            
        console.log('---The Save and Exit button has been clicked --- \n');
            await driver.sleep(5000);
            const noPtBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
            await noPtBtn.click();
            await driver.findElement(By.tagName("textarea")).sendKeys('Count', Key.RETURN);
            await savePtBtn.click();
            
        console.log('---Click the Yes button--- \n');
            await driver.sleep(4000);
            const yesPtBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
            await yesPtBtn.click();
            
        console.log('---Step 1.i, part 6c: Click through the third Points field item 3 times--- \n');
            await driver.sleep(5000);
            await driver.wait(until.elementLocated(By.xpath("//tr[3]//td[4]")), 2000);
            const pt3Btn = await driver.findElement(By.xpath("//tr[3]//td[4]"));
            const closePt3Btn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']"), 2000);
            await openClose(driver, pt3Btn, closePt3Btn);

        console.log('---Click the third Points field item once more and press the Start button---\n');
            await driver.sleep(5000);
            await pt3Btn.click();
            await driver.sleep(5000);
            const startPtBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
            await startPtBtn2.click();

        console.log('---Type a word into the text area. Click Save and Exit button.---\n');
            await driver.sleep(5000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Name', Key.RETURN);
            await driver.sleep(5000);
            const savePtBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
            await savePtBtn2.click();
            
        console.log('---The Save and Exit button has been clicked --- \n');
            await driver.sleep(4000);
            const noPtBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
            await noPtBtn2.click();
            await driver.sleep(4000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Title', Key.RETURN);
            await savePtBtn2.click();
            
        console.log('---Click the Yes button--- \n');
            await driver.sleep(4000);
            const yesPtBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
            await yesPtBtn2.click();

        console.log('---All three fields have been checked under Points column--- \n');

        console.log('---Step 1.i, part 7: Click through each Status field item 3 times each--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Turned In')]")), 5000);
            const stat1Btn = await driver.findElement(By.xpath("//div[contains(text(),'Turned In')]"));   
            const closeStat1Btn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']"), 5000);
            await openClose(driver, stat1Btn, closeStat1Btn);
            
        console.log('---Step 1.i, part 7b: Click through the second Status field item 3 times--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//tr[2]//td[5]//otus-status[1]//div[1]//div[1]")), 2000);
            const stat2Btn = await driver.findElement(By.xpath("//tr[2]//td[5]//otus-status[1]//div[1]//div[1]"));     
            const closeStat2Btn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]"), 2000);
            await openClose(driver, stat2Btn, closeStat2Btn);

        console.log('---Click the second Status field once more and press the Start button---\n');
            await stat2Btn.click();
            await driver.sleep(4000);
            const startStatBtn = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
            await startStatBtn.click();
            
        console.log('---Type a word into the text area. Click Save and Exit button.---\n');
            await driver.sleep(4000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Start', Key.RETURN);
            const saveStatBtn = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
            await saveStatBtn.click();
            
        console.log('---The Save and Exit button has been clicked --- \n');
            await driver.sleep(4000);
            const noStatBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
            await noStatBtn.click();
            await driver.sleep(4000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Status', Key.RETURN);
            await saveStatBtn.click();

        console.log('---Click the Yes button--- \n');
            await driver.sleep(4000);
            const yesStatBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
            await yesStatBtn.click();

        console.log('---Step 1.i, part 7c: Click through the third Status field item 3 times--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//tr[3]//td[5]//otus-status[1]//div[1]//div[1]")), 2000);
            const stat3Btn = await driver.findElement(By.xpath("//tr[3]//td[5]//otus-status[1]//div[1]//div[1]"));
            const closeStat3Btn = await driver.findElement(By.xpath("//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']"), 2000);
            await openClose(driver, stat3Btn, closeStat3Btn);

        console.log('---Click the third Status field item once more and press the Start button---\n');
            await driver.sleep(4000);
            await stat3Btn.click();
            await driver.sleep(4000);
            const startStatBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
            await startStatBtn2.click();

        console.log('---Type a word into the text area. Click Save and Exit button.---\n');
            await driver.sleep(4000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Status2', Key.RETURN);
            const saveStatBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
            await saveStatBtn2.click();
            
        console.log('---The Save and Exit button has been clicked --- \n');
            await driver.sleep(4000);
            const noStatBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
            await noStatBtn2.click();
            await driver.sleep(4000);
            await driver.findElement(By.tagName("textarea")).sendKeys('Title', Key.RETURN);
            await saveStatBtn2.click();
            
        console.log('---Click the Yes button--- \n');
            await driver.sleep(4000);
            const yesStatBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
            await yesStatBtn2.click();

        console.log('---All three fields have been checked under the Status column--- \n');

        console.log('---Click each dropdown box item--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//i[@class='fa fa-chevron-down ng-star-inserted']")), 2000);
            const dropdownBtn = await driver.findElement(By.xpath("//i[@class='fa fa-chevron-down ng-star-inserted']"));
            await dropdownBtn.click(); 

        console.log('---Click the first dropdown box item.--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//li/div[p/text()='All Classes']")), 2000);
            const allClassesBtn = await driver.findElement(By.xpath("//li/div[p/text()='All Classes']"));
            await allClassesBtn.click();

        console.log('---Click on the second dropdown box item (FINAL PART)--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//div[@class='placeholder-div']")), 2000);
            const secondDrop = await driver.findElement(By.xpath("//div[@class='placeholder-div']"));
            await secondDrop.click();
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//li[@id='option-of-options']")), 4000);
            await driver.wait(until.elementLocated(By.xpath("//li/div[p/text()='QA Tech Challenge']")), 2000);
            const qaBtn = await driver.findElement(By.xpath("//li/div[p/text()='QA Tech Challenge']"));
            await qaBtn.click();

        console.log('--- FIRST SECTION (ASSESSMENTS) TEST IS COMPLETE.--- \n');
    }
    catch(err) {
        console.log('----ERROR--- \n');
        console.log(err.message);
    }
    finally {
        await driver.quit();
    }
}

module.exports = { assessment };
