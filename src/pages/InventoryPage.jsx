import React, { useContext } from 'react';
import InventoryContext from '../contexts/InventoryContext';
import InventoryList from '../components/InventoryManagement/InventoryList';
import InventoryForm from '../components/InventoryManagement/InventoryForm';

const InventoryPage = () => {
    const { inventory, addItem, updateItem, deleteItem } = useContext(InventoryContext);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Inventory Management</h1>
            <InventoryForm addItem={addItem} updateItem={updateItem} />
            <InventoryList inventory={inventory} deleteItem={deleteItem} />
        </div>
    );
};

export default InventoryPage;
