import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
const DeleteOCR = () => {
  const [identificationNumberToDelete, setIdentificationNumberToDelete] = useState('');

  const handleDelete = async () => {
    try {
      // Make a DELETE request to the backend API endpoint
      const response = await axios.delete(`/api/delete-ocr/${identificationNumberToDelete}`);
      
      // Check the response and handle accordingly
      if (response.data.success) {
        toast.success('OCR data deleted successfully');
        console.log('OCR data deleted successfully');
      } else {
        toast.error(response?.message);
        console.log('OCR data not found');
      }
    } catch (error) {
      console.log('Error deleting OCR data:', error);
    }
  };

  return (
    <div>
      <h1>Delete OCR Data</h1>
      <label>Enter Identification Number to delete:</label>
      <input
        type="text"
        value={identificationNumberToDelete}
        onChange={(e) => setIdentificationNumberToDelete(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteOCR;
