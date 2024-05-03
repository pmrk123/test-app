import React from "react"
import {  useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
  <h3 style={{ paddingLeft: '30px' }}>Wasmd Landing Page</h3>
  <div style={{ display: 'flex' }}> 
  <button
    onClick={() => navigate('/balance')}
    style={{
      minWidth: 'fit-content',
      padding: '10px 20px',
      marginLeft: '50px',
      marginTop: '50px',
      marginRight: '80%',
      flex: 1,
      backgroundColor: '#464647', 
      color: 'white', 
    }}
  >
    <p style={{ fontFamily: 'Inter', fontSize: '20px' }}>View Balances</p>
  </button>
</div>

  <button onClick={() => navigate('/tokenTransfer')}
   style={{
    minWidth: 'fit-content',
    padding: '10px 20px',
    marginLeft: '50px',
    marginTop: '30px',
    marginRight: '80%',
    flex: 1,
    backgroundColor: '#464647', 
      color: 'white', 
  }}
  >
    <p style={{ fontFamily: 'Inter', fontSize: '20px' }}>Make Transfer</p>
  </button>
</div>

  )
}