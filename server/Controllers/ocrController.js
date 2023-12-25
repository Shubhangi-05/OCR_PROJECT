import vision from "@google-cloud/vision";
import OCRModel from "../Models/OCRModel.js";
import { CREDENTIALS } from "../config/serviceAccount.js";
const CONFIG ={
    credentials:{
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
}
const client1 = new vision.ImageAnnotatorClient(CONFIG);

const detectText = async (fileBuffer) => {
      const [res] = await client1.textDetection(fileBuffer);
      console.log(res);
      return res;
  };

  function searchAfter(stringResult, searchString) {
    let ans = "";
    let it = stringResult.lastIndexOf(searchString);
    it += searchString.length + 1;
    while (stringResult[it] != '\n') {
        ans += stringResult[it];
        it++;
    }
    return ans;
}
function searchBefore(stringResult, searchString) {
    let ans = "";
    let it = stringResult.lastIndexOf(searchString);
    it -= 2;
    while (stringResult[it] != '\n') {
        ans += stringResult[it];
        it--;
    }
    let reversed = ans.split('').reverse().join('');
    return reversed;
}

export const create = async (req, res) => {
    try {
        let {idcard} = req.files;
        const file_path=idcard.path;
        let [result] = await client1.textDetection(file_path);
        console.log(result);
        let stringResult = result.fullTextAnnotation.text;
        const identificationNumber = searchAfter(stringResult, "Thai National ID Card")
        const name = searchAfter(stringResult, "Name");
        const lastName = searchAfter(stringResult, "Last name");
        const birthDate = searchAfter(stringResult, "Date of Birth");
        const issueDate = searchBefore(stringResult, "Date of Issue");
        const expiryDate = searchBefore(stringResult, "Date of Expiry");
        try {
            const idCard = new OCRModel({ identificationNumber: identificationNumber, name: name, lastName: lastName, dateOfBirth: birthDate, dateOfIssue: issueDate, dateOfExpiry: expiryDate })
            await idCard.save();
            res.json(idCard)
            console.log(idCard);
        } catch (error) {
            console.log(error.message)
            res.status(500).json("Internal server Error")
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }

    //demo:
    try{
        let {idcard} = req.files;
        const file_path=idcard.path;
        console.log(file_path);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json("INTERNAL SERVER ERROR");
    }
};

export const display =async(req,res)=>{
    try {
        const {identificationNumber} = req.params;
        const ocrData = await OCRModel.findOne({ identificationNumber: identificationNumber });
        if (ocrData) {
            res.json({ success: true, ocrData });
          } else {
            res.status(404).json({ success: false, message: 'OCR data not found' });
          }
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

export const todelete=async(req,res)=>{
    try{
    const { identificationNumber } = req.params;

    // Use the deleteOne method to delete the document by identification number
    const result = await OCRModel.deleteMany({ identificationNumber: identificationNumber });

    if (result.deletedCount === 1) {
      res.json({ success: true, message: 'OCR data deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'OCR data not found' });
    }
  } catch (error) {
    console.error('Error deleting OCR data:', error);
    res.status(500).json({ error: 'Error deleting OCR data' });
  }
};

export const displayall=async(req,res)=>{
    try{
        const idCard = await OCRModel.find();
        console.log(idCard);
        res.json(idCard)
       } catch (error) {
        console.error(error)
        console.log(error.message)
        res.status(500).json("Internal server Error")
       }
    
};
export const toupdate = async (req, res) => {
    console.log("This is Sneh ========");
    const id = req.params.id; // Assuming the ID is in the params
    console.log(id);
    const { identificationNumber, name, lastName, dateOfBirth, dateOfIssue, dateOfExpiry } = req.body;
    console.log(req.body);
    try {
      const idCard = await OCRModel.findById(id);
      if (!idCard) {
        return res.status(404).send("Not Found");
      }
      const updatedId = await OCRModel.findByIdAndUpdate({_id:id},
        { $set: {
            identificationNumber:identificationNumber,
            name:name,
            lastName:lastName,
            dateOfBirth:dateOfBirth,
            dateOfIssue:dateOfIssue,
            dateOfExpiry:dateOfExpiry,
        } },
        { new: true } // This option returns the modified document rather than the original
      );
        console.log(updatedId);
      if (updatedId) {
        res.json({ success: true, updatedId });
      } else {
        res.status(404).json({ success: false, message: 'OCR data not found' });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Internal server Error");
    }
  };
  