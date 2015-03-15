var src = '../Img.jsx';
jest.dontMock(src);

describe('Img component', function() {
  var React, TestUtils, Img, wtf;
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Img = require(src);
  });

  describe('self-removal', function() {
    it('should remove itself when an the image loads with an error', function() {
      var rendered = TestUtils.renderIntoDocument(<Img />);
      var img = TestUtils.findRenderedDOMComponentWithTag(rendered, 'img');
      TestUtils.Simulate.error(img);

      // When no results come out of `findRenderedDOMComponentWithTag`,
      // it throws an error 'Did not find exactly one match for tag:img'
      expect(function() {
        TestUtils.findRenderedDOMComponentWithTag(rendered, 'img')
      }).toThrow('Did not find exactly one match for tag:img');
      expect(rendered.state.error).toBe(true);
    });

    it('should not remove itself when the image loads successfully', function() {
      var rendered = TestUtils.renderIntoDocument(<Img />);
      var img = TestUtils.findRenderedDOMComponentWithTag(rendered, 'img');

      // When no results come out of `findRenderedDOMComponentWithTag`,
      // it throws an error 'Did not find exactly one match for tag:img'
      expect(function() { img }).not.toThrow();
      expect(rendered.state.error).toBe(false);
    });
  });

  describe('passing props', function() {
    it('should not allow the `onError` default prop to be overridden', function() {
      var dummy = jest.genMockFunction();
      var rendered = TestUtils.renderIntoDocument(<Img onError={dummy} />);
      var img = TestUtils.findRenderedDOMComponentWithTag(rendered, 'img');

      TestUtils.Simulate.error(img);
      expect(dummy.mock.calls.length).toBe(0);
    });

    it('should put all props to the img', function() {
      var rendered = TestUtils.renderIntoDocument(<Img src="x.jpg" alt="x" />);
      var img = TestUtils.findRenderedDOMComponentWithTag(rendered, 'img');
      var node = img.getDOMNode();

      var _src = node.getAttribute('src');
      var _alt = node.getAttribute('alt');

      expect(_src).not.toBe(undefined);
      expect(_src).toBe('x.jpg');

      expect(_alt).not.toBe(undefined);
      expect(_alt).toBe('x');
    });
  });
});