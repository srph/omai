var src = '../InfiniteScroll';
jest.dontMock(src);
var React = require('react/addons');
var TestUtils = React.TestUtils;
var InfiniteScroll = require(src);

describe('Infinite Scroll component', function() {
  var render;
  beforeEach(function() {
    render = function(options) {
      var {disabled, throttle, callback, threshold} = options;

      return TestUtils.renderIntoDocument(
        <InfiniteScroll disabled={disabled}
          throttle={throttle}
          callback={callback}
          threshold={threshold}>
          {this.props.children}
        </InfiniteScroll>
      );
    );
  });
});