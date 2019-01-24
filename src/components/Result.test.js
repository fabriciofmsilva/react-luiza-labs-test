import React from 'react';
import { mount } from 'enzyme';
import Result from './Result';

describe('Result', () => {
  let props;
  let mountedResult;
  const result = () => {
    if (!mountedResult) {
      mountedResult = mount(
        <Result {...props} />
      );
    }
    return mountedResult;
  }

  beforeEach(() => {
    props = {
      address: undefined,
      location: undefined,
    };
    mountedResult = undefined;
  });

  it('always renders a div', () => {
    const divs = result().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
