import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/edit-expense';
import expenses from '../fixtures/expenses';

let startEditExpenses, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpenses = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            startEditExpenses={startEditExpenses}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
        />
    );
});

test('should render the edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpenses).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

// test('should handle startRemoveExpense', () => {
//     wrapper.find('button').at(0).simulate('click');
//     expect(wrapper.find('Modal'));
//     expect(startRemoveExpense).toHaveBeenLastCalledWith({
//         id: expenses[2].id
//     });
// });