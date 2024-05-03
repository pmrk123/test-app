
import { useNavigate} from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { API_URL, VALIDATOR_ADDRESS, FRED_ADDRESS, ALICE_ADDRESS } from '../env.js';

const TokenTransfer = () => {
    const [selectedSource, setSelectedSource] = useState('');
    const [selectedTarget, setSelectedTarget] = useState('');
    const [amount, setAmount] = useState('');
    const [account, setAccount] = useState('');

   
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
  

    useEffect(() => {
        if (status === '0') {
          // Navigate after the title and text are updated
         
        }
        else if(status === '1'){
          navigate(`/confirmationApprove/${title}/${text}`);
        }
      }, [title, text, status, navigate]);
   

    const handleFormSubmit = async (event) => {
        event.preventDefault(); 

        if (!selectedSource || !selectedTarget)  {
            return;
        }

        const data = {
            recipient : selectedTarget,
            amount:amount
          };
      
          const params = new URLSearchParams(data).toString();
          const url = `${API_URL}/transfer?${params}`;  
          console.log("sender is "+ selectedSource)

        console.log('Calling api:', `${API_URL}/transfer?recipient=${selectedTarget}&amount=${amount}`);

        if(selectedTarget == ALICE_ADDRESS) {
            setAccount("Alice")
        }
       
        if(selectedTarget == FRED_ADDRESS) {
            setAccount("Fred")
        }

        // await fetch(url, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' }
        //   });
        //   console.log("Done!!!!")
       

          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('this is data', data);
              if (data.success) {
                setStatus('1');
                setTitle('Tokens Sent!');
                setText(`${amount} has been credited to recipient's account`);
              } else {
                setStatus('0');
                setTitle('Transfer Failed');
                setText('*****');
              }
            })
            .catch((error) => {
              setStatus('0');
              console.error('this is error', error);
              setTitle('Subscription Approval Failed');
              setText('Failed to approve the subscription');
            });
        };
      
    

    const handleSourceChange = (event) => {
        const newSource = event.target.value;
        setSelectedSource(newSource);
      
        // Update target dropdown options
        const targetSelect = document.querySelector('#selectTargetAccount');
        const options = targetSelect.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === newSource) {
            options[i].disabled = true;
          } else {
            options[i].disabled = false;
          }
        }
    };

    const handleTargetChange = (event) => {
        setSelectedTarget(event.target.value);

  // Reset target dropdown options (optional)
  const targetSelect = document.querySelector('#selectTargetAccount');
  const options = targetSelect.options;
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = false;
  }
    };

    useEffect(() => {
        // ... (use if needed for any side effects)
    }, []);

    return (
        <div>
            <h3 style={{ paddingLeft: '30px' }}>Transfer Tokens</h3>

            <form onSubmit={handleFormSubmit}>
                <div style={{ display: 'flex' }}>
                    <label htmlFor="sourceAccount" style={{
                        minWidth: 'fit-content',

                        marginLeft: '40px',
                        marginTop: '50px',
                    }}>
                        Source Account
                    </label>
                    <select
                       
                        name="selectSourceAccount"
                        className="dropdown"
                        required
                        onChange={handleSourceChange}
                        value={selectedSource}
                        style={{
                            minWidth: 'fit-content',
                            marginLeft: '10px',
                            marginTop: '50px',
                        }}
                    >
                        <option value="" disabled selected>
                            ---select---
                        </option>
                        <option value={VALIDATOR_ADDRESS}>Validator</option>
                        <option value={ALICE_ADDRESS}>Alice</option>
                        <option value={FRED_ADDRESS}>Fred</option>
                    </select>
                    <label htmlFor="targetAccount" style={{
                        minWidth: 'fit-content',

                        marginLeft: '40px',
                        marginTop: '50px',
                    }}>
                        Target Account
                    </label>
                    <select
                       id='selectTargetAccount'
                        name="selectTargetAccount"
                        className="dropdown"
                        required
                        onChange={handleTargetChange}
                        value={selectedTarget}
                        style={{
                            minWidth: 'fit-content',
                            marginLeft: '10px',
                            marginTop: '50px',
                        }}
                    >
                        <option value="" disabled selected>
                            ---select---
                        </option>
                       
                        <option value={ALICE_ADDRESS}>Alice</option>
                        <option value={FRED_ADDRESS}>Fred</option>
                    </select>
                    <label htmlFor="targetAccount" style={{
                        minWidth: 'fit-content',

                        marginLeft: '40px',
                        marginTop: '50px',
                    }}>Enter Value</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          style={{
            minWidth: 'fit-content',

            marginLeft: '10px',
            marginTop: '30px',
            marginRight: '80%',

           
        }}
          required
          
        />
       
                </div>
                <div>
                <button
                        type="submit"
                        class="button"
                        style={{
                            minWidth: 'fit-content',

                            marginLeft: '50px',
                            marginTop: '30px',
                            marginRight: '80%',

                            backgroundColor: '#464647',
                            color: 'white',
                        }}
                    >
                        <p style={{ fontFamily: 'Inter', fontSize: '20px', paddingTop: '10px' }}>
                            Submit
                        </p>
                    </button>
                </div>
            </form>
            
        </div>
    );
};

export default TokenTransfer;
