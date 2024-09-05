import React, { useContext } from "react";
import { ERPContext } from "../../context/ERPContext";

const Inventory = () => {
    const { state } = useContext(ERPContext);

    return (
        <div>
            <h2>Inventory Management</h2>
            <ul>
                {state.inventory.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;
