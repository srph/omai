var src = '../InfiniteScroll';
jest.dontMock(src);
var InfiniteScroll = require(src);

describe('Infinite Scroll component', function() {
  var render, React, TestUtils, dummy, body;
  beforeEach(function() {
    dummy = jest.genMockFunction();
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    body = function() { return document.querySelector('html, body'); }
    render = function(options) {
      var {disabled, throttle, callback, threshold, children} = options;
      return TestUtils.renderIntoDocument(
        <InfiniteScroll disabled={disabled}
          throttle={throttle}
          callback={callback}
          threshold={threshold}>
          {children}
        </InfiniteScroll>
      );
    }
  });

  it('should trigger callback when the point has been scrolled', function() {
    var rendered = render({ callback: dummy, children: <div style={{ height: 1000 }}>Hello</div> });
    var _body = body();
    console.log(_body.length);
    expect(dummy.mock.calls.length).toBe(0);
    _body.scrollTop = 1000;
    expect(dummy.mock.calls.length).toBe(1);
  });

  it('should not trigger callback when the promise has not resolved yet', function() {

  });

  it('should not trigger callback when the point has not yet been scrolled', function() {

  })
});