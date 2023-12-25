import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateOCR = () => {
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [ocrData, setOcrData] = useState({});
  const [updatedData, setUpdatedData] = useState({
    name: '',
    lastName: '',
    dateOfBirth: '',
    dateOfIssue: '',
    dateOfExpiry: '',
  });

    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/display-ocr/${identificationNumber}`);
        console.log(response);
        setOcrData(response.data.ocrData);
      } catch (error) {
        console.error('Error fetching OCR data:', error);
      }
    };


  const handleUpdate = async () => {
    try {
      // Use the updatedData state to send the updated values
      await axios.put(`/api/update-ocr/${identificationNumber}`, updatedData);
      // Optionally, you can fetch and update the state with the latest data
    } catch (error) {
      console.error('Error updating OCR data:', error);
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
        {/* Display other OCR fields... */}

        {/* Input fields to set updated values */}
        <input
          type="text"
          placeholder="New Name"
          value={updatedData.name}
          onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Last Name"
          value={updatedData.lastName}
          onChange={(e) => setUpdatedData({ ...updatedData, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Date of Birth"
          value={updatedData.dateOfBirth}
          onChange={(e) => setUpdatedData({ ...updatedData, dateOfBirth: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Date of Issue"
          value={updatedData.dateOfIssue}
          onChange={(e) => setUpdatedData({ ...updatedData, dateOfIssue: e.target.value })}
        />
        <input
          type="text"
          placeholder="New Date of Expiry"
          value={updatedData.dateOfExpiry}
          onChange={(e) => setUpdatedData({ ...updatedData, dateOfExpiry: e.target.value })}
        />
        {/* Add input fields for other OCR fields... */}

        {/* Button to update OCR data */}
        <button onClick={handleUpdate}>Update</button>
      </div>
}
    </div>
  );
};

export default UpdateOCR;

