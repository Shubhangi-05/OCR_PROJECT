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
Go to the myproject directory and run --> npm install to install all the dependencies.
Go to the server folder and again run npm install to install all the dependencies at the server side.

**Step 3:**
Create a .env file at the server folder and write the MONGO_URL link of your corresponding cluster at atlas.
Also ensure that you type PORT=8000 in your .env file 

**Step 4:**
Create a config folder and then create a serviceAccount.js file where you have to type the service Account details of google cloud to use google cloud vision api
This is how service Account.js will look like:
export const CREDENTIALS= JSON.parse(JSON.stringify({
    "type": "service_account",
    ...all other details...
    )}

**Step 5:**
now go to the server directory at terminal ..that is run     cd server    on terminal and then run    node server.js  to start the server side
on another terminal go to the myproject directory and then run    npm start to run the client side.

# Website will be opened and the UI will look like this :

![HOMEPAGE.PNG](https://private-user-images.githubusercontent.com/91474175/292770519-8268c58c-6369-456f-93e8-ed3f6a65f80a.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM1MjMxNzYsIm5iZiI6MTcwMzUyMjg3NiwicGF0aCI6Ii85MTQ3NDE3NS8yOTI3NzA1MTktODI2OGM1OGMtNjM2OS00NTZmLTkzZTgtZWQzZjZhNjVmODBhLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIyNVQxNjQ3NTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NjM5MDVkNDMxOGU3MmFiNzc5NTJiZjc5OTFkZWExYzZhYzUyNjkyZDQ1NDFmZGE2YjAzNGFkYWNjZWU5ZjU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9D_f96aE2evAM9h_qpPeGWRDP0Q_jyI4esB-VOYrjCk)

# NOW GO ON AND TRY ALL THE FEATURES!
