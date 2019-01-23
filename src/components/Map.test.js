import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const location = { lat: 1, lng: 1 };
  ReactDOM.render(<Map location={location} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
