'use strict';

const LinkedList = require('../ll-kth-from-end');

describe('ll-kth-from-end.js', () => {
  test('should find a value at the specified node', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.append(4);
    testList.append(5);
    expect(testList.head.next.next.next.value).toEqual(4); 

    expect(testList.kthFromEnd(4)).toEqual(1);
    expect(testList.kthFromEnd(1)).toEqual(4);
    expect(testList.kthFromEnd(2)).toEqual(3);
  });
});
