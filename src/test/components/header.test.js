import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header';

test('should renderer header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe('Expensify');
});

