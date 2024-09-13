import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderComponent = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the backend
        axios.get('/api/orders')
            .then(response => {
                console.log(response.data);  // Log data to check if it's coming correctly
                setOrders(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Orders</h1>
            <div>
                {orders.length > 0 ? (
                    orders.map(order => (
                        <div key={order.id}>
                            <h2>{order.name}</h2>
                            <p>Price: {order.price}</p>
                            <p>Availability: {order.availability}</p>
                            <p>Quantity: {order.quantity}</p>
                        </div>
                    ))
                ) : (
                    <p>No orders found</p>
                )}
            </div>
        </div>
    );
}

export default OrderComponent;
