'use strict';

let maximumValue = null;

function findMaxValue(rootNode) {
  if (!rootNode) return null;

  if (rootNode.value > maximumValue) {
    maximumValue = rootNode.value;
  }

  findMaxValue(rootNode.left);
  findMaxValue(rootNode.right);

  return maximumValue;
}

export default findMaxValue;

