'use strict';

import fizzBuzzTree from '../fizzbuzztree';

describe('fizzbuzztree.js', () => {
  describe('#fizzBuzzTree', () => {
    test('#fizzBuzzTree, should return Fizz when the value is 3', () => {
      expect(fizzBuzzTree(3)).toEqual('Fizz');
    });
  });
});
