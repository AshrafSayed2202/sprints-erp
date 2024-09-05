import React, { createContext, useReducer } from "react";

const initialState = {
    inventory: [],
    sales: [],
    financialRecords: [],
};

export const ERPContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_INVENTORY":
            return { ...state, inventory: [...state.inventory, action.payload] };
        case "UPDATE_SALES":
            return { ...state, sales: action.payload };
        default:
            return state;
    }
};

export const ERPProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ERPContext.Provider value={{ state, dispatch }}>
            {children}
        </ERPContext.Provider>
    );
};
