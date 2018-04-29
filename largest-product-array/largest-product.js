'use strict';

function largestProduct(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const Current = arr[i][j];
      let down;
      let right;

      if (arr[i][j + 1]) {
        down = arr[i][j + 1];
      }
      if (arr[i + 1][j]) {
        right = arr[i + 1][j];
      }
      if (down * Current > sum) {
        sum = down * Current;
      }
      if (right * Current > sum) {
        sum = right * Current;
      }
    }
  }
}
return largestProduct();
