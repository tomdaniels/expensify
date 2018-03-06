import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/login';

test('should render the login page correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});