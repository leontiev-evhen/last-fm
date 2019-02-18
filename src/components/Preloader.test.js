import React from 'react';
import { mount } from 'enzyme';
import { Preloader } from './Preloader';

describe('Preloader component', () => {
  const component = mount(<Preloader />);
  it('render correctly Preloader component', () => {
    expect(component).toMatchSnapshot();
  });
});