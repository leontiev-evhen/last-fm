import React from 'react';
import { mount } from 'enzyme';
import { Footer } from './Footer';

describe('Footer component', () => {
	it('render correctly Footer component', () => {
		const component = mount(<Footer />);
		expect(component).toMatchSnapshot();
	});
});
