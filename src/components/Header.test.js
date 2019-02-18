import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header component', () => {
  const component = shallow(<Header />);
  it('render correctly Header component', () => {
    expect(component).toMatchSnapshot();
  });
  it('render correctly Header component and Link', () => {
    expect(component.find('Link')).toHaveLength(1);
  });
});