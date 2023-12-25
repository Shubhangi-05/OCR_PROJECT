import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/DisplayOCR.css';

const DisplayOCR = () => {
  const [identificationNumberToDisplay, setIdentificationNumberToDisplay] = useState('');
  const [idCards, setIdCards] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [noData, setNoData] = useState(false);

  const fetchIdCards = async () => {
    try {
      const response = await axios.get(`/api/display-ocr/${identificationNumberToDisplay}`);
      console.log(response.data.ocrData);
      if (response.data.ocrData) {
        setIdCards(response.data.ocrData);
        setShowToast(true); // Show toast for successful data fetch
        setNoData(false); // Reset noData flag
      } else {
        setNoData(true); // Set flag for no data
        setShowToast(true); // Show toast for no data
      }
    } catch (error) {
      console.error('Error fetching ID cards:', error);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Hide toast after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showToast]);

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

        {noData && <p className="no-data-text">No data</p>}

        {idCards && !noData && (
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

      {showToast && idCards && <div className="toast">Data fetched successfully!</div>}
      {showToast && noData && <div className="toast">ID number does not exist!</div>}
    </>
  );
};

export default DisplayOCR;