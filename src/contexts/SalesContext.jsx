import React, { createContext, useState } from 'react';

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const addOrder = (order) => {
        setOrders((prevOrders) => [...prevOrders, order]);
    };

    const updateOrder = (updatedOrder) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === updatedOrder.id ? updatedOrder : order
            )
        );
    };

    const deleteOrder = (orderId) => {
        setOrders((prevOrders) =>
            prevOrders.filter((order) => order.id !== orderId)
        );
    };

    return (
        <SalesContext.Provider
            value={{ orders, addOrder, updateOrder, deleteOrder }}
        >
            {children}
        </SalesContext.Provider>
    );
};

export default SalesContext;
