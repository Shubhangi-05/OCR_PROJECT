import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// const UpdateOCR = () => {
//   const [identificationNumber, setIdentificationNumber] = useState('');
//   const [ocrData, setOcrData] = useState({});

//   const [updatedData, setUpdatedData] = useState({
//     _id:'',
//     identificationNumber:'',
//     name: '',
//     lastName: '',
//     dateOfBirth: '',
//     dateOfIssue: '',
//     dateOfExpiry: '',
//   });

//     const changeUpdate=async(currdata)=>{
//             updatedData._id=currdata._id
//     updatedData.identificationNumber=currdata.identificationNumber
//     updatedData.name= currdata.name
//     updatedData.lastName=currdata.lastName
//     updatedData.dateOfBirth = currdata.dateOfBirth
//     updatedData.dateOfIssue= currdata.dateOfIssue
//     updatedData.dateOfExpiry= currdata.dateOfExpiry
//     }
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/api/display-ocr/${identificationNumber}`);
//         console.log(response);
//         setOcrData(response.data.ocrData);
//       } catch (error) {
//         console.error('Error fetching OCR data:', error);
//       }
//     };

//     const handleChange= async(e,key)=>{
//         setUpdatedData({...updatedData,[key]:e.target.value})
//     };
//     const handleUpdate = async (id) => {
//         try {
//           await axios.put(`/api/update-ocr/${id}`, updatedData, {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           });
//           // You may want to re-fetch the updated data or update the local state as needed
//         } catch (error) {
//           console.error('Error updating entry:', error);
//         }
//       };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Identification Number"
//         value={identificationNumber}
//         onChange={(e) => setIdentificationNumber(e.target.value)}
//       />
//       <button onClick={fetchData}>View Details</button>
//       {ocrData &&
//       <div>
//         {/* Display OCR data fields */}
//         <p>identificationNumber: {ocrData.identificationNumber}</p>
//         <p>Name: {ocrData.name}</p>
//         <p>Last Name: {ocrData.lastName}</p>
//         <p>Date of Birth: {ocrData.dateOfBirth}</p>
//         <p>Date of Issue: {ocrData.dateOfIssue}</p>
//         <p>Date of Expiry: {ocrData.dateOfExpiry}</p>
//         <button onClick={()=>changeUpdate(ocrData)}>UPDATE</button>
//         {/* Display other OCR fields... */}

//         {/* Input fields to set updated values */}
// <div>
//         <form onSubmit={()=> handleUpdate(updatedData.identificationNumber)}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={updatedData.name}
//             onChange={(e) => handleChange(e, "name")}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={updatedData.lastName}
//             onChange={(e) => handleChange(e, "lastName")}
//           />
//           <input
//             type="text"
//             placeholder="Date of Birth"
//             value={updatedData.dateOfBirth}
//             onChange={(e) => handleChange(e, "dateOfBirth")}
//           />
//           <button >Update</button>
//         </form>
//         </div>
//       </div>
// }
//     </div>
//   );
// };

const UpdateOCR=()=>{
  const [id,setid]=useState();
  const [identificationNumber,setIdentificationNumber]=useState();
  const [name,setname]=useState();
  const [lastName,setlastName]=useState();
  const [dateOfBirth,setdateOfBirth]=useState();
  const [dateOfIssue,setdateOfIssue]=useState();
  const [dateOfExpiry,setdateOfExpiry]=useState();
  const [show,setshow]=useState("off");
  const [updateWarning,setUpdateWarning]=useState("off");
  const [updated,setupdated]=useState("off");
  const handleUpdate= async (e)=>{
    setshow("on");
    try {
              const response = await axios.get(`/api/display-ocr/${identificationNumber}`);
              console.log(response);
              const data=response.data.ocrData;
              setname(data.name);
              setlastName(data.lastName);
              setdateOfBirth(data.dateOfBirth);
              setdateOfIssue(data.dateOfIssue);
              setdateOfExpiry(data.dateOfExpiry)
              setid(data._id);
        } catch (error) {
              console.error('Error fetching OCR data:', error);
    }
  }
  const handleSubmit= async (e)=>{
    const data = {
      identificationNumber: identificationNumber,
      name: name,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      dateOfIssue: dateOfIssue,
      dateOfExpiry: dateOfExpiry,
    };

    try {
                await axios.put(`/api/update-ocr/${id}`,data);
                // You may want to re-fetch the updated data or update the local state as needed
                setupdated("on");
              } catch (error) {
                console.error('Error updating entry:', error);
              }
  }

  return(
    <>
      <div><span>Enter The Identification Number for Updating</span>
      <div>
        <input type="text" value={identificationNumber} onChange={(e)=>setIdentificationNumber(e.target.value)}></input>
        <button onClick={handleUpdate}>Update</button>
      </div>
      {show === "off" ? null : (
        <div>
          <input type="text" value={identificationNumber} onChange={(e)=>{setUpdateWarning("on")}}></input>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)}></input>
          <input type="text" value={lastName} onChange={(e) => setlastName(e.target.value)}></input>
          <input type="text" value={dateOfBirth} onChange={(e) => setdateOfBirth(e.target.value)}></input>
          <input type="text" value={dateOfIssue} onChange={(e)=>{setUpdateWarning("on")}}></input>
          <input type="text" value={dateOfExpiry} onChange={(e)=>{setUpdateWarning("on")}}></input>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      </div>
      {updateWarning==="off"?null:(
        <div className="popup">
          <div  style={{backgroundColor:"yellow",color:"red",fontWeight:'bold',textAlign:"center"}}><span>Warning: Identification,dateOfExpiry,dateOfIssue can't be updated.</span></div>
          <button onClick={() => setUpdateWarning("off")}>Close</button>
        </div>
      )}
      {updated==="off"?null:(
        <div className="popup">
          <div  style={{backgroundColor:"green",color:"black",fontWeight:'bold',textAlign:"center"}}><span>Identity Card is Successfully Updated!!!</span></div>
          <button onClick={() => setupdated("off")}>Close</button>
        </div>
      )}
      <Link to="/">Homepage</Link>
    </>
  );

};

export default UpdateOCR;

