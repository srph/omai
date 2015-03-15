var src = '../Img.jsx';
jest.dontMock(src);

describe('Img component', function() {
  var React, TestUtils, Img;
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Img = require(src);
  });

  it('should remove itself when an error occurs while loading the image', function() {
    // rendered = TestUtils.renderIntoDocument(<Img />);
  });

  it('should not execute anything when the image loads successfully', function() {
    var rendered = TestUtils.renderIntoDocument(<Img />);
    expect(rendered.getDOMNode().getElementsByTagName('img')).not.toBe(undefined);
  });

  it('should not allow the `onError` prop to be overridden', function() {
    var dummy = jest.genMockFunction();
    var rendered = TestUtils.renderIntoDocument(<Img onError={dummy} />);

    expect(rendered.getDOMNode().getElementsByTagName('img')[0].getAttribute('onError')).not.toBe(dummy);
    expect(dummy.mock.calls.length).toBe(0);
  });

  it('should put all props to the img', function() {
    var rendered = TestUtils.renderIntoDocument(<Img src="x.jpg" alt="x" />);
    var img = rendered.getDOMNode().getElementsByTagName('img')[0];

    expect(img.getAttribute('src')).not.toBe(undefined);
    expect(img.getAttribute('alt')).not.toBe(undefined);
  });
});