import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/add-expense';

test('should render AddExpensePage correctly', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(
        <AddExpensePage
            onSubmit={onSubmit}
            history={history}
    />
    );
    expect(wrapper).toMatchSnapshot();
});