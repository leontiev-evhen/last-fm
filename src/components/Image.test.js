import React from 'react';
import { mount } from 'enzyme';
import { Image } from './Image';

describe('Image component', () => {
	const props = {
		path: 'path',
	};
	const component = mount(<Image {...props} />);
	it('render correctly Tag component', () => {
		expect(component).toMatchSnapshot();
	});
	it('component has img tag', () => {
		expect(component.find('img')).toHaveLength(1);
	});
	it('check the type of path', () => {
		expect(typeof component.prop('path')).toBe('string');
	});

	describe('Image component has undefined property', () => {
		const nextProps = {
			path: undefined,
		};
		const defaultPathImg = 'imagenotfound.png';
		const component = mount(<Image {...nextProps} />);

		it('component has default image', () => {
			expect(component.find('img').prop('src')).toEqual(defaultPathImg);
		});
	});
});
