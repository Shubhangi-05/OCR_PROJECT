import React, { useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
const UpdateOCR = () => {
   const navigate=useNavigate();

  return (
    <>
    <div><button  onClick={() => navigate(`/create`)}>Upload New Identity Card</button>
    </div>
    <div><button onClick={() => navigate(`/update`)}>Update Identity Card</button>
    </div>
    <div><button onClick={() => navigate(`/display`)}>Display Identity Card</button>
    </div>
    <div> <button onClick={() => navigate(`/delete`)}>Delete Identity Card</button>
    </div>
    </>
  )
};
export default UpdateOCR