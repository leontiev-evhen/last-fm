import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home view', () => {
	const props = {
		tracks: [],
		isFetching: false,
		error: '',
		fetchTopTracks: jest.fn(),
	};

	const component = shallow(<Home {...props} />);

	it('Home component componentDidMount', () => {
		jest.spyOn(Home.prototype, 'componentDidMount');
		shallow(<Home {...props} />);
		expect(Home.prototype.componentDidMount).toHaveBeenCalled();
	});

	it('render correctly Home component', () => {
		expect(component).toMatchSnapshot();
	});

	describe('Home view  with props of tracks', () => {
		const nextProps = {
			tracks: [
				{
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
			],
			isFetching: false,
			error: '',
			fetchTopTracks: jest.fn(),
		};
		shallow(<Home {...nextProps} />);
		it('function fetchTopTracks should not called', () => {
			expect(nextProps.fetchTopTracks).toHaveBeenCalledTimes(0);
		});
	});
});
