import React from 'react';
import { mount } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  let props;
  let mountedSearch;
  const search = () => {
    if (!mountedSearch) {
      mountedSearch = mount(
        <Search {...props} />
      );
    }
    return mountedSearch;
  }

  beforeEach(() => {
    props = {
      handleSearch: undefined,
    };
    mountedSearch = undefined;
  });

  it('always renders a div', () => {
    const divs = search().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
