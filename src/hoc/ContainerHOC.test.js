import React from 'react';
import { shallow } from 'enzyme';
import ContainerHOC from '../hoc/ContainerHOC';

describe('ContainerHOC', () => {


  const Component = () => <h1>Component</h1>;
  const DivContainerHOC = ContainerHOC(Component);

	describe('ContainerHOC Preloader', () => {
    const props = {
      isFetching: true,
      error: '',
    };
    const component = shallow(
      <DivContainerHOC {...props} />
      );
		it('show Preloader', () => {
			expect(component.find('Preloader')).toHaveLength(1);
    });
    
    describe('ContainerHOC error', () => {
      const nextProps = {
        isFetching: false,
        error: 'Unknown error',
      };
      const component = shallow(
        <DivContainerHOC {...nextProps} />
        );
      	it('show error', () => {
          expect(component.find('.error-message').text()).toEqual(nextProps.error);
        });
    });
    describe('ContainerHOC Component', () => {
      it('show component', () => {
        expect(component.find(Component)).toBeTruthy();
      });
    });
	});
});
