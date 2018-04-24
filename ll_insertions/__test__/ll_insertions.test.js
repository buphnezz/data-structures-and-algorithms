'use strict';

const LinkedList = require('../ll_insertions');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });
  test('It should input a new node value after the first node value', () => {
    const testList = new LinkedList();
    testList.insertAfter(5);
    expect(testList.head.value).toEqual(5);
  });
  test('It should input a new node value before the first node value', () => {
    const testList = new LinkedList();
    testList.insertBefore(5);
    expect(testList.head.value).toEqual(5);
  });
  test('It should input a new node value at the end of the linked list', () => {
    const testList = new LinkedList();
    testList.append(5);
    expect(testList.head.value).toEqual(5);
  });
});

