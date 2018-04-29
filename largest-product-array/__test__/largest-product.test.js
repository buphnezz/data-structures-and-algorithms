'use strict';

const largestProduct = require('../largest-product');

describe('largest-product.test.js', () => {
  describe('productResult.result', () => {
    test('productResult.result should return a -1 if no index value is found', () => {
      expect(largestProduct.result()).toEqual(-1);
    });
    test('productResult.result should not multiply the index value if it is <= the original index value', () => {
      expect(largestProduct.result()).toEqual(-1);
    });
  });
});
