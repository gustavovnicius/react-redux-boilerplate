import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import App from '../../app/components/App.js';

describe('App', () => {
  it('renders', () => {
    var element = TestUtils.renderIntoDocument(React.createElement('App'));
    expect(element).toBeTruthy();
  });
});
