'use strict';

import Node from '../node';
import BinaryTree from '../binarytree';
import fizzBuzzTree from '../fizzbuzztree';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const fifteen = new Node(15);
const nine = new Node(9);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = fifteen;
seven.right = nine;
fizzBuzzTree(tree.root);

describe('fizzbuzztree.js', () => {
  describe('#fizzBuzzTree', () => {
    test('#fizzBuzzTree, should return Fizz when the value is 3', () => {
      expect(one.right.value).toEqual('Fizz');
    });
  });
  test('#fizzBuzzTree, should return Buzz when the value is 5', () => {
    expect(three.right.value).toEqual('Buzz');
  });
});
test('#fizzBuzzTree, should return FizzBuzz when the value is 15', () => {
  expect(seven.left.value).toEqual('FizzBuzz');
});
