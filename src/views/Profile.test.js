import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('Profile view', () => {
	const props = {
		artist: {},
		isFetching: true,
		error: '',
		match: {},
	};

	describe('News container initial', () => {
		const newsContainer = shallow(<Profile {...props} />);
		console.log(newsContainer.debug());
		it('not render <NewsList />', () => {
			expect(newsContainer.find('containerHOC')).toHaveLength(1);
		});
	});
});
