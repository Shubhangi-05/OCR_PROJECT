# DEPLOYED LINK
https://idcard-ocr-tmri.onrender.com/

# QOALA OCR WEB APP
Create an OCR (Optical Character Recognition) App that can recognize thai id cards and get the required information. Save this information for retrival later.

# OBJECTIVE
Develop an application that utilizes Optical Character Recognition (OCR) to analyze thai id cards and extract relevant data. This app should integrate with Google Vision API for OCR processing and then parse the response to interpret the OCR results, returning the final data in JSON format.
Along with this we would like you to choose a database of your choice and save the results in the db. We would need a CRUD api to create the ocr data, if needed we can modify some data, filter them or delete certain id cards(soft delete).
Sample Thai ID Card Data:
The id cards you'll be analyzing can contain various data fields such as:

Name
Last Name
Identification Number
Date of issue
Date of expiry
Date of birth

OCR Processing:

Integrate the application with Google Vision API to perform OCR on id card images. https://cloud.google.com/vision/docs/ocr#optical_character_recognition_ocr

Ensure that the OCR can accurately read text from different thai id cards.

Database and REST API Endpoints

Create a New OCR Record Update Existing OCR Data' Retrieve and Display OCR Data Delete OCR Records

JSON Output: The final output should be a well-structured JSON object containing all the extracted data. Ensure accuracy and readability of the JSON output.

**I have used Google Cloud Vision api for extracting of data from the Thai Id cards**
# OVERVIEW OF THE WEBSITE

This project is developed using the MERN Stack which offers a full stack development using MONGODB as database , Express.js as back-end ,Node.js to provide server environment and React.js as a front-end library.

It has various functionalities:
1. A user can create an OCR on uploading ID Card (The button is clearly visible on the homepage)
2. The display ID card button will display all the OCR data corresponding to the Identification Number provided.
3. The display all button will display all the OCR data stored in the database.
4. The delete Identity Card button will delete all the OCR data corresponding to the IDentity number.
5. The update ocr will update any data of the corresponding Identity number Id card present in the database through the user's input.

# HOW TO START THIS WEBSITE?

**Step 1:**
Download the zip or clone the repository from repository :git clone https://github.com/Shubhangi-05/OCR_PROJECT

**Step 2:**
Go to the client directory and run --> npm install to install all the dependencies at the client side.
Go to the server folder and again run npm install to install all the dependencies at the server side.

**Step 3:**
now go to the server directory at terminal ..that is run     cd server    on terminal and then run    node server.js  to start the server side
on another terminal go to the client directory and then run    npm start to run the client side.

# Website will be opened and the UI will look like this :

**Homepage**
<img width="950" alt="image" src="https://github.com/Shubhangi-05/OCR_PROJECT/assets/91474175/9f78bb71-650f-4dd6-82a7-58212cbb7c82">


**Create OCR**
<img width="957" alt="image" src="https://github.com/Shubhangi-05/OCR_PROJECT/assets/91474175/d8519467-8ea3-4919-a606-f01d8a31d9b3">

After Creation of OCR DATABASE:

<img width="902" alt="image" src="https://github.com/Shubhangi-05/OCR_PROJECT/assets/91474175/67f93a06-c4f7-496e-a216-27f6343aa439">

**Update OCR**



**Display OCR**
<img width="956" alt="image" src="https://github.com/Shubhangi-05/OCR_PROJECT/assets/91474175/199acb86-27da-41f6-8404-a5812df51f00">

**Update OCR**
<img width="725" alt="image" src="https://github.com/Shubhangi-05/OCR_PROJECT/assets/91474175/ad643e6c-1b9b-4767-8cc3-759f640a5487">

After Updating Database:
<img width="938" alt="image" src="https://github.com/Shubhangi-05/OCR_PROJECT/assets/91474175/b72676dc-891d-4ce4-b3d0-7af1fba7d13f">



**Delete OCR**
<img width="956" alt="image" src="https://github.com/Shubhangi-05/OCR_PROJECT/assets/91474175/3081cc55-6724-479d-bb92-c479230c9b83">
After Deletion:
ATLAS:
<img width="580" alt="image" src="https://github.com/Shubhangi-05/OCR_PROJECT/assets/91474175/17ba9e4a-ed39-4a39-9ab3-82788dfe1dfd">



# NOW GO ON AND TRY ALL THE FEATURES!
