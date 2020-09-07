const { Builder, By, Key, until } = require('selenium-webdriver');

// SECTION 1: Assessment Check 
(async function assessment() {
    let driver = await new Builder().forBrowser('chrome').build();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try {
    //Login Setup
        console.log('---Setting up the test, beginning by logging in with pre-determined user--- \n')
            await driver.get('https://my.otus.com/login');
            await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='email']")), 9000);
            await driver.findElement(By.xpath("//input[@placeholder='email']")).sendKeys('mgrogoff@gmail.com', Key.RETURN);
            await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('M1a2z3e4h5?', Key.RETURN);

        console.log('---Now that we are logged in, we will click the navigation bar item tied to Assessments 3 times in a row to test its click event--- \n')
        
            const assignmentIconPath = "//li[6]//a[1]//ot-icon[1]//fa-icon[1]//*[local-name()='svg']";
            await driver.wait(until.elementLocated(By.xpath(assignmentIconPath)), 10000);
            const button = await driver.findElement(By.xpath(assignmentIconPath));

            button.click(); //1st click
            await sleep(600);
            button.click(); //2nd click
            await sleep(600);
            button.click(); //3rd click
            await sleep(600);
        
        //Click the first field under Title column 3 times
        console.log('---Step 1.i part 2: This is the part where we click on the first field item under the Title column 3 times--- \n');

            const closeBtnLink = "//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]";
        
            await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Tech Challenge - Student Profile')]")), 10000);
            
            const firstTitleElemBtn = await driver.findElement(By.xpath("//td[contains(text(),'Tech Challenge - Student Profile')]"));

            firstTitleElemBtn.click(); 
            await sleep(1200);

        //Create the close button and click/close 2 more times
            const closeBtn = await driver.findElement(By.xpath(closeBtnLink), 2000); //Create 'X' btn
            closeBtn.click(); 
            await sleep(600);
            firstTitleElemBtn.click(); //2nd click
            await sleep(600);
            closeBtn.click(); //2nd close 
            await sleep(600);
            firstTitleElemBtn.click(); //3rd click
            await sleep(600);
            closeBtn.click(); //3rd close
            await sleep(600);

//Step 1.i part 3 - Click through the second field under Title column three times
        console.log('---Step 1.i, part 3: Click through the second field under the Title column 3 times--- \n');

            await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Tech Challenge - Integration Test Automation')]")), 20000);
            
            const secondTitleElemBtn = await driver.findElement(By.xpath("//td[contains(text(),'Tech Challenge - Integration Test Automation')]"));

            secondTitleElemBtn.click(); 
            await sleep(2000);

            const closeSecondBtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

            const closeSecondBtn = await driver.findElement(By.xpath(closeSecondBtnLink), 2000);

            closeSecondBtn.click(); 
            await sleep(3000);
            secondTitleElemBtn.click(); //2nd click
            await sleep(3000);
            closeSecondBtn.click(); //2nd close 
            await sleep(3000);
            secondTitleElemBtn.click(); //3rd click
            await sleep(3000);
            closeSecondBtn.click(); //3rd close
            await sleep(3000);

        console.log('---Now, the second field will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        //Trigger the modal once more, find the element tied to the Start button, click it
            secondTitleElemBtn.click();
            await sleep(2000);
            const startBtn = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
            startBtn.click();
            await sleep(4000);

        console.log('---A word will be typed into the text area. The Save and Exit button will be clicked. Do not click Submit due to the scope of this assignment.');

            await driver.findElement(By.tagName("textarea")).sendKeys('Lesson', Key.RETURN);
            await sleep(4000);
      
            const saveExitBtn = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
            saveExitBtn.click();
            await sleep(4000);

        console.log('---The Save and Exit button has been clicked --- \n');

        //Create 'No' Button
            const noBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

            noBtn.click();
            await sleep(4000);

        //Find the textarea and enter a word
            await driver.findElement(By.tagName("textarea")).sendKeys('Save', Key.RETURN);
            await sleep(4000);

        //Click the Save and Exit button again, but this time click 'Yes':
            saveExitBtn.click();
            await sleep(4000);

        //Create 'Yes' Button:
            const yesBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
                
            yesBtn.click();
            await sleep(4000);

//Step 1.i part 4: Click through the third field item under the Title column 3 times:

    console.log('---Step 1.i, part 4: Click through the third field under the Title column 3 times--- \n');

        await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Tech Challenge - Functional Test Automation')]")), 20000);

        const thirdTitleElemBtn = await driver.findElement(By.xpath("//td[contains(text(),'Tech Challenge - Functional Test Automation')]"));

        thirdTitleElemBtn.click(); 
        await sleep(2000);

        const closeThirdBtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeThirdBtn = await driver.findElement(By.xpath(closeThirdBtnLink), 2000);

        closeThirdBtn.click(); 
        await sleep(3000);
        thirdTitleElemBtn.click(); //2nd click
        await sleep(3000);
        closeThirdBtn.click(); //2nd close 
        await sleep(3000);
        thirdTitleElemBtn.click(); //3rd click
        await sleep(3000);
        closeThirdBtn.click(); //3rd close
        await sleep(3000);

    console.log('---The third field will be clicked once more, but instead of closing the modal, the Start button will be clicked---\n');

        thirdTitleElemBtn.click();
        await sleep(3000);

        const startBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        startBtn2.click();
        await sleep(4000);

    console.log('---Type a word into the text area. Click Save and Exit button only.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Notes', Key.RETURN);
        await sleep(5000);

        const saveExitBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        saveExitBtn2.click();
        await sleep(5000);

    console.log('---The Save and Exit button has been clicked --- \n');

        const noBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

        noBtn2.click();
        await sleep(5000);

        //Find the textarea and enter a word
        await driver.findElement(By.tagName("textarea")).sendKeys('Element', Key.RETURN);
        await sleep(4000);

        saveExitBtn2.click();
        await sleep(4000);

        //Create 'Yes' Button:
        const yesBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);
    
        yesBtn2.click();
        await sleep(4000);

    console.log('---All three fields have been checked under Title column--- \n');

//Step 1.i part 5: Click through the three due date items 3 times each:
    console.log('---Step 1.i, part 5a: Click through the first due date field item 3 times--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[1]//td[3]")), 2000);

        const firstDueBtn = await driver.findElement(By.xpath("//tr[1]//td[3]"));

        firstDueBtn.click(); 
        await sleep(2000);

        const closeFirstDueBtnLink = "//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeFirstDueBtn = await driver.findElement(By.xpath(closeFirstDueBtnLink), 2000);

        closeFirstDueBtn.click(); 
        await sleep(3000);
        firstDueBtn.click(); //2nd click
        await sleep(3000);
        closeFirstDueBtn.click(); //2nd close 
        await sleep(3000);
        firstDueBtn.click(); //3rd click
        await sleep(3000);
        closeFirstDueBtn.click(); //3rd close
        await sleep(3000);

    console.log('---Step 1.i, part 5b: Click through the second due date field item 3 times and ensure Search button functionality--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[2]//td[3]")), 2000);

        const secondDueBtn = await driver.findElement(By.xpath("//tr[2]//td[3]"));

        secondDueBtn.click(); 
        await sleep(2000);

        const closeSecondDueBtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeSecondDueBtn = await driver.findElement(By.xpath(closeSecondDueBtnLink), 2000);

        closeSecondDueBtn.click(); 
        await sleep(3000);
        secondDueBtn.click(); //2nd click
        await sleep(3000);
        closeSecondDueBtn.click(); //2nd close 
        await sleep(3000);
        secondDueBtn.click(); //3rd click
        await sleep(3000);
        closeSecondDueBtn.click(); //3rd close
        await sleep(3000);

    console.log('---The field will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        secondDueBtn.click();
        await sleep(3000);

        const startBtn3 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        startBtn3.click();
        await sleep(4000);

    console.log('---Type a word into the text area. Click Save and Exit button only.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Due', Key.RETURN);
        await sleep(5000);

        const saveExitBtn3 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        saveExitBtn3.click();
        await sleep(5000);

    console.log('---The Save and Exit button has been clicked --- \n');

        const noBtn3 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

        noBtn3.click();
        await sleep(5000);

        await driver.findElement(By.tagName("textarea")).sendKeys('Enter text here', Key.RETURN);
        await sleep(4000);

        saveExitBtn3.click();
        await sleep(4000);

        const yesBtn3 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);

        yesBtn3.click();
        await sleep(4000);

    console.log('---Step 1.i, part 5c: Click through the third due date field item 3 times and ensure Search button functionality--- \n');
       
        await driver.wait(until.elementLocated(By.xpath("//tr[3]//td[3]")), 2000);

        const thirdDueBtn = await driver.findElement(By.xpath("//tr[3]//td[3]"));

        thirdDueBtn.click(); 
        await sleep(2000);

        const closeThirdDueBtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']";

        const closeThirdDueBtn = await driver.findElement(By.xpath(closeThirdDueBtnLink), 2000);

        closeThirdDueBtn.click(); 
        await sleep(3000);
        thirdDueBtn.click(); //2nd click
        await sleep(3000);
        closeThirdDueBtn.click(); //2nd close 
        await sleep(3000);
        thirdDueBtn.click(); //3rd click
        await sleep(3000);
        closeThirdDueBtn.click(); //3rd close
        await sleep(3000);

    console.log('---The field will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        thirdDueBtn.click();
        await sleep(3000);

        const startBtn4 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        startBtn4.click();
        await sleep(4000);

    console.log('---Type a word into the text area. Click Save and Exit button only.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Due', Key.RETURN);
        await sleep(5000);

        const saveExitBtn4 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        saveExitBtn4.click();
        await sleep(5000);

    console.log('---The Save and Exit button has been clicked --- \n');

        const noBtn4 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

        noBtn4.click();
        await sleep(5000);

        await driver.findElement(By.tagName("textarea")).sendKeys('Enter text here', Key.RETURN);
        await sleep(4000);

        saveExitBtn4.click();
        await sleep(4000);

        const yesBtn4 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);

        yesBtn4.click();
        await sleep(4000);

    console.log('---All three fields have been checked under Due Date column--- \n');

//Step 1.i part 6: Click through the Points field items 3 times each:
    console.log('---Step 1.i, part 6a: Click through the first Points field item 3 times--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[1]//td[4]")), 2000);

        const pt1Btn = await driver.findElement(By.xpath("//tr[1]//td[4]"));

        pt1Btn.click(); 
        await sleep(2000);

        const closePt1BtnLink = "//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]";

        const closePt1Btn = await driver.findElement(By.xpath(closePt1BtnLink), 2000);

        closePt1Btn.click(); 
        await sleep(3000);
        pt1Btn.click(); //2nd click
        await sleep(3000);
        closePt1Btn.click(); //2nd close 
        await sleep(3000);
        pt1Btn.click(); //3rd click
        await sleep(3000);
        closePt1Btn.click(); //3rd close
        await sleep(3000);

    console.log('---Step 1.i, part 6b: Click through the second Points field item 3 times and ensure Search button functionality--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[2]//td[4]")), 2000);

        const pt2Btn = await driver.findElement(By.xpath("//tr[2]//td[4]"));

        pt2Btn.click(); 
        await sleep(2000);

        const closePt2BtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]";

        const closePt2Btn = await driver.findElement(By.xpath(closePt2BtnLink), 2000);

        closePt2Btn.click(); 
        await sleep(3000);
        pt2Btn.click(); //2nd click
        await sleep(3000);
        closePt2Btn.click(); //2nd close 
        await sleep(3000);
        pt2Btn.click(); //3rd click
        await sleep(3000);
        closePt2Btn.click(); //3rd close
        await sleep(3000);

    console.log('---The 2nd Points field will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        pt2Btn.click();
        await sleep(3000);

        const startPtBtn = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        startPtBtn.click();
        await sleep(4000);

    console.log('---Type a word into the text area. Click Save and Exit button only.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Points', Key.RETURN);
        await sleep(5000);

        const savePtBtn = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        savePtBtn.click();
        await sleep(5000);

    console.log('---The Save and Exit button has been clicked --- \n');

        const noPtBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

        noPtBtn.click();
        await sleep(5000);

        await driver.findElement(By.tagName("textarea")).sendKeys('Count', Key.RETURN);
        await sleep(4000);

        savePtBtn.click();
        await sleep(4000);

        const yesPtBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);

        yesPtBtn.click();
        await sleep(4000);

    console.log('---Step 1.i, part 6c: Click through the third Points field item 3 times and ensure Search button functionality--- \n');
       
        await driver.wait(until.elementLocated(By.xpath("//tr[3]//td[4]")), 2000);

        const pt3Btn = await driver.findElement(By.xpath("//tr[3]//td[4]"));

        pt3Btn.click(); 
        await sleep(2000);

        const closePt3BtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closePt3Btn = await driver.findElement(By.xpath(closePt3BtnLink), 2000);

        closePt3Btn.click(); 
        await sleep(3000);
        pt3Btn.click(); //2nd click
        await sleep(3000);
        closePt3Btn.click(); //2nd close 
        await sleep(3000);
        pt3Btn.click(); //3rd click
        await sleep(3000);
        closePt3Btn.click(); //3rd close
        await sleep(3000);

    console.log('---The third Points field item will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        pt3Btn.click();
        await sleep(3000);

        const startPtBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        startPtBtn2.click();
        await sleep(4000);

    console.log('---Type a word into the text area. Click Save and Exit button only.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Name', Key.RETURN);
        await sleep(5000);

        const savePtBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        savePtBtn2.click();
        await sleep(5000);

    console.log('---The Save and Exit button has been clicked --- \n');

        const noPtBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

        noPtBtn2.click();
        await sleep(5000);

        await driver.findElement(By.tagName("textarea")).sendKeys('Title', Key.RETURN);
        await sleep(4000);

        savePtBtn2.click();
        await sleep(4000);

        const yesPtBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);

        yesPtBtn2.click();
        await sleep(4000);

    console.log('---All three fields have been checked under Points column--- \n');

// Step 1.i part 7: Click through each Status field item 3 times each
    console.log('---Step 1.i, part 7: Click through each Status field item 3 times each--- \n');

        await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Turned In')]")), 2000);

        const stat1Btn = await driver.findElement(By.xpath("//div[contains(text(),'Turned In')]"));

        stat1Btn.click(); 
        await sleep(2000);

        const closeStat1BtnLink = "//div[@class='reveal otus-new-modal small retake-assessment-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeStat1Btn = await driver.findElement(By.xpath(closeStat1BtnLink), 2000);
        closeStat1Btn.click(); 
        await sleep(3000);
        stat1Btn.click(); //2nd click
        await sleep(3000);
        closeStat1Btn.click(); //2nd close 
        await sleep(3000);
        stat1Btn.click(); //3rd click
        await sleep(3000);
        closeStat1Btn.click(); //3rd close
        await sleep(3000);

    console.log('---Step 1.i, part 7b: Click through the second Status field item 3 times and ensure Search button functionality--- \n');

        await driver.wait(until.elementLocated(By.xpath("//tr[2]//td[5]//otus-status[1]//div[1]//div[1]")), 2000);

        const stat2Btn = await driver.findElement(By.xpath("//tr[2]//td[5]//otus-status[1]//div[1]//div[1]"));

        stat2Btn.click(); 
        await sleep(2000);

        const closeStat2BtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']//*[name()='path' and contains(@class,'close-butt')]";

        const closeStat2Btn = await driver.findElement(By.xpath(closeStat2BtnLink), 2000);
        closeStat2Btn.click(); 
        await sleep(3000);
        stat2Btn.click(); //2nd click
        await sleep(3000);
        closeStat2Btn.click(); //2nd close 
        await sleep(3000);
        stat2Btn.click(); //3rd click
        await sleep(3000);
        closeStat2Btn.click(); //3rd close
        await sleep(3000);

    console.log('---The 2nd Status field will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        stat2Btn.click();
        await sleep(3000);

        const startStatBtn = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        startStatBtn.click();
        await sleep(4000);

    console.log('---Type a word into the text area. Click Save and Exit button only.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Start', Key.RETURN);
        await sleep(5000);

        const saveStatBtn = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        saveStatBtn.click();
        await sleep(5000);

    console.log('---The Save and Exit button has been clicked --- \n');

        const noStatBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

        noStatBtn.click();
        await sleep(5000);

        await driver.findElement(By.tagName("textarea")).sendKeys('Status', Key.RETURN);
        await sleep(4000);

        saveStatBtn.click();
        await sleep(4000);

        const yesStatBtn = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);

        yesStatBtn.click();
        await sleep(4000);

    console.log('---Step 1.i, part 7c: Click through the third Status field item 3 times and ensure Search button functionality--- \n');
       
        await driver.wait(until.elementLocated(By.xpath("//tr[3]//td[5]//otus-status[1]//div[1]//div[1]")), 2000);

        const stat3Btn = await driver.findElement(By.xpath("//tr[3]//td[5]//otus-status[1]//div[1]//div[1]"));

        stat3Btn.click(); 
        await sleep(2000);

        const closeStat3BtnLink = "//div[@class='reveal otus-new-modal small instructions-modal']//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']";

        const closeStat3Btn = await driver.findElement(By.xpath(closeStat3BtnLink), 2000);
        closeStat3Btn.click(); 
        await sleep(3000);
        stat3Btn.click(); //2nd click
        await sleep(3000);
        closeStat3Btn.click(); //2nd close 
        await sleep(3000);
        stat3Btn.click(); //3rd click
        await sleep(3000);
        closeStat3Btn.click(); //3rd close
        await sleep(3000);

    console.log('---The third Status field item will be clicked one more time, but instead of closing the modal, the Start button will be clicked---\n');

        stat3Btn.click();
        await sleep(3000);

        const startStatBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Start')]"), 3000);
        startStatBtn2.click();
        await sleep(4000);

    console.log('---Type a word into the text area. Click Save and Exit button only.---\n');

        await driver.findElement(By.tagName("textarea")).sendKeys('Status2', Key.RETURN);
        await sleep(5000);

        const saveStatBtn2 = await driver.findElement(By.xpath("//span[contains(text(),'Save & Exit')]"), 5000);
        saveStatBtn2.click();
        await sleep(5000);

    console.log('---The Save and Exit button has been clicked --- \n');

        const noStatBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[2]//button[1]"), 2000);

        noStatBtn2.click();
        await sleep(5000);

        await driver.findElement(By.tagName("textarea")).sendKeys('Title', Key.RETURN);
        await sleep(4000);

        saveStatBtn2.click();
        await sleep(4000);

        const yesStatBtn2 = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//otus-button[1]//button[1]"), 2000);

        yesStatBtn2.click();
        await sleep(4000);

    console.log('---All three fields have been checked under the Status column--- \n');

// FINAL STEP: Click on all dropdown box items (once per item) and view the results they yield. 
    console.log('---Testing the dropdown box by clicking on each dropdown box item--- \n');

        await driver.wait(until.elementLocated(By.xpath("//i[@class='fa fa-chevron-down ng-star-inserted']")), 2000);

        const dropdownBtn = await driver.findElement(By.xpath("//i[@class='fa fa-chevron-down ng-star-inserted']"));

        dropdownBtn.click(); 
        await sleep(2000);

    console.log('---Dropdown box has been activated, revealing two options: All Classes and QA Tech Challenge. Both will be clicked in order now.--- \n');

        const allClassesBtn = await driver.findElement(By.xpath("//main[@class='logged-in-user']//li[1]"));

        allClassesBtn.click();
        await sleep(1000);

        const exitBtn =  await driver.findElement(By.xpath("//i[@class='fa fa-chevron-down ng-star-inserted']"), 2000);

        exitBtn.click();
        await sleep(3000);

        dropdownBtn.click();
        await sleep(6000);

    console.log('---Click on QA Tech Challenge dropdown item--- \n');

        const qaBtn = await driver.findElement(By.xpath("//main[@class='logged-in-user']//li[2]"));

        qaBtn.click();
        await sleep(6000);

    console.log('---PROCESS OF TESTING THE FIRST SECTION (ASSESSMENTS PAGE) IS COMPLETE.--- \n');
    }
    catch(err) {
        console.log('----ERROR--- \n');
        console.log(err.message);
    }
    finally {
      await driver.quit();
    }
})();