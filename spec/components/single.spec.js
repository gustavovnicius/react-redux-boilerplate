import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'
import App from 'components/App.js';

describe('App', () => {
  it('renders', () => {
    var element = ReactTestUtils.renderIntoDocument(React.createElement('App'));
    expect(element).toBeTruthy();
  });
});
