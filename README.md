# functional-testing-otus-interview

#FUNCTIONAL TEST - OTUS INTERVIEW
    - Suite of functional tests utilizing JavaScript and Selenium. 
    
    - Creates and runs automated tests for various situations and areas of the Otus app per coding challenge instructions. 

# FOR INSTALLATION (WORKS FOR CHROME AND FIREFOX ONLY):

- Install ChromeDriver with Google Chrome Version 85.0.4183.83 
(http://chromedriver.storage.googleapis.com/index.html?path=85.0.4183.83/)

- Install GeckoDriver with FireFox (geckodriver-v0.27.0-macos.tar.gz at https://github.com/mozilla/geckodriver/releases/tag/v0.27.0)

- npm install

#DEVELOPMENT:
- RUN LOCALLY IN HEADLESS MODE:
    - npm run seleniumStartHeadless

- RUN LOCALLY IN NON-HEADLESS MODE:
    - npm run seleniumStart


#BUGS FOUND:
    - Audio playback (when recording audio file for the My Bookshelf section) does not work

    - When logging in with invalid credentials, the user can see an alert that notifies them of this. Upon entering the correct credentials, the user logs in and can still see the aforementioned alert, and the alert does not disappear unless the user manually clicks the Close button.

#INCOMPLETE: 
    - Testing file upload in My Bookshelf section

    - Testing photo and video upload in My Bookshelf section

    - Testing add page button in My Bookshelf section

    - Testing the class board 

    - Testing the assigned lessons

    - Testing the gradebook