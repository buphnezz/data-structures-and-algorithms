'use strict';

const constructor = require('../queue-with-stacks');

describe('queue-with-stacks.test.js', () => {
  describe('#constructor', () => {
    test('#constructor should return null if no stack is found', () => {
      expect(constructor.this.stackOne()).toBeNull();
    });
  });
});
