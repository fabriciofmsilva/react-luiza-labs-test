import React from 'react';
import { mount } from 'enzyme';
import Map from './Map';

describe('Map', () => {
  let props;
  let mountedMap;
  const map = () => {
    if (!mountedMap) {
      mountedMap = mount(
        <Map {...props} />
      );
    }
    return mountedMap;
  }

  beforeEach(() => {
    props = {
      location: {
        lat: undefined,
        lng: undefined,
      },
    };
    mountedMap = undefined;
  });

  it('always renders a div', () => {
    const divs = map().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
