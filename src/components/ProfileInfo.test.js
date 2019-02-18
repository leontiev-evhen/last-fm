import React from 'react';
import { shallow } from 'enzyme';
import { ProfileInfo } from './ProfileInfo';

describe('ProfileInfo component', () => {
  const props = {
    profile: {
      name: 'profileName',
      image: [{
        '#text': 'image1',
      }, {
        '#text': 'image2',
      }, {
        '#text': 'image3',
      }, {
        '#text': 'image3',
      }],
      bio: {
        content: 'content...',
      },
      tags: {
        tag: [{
          name: 'tag1'
        }, {
          name: 'tag2'
        }, {
          name: 'tag3'
        }],
      }
    },
  };
  const component = shallow(<ProfileInfo  {...props} />);

  it('render correctly ProfileInfo component', () => {
    expect(component).toMatchSnapshot();
  });
  it('correct profile name', () => {
     expect(component.find('h2').first().text()).toEqual(props.profile.name)
  });
  it('correct Image src', () => {
    expect(component.find('Image').prop('path')).toEqual(props.profile.image[3]['#text']);
  });
  it('correct profile content', () => {
    expect(component.find('.profile-content').prop('dangerouslySetInnerHTML')['__html']).toEqual(props.profile.bio.content);
  });
  it('correct profile tags', () => {
    expect(component.find('Tag')).toHaveLength(props.profile.tags.tag.length);
  });
  describe('Image array size is less than three', () => {
    const nextProps = {
      profile: {
        ...props.profile,
        image: [{
          '#text': 'image1',
        }, {
          '#text': 'image2',
        }, {
          '#text': 'image3',
        }],
      },
    };
    const component = shallow(<ProfileInfo {...nextProps} />);
    it('Image component path is undefined', () => {
      expect(component.find('Image').prop('path')).toEqual(undefined);
    });
  });
});
