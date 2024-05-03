import React from "react";
import "./stylesheets/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import TokenTransfer from "./screens/TokenTransfer";
import Balance from "./screens/Balance";
import ConfirmationApprove from "./screens/ConfirmationApprove";

function App() {
  return (
    <div style={{ marginTop: '100px' }}>
      
      <BrowserRouter>
     
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/tokenTransfer" element={<TokenTransfer />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/confirmationApprove/:title/:text" element={<ConfirmationApprove />}/>
         
        </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}
export default App;