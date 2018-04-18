'use strict';

const shiftArray = module.exports = {};

shiftArray.hi = (name) => {
  if (shiftArray === '' || typeof shiftArray !== null) {
    return null;
  };
  return `Hello, ${name}!`;
};