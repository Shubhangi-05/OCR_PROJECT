import React, { useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";

const CreatenewOCR = () => {
   const navigate=useNavigate();
   const [idcard,setidcard]=useState("");
   const [outData, setoutData]=useState(null);
   const handlecreate=async(e)=>
   {
      e.preventDefault();
      try {
        const IdcardData = new FormData();
        IdcardData.append("idcard", idcard);
        const { data } = await axios.post(
          "/api/create-ocr",
          IdcardData
        );
        if (data?.success) {
          toast.error(data?.message);
        } else {
          toast.success("OCR Created Successfully");
          setoutData(data);
          
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    };

  return (
    <>
    <div></div>
    <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {idcard ? idcard.name : "Upload Photo"}
                  <input
                    type="file"
                    name="idcard"
                    accept="image/*"
                    onChange={(e) => setidcard(e.target.files[0])}
                    hidden
                  />
                </label>
      </div>
    <div><button onClick={handlecreate}>
      Submit
    </button></div>
    {outData && (
        <div  style={{
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: "#848484",
            borderRadius: '10px',
            width: 'fit-content',
            padding: '20px'
          }}>
            <h1 style={{ borderStyle: 'solid',borderColor: "#848484",}}> Data Extracted</h1>
            <h1> Identification Number: {outData.identificationNumber}</h1>
            <h1> Name: {outData.name}</h1>
            <h1> LastName: {outData.lastName}</h1>
            <h1> DOB: {outData.dateOfBirth}</h1>
            <h1> Date of Issue: {outData.dateOfIssue}</h1>
            <h1> Date o Expiry: {outData.dateOfExpiry}</h1>

            <div style={{
              display: 'flex',
              gap: "20px"
            }}>
            </div>
        </div>
    )}
    </>
  );
}
export default CreatenewOCR