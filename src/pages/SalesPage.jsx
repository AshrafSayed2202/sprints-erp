import React, { useContext } from 'react';
import SalesContext from '../contexts/SalesContext';
import OrderList from '../components/SalesManagement/OrderList';
import OrderForm from '../components/SalesManagement/OrderForm';

const SalesPage = () => {
    const { orders, addOrder, updateOrder, deleteOrder } = useContext(SalesContext);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Sales & Order Management</h1>
            <OrderForm addOrder={addOrder} />
            <OrderList orders={orders} updateOrder={updateOrder} deleteOrder={deleteOrder} />
        </div>
    );
};

export default SalesPage;
