'use strict';

const binarySearch = module.exports = {};

binarySearch.search = (array, searchKey) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchKey) {
      return i;
    }
  }
  return -1;
};