import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';


describe('Home view', () => {
  const props = {
    tracks: [],
    isFetching: false,
    error: '',
    fetchTopTracks: () => {},
  };

  it('Home component componentDidMount', () => {
    jest.spyOn(Home.prototype, 'componentDidMount');
    shallow(<Home {...props} />);
    expect(Home.prototype.componentDidMount).toHaveBeenCalled();
  });
});
