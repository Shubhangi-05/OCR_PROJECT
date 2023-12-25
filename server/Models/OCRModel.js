import mongoose from "mongoose";

const OCRSchema = new mongoose.Schema({
      identificationNumber: {
        type: String,
      },
      name: 
      {
        type:String,
      },
      lastName: {
        type: String,
      },
      dateOfBirth:{
        type:String,
      },
      dateOfIssue:  
      {
      type:String,
      },
      dateOfExpiry: {
        type:String,
        },
    
  });
  
  export default mongoose.model("OCRModel", OCRSchema);