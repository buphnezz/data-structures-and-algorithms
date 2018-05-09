'use strict';

const breadthFirstTraversal = require('../breadth-first-traversal');

describe('breadth-first-traversal.test.js', () => {
  describe('breadth-first-traversal.search', () => {
    test('breadthFirstTraversal should return 4', () => {
      expect(breadthFirstTraversal.search([1, 2, 3, 4, 5], 5)).toEqual(4);
    });
    test('breadthFirstTraversal.search should return -1 if no searchkey is found', () => {
      expect(breadthFirstTraversal.search([1, 2, 3, 4, 5], 10)).toEqual(-1);
    });
  });
});
