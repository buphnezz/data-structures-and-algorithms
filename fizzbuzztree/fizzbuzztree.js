'use strict';

const fizzBuzzTree = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
    rootNode.value = 'FizzBuzz';
  } else if (rootNode.value % 3 === 0) {
    rootNode.value = 'Fizz';
  } else if (rootNode.value % 5 === 0) {
    rootNode.value = 'Buzz';
  } 

  fizzBuzzTree(rootNode.left); 
  fizzBuzzTree(rootNode.right);
  return undefined;
};

export default fizzBuzzTree;
