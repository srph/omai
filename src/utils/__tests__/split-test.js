var src = '../split';
jest.dontMock(src);

describe('Split', function() {
  var split, result;
  beforeEach(function() {
    split = require(src);
  });

  describe('exceptions', function() {
    it('should throw an error if provided arr is not an array', function() {
      spyOn(Array, 'isArray').andReturn(false);
      expect(function() { split('asd') }).toThrow();
      expect(Array.isArray).toHaveBeenCalled();
    });

    it('should throw an error if provided arr is undefined', function() {
      expect(function() { split() }).toThrow();
    });
  });

  it('should by default return 2 arrays (if count / argument[1] was not provided)', function() {
    expect(split([1, 2]).length).toEqual(2);
    expect(split([1, 2])).toEqual([[1], [2]]);
  });

  it('should return 4 arrays', function() {
    result = split([1, 2, 3, 4, 5, 6, 7, 8], 4);
    expect(result.length).toEqual(4);
  });

  it('should group each value according to ([value index] % count)', function() {
    result = split([1, 2, 3, 4, 5, 6, 7, 8], 4);
    expect(result).toEqual([[1, 5], [2, 6], [3, 7], [4, 8]]);
  });
});