import React from 'react';
import { useNavigate } from 'react-router-dom';
import  "../styles/HomePage.css"

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">OCR Data Project</h1>
      <h1 className="homepage-subtitle">QOALA</h1>

      <div className="button-container">
        <button onClick={() => navigate(`/create`)}>Upload New Identity Card</button>
      </div>

      <div className="button-container">
        <button onClick={() => navigate(`/update`)}>Update Identity Card</button>
      </div>

      <div className="button-container">
        <button onClick={() => navigate(`/display`)}>Display Identity Card</button>
      </div>

      <div className="button-container">
        <button onClick={() => navigate(`/delete`)}>Delete Identity Card</button>
      </div>

      <div className="button-container">
        <button onClick={() => navigate('/displayAll')}>Display All OCR and Update if Any</button>
      </div>
    </div>
  );
};

export default Homepage;



// we have used cloudinary for pictures
//Cloudinary is a cloud-based media management platform that provides a comprehensive solution for storing, optimizing, managing, and delivering images, videos, and other media assets on the internet. It offers a range of features and services designed to simplify the process of handling media files for websites and applications.