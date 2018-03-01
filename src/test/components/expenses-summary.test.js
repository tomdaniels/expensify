import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/expense-summary';

test('should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} total={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} total={456789} />);
    expect(wrapper).toMatchSnapshot();
});