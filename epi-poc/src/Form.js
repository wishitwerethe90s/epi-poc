import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './Form.css'; 

const Form = () => {
    const [formData, setFormData] = useState({ clientCode: '', merchantCode: '', txnCurrency: '', txnAmount: '', merchantServiceCharges: '', merchantReferenceNumber: '', successFlag: '', failureFlag: '', date: '', ref1: '', ref2: '', ref3: '', ref4: '', ref5: '', ref6: '', ref7: '', ref8: '', ref9: '', ref10: '', ref11: '', date1: '', date2: '', dynamicUrl: '', requestType: 'GET', custId: '', redirectMerchantDate: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log(data);
                // Handle successful form submission here
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error here
            });
    };

    const handleReset = () => {
        setFormData({ clientCode: '', merchantCode: '', txnCurrency: '', txnAmount: '', merchantServiceCharges: '', merchantReferenceNumber: '', successFlag: '', failureFlag: '', date: '', ref1: '', ref2: '', ref3: '', ref4: '', ref5: '', ref6: '', ref7: '', ref8: '', ref9: '', ref10: '', ref11: '', date1: '', date2: '', dynamicUrl: '', requestType: 'GET', custId: '', redirectMerchantDate: '' });
    };

     return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Client Code (type in an S2K id)</label>
                    <input 
                        type="text" 
                        id="clientCode" 
                        name="clientCode" 
                        value={formData.clientCode} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Merchant Code (eg. SSKIIS)</label>
                    <input 
                        type="text" 
                        id="merchantCode" 
                        name="merchantCode" 
                        value={formData.merchantCode} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Transaction Currency</label>
                    <input
                        type="text" 
                        id="txnCurrency" 
                        name="txnCurrency" 
                        value={formData.txnCurrency} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Transaction Amount</label>
                    <input 
                        type="text"
                        id="txnAmount" 
                        name="txnAmount" 
                        value={formData.txnAmount} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Merchant Service Charges</label>
                    <input
                        type="text" 
                        id="merchantServiceCharges" 
                        name="merchantServiceCharges" 
                        value={formData.merchantServiceCharges} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Merchant's Reference Number</label>
                    <input 
                        type="text"
                        id="merchantReferenceNumber" 
                        name="merchantReferenceNumber" 
                        value={formData.merchantReferenceNumber} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Success Static Flag (Y)</label>
                    <input 
                        type="text"
                        id="successFlag" 
                        name="successFlag" 
                        value={formData.successFlag} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Failure Static Flag (Y)</label>
                    <input 
                        type="text"
                        id="failureFlag" 
                        name="failureFlag" 
                        value={formData.failureFlag} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Date (dd/mm/yyyy hh:mm:ss 24 hr format)</label>
                    <input 
                        type="text"
                        id="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <h2 className="optional-fields-header">Optional Fields</h2>
                <div className="form-field">
                    <label>Ref1 (max 50 chars)</label>
                    <input 
                        type="text"
                        id="ref1" 
                        name="ref1" 
                        value={formData.ref1} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref2 (max 40 chars)</label>
                    <input 
                        type="text"
                        id="ref2" 
                        name="ref2" 
                        value={formData.ref2} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref3 (max 30 chars)</label>
                    <input 
                        type="text"
                        id="ref3" 
                        name="ref3" 
                        value={formData.ref3} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref4 (max 20 chars)</label>
                    <input 
                        type="text"
                        id="ref4" 
                        name="ref4" 
                        value={formData.ref4} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref5 (max 20 chars)</label>
                    <input 
                        type="text"
                        id="ref5" 
                        name="ref5" 
                        value={formData.ref5} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref6 (max 20 chars)</label>
                    <input 
                        type="text"
                        id="ref6" 
                        name="ref6" 
                        value={formData.ref6} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref7 (max 20 chars)</label>
                    <input 
                        type="text"
                        id="ref7" 
                        name="ref7" 
                        value={formData.ref7} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref8 (max 15 chars)</label>
                    <input 
                        type="text"
                        id="ref8" 
                        name="ref8" 
                        value={formData.ref8} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref9 (max 15 chars)</label>
                    <input 
                        type="text"
                        id="ref9" 
                        name="ref9" 
                        value={formData.ref9} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref10 (max 12 chars)</label>
                    <input 
                        type="text"
                        id="ref10" 
                        name="ref10" 
                        value={formData.ref10} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Ref11 (max 10 chars)</label>
                    <input 
                        type="text"
                        id="ref11" 
                        name="ref11" 
                        value={formData.ref11} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Date1 (max 8 chars)</label>
                    <input 
                        type="text"
                        id="date1" 
                        name="date1" 
                        value={formData.date1} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Date2 (max 8 chars)</label>
                    <input 
                        type="text"
                        id="date2" 
                        name="date2" 
                        value={formData.date2} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Dynamic URL</label>
                    <input 
                        type="text"
                        id="dynamicUrl" 
                        name="dynamicUrl" 
                        value={formData.dynamicUrl} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Request Type</label>
                    <select 
                        id="requestType" 
                        name="requestType" 
                        value={formData.requestType} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>Customer ID</label>
                    <input 
                        type="text"
                        id="custId" 
                        name="custId" 
                        value={formData.custId} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-field">
                    <label>Redirect Merchant Date</label>
                    <input 
                        type="text"
                        id="redirectMerchantDate" 
                        name="redirectMerchantDate" 
                        value={formData.redirectMerchantDate} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" display="block">Submit</button>
                <button type="button" onClick={handleReset} display="block">Reset</button>
            </form>
            <div className="form-note">
                <p>
                    Note:
                </p>
                <p>
                    The html page contains the form to be filled. Click the submit button and it goes to the Login page of HDFC Bank. Finish the transaction at HDFC and it should return to the asp page (return URL) which will display all the info returned.
                </p>
            </div>
        </div>

    );
};

export default Form;
