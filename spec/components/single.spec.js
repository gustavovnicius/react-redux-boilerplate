import React from 'react';
import renderer from 'react-test-renderer';
import App from 'components/App';

describe('App', () => {
  it('renders', () => {
    const tree = renderer.create(React.createElement(App)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
