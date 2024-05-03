

import React, { useState, useEffect } from 'react';
import { API_URL, VALIDATOR_ADDRESS, FRED_ADDRESS, ALICE_ADDRESS } from '../env.js';

const Balance = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [account, setAccount] = useState('');
    const [data, setData] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        if (!selectedOption) {
            return;
        }

        console.log('Calling api:', `${API_URL}/balance?address=${selectedOption}`);

        const response = await fetch(`${API_URL}/balance?address=${selectedOption}`);
        const data = await response.json();
        setData(data);
        if(selectedOption == VALIDATOR_ADDRESS) {
            setAccount("Validator")
        }
        if(selectedOption == ALICE_ADDRESS) {
            setAccount("Alice")
        }
        if(selectedOption == FRED_ADDRESS) {
            setAccount("Fred")
        }
        console.log("balance is ==========="+ data.balance)
    };

    


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        // ... (use if needed for any side effects)
    }, []);

    return (
        <div>
            <h3 style={{ paddingLeft: '30px' }}>View Balances</h3>

            <form onSubmit={handleFormSubmit}>
                <div style={{ display: 'flex' }}>
                    <label htmlFor="selectAccount" style={{
                        minWidth: 'fit-content',

                        marginLeft: '40px',
                        marginTop: '50px',
                    }}>
                        Select Account
                    </label>
                    <select
                        id="selectInvestor"
                        name="selectInvestor"
                        className="dropdown"
                        required
                        onChange={handleOptionChange}
                        value={selectedOption}
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
            {data && (
               <table style={{ borderCollapse: 'collapse', marginTop: '20px' , marginLeft: '50px'}}>  <thead>
               <tr>
                 <th style={{ padding: '10px', border: '1px solid black', marginRight: '15px' }}>Account</th>  <th style={{ padding: '10px', border: '1px solid black', marginRight: '15px' }}>Value</th>  <th style={{ padding: '10px', border: '1px solid black' }}>Denomination</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td style={{ padding: '10px', border: '1px solid black' }}>{account}</td>
                 <td style={{ padding: '10px', border: '1px solid black' }}>{data.balance}</td>
                 <td style={{ padding: '10px', border: '1px solid black' }}>ucosm</td>
               </tr>
             </tbody>
           </table>
           
           
            )}
        </div>
    );
};

export default Balance;
