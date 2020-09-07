const { Builder, By, Key, until } = require('selenium-webdriver');

// SECTION 1: Assessment Check 
(async function assessment() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
    //Login Setup
        console.log('---Begin by logging in with pre-determined user--- \n')
            await driver.get('https://my.otus.com/login');
            await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='email']")), 9000);
            await driver.findElement(By.xpath("//input[@placeholder='email']")).sendKeys('mgrogoff@gmail.com', Key.RETURN);
            await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('M1a2z3e4h5?', Key.RETURN);

        console.log('---Click the navigation bar item tied to Assessments 3 times to test its click event--- \n')
        
            const assignmentIconPath = "//li[6]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']";
            await driver.wait(until.elementLocated(By.xpath(assignmentIconPath)), 10000);
          
            const button = await driver.findElement(By.xpath(assignmentIconPath));
            await button.click(); 
            await driver.sleep(1000);
            await button.click(); 
            await driver.sleep(1000);
            await button.click(); 
            await driver.sleep(1000);

        console.log('---Step 1.i part 2: Click the first field item under the Title column 3 times--- \n');

            const closeBtnLink = "//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]";
        
            await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Tech Challenge - Student Profile')]")), 10000);
            
            const firstTitleElemBtn = await driver.findElement(By.xpath("//td[contains(text(),'Tech Challenge - Student Profile')]"));
            await firstTitleElemBtn.click(); 

        console.log('---Click/close two more times--- \n');
            const closeBtn = await driver.findElement(By.xpath(closeBtnLink), 2000); 
            await closeBtn.click(); 
            await driver.sleep(1000);
            await firstTitleElemBtn.click(); //2nd click
            await driver.sleep(1000);
            await closeBtn.click(); //2nd close 
            await driver.sleep(1000);
            await firstTitleElemBtn.click(); //3rd click
            await driver.sleep(1000);
            await closeBtn.click(); //3rd close
            await driver.sleep(1000);

//Step 1.i part 3 - Click through the second field under Title column three times
        console.log('---Step 1.i, part 3: Click through the second field under the Title column 3 times--- \n');

            await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Tech Challenge - Integration Test Automation')]")), 20000);
            
            const openSecondBtn = await driver.findElement(By.xpath("//td[contains(text(),'Tech Challenge - Integration Test Automation')]"));
            await openSecondBtn.click(); 
            await driver.sleep(2000);

        console.log('--CREATE THE CLOSE--- \n');
            const closeSecondBtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

            const closeSecondBtn = await driver.findElement(By.xpath(closeSecondBtnLink), 3000);
           
            await closeSecondBtn.click(); 
            await driver.sleep(2000);
            await openSecondBtn.click(); //2nd click
            await driver.sleep(2000);
            await closeSecondBtn.click(); //2nd close 
            await driver.sleep(2000);
            await openSecondBtn.click(); //3rd click
            await driver.sleep(2000);
            await closeSecondBtn.click(); //3rd close
            await driver.sleep(2000);

        console.log('---Click the second field once more, but instead of closing the modal, the Start button will be clicked---\n');
            
            await openSecondBtn.click();
            await driver.sleep(1000);

            const startBtn = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
            await startBtn.click();
            await driver.sleep(1000);


        console.log('---A word will be typed into the text area. The Save and Exit button will be clicked. Do not click Submit due to the scope of this assignment.');

            await driver.findElement(By.tagName("textarea")).sendKeys('Lesson', Key.RETURN);
      
            const saveExitBtn = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
            saveExitBtn.click();

        console.log('---The Save and Exit button has been clicked --- \n');

            const noBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
        
            await noBtn.click();
            
        console.log('---Type a word into the textarea and click Save and Exit button--- \n');

            await driver.findElement(By.tagName("textarea")).sendKeys('Save', Key.RETURN);
            
        //Click the Save and Exit button again, but this time click 'Yes':
        console.log('---Click the Save and Exit button once more, but this time click Yes instead of No--- \n');

            await driver.sleep(1000);
            await saveExitBtn.click();
            
            const yesBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
                
            await yesBtn.click();
            
//Step 1.i part 4: Click through the third field item under the Title column 3 times:

    console.log('---Step 1.i, part 4: Click through the third field under the Title column 3 times--- \n');

        await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Tech Challenge - Functional Test Automation')]")), 20000);

        const thirdTitleElemBtn = await driver.findElement(By.xpath("//td[contains(text(),'Tech Challenge - Functional Test Automation')]"));

        await thirdTitleElemBtn.click(); 

        const closeThirdBtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeThirdBtn = await driver.findElement(By.xpath(closeThirdBtnLink), 2000);
        await closeThirdBtn.click(); 
        await driver.sleep(1000);
        await thirdTitleElemBtn.click(); //2nd click
        await driver.sleep(1000);
        await closeThirdBtn.click(); //2nd close 
        await driver.sleep(1000);
        await thirdTitleElemBtn.click(); //3rd click
        await driver.sleep(1000);
        await closeThirdBtn.click(); //3rd close
        await driver.sleep(1000);

    console.log('---The third field will be clicked once more, but instead of closing the modal, the Start button will be clicked---\n');

        await thirdTitleElemBtn.click();
        
        const startBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        await startBtn2.click();

    console.log('---Type a word into the text area. Click Save and Exit button only.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Notes', Key.RETURN);
        
        const saveExitBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        await saveExitBtn2.click();
        
    console.log('---The Save and Exit button has been clicked --- \n');

        const noBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

        await noBtn2.click();

    console.log('---Enter a word into the text area--- \n');
        await driver.findElement(By.tagName("textarea")).sendKeys('Element', Key.RETURN);
        
        await saveExitBtn2.click();
        await driver.sleep(1000);

    console.log('---Click the Yes button--- \n');
        const yesBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
    
        await yesBtn2.click();
        
    console.log('---All three fields have been checked under Title column--- \n');

//Step 1.i part 5: Click through the three due date items 3 times each:
    console.log('---Step 1.i, part 5a: Click through the first due date field item 3 times--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[1]//td[3]")), 2000);

        const firstDueBtn = await driver.findElement(By.xpath("//tr[1]//td[3]"));

        await firstDueBtn.click(); 

        const closeFirstDueBtnLink = "//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeFirstDueBtn = await driver.findElement(By.xpath(closeFirstDueBtnLink), 2000);
        
        await closeFirstDueBtn.click(); 
        await driver.sleep(1000);
        await firstDueBtn.click(); //2nd click
        await driver.sleep(1000);
        await closeFirstDueBtn.click(); //2nd close 
        await driver.sleep(1000);
        await firstDueBtn.click(); //3rd click
        await driver.sleep(1000);
        await closeFirstDueBtn.click(); //3rd close
        await driver.sleep(1000);
        
    console.log('---Step 1.i, part 5b: Click through the second due date field item 3 times--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[2]//td[3]")), 2000);

        const secondDueBtn = await driver.findElement(By.xpath("//tr[2]//td[3]"));
        await secondDueBtn.click(); 
        
        const closeSecondDueBtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeSecondDueBtn = await driver.findElement(By.xpath(closeSecondDueBtnLink), 2000);

        await closeSecondDueBtn.click(); 
        await driver.sleep(1000);
        await secondDueBtn.click(); //2nd click
        await driver.sleep(1000);
        await closeSecondDueBtn.click(); //2nd close 
        await driver.sleep(1000);
        await secondDueBtn.click(); //3rd click
        await driver.sleep(1000);
        await closeSecondDueBtn.click(); //3rd close
        await driver.sleep(1000);

    console.log('---The field will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        await secondDueBtn.click();
        
        const startBtn3 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        await startBtn3.click();
        await driver.sleep(1000);

    console.log('---Type a word into the text area. Click Save and Exit button.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Due', Key.RETURN);

        const saveExitBtn3 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        await saveExitBtn3.click();

    console.log('---The Save and Exit button has been clicked --- \n');

        const noBtn3 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
        await noBtn3.click();
        
        await driver.findElement(By.tagName("textarea")).sendKeys('Enter text here', Key.RETURN);
        
        await saveExitBtn3.click();

    console.log('---Click the Yes button--- \n');

        const yesBtn3 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
        await yesBtn3.click();

    console.log('---Step 1.i, part 5c: Click through the third due date field item 3 times--- \n');
       
        await driver.wait(until.elementLocated(By.xpath("//tr[3]//td[3]")), 2000);

        const thirdDueBtn = await driver.findElement(By.xpath("//tr[3]//td[3]"));
        await thirdDueBtn.click(); 
        
        const closeThirdDueBtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']";

        const closeThirdDueBtn = await driver.findElement(By.xpath(closeThirdDueBtnLink), 2000);

        await closeThirdDueBtn.click(); 
        await driver.sleep(1000);
        await thirdDueBtn.click(); //2nd click
        await driver.sleep(1000);
        await closeThirdDueBtn.click(); //2nd close 
        await driver.sleep(1000);
        await thirdDueBtn.click(); //3rd click
        await driver.sleep(1000);
        await closeThirdDueBtn.click(); //3rd close
        await driver.sleep(1000);
        
    console.log('---The field will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        await thirdDueBtn.click();
        
        const startBtn4 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        await startBtn4.click();
        
    console.log('---Type a word into the text area. Click Save and Exit button.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Due', Key.RETURN);

        const saveExitBtn4 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        await saveExitBtn4.click();

    console.log('---The Save and Exit button has been clicked --- \n');

        const noBtn4 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
        await noBtn4.click();
        
        await driver.findElement(By.tagName("textarea")).sendKeys('Enter text here', Key.RETURN);
        
        await saveExitBtn4.click();

    console.log('---Click the Yes button--- \n');

        const yesBtn4 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
        await yesBtn4.click();
        
    console.log('---All three fields have been checked under Due Date column--- \n');

//Step 1.i part 6: Click through the Points field items 3 times each:
    console.log('---Step 1.i, part 6a: Click through the first Points field item 3 times--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[1]//td[4]")), 2000);

        const pt1Btn = await driver.findElement(By.xpath("//tr[1]//td[4]"));
        await pt1Btn.click(); 
        
        const closePt1BtnLink = "//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]";

        const closePt1Btn = await driver.findElement(By.xpath(closePt1BtnLink), 2000);
        await closePt1Btn.click(); 
        await driver.sleep(1000);
        await pt1Btn.click(); //2nd click
        await driver.sleep(1000);
        await closePt1Btn.click(); //2nd close 
        await driver.sleep(1000);
        await pt1Btn.click(); //3rd click
        await driver.sleep(1000);
        await closePt1Btn.click(); //3rd close
        await driver.sleep(1000);

    console.log('---Step 1.i, part 6b: Click through the second Points field item 3 times--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[2]//td[4]")), 2000);

        const pt2Btn = await driver.findElement(By.xpath("//tr[2]//td[4]"));
        await pt2Btn.click(); 
        
        const closePt2BtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]";

        const closePt2Btn = await driver.findElement(By.xpath(closePt2BtnLink), 2000);
        await closePt2Btn.click(); 
        await driver.sleep(1000);
        await pt2Btn.click(); //2nd click
        await driver.sleep(1000);
        await closePt2Btn.click(); //2nd close 
        await driver.sleep(1000);
        await pt2Btn.click(); //3rd click
        await driver.sleep(1000);
        await closePt2Btn.click(); //3rd close
        await driver.sleep(1000);
        
    console.log('---The second Points field will be clicked once more, but instead of closing the modal, the Start button will be clicked---\n');

        await pt2Btn.click();
        
        const startPtBtn = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        await startPtBtn.click();
        
    console.log('---Type a word into the text area. Click Save and Exit button.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Points', Key.RETURN);

        const savePtBtn = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        await savePtBtn.click();
        
    console.log('---The Save and Exit button has been clicked --- \n');

        const noPtBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
        await noPtBtn.click();
        
        await driver.findElement(By.tagName("textarea")).sendKeys('Count', Key.RETURN);
        
        await savePtBtn.click();
        
    console.log('---Click the Yes button--- \n');
        const yesPtBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);

        await yesPtBtn.click();
        
    console.log('---Step 1.i, part 6c: Click through the third Points field item 3 times--- \n');
       
        await driver.wait(until.elementLocated(By.xpath("//tr[3]//td[4]")), 2000);

        const pt3Btn = await driver.findElement(By.xpath("//tr[3]//td[4]"));
        await pt3Btn.click(); 

        const closePt3BtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closePt3Btn = await driver.findElement(By.xpath(closePt3BtnLink), 2000);
        await closePt3Btn.click(); 
        await driver.sleep(1000);
        await pt3Btn.click(); //2nd click
        await driver.sleep(1000);
        await closePt3Btn.click(); //2nd close 
        await driver.sleep(1000);
        await pt3Btn.click(); //3rd click
        await driver.sleep(1000);
        await closePt3Btn.click(); //3rd close
        await driver.sleep(1000);

    console.log('---The third Points field item will be clicked once more, but instead of closing the modal, the Start button will be clicked---\n');

        await pt3Btn.click();

        const startPtBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        await startPtBtn2.click();

    console.log('---Type a word into the text area. Click Save and Exit button.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Name', Key.RETURN);

        const savePtBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        await savePtBtn2.click();
        
    console.log('---The Save and Exit button has been clicked --- \n');

        const noPtBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
        await noPtBtn2.click();

        await driver.findElement(By.tagName("textarea")).sendKeys('Title', Key.RETURN);
        await savePtBtn2.click();
        
    console.log('---Click the Yes button--- \n');

        const yesPtBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
        await yesPtBtn2.click();

    console.log('---All three fields have been checked under Points column--- \n');

// Step 1.i part 7: Click through each Status field item 3 times each
    console.log('---Step 1.i, part 7: Click through each Status field item 3 times each--- \n');

        await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Turned In')]")), 2000);

        const stat1Btn = await driver.findElement(By.xpath("//div[contains(text(),'Turned In')]"));
        await stat1Btn.click(); 
        
        const closeStat1BtnLink = "//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeStat1Btn = await driver.findElement(By.xpath(closeStat1BtnLink), 2000);
        await closeStat1Btn.click(); 
        await driver.sleep(1000);
        await stat1Btn.click(); //2nd click
        await driver.sleep(1000);
        await closeStat1Btn.click(); //2nd close 
        await driver.sleep(1000);
        await stat1Btn.click(); //3rd click
        await driver.sleep(1000);
        await closeStat1Btn.click(); //3rd close
        await driver.sleep(1000);
        
    console.log('---Step 1.i, part 7b: Click through the second Status field item 3 times--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[2]//td[5]//otus-status[1]//div[1]//div[1]")), 2000);

        const stat2Btn = await driver.findElement(By.xpath("//tr[2]//td[5]//otus-status[1]//div[1]//div[1]"));
        await stat2Btn.click(); 
        
        const closeStat2BtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]";

        const closeStat2Btn = await driver.findElement(By.xpath(closeStat2BtnLink), 2000);
        await closeStat2Btn.click(); 
        await driver.sleep(1000);
        await stat2Btn.click(); //2nd click
        await driver.sleep(1000);
        await closeStat2Btn.click(); //2nd close 
        await driver.sleep(1000);
        await stat2Btn.click(); //3rd click
        await driver.sleep(1000);
        await closeStat2Btn.click(); //3rd close
        await driver.sleep(1000);

    console.log('---The second Status field will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        await stat2Btn.click();

        const startStatBtn = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        await startStatBtn.click();
        
    console.log('---Type a word into the text area. Click Save and Exit button.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Start', Key.RETURN);

        const saveStatBtn = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        await saveStatBtn.click();
        
    console.log('---The Save and Exit button has been clicked --- \n');

        const noStatBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);
        await noStatBtn.click();

        await driver.findElement(By.tagName("textarea")).sendKeys('Status', Key.RETURN);
        
        await saveStatBtn.click();

    console.log('---Click the Yes button--- \n');

        const yesStatBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
        await yesStatBtn.click();

    console.log('---Step 1.i, part 7c: Click through the third Status field item 3 times--- \n');
       
        await driver.wait(until.elementLocated(By.xpath("//tr[3]//td[5]//otus-status[1]//div[1]//div[1]")), 2000);

        const stat3Btn = await driver.findElement(By.xpath("//tr[3]//td[5]//otus-status[1]//div[1]//div[1]"));
        await stat3Btn.click(); 

        const closeStat3BtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeStat3Btn = await driver.findElement(By.xpath(closeStat3BtnLink), 2000);
        await closeStat3Btn.click(); 
        await driver.sleep(1000);
        await stat3Btn.click(); //2nd click
        await driver.sleep(1000);
        await closeStat3Btn.click(); //2nd close 
        await driver.sleep(1000);
        await stat3Btn.click(); //3rd click
        await driver.sleep(1000);
        await closeStat3Btn.click(); //3rd close
        await driver.sleep(1000);
        
    console.log('---The third Status field item will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');
        await stat3Btn.click();
        
        const startStatBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        await startStatBtn2.click();

    console.log('---Type a word into the text area. Click Save and Exit button.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Status2', Key.RETURN);

        const saveStatBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        await saveStatBtn2.click();
        

    console.log('---The Save and Exit button has been clicked --- \n');

        const noStatBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

        await noStatBtn2.click();
        
        await driver.findElement(By.tagName("textarea")).sendKeys('Title', Key.RETURN);
    
        await saveStatBtn2.click();
        
    console.log('---Click the Yes button--- \n');

        const yesStatBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
        await yesStatBtn2.click();

    console.log('---All three fields have been checked under the Status column--- \n');

// FINAL STEP: Click on all dropdown box items (once per item). 
    console.log('---Click each dropdown box item--- \n');

        await driver.wait(until.elementLocated(By.xpath("//i[@class='fa fa-chevron-down ng-star-inserted']")), 2000);

        const dropdownBtn = await driver.findElement(By.xpath("//i[@class='fa fa-chevron-down ng-star-inserted']"));

        await dropdownBtn.click(); 

    console.log('---Click the first dropdown box item.--- \n');

        await driver.wait(until.elementLocated(By.xpath("//li/div[p/text()='All Classes']")), 2000);

        const allClassesBtn = await driver.findElement(By.xpath("//li/div[p/text()='All Classes']"));

        await allClassesBtn.click(); //THIS IS WHERE THE ERROR OCCURS

    console.log('---Click on the second dropdown box item--- \n');

        await driver.wait(until.elementLocated(By.xpath("//div[@class='placeholder-div']")), 2000);

        const secondDrop = await driver.findElement(By.xpath("//div[@class='placeholder-div']"));
        secondDrop.click();

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
})();