import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from 'components/App.js';

describe('App', () => {
  it('renders', () => {
    var element = TestUtils.renderIntoDocument(React.createElement('App'));
    expect(element).toBeTruthy();
  });
});
