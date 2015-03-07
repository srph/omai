var src = '../WorkList';
jest.dontMock(src);

var Promise = require('es6-promise').Promise;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils
var WorkList = require(src);

describe('WorkList component', function() {
  it('should paginate to the next page');
  it('should be disabled when current page is equal to the # of pages');
});