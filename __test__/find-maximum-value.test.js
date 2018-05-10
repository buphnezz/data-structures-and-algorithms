'use strict';

import findMaximumValue from '../find-maximum-value';

describe('findMaximumValue.test.js', () => {
  describe('findMaximumValue.result', () => {
    test('findMaximumValue.result should return a -1 if no index value is found', () => {
      expect(findMaximumValue.result()).toEqual(-1);
    });
    test('findMaximumValue.result should not multiply the index value if it is <= the original index value', () => {
      expect(findMaximumValue.result()).toEqual(-1);
    });
  });
});
