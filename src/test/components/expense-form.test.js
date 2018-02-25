import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/expense-form';

test('should render the expense from correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

