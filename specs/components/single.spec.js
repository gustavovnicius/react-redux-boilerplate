var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Hello = require('../../app/js/components/hello.jsx');

describe('Hello', () => {
  it('renders', () => {
    var element = TestUtils.renderIntoDocument(React.createElement('Hello'));
    expect(element).toBeTruthy();
  });
});
