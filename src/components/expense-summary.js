import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';
import hiddenExpensesCount from '../selectors/hidden-expenses'

export const ExpenseSummary = ({ expenseCount, total, hidden }) => {
    const expenseWord = expenseCount.length === 1 ? 'expense' : 'expenses';
    const hiddenWord = hidden === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(total / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page_header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <h4 className="page_header__title subtitle"><span>{hidden}</span> hidden {hiddenWord}</h4>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expenses</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        total: selectExpenseTotal(visibleExpenses),
        hidden: hiddenExpensesCount(state.expenses, visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);