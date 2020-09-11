# functional-testing-otus-interview

# FUNCTIONAL TESTING - OTUS INTERVIEW

 - Suite of functional tests utilizing JavaScript and Selenium. 
    
 - Creates and runs automated tests for various situations and areas of the Otus app per coding challenge instructions. 

# FOR INSTALLATION (CHROME & FIREFOX ONLY):

- Install ChromeDriver with Google Chrome Version 85.0.4183.83 
(http://chromedriver.storage.googleapis.com/index.html?path=85.0.4183.83/)

- Install GeckoDriver with FireFox (geckodriver-v0.27.0-macos.tar.gz at https://github.com/mozilla/geckodriver/releases/tag/v0.27.0)

- npm install

# DEVELOPMENT:

- RUN ASSESSMENTS TEST (HEADLESS):
    - npm run headlessAssessment

- RUN ASSESSMENTS TEST (NON-HEADLESS):
    - npm run assessment

- RUN MY BOOKSHELF TEST (HEADLESS):
    - npm run headlessBookshelf

- RUN MY BOOKSHELF TEST (NON-HEADLESS):
    - npm run bookshelf

- RUN LESSONS TEST (HEADLESS):
    - npm run headlessLessons

- RUN LESSONS TEST (NON-HEADLESS):
    - npm run lessons

#OF NOTE: 

- When testing My Bookshelf, for best results regarding testing the PDF link, please use the NON-HEADLESS option.

- FireFox does not scroll to the proper navigation item when testing My Bookshelf. For best results, please use Chrome for My Bookshelf.

# BUG FOUND:

 - When logging in with invalid credentials, an alert displays that notifies the user of the invalid credentials. Upon entering the correct credentials and logging in, however, the alert still displays. The alert does not disappear unless the user manually clicks the Close button.


# INCOMPLETE: 

 - Testing all Resource Types except for Google Drive in the My Bookshelf section

 - Testing Folder functionality in the My Bookshelf section

 - Testing the hover functionality in order to trigger the triple dot area in the resource row in My Bookshelf (hover seems to only be accessible through Java/Python. This test uses JavaScript only)

 - Testing the class board 

 - Testing the gradebook