import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../styles/DeleteOCR.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const DeleteOCR = () => {
  const [identificationNumberToDelete, setIdentificationNumberToDelete] = useState('');
  const inputPlaceholder = 'Enter Identification Number to delete';

  const handleDelete = async () => {
    try {
      // Make a DELETE request to the backend API endpoint
      const response = await axios.delete(`/api/delete-ocr/${identificationNumberToDelete}`);
      
      // Check the response and handle accordingly
      if (response.data.success) {
        toast.success('OCR data deleted successfully');
        console.log('OCR data deleted successfully');
      } else {
        toast.error(response?.message || 'OCR data not found');
        console.log('OCR data not found');
      }
    } catch (error) {
        toast.error('OCR data not found');
      console.log('Error deleting OCR data:', error);
    }
  };

  const handleInputChange = (e) => {
    setIdentificationNumberToDelete(e.target.value);
  };

  return (
    <div>
      <h1>Delete OCR Data</h1>
      <label htmlFor="deleteInput">Enter Identification Number to delete:</label>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          id="deleteInput"
          value={identificationNumberToDelete}
          onChange={handleInputChange}
        />
        <span className="input-text">{identificationNumberToDelete ? '' : inputPlaceholder}</span>
      </div>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
      <Link to="/">Homepage</Link>
    </div>
  );
};

export default DeleteOCR;