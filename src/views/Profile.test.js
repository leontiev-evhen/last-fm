import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('Profile view', () => {
  const props = {
    match: { state: { params: {name: 'name' } } },
  };

  const component = shallow(<Profile {...props} />);

  it('Profile component componentDidMount', () => {
    jest.spyOn(Profile.prototype, 'componentDidMount');
    shallow(<Profile {...props} />);
    expect(Profile.prototype.componentDidMount).toHaveBeenCalled();
  });

  it('render correctly Profile component', () => {
    expect(component).toMatchSnapshot();
  });
});
