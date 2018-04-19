'use strict';

const binarySearch = require('../binary-search');

describe('binary-search.test.js', () => {
  describe('binary-search.search', () => {
    test('binarySearch.search should return 4', () => {
      expect(binarySearch.search([1, 2, 3, 4, 5], 5)).toEqual(4);
    });
    test('binarySearch.search should return -1 if no searchkey is found', () => {
      expect(binarySearch.search([1, 2, 3, 4, 5], 10)).toEqual(-1);
    });
  })
});



