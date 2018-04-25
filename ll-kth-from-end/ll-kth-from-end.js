'use strict';

const Node = require('./lib/node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.end = null;
  }
  append(value) {
    const node = new Node(value);

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

  kthFromEnd(k) { 
    let timesThroughLoop = 0;
    
    let currentNode = this.head;

    if (!this.head) {
      throw new Error('__ERROR__ There is no number sequence');
    } 

    while (currentNode.next) {
      timesThroughLoop += 1;
      currentNode = currentNode.next; // .next holds an actual node
    }

    const nodePosition = timesThroughLoop - k;
    currentNode = this.head;

    for (let i = 0; i <= nodePosition - 1; i++) { 
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
};
