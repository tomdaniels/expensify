import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, total }) => {
    const expenseWord = expenseCount.length === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(total / 100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
};

const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        total: selectExpenseTotal(visibleExpenses),
    }
};

export default connect(mapStateToProps)(ExpenseSummary);