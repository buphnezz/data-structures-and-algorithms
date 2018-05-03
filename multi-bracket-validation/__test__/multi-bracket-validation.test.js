'use strict';

const multiBracket = require('../multi-bracket-validation');

describe('multi-bracket-validation.test.js', () => {
  describe('#arrayResult', () => {
    test('#arrayResult should return a -1 if no index value is found', () => {
      expect(multiBracket.result()).toEqual(-1);
    });
    test('#array.result should not multiply the index value if it is <= the original index value', () => {
      expect(multiBracket.result()).toEqual(-1);
    });
  });
});
