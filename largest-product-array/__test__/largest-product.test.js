'use strict';

const productResult = module.exports = {};
//I attempted to make a test array and write my tests first this time...much to learn
let testArray = [[1, 2, 3], [3, 3, 4], [1, 3, 2]];
let testHighestProduct = 0;
let resultsHolder = 0;
let N = 0;
let N2 = 0;

productResult.result = (testArray) => {
  for (let i = 0; i < testArray.length; i++) {
    if (testArray[N][N2] >= testArray[N + 1][N2 + 1]) {
      resultsHolder = testArray[N][N2] * testArray[N + 1][N2 + 1];
      if (resultsHolder >= testHighestProduct) {
      testHighestProduct = resultsHolder;
      }

      return testHighestProduct;
    }
  }
};

describe('largest-product.test.js', () => {
  describe('productResult.result',() => {
    test('productResult.result should return a -1 if no index value is found', () => {
      expect(productResult.result()).toEqual(-1);
    });
    test('productResult.result should not multiply the index value if it is <= the original index value', () => {
      expect(productResult.result(testArray)).toEqual(-1);
    });
  })
});

//This was the original code I wanted to write...then decided to try my tests first.  I'm saving the below code for reference so I do not forget.

// const largestProduct = require('../largest-product');
// describe('largest-product.test.js', () => {
//   describe('testResults',() => {
//     test('largest-array.result should return a -1 if no index value is found', () => {
//       expect(largestProduct.result('')).toEqual(-1);
//     });
//     test('largest-array.result should not multiply the index value if it is <= the original ', () => {
//       expect(largestProduct.result('')).toEqual(-1);
//     });
//   })
// });
