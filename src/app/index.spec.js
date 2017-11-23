import React from 'react';

import App from './index';

it('renders without crashing', () => {
  expect(shallow(<App />)).toBeDefined();
});
