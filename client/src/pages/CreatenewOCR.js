import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import "../styles/CreatenewOCR.css";
import {Link} from "react-router-dom";
const CreatenewOCR = () => {
  const navigate = useNavigate();
  const [idcard, setidcard] = useState('');
  const [outData, setoutData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const handlecreate = async (e) => {
    e.preventDefault();
    try {
      const IdcardData = new FormData();
      IdcardData.append('idcard', idcard);
      const { data } = await axios.post('/api/create-ocr', IdcardData);
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success('OCR Created Successfully');
        setoutData(data);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    // Set the image file to state
    setidcard(selectedImage);

    // Read and display the image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };
  return (
    <div className="createnewocr-container">
      <div className="file-input-container">
        <label className="file-input-label">
          {idcard ? idcard.name : 'Upload Photo'}
          <input
            type="file"
            name="idcard"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </label>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Image Preview"
            className="image-preview"
          />
        )}
      </div>

      <div className="submit-button-container">
        <button onClick={handlecreate}>Submit</button>
      </div>

      {outData && (
        <div className="output-data-container">
          <h1 className="output-title">Data Extracted</h1>
          <h1>Identification Number: {outData.identificationNumber}</h1>
          <h1>Name: {outData.name}</h1>
          <h1>LastName: {outData.lastName}</h1>
          <h1>DOB: {outData.dateOfBirth}</h1>
          <h1>Date of Issue: {outData.dateOfIssue}</h1>
          <h1>Date of Expiry: {outData.dateOfExpiry}</h1>
        </div>

      )}
      <Link to="/">Homepage</Link>
    </div>
     
  );
};

export default CreatenewOCR;
