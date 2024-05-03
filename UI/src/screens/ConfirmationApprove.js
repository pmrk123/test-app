import React, { useState } from 'react';
import '../stylesheets/ConfirmationApprove.css';
import { useNavigate,useParams } from "react-router-dom"
import { BsXLg, BsCheckCircleFill,BsFillHouseDoorFill} from "react-icons/bs";

function ConfirmationApprove() {
  const { title, text } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(true);
  const navigate = useNavigate();
  const closeModal = () => {
    setShowConfirmation(false);
  };

  return (
    <div >
      <h1 className="ConfirmationApprove" >{title}</h1>
      
      {/* <button onClick={handleConfirmation}>Show Confirmation</button> */}

      {showConfirmation && (
        <div className="container">
          <div className="containerText">
            <p><BsCheckCircleFill className='icon-tick' />Success</p>
            <p>{text}</p>
           <button onClick={closeModal} className="icon-button"><BsXLg className='icon'/></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfirmationApprove;