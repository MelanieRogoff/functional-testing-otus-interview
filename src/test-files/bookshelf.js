const { By, Key, until } = require('selenium-webdriver');
const { login } = require('../helpers/login');
const { multiClick } = require('../helpers/multiclick');
const { openClose } = require('../helpers/openclose');
const { getDriver } = require('../helpers/getDriver');
const { dropdown } = require('../helpers/dropdown');
const { inputEntry } = require('../helpers/inputEntry');
const { addResource } = require('../helpers/addResource');
const { folderNames } = require('../helpers/folderNames');
const { threeDotClick } = require('../helpers/threeDotClick');
const remote = require('selenium-webdriver/remote');

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
            await rowClicker.click();
                   
        console.log('---Click on the dropdown icon--- \n');
            await driver.sleep(2000); 
            await driver.wait(until.elementLocated(By.xpath("//i[@class='fa fa-search ng-star-inserted']")), 6000);
            const dropIcon = await driver.findElement(By.xpath("//i[@class='fa fa-search ng-star-inserted']"));
            await multiClick(driver, dropIcon, 1);
            
        console.log('---Click on the first dropdown item--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementsLocated(By.xpath("//div[@id='otus-search-dropdown']//li[@class='ng-star-inserted']")), 6000);
            const drop1 = await driver.findElement(By.xpath("//div[@id='otus-search-dropdown']//li[@class='ng-star-inserted']"));
            await multiClick(driver, drop1, 1, 1000);

        console.log('---Click the second dropdown item--- \n');
            await driver.sleep(4000);
            await multiClick(driver, dropIcon, 1, 3000);
            await driver.wait(until.elementsLocated(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted")), 4000);
            const drop2 = await driver.findElement(By.css("main.logged-in-user:nth-child(3) div.main-container-wrap.logged-in-user div.container:nth-child(1) ng-component.ng-star-inserted:nth-child(2) shared-bookshelf.ng-star-inserted:nth-child(2) div.page-wrapper:nth-child(1) div.my-bookshelf div.my-bookshelf__header.ng-star-inserted div.my-bookshelf__header__container1 class-dropdown.ng-star-inserted:nth-child(2) div.class-dropdown ot-search-multi-select.ng-star-inserted div.ot-multiselect-wrap div.ot-dropdown.ng-star-inserted ul:nth-child(1) > li.ng-star-inserted"));
           await multiClick(driver, drop2, 1);

        console.log('---Enter numeric, special character, and regular character values into the input box--- \n');
            await inputEntry(driver);
    
        console.log('---Click on the row item once more in order to trigger the sub-navigation panel--- \n');
            await driver.wait(until.elementLocated(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']")), 4000);
            await rowClicker.click();
            
        console.log('---Click on the My Bookshelf sub-navigation item 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[2]")), 2000);
            const bookSubNav = await driver.findElement(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[2]"));
            await driver.sleep(2000);
            await multiClick(driver, bookSubNav);
                
        console.log('--Click on the first table row in My Bookshelf--- \n');
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']")), 6000);
            const bookRow = await driver.findElement(By.xpath("//table[@class='otus-large-table bookshelf-table tablesorter']//tr[@class='ng-star-inserted']"));
            await multiClick(driver, bookRow, 1);
            await driver.sleep(2000);

        console.log('---Click on the link in the modal--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='attachment-tile__link ng-star-inserted']")), 1000);
            const modalLink = await driver.findElement(By.xpath("//div[@class='attachment-tile__link ng-star-inserted']"));
            await multiClick(driver, modalLink, 1);

        console.log('---Close the new PDF window and revert back to the Otus page--- \n');
            const originalWindow = await driver.getWindowHandle(); //storing ID of the original window here
            await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 10000); //grabbing the new tab
            const windows = await driver.getAllWindowHandles();
            
            windows.forEach(async handle => { //looping through to find the new window handle
                if (handle !== originalWindow) {
                    await driver.switchTo().window(handle);
                }
            });

            await driver.wait(until.urlContains('blob:https://my.otus.com/'), 10000); 
            await driver.close(); 
            await driver.switchTo().window(originalWindow);

        console.log('---Close the modal--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='reveal otus-modal modal-fixed-medium otus-modal-top-radius']//button[@class='btn btn-light small-size ng-star-inserted'][contains(text(),'Close')]")), 3000);
            const closeBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-modal modal-fixed-medium otus-modal-top-radius']//button[@class='btn btn-light small-size ng-star-inserted'][contains(text(),'Close')]"));
            await driver.sleep(2000);
            await multiClick(driver, closeBtn, 1);

        console.log('---Enter numeric, special character, and regular character values into the input box--- \n');
            await inputEntry(driver);

        console.log('---Click the + button to add a Resource--- \n');
            await addResource(driver);
        
        console.log('---Click on the Resource dropdown line item --- \n');
            await dropdown(driver);

        console.log('---Click on the upload resource type--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[5]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]")), 2000);
            const uploadBtn = await driver.findElement(By.xpath("//div[5]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]"));
            await multiClick(driver, uploadBtn, 1);

        console.log('---Click Browse button--- \n');
            await driver.wait(until.elementLocated(By.xpath("//span[contains(text(),'Browse')]")), 2000);
            const browse = await driver.findElement(By.xpath("//span[contains(text(),'Browse')]"));
            await multiClick(driver, browse, 1);

        console.log('---Upload a photo, for example--- \n');
    //LEFT OFF HERE --- THIS DIDN'T WORK
            // await driver.setFileDetector(new remote.FileDetector);  
            // const upload = driver.findElement(By.xpath("//div[@class='row text-center margin-top-30 margin-bottom-50']//otus-button"));
            // upload.sendKeys("computer.png");  

        console.log('---Click on the Resource dropdown line item --- \n');
            await dropdown(driver);

        console.log('---Click attachment button, enter www.google.com as the link, Google as the link name, and press Save --- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[5]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[2]")), 2000);
            const attachBtn = await driver.findElement(By.xpath("//div[5]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[2]"));
            await multiClick(driver, attachBtn, 1);

        console.log('---Enter www.google.com as the link in the first input box in the modal--- \n');
             await driver.findElement(By.xpath("//div[@class='attach-link__content-input']//input[@class='attach-link__input ng-untouched ng-pristine ng-valid']")).sendKeys('www.google.com', Key.RETURN);

        console.log('---Enter Google as the link name in the second input box in the modal--- \n');
             await driver.wait(until.elementLocated(By.xpath("//input[@class='attach-link__input ng-untouched ng-pristine ng-valid']")), 2000);
             await driver.findElement(By.xpath("//input[@class='attach-link__input ng-untouched ng-pristine ng-valid']")).sendKeys('Google', Key.ENTER);

        console.log('---Click Save--- \n');
            await driver.wait(until.elementLocated(By.xpath("//button[@class='otus-button icon-button dark attach-link__save ng-star-inserted']")), 2000);
            const saveBtn = await driver.findElement(By.xpath("//button[@class='otus-button icon-button dark attach-link__save ng-star-inserted']"));
            await multiClick(driver, saveBtn, 1);

        console.log('---Click add photo button and click back button--- \n');
            await driver.wait(until.findElement(By.xpath("//div[5]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[3]")), 2000);
            const photo = await driver.findElement(By.xpath("//div[5]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[3]"));
            await multiClick(driver, photo, 1);
            await driver.wait(until.findElement(By.xpath("//div[@class='otus-drag-drop-area']//i[@class='fa fa-arrow-left ng-star-inserted']")), 2000);
            const back = await driver.findElement(By.xpath("//div[@class='otus-drag-drop-area']//i[@class='fa fa-arrow-left ng-star-inserted']"));
            await multiClick(driver, back, 1);

        console.log('---Click add video button and click back button--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[6]//div[4]")), 2000);
            const video = await driver.findElement(By.xpath("//div[6]//div[4]"));
            await multiClick(driver, video, 1);
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//div[@class='otus-drag-drop-area']//i[@class='fa fa-arrow-left ng-star-inserted']")), 1000);
            const close = await driver.findElement(By.xpath("//div[@class='otus-drag-drop-area']//i[@class='fa fa-arrow-left ng-star-inserted']"));
            await multiClick(driver, close, 1);

        console.log('---Click add Youtube button and enter corresponding data--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[6]//div[5]")), 2000);
            const youtube = await driver.findElement(By.xpath("//div[6]//div[5]"));
            await multiClick(driver, youtube, 1);
            await driver.sleep(4000);
           
            await driver.findElement(By.xpath("//div[@class='attach-link__content-input']//input[@class='ng-untouched ng-pristine ng-valid']")).sendKeys('https://www.youtube.com/watch?v=nSHH9-5b4JY', Key.RETURN);

            await driver.wait(until.elementLocated(By.xpath("//input[@class='ng-pristine ng-valid ng-touched']")), 1000);

            const youtubeBtn = await driver.findElement(By.xpath("//input[@class='ng-pristine ng-valid ng-touched']"))

            multiClick(driver, youtubeBtn, 1);

            await driver.findElement(By.xpath("//input[@class='ng-pristine ng-valid ng-touched']")).sendKeys('Youtube Video', Key.RETURN);

        console.log('---Click the save button for the YouTube video--- \n');
            await driver.wait(until.elementLocated(By.xpath("//button[@class='otus-button icon-button dark attach-link__save ng-star-inserted']")), 1000);
           const saveYoutubeBtn = await driver.findElement(By.xpath("//button[@class='otus-button icon-button dark attach-link__save ng-star-inserted']"));
            multiClick(driver, saveYoutubeBtn, 1);


        console.log('---Click add audio button--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[6]//div[6]")), 2000);
            const audio = await driver.findElement(By.xpath("//div[6]//div[6]"));
            await multiClick(driver, audio, 1);
            await driver.sleep(4000);

        console.log('---Click the audio recording button--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='row text-center']//button[@class='otus-button icon-button dark ng-star-inserted']")), 2000);

            const audioRecording = await driver.findElement(By.xpath("//div[@class='row text-center']//button[@class='otus-button icon-button dark ng-star-inserted']"));

            await multiClick(driver, audioRecording, 1);
         
        console.log('---Click on the microphone--- \n');
            await driver.wait(until.elementLocated(By.xpath("//button[@class='vjs-record vjs-device-button vjs-control vjs-icon-audio-perm']")), 4000);
            const microphoneBtn = await driver.findElement(By.xpath("//button[@class='vjs-record vjs-device-button vjs-control vjs-icon-audio-perm']"));
            await multiClick(driver, microphoneBtn, 1);

        console.log('---Click the record button and speak--- \n');
            await driver.wait(until.elementLocated(By.xpath("//button[@class='vjs-record-button vjs-control vjs-button vjs-icon-record-start']")), 5000);
            const recorder = await driver.findElement(By.xpath("//button[@class='vjs-record-button vjs-control vjs-button vjs-icon-record-start']"));
            await multiClick(driver, recorder, 1);

        console.log('---Click the stop recording button--- \n');
            await driver.wait(until.elementLocated(By.xpath("//button[@class='vjs-record-button vjs-control vjs-button vjs-icon-record-stop']")), 8000);
            const stopRecording = await driver.findElement(By.xpath("//button[@class='vjs-record-button vjs-control vjs-button vjs-icon-record-stop']"));
            await multiClick(driver, stopRecording, 1);

        console.log('---Press play to listen to the audio--- \n');
            await driver.wait(until.elementLocated(By.xpath("//button[@class='vjs-play-control vjs-control vjs-button vjs-paused']//span[@class='vjs-icon-placeholder']")));
            const play = await driver.findElement(By.xpath("//button[@class='vjs-play-control vjs-control vjs-button vjs-paused']//span[@class='vjs-icon-placeholder']"));
            await multiClick(driver, play, 1);
        
        console.log('---ERROR: It appears that the audio playback does not work--- \n');

        console.log('---Type in a title for the audio recording--- \n');
            await driver.findElement(By.xpath("//input[@class='attach-audio__input ng-untouched ng-pristine ng-valid']")).sendKeys('Recording1', Key.RETURN);

        console.log('---Press the Save button--- \n');
            await driver.wait(until.elementLocated(By.xpath(" //div[@class='row margin-top-30 margin-bottom-50 ng-star-inserted']//button[@class='otus-button icon-button dark ng-star-inserted']")), 4000);
            const saveAudioBtn = await driver.findElement(By.xpath(" //div[@class='row margin-top-30 margin-bottom-50 ng-star-inserted']//button[@class='otus-button icon-button dark ng-star-inserted']"));
            await multiClick(driver, saveAudioBtn, 1);
        
        console.log('---Click Google Drive button; do not log in for this test --- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[6]//div[7]")), 2000);
            const googleDrive = await driver.findElement(By.xpath("//div[6]//div[7]"));
            await multiClick(driver, googleDrive, 1);

        console.log('---Click add from OneDrive button and click back button--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[6]//div[8]")), 2000);
            const oneDrive = await driver.findElement(By.xpath("//div[6]//div[8]"));
            await multiClick(driver, oneDrive, 1);
            await driver.sleep(4000);
            await driver.wait(until.elementLocated(By.xpath("//div[@class='attach-link']//i[@class='fa fa-arrow-left ng-star-inserted']")), 1000);
            const closeOneDrive = await driver.findElement(By.xpath("//div[@class='attach-link']//i[@class='fa fa-arrow-left ng-star-inserted']"));
            await multiClick(driver, closeOneDrive, 1);

        console.log('---Click add page button and click back button--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='reveal-overlay']//div[9]")), 2000);
            const addPage = await driver.findElement(By.xpath("//div[@class='reveal-overlay']//div[9]"));
            await multiClick(driver, addPage, 1);
            await driver.wait(until.elementLocated(By.xpath("//div[@class='attach-link']//i[@class='fa fa-arrow-left ng-star-inserted']")), 1000);
            const closeAddPage = await driver.findElement(By.xpath("//div[@class='attach-link']//i[@class='fa fa-arrow-left ng-star-inserted']"));
            await multiClick(driver, closeAddPage, 1, 2000);

        console.log('---Click close button on resource type modal--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[6]//ot-modal-navbar[1]//div[3]//*[local-name()='svg']")), 2000);
            const closeModal = await driver.findElement(By.xpath("//div[6]//ot-modal-navbar[1]//div[3]//*[local-name()='svg']"));
            await multiClick(driver, closeModal, 1);

        console.log('---Click add resource button again--- \n');
            await addResource(driver);
    
        console.log('---Click Folder and enter 3 folder names--- \n');
            await folderNames(driver);

        console.log('---Click add resource button once more and click Folder--- \n');
            await addResource(driver);
        
        console.log('---Click on the 3 dots in the Resource table--- \n');
            await threeDotClick(driver);

        console.log('---Click Share, then click Cancel --- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@id='outerWrapper']//div[@class='ui-overlaypanel-content']//div[1]//span[1]")), 2000);
            const share = await driver.findElement(By.xpath("//div[@id='outerWrapper']//div[@class='ui-overlaypanel-content']//div[1]//span[1]"));
            await multiClick(driver, share, 1);
            const cancelBtn = await driver.findElement(By.xpath("//div[4]//div[1]//div[1]//div[1]//button[1]"));
            await multiClick(driver, cancelBtn, 1);

        console.log('---Click on the 3 dots in the Resource table again--- \n');
            await threeDotClick(driver);

        console.log('---Click Edit, then click the close button--- \n');
            const editBtn = await driver.findElement(By.xpath("//div[@class='my-bookshelf__resources']//div[2]//span[1]"));
            await multiClick(driver, editBtn, 1);
            const closeEditBtn = await driver.findElement(By.xpath("//div[@class='otus-new-modal__close-button smallX ng-star-inserted']//*[local-name()='svg']"));
            await multiClick(driver, closeEditBtn, 1);

        console.log('---Click on the 3 dots in the Resource table again and click Move--- \n');
            await threeDotClick(driver);
            const moveBtn = await driver.findElement(By.xpath("//div[@id='outerWrapper']//div[3]//span[1]"));
            await multiClick(driver, moveBtn, 1);

        console.log('---Click Done--- \n');
            const doneBtn = await driver.findElement(By.xpath("//div[@class='reveal otus-modal modal-fixed-medium otus-modal-top-radius']//div[@class='nav-right']//button[@class='btn btn-light small-size ng-star-inserted']"));
            await multiClick(driver, doneBtn, 1);
        
        console.log('---Close the notification window--- \n');
            const notify = await driver.findElement(By.xpath("//div[@class='close-button ng-star-inserted']"));
            await multiClick(driver, notify, 1);

        console.log('---Click cancel--- \n');
            const canceler = await driver.findElement(By.xpath("//div[19]//div[1]//div[1]//div[1]//button[1]"));
            await multiClick(driver, canceler, 1);

        console.log('---Final step for this page - Click on the thre dots, click Delete and cancel the deletion--- \n');
            await threeDotClick(driver);
            const deleteBtn = await driver.findElement(By.xpath("//div[@id='outerWrapper']//div[4]//span[1]"))
            await multiClick(driver, deleteBtn, 1);
            await driver.sleep(4000);
            const cancelDelete = await driver.findElement(By.xpath("//button[@class='button confirm-alert-button ng-star-inserted']"));
            await multiClick(driver, cancelDelete, 1);

        console.log('---Click on Google Drive sub-navigation panel 3 times--- \n');
            await driver.wait(until.elementLocated(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[3]//a[1]//span[1]")), 4000);
            const googleDriveBtn = await driver.findElement(By.xpath("//div[@class='navbar secondary-nav ng-star-inserted']//li[3]//a[1]//span[1]"));
            await multiClick(driver, googleDriveBtn);
            await driver.sleep(4000);

        console.log('---Click on the first row in the table in Google Drive view--- \n');
            await driver.wait(until.elementLocated(By.xpath("//tr[@class='ng-star-inserted']")), 8000);
            const googleRow = await driver.findElement(By.xpath("//tr[@class='ng-star-inserted']"));
            await multiClick(driver, googleRow, 1);

        console.log('---Enter 123, AB12, AB12!? in the search box and press enter--- \n');
            await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('123', Key.RETURN);
            await driver.sleep(4000);
            await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('AB12', Key.RETURN);
            await driver.sleep(4000);
            await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('AB12!?', Key.RETURN);
            await driver.sleep(4000);

        console.log('---Click on the Shared with Me tab within the page--- \n');
            await driver.wait(until.elementLocated(By.xpath("//button[@class='otus-button-group dark ng-star-inserted']")), 5000);
            const sharedTab = await driver.findElement(By.xpath("//button[@class='otus-button-group dark ng-star-inserted']")); 
            await multiClick(driver, sharedTab, 1);
            
        console.log('---Click on the first row in the table in Shared with Me view--- \n');
            const firstSharedRow = await driver.findElement(By.xpath("//tr[@class='ng-star-inserted']"));
            await multiClick(driver, firstSharedRow, 1);

        console.log('---Click on the Google Drive tab--- \n');
            const driveTab = await driver.findElement(By.xpath('//button[contains(text(), "My Drive")]'));
            await multiClick(driver, driveTab, 1);

        console.log('---Test is complete--- \n');
        
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