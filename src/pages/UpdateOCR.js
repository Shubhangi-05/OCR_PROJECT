import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateOCR = () => {
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [ocrData, setOcrData] = useState({});

  const [updatedData, setUpdatedData] = useState({
    _id:'',
    identificationNumber:'',
    name: '',
    lastName: '',
    dateOfBirth: '',
    dateOfIssue: '',
    dateOfExpiry: '',
  });

    const changeUpdate=async(currdata)=>{
            updatedData._id=currdata._id
    updatedData.identificationNumber=currdata.identificationNumber
    updatedData.name= currdata.name
    updatedData.lastName=currdata.lastName
    updatedData.dateOfBirth = currdata.dateOfBirth
    updatedData.dateOfIssue= currdata.dateOfIssue
    updatedData.dateOfExpiry= currdata.dateOfExpiry
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/display-ocr/${identificationNumber}`);
        console.log(response);
        setOcrData(response.data.ocrData);
      } catch (error) {
        console.error('Error fetching OCR data:', error);
      }
    };

    const handleChange= async(e,key)=>{
        setUpdatedData({...updatedData,[key]:e.target.value})
    };
    const handleUpdate = async (id) => {
        try {
          await axios.put(`/api/update-ocr/${id}`, updatedData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          // You may want to re-fetch the updated data or update the local state as needed
        } catch (error) {
          console.error('Error updating entry:', error);
        }
      };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Identification Number"
        value={identificationNumber}
        onChange={(e) => setIdentificationNumber(e.target.value)}
      />
      <button onClick={fetchData}>View Details</button>
      {ocrData &&
      <div>
        {/* Display OCR data fields */}
        <p>identificationNumber: {ocrData.identificationNumber}</p>
        <p>Name: {ocrData.name}</p>
        <p>Last Name: {ocrData.lastName}</p>
        <p>Date of Birth: {ocrData.dateOfBirth}</p>
        <p>Date of Issue: {ocrData.dateOfIssue}</p>
        <p>Date of Expiry: {ocrData.dateOfExpiry}</p>
        <button onClick={()=>changeUpdate(ocrData)}>UPDATE</button>
        {/* Display other OCR fields... */}

        {/* Input fields to set updated values */}
<div>
        <form onSubmit={()=> handleUpdate(updatedData.identificationNumber)}>
          <input
            type="text"
            placeholder="Name"
            value={updatedData.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={updatedData.lastName}
            onChange={(e) => handleChange(e, "lastName")}
          />
          <input
            type="text"
            placeholder="Date of Birth"
            value={updatedData.dateOfBirth}
            onChange={(e) => handleChange(e, "dateOfBirth")}
          />
          <input
            type="text"
            placeholder="Date of Issue"
            value={updatedData.dateOfIssue}
            onChange={(e) => handleChange(e, "dateOfIssue")}
          />
          <input
            type="text"
            placeholder="Date of Expiry"
            value={updatedData.dateOfExpiry}
            onChange={(e) => handleChange(e, "dateOfExpiry")}
          />
          <button >Update</button>
        </form>
        </div>
      </div>
}
    </div>
  );
};

export default UpdateOCR;

