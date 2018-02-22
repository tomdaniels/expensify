import React from 'react';
import ReactShallowRenderer from 'react-test-renderer';
import Header from '../../components/header';

test('should renderer header', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

