import React, { createContext, useState } from 'react';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    };

    const updateTransaction = (updatedTransaction) => {
        setTransactions((prevTransactions) =>
            prevTransactions.map((transaction) =>
                transaction.id === updatedTransaction.id ? updatedTransaction : transaction
            )
        );
    };

    const deleteTransaction = (transactionId) => {
        setTransactions((prevTransactions) =>
            prevTransactions.filter((transaction) => transaction.id !== transactionId)
        );
    };

    return (
        <FinanceContext.Provider
            value={{ transactions, addTransaction, updateTransaction, deleteTransaction }}
        >
            {children}
        </FinanceContext.Provider>
    );
};

export default FinanceContext;
