import React from 'react';
import { shallow } from 'enzyme';
import { ListItem } from './ListItem';
import { Link } from 'react-router-dom';

describe('ListItem component', () => {
	const props = {
		track: {
			name: 'track',
			image: [
				{
					'#text': 'image1',
				},
				{
					'#text': 'image2',
				},
				{
					'#text': 'image3',
				},
				{
					'#text': 'image3',
				},
			],
			artist: {
				name: 'artist',
			},
		},
	};
	const component = shallow(<ListItem {...props} />);

	it('render correctly ListItem component', () => {
		expect(component).toMatchSnapshot();
	});
	it('correct track name', () => {
		expect(component.find('.track-name').text()).toEqual(props.track.name);
	});
	it('correct Link to', () => {
		expect(component.find('Link').prop('to')).toEqual(
			`/artist/${props.track.artist.name}`
		);
	});
	it('correct Link', () => {
		expect(component.find('Link')).toHaveLength(1);
	});
	it('Link contains correct value', () => {
		expect(
			component.contains(
				<Link to={`/artist/${props.track.artist.name}`}>
					{props.track.artist.name}
				</Link>
			)
		).toBeTruthy();
	});
	it('correct Image src', () => {
		expect(component.find('Image').prop('path')).toEqual(
			props.track.image[3]['#text']
		);
	});
	describe('Image array size is less than three', () => {
		const nextProps = {
			track: {
				...props.track,
				image: [
					{
						'#text': 'image1',
					},
					{
						'#text': 'image2',
					},
					{
						'#text': 'image3',
					},
				],
			},
		};
		const component = shallow(<ListItem {...nextProps} />);
		it('Image component path is undefined', () => {
			expect(component.find('Image').prop('path')).toEqual(undefined);
		});
	});
});
