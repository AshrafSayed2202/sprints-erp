// src/pages/FinancePage.js

import React, { useContext } from 'react';
import FinanceContext from '../contexts/FinanceContext';
import FinancialTransactions from '../components/FinanceManagement/FinancialTransactions';
import BudgetForm from '../components/FinanceManagement/BudgetForm';

const FinancePage = () => {
    const { transactions, addTransaction, updateTransaction, deleteTransaction } = useContext(FinanceContext);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Finance Management</h1>
            <BudgetForm addTransaction={addTransaction} />
            <FinancialTransactions transactions={transactions} deleteTransaction={deleteTransaction} />
        </div>
    );
};

export default FinancePage;
