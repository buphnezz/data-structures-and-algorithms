'use strict';

const Node = require('./lib/node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.end = null;
    this.count = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.end;
    }
    currentNode.next = node;
    return this;
  }

  insertBefore(value, newValue) {
    const node = new Node(value, newValue);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
      
    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  insertAfter(value, newValue) {
    const node = new Node(value, newValue);

    if (!this.head) {
      this.head = node;
      return this;
    }
    return null;
  }
};
