import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/expense-form';
import expenses from '../fixtures/expenses';

test('should render the expense from correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm  correctly with expense data',() => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submit', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errorState').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});