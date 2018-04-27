'use strict';

const origArray = [1, 2, 3, 4];

function reverseAnArray(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const position = array.pop();
    reversedArray.push(position);
  }
  return reversedArray;
}

reverseAnArray(origArray);
