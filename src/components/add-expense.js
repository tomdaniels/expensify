import React from 'react';
import ExpenseForm from './expense-form';

const AddExpensePage = () => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                console.log(expense);
            }}
        />
    </div>
);

export default AddExpensePage;