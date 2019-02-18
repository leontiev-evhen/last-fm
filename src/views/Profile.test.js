import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('Profile view', () => {
  const props = {
    match: { state: { params: {name: 'name' } } },
  };

  it('Profile component componentDidMount', () => {
    jest.spyOn(Profile.prototype, 'componentDidMount');
    shallow(<Profile {...props} />);
    expect(Profile.prototype.componentDidMount).toHaveBeenCalled();
  });
});
