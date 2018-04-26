'use strict';

const LinkedList = require('../ll-merge/ll-merge');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });
});
