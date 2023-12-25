import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/DisplayOCR.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const DisplayOCR = () => {
  const [identificationNumberToDisplay, setIdentificationNumberToDisplay] = useState('');
  const [idCards, setIdCards] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [invalidIdToast, setInvalidIdToast] = useState(false);

  const fetchIdCards = async () => {
    try {
      const response = await axios.get(`/api/display-ocr/${identificationNumberToDisplay}`);
      console.log(response.data.ocrData);
      if (response.data.ocrData) {
        setIdCards(response.data.ocrData);
        setShowToast(true); // Show toast on successful data fetch
        setInvalidIdToast(false); // Reset invalid ID toast
      } else {
        // If ID doesn't exist
        setIdCards(null); // Clear previous data from UI
        setInvalidIdToast(true); // Set invalid ID toast
        setShowToast(false); // Hide success toast
      }
    } catch (error) {
        setInvalidIdToast(true);
      console.error('Error fetching ID cards:', error);
    }
  };

  useEffect(() => {
    if (showToast || invalidIdToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setInvalidIdToast(false);
      }, 3000); // Hide toast after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showToast, invalidIdToast]);

  return (
    <>
      <div>
        <h1>ID Card Display</h1>
        <label>Enter Identification Number to display:</label>
        <input
          type="text"
          value={identificationNumberToDisplay}
          onChange={(e) => setIdentificationNumberToDisplay(e.target.value)}
        />
        <button className="display-button" onClick={fetchIdCards}>
          Display
        </button>

        {idCards && (
          <table id="idCardInfo">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{idCards.name}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{idCards.lastName}</td>
              </tr>
              <tr>
                <th>Date of Birth</th>
                <td>{idCards.dateOfBirth}</td>
              </tr>
              <tr>
                <th>Date of Issue</th>
                <td>{idCards.dateOfIssue}</td>
              </tr>
              <tr>
                <th>Date of Expiry</th>
                <td>{idCards.dateOfExpiry}</td>
              </tr>
              <tr>
                <th>Identification Number</th>
                <td>{idCards.identificationNumber}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <Link to="/">Homepage</Link>
      {showToast && <div className="toast">Data fetched successfully!</div>}
      {invalidIdToast && <div className="toast">Invalid ID!</div>}
    </>
  );
};

export default DisplayOCR;