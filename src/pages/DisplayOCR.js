import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayOCR = () => {
  const [identificationNumberToDisplay, setIdentificationNumberToDisplay] = useState('');
  const [idCards, setIdCards] = useState(null);
  
  const fetchIdCards = async () => {
    try {
      const response = await axios.get(`/api/display-ocr/${identificationNumberToDisplay}`);
      console.log(response.data.ocrData);
      setIdCards(response.data.ocrData);
    } catch (error) {
      console.error('Error fetching ID cards:', error);
    }
  };

  
  return (
  <>
    <div>

    <h1>ID Card Display</h1>
      <label>Enter Identification Number to delete:</label>
      <input
        type="text"
        value={identificationNumberToDisplay}
        onChange={(e) => setIdentificationNumberToDisplay(e.target.value)}
      />
      <button onClick={fetchIdCards}>Display</button>

      {idCards && (
          <div>
            <h2>ID Card Information</h2>
            <p>
              <strong>Name:</strong> {idCards.name}
            </p>
            <p>
              <strong>Last Name:</strong> {idCards.lastName}
            </p>
            <p>
              <strong>Date of Birth:</strong> {idCards.dateOfBirth}
            </p>
            <p>
              <strong>Date of Issue:</strong> {idCards.dateOfIssue}
            </p>
            <p>
              <strong>Date of Expiry:</strong> {idCards.dateOfExpiry}
            </p>
            <p>
              <strong>Identification Number:</strong> {idCards.identificationNumber}
            </p>
          </div>
        )}
    </div>

    </>
  );
};
export default DisplayOCR