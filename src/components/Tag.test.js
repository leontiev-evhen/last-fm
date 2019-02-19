import React from 'react';
import { mount } from 'enzyme';
import { Tag } from './Tag';

describe('Tag component', () => {
	const props = {
		name: 'name',
	};
	const component = mount(<Tag {...props} />);
	it('render correctly Tag component', () => {
		expect(component).toMatchSnapshot();
	});
	it('check prop name with html class', () => {
		expect(component.find('.tag-section').text()).toEqual('name');
	});
	it('check the type of name', () => {
		expect(typeof component.prop('name')).toBe('string');
	});
});
