import React, { createContext, useState } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState([]);

    const addItem = (item) => {
        setInventory((prevInventory) => [...prevInventory, item]);
    };

    const updateItem = (updatedItem) => {
        setInventory((prevInventory) =>
            prevInventory.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            )
        );
    };

    const deleteItem = (itemId) => {
        setInventory((prevInventory) =>
            prevInventory.filter((item) => item.id !== itemId)
        );
    };

    return (
        <InventoryContext.Provider
            value={{ inventory, addItem, updateItem, deleteItem }}
        >
            {children}
        </InventoryContext.Provider>
    );
};

export default InventoryContext;
