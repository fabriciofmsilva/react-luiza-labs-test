import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <App {...props} />
      );
    }
    return mountedApp;
  }

  beforeEach(() => {
    props = {
      address: undefined,
      location: undefined,
    };
    mountedApp = undefined;
  });

  it('always renders a div', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
