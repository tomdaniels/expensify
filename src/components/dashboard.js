import React from 'react';
import ExpenseList from './expense-list';
import ExpenseSummary from './expense-summary';
import ExpenseListFilters from './expense-list-filters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;