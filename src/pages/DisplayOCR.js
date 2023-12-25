// IdCardDisplay.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayOCR = () => {
  const [idCards, setIdCards] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    identificationNumber: '',
    lastName: '',
    dateOfBirth: '',
  });

  // useEffect(() => {
  //   // Fetch ID cards from the server based on filters
  //   fetchIdCards();
  // }, [filters]);

  const fetchIdCards = async () => {
    try {
      const response = await axios.get('/api/display-ocr', { params: filters });
      console.log(response);
      setIdCards(response.data);
    } catch (error) {
      console.error('Error fetching ID cards:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>ID Card Display</h1>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={filters.name} onChange={handleFilterChange}  />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={filters.lastName} onChange={handleFilterChange} />
      </div>
      <div>
        <label>identificationNumber:</label>
        <input type="text" name="indentificationNumber" value={filters.identificationNumber} onChange={handleFilterChange}  />
        </div>
        <div>
        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth"  value={filters.dateOfBirth} onChange={handleFilterChange} />
        </div>


      {/* Add similar input fields for other filters */}
      <button onClick={() => fetchIdCards()}>Apply Filters</button>
      <div>
        {idCards.map((idCard) => {
          console.log("ID CARD DATA:" ,idCard)
          return(
          <div key={idCard._id}>
            {/* Display ID card details here */}
            <p>Name: {idCard.name}</p>
            <p>identificationNumber : {idCard.identificationNumber}</p>
            <p>Last Name: {idCard.lastName}</p>
            <p>Date of Birth: {idCard.dateOfBirth}</p>
            <p>Date of Issue: {idCard.dateOfIssue}</p>
            <p>Date of Expiry: {idCard.dateofExpiry}</p>
          </div>
          );
          })}
      </div>
    </div>
  );
};
export default DisplayOCR
