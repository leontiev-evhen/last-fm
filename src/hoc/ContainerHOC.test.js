import React from 'react';
import { shallow } from 'enzyme';
import ContainerHOC from '../hoc/ContainerHOC';

describe('ContainerHOC', () => {
  const Component = () => <h1>Component</h1>;
  const DivContainerHOC = ContainerHOC(Component);
  const props = {
    isFetching: false,
    error: '',
  };
  const component = shallow(<DivContainerHOC {...props} />);
	describe('ContainerHOC Preloader', () => {
    const nextProps = {
      isFetching: true,
      error: '',
    };
    const component = shallow(<DivContainerHOC {...nextProps} />);
		it('show Preloader', () => {
			expect(component.find('Preloader')).toHaveLength(1);
    });
    it('render correctly Preloader component', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('ContainerHOC error', () => {
    const nextProps = {
      isFetching: false,
      error: 'Unknown error',
    };
    const component = shallow(<DivContainerHOC {...nextProps} />);
    it('show error', () => {
      expect(component.find('.error-message').text()).toEqual(nextProps.error);
    });
    it('render correctly error', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('ContainerHOC Component', () => {
    it('show component', () => {
      expect(component.find(Component)).toBeTruthy();
    });
    it('render correctly component', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
