import React, { useEffect, useState } from 'react'
import axios from 'axios';
const DisplayAll = () => {
    const [data, setData] = useState(null);
    const [formData, setFormData] = useState({
      _id:"",
      identificationNumber: "",
      name: "",
      lastName: "",
      dateOfBirth: "",
      dateOfIssue: "",
      dateOfExpiry: "",
    });
    useEffect(()=>{
        const fetchIds = async () => {
            try {
              const response = await axios.get('/api/getall');
              const data = await response.json();
              setData(data);
            } catch (error) {
              console.error("There was a problem fetching the data:", error);
            }
          };
      
          fetchIds();
        },[]);
  return (
    <div style={{
        marginTop: "30px",
        display: 'flex',
        flexDirection: "row",
        gap: '10px',
        flexWrap: 'wrap'
      }}>
    {data?.map((item, index) => {
        return (
          <div key={index} style={{
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: "#848484",
            borderRadius: '10px',
            width: 'fit-content',
            padding: '20px'
          }}>
            <h1>{item.identificationNumber}</h1>
            <h1>{item.name}</h1>
            <h1>{item.lastName}</h1>
            <h1>{item.dateOfBirth}</h1>
            <h1>{item.dateOfIssue}</h1>
            <h1>{item.dateOfExpiry}</h1>

            <div style={{
              display: 'flex',
              gap: "20px"
            }}>
            </div>
          </div>
        );
      })}
      </div>
  )
}

export default DisplayAll