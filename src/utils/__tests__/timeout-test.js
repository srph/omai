var src = '../timeout';
jest.dontMock(src);
jest.dontMock('es6-promise');

var timeout = require(src);
var Promise = require('es6-promise').Promise;
describe('Promisified setTimeout', function() {

  var callback, callbackE, _promise, _pRs, _pRj; // Promise
  beforeEach(function() {
    callback = jest.genMockFunction();
    callbackE = jest.genMockFunction().mockImpl(function() { throw new Error(''); });
    // setTimeout = jest.genMockFunction();

    _promise = {
      rs: function() { return timeout(10000).then(callback); },
      rj: function() { return timeout(10000).then(callbackE); }
    };
  });

  describe('instance / type', function() {
    // In this case, we'll use `resolve` for no reason. We can
    // use `reject`, but fuck it!!!!!! WHY DO I HAVE TO DECIDE
    // AND IT'S TOO TIRING TO TYPE VAR PROMISE = ASDASDPOASD
    // BUT OH WELL I GOT TOO HYPED UP TO TYPE THIS THING LOLOL
    it('should be a promise', function() {
      expect(_promise.rs() instanceof Promise).toBe(true);
    });

    it('should have a `then` method', function() {
      expect(_promise.rs().then).not.toBe(undefined);
    });

    afterEach(function() { 
      jest.runAllTimers();
    })
  });

  it('should wait for throttle before executing callback', function() {
    _promise.rs();
    expect(callback).not.toBeCalled();

    jest.runAllTimers();
    expect(setTimeout.mock.calls.length).toBe(1);
  });

  it('should execute my callback after the provided `throttle`', function() {
    _promise.rs();

    jest.runAllTimers();
  });

  describe('resolve and rejection', function() {
    it('should execute my `catch` after the provided `throttle', function() {
      var p = _promise.rj();
      var flag = false; // Flag whether the `catch` was called

      jest.runAllTimers();

      // Should never execute since .catch should be called
      p.then(function() { expect(false).toBe(true); }) 

      p.catch(function() {
        flag = true;
        expect(flag).toBe(true);
      });
    });

    it('should execute my `success` after the provided `throttle`', function() {
      var p = _promise.rs();
      expect(callback).not.toBeCalled();

      jest.runAllTimers();
      p.then(function() { expect(callback.mock.calls.length).toBe(1); });
    });
  });

  afterEach(function() {
    expect(setTimeout.mock.calls.length).toBe(1);
  });
});