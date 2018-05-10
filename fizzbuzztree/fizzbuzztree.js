'use strict';

let stringedPreOrder = '';

const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
    rootNode.value = 'FizzBuzz';
  }
  if (rootNode.value % 3 === 0) {
    rootNode.value = 'Fizz';
  }
  if (rootNode.value % 5 === 0) {
    rootNode.value = 'Buzz';
  }
  stringedPreOrder += `,${rootNode.value}`;
  preOrderTraversal(rootNode.left); 
  preOrderTraversal(rootNode.right);
  return stringedPreOrder.replace(/^,/, '');
};

const fizzBuzzTree = (tree) => {
  if (!tree.root) {
    return undefined;
  }
  return preOrderTraversal(tree.root);
};

export default fizzBuzzTree;
