import React, { useState } from 'react';
import axios from 'axios';
import './Details.css'; // Import the CSS file

const PaymentForm = () => {
    const [payment, setPayment] = useState({
        name: '',
        number: '',
        email: '',
        address: '',
        billValue: '',
        cardNumber: '',
        cardHolder: '',
        dateValue: '',
        cvc: '',
    });

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayment((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/api/payments/create', payment)
            .then((res) => {
                setResponse(res.data);
                alert('Payment successful');
            })
            .catch((error) => {
                console.error('Error creating payment', error);
                alert('Payment failed');
            });
    };

    return (
        <div className="form-container">
            <h2>Make Your Payment</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={payment.name}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="number"
                    placeholder="Phone Number"
                    value={payment.number}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={payment.email}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={payment.address}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="number"
                    name="billValue"
                    placeholder="Bill Amount"
                    value={payment.billValue}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={payment.cardNumber}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="cardHolder"
                    placeholder="Card Holder Name"
                    value={payment.cardHolder}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="dateValue"
                    placeholder="Expiration Date (MM/YY)"
                    value={payment.dateValue}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    value={payment.cvc}
                    onChange={handleChange}
                    className="input-field"
                />
                <button type="submit" className="submit-button">Submit Payment</button>
            </form>
            {response && (
                <div className="response-container">
                    <h3>Payment Receipt</h3>
                    <p>ID: {response.id}</p>
                    <p>Status: {response.paymentStatus}</p>
                    <p>Amount: {response.amount}</p>
                    <p>Timestamp: {response.timestamp}</p>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
